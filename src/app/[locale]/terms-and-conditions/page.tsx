import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/terms/main-content';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function page({}: Props) {
      const t = useTranslations('terms');
    
  return (
    <section>
        <CommonHeader title={t('pageTitle')}/>
        <MainContent/>
    </section>
  )
}