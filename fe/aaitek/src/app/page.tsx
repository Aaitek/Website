import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AwardWinningHero } from '@/design-system/components/composite/AwardWinningHero'

const slides = [
  {
    id: "slide-1",
    image: "/img/Banner-1.jpg",
    imageAlt: "Digital transformation and technology solutions",
    title: "Transform Your Digital Vision",
    subtitle: "Leading-edge technology solutions that drive business growth and innovation",
    cta: {
      text: "Start Your Journey",
      href: "/contact",
      variant: "primary" as const
    },
    secondaryCta: {
      text: "Learn More",
      href: "/about"
    }
  },
  {
    id: "slide-2",
    image: "/img/banner-2.jpg",
    imageAlt: "CMS and development solutions",
    title: "Expert CMS Solutions",
    subtitle: "Specializing in Umbraco, Sitecore, and cutting-edge content management systems",
    cta: {
      text: "Explore Services",
      href: "/Services",
      variant: "primary" as const
    },
    secondaryCta: {
      text: "View Portfolio",
      href: "/portfolio"
    }
  },
  {
    id: "slide-3",
    image: "/img/banner-3.jpg",
    imageAlt: "Digital excellence and experience",
    title: "20+ Years Excellence",
    subtitle: "Trusted by global brands to deliver exceptional digital experiences",
    cta: {
      text: "Partner With Us",
      href: "/contact",
      variant: "primary" as const
    },
    secondaryCta: {
      text: "Our Story",
      href: "/about"
    }
  },
]

