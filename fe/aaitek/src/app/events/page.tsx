import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - Aaitek Technology Specialists',
  description: 'Explore our upcoming events and stay connected with the latest in technology and innovation.',
};

const events = [
  {
    id: 1,
    image: '/img/blog-1.png',
    category: 'DIGITAL TRANSFORMATION',
    title: 'Headless CMS Revolution: Building the Future of Content Management',
    date: 'December 15, 2024',
    description: 'Discover how headless CMS architectures are transforming digital experiences and enabling seamless omnichannel content delivery.',
  },
  {
    id: 2,
    image: '/img/blog-2.png',
    category: 'INNOVATION',
    title: 'AI-Powered Content Strategies for Modern Enterprises',
    date: 'January 10, 2025',
    description: 'Learn how artificial intelligence is revolutionizing content creation, personalization, and user engagement across digital platforms.',
  },
  {
    id: 3,
    image: '/img/blog-3.png',
    category: 'TECHNOLOGY',
    title: 'Composable Commerce: The Future of E-commerce Platforms',
    date: 'January 25, 2025',
    description: 'Explore how composable commerce solutions enable businesses to build flexible, scalable e-commerce experiences.',
  },
  {
    id: 4,
    image: '/img/blog-4.png',
    category: 'DEVELOPMENT',
    title: 'Next.js & Strapi: Building High-Performance Web Applications',
    date: 'February 8, 2025',
    description: 'Master the integration of Next.js with Strapi to create lightning-fast, SEO-optimized web applications.',
  },
  {
    id: 5,
    image: '/img/blog-5.png',
    category: 'DIGITAL STRATEGY',
    title: 'API-First Design: Creating Connected Digital Ecosystems',
    date: 'February 22, 2025',
    description: 'Understand how API-first approaches enable seamless integrations and future-proof digital architectures.',
  },
  {
    id: 6,
    image: '/img/blog-6.png',
    category: 'INNOVATION',
    title: 'Cloud Migration Strategies for Modern CMS Platforms',
    date: 'March 8, 2025',
    description: 'Learn best practices for migrating legacy CMS systems to cloud-native headless solutions.',
  },
];

export default function EventsPage() {
  return (
    <div className="bg-[#1C1C1C]">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <div className="bg-gradient-to-br from-[#1C1C1C] via-[#2E2E2E] to-[#1C1C1C] py-24 lg:py-32">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FBD506] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFF480] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative container mx-auto px-4">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Tech <span className="text-[#FBD506]">Events</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed text-[#F4F4F4]">
                  Transform Your Digital Vision Into Reality through our exclusive events, workshops, and knowledge-sharing sessions. Connect with industry experts and discover the latest innovations in digital transformation and headless CMS technologies.
                </p>
                <Link href="/about">
                  <button className="bg-[#FBD506] text-[#1C1C1C] px-8 py-4 rounded-full font-bold hover:bg-[#FFF480] transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105 transform">
                    Learn About Us
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                      <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Upcoming <span className="text-[#FBD506]">Events</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              Join us for cutting-edge workshops, seminars, and networking events designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#FBD506]/20 hover:border-[#FBD506] group">
                <Link href="/events/view">
                  <div className="cursor-pointer">
                    <div className="overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={240}
                        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#FBD506] uppercase tracking-wide font-semibold">
                          {event.category}
                        </span>
                        <span className="text-xs text-[#F4F4F4] opacity-75">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-[#FBD506] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-[#F4F4F4] text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-sm text-[#FBD506] uppercase tracking-wide mb-4 font-semibold">
                FULL-SERVICE DIGITAL PARTNER
              </h6>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                What&apos;s your <span className="text-[#FBD506]">challenge?</span>
              </h2>
              <p className="text-[#F4F4F4] mb-8 leading-relaxed">
                We are happy to help you create a unique customer experience, empowering your employees and optimizing your IT Operations. These are the components for a successful digital transformation within your organization. Looking for a sparring partner or ready for tailor-made advice?
              </p>
              <Link href="/contact">
                <button className="bg-[#FBD506] text-[#1C1C1C] px-8 py-4 rounded-full font-bold hover:bg-[#FFF480] transition-all duration-300 flex items-center gap-2 hover:scale-105 transform">
                  Contact Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/Partnerships-sitecore.png"
                  alt="Partnership"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}