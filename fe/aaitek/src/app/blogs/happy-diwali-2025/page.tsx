"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Sparkles, Heart, Star, Lightbulb, Users, Award } from "lucide-react";

/**
 * Aaitek — Happy Diwali 2025 Static Blog Post
 * Pure static content - no server-side rendering or data fetching
 * All content is hardcoded for maximum performance and reliability
 */

export default function HappyDiwaliPage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Back to blogs */}
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-[#FBD506] hover:text-[#F4A607] transition-colors mb-6 p-3 rounded-lg hover:bg-[#FBD506]/10 border border-[#FBD506]/20 hover:border-[#FBD506]/40"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-medium">Back to all blogs</span>
              </Link>

              {/* Festival Info */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#FBD506]" />
                  <h3 className="text-lg font-semibold text-[#FBD506]">Festival of Lights</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Diwali, also known as Deepavali, is one of the most important festivals in Hindu culture, symbolizing the victory of light over darkness and good over evil.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white">October 20, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">5 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Significance:</span>
                    <span className="text-white">New Beginnings</span>
                  </div>
                </div>
              </div>

              {/* Current Category */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-3">Category</h3>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-[#FBD506]/20 text-[#FBD506]">
                  <Star className="w-4 h-4" />
                  Company News
                </div>
              </div>

              {/* Tags */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#FBD506]/20 text-[#FBD506]">
                    #Diwali
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#F4A607]/20 text-[#F4A607]">
                    #Festival
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#10B981]/20 text-[#10B981]">
                    #Innovation
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-[#8B5CF6]/20 text-[#8B5CF6]">
                    #Community
                  </span>
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-3">Share the Joy</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Spread the light of Diwali with your network and celebrate innovation together.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[#FBD506] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#F4A607] transition-colors"
                  >
                    Get Started with Aaitek
                  </Link>
                  <Link
                    href="/services"
                    className="block w-full text-center border border-[#FBD506] text-[#FBD506] px-4 py-2 rounded-lg font-medium hover:bg-[#FBD506]/10 transition-colors"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>

              {/* Special Diwali Statistics */}
              <div className="bg-gradient-to-br from-[#FBD506]/10 to-[#F4A607]/10 rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-4">Celebrating Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FBD506] rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">20+</div>
                      <div className="text-xs text-gray-400">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F4A607] rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">100+</div>
                      <div className="text-xs text-gray-400">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">∞</div>
                      <div className="text-xs text-gray-400">Innovation Potential</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="bg-[#2E2E2E] rounded-xl overflow-hidden border border-[#FBD506]/20">
              {/* Hero Image */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/posts/diwali-2025/cover.jpg"
                  alt="Aaitek Diwali 2025 - Festival of Lights celebration with technology and innovation"
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBD506]/90 text-black text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Festival of Lights 2025
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    October 20, 2025
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Team Aaitek
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    5 min read
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Happy Diwali 2025: Illuminating Innovation Together
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                  Celebrating the Festival of Lights with our community, partners, and the spirit of digital transformation.
                </p>

                {/* Content */}
                <div className="prose prose-lg prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-semibold prose-headings:mb-4 prose-headings:mt-8
                  prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-[#FBD506] prose-a:no-underline hover:prose-a:text-[#F4A607] prose-a:transition-colors
                  prose-strong:text-white prose-strong:font-semibold
                  prose-em:text-gray-200 prose-em:italic
                  prose-ul:text-gray-300 prose-ol:text-gray-300 prose-ul:mb-6 prose-ol:mb-6
                  prose-li:text-gray-300 prose-li:leading-relaxed prose-li:mb-2
                  prose-blockquote:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-[#FBD506]
                  prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-[#1C1C1C] prose-blockquote:py-4 prose-blockquote:rounded-r-lg">

                  <h2>🪔 Illuminating Innovation, Empowering Progress</h2>

                  <p>
                    As the festival of lights brightens our world, Aaitek celebrates the spirit of <strong>renewal</strong>, <strong>creativity</strong>, and <strong>connection</strong> — values that drive our mission to empower innovation through composable, scalable, and intelligent digital solutions.
                  </p>

                  <p>
                    This Diwali represents more than just a festival; it symbolizes the triumph of knowledge over ignorance, hope over despair, and innovation over stagnation. At Aaitek, these principles guide everything we do as we help organizations transform their digital landscape.
                  </p>

                  <h3>💡 The Light of Digital Transformation</h3>

                  <p>
                    Just as Diwali lamps dispel darkness, digital transformation illuminates new possibilities for businesses. Our expertise in <strong>headless CMS solutions</strong>, <strong>composable architecture</strong>, and <strong>cloud-native technologies</strong> helps organizations break free from legacy constraints and embrace the future.
                  </p>

                  <ul>
                    <li><strong>🏗️ Contentful & Strapi Mastery:</strong> Building flexible, scalable content management systems that adapt to your business needs</li>
                    <li><strong>⚛️ Next.js & React Excellence:</strong> Creating lightning-fast, user-centric experiences that delight customers</li>
                    <li><strong>☁️ Azure & Cloud Solutions:</strong> Ensuring reliability, security, and performance at enterprise scale</li>
                    <li><strong>🧩 Composable Commerce:</strong> Enabling agile, future-ready business models that scale with innovation</li>
                  </ul>

                  <h3>🤝 Celebrating Our Community</h3>

                  <p>
                    This Diwali, we extend our heartfelt gratitude to our clients, partners, and team members who make our mission possible. Your trust and collaboration light up our path to innovation.
                  </p>

                  <blockquote>
                    <p>"Together, we illuminate the digital future, one innovative solution at a time. May this Diwali bring prosperity, joy, and technological advancement to all."</p>
                    <footer>— Team Aaitek</footer>
                  </blockquote>

                  <h3>🚀 Looking Ahead: A Brighter Digital Future</h3>

                  <p>
                    As we celebrate this festival of lights, we're excited about the innovations ahead. In 2025, we're committed to:
                  </p>

                  <ol>
                    <li>🤖 Expanding our <strong>AI-powered solutions</strong> for content management and personalization</li>
                    <li>🏛️ Deepening our expertise in <strong>composable commerce</strong> and headless architectures</li>
                    <li>🤝 Strengthening partnerships with leading technology providers</li>
                    <li>🌍 Contributing to open-source communities and knowledge sharing</li>
                    <li>📈 Delivering measurable business outcomes through digital transformation</li>
                  </ol>

                  <h3>🏡 From Our Family to Yours</h3>

                  <p>
                    May this Diwali illuminate your path with success, fill your homes with happiness, and your businesses with unprecedented growth. As we light the lamps tonight, let's also kindle the flame of innovation that will guide us toward a brighter, more connected digital future.
                  </p>

                  <div className="bg-gradient-to-r from-[#FBD506]/20 to-[#F4A607]/20 p-6 rounded-lg border border-[#FBD506]/30 my-8">
                    <h4 className="text-[#FBD506] font-bold text-xl mb-3">🎆 Special Diwali Wishes</h4>
                    <p className="text-white font-medium text-lg mb-2">
                      <em>May the divine light of Diwali bring peace, prosperity, and happiness to your life.</em>
                    </p>
                    <p className="text-[#FBD506] font-semibold">
                      Wishing you and your family a very Happy Diwali filled with light, laughter, and limitless possibilities! ✨
                    </p>
                  </div>

                  <h3>🎯 Why Choose Aaitek for Your Digital Journey?</h3>

                  <p>
                    Just as Diwali represents the victory of light over darkness, we help businesses overcome digital challenges with innovative solutions:
                  </p>

                  <ul>
                    <li><strong>🎨 Design Excellence:</strong> Creating beautiful, intuitive user experiences</li>
                    <li><strong>⚡ Performance First:</strong> Building fast, reliable, and scalable applications</li>
                    <li><strong>🔒 Security Focused:</strong> Implementing best practices for data protection</li>
                    <li><strong>📱 Mobile Optimized:</strong> Ensuring seamless experiences across all devices</li>
                    <li><strong>🔧 Future-Proof:</strong> Using modern technologies that grow with your business</li>
                  </ul>

                  <p>
                    Let's light up the digital world together with innovation, creativity, and the spirit of Diwali!
                  </p>
                </div>

                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t border-[#FBD506]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FBD506] to-[#F4A607] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">A</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">About Team Aaitek</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Passionate technology specialists dedicated to digital transformation and innovation. With over 20 years of combined experience, we help businesses illuminate their digital potential through cutting-edge solutions and composable architectures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-gradient-to-r from-[#FBD506]/10 to-[#F4A607]/10 rounded-xl border border-[#FBD506]/20">
                  <h4 className="text-xl font-semibold text-white mb-2">🌟 Ready to Illuminate Your Digital Journey?</h4>
                  <p className="text-gray-300 mb-4">
                    Let's discuss how our expertise in headless CMS, composable architecture, and digital transformation can light up your business potential this festive season.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="bg-[#FBD506] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#F4A607] transition-colors inline-flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Start Your Journey
                    </Link>
                    <Link
                      href="/services"
                      className="border border-[#FBD506] text-[#FBD506] px-6 py-3 rounded-lg font-semibold hover:bg-[#FBD506]/10 transition-colors inline-flex items-center gap-2"
                    >
                      <Lightbulb className="w-4 h-4" />
                      Explore Services
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}