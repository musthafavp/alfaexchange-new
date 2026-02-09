import CommonHeader from '@/components/others/common-header'
import MainContent from '@/components/screens/what-we-do/main-content'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    const t = useTranslations('what-we-do')
  return (
    <section>
        <CommonHeader title={t('what-we-do')} />
        <MainContent/>
    </section>
  )
}

export default page