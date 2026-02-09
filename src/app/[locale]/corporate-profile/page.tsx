import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/corporate-profile/main-content'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const t = useTranslations('corporate-profile')
  return (
    <section>
        <CommonHeader title={t('corporate-profile')}/>
        <MainContent/>
    </section>
  )
}

export default page