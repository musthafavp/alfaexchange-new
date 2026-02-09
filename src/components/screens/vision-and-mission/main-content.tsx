import { Button } from "@/components/ui/button";
import { images } from "@/shared/images";
import { MoveUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

const MainContent = (props: Props) => {
  const t = useTranslations("mission");
  const common = useTranslations("home");

  const locale = useLocale();
  return (
    <section className="container flex items-center flex-col lg:flex-row relative my-12 z-[-1]">
      <Image
        src={images.decor}
        width={0}
        height={0}
        alt="decor"
        className={`absolute ${locale === "ar" ? "left-0" : "right-0"}`}
      />

      <div className="flex-[.9]">
        <h1 className="text-4xl font-bold text-darl-blue mb-4 max-w-100 leading-12">
          {t("title")}
        </h1>
        <p className="text-lg font-semibold mb-4 text-justify ">
          {t("sub-one")}
        </p>
        <p className="text-lg font-semibold mb-4  text-justify">
          {t("sub-two")}
        </p>
        <p className="text-text-faded text-justify font-medium mb-5">
          {t("description")}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 px-4 md:px-0">
          <Button
            className="rounded-full has-[>svg]:p-6 w-full md:w-auto"
            variant={"primary"}
          >
            {common("btn-text-one")} <MoveUpRight />
          </Button>
          <Button
            className="rounded-full p-6 shadow-md bg-white w-full md:w-auto"
            variant={"ghost"}
          >
            {common("btn-text-two")}{" "}
            <Image width={20} height={20} alt="boc" src={images.box} />
          </Button>
        </div>
      </div>
      <div className="flex-[.6]"></div>
    </section>
  );
};

export default MainContent;