const services = [
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 68 68" fill="none">
        <path d="M20.772 47.63C18.9241 45.912 17.4537 43.8285 16.454 41.5119C15.4543 39.1953 14.9473 36.6961 14.965 34.173C14.9455 31.6701 15.4299 29.1888 16.3892 26.8769C17.3485 24.565 18.7632 22.4698 20.549 20.716C21.9582 19.2917 22.7462 17.3675 22.7408 15.3639C22.7355 13.3603 21.9372 11.4403 20.5204 10.0236C19.1037 8.60684 17.1837 7.80854 15.1801 7.80319C13.1765 7.79784 11.2523 8.58586 9.828 9.99502C3.54545 16.4781 0.0223731 25.1452 9.04369e-08 34.173C-0.00032716 38.6665 0.887477 43.1159 2.61238 47.2652C4.33728 51.4145 6.86526 55.1819 10.051 58.351C10.7483 59.0667 11.5819 59.6356 12.5025 60.024C13.4232 60.4123 14.4123 60.6124 15.4115 60.6124C16.4107 60.6124 17.3998 60.4123 18.3205 60.024C19.2412 59.6356 20.0747 59.0667 20.772 58.351C22.0934 56.8782 22.8242 54.9692 22.8242 52.9905C22.8242 51.0118 22.0934 49.1028 20.772 47.63Z" fill="#FFD85F"/>
        <path d="M20.771 20.716C22.4956 18.8804 24.5815 17.4218 26.8976 16.432C29.2136 15.4422 31.7094 14.9428 34.228 14.965C36.7301 14.951 39.2098 15.4378 41.5209 16.3968C43.832 17.3558 45.9279 18.7676 47.685 20.549C49.1093 21.9582 51.0335 22.7462 53.0371 22.7408C55.0407 22.7355 56.9607 21.9372 58.3774 20.5204C59.7942 19.1037 60.5925 17.1837 60.5978 15.1801C60.6032 13.1765 59.8152 11.2523 58.406 9.828C51.9229 3.54545 43.2558 0.0223731 34.228 9.04349e-08C29.7344 -0.00032716 25.2851 0.887496 21.1358 2.6124C16.9865 4.3373 13.2191 6.86528 10.05 10.051C9.33429 10.7483 8.76546 11.5818 8.37707 12.5025C7.98867 13.4232 7.78857 14.4123 7.78857 15.4115C7.78857 16.4107 7.98867 17.3998 8.37707 18.3205C8.76546 19.2412 9.33429 20.0747 10.05 20.772C11.5358 22.073 13.4462 22.7856 15.4211 22.7752C17.396 22.7649 19.2989 22.0325 20.771 20.716Z" fill="#3BB4E7"/>
        <path d="M47.6849 47.63C45.9608 49.4665 43.875 50.9261 41.559 51.9167C39.2429 52.9074 36.7468 53.4076 34.2279 53.386C31.7258 53.4 29.2461 52.9132 26.935 51.9542C24.6239 50.9952 22.528 49.5834 20.7709 47.802C20.0683 47.0919 19.2323 46.5276 18.3109 46.1416C17.3896 45.7556 16.401 45.5556 15.402 45.5529C14.4031 45.5502 13.4134 45.745 12.49 46.1261C11.5666 46.5071 10.7276 47.0669 10.0212 47.7733C9.31483 48.4797 8.75503 49.3187 8.37398 50.2421C7.99293 51.1655 7.79814 52.1552 7.80081 53.1541C7.80348 54.1531 8.00355 55.1417 8.38953 56.063C8.77551 56.9844 9.33979 57.8204 10.0499 58.523C16.5332 64.8052 25.2003 68.3279 34.2279 68.35C38.7215 68.3503 43.1708 67.4625 47.3201 65.7376C51.4694 64.0127 55.2368 61.4848 58.4059 58.299C59.1216 57.6017 59.6905 56.7682 60.0788 55.8475C60.4672 54.9268 60.6673 53.9377 60.6673 52.9385C60.6673 51.9393 60.4672 50.9502 60.0788 50.0295C59.6905 49.1089 59.1216 48.2753 58.4059 47.578C56.9206 46.2764 55.0104 45.5632 53.0356 45.5728C51.0607 45.5824 49.1575 46.3141 47.6849 47.63Z" fill="#ED5C68"/>
      </svg>
    ),
    label: "HEADLESS CMS",
    title: "Contentful Excellence",
    description: "API-first solutions that power seamless content delivery across all platforms.",
    href: "/Services"
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 47 47" fill="none">
        <path d="M23.528 47C36.5222 47 47.056 36.4787 47.056 23.5C47.056 10.5213 36.5222 0 23.528 0C10.5338 0 0 10.5213 0 23.5C0 36.4787 10.5338 47 23.528 47Z" fill="#F05A22"/>
        <path d="M23.528 20.367C24.2619 20.3594 24.9757 20.6065 25.5478 21.0663C26.1199 21.526 26.5148 22.1699 26.6654 22.8882C26.8159 23.6066 26.7127 24.3549 26.3733 25.0056C26.0339 25.6564 25.4794 26.1693 24.8042 26.457C24.129 26.7447 23.3749 26.7893 22.6705 26.5833C21.966 26.3773 21.3548 25.9334 20.941 25.3272C20.5272 24.7211 20.3364 23.9902 20.4012 23.2591C20.4659 22.528 20.7821 21.842 21.296 21.318C21.5855 21.0183 21.9323 20.7798 22.3156 20.6164C22.699 20.4531 23.1112 20.3683 23.528 20.367Z" fill="white"/>
      </svg>
    ),
    label: "OPEN SOURCE",
    title: "Strapi Mastery",
    description: "Flexible content management with custom APIs and scalable architectures.",
    href: "/Services"
  },
  {
    icon: (
      <svg width="60" height="60" viewBox="0 0 77 83" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M69.3082 12.806H22.6372V36.206H45.6022C45.9953 36.206 46.3722 36.3622 46.6501 36.6401C46.9281 36.918 47.0842 37.295 47.0842 37.688V60.335H70.7902V14.291C70.7906 14.0962 70.7526 13.9031 70.6783 13.723C70.604 13.5428 70.4949 13.3791 70.3572 13.2412C70.2195 13.1032 70.056 12.9938 69.876 12.9191C69.696 12.8445 69.5031 12.806 69.3082 12.806Z" fill="#8E75FF"/>
        <path opacity="0.405" fillRule="evenodd" clipRule="evenodd" d="M22.6352 12.806V36.206H0.741202C0.593951 36.206 0.450048 36.1621 0.327809 36.08C0.20557 35.9979 0.110523 35.8813 0.0547648 35.745C-0.000993311 35.6087 -0.0149406 35.4589 0.0146981 35.3147C0.0443367 35.1704 0.116221 35.0383 0.221202 34.935L22.6352 12.806Z" fill="#8E75FF"/>
      </svg>
    ),
    label: "ENTERPRISE",
    title: "Kentico Excellence",
    description: "Enterprise-grade platforms that streamline content management and enhance user experiences.",
    href: "/Services"
  }
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Award-Winning Hero Section */}
      <AwardWinningHero slides={slides} />

      {/* Expertise Section - Minimal & Clean */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-brand-500">Expertise</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              20+ years of experience in enterprise-grade platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block"
              >
                <div className="relative p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-brand-200 hover:-translate-y-2">
                  <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h5 className="text-sm font-bold text-brand-500 mb-4 tracking-wider">{service.label}</h5>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500 transform group-hover:translate-x-1 transition-transform">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Dramatic & Minimal */}
      <section className="relative py-40 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/passion-banner.png"
            alt="Mission background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h6 className="text-brand-500 font-bold mb-8 text-lg tracking-wider">OUR MISSION</h6>
          <h3 className="text-6xl md:text-8xl font-bold text-white mb-12 leading-tight max-w-6xl mx-auto">
            Transforming Digital Experiences
          </h3>
          <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Two decades of expertise delivering cutting-edge solutions that drive engagement, growth, and lasting success.
          </p>
          <Link href="/about">
            <button className="group px-12 py-6 bg-gradient-to-r from-brand-500 to-brand-600 text-black font-bold rounded-full text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-brand-500/25">
              Learn Our Story
              <span className="inline-block ml-4 transform group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Technologies Section - Clean Grid */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h6 className="text-brand-500 font-bold mb-6 text-lg tracking-wider">TECHNOLOGIES</h6>
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
                Enterprise-Grade Solutions
              </h3>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We deliver world-class content management systems and digital transformation solutions that scale with your business.
              </p>
              <Link href="/Services">
                <button className="px-10 py-5 bg-gradient-to-r from-brand-500 to-brand-600 text-black font-bold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore All Services
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                'Contentful',
                'Umbraco CMS',
                'Kentico CMS',
                'Sitecore XM',
                'Contentstack',
                'Strapi'
              ].map((tech, index) => (
                <div key={index} className="flex items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-3 h-3 bg-brand-500 rounded-full mr-4"></div>
                  <span className="text-gray-800 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working at Aaitek - Clean & Minimal */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h6 className="text-brand-500 font-bold mb-6 text-lg tracking-wider">CAREERS</h6>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
                Working at Aaitek
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Join a Great Place to Work where we value vitality, culture, diversity and a good dose of challenges.
              </p>
              <Link href="/events">
                <button className="px-10 py-5 bg-gradient-to-r from-brand-500 to-brand-600 text-black font-bold rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                  Check Vacancies
                </button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/img/Working-at Aaitek-old.png"
                alt="Working at Aaitek"
                width={600}
                height={400}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}