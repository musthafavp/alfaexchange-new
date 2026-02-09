import { useTranslations } from "next-intl";

const FrontLine = () => {
  const t = useTranslations("home");

  return (
    <section className=" py-12">
      <div  className="my-12 container  flex flex-col md:flex-row items-center gap-8 md:gap-12">
     
     
      <div className="flex-1  px-4 md:px-0">
        <h2 className="text-xl  text-darl-blue font-bold">{t("hero-main")}</h2>
        <h1 className="text-3xl lg:text-4xl max-w-full md:max-w-120 lg:leading-10 text-darl-blue font-bold mb-6">
          {t("front-line")}
        </h1>

        <p className="text-base  font-light max-w-full md:max-w-160 mb-8">
          {t("front-line-description-one")}
        </p>
        <p className="text-base  font-light max-w-full md:max-w-160 mb-8">
          {t("front-line-description-two")}
        </p>
      </div>
      <div className="tablet-lg:flex-[.9] w-full  bg-gray-200 h-100 rounded-xl lg:h-140 relative overflow-hidden">
        <video
          src={"videos/home.mp4"}
          className="w-full h-full object-cover absolute "
          muted
          autoPlay
          loop
        ></video>
      </div>
      </div>
    </section>
  );
};

export default FrontLine;
