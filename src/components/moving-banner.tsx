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
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    let singleImageWidth = 0;

    // Calculate the width of a single image set
    if (containerRef.current) {
      const container = containerRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        // Width of one image including padding (400px + padding)
        singleImageWidth = images.length * 416; // 400px width + 16px padding (p-2 = 8px on each side)
      }
    }

    const animate = () => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        // Reset when we've scrolled through one complete set of images
        if (newPosition >= singleImageWidth) {
          return 0;
        }
        return newPosition;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          willChange: "transform",
        }}
      >
        {/* Duplicate images twice for seamless infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] p-2">
            <Image
              src={src}
              alt={`Banner image ${(index % images.length) + 1}`}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
              priority={index < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
