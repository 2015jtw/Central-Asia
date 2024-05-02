import Home from "@/app/page";
import React from "react";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface HomepageCarouselProps {
	heading: string;
	description: string;
}

const HomepageCarousel: React.FC<HomepageCarouselProps> = (props) => {
	const carouselItems = [
		{
			alt: "Khiva",
			image: "https://images.unsplash.com/photo-1576947183671-91a4d4caa386?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			alt: "BuKhara",
			image: "https://images.unsplash.com/photo-1626553726949-5a8f5abfc56a?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			alt: "Samarkand",
			image: "https://plus.unsplash.com/premium_photo-1694475434330-2058f3323def?q=80&w=2203&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];
	return (
		<div
			id="homepage-carousel"
			className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-r from-[#DE3C4B] to-[#E28413]"
		>
			<div className="mx-auto max-w-2xl pb-16 ">
				<div className="relative mx-auto max-w-2xl pb-16">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							{props.heading}
						</h1>
						<p className="mt-6 text-lg leading-8 text-white">
							{props.description}
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Carousel className="w-full max-w-[800px] mx-0">
						<CarouselContent>
							{carouselItems.map((item, index) => (
								<CarouselItem key={index}>
									<div className="p-1">
										<Card>
											<CardContent className="flex flex-col aspect-square items-center justify-center p-6">
												<Image
													src={item.image}
													height={400}
													width={400}
													objectFit="cover"
													objectPosition="center"
													alt={item.alt}
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
			</div>
		</div>
	);
};

export default HomepageCarousel;
