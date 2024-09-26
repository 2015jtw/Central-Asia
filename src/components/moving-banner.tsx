import Image from "next/image";
import { useEffect, useState } from "react";
import React from "react";

const images = [
  "/movingBanner/axp-photography-baj0E9SPgLU-unsplash.jpg",
  "/movingBanner/axp-photography-mQFvJYCcZb4-unsplash.jpg",
  "/movingBanner/axp-photography-t6pV1fih3yI-unsplash.jpg",
  "/movingBanner/chi-lok-tsang-Hh1Mnm7V4s0-unsplash.jpg",
  "/movingBanner/eugene-krasnaok-ojDzHZHcVx4-unsplash.jpg",
  "/movingBanner/joel-heard-iJmoo8Hct0U-unsplash.jpg",
  "/movingBanner/nodir-khalilov-vn8j2AK1rGA-unsplash.jpg",
];

export default function MovingBanner() {
  const [duplicatedImages, setDuplicatedImages] = useState(images);

  useEffect(() => {
    // Duplicate the images to ensure seamless looping
    setDuplicatedImages([...images, ...images]);
  }, []);

  return (
    <div className="w-full overflow-hidden ">
      <div className="flex animate-marquee">
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] p-2">
            <Image
              src={src}
              alt={`Banner image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
