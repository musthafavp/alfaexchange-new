"use client";

import { Button } from "@/components/ui/button";
import { images } from "@/shared/images";
import { MoveUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import Graph from "./graph";

const Hero = () => {
  const t = useTranslations("home");
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  // Get the full description from translations
  const fullDescription = t("hero-description");
  // Create shortened version for collapsed state (first 300 characters)
  const shortDescription =
    fullDescription.substring(0, 350) +
    (fullDescription.length > 350 ? "..." : "");

  return (
    <>
      <section className="mx-6 lg:mx-12 overflow-hidden h-auto md:h-170 relative rounded-xl p-6 md:p-12">
        <div className="md:container h-full">
          <span className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-black/80 to-gray-50/0 z-10"></span>
          <Image
            src={images.hero}
            width={0}
            height={0}
            alt="hero"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <div className="relative z-20 flex flex-col justify-center h-full ">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-2">
              {t("hero-sub")}
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("hero-main")}
            </h1>
            <p className="text-sm md:text-base font-medium max-w-full md:max-w-200 mb-1 text-white md:px-0">
              {expanded ? fullDescription : shortDescription}
              {fullDescription.length > 350 && (
                <button
                  onClick={toggleReadMore}
                  className="text-white hover:text-blue-300 font-medium ml-1 hover:underline focus:outline-none"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:px-0 mt-5">
              <Link href={"/foreign-exchange"}>
                <Button
                  className="rounded-full has-[>svg]:p-6 w-full md:w-auto"
                  variant={"primary"}
                >
                  {t("btn-text-one")} <MoveUpRight />
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button
                  className="rounded-full p-6 bg-white w-full md:w-auto"
                  variant={"ghost"}
                >
                  {t("btn-text-two")}{" "}
                  <Image width={20} height={20} alt="boc" src={images.box} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <Graph/> */}
    </>
  );
};

export default Hero;
