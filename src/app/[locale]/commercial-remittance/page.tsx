import CommonHeader from "@/components/others/common-header";
import MainContent from "@/components/screens/commercial-remittance/main-content";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const t = useTranslations("commercial-remittance");
  return (
    <section>
      <CommonHeader title={t("title")} />
      <MainContent />
    </section>
  );
};

export default page;
