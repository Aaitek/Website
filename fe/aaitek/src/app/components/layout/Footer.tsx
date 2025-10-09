"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Calendar,
  Users,
  Award,
  ChevronUp,
} from "lucide-react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Contentful", href: "/Services/contentful" },
    { name: "Umbraco", href: "/Services/umbraco" },
    { name: "Kentico", href: "/Services/kentico" },
    { name: "Contentstack", href: "/Services/contentstack" },
    { name: "Strapi", href: "/Services/strapi" },
    { name: "XM Cloud", href: "/Services/xm-cloud" },
  ];

  const quickLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "What We Do", href: "/Services" },
    { name: "Our Events", href: "/events" },
    { name: "Career", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const stats = [
    { icon: Calendar, value: "20", label: "Years Experience" },
    { icon: Users, value: "2", label: "Projects Delivered" },
    { icon: Award, value: "2", label: "Happy Clients" },
  ];

  return (
    <footer className="relative bg-[#1c1c1c] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FBD506' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#FBD506] to-[#F4A607] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                Get the latest news about headless CMS, digital transformation, and technology trends delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-full text-black placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-black/20 transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <span>✓ Subscribed</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span className="hidden sm:inline">Subscribe</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FBD506] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-[#FBD506] mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link href="/" className="inline-block mb-6 group">
                  <Image
                    src="/img/logo.png"
                    alt="Aaitek Logo"
                    width={200}
                    height={60}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Aaitek is all about digital experiences and digital transformation. Through the power of headless CMS solutions, we deliver smart and unique experiences to clients, people, and the community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-[#FBD506] transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-[#FBD506]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FBD506]/20 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href="mailto:info@aaitek.com" className="font-medium">
                      info@aaitek.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 hover:text-[#FBD506] transition-colors duration-300 group">
                    <div className="w-10 h-10 bg-[#FBD506]/10 rounded-lg flex items-center justify-center group-hover:bg-[#FBD506]/20 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <a href="tel:+61435987212" className="font-medium">
                      +61 435 987 212
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 group">
                    <div className="w-10 h-10 bg-[#FBD506]/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Sydney, Australia</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h5 className="text-xl font-bold text-[#FBD506] mb-6 relative">
                  Our Services
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FBD506] rounded-full"></div>
                </h5>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-[#FBD506] transition-all duration-300 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h5 className="text-xl font-bold text-[#FBD506] mb-6 relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FBD506] rounded-full"></div>
                </h5>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-[#FBD506] transition-all duration-300 group"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social & Certifications */}
              <div>
                <h5 className="text-xl font-bold text-[#FBD506] mb-6 relative">
                  Connect With Us
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FBD506] rounded-full"></div>
                </h5>
                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    { icon: "fab fa-linkedin-in", href: "#", label: "LinkedIn" },
                    { icon: "fab fa-twitter", href: "#", label: "Twitter" },
                    { icon: "fab fa-facebook-f", href: "#", label: "Facebook" },
                    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
                    { icon: "fab fa-youtube", href: "#", label: "YouTube" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 hover:bg-[#FBD506] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-lg group-hover:text-black transition-colors duration-300`}></i>
                    </a>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">
                    <strong className="text-[#FBD506]">Certifications:</strong>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Contentful", "Umbraco", "Sitecore"].map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#FBD506]/10 text-[#FBD506] rounded-full text-sm font-medium border border-[#FBD506]/20"
                      >
                        {cert} Partner
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-center md:text-left">
                <p>
                  © {currentYear} Aaitek Technology Specialists. All rights reserved. | Designed and Developed by{" "}
                  <a
                    href="https://www.aaitek.com.au"
                    className="text-[#FBD506] hover:text-[#F4A607] transition-colors duration-300 font-medium"
                  >
                    Aaitek Pty Ltd
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-4 text-sm">
                  <Link
                    href="/terms-conditions"
                    className="text-gray-400 hover:text-[#FBD506] transition-colors duration-300"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-[#FBD506] transition-colors duration-300"
                  >
                    Privacy
                  </Link>
                </div>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-[#FBD506] hover:bg-[#F4A607] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="w-5 h-5 text-black group-hover:animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;