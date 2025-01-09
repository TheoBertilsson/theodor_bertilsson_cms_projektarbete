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
    <div className="flex justify-center items-center w-full ">
      {images && (
        <img
          src={images[currentImageIndex]?.fields.file.url}
          alt={images[currentImageIndex]?.fields.title}
          className="rounded-lg h-[500px]"
        />
      )}

      <button
        className="absolute left-16 top-1/2 transform -translate-y-1/2 text-black text-3xl"
        onClick={() => moveSlide(-1)}
      >
        &#10094;
      </button>
      <button
        className="absolute right-16 top-1/2 transform -translate-y-1/2 text-black text-3xl"
        onClick={() => moveSlide(1)}
      >
        &#10095;
      </button>
    </div>
  );
}
