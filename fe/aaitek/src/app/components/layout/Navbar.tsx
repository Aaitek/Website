"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/Services",
    submenu: [
      { name: "Contentful", href: "/Services/contentful" },
      { name: "Umbraco", href: "/Services/umbraco" },
      { name: "Kentico", href: "/Services/kentico" },
      { name: "Contentstack", href: "/Services/contentstack" },
      { name: "Strapi", href: "/Services/strapi" },
      { name: "XM Cloud", href: "/Services/xm-cloud" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Events", href: "/events" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Contact Bar - Temporarily Commented Out */}
      {/* <div
        className="py-2 hidden lg:block text-black"
        style={{ background: `linear-gradient(to right, var(--color-primary), var(--color-primary-dark))` }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+61 435 987 212</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@aaitek.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Follow us:</span>
            <div className="flex space-x-3">
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#1c1c1c] shadow-2xl border-b border-[#FBD506]/20"
            : "bg-[#1c1c1c]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/img/logo.png"
                  alt="Aaitek Logo"
                  width={200}
                  height={60}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          isActivePath(link.href)
                            ? "text-[#FBD506] bg-[#FBD506]/10"
                            : "text-white hover:text-[#FBD506] hover:bg-white/5"
                        }`}
                        onMouseEnter={() => setActiveDropdown(link.name)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top ${
                          activeDropdown === link.name
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="p-2">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="flex items-center justify-between p-3 rounded-lg text-gray-700 hover:text-[#FBD506] hover:bg-[#FBD506]/5 transition-all duration-200 group/item"
                            >
                              <span className="font-medium">{sublink.name}</span>
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-1 group-hover/item:translate-x-0 transition-all duration-200" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${
                        isActivePath(link.href)
                          ? "text-[#FBD506] bg-[#FBD506]/10"
                          : "text-white hover:text-[#FBD506] hover:bg-white/5"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506]/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-6 bg-gradient-to-r from-[#FBD506] to-[#F4A607] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#FBD506]/25 transform hover:scale-105 transition-all duration-300 hover:from-[#F4A607] hover:to-[#FBD506]"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#1c1c1c] border-t border-[#FBD506]/20">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <div>
                        <button
                          className="w-full flex items-center justify-between p-4 rounded-xl font-semibold text-white hover:text-[#FBD506] hover:bg-white/5 transition-all duration-300"
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeDropdown === link.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-4 space-y-1">
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="block p-3 rounded-lg font-medium text-gray-300 hover:text-[#FBD506] hover:bg-white/5 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block p-4 rounded-xl font-semibold transition-all duration-300 ${
                          isActivePath(link.href)
                            ? "text-[#FBD506] bg-[#FBD506]/10"
                            : "text-white hover:text-[#FBD506] hover:bg-white/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-[#FBD506] to-[#F4A607] text-black text-center py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};