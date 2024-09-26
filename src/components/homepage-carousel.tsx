import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Scroll } from "lucide-react";
import { useTranslations } from "next-intl";

interface HomepageCarouselProps {
  heading: string;
  description: string;
  cta: string;
}

const HomepageCarousel: React.FC<HomepageCarouselProps> = (props) => {
  const t = useTranslations("HomepageCarousel");

  return (
    <div
      className="relative isolate flex items-center justify-center h-[600px]"
      id="homepage-carousel"
    >
      {/* Background Image */}
      <Image
        src="/tim-de-groot-yNGQ830uFB4-unsplash.jpg"
        alt="Uzbekistan"
        fill
        objectFit="cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-[#FF9F1C]/20"></div>

      {/* Content */}
      <div className="mx-auto max-w-4xl w-full relative z-10">
        <div className="relative mx-auto px-10 md:px-0 max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {t("title")}
            </h1>
            <p className="my-6 text-lg font-medium leading-8 text-white">
              {t("description")}
            </p>
            <Button>
              <ScrollLink
                to="contact-form"
                smooth={true}
                duration={500}
                className="underline-offset-4 hover:underline"
              >
                {t("cta")}
              </ScrollLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCarousel;
