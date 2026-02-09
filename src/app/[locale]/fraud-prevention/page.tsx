import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/fraud/main-content'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function page({}: Props) {
            const t = useTranslations('fraud')
    
  return (
    <section>
        
        <CommonHeader title={t('fraud')}/>
<MainContent/>
    </section>
  )
}