
"use client";

import React, { useState } from 'react';

export default function Footer() {
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterSubscribed(true);
    setTimeout(() => setIsNewsletterSubscribed(false), 3000);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-300 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              Visita-nos Hoje!
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos sempre prontos para te receber com um sorriso e os melhores sabores
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">📍</span>
              </div>
              <h4 className="text-xl font-semibold text-center">Localização</h4>
              <p className="text-gray-300 text-center">
                Rua das Delícias, 123<br />
                1200-001 Lisboa<br />
                <span className="text-amber-300 text-sm">Próximo ao Metro Marquês de Pombal</span>
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🕐</span>
              </div>
              <h4 className="text-xl font-semibold text-center">Horário</h4>
              <div className="text-gray-300 text-center space-y-1">
                <p>Segunda a Domingo</p>
                <p className="text-amber-300 font-semibold">7:00 - 15:00</p>
                <p className="text-sm text-gray-400">Última encomenda: 14:30</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">📞</span>
              </div>
              <h4 className="text-xl font-semibold text-center">Contacto</h4>
              <div className="text-gray-300 text-center space-y-2">
                <p>+351 21 123 4567</p>
                <p>info@choupanacaffee.pt</p>
                <button className="text-amber-300 hover:text-amber-200 text-sm underline">
                  Reservar Mesa
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">📧</span>
              </div>
              <h4 className="text-xl font-semibold text-center">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input 
                  type="email" 
                  placeholder="O teu email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <button 
                  type="submit"
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isNewsletterSubscribed 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isNewsletterSubscribed ? '✓ Subscrito!' : 'Subscrever'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Social Media & Quick Links */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Social Media */}
              <div className="text-center md:text-left">
                <h5 className="text-lg font-semibold mb-4">Segue-nos</h5>
                <div className="flex justify-center md:justify-start space-x-4">
                  {[
                    { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-600' },
                    { name: 'Facebook', icon: '👥', color: 'hover:bg-blue-600' },
                    { name: 'TripAdvisor', icon: '⭐', color: 'hover:bg-green-600' },
                    { name: 'Google', icon: '🔍', color: 'hover:bg-red-600' }
                  ].map((social) => (
                    <button
                      key={social.name}
                      className={`w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 transform`}
                      title={social.name}
                    >
                      <span className="text-xl text-white">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-right">
                <h5 className="text-lg font-semibold mb-4">Links Rápidos</h5>
                <div className="flex flex-wrap justify-center md:justify-end gap-4">
                  {['Home', 'Menu', 'Sobre', 'Avaliações'].map((link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-gray-300 hover:text-amber-300 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">☕</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Choupana Caffe
                </h3>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Onde cada manhã se transforma numa experiência única de sabores e momentos especiais.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Choupana Caffe. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desenvolvido por <span className="text-amber-400">cooprativa.pt</span>
              </p>
            </div>

            {/* Additional Info */}
            <div className="text-center md:text-right">
              <div className="space-y-2 text-sm text-gray-400">
                <p>⭐ 4.9/5 no TripAdvisor</p>
                <p>🏆 Melhor Brunch 2024</p>
                <p>🌱 Ingredientes Locais</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}