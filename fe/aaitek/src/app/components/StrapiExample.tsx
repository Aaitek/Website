'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useServices, useFeaturedTechnologies, getStrapiMedia, getStrapiMediaAlt } from '@/lib/strapi'
// ScrollAnimations components will be available when needed

/**
 * Example Strapi Integration Component
 * Demonstrates how to use Strapi data in your components
 */

// Services Section with Strapi Data
export const StrapiServicesSection: React.FC = () => {
  const { items: services, isLoading, error } = useServices({
    pagination: { pageSize: 6 },
    sort: ['order:asc', 'createdAt:desc']
  })

  if (error) {
    console.error('Error loading services:', error)
    // Fallback to static data or show error message
    return (
      <div className="text-center py-20">
        <p className="text-aaitek-light">Unable to load services. Please try again later.</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-aaitek-yellow"></div>
        <p className="text-aaitek-light mt-4">Loading services...</p>
      </div>
    )
  }

  if (!services || services.length === 0) {
    // Fallback to static content if no Strapi data
    return <StaticServicesSection />
  }

  return (
    <section className="py-20 lg:py-32 bg-aaitek-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aaitek-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-aaitek"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aaitek-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-aaitek" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-display font-bold text-aaitek-white mb-8">
            Our <span className="text-gradient-aaitek">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-aaitek-light max-w-4xl mx-auto leading-relaxed">
            Expert solutions powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => {
            const { attributes } = service
            const serviceImage = getStrapiMedia(attributes.image, 'medium')
            const serviceImageAlt = getStrapiMediaAlt(attributes.image)

            return (
              <Link
                key={service.id}
                href={`/services/${attributes.slug}`}
                className="group block magnetic"
              >
                <div className="glass-card p-8 lg:p-12 hover:border-aaitek-yellow-300 transition-all duration-500 signature-glow h-full">
                  {/* Service Image */}
                  {serviceImage && (
                    <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={serviceImage}
                        alt={serviceImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Service Icon (if no image) */}
                  {!serviceImage && attributes.icon && (
                    <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                      <div className="w-16 h-16 bg-aaitek-yellow rounded-lg flex items-center justify-center">
                        <span className="text-aaitek-dark text-2xl font-bold">
                          {attributes.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className="text-xl lg:text-2xl font-bold text-aaitek-white mb-4">
                    {attributes.title}
                  </h3>
                  <p className="text-aaitek-light leading-relaxed opacity-90 mb-6">
                    {attributes.shortDescription || attributes.description}
                  </p>

                  {/* Features */}
                  {attributes.features && attributes.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {attributes.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-aaitek-light">
                          <div className="w-2 h-2 bg-aaitek-yellow rounded-full mr-3"></div>
                          {feature.title}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Pricing */}
                  {attributes.pricing?.startingPrice && (
                    <div className="text-aaitek-yellow font-semibold mb-4">
                      Starting from ${attributes.pricing.startingPrice}
                      {attributes.pricing.priceType === 'hourly' && '/hour'}
                    </div>
                  )}

                  {/* Hover Arrow */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aaitek-yellow transform group-hover:translate-x-1 transition-transform">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Technologies Section with Strapi Data
export const StrapiTechnologiesSection: React.FC = () => {
  const { items: technologies, isLoading, error } = useFeaturedTechnologies({
    pagination: { pageSize: 8 },
    sort: ['order:asc', 'name:asc']
  })

  if (error || isLoading || !technologies || technologies.length === 0) {
    // Fallback to static content
    return <StaticTechnologiesSection />
  }

  return (
    <section className="py-20 lg:py-32 bg-aaitek-dark relative overflow-hidden">
      {/* Background neural network effect */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
          <path d="M0,300 Q250,200 500,300 T1000,300" stroke="#FBD506" strokeWidth="1" strokeDasharray="10,10" opacity="0.3"/>
          <path d="M0,200 Q250,100 500,200 T1000,200" stroke="#FBD506" strokeWidth="1" strokeDasharray="5,5" opacity="0.2"/>
          <path d="M0,400 Q250,300 500,400 T1000,400" stroke="#FBD506" strokeWidth="1" strokeDasharray="15,15" opacity="0.25"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div>
              <h6 className="text-aaitek-yellow font-bold mb-6 text-lg tracking-wider font-mono">TECHNOLOGIES</h6>
              <h3 className="text-display font-bold text-aaitek-white mb-12 leading-tight">
                <span className="text-gradient-aaitek">Enterprise-Grade</span> Solutions
              </h3>
              <p className="text-xl text-aaitek-light mb-12 leading-relaxed opacity-90">
                We deliver world-class content management systems and digital transformation solutions that scale with your business.
              </p>
              <Link href="/services">
                <button className="btn-primary px-10 py-5 text-lg signature-glow magnetic">
                  Explore All Technologies
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {technologies.map((tech) => {
              const { attributes } = tech
              const techLogo = getStrapiMedia(attributes.logo, 'thumbnail')

              return (
                <div key={tech.id} className="glass-card flex items-center p-6 hover:border-aaitek-yellow-300 transition-all duration-300 magnetic">
                  {techLogo ? (
                    <div className="w-8 h-8 mr-4 relative">
                      <Image
                        src={techLogo}
                        alt={attributes.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-3 h-3 bg-aaitek-yellow rounded-full mr-4 animate-pulse-aaitek"></div>
                  )}
                  <div>
                    <span className="text-aaitek-white font-medium block">{attributes.name}</span>
                    {attributes.expertise_level && (
                      <span className="text-aaitek-yellow text-xs">{attributes.expertise_level}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Fallback static components (existing content)
const StaticServicesSection: React.FC = () => {
  const staticServices = [
    {
      title: "Contentful Excellence",
      description: "API-first solutions that power seamless content delivery across all platforms.",
      label: "HEADLESS CMS"
    },
    {
      title: "Strapi Mastery",
      description: "Flexible content management with custom APIs and scalable architectures.",
      label: "OPEN SOURCE"
    },
    {
      title: "Kentico Excellence",
      description: "Enterprise-grade platforms that streamline content management and enhance user experiences.",
      label: "ENTERPRISE"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-aaitek-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-display font-bold text-aaitek-white mb-8">
            Our <span className="text-gradient-aaitek">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-aaitek-light max-w-4xl mx-auto leading-relaxed">
            Expert solutions powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {staticServices.map((service, index) => (
            <div key={index} className="glass-card p-8 lg:p-12 hover:border-aaitek-yellow-300 transition-all duration-500 signature-glow">
              <h5 className="text-sm font-bold text-aaitek-yellow mb-4 tracking-wider font-mono">{service.label}</h5>
              <h4 className="text-xl lg:text-2xl font-bold text-aaitek-white mb-6">{service.title}</h4>
              <p className="text-aaitek-light leading-relaxed opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const StaticTechnologiesSection: React.FC = () => {
  const staticTechs = ['Contentful', 'Umbraco CMS', 'Kentico CMS', 'Sitecore XM', 'Contentstack', 'Strapi']

  return (
    <section className="py-20 lg:py-32 bg-aaitek-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div>
              <h6 className="text-aaitek-yellow font-bold mb-6 text-lg tracking-wider font-mono">TECHNOLOGIES</h6>
              <h3 className="text-display font-bold text-aaitek-white mb-12 leading-tight">
                <span className="text-gradient-aaitek">Enterprise-Grade</span> Solutions
              </h3>
              <p className="text-xl text-aaitek-light mb-12 leading-relaxed opacity-90">
                We deliver world-class content management systems and digital transformation solutions that scale with your business.
              </p>
              <Link href="/services">
                <button className="btn-primary px-10 py-5 text-lg signature-glow magnetic">
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {staticTechs.map((tech, index) => (
              <div key={index} className="glass-card flex items-center p-6 hover:border-aaitek-yellow-300 transition-all duration-300 magnetic">
                <div className="w-3 h-3 bg-aaitek-yellow rounded-full mr-4 animate-pulse-aaitek"></div>
                <span className="text-aaitek-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}