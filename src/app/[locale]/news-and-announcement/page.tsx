import CommonHeader from '@/components/others/common-header';
import MainContent from '@/components/screens/news/MainContent';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function page({}: Props) {
          const t = useTranslations("common");
    
  return (
    <div>
                <CommonHeader title={t('news')}/>
                <MainContent/>

    </div>
  )
}