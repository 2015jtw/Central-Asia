import Home from "@/app/page";
import React from "react";
import Image from "next/image";

interface HomepageCarouselProps {
	heading: string;
	description: string;
}

// i want to add this image as the background-image of the carousel

const HomepageCarousel: React.FC<HomepageCarouselProps> = (props) => {
	return (
		<div
			className="relative isolate px-6 pt-14 lg:px-8"
			style={{
				backgroundImage: `url(/Uzbekistan-at-sunset.jpg)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
			</div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						{props.heading}
					</h1>
					<p className="mt-6 text-lg leading-8 text-white">
						{props.description}
					</p>
				</div>
			</div>
			<div
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
			</div>
		</div>
	);
};

export default HomepageCarousel;
