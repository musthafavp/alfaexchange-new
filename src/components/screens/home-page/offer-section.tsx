import { images } from "@/shared/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const OfferSection = () => {
  const t = useTranslations("home");

  return (
    <div className="container my-10 lg:my-18">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">
        <div className="  flex  h-33 items-center gap-6">
          <div className="p-6 bg-card-bg/40 min-w-24 h-full flex items-center justify-center rounded-xl">
            <Image src={images.clock} width={45} height={45} alt="clock" />
          </div>

          <div className="whitespace-pre-wrap">
            <h1 className="text-sm md:text-2xl font-semibold mb-2">
              {t("hours")}
            </h1>
            <p className="text-xs lg:text-base font-bold text-darl-blue/60 mb-1">
              Sat - Thu: 09 AM - 09.30 PM
            </p>
            <p className="text-xs lg:text-base font-bold text-darl-blue/60 mb-1">
              Friday: 09 AM - 01 PM
            </p>
            <p className="text-xs lg:text-base font-bold text-darl-blue/60">
              After Prayer: 03 PM - 09 PM
            </p>
          </div>
        </div>
        <div className="  flex  h-33 items-center gap-6">
          <div className="p-6 bg-card-bg/40 h-full  min-w-24 flex items-center justify-center rounded-xl">
            <Image src={images.location} width={30} height={30} alt="clock" />
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-semibold mb-2">
              {t("location")}
            </h1>
            <p className="text-sm lg:text-base whitespace-nowrap font-bold text-darl-blue/60 mb-1">
              Dubai
            </p>
            <p className="text-sm lg:text-base font-bold text-darl-blue/60 mb-1">
              201, Naif Building, Sabkha Road,
            </p>
            <p className="text-sm lg:text-base whitespace-nowrap font-bold text-darl-blue/60">
              Deira Dubai
            </p>
          </div>
        </div>
        <div className="  flex  h-33 items-center gap-6">
          <div className="p-6 bg-card-bg/40 h-full   min-w-24 flex items-center justify-center rounded-xl">
            <Image src={images.call} width={30} height={30} alt="clock" />
          </div>

          <div className="whitespace-nowrap">
            <h1 className="text-lg md:text-2xl font-semibold mb-2">
              {t("phone")}
            </h1>
            <p className="text-sm md:text-base font-bold text-darl-blue/60 mb-1">
              +971 4 2233302{" "}
            </p>
            <p className="text-sm md:text-base font-bold text-darl-blue/60 mb-1">
              +971 4 2340777{" "}
            </p>
            <p className="text-sm md:text-base font-bold text-darl-blue/60">
              +971 4 2286231{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
