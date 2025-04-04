import React from 'react';
import { HeroCarousel } from '@/components/common/HeroCarousel';
import { AboutCards } from '@/components/common/AboutCards';
import { OurPassion } from '@/components/common/OurPassion';
import Partnership from '@/components/common/Partnership';
import BlogCarousel from '@/components/common/BlogCarousel';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      <HeroCarousel />

      <section id="services" className="py-10 bg-gray-100">
        <AboutCards />
      </section>

      <section
        id="about"
        className="relative bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: 'url(/img/passion-banner.png)' }}
      >
        <OurPassion />
      </section>

      {/* Include Partnership component only on Home Page */}
      <section id="partnerships" className="py-10">
        <Partnership />
      </section>


      {/* Blog Carousel */}
      <section id="blogs" className="py-10 bg-gray-50">
        <BlogCarousel />
      </section>
    </div>
  );
}
