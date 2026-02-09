'use client';

import React from "react";
import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";

type Props = {};

export default function MainContent({}: Props) {
  const t = useTranslations("contact");

  return (
    <div className="container my-12">
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Office 1 */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{t("corporateOffice1.title")}</h2>
          <p className="text-sm font-normal text-text-faded mb-6">
            {t("corporateOffice1.address")}
          </p>
          <p className="font-semibold mb-1">{t("corporateOffice1.tel")}</p>
          <p className="font-semibold mb-1">{t("corporateOffice1.fax")}</p>
          <p className="font-semibold text-red-600">{t("corporateOffice1.email")}</p>
        </div>

        {/* Office 2 */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{t("corporateOffice2.title")}</h2>
          <p className="text-sm font-normal text-text-faded mb-6">
            {t("corporateOffice2.address")}
          </p>
          <p className="font-semibold mb-1">{t("corporateOffice2.tel")}</p>
          <p className="font-semibold mb-1">{t("corporateOffice2.fax")}</p>
        </div>

        {/* Opening Hours */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{t("hours.title")}</h2>
          <p className="text-sm font-normal text-text-faded mb-2">{t("hours.weekdays")}</p>
          <p className="text-sm font-normal text-text-faded mb-6">{t("hours.friday")}</p>
          <h2 className="text-lg font-semibold mb-2">{t("customer.title")}</h2>
          <p className="text-sm font-normal text-text-faded mb-6">{t("customer.tel")}</p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
