"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export const OurPassion = () => (
  <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
    {/* Responsive Background Image */}
    <img
      src="/img/passion-banner.png"
      alt="Our Passion Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-[#1C1C1C]/80 z-10" />

    {/* Main Content */}
    <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
          Our Passion
        </h2>
        <p className="text-lg md:text-xl text-[#F4F4F4] drop-shadow-md max-w-prose">
          Aaitek is all about digital transformation. Through the power of headless, we deliver smart and unique experiences for businesses and communities.
        </p>

        <Button
          variant="secondary"
          className="bg-[#FBD506] hover:bg-[#e2c700] text-[#1C1C1C] px-6 py-3 rounded-full shadow-xl text-lg font-semibold transition duration-300"
        >
          Explore Challenges
        </Button>
      </div>

      <div className="lg:w-1/2">
        <img
          src="/img/passion-frmae.png"
          alt="Passion Frame"
          className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  </section>
);
