
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-white text-xl">☕</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
            Choupana Caffee
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'Menu', 'Sobre', 'Contacto'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-amber-600">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}