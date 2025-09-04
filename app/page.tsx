"use client";

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function page() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom CSS Chevron Down Component
  const ChevronDown = () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-amber-600"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-300 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
              Desperta os
              <br />
              <span className="relative">
                Sentidos
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descobre o paraíso do pequeno-almoço e brunch na <span className="font-semibold text-amber-700">Choupana Caffee</span>. 
              Sabores únicos que transformam cada manhã numa experiência inesquecível.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => scrollToSection('reviews')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 group"
              >
                Ver Testemunhos
                <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">💬</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 hover:shadow-lg transform transition-all duration-300"
              >
                Reservar Mesa
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-amber-600">🕰️</span>
                <span>Aberto 7h-15h</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-600">⭐</span>
                <span>4.9/5 avaliação</span>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          onClick={() => scrollToSection('menu')}
        >
          <ChevronDown />
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">
              Especialidades da Casa
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada prato é uma obra de arte culinária, preparada com ingredientes frescos e muito amor
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Brunch Imperial",
                description: "Ovos benedictinos, salmão fumado, avocado toast e fruta fresca",
                price: "€18.50",
                image: "🍳"
              },
              {
                name: "Pancakes dos Sonhos",
                description: "Stack de pancakes com frutos vermelhos, xarope de ácer e chantilly",
                price: "€12.90",
                image: "🥞"
              },
              {
                name: "Açaí Bowl Premium",
                description: "Bowl de açaí com granola caseira, banana, coco e sementes",
                price: "€9.50",
                image: "🍓"
              },
              {
                name: "Avocado Toast Gourmet",
                description: "Pão artesanal com abacate, tomate cherry e queijo feta",
                price: "€8.90",
                image: "🥑"
              },
              {
                name: "French Toast Deluxe",
                description: "Rabanada francesa com canela, mel e frutos secos",
                price: "€10.50",
                image: "🍞"
              },
              {
                name: "Smoothie Bowl Tropical",
                description: "Bowl de manga e maracujá com toppings crocantes",
                price: "€7.90",
                image: "🥭"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                  {item.name}
                </h4>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  {item.description}
                </p>
                <div className="text-center">
                  <span className="text-3xl font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-5xl font-bold text-gray-800">
                A Nossa História
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nascemos da paixão por criar momentos especiais através da gastronomia. 
                Na Choupana Caffee, cada receita conta uma história, cada ingrediente é 
                escolhido a dedo, e cada cliente é tratado como família.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde 2020 que servimos os melhores pequenos-almoços e brunches da cidade, 
                sempre com um sorriso e a garantia de qualidade que nos define.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-white/50 rounded-2xl">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="text-3xl font-bold text-amber-600">1000+</div>
                  <div className="text-gray-600 text-sm">Clientes Felizes</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-2xl">
                  <div className="text-3xl mb-2">🍽️</div>
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-gray-600 text-sm">Especialidades</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-2xl">
                  <div className="text-3xl mb-2">❤️</div>
                  <div className="text-3xl font-bold text-amber-600">4</div>
                  <div className="text-gray-600 text-sm">Anos de Paixão</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-pulse">☕</div>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/40 rounded-full animate-bounce flex items-center justify-center">
                  <span className="text-xl">🌟</span>
                </div>
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}