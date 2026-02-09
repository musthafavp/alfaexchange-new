import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/pravicy/MainContent'
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function page({}: Props) {
    const t = useTranslations('privacy-policy');
    
  return (
    <section>
        <CommonHeader  title={t('title')}/>
        <MainContent/>
    </section>
  )
}