import { Button } from "@/components/ui/button";
import { images } from "@/shared/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {};

const MainContent = (props: Props) => {
  const t = useTranslations("forign-exchange");
  const common = useTranslations("home");

  return (
    <div className="container py-12">
      <div className="flex items-center  gap-6 md:gap-12 flex-col-reverse lg:flex-row ">
        <div className="flex-1">
          <h1 className=" text-3xl md:text-4xl font-bold text-darl-blue mb-4 md:mb-7  md:leading-12">
            {common("forign")}
          </h1>
          <p className="text-text-faded  font-medium mb-4 md:mb-7">
            {common("forign-description")}
          </p>
          {/* <Button className="rounded-full p-6 shadow-md bg-white w-full md:w-auto" variant={'ghost'}>
        {common('btn-text-two')} <Image width={20} height={20} alt="boc" src={images.box}/>
        </Button> */}
      
        </div>
        <div className="lg:flex-[.8] flex-1 rounded-3xl overflow-hidden">
          <Image
            src={images.what_we_do_one}
            width={0}
            height={0}
            alt="what we do one"
            className="w-full md:h-120 object-cover"
          />
        </div>
      </div>
       
     
    </div>
  );
};

export default MainContent;
