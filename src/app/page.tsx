import HomepageCarousel from "@/components/homepage-carousel";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full max-w-screen-desktop mx-auto">
      <Navbar />
      <HomepageCarousel
        heading="Welcome to Central Asia"
      />
    </main>
  );
}
