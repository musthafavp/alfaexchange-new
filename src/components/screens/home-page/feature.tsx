import { images } from "@/shared/images";
import Image from "next/image";
import React from "react";

interface CardType {
  data: {
    title: string;
    img: any;
    description: string;
  };
}

const FeatureCard = ({ data }: CardType) => {
  return (
    <div className="flex  sm:w-full md:w-70  items-center flex-col justify-center p-3 text-center">
      <Image 
        src={data?.img} 
        width={60} 
        height={60} 
        alt={data?.title} 
        className="mb-3"
      />
      <h2 className="mb-2 font-bold  text-violote">
        {data?.title}
      </h2>
      <p className="text-sm font-light text-text-faded">
        {data.description}
      </p>
    </div>
  );
};

const Feature = () => {
  const data: CardType["data"][] = [
    {
      title: "PREPAID CARDS",
      description: `Travel worldwide with your own personalized, secure and convenient prepaid cards`,
      img: images?.prepaid,
    },
    {
      title: "PAYROLL SERVICES",
      description: `Simplified, cost effective and straightforward payroll service solutions`,
      img: images?.payrol,
    },
    {
      title: "ALFAPAY APP",
      description: `All new mobile application to send money when you want, where you want`,
      img: images?.alfa_pay,
    },
    {
      title: "WESTERN UNION MONEY TRANSFER",
      description: `WU's online remittance platform for secure fund transfer, wherever you are, whenever you need`,
      img: images?.western,
    },
    {
      title: "MONEY TRANSFER",
      description: `Wide range of services for quick and easy money transfer worldwide`,
      img: images?.alfa_pay,
    },
    {
      title: "FOREIGN EXCHANGE",
      description: `Buy and sell foreign currency at the most competitive rates in the market`,
      img: images?.foregn,
    },
    {
      title: "VALUE-ADDED SERVICES",
      description: `Payment solutions catered to your every day needs`,
      img: images?.value,
    },
  ];

  return (
    <div className="container px-4">
      <div className="flex flex-col flex-wrap md:flex-row items-start md:items-end justify-between mb-12 gap-8 md:gap-12">
        <div className="w-full md:w-auto">
          <h3 className="font-normal text-center md:text-left mb-2 text-base md:text-lg">What We Offer?</h3>
          <h1 className="text-3xl md:text-6xl text-center md:text-left font-medium max-w-full md:max-w-190">
            Top Forex Trading Solutions in the United Arab Emirates
          </h1>
        </div>
        <p className="font-normal w-full md:max-w-100 text-base md:text-base text-center md:text-left">
          Alfa Exchange is a top-notch exchange company in the UAE. They were
          one of the first to kick off the currency exchange scene in the
          country.
        </p>
      </div>

      <div className="flex items-baseline mt-16 flex-wrap gap-6 lg:gap-16 justify-center">
        {data?.map((item) => (
          <FeatureCard 
            data={item} 
            key={item?.title} 
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;