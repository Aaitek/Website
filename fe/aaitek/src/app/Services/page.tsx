import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Aaitek Technology Specialists',
  description: 'Explore our comprehensive technology services and solutions designed to accelerate your digital transformation.',
};

const services = [
  {
    id: 'contentful',
    title: 'Contentful',
    description: 'Launch exceptional experiences and scale your business seamlessly using the composable content platform Contentful. Store content easily and deliver it on multiple devices and platforms so that you do not have to worry about servers and maintenance.',
    href: '/services/contentful',
    icon: (
      <svg width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_18_265)">
          <path d="M20.772 47.63C18.9241 45.912 17.4537 43.8285 16.454 41.5119C15.4543 39.1953 14.9473 36.6961 14.965 34.173C14.9455 31.6701 15.4299 29.1888 16.3892 26.8769C17.3485 24.565 18.7632 22.4698 20.549 20.716C21.9582 19.2917 22.7462 17.3675 22.7408 15.3639C22.7355 13.3603 21.9372 11.4403 20.5204 10.0236C19.1037 8.60684 17.1837 7.80854 15.1801 7.80319C13.1765 7.79784 11.2523 8.58586 9.828 9.99502C3.54545 16.4781 0.0223731 25.1452 9.04369e-08 34.173C-0.00032716 38.6665 0.887477 43.1159 2.61238 47.2652C4.33728 51.4145 6.86526 55.1819 10.051 58.351C10.7483 59.0667 11.5819 59.6356 12.5025 60.024C13.4232 60.4123 14.4123 60.6124 15.4115 60.6124C16.4107 60.6124 17.3998 60.4123 18.3205 60.024C19.2412 59.6356 20.0747 59.0667 20.772 58.351C22.0934 56.8782 22.8242 54.9692 22.8242 52.9905C22.8242 51.0118 22.0934 49.1028 20.772 47.63Z" fill="#FFD85F" />
          <path d="M20.771 20.716C22.4956 18.8804 24.5815 17.4218 26.8976 16.432C29.2136 15.4422 31.7094 14.9428 34.228 14.965C36.7301 14.951 39.2098 15.4378 41.5209 16.3968C43.832 17.3558 45.9279 18.7676 47.685 20.549C49.1093 21.9582 51.0335 22.7462 53.0371 22.7408C55.0407 22.7355 56.9607 21.9372 58.3774 20.5204C59.7942 19.1037 60.5925 17.1837 60.5978 15.1801C60.6032 13.1765 59.8152 11.2523 58.406 9.828C51.9229 3.54545 43.2558 0.0223731 34.228 9.04349e-08C29.7344 -0.00032716 25.2851 0.887496 21.1358 2.6124C16.9865 4.3373 13.2191 6.86528 10.05 10.051C9.33429 10.7483 8.76546 11.5818 8.37707 12.5025C7.98867 13.4232 7.78857 14.4123 7.78857 15.4115C7.78857 16.4107 7.98867 17.3998 8.37707 18.3205C8.76546 19.2412 9.33429 20.0747 10.05 20.772C11.5358 22.073 13.4462 22.7856 15.4211 22.7752C17.396 22.7649 19.2989 22.0325 20.771 20.716Z" fill="#3BB4E7" />
          <path d="M47.6849 47.63C45.9608 49.4665 43.875 50.9261 41.559 51.9167C39.2429 52.9074 36.7468 53.4076 34.2279 53.386C31.7258 53.4 29.2461 52.9132 26.935 51.9542C24.6239 50.9952 22.528 49.5834 20.7709 47.802C20.0683 47.0919 19.2323 46.5276 18.3109 46.1416C17.3896 45.7556 16.401 45.5556 15.402 45.5529C14.4031 45.5502 13.4134 45.745 12.49 46.1261C11.5666 46.5071 10.7276 47.0669 10.0212 47.7733C9.31483 48.4797 8.75503 49.3187 8.37398 50.2421C7.99293 51.1655 7.79814 52.1552 7.80081 53.1541C7.80348 54.1531 8.00355 55.1417 8.38953 56.063C8.77551 56.9844 9.33979 57.8204 10.0499 58.523C16.5332 64.8052 25.2003 68.3279 34.2279 68.35C38.7215 68.3503 43.1708 67.4625 47.3201 65.7376C51.4694 64.0127 55.2368 61.4848 58.4059 58.299C59.1216 57.6017 59.6905 56.7682 60.0788 55.8475C60.4672 54.9268 60.6673 53.9377 60.6673 52.9385C60.6673 51.9393 60.4672 50.9502 60.0788 50.0295C59.6905 49.1089 59.1216 48.2753 58.4059 47.578C56.9206 46.2764 55.0104 45.5632 53.0356 45.5728C51.0607 45.5824 49.1575 46.3141 47.6849 47.63Z" fill="#ED5C68" />
        </g>
      </svg>
    ),
  },
  {
    id: 'umbraco',
    title: 'Umbraco',
    description: 'The Umbraco CMS is an open-source, content management system built on Microsoft .NET framework that is perfect to provide you with a flexible, and powerful platform to build and manage websites, and web applications.',
    href: '/services/umbraco',
    icon: (
      <svg width="60" height="60" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.66831e-05 23.461C0.00555314 18.8144 1.3885 14.2736 3.97408 10.4128C6.55965 6.55189 10.2318 3.54419 14.5263 1.76983C18.8209 -0.00454021 23.5451 -0.465922 28.1018 0.44399C32.6585 1.3539 36.8432 3.59426 40.1269 6.8819C43.4106 10.1695 45.646 14.3569 46.5505 18.9147C47.455 23.4725 46.988 28.1961 45.2085 32.4885C43.429 36.781 40.4169 40.4495 36.553 43.0305C32.689 45.6115 28.1467 46.989 23.5 46.989C20.4116 46.989 17.3535 46.3802 14.5005 45.1975C11.6475 44.0148 9.05567 42.2813 6.87312 40.0961C4.69058 37.911 2.96012 35.3171 1.78078 32.4627C0.60144 29.6083 -0.00366314 26.5494 1.66831e-05 23.461ZM23.022 31.507C21.1991 31.5602 19.3763 31.3967 17.592 31.02C16.9431 30.8879 16.3352 30.6025 15.8191 30.1876C15.303 29.7727 14.8935 29.2404 14.625 28.635C14.0027 26.8133 13.7408 24.8878 13.854 22.966C13.8639 21.6314 13.9477 20.2984 14.105 18.973C14.2577 17.6824 14.4107 16.6187 14.564 15.782L14.725 14.95C14.7271 14.9257 14.7271 14.9013 14.725 14.877C14.7245 14.7648 14.685 14.6562 14.6131 14.57C14.5411 14.4839 14.4414 14.4255 14.331 14.405L11.3 13.933H11.235C11.1277 13.934 11.0239 13.9707 10.9398 14.0374C10.8558 14.104 10.7964 14.1968 10.771 14.301C10.719 14.494 10.689 14.639 10.598 15.101C10.3992 16.1067 10.2285 17.1178 10.086 18.133C9.89912 19.5117 9.78529 20.8993 9.74501 22.29C9.67847 23.2589 9.67847 24.2312 9.74501 25.2C9.71615 27.3279 10.1687 29.4348 11.069 31.363C11.9573 32.9648 13.4372 34.1554 15.192 34.68C17.8203 35.448 20.5561 35.783 23.292 35.672H23.728C26.464 35.7836 29.1998 35.4486 31.828 34.68C33.581 34.1517 35.0596 32.9622 35.951 31.363C36.8513 29.4347 37.3042 27.3279 37.276 25.2C37.3415 24.2311 37.3415 23.2589 37.276 22.29C37.2353 20.8993 37.1212 19.5117 36.934 18.133C36.7899 17.1181 36.6195 16.1071 36.423 15.101C36.323 14.638 36.301 14.495 36.249 14.301C36.2246 14.1963 36.1654 14.1029 36.0812 14.0361C35.9969 13.9693 35.8925 13.9329 35.785 13.933H35.707L32.676 14.405C32.5641 14.4231 32.4622 14.4806 32.3889 14.5672C32.3155 14.6537 32.2755 14.7636 32.276 14.877C32.2741 14.9013 32.2741 14.9257 32.276 14.95L32.436 15.782C32.5887 16.6214 32.7434 17.685 32.9 18.973C33.0551 20.2985 33.1375 21.6315 33.147 22.966C33.2684 24.8865 33.0063 26.8119 32.376 28.63C32.1097 29.2344 31.7031 29.7666 31.1898 30.1823C30.6766 30.5979 30.0716 30.8851 29.425 31.02C27.6421 31.3977 25.8207 31.5622 23.999 31.51L23.022 31.507Z" fill="#3544B1" />
      </svg>
    ),
  },
  {
    id: 'contentstack',
    title: 'Contentstack',
    description: 'Build and deliver exceptional digital experiences with Contentstack, the composable digital experience platform that empowers developers and content creators.',
    href: '/services/contentstack',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#667AFF"/>
        <path d="M30 15L45 22.5V37.5L30 45L15 37.5V22.5L30 15Z" fill="white"/>
        <path d="M30 20L40 25V35L30 40L20 35V25L30 20Z" fill="#667AFF"/>
      </svg>
    ),
  },
  {
    id: 'kentico',
    title: 'Kentico',
    description: 'Create exceptional digital experiences with Kentico Xperience, the all-in-one digital experience platform that combines content management, digital marketing, and commerce.',
    href: '/services/kentico',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#FF5722"/>
        <path d="M15 20H45V40H15V20Z" fill="white"/>
        <path d="M20 25H40V35H20V25Z" fill="#FF5722"/>
      </svg>
    ),
  },
  {
    id: 'strapi',
    title: 'Strapi',
    description: 'Build powerful APIs and content management systems with Strapi, the leading open-source headless CMS that gives developers complete freedom.',
    href: '/services/strapi',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#8E75FF"/>
        <path d="M15 15H45V45H15V15Z" fill="white"/>
        <path d="M20 20H40V40H20V20Z" fill="#8E75FF"/>
      </svg>
    ),
  },
  {
    id: 'xm-cloud',
    title: 'Sitecore XM Cloud',
    description: 'Accelerate your digital transformation with Sitecore XM Cloud, the composable digital experience platform built for the cloud-first world.',
    href: '/services/xm-cloud',
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="12" fill="#EB1F1F"/>
        <path d="M15 15H45V45H15V15Z" fill="white"/>
        <path d="M20 20H40V40H20V20Z" fill="#EB1F1F"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full">
          <img
            src="/img/service-banner.png"
            alt="Services Banner"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Only companies that combine data, design and advanced specialized results with the right people,
                can successfully transform. And that strong combination is exactly what Macaw has been focusing on
                for 25 years in order to make both customers and their employees successful.
              </p>
              <Link href="/about">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 mx-auto">
                  Know About Us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.href} className="group">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <div>
                    <h5 className="text-sm text-blue-600 uppercase tracking-wide mb-2 font-bold">
                      Services
                    </h5>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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