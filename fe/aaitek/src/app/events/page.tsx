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
    category: 'GETTING STARTED',
    title: 'The Travel Buddy App: your digital partner for work-related mobility of persons',
  },
  {
    id: 2,
    image: '/img/blog-2.png',
    category: 'GETTING STARTED',
    title: 'The Travel Buddy App: your digital partner for work-related mobility of persons',
  },
  {
    id: 3,
    image: '/img/blog-3.png',
    category: 'GETTING STARTED',
    title: 'The Travel Buddy App: your digital partner for work-related mobility of persons',
  },
  {
    id: 4,
    image: '/img/blog-4.png',
    category: 'GETTING STARTED',
    title: 'The Travel Buddy App: your digital partner for work-related mobility of persons',
  },
  {
    id: 5,
    image: '/img/blog-5.png',
    category: 'GETTING STARTED',
    title: 'The Travel Buddy App: your digital partner for work-related mobility of persons',
  },
  {
    id: 6,
    image: '/img/blog-6.png',
    category: 'GETTING STARTED',
    title: 'The Travel Buddy App: your digital partner for work-related mobility of persons',
  },
];

export default function EventsPage() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/img/overlay-event.png"
            alt="Events Banner"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Event</h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Only companies that combine data, design and breakthrough technical solutions with the right people,
                can successfully transform. And that strong combination is exactly what Macaw has been focusing on
                for 25 years in order to make both customers and their employees successful.
              </p>
              <Link href="/about">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 mx-auto">
                  Know about us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link href="/events/view">
                  <div className="cursor-pointer">
                    <div className="overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={192}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                        {event.category}
                      </p>
                      <h5 className="text-lg font-semibold text-gray-800 leading-tight">
                        {event.title}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h6 className="text-sm text-blue-600 uppercase tracking-wide mb-2">
                FULL-SERVICE DIGITAL PARTNER
              </h6>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                What&apos;s your challenge?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are happy to help you to create a unique customer experience, empowering your employees
                and optimizing your IT Operations. These are the components for a successful digital
                transformation within your organization. Looking for a sparring partner or ready for
                tailor-made advice? Make an appointment or call us. Our experts are ready for your challenge.
              </p>
              <Link href="/contact">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2">
                  Contact us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="mt-8 lg:mt-0">
              <Image
                src="/img/Partnerships-sitecore.png"
                alt="Partnership"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}