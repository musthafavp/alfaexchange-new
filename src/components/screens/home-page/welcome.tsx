import { images } from "@/shared/images";
import { useTranslations } from "next-intl";
import Image from "next/image";



const Welcome = () => {
     const t = useTranslations('home')
     const STATS = [
      { value: "15+", label: t('count-one') },
      
    ];
  return (
    <section className="my-12 container flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1  px-4 md:px-0">
        <h1 className="text-3xl lg:text-4xl max-w-full md:max-w-120 lg:leading-10 text-darl-blue font-bold mb-6">
        {t('welcome')}
        </h1>

        <p className="text-base lg:text-lg font-light max-w-full md:max-w-160 mb-8">
        {t('welcome-description')}
        </p>

        <div className="flex  items-center justify-center md:justify-start gap-6 lg:gap-12">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className=" whitespace-nowrap"
            >
              <h1 className="text-3xl lg:text-5xl font-semibold text-darl-blue mb-2">
                {value}
              </h1>
              <p className="text-xs md:text-sm font-bold text-darl-blue/60">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="tablet-lg:flex-[.9] w-full  bg-gray-200 h-100 rounded-xl lg:h-120 relative overflow-hidden">
       
        <Image alt="bg" src={images.alfa_bg} width={0} height={0} className="w-full h-full object-center object-cover"/>
      </div>
    </section>
  );
};

export default Welcome;
