import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import Image from 'next/image'
import { images } from '@/shared/images'

type Props = {}

function TextToSpeech({}: Props) {
  return (
    <div className='fixed bg-light-gray z-20 left-0 top-[20%] p-2 rounded-e-md shadow-md'>

    
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Image src={images.text_to_speech} width={0} height={0} alt='text' className='w-8 '/>
      </TooltipTrigger>
      <TooltipContent className='text-base' align='center'  side='left'>
        <p>Select any text and click on the icon to listen!</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  </div>
  )
}

export default TextToSpeech