"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Events", href: "/events" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
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
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-[#1c1c1c]`}
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
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                    isActivePath(link.href)
                      ? "text-[#FBD506] bg-[#FBD506]/10"
                      : "text-white hover:text-[#FBD506] hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506]/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
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
                  <Link
                    key={link.name}
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