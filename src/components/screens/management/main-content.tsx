import { Button } from "@/components/ui/button";
import { images } from "@/shared/images";
import { MoveUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

const MainContent = (props: Props) => {
  const t = useTranslations("management");
 
  return (
    <section className="container flex gap-12 items-center flex-col lg:flex-row relative my-12 z-[-1]">
      

      <div className=" flex-1 lg:flex-[.9]">
        <h1 className=" text-3xl md:text-5xl font-bold text-darl-blue mb-4 max-w-140 md:leading-14">
          {t("title")}
        </h1>
       
        <p className="text-text-faded max-w-200 leading-7 font-medium mb-5">
          {t("description-one")}
        </p>
        <p className="text-text-faded max-w-200 leading-7 font-medium mb-5">
          {t("description-two")}
        </p>
        <p className="font-bold max-w-170 "> {t("address")}</p>
      </div>
      <div className=" flex-1 w-full lg:flex-[.5]">
      <Image
        src={images.management_img}
        width={0}
        height={0}
        alt="decor"
        className={'w-full h-full lg:h-160 object-center'}
      />
      </div>
    </section>
  );
};

export default MainContent;
