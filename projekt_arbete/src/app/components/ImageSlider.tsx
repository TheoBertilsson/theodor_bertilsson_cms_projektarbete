"use client";

import { useState } from "react";

export default function ImageSlider({ images }: { images: any[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const moveSlide = (direction: number) => {
    const totalImages = images.length;
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) {
      newIndex = totalImages - 1;
    } else if (newIndex >= totalImages) {
      newIndex = 0;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="flex justify-center items-center w-full relative">
      {images && (
        <img
          src={images[currentImageIndex]?.fields.file.url}
          alt={images[currentImageIndex]?.fields.title}
          aria-label={images[currentImageIndex]?.fields.title}
          className=" max-h-[500px] shadow-xl"
        />
      )}

      <button
        className="absolute left-[-20px] md:left-0 top-1/2 transform -translate-y-1/2 text-black text-3xl"
        onClick={() => moveSlide(-1)}
      >
        &#10094;
      </button>
      <button
        className="absolute right-[-20px] md:right-0 top-1/2 transform -translate-y-1/2 text-black text-3xl"
        onClick={() => moveSlide(1)}
      >
        &#10095;
      </button>
    </div>
  );
}
