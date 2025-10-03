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
    <div className="py-8 md:py-12 first:pt-0">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          swap ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Image Container */}
        <div
          className={`relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl ${
            swap ? "lg:col-start-2" : ""
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Container */}
        <div
          className={`space-y-6 px-4 md:px-8 lg:px-0 ${
            swap ? "lg:col-start-1 lg:row-start-1 lg:pr-8" : "lg:pl-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg md:text-xl font-light leading-relaxed">
              {description}
            </p>
            {description2 && (
              <p className="text-lg md:text-xl font-light leading-relaxed">
                {description2}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
