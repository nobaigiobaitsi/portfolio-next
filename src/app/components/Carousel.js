//I don't know how this works, I took it from Embla Carousel documentation.

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

export default function Carousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [images, emblaApi]);

  return (
    <div className="relative">
      {/* Embla viewport */}
      <div className="embla overflow-hidden rounded-md mb-4" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, index) => (
            <div className="embla__slide min-w-full relative" key={index}>
              <Image
                src={src}
                alt={`Project image ${index + 1}`}
                width={800}
                height={450}
                className="object-cover w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 z-10"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 z-10"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
