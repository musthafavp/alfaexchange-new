import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/foreign-exchange/main-content'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const page = (props: Props) => {
        const t = useTranslations('forign-exchange')
    
  return (
    <section>
        <CommonHeader title={t('forign-exchange')}/>
        <MainContent/>
    </section>
  )
}

export default page