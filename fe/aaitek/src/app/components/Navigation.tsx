'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1c1c1c] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/img/logo.png" alt="Logo" width={180} height={50} className="w-[180px]" />
        </Link>

        {/* Hamburger */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 mt-4 md:mt-0 w-full md:w-auto`}
        >
          <Link href="/" className="block font-bold text-white hover:border-b-2 border-yellow-400 px-2 py-1">
            Home
          </Link>
          <Link href="/services" className="block font-bold text-white hover:border-b-2 border-yellow-400 px-2 py-1">
            Services
          </Link>
          <Link href="/about" className="block font-bold text-white hover:border-b-2 border-yellow-400 px-2 py-1">
            About Us
          </Link>
          <Link href="/contact" className="block font-bold text-white hover:border-b-2 border-yellow-400 px-2 py-1">
            Contact
          </Link>
          <Link href="/events" className="block font-bold text-white hover:border-b-2 border-yellow-400 px-2 py-1">
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}
