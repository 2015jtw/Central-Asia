import Home from "@/app/page";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Scroll } from "lucide-react";


interface HomepageCarouselProps {
	heading: string;
	description: string;
	cta: string;
}

<ScrollLink
	to="homepage-carousel"
	smooth={true}
	duration={500}
	className="-m-1.5 p-1.5 cursor-pointer"
>
	<span className="sr-only">Your Company</span>
	<Image
		className="h-8 w-auto"
		src="/camel-icon.png"
		alt="Central Asia Logo"
		width={80}
		height={80}
	/>
</ScrollLink>

const HomepageCarousel: React.FC<HomepageCarouselProps> = (props) => {
	
	return (
		<div
			className="relative isolate flex items-center justify-center h-[600px]"
		>
			<Image
				src="/tim-de-groot-yNGQ830uFB4-unsplash.jpg"
				alt="Uzbekistan"
				fill
				objectFit="cover"
			/>
			<div className="mx-auto max-w-4xl w-full">
				<div className="relative px-10 md:px-0 max-w-2xl">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							{props.heading}
						</h1>
						<p className="my-6 text-lg leading-8 text-white">
							{props.description}
						</p>
						<Button>
							<ScrollLink
								to="contact-form"
								smooth={true}
								duration={500}
								className="underline-offset-4 hover:underline"
							>
								{props.cta}
							</ScrollLink>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomepageCarousel;
