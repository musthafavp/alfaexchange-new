import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const MainContent = (props: Props) => {
  const t = useTranslations("complaints");

  return (
    <div className="container flex gap-12 md:flex-row flex-col items-start my-12">
      <div className="flex-1">
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("content-one-title")}</h2>
          <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("content-one-description")}
          </p>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("content-two-title")}</h2>
          <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("content-two-description")}
          </p>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("content-three-title")}</h2>
          <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("content-three-description")}
          </p>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("content-four-title")}</h2>
          <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("content-four-description")}
          </p>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1 break-all">{t("website")}</h2>
          <h2 className="text-lg font-bold mb-1">{t("call")}</h2>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("location-title")}</h2>
          {/* <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("branch")}
          </p> */}
          <div className="  mt-2 gap-1 max-w-120">
            <p className=" whitespace-nowrap max-w-250 leading-6 font-bold ">
              {t("location-title-two")}
            </p>
            <p className="text-text-faded max-w-250 leading-6 font-medium ">
              {t("location")}
            </p>
          </div>
          <div className="  mt-2 gap-1">
            <p className=" whitespace-nowrap max-w-250 leading-6 font-bold ">
              {t("hours-title")}
            </p>
            <p className="text-text-faded max-w-250 leading-6 font-medium ">
              {t("houres-one")} <br /> {t("houres-two")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-[.3]  bg-white rounded-xl shadow-md p-4">
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("email-title")}</h2>
          <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("email")}
          </p>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-1">{t("phone-title")}</h2>
          <p className="text-text-faded max-w-250 leading-6 font-medium ">
            {t("phone")}
          </p>
        </div>
        <div className=" mb-4">
          <h2 className="text-lg font-bold mb-2">{t("post-title")}</h2>
          <p className=" font-semibold mb-1">{t("post-title-two")}</p>
          <p className="text-text-faded mb-2 max-w-250 leading-6 font-medium ">
            {t("post")}
          </p>
          <p className="text-text-faded text-sm max-w-250  font-medium ">
            {t("post-description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
