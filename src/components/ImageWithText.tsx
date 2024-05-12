import Image from "next/image";
import React from "react";

const ImageWithText = ({ image, title, description, swap }: { image: string, title: string, description: string, swap?: boolean; }) => {
    return (
        <div className={`w-full flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded shadow my-4 ${swap ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full flex md:justify-center">
                <Image src={image} alt={title} width={500} height={300} objectFit="cover" />
            </div>

            <div className="w-full mt-4 md:mt-0 md:ml-4">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ImageWithText;