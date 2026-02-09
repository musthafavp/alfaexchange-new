import { Separator } from "@/components/ui/separator";
import { images } from "@/shared/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

const MainContent = (props: Props) => {
  const t = useTranslations("what-we-do");

  return (
    <div className="container my-12">
      <div className="flex items-center  gap-6 md:gap-12 flex-col-reverse lg:flex-row ">
        <div className="flex-1">
          <h1 className=" text-3xl md:text-4xl font-bold text-darl-blue mb-4 md:mb-7 max-w-100 md:leading-12">
            {t("section-one-title")}
          </h1>
          <p className="text-text-faded  font-medium mb-4 md:mb-7">
            {t("section-one-description")}
          </p>
          <p className="text-text-faded  font-medium mb-2">
            {t("section-one-list-title")}
          </p>
          <ul className="list-disc pl-4 font-semibold">
            <li>{t("section-one-list-one")}</li>
            <li>{t("section-one-list-two")}</li>
            <li>{t("section-one-list-three")}</li>
            <li>{t("section-one-list-four")}</li>
          </ul>
        </div>
        <div className="lg:flex-[.8] flex-1 rounded-3xl overflow-hidden">
          <Image
            src={images.what_we_do_one}
            width={0}
            height={0}
            alt="what we do one"
            className="w-full md:h-120 object-cover"
          />
        </div>
      </div>
      <Separator className="my-12"/>
      <div className="flex items-center gap-6 md:gap-12 flex-col lg:flex-row ">
      <div className="lg:flex-[.8] w-full  rounded-3xl overflow-hidden">
          <Image
            src={images.what_we_do_two}
            width={0}
            height={0}
            alt="what we do two"
            className="w-full md:h-120 object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className=" text-3xl md:text-4xl font-bold text-darl-blue mb-4 md:mb-7  md:leading-12">
            {t("section-two-title")}
          </h1>
          <p className="text-text-faded  font-medium mb-4 md:mb-7">
            {t( "section-two-description-one")}
          </p>
         
          <p className="text-text-faded  font-medium ">
            {t(   "section-two-description-two")}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default MainContent;
