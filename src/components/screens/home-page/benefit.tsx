'use client'
import { Button } from "@/components/ui/button";
import { images } from "@/shared/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const BenefitCard = ({ data }: any) => {
  const [expanded, setExpanded] = useState(false);
  const t = useTranslations("home");

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  // Shorten the description if not expanded
  const shortDescription = data?.description?.substring(0, 200) + (data?.description?.length > 200 ? "..." : "");

  return (
    <div>
      <Image
        src={data?.img}
        className="h-56 overflow-hidden w-full object-cover mb-3"
        width={0}
        height={0}
        alt="benefit"
      />
      <h2 className="text-lg font-semibold mb-3">{data?.title}</h2>
      <p className="text-sm text-justify text-text-faded max-w-[90%]">
        {expanded ? data?.description : shortDescription}
       
      </p>
      {data?.description?.length > 200 && (
          <Button 
            onClick={toggleReadMore} 
            variant={'primary'}
            className=" font-medium cursor-pointer hover:underline rounded-full mt-3 "
          >
            {expanded ? t('read-less') : t('read-more')}
          </Button>
        )}
    </div>
  );
};

const Benefit = () => {
  const t = useTranslations("home");
  const data = [
    {
      title: t("benefit-one-title"),
      description: t("benefit-one-description"),
      img: images.benefit_one,
    },
    {
      title: t("benefit-two-title"),
      description: t("benefit-two-description"),
      img: images.benefit_two,
    },
    {
      title: t("benefit-three-title"),
      description: t("benefit-three-description"),
      img: images.benefit_three,
    },
    {
      title: t("benefit-four-title"),
      description: t("benefit-four-description"),
      img: images.benefit_four,
    },
  ];
  return (
    <section className="my-12 container ">
      <div className="flex-1 px-4 md:px-0 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center lg:text-4xl max-w-120 lg:leading-11 text-darl-blue font-bold mb-6">
          {t("benefit")}
        </h1>
        
        <div className="grid md:grid-cols-2 gap-x-2 gap-y-8">
          {data?.map((item, index) => {
            return <BenefitCard key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefit;