"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  ChevronRight,
  Users,
  Target,
  Eye,
  MapPin,
  Star,
  Award,
  TrendingUp,
  Globe,
  Lightbulb,
  Heart,
  Zap
} from 'lucide-react';

// Note: Since we're using "use client", we can't export metadata directly
// This would typically be in a separate metadata file or parent layout

const stats = [
  { label: 'Years of Experience', value: '25+', icon: Award },
  { label: 'Successful Projects', value: '500+', icon: Star },
  { label: 'Global Clients', value: '100+', icon: Globe },
  { label: 'Team Members', value: '50+', icon: Users },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive business transformation.'
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Our clients\' success is our success. We build lasting partnerships through exceptional service and results.'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer experience.'
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    description: 'We think globally while acting locally, bringing world-class solutions to businesses everywhere.'
  }
];

const timeline = [
  {
    year: '1999',
    title: 'Company Founded',
    description: 'Started as a small technology consulting firm with a vision to transform digital experiences.'
  },
  {
    year: '2005',
    title: 'First Major Partnership',
    description: 'Became certified partners with leading CMS platforms, expanding our service offerings.'
  },
  {
    year: '2010',
    title: 'International Expansion',
    description: 'Opened our first international office and began serving clients across multiple continents.'
  },
  {
    year: '2015',
    title: 'Headless Revolution',
    description: 'Pioneered headless CMS implementations, becoming industry leaders in composable architecture.'
  },
  {
    year: '2020',
    title: 'Digital Transformation Era',
    description: 'Helped hundreds of companies navigate digital transformation during the global shift to digital-first.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Leading the integration of AI and machine learning into digital experience platforms.'
  }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/img/team-1.jpg',
    description: 'Visionary leader with 20+ years in digital transformation.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/img/team-2.jpg',
    description: 'Technology expert specializing in headless architecture.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/img/team-3.jpg',
    description: 'Award-winning designer focused on user experience.'
  },
  {
    name: 'David Kumar',
    role: 'Lead Developer',
    image: '/img/team-4.jpg',
    description: 'Full-stack developer with expertise in modern frameworks.'
  }
];

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % timeline.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We love <span className="text-yellow-400">challenges.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  That is our motto.
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Only companies that combine data, design and advanced specialized results with the right people,
                can successfully transform. And that strong combination is exactly what Aaitek has been focusing on
                for 25 years in order to make both customers and their employees successful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="group bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                    Start Your Journey
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
                    Our Services
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="/img/About-banner.png"
                  alt="Aaitek Team"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering Your <span className="text-blue-600">Digital Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aaitek is all about digital experiences and digital transformation. Through the power of headless
              architecture, we deliver smart and unique experiences to customers, people, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="/img/main-baner-about.png"
                alt="Digital Journey"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Coming Big Thing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We can say we're a combination of a digital experience provider, headless solutions creator,
                and a content experience company that designs unique user experiences to connect with the
                audience and make their digital journeys more engaging, more enjoyable and more valuable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Eye className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm">
                    To achieve a global scale of users who are using the power of smart digital experiences
                    everyday through our solutions.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <Target className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm">
                    To provide a unique and exceptional digital experience to people, customers and the
                    community through the power of headless platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-gray-800 hover:bg-gray-700 p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a global leader in digital transformation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 transition-all duration-300 ${
                    activeTimelineItem === index ? 'bg-blue-600 scale-125' : 'bg-gray-400'
                  }`}></div>

                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-purple-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional client experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="/img/about-section-2.png"
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in beautiful Sydney, Australia, serving clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Sydney, Australia</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our headquarters in Sydney puts us at the heart of Australia's technology innovation hub.
                From here, we serve clients across the globe, bringing world-class digital solutions to
                businesses of all sizes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Strategic location in the Asia-Pacific region</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Access to top-tier talent and innovation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">24/7 support across global time zones</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sydney%20Australia+(AaiTek%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="rounded-2xl"
                  title="Aaitek Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to get to know us more?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We'd love to chat. Let's get started with a conversation and take it from there!
          </p>
          <Link href="/contact">
            <button className="group bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Contact Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}