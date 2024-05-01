//import components
import Header from "@/components/Header";
import HomepageCarousel from "@/components/homepage-carousel";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import TourCard from "@/components/tourCard";
import Wrapper from "@/components/Wrapper";

//import other dependencies
import Image from "next/image";

export default function Home() {
	// TODO: refactor this in a data file and just map over it
	const tourData = [
		{
			title: "Khiva",
			image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
			description:
				"Uzbekistan remains the most-visited country in Central Asia for one key reason.",
			time: "September 1st - 7th",
			price: 100,
		},
		{
			title: "BuKhara",
			image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
			description:
				"Uzbekistan remains the most-visited country in Central Asia for one key reason.",
			time: "September 1st - 7th",
			price: 100,
		},
		{
			title: "Samarkand",
			image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
			description:
				"Uzbekistan remains the most-visited country in Central Asia for one key reason.",
			time: "September 1st - 7th",
			price: 100,
		},
		// {
		// 	title: "Samarkand",
		// 	image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
		// 	description:
		// 		"Uzbekistan remains the most-visited country in Central Asia for one key reason",
		// 	time: "September 1st - 7th",
		// 	price: 100,
		// },
		// {
		// 	title: "Samarkand",
		// 	image: "/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg",
		// 	description:
		// 		"Uzbekistan remains the most-visited country in Central Asia for one key reason",
		// 	time: "September 1st - 7th",
		// 	price: 100,
		// },
	];

	return (
		<main className="bg-white flex h-[500px] flex-col">
			<Header />

			<HomepageCarousel
				heading="Welcome to Central Asia Tours"
				description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui
						irure qui lorem cupidatat commodo. Elit sunt amet fugiat
						veniam occaecat fugiat aliqua."
			/>

			<div className="flex items-center justify-center h-screen">
				<Carousel className="w-full max-w-[800px] mx-0">
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex flex-col aspect-square items-center justify-center p-6">
											<h1>test</h1>
											<Image
												src="/Uzbekistan-at-sunset.jpg"
												className="h-[50%]"
												width={400}
												height={400}
												objectFit="cover"
												objectPosition="center"
												alt="Uzbekistan at sunset"
											/>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<Wrapper>
				<div
					id="tours"
					className="text-black flex flex-col items-center p-8"
				>
					<h1 className=" text-4xl font-semibold pb-4 ">
						Central Asia Tours
					</h1>
					<div className="flex flex-col overflow-hidden lg:flex-row justify-center">
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
							);
						})}
					</div>
				</div>
				<div className=" h-[800px] bg-red-500"></div>
			</Wrapper>
		</main>
	);
}
