import { images } from "@/shared/images";
import Image from "next/image";
import React from "react";

type Props = {
    title:string
};

const CommonHeader = ({title}: Props) => {
  return (
    <div className="mx-6 lg:mx-12 overflow-hidden h-30 md:h-50 relative rounded-md md:rounded-xl p-6 md:p-12">
      <div className="md:container h-full flex items-center justify-center">
        <span className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-black/70 to-gray-50/0 z-10"></span>
        <Image
          src={images.hero}
          width={0}
          height={0}
          alt="hero"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <p className="relative z-10 lg:text-5xl md:text-4xl text-2xl font-bold text-white text-center">{title}</p>
      </div>
    </div>
  );
};

export default CommonHeader;
