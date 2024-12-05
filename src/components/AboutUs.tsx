import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("AboutUs");
  return (
    <>
      {/* DESKTOP VERSION */}
      <section className="hidden md:block relative" id="about-us">
        <div className="relative h-[900px] md:h-[750px] w-full">
          <Image
            src="/uzbek-map-1.png"
            layout="fill"
            objectFit="cover"
            objectPosition="top right"
            alt="Background image"
            className="z-0"
          />
          {/* Text Container */}
          <div className="absolute lg:max-w-4xl md:left-12 top-1/2 transform -translate-y-1/2 z-10 py-4 md:py-8 px-4 md:px-8 lg:px-10 text-black bg-white max-w-2xl shadow-lg rounded-lg">
            <h4 className="text-3xl font-normal mb-4">{t("title")}</h4>
            <p className="text-md font-light">{t("description1")}</p>
            <div className="mt-3">
              <h5 className="pb-3">{t("partner")}</h5>
              <Image
                src="/lerndiee.png"
                alt="Company Logo 1"
                width={115}
                height={1155}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE VERSION */}
      <section className="flex flex-col md:hidden " id="about-us">
        {/* Text Container */}
        <div className="py-4 px-4 text-black my-4">
          <h4 className="text-3xl font-bold mb-4 text-center">{t("title")}</h4>
          <p className="text-lg font-light">{t("description1")}</p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
