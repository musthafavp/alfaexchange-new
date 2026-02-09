import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/survey/main-content';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function page({}: Props) {
      const t = useTranslations("content");
    
  return (
    <section>
        <CommonHeader title={t('main-title')}/>
        <MainContent/>
    </section>
  )
}