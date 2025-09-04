"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'menu', 'sobre', 'reviews', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', id: 'home', icon: '🏠' },
    { name: 'Menu', id: 'menu', icon: '🍽️' },
    { name: 'Sobre', id: 'sobre', icon: 'ℹ️' },
    { name: 'Avaliações', id: 'reviews', icon: '⭐' },
    { name: 'Contacto', id: 'contacto', icon: '📞' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-300 group-hover:scale-110">
              <span className="text-white text-xl">☕</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
              Choupana Caffe
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-pink-600 group-hover:w-3/4 transition-all duration-300 ${
                  activeSection === item.id ? 'w-3/4' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              Reservar Mesa
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-amber-600 p-2 rounded-lg hover:bg-amber-50 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        <div className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">☕</span>
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
                Choupana Caffe
              </h2>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform transition-all duration-300"
              >
                Reservar Mesa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}