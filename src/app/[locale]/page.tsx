// Server Component - no "use client" directive
import HomepageCarousel from "@/components/homepage-carousel";
import MovingBanner from "@/components/moving-banner";
import ImageWithText from "@/components/ImageWithText";
import CentralAsia from "@/components/CentralAsia";
import AboutUs from "@/components/AboutUs";
import { HomeForm } from "@/components/HomeForm";
import { getTourData } from "@/lib/tourData";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  // Fetch translations on the server
  const tk = await getTranslations("Tashkent");
  const k = await getTranslations("Khiva");
  const b = await getTranslations("Bukhara");
  const s = await getTranslations("Samarkand");
  const kp = await getTranslations("Karakalpakstan");
  const carousel = await getTranslations("HomepageCarousel");
  const tours = await getTranslations("Tours");

  // Get tour data on the server
  const tourData = getTourData(tk, k, b, s, kp);

  return (
    <main className="bg-white flex flex-col">
      <HomepageCarousel
        heading={carousel("title")}
        description={carousel("description")}
        cta={carousel("cta")}
      />
      <CentralAsia />
      
      {/* Tours Section */}
      <section id="tours" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {tours("title")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {tours("subtitle")}
            </p>
          </div>

          {/* Tour Cards */}
          <div className="space-y-0">
            {tourData.map((tour, index) => (
              <ImageWithText
                key={index}
                image={tour.image}
                title={tour.title}
                description={tour.description}
                description2={tour.description2}
                swap={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
      
      <MovingBanner />
      <AboutUs />
      <HomeForm />
    </main>
  );
}