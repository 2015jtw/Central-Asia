import Home from "@/app/page";
import React from "react";
import Image from "next/image";

interface HomepageCarouselProps {
    heading: string;
}


const HomepageCarousel: React.FC<HomepageCarouselProps> = ({heading}) => {
    return (
        <div className="w-full relative h-[1000px]">
            <Image src="/snowscat-2O8sAwInqT8-unsplash.jpg" alt="homepage carousel image" layout="fill" objectFit="cover" objectPosition="bottom" />
            <span className=" text-orange-500 text-lg font-medium absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">Explore the Silk Road</span>
            <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">{heading}</h1>
        </div>
    );
}

export default HomepageCarousel;