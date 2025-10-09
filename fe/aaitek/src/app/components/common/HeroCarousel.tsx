"use client";

import * as React from "react";
import Image from "next/image";
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
    image: "/img/Banner-1.jpg",
    heading: "Transform Your Digital Vision Into Reality",
    subheading: "Leading-edge technology solutions that drive business growth and innovation",
    cta: "Start Your Journey",
  },
  {
    image: "/img/banner-2.jpg",
    heading: "Expert CMS & Development Solutions",
    subheading: "Specializing in Umbraco, Sitecore, and cutting-edge content management systems",
    cta: "Explore Our Services",
  },
  {
    image: "/img/banner-3.jpg",
    heading: "20+ Years of Digital Excellence",
    subheading: "Trusted by global brands to deliver exceptional digital experiences",
    cta: "Partner With Us",
  },
];

export const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-[700px] relative">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={700}
                className="object-cover w-full h-full transition duration-1000 ease-in-out"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/90 via-[#1C1C1C]/70 to-transparent">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 max-w-7xl mx-auto">
                <div className="max-w-3xl space-y-6 animate-fadeIn">
                  <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent drop-shadow-2xl">
                      {slide.heading}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-2xl">
                    {slide.subheading}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      variant="secondary"
                      className="bg-gradient-to-r from-[#FBD506] to-[#F4A607] hover:from-[#F4A607] hover:to-[#E8960F] text-[#1C1C1C] text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 ease-in-out shadow-2xl hover:shadow-[#FBD506]/30 hover:scale-105 transform"
                    >
                      {slide.cta}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 ease-in-out backdrop-blur-sm"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm shadow-2xl h-12 w-12 transition-all duration-300" />
        <CarouselNext className="right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 backdrop-blur-sm shadow-2xl h-12 w-12 transition-all duration-300" />
      </Carousel>
    </section>
  );
};
