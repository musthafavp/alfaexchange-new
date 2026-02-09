import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/home-remittance/main-content'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const page = (props: Props) => {
        const t = useTranslations('home-remittance')
    
  return (
    <section>
        <CommonHeader title={t('home-remittance')}/>
        <MainContent/>
    </section>
  )
}

export default page