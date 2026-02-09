import CommonHeader from "@/components/others/common-header";
import MainContent from "@/components/screens/complaints-and-feedback/main-content";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const t = useTranslations("complaints");

  return (
    <section>
      <CommonHeader title={t("complaints")} />
      <MainContent />
    </section>
  );
};

export default page;
