import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CircleCheckBig,
  CircleDollarSign,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface CardProps {
  data: {
    title: string;
    description: string;
    img: any;
  };
}

const WhyChoose = () => {
  const t = useTranslations("home");

  const data = [
    {
      title: t("forign"),
      description: t("forign-description"),
      img: ShieldCheck,
    },
    {
      title: t("remit"),
      description: t("remit-description"),
      img: CircleDollarSign,
    },
    {
      title: t("trust"),
      description: t("trust-description"),
      img: CircleCheckBig,
    },
   
  ];
  return (
    <section className="bg-[url(/images/service_bg.jpg)] relative bg-center bg-cover  overflow-hidden my-16">
      <div className="absolute top-0 leading-0 w-full h-full bg-black/40">

      </div>
      <div className="container bg-left bg-contain relative gap-8 flex flex-col lg:flex-row items-center my-18 justify-around lg:px-22">
        
        <div className=" max-w-[400px] xl:max-w-[500px]   relative z-10  p-6  ">
          <h2 className="xl:text-5xl text-4xl text-white mb-3 font-bold xl:leading-14">
            {t("forex")}
          </h2>
          <p className="text-white font-medium">{t("forex-description")}</p>
        </div>
       
        <Accordion defaultValue="0" type="single" className="relative w-full  z-10" collapsible defaultChecked>
          {data?.map((item,index) => {
            return (
              <AccordionItem  className="md:w-150 w-full mx-auto bg-white  data-[state=open]:bg-violote  data-[state=open]:text-white p-6 my-4 rounded-md" value={`${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <item.img size={30}  />
                    <h2 className="text-xl font-semibold ">{item.title}</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2 text-base">{item.description}</p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default WhyChoose;
