import { images } from "@/shared/images";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("common");
  return (
    <footer className=" pt-12 pb-6  bg-bg-blue">
      <div className="container">
        <div className="w-full flex lg:flex-row flex-col items-center lg:items-end justify-between">
          <div className=" flex flex-col items-center lg:items-start">
            <Image
              className="mb-1"
              src={images.logo}
              width={200}
              height={200}
              alt="logo"
            />
            <div className="flex text-darl-blue gap-2 mb-3">
              <MapPin className="hidden lg:inline-block" size={18} />
              <p className="text-sm font-light max-w-70 text-center lg:text-left">
                {t("address")}
              </p>
            </div>
            <div className="flex text-darl-blue gap-2 mb-3">
              <Phone className="hidden lg:inline-block" size={18} />
              <p className="text-sm font-light max-w-70">+971 4 2233302</p>
            </div>
            <div className="flex text-darl-blue gap-2">
              <Mail className="hidden lg:inline-block" size={18} />
              <p className="text-sm font-light max-w-70">
                info@alfaexchange.com
              </p>
            </div>
          </div>
          <div className=" max-w-150   mt-6 lg:mt-0">
            <div className="flex mb-3 justify-center lg:justify-end items-center gap-4">
              <Image
                src={images.insta}
                width={20}
                height={20}
                alt="Instagram"
              />
              <Image src={images.fb} width={20} height={20} alt="Facebook" />
              <Image
                src={images.whatsapp}
                width={20}
                height={20}
                alt="WhatsApp"
              />
              <Image
                src={images.youtube}
                width={20}
                height={20}
                alt="YouTube"
              />
            </div>
            <div className="flex justify-center lg:justify-end flex-wrap items-center flex-col md:flex-row gap-x-4 gap-y-3 ">
              <Link
                href={"/fraud-prevention"}
                className=" font-medium hover:underline text-sm"
              >
                {t("fraud")}
              </Link>
              <Separator
                className="data-[orientation=vertical]:h-3  hidden md:inline data-[orientation=vertical]:w-[2px] bg-foreground/25"
                orientation="vertical"
              />
              <Link
                href={"/terms-and-conditions"}
                className=" font-medium hover:underline text-sm"
              >
                {t("terms")}
              </Link>
              <Separator
                className="data-[orientation=vertical]:h-3  hidden md:inline data-[orientation=vertical]:w-[2px] bg-foreground/25"
                orientation="vertical"
              />

              <Link
                href={"/disclosure-warning"}
                className=" font-medium hover:underline text-sm"
              >
                {t("disclosure")}
              </Link>
              <Separator
                className="data-[orientation=vertical]:h-3  hidden md:inline data-[orientation=vertical]:w-[2px] bg-foreground/25"
                orientation="vertical"
              />

              <Link
                href={"/privacy-policy"}
                className=" font-medium hover:underline text-sm"
              >
                {t("policy")}
              </Link>
              <Separator
                className="data-[orientation=vertical]:h-3  hidden md:inline data-[orientation=vertical]:w-[2px] bg-foreground/25"
                orientation="vertical"
              />

              <Link
                href={"/aml-cft-policies"}
                className=" font-medium hover:underline text-sm"
              >
                {t("amf")}
              </Link>
              <Separator
                className="data-[orientation=vertical]:h-3  hidden md:inline data-[orientation=vertical]:w-[2px] bg-foreground/25"
                orientation="vertical"
              />

              <Link
                href={"/fees-and-charges"}
                className=" font-medium hover:underline text-sm"
              >
                {t("fee")}
              </Link>
              <Separator
                className="data-[orientation=vertical]:h-3  hidden md:inline data-[orientation=vertical]:w-[2px] bg-foreground/25"
                orientation="vertical"
              />

              <Link
                href={"/contact"}
                className=" font-medium hover:underline text-sm"
              >
                {t("support")}
              </Link>

              {/* <div className="flex flex-col items-center lg:items-start">
            <p className="font-bold text-lg text-darl-blue mb-2">{t('social')}</p>
            <p className=" font-light mb-2">{t('twitter')}</p>
            <p className=" font-light mb-2">{t('instagram')}</p>

            <p className=" font-light mb-2">{t('facebook')}</p>
          </div> */}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="font-light text-center">@2025 {t("all-rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
