import * as React from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { images } from "@/shared/images";

export function MobileNavigation() {
  const t = useTranslations("common");

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between flex-row">
          <Image
            src={images.logo}
            width={120}
            height={120}
            alt="Alfa Exchange Logo"
            className="w-24 md:w-36"
          />
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="flex flex-col justify-center h-full px-4">
          <Link href={"/"} className="w-full py-3 hover:bg-gray-100 rounded-lg">
            {t("home")}
          </Link>

          <Accordion type="single" collapsible>
            {/* About Accordion */}
            <AccordionItem className="border-b-0" value="about">
              <AccordionTrigger className="w-full py-3 text-base hover:bg-gray-100 rounded-lg">
                {t("about")}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col pl-4">
                  <Link
                    href="/vision-and-mission"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("mission")}
                  </Link>
                  <Link
                    href="/management"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("management")}
                  </Link>
                  <Link
                    href="/what-we-do"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("what-we-do")}
                  </Link>
                  <Link
                    href="/corporate-profile"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("profile")}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Services Accordion */}
            <AccordionItem className="border-b-0" value="services">
              <AccordionTrigger className="w-full py-3 text-base hover:bg-gray-100 rounded-lg">
                {t("services")}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col pl-4">
                  <Link
                    href="/foreign-exchange"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("forign")}
                  </Link>
                  <Link
                    href="/home-remittance"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("remit")}
                  </Link>
                  <Link
                    href="/commercial-remittance"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                {t("commercial")}
                  </Link>
                  <Link
                    href="/docs/fcy.pdf"
                    target="_blank"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("kff")}
                  </Link>
                  <Link
                    href="/docs/remit.pdf"
                    target="_blank"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("kft")}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Contact Accordion */}
            <AccordionItem className="border-b-0" value="contact">
              <AccordionTrigger className="w-full py-3 text-base hover:bg-gray-100 rounded-lg">
                {t("contact")}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col pl-4">
                  <Link
                    href="/"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("contact")}
                  </Link>
                  <Link
                    href="/complaints-and-feedbacks"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("conplaints")}
                  </Link>
                  <Link
                    href="/"
                    className="w-full py-2 hover:bg-gray-100 rounded-lg text-sm"
                  >
                    {t("survey")}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href={"/news-and-announcement"} className="w-full py-3 hover:bg-gray-100 rounded-lg">
            {t("news")}
          </Link>
          {/* <Link href={"/https://www.alfaexchange.org/RATE/Currency_form.aspx"} className="w-full py-3 hover:bg-gray-100 rounded-lg">
            {t("exchange")}
          </Link> */}
        </div>

        <DrawerFooter>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2 text-sm">
              <Mail size={18} />
              <span>info@alfaexchange.com</span>
            </p>
            <p className="flex items-center gap-2 text-sm mb-6">
              <Phone size={18} />
              <span>+971 4 2340777</span>
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={images.insta}
                width={18}
                height={18}
                alt="Instagram"
              />
              <Image src={images.fb} width={18} height={18} alt="Facebook" />
              <Image
                src={images.whatsapp}
                width={18}
                height={18}
                alt="WhatsApp"
              />
              <Image
                src={images.youtube}
                width={18}
                height={18}
                alt="YouTube"
              />
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
