import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/fees/MainContent';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function page({}: Props) {
    const t = useTranslations('fees');
    
  return (
    <section>
        <CommonHeader  title={t('main-title')}/>
        <MainContent/>
    </section>
  )
}