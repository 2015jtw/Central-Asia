"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstImage = container.querySelector("img");

      if (firstImage) {
        firstImage.onload = () => {
          setIsReady(true);
        };
      }
    }
  }, []);

  useEffect(() => {
    if (isReady && containerRef.current) {
      const container = containerRef.current;
      const totalWidth = container.scrollWidth;
      const viewportWidth = container.offsetWidth;

      const animate = () => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1;
          if (newPosition >= totalWidth / 2) {
            return 0;
          }
          return newPosition;
        });
        requestAnimationFrame(animate);
      };

      const animationFrame = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isReady]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex"
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          transform: `translateX(-${scrollPosition}px)`,
        }}
      >
        {[...images, ...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] p-2">
            <Image
              src={src}
              alt={`Banner image ${(index % images.length) + 1}`}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
