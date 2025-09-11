import React from 'react';
import { HeroCarousel } from '@/components/common/HeroCarousel';
import BlogCarousel from '@/components/common/BlogCarousel';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Carousel */}
      <section id="hero">
        <HeroCarousel />
      </section>

      {/* Blog Carousel */}
      <section id="blogs" className="py-10 bg-gray-50">
        <BlogCarousel />
      </section>
    </div>
  );
}
