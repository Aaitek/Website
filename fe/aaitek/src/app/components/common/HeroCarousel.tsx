"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/img/banner-1.jpg",
    heading: "Embark on a Next-Level Digital Journey",
    subheading: "Experience the Future Like Never Before",
    cta: "Discover More",
  },
  {
    image: "/img/banner-2.jpg",
    heading: "Innovate. Elevate. Dominate.",
    subheading: "We Turn Ideas Into Digital Masterpieces",
    cta: "Explore Services",
  },
  {
    image: "/img/banner-3.jpg",
    heading: "Crafting Excellence, Pixel by Pixel",
    subheading: "Where Vision Meets Technology",
    cta: "Start Now",
  },
];

export const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden shadow-lg">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-[600px] relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full transform hover:scale-105 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-center items-start px-8 md:px-20 animate-fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-lg">
                  {slide.subheading}
                </p>
                <Button
                  variant="secondary"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg"
                >
                  {slide.cta}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black shadow-lg" />
        <CarouselNext className="right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black shadow-lg" />
      </Carousel>
    </section>
  );
};