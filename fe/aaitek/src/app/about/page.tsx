"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Zap,
} from "lucide-react";

/** Data **/
const stats = [
  { label: "Years of Experience", value: "20+", icon: Award },
  { label: "Projects Delivered", value: "2+", icon: Star },
  { label: "Happy Clients", value: "2+", icon: Globe },
  { label: "Team Members", value: "3+", icon: Users },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push the boundaries of technology to deliver cutting-edge solutions that drive transformation.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships through exceptional service and results.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description:
      "We hold the highest standards in code quality, delivery, and customer experience.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description:
      "We think globally while acting locally—bringing world-class solutions anywhere you operate.",
  },
];

/** Commented out to avoid unused-vars when sections are hidden **/
// const timeline = [ ... ];
// const team = [ ... ];

export default function AboutPage() {
  return (
    <div className="bg-[#1C1C1C]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#2E2E2E] to-[#1C1C1C]" />
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FBD506] rounded-full mix-blend-multiply blur-xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#FFF480] rounded-full mix-blend-multiply blur-xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#FBD506] rounded-full mix-blend-multiply blur-xl animate-pulse" />
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We love <span className="text-[#FBD506]">challenges.</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBD506] to-[#FFF480]">
                  That is our motto.
                </span>
              </h1>
              <p className="text-xl text-[#F4F4F4] mb-8 leading-relaxed">
                Transform Your Digital Vision Into Reality. Only companies that
                combine data, design, and specialized talent can truly
                transform. That combination is exactly what Aaitek has focused
                on for 25+ years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="group w-full bg-[#FBD506] hover:bg-[#FFF480] text-[#1C1C1C] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]">
                    Start Your Journey
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/Services" className="w-full sm:w-auto">
                  <button className="group w-full border-2 border-[#FBD506] text-[#FBD506] hover:bg-[#FBD506] hover:text-[#1C1C1C] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2">
                    Our Services
                    <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 bg-gradient-to-r from-[#FBD506] to-[#FFF480]" />
              <div className="relative bg-[#2E2E2E] rounded-2xl p-4 border border-[#FBD506]/20">
                <Image
                  src="/img/About-banner.png"
                  alt="Aaitek team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FBD506] text-[#1C1C1C] rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-[#F4F4F4] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission + Values */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Empowering Your <span className="text-[#FBD506]">Digital Journey</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              We deliver smart, unique experiences powered by headless
              architecture—connecting brands with people and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/main-baner-about.png"
                  alt="Modern digital journey"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                The Coming Big Thing
              </h3>
              <p className="text-[#F4F4F4] mb-6 leading-relaxed">
                We combine digital experience, headless solutions, and content
                craft to design memorable journeys—engaging, enjoyable, and
                valuable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-[#FBD506]/20">
                  <Eye className="w-8 h-8 text-[#FBD506] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    Our Vision
                  </h4>
                  <p className="text-[#F4F4F4] text-sm">
                    Enable millions to use smarter digital experiences every day
                    through our innovations.
                  </p>
                </div>
                <div className="bg-[#2E2E2E] p-6 rounded-2xl border border-[#FBD506]/20">
                  <Target className="w-8 h-8 text-[#FBD506] mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">
                    Our Mission
                  </h4>
                  <p className="text-[#F4F4F4] text-sm">
                    Deliver exceptional experiences to people and businesses via
                    best-in-class headless platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#FBD506]">Values</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              Principles that shape our culture of excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-[#1C1C1C] hover:bg-[#2E2E2E] p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#FBD506]/20 hover:border-[#FBD506]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FBD506] to-[#FFF480] text-[#1C1C1C] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[#F4F4F4] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — commented out */}
      {/*
      <section className="py-20 bg-[#2E2E2E]">
        ...
      </section>
      */}

      {/* Team — commented out */}
      {/*
      <section className="py-20 bg-[#1C1C1C]">
        ...
      </section>
      */}

      {/* Location */}
      <section className="py-20 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#FBD506]">Location</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto">
              Based in Sydney, delivering globally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-[#FBD506] mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Sydney, Australia
                </h3>
              </div>
              <p className="text-[#F4F4F4] mb-6 leading-relaxed">
                Our HQ sits in Australia’s innovation hub. From here, we serve
                clients across time zones with world-class digital solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FBD506] rounded-full mr-4" />
                  <span className="text-[#F4F4F4]">Strategic APAC location</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FBD506] rounded-full mr-4" />
                  <span className="text-[#F4F4F4]">Access to top-tier talent</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FBD506] rounded-full mr-4" />
                  <span className="text-[#F4F4F4]">24/7 support across zones</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506] to-[#FFF480] rounded-2xl blur-xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#FBD506]/20">
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sydney%20Australia+(Aaitek%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="rounded-2xl"
                  title="Aaitek Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FBD506] to-[#FFF480] relative overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6">
            Want to get to know us more?
          </h2>
          <p className="text-xl text-[#1C1C1C] mb-8 max-w-2xl mx-auto">
            Let’s chat and turn your digital vision into reality.
          </p>
          <Link href="/contact">
            <button className="group bg-[#1C1C1C] hover:bg-[#2E2E2E] text-[#FBD506] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 mx-auto">
              Contact Us
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
