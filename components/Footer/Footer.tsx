
"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4">
              Visita-nos Hoje!
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Estamos sempre prontos para te receber com um sorriso e os melhores sabores
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">📍</span>
              </div>
              <h4 className="text-xl font-semibold">Localização</h4>
              <p className="text-gray-300">
                Rua das Delícias, 123<br />
                1200-001 Lisboa
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🕐</span>
              </div>
              <h4 className="text-xl font-semibold">Horário</h4>
              <p className="text-gray-300">
                Segunda a Domingo<br />
                7:00 - 15:00
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">📞</span>
              </div>
              <h4 className="text-xl font-semibold">Contacto</h4>
              <p className="text-gray-300">
                +351 21 123 4567<br />
                info@choupanacaffee.pt
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6">
              <button className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300 hover:scale-110 transform">
                <span className="text-xl text-white">📷</span>
              </button>
              <button className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300 hover:scale-110 transform">
                <span className="text-xl text-white">👥</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Choupana Caffe. Todos os direitos reservados. Desenvolvido por cooprativa.pt.
          </p>
        </div>
      </footer>
    </>
  );
}