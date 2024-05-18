import React from "react";
import { useTranslations } from "next-intl";

export default function CentralAsia() {
  const t = useTranslations("CentralAsia");

  return (
    <div
      id="central-asia"
      className="flex flex-col justify-center items-center bg-gradient-to-r from-yellow-300 to-orange-500 text-black h-[500px]"
    >
      <h3 className="text-1xl font-normal px-6 lg:px-0 sm:text-3xl">
        {t("subtitle")}
      </h3>
      <h1 className="py-4 text-4xl font-bold tracking-tight sm:text-6xl px-6 lg:px-0">
        {t("title")}
      </h1>
      <p className="text-base max-w-3xl text-center font-light px-6 lg:px-0">
        {t("description")}
      </p>
    </div>
  );
}
