import Image from 'next/image';
import React from 'react';

const ImageWithText = ({
    image,
    title,
    description,
    swap,
}: {
    image: string;
    title: string;
    description: string;
    swap?: boolean;
}) => {
    // const textAlignmentClass = swap ? 'md:text-left' : 'md:text-right';

    return (
        <div
            className={`w-full flex flex-col md:flex-row items-center justify-between bg-white py-4 my-4 ${
                swap ? 'md:flex-row-reverse' : ''
            }`}
        >
            <div className="w-full h-auto rounded">
                <Image
                    src={image}
                    alt={title}
                    width={1500}
                    height={1000}
                    objectFit="cover"
                    className="rounded"
                />
            </div>

            <div className={`w-full mt-4 md:mt-0 `}>
                <h2 className="md:px-10 text-2xl font-bold mb-2">{title}</h2>
                <p className="md:px-10">{description}</p>
            </div>
        </div>
    );
};

export default ImageWithText;
