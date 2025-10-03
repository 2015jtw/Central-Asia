import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("AboutUs");
  return (
    <section id="about-us" className="relative h-screen flex items-center">
      {/* Full Background Map */}
      <Image
        src="/uzbek-map.png"
        fill
        style={{ objectFit: "cover", objectPosition: "20% center" }}
        alt="Map of Uzbekistan"
        className="brightness-75"
      />
      
      {/* Overlay gradient for better card visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Card - Left Aligned */}
      <div className="relative z-10 ml-4 md:ml-12 lg:ml-20 mr-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 space-y-6">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t("title")}
          </h4>
          
          <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
            {t("description1")}
          </p>
          
          <div className="pt-4 border-t border-gray-200">
            <h5 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
              {t("partner")}
            </h5>
            <Image
              src="/lerndiee.png"
              alt="Lernidee Partner Logo"
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
