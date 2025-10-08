import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Details - Aaitek Technology Specialists',
  description: 'App in a Day: build a business app for your organization in a single day',
};

export default function EventViewPage() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/img/envent-view.png"
            alt="Event View Banner"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
                App in a Day: build a business app for your organization in a single day
              </h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-left">
                Only companies that combine data, design and breakthrough technical solutions with the right people,
                can successfully transform. And that strong combination is exactly what Macaw has been focusing on
                for 25 years in order to make both customers and their employees successful.
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
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Experience the Power Platform during App in a Day
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  With the Power Platform, business decision makers quickly convert manual and time-consuming
                  processes into digital solutions and easily analyze mountains of data that used to be entered
                  in Excel. It is the driver of innovation for many organizations. Wondering how to use this
                  platform for your organization?
                </p>
                <p className="text-gray-600 leading-relaxed">
                  During the App in a Day workshop you will be introduced to the Power Apps and Power Automate
                  technologies of the Power Platform. Guided by Microsoft and Macaw experts, you will build a
                  business app in one day, which you can immediately apply to your organization. And that&apos;s all
                  without having to write any complicated code. Speed up your knowledge of the Microsoft Stack
                  and request your free participation for this interactive workshop today!
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Take aways from the workshop
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Hands on knowledge of the Power Platform.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    A custom business app for your organization – applied to your own business case.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Knowledge of custom apps for different devices.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    You will learn how to run apps securely within your organization and how to share them internally.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Practical Information
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    09:00 – 11:00: instructions and demo.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    11:00 – 15:00: get started with your own Power App.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    15:00 – 17:00: demos of the results and Q&A.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-blue-900 text-white p-6 rounded-lg sticky top-4">
                <h4 className="text-2xl font-bold mb-4">Any questions?</h4>
                <p className="mb-6 text-blue-100">
                  Our SDR, Alexander Hadziantoniou will be happy to help you. Give him a ring: +31 6 48820783
                  or ask us a question via our digital contact form.
                </p>
                <Link href="/contact">
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 w-full justify-center">
                    Contact us
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