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
			id="homepage-carousel"
			className="relative isolate px-6 pt-14 lg:px-8"
		>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="absolute z-0 inset-0">
					<Image
						src="/Uzbekistan-at-sunset.jpg"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						alt="Uzbekistan at sunset"
					/>
					{/* <Image
						src="/jonathan-greenaway-HDK1NstWkcI-unsplash.jpg"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						alt="Uzbekistan at sunset"
					/> */}
				</div>

				<div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							{props.heading}
						</h1>
						<p className="mt-6 text-lg leading-8 text-white">
							{props.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomepageCarousel;
