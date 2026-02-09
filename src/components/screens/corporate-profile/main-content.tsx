import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

const MainContent = (props: Props) => {
  const t = useTranslations("corporate-profile");

  return (
    <div className="container my-12">
      <div className="mb-12">
        <h1 className=" text-3xl md:text-5xl text-center font-bold text-darl-blue mb-4w-full mb-6  md:leading-14">
          {t("section-one-title")}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-3">
              {t("secton-one-content-one-title")}
            </h2>
            <p className="text-text-faded max-w-200 leading-6 font-medium ">
              {t("secton-one-content-one-description")}
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-3">
              {t("secton-one-content-two-title")}
            </h2>
            <p className="text-text-faded max-w-200 leading-6 font-medium ">
              {t("secton-one-content-two-description")}
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-3">
              {t("secton-one-content-three-title")}
            </h2>
            <p className="text-text-faded max-w-200 leading-6 font-medium ">
              {t("secton-one-content-three-description")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center max-w-200  rounded-lg shadow-md bg-white mx-auto">
        <h1 className=" text-3xl text-center font-bold text-darl-blue mb-4w-full mb-6  md:leading-14">
          {t("section-two-title")}
        </h1>

        <div className="flex sm:items-center sm:flex-row flex-col gap-6 p-6 sm:p-12 sm:justify-center ">
          <div >
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-one-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-one-description")}
              </p>
            </div>
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-two-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-two-description")}
              </p>
            </div>
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-three-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-three-description")}
              </p>
            </div>
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-four-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-four-description")}
              </p>
            </div>
          </div>
          <div >
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-five-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-five-description")}
              </p>
            </div>
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-six-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-six-description")}
              </p>
            </div>
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-seven-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-seven-description")}
              </p>
            </div>
            <div className=" mb-2">
              <h2 className="text-lg font-semibold mb-2">
                {t("secton-two-content-eight-title")}
              </h2>
              <p className="text-text-faded max-w-200 text-sm leading-6 font-medium ">
                {t("secton-two-content-eight-description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
