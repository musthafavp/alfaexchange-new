import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { images } from "@/shared/images";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: any;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  const t = useTranslations("home");

  return (
    <div className="rounded-2xl bg-white w-full  flex flex-col h-full">
      <div className="mb-4 overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          width={0}
          height={0}
          alt={title}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-darl-blue/70 mb-3">
        <p>Admin</p> <Separator orientation="vertical" />
        <p>July 4, 2025</p> <Separator orientation="vertical" />
        <p>0 Comments</p>
      </div>
      <h2 className="text-lg md:text-xl text-darl-blue font-bold mb-4">
        {title}
      </h2>
      <p className="text-sm md:text-base font-normal flex-grow mb-6">
        {description}
      </p>

      <Link
        href={"/"}
        className="font-semibold text-darl-blue text-sm flex items-center gap-1"
      >
        {" "}
        {t("read-more")}
        <ChevronRight />
      </Link>
    </div>
  );
};

const Services: React.FC = () => {
  const t = useTranslations("home");

  const serviceData = [
    {
      title: "As one of the Top currency exchange companies",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      image: images.exchange,
    },
    {
      title: "we have been offering a plethora of different services.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      image: images.trusted,
    },
    {
      title: "Foreign money exchange",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
      image: images.remit,
    },
  ];

  return (
    <section className="container   p-4 lg:p-8  my-16">
      <div className="flex flex-col lg:flex-row items-start flex-wrap lg:items-end justify-between mb-8 md:mb-12 gap-6 lg:gap-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-darl-blue leading-tight max-w-full lg:max-w-[800px]">
          {t("blog")}
        </h1>
        <Button
          variant={"ghost"}
          className="border border-violote  px-4 py-3 text-violote"
        >
          {t("view-more")}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
