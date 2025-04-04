// components/common/AboutCards.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const cards = [
  {
    title: 'Contentful Development',
    desc: 'Elevate your business with our composable content platform. Simplify delivery across devices and platforms.',
    icon: '🧩'
  },
  {
    title: 'Strapi Development',
    desc: 'Turn your content operation goals into reality with custom API development and beautiful websites.',
    icon: '🚀'
  },
  {
    title: 'Kentico CMS Services',
    desc: 'Streamline content, reduce costs, and boost ROI with our Kentico headless CMS expertise.',
    icon: '📦'
  },
];

export const AboutCards = () => (
  <section id="services" className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((item, idx) => (
        <Card
          key={idx}
          className="shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50"
        >
          <CardContent className="p-8 flex flex-col items-start">
            <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 flex-grow">
              {item.desc}
            </p>
            <button className="mt-4 inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 transition duration-300">
              Learn more →
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);