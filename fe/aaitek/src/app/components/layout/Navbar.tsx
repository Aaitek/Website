"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Events", href: "/events" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/img/logo.png" alt="Aaitek Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold">Aaitek</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium hover:text-indigo-600 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 bg-white text-gray-800 rounded-lg shadow-xl py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-6 py-2 font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};