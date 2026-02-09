'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Volume2, StopCircle } from 'lucide-react'
import { useLocale } from 'next-intl'

type Position = {
  top: number
  left: number
}

export default function SimpleTalkBack() {
  const [selectedText, setSelectedText] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 })
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const locale = useLocale()
  const isArabic = locale === 'ar'

  // Load system voices (retry if not available yet)
  useEffect(() => {
    const loadVoices = () => {
      const loadedVoices = window.speechSynthesis.getVoices()
      if (loadedVoices.length > 0) {
        setVoices(loadedVoices)
      } else {
        setTimeout(loadVoices, 250)
      }
    }

    if (typeof window !== 'undefined') {
      loadVoices()
      window.speechSynthesis.onvoiceschanged = loadVoices
    }
  }, [])

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle selection
  useEffect(() => {
    const handleSelectionChange = () => {
      const selection = window.getSelection()
      const text = selection?.toString().trim()

      if ( selection && text && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()

        const safeLeft = Math.min(
          rect.left + window.scrollX + rect.width / 2 - 24,
          window.innerWidth - 48
        )

        const safeTop = isMobile
          ? rect.bottom + window.scrollY + 12
          : Math.max(rect.top + window.scrollY - 50, 0)

        setSelectedText(text)
        setPosition({ top: safeTop, left: safeLeft })
        setVisible(true)
      } else {
        setSelectedText('')
        setVisible(false)
        setIsSpeaking(false)
        window.speechSynthesis.cancel()
      }
    }

    const handleTouchEnd = () => {
      setTimeout(() => handleSelectionChange(), 100)
    }

    document.addEventListener('selectionchange', handleSelectionChange)
    document.addEventListener('touchend', handleTouchEnd)
    document.addEventListener('scroll', handleSelectionChange)

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('scroll', handleSelectionChange)
    }
  }, [isMobile])

  // Get best voice (Male Preferred)
  const getHumanVoice = (): SpeechSynthesisVoice | undefined => {
    if (isArabic) {
      return (
        voices.find(v => v.lang.startsWith('ar') && v.name.toLowerCase().includes('male')) ||
        voices.find(v => v.lang.startsWith('ar') && !v.name.toLowerCase().includes('female')) ||
        voices.find(v => v.lang.startsWith('ar')) ||
        voices.find(v => v.name.toLowerCase().includes('arabic')) ||
        voices[0]
      )
    }

    const preferredVoices = [
      'Google UK English Male',
      'Google US English',
      'Microsoft Guy Online (Natural)',
      'Microsoft Ryan Online (Natural)',
      'Microsoft Benjamin Online (Natural)',
    ]

    return (
      voices.find(v => preferredVoices.includes(v.name)) ||
      voices.find(v => v.lang === 'en-US' && v.name.toLowerCase().includes('male')) ||
      voices.find(v => v.lang === 'en-US') ||
      voices[0]
    )
  }

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    } else if (selectedText) {
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(selectedText)
      const preferredVoice = getHumanVoice()

      if (preferredVoice) {
        utterance.voice = preferredVoice
      }

      utterance.rate = 0.95
      utterance.pitch = 1
      utterance.volume = 1
      utterance.onend = () => setIsSpeaking(false)

      window.speechSynthesis.speak(utterance)
      setIsSpeaking(true)
    }
  }

  return (
    <div>
      {visible && (
        <div
          className="absolute z-50 bg-white shadow-lg rounded-full p-1 border transition-opacity duration-200 ease-in-out"
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleSpeech}
            title={isSpeaking ? 'Stop' : 'Play'}
          >
            {isSpeaking ? (
              <StopCircle className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
