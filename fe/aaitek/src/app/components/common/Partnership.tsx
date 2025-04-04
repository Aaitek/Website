"use client";

import Image from 'next/image';

const Partnership = () => {
  return (
    <section className="container mx-auto my-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mb-16">
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/img/Partnerships-mic.jpg"
            alt="Microsoft Partnership"
            width={600}
            height={400}
            className="w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div>
          <Image
            src="/img/microsoft.png"
            alt="Microsoft Logo"
            width={200}
            height={50}
            className="mb-6"
          />
          <h6 className="text-indigo-600 uppercase tracking-widest font-semibold mb-3">Partnerships</h6>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">Microsoft and Aaitek Strategic Partners in Digital Transformation</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Dive into the realm of artificial intelligence companies and witness the transformative impact of cutting-edge technologies. From AI-driven solutions to groundbreaking innovations, discover how these companies are reshaping industries and shaping the future of technology.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-5 py-3 rounded-full inline-flex items-center shadow-lg transition duration-300">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" className="ml-3" fill="currentColor">
              <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div>
          <Image
            src="/img/sitecore.png"
            alt="Sitecore Logo"
            width={200}
            height={50}
            className="mb-6"
          />
          <h6 className="text-indigo-600 uppercase tracking-widest font-semibold mb-3">Partnerships</h6>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5">Sitecore & Aaitek Platinum Implementation Partner</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Gain perspective on the AI revolution from the minds behind the innovation. Hear from industry leaders as they discuss the transformative power of AI and its implications for the future.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-5 py-3 rounded-full inline-flex items-center shadow-lg transition duration-300">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" className="ml-3" fill="currentColor">
              <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" />
            </svg>
          </button>
        </div>
        <div className="overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/img/Partnerships-sitecore.jpg"
            alt="Sitecore Partnership"
            width={600}
            height={400}
            className="w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Partnership;