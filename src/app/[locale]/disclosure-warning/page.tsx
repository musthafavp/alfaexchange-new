import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/disclosure/main-content';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

export default function page({}: Props) {
          const t = useTranslations('disclosure');
    
  return (
    <section>
                <CommonHeader title={t('pageTitle')}/>
<MainContent/>
    </section>
  )
}