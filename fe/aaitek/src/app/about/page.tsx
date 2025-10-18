"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Users,
  Target,
  Eye,
  MapPin,
  Star,
  Award,
  Globe,
  Lightbulb,
  Heart,
  Zap
} from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '20+', icon: Award },
  { label: 'Projects Delivered', value: '2+', icon: Star },
  { label: 'Happy Clients', value: '2+', icon: Globe },
  { label: 'Team Members', value: '3+', icon: Users },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of technology to deliver cutting-edge solutions that drive business transformation and digital excellence.'
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting partnerships through exceptional service, results, and unwavering commitment.'
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to customer experience and innovation.'
  },
  {
    icon: Globe,
    title: 'Global Mindset',
    description: 'We think globally while acting locally, bringing world-class solutions to businesses everywhere they operate.'
  }
];

const timeline = [
  {
    year: '1999',
    title: 'Company Founded',
    description: 'Started as a small technology consulting firm with a vision to transform digital experiences through innovation.'
  },
  {
    year: '2005',
    title: 'First Major Partnership',
    description: 'Became certified partners with leading CMS platforms, expanding our service offerings and expertise significantly.'
  },
  {
    year: '2010',
    title: 'International Expansion',
    description: 'Opened our first international office and began serving clients across multiple continents with distinction.'
  },
  {
    year: '2015',
    title: 'Headless Revolution',
    description: 'Pioneered headless CMS implementations, becoming industry leaders in composable architecture and modern solutions.'
  },
  {
    year: '2020',
    title: 'Digital Transformation Era',
    description: 'Helped hundreds of companies navigate digital transformation during the global shift to digital-first operations.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Leading the integration of AI and machine learning into digital experience platforms for enhanced user engagement.'
  }
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/img/team-1.jpg',
    description: 'Visionary leader with 20+ years in digital transformation and enterprise solutions.'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/img/team-2.jpg',
    description: 'Technology expert specializing in headless architecture and scalable systems.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/img/team-3.jpg',
    description: 'Award-winning designer focused on user experience and digital innovation.'
  },
  {
    name: 'David Kumar',
    role: 'Lead Developer',
    image: '/img/team-4.jpg',
    description: 'Full-stack developer with expertise in modern frameworks and cloud technologies.'
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
    <div>
      {timeline.map((item, index) => (
        <div key={index} className={index === activeTimelineItem ? "active" : ""}>
          {item.title}
        </div>
      ))}
    </div>
  );
}

  return (
    <div className="bg-[#1C1C1C]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#2E2E2E] to-[#1C1C1C]"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FBD506] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#FFF480] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#FBD506] rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We love <span className="text-[#FBD506]">challenges.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD506] to-[#FFF480]">
                  That is our motto.
                </span>
              </h1>
              <p className="text-xl text-[#F4F4F4] mb-8 leading-relaxed">
                Transform Your Digital Vision Into Reality. Only companies that combine data, design and advanced specialized results with the right people can successfully transform. That strong combination is exactly what Aaitek has been focusing on for 25 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="group bg-[#FBD506] hover:bg-[#FFF480] text-[#1C1C1C] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                    Start Your Journey
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
                <Link href="/Services">
                  <button className="group border-2 border-[#FBD506] text-[#FBD506] hover:bg-[#FBD506] hover:text-[#1C1C1C] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2">
                    Our Services
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>

            {/* <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506] to-[#FFF480] rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-[#2E2E2E] rounded-2xl p-4 border border-[#FBD506]/20">
                  <Image
                    src="/img/About-banner.png"
                    alt="Aaitek Team"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FBD506] text-[#1C1C1C] rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[#F4F4F4] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Empowering Your <span className="text-[#FBD506]">Digital Journey</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              Aaitek is all about digital experiences and digital transformation. Through the power of headless architecture, we deliver smart and unique experiences to customers, people, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/main-baner-about.png"
                  alt="Digital Journey"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">The Coming Big Thing</h3>
              <p className="text-[#F4F4F4] mb-6 leading-relaxed">
                We&apos;re a combination of a digital experience provider, headless solutions creator, and a content experience company that designs unique user experiences to connect with the audience and make their digital journeys more engaging, enjoyable and valuable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-[#FBD506]/20">
                  <Eye className="w-8 h-8 text-[#FBD506] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
                  <p className="text-[#F4F4F4] text-sm">
                    To achieve a global scale of users who are using the power of smart digital experiences everyday through our innovative solutions.
                  </p>
                </div>
                <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-[#FBD506]/20">
                  <Target className="w-8 h-8 text-[#FBD506] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
                  <p className="text-[#F4F4F4] text-sm">
                    To provide a unique and exceptional digital experience to people, customers and the community through the power of headless platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#FBD506]">Values</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-[#1C1C1C] hover:bg-[#2E2E2E] p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-[#FBD506]/20 hover:border-[#FBD506]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FBD506] to-[#FFF480] text-[#1C1C1C] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-[#F4F4F4] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      

      {/* Team Section */}
      <section className="py-20 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-[#FBD506]">Team</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional client experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#FBD506]/20 hover:border-[#FBD506]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src="/img/about-section-2.png"
                    alt={member.name}
                    width={300}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-[#FBD506] font-medium mb-3">{member.role}</div>
                  <p className="text-[#F4F4F4] text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#FBD506]">Location</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              Based in beautiful Sydney, Australia, serving clients worldwide with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-[#FBD506] mr-3" />
                <h3 className="text-2xl font-bold text-white">Sydney, Australia</h3>
              </div>
              <p className="text-[#F4F4F4] mb-6 leading-relaxed">
                Our headquarters in Sydney puts us at the heart of Australia&apos;s technology innovation hub. From here, we serve clients across the globe, bringing world-class digital solutions to businesses of all sizes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FBD506] rounded-full mr-4"></div>
                  <span className="text-[#F4F4F4]">Strategic location in the Asia-Pacific region</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FBD506] rounded-full mr-4"></div>
                  <span className="text-[#F4F4F4]">Access to top-tier talent and innovation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#FBD506] rounded-full mr-4"></div>
                  <span className="text-[#F4F4F4]">24/7 support across global time zones</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506] to-[#FFF480] rounded-2xl blur-xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#FBD506]/20">
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
      <section className="py-20 bg-gradient-to-r from-[#FBD506] to-[#FFF480] relative overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6">
            Want to get to know us more?
          </h2>
          <p className="text-xl text-[#1C1C1C] mb-8 max-w-2xl mx-auto">
            We&apos;d love to chat. Let&apos;s get started with a conversation and transform your digital vision into reality!
          </p>
          <Link href="/contact">
            <button className="group bg-[#1C1C1C] hover:bg-[#2E2E2E] text-[#FBD506] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              Contact Us
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}