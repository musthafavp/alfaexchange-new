import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import { images } from "@/shared/images";
import { Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <Card className=" bg-bg-faded-blue group hover:bg-violote hover:text-white transition-all">
      <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
        <Quote  className="mb-5"/>
        <p className="text-center max-w-40 font-light leading-5 mb-8 text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <Image src={images.avtr_1} width={96} height={96} alt="avtr" className=" rounded-full overflow-hidden mb-6" />
        <h2 className="font-semibold mb-1">Michael Andrew</h2>
        <p className="font-light text-text-faded group-hover:text-white">CEO Apple Inc.</p>
      </CardContent>
    </Card>
  );
};
const QandA = () => {
      const t = useTranslations('home')
  
  return (
    <section className=" md:py-12 mb-16">
      <div className="container">
        <div className="flex flex-col items-center  mb-10">
          <h1 className="text-5xl font-semibold text-dark-blue text-center mb-6">
          {t('review')}
          </h1>
          <p className="text-center max-w-200 font-light">
          {t('review-description')}
          </p>
        </div>

        <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <TestimonialCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
           
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default QandA;
