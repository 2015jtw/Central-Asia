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
      <Image
        src="/tim-de-groot-yNGQ830uFB4-unsplash.jpg"
        alt="Uzbekistan"
        fill
        objectFit="cover"
      />
      <div className="mx-auto max-w-4xl w-full">
        <div className="relative mx-auto px-10 md:px-0 max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {t("title")}
            </h1>
            <p className="my-6 text-lg leading-8 text-white">
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
