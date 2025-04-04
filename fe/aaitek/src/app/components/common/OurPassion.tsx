"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export const OurPassion = () => (
  <section id="about" className="relative bg-cover bg-center bg-fixed py-24 text-white" style={{ backgroundImage: 'url(/img/passion-banner.png)' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
    <div className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-xl">Our Passion</h2>
        <p className="text-lg md:text-xl max-w-prose drop-shadow-md">
          Aaitek is all about digital transformation. Through the power of headless, we deliver smart and unique experiences for businesses and communities.
        </p>
        <Button variant="outline" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full shadow-xl transition duration-300">
          Explore Challenges
        </Button>
      </div>
      <div className="lg:w-1/2">
        <img src="/img/passion-frmae.png" alt="Our Passion" className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out" />
      </div>
    </div>
  </section>
);
