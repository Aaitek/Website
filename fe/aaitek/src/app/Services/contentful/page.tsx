import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contentful Services - Aaitek Technology Specialists',
  description: 'Discover your new favorite developer-friendly CMS! Elevate your content strategy and simplify content management with this cutting-edge, headless CMS.',
};

export default function ContentfulPage() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/img/services-contentful.jpg"
            alt="Contentful Services Banner"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-left text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
                Discover your new favorite developer-friendly CMS!
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-left">
                Elevate your content strategy and simplify content management with this cutting-edge, headless CMS.
              </p>
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
                  What is a customer data platform?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Customers have become accustomed to seeing exactly the right offer, at the right time and through
                  the right channel. To achieve this, an organization needs to have a 360º view of its customers,
                  and a consistent customer experience across all channels and a personalized message are essential.
                  However, this is nowhere near enough to make you distinctive as an organization: it's the bare minimum!
                  If you wish to take the next step, you need to develop a customer data platform. This will help you
                  to understand or even predict customer behavior. The optimal customer experience begins with data.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  The benefits of a customer data platform
                </h2>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  The benefits of a CDP:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Complete 360-degree view of customer interactions across all touchpoints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Real-time data processing and analysis for immediate insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Predictive analytics to anticipate customer behavior and preferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Seamless integration with existing marketing and sales tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>Enhanced personalization capabilities across all channels</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Why Choose Contentful?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contentful revolutionizes content management by providing a headless CMS that separates content
                  from presentation. This approach offers unparalleled flexibility and scalability for modern
                  digital experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Developer-Friendly</h4>
                    <p className="text-gray-600 text-sm">
                      Built with developers in mind, featuring powerful APIs and modern development tools.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Scalable Architecture</h4>
                    <p className="text-gray-600 text-sm">
                      Handle millions of API calls with enterprise-grade infrastructure and CDN.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Multi-Channel Publishing</h4>
                    <p className="text-gray-600 text-sm">
                      Deliver content to web, mobile, IoT, and any platform through flexible APIs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Content Modeling</h4>
                    <p className="text-gray-600 text-sm">
                      Create custom content types with rich relationships and validation rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-blue-900 text-white p-6 rounded-lg sticky top-4">
                <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Content Strategy?</h4>
                <p className="mb-6 text-blue-100">
                  Let our experts help you implement Contentful and unlock the full potential of headless CMS
                  architecture for your organization.
                </p>
                <Link href="/contact">
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 w-full justify-center">
                    Get Started Today
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
                What's your challenge?
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
              <img
                src="/img/Partnerships-sitecore.png"
                alt="Partnership"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}