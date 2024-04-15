"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchForm from "./SearchForm";

type Props = {};

export default function HeroCarousel({}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + 3) % 3);
  };

  const images = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png"
  ];

  const captions = [
    "Bądź na bieżąco w świecie butów",
    "Dodawaj rzeczy do swoich kolekcji",
    "Obserwuj ceny butów"
  ];

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Image
          src={images[currentImage]}
          alt={`Hero image ${currentImage + 1}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-white text-2xl font-bold mb-4">
            {captions[currentImage]}
          </p>
          <SearchForm/>
        </div>
      </div>
      <div className="absolute z-10 top-1/2 left-3 transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="text-white text-4xl"
        >
          &lt;
        </button>
      </div>
      <div className="absolute z-10 top-1/2 right-3 transform -translate-y-1/2">
        <button
          onClick={nextImage}
          className="text-white text-4xl"
        >
          &gt;
        </button>
      </div>
      <div className="absolute bottom-3 w-full flex justify-center space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-3 w-3 rounded-full ${
              currentImage === idx ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
