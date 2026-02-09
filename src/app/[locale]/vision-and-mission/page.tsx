import CommonHeader from "@/components/others/common-header";
import MainContent from "@/components/screens/vision-and-mission/main-content";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const t = useTranslations('common')
  return (
    <section className="w-full">
      <CommonHeader title={t('mission')} />
      <MainContent />
    </section>
  );
};

export default page;
