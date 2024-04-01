import HomepageCarousel from "@/components/homepage-carousel";
import Navbar from "@/components/navbar";
import TourCard from "@/components/tourCard";

export default function Home() {

  const tourData = [
    {
      title: "Khiva",
      image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
      description: "Uzbekistan remains the most-visited country in Central Asia for one key reason.",
      time: "September 1st - 7th",
      price: 100
    },
    {
      title: "BuKhara",
      image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
      description: "Uzbekistan remains the most-visited country in Central Asia for one key reason",
      time: "September 1st - 7th",
      price: 100
    },
    {
      title: "Samarkand",
      image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
      description: "Uzbekistan remains the most-visited country in Central Asia for one key reason",
      time: "September 1st - 7th",
      price: 100
    }
  ]


  return (
    <main className=" bg-blue-400 flex min-h-screen flex-col justify-between p-24">
      <Navbar />
      <h1>Central Asia</h1>
      <div className="flex flex-row justify-center">
        {tourData.map((tour, index) => {
          return (
            <TourCard
              key={index}
              title={tour.title}
              image={tour.image}
              description={tour.description}
              time={tour.time}
              price={tour.price}
            />
          )
        })}
      </div>
    </main>
  );
}
