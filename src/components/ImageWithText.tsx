import Image from "next/image";
import React from "react";

const ImageWithText = ({
  image,
  title,
  description,
  description2,
  swap,
}: {
  image: string;
  title: string;
  description: string;
  description2: string;
  swap?: boolean;
}) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row items-center justify-between py-0 lg:py-8 bg-white ${
        swap ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full h-auto rounded px-4 lg:px-0">
        <Image
          src={image}
          alt={title}
          width={1500}
          height={1000}
          objectFit="cover"
          className="rounded"
        />
      </div>

      <div className={`w-full my-0 lg:my-4 p-4 lg:p-0`}>
        <h4 className="lg:px-10 text-2xl font-bold mb-2 text-left">{title}</h4>
        <p className="lg:px-10 text-lg font-light pb-4">{description}</p>
        <p className="lg:px-10 text-lg font-light">{description2}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
