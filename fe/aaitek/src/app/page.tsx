import React from 'react'
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
  }
]

export default function HomePage() {
  return (
    <div className="bg-aaitek-dark">
      {/* Hero Section */}
      <AwardWinningHero slides={slides} />

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-aaitek-dark relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-aaitek-white mb-8">
            Our <span className="text-gradient-aaitek">Services</span>
          </h2>
          <p className="text-xl text-aaitek-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Expert solutions powered by cutting-edge technology. Ready for Strapi integration.
          </p>
          <Link href="/services">
            <button className="btn-primary px-12 py-6 text-xl">
              Explore Services
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}