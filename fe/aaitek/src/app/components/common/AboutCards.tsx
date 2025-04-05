'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const cards = [
  {
    title: 'Contentful Development',
    desc: 'Elevate your business with our composable content platform. Simplify delivery across devices and platforms.',
    icon: '🧩',
  },
  {
    title: 'Strapi Development',
    desc: 'Turn your content operation goals into reality with custom API development and beautiful websites.',
    icon: '🚀',
  },
  {
    title: 'Kentico CMS Services',
    desc: 'Streamline content, reduce costs, and boost ROI with our Kentico headless CMS expertise.',
    icon: '📦',
  },
];

export const AboutCards = () => (
  <section
    id="services"
    className="py-16 bg-[#1C1C1C]" // Main background/dark
  >
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((item, idx) => (
        <Card
          key={idx}
          className="shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 bg-[#F4F4F4]" // Cards & UI Panels
        >
          <CardContent className="p-8 flex flex-col items-start">
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
              {item.title}
            </h3>
            <p className="text-[#2E2E2E] flex-grow">
              {item.desc}
            </p>
            <button className="mt-4 inline-flex items-center bg-[#FBD506] hover:bg-[#e2c700] text-[#1C1C1C] font-semibold rounded-full px-4 py-2 transition duration-300">
              Learn more →
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);
