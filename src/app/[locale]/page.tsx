"use client";

//import shadcn/regular components
import Header from "@/components/Header";
import HomepageCarousel from "@/components/homepage-carousel";
import MovingBanner from "@/components/moving-banner";
import Wrapper from "@/components/Wrapper";
import ImageWithText from "@/components/ImageWithText";
import CentralAsia from "@/components/CentralAsia";

// react/nextjs dependencies
import AboutUs from "@/components/AboutUs";
import { HomeForm } from "@/components/HomeForm";
import { useTourData } from "@/lib/tourData";

export default function Home() {
  const tourData = useTourData();

  return (
    <main className="bg-white flex flex-col">
      <HomepageCarousel
        heading="Book a Tour"
        description="Come explore the best that Uzbekistan has to offer with our expert guides. We offer tours to Khiva, Bukhara, and Samarkand. Book now to secure your spot!"
        cta="Get in touch"
      />
      <CentralAsia />
      <Wrapper className="p-8">
        <div id="tours" className="text-black flex flex-col items-center">
          <div className="flex flex-col gap-30 w-full">
            {tourData.map((tour, index) => {
              return (
                <ImageWithText
                  description2={tour.description2}
                  key={index}
                  image={tour.image}
                  title={tour.title}
                  description={tour.description}
                  swap={index % 2 === 0}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
      <MovingBanner />

      <AboutUs />
      <HomeForm />
    </main>
  );
}
