"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Link as ScrollLink } from "react-scroll";

interface HomepageCarouselProps {
  heading: string;
  description: string;
  cta: string;
}

const HomepageCarousel: React.FC<HomepageCarouselProps> = ({ heading, description, cta }) => {

  return (
    <section
      className="relative isolate flex items-center justify-center h-screen"
      id="homepage-carousel"
    >
      {/* Background Image */}
      <Image
        src="/tim-de-groot-yNGQ830uFB4-unsplash.jpg"
        alt="Uzbekistan Desert Landscape"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="brightness-90"
      />

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 drop-shadow-2xl animate-fade-in">
            {heading}
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/95 mb-8 md:mb-10 max-w-3xl mx-auto drop-shadow-lg">
            {description}
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="text-base md:text-lg px-8 md:px-10 py-6 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 bg-amber-600 hover:bg-amber-700"
            >
              <ScrollLink
                to="contact-form"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                {cta}
              </ScrollLink>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HomepageCarousel;
