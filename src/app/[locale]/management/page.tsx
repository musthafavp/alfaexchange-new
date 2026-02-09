import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/management/main-content';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {}

const page = (props: Props) => {
      const t = useTranslations("management");
    
  return (
    <section>
        <CommonHeader title={t('management')} />
        <MainContent/>
    </section>
  )
}

export default page