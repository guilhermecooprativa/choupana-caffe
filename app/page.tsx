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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Café acolhedor com ambiente moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-orange-800/60 to-red-900/70"></div>
        </div>
        
        {/* Floating Coffee Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-300 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-orange-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-red-300 rounded-full animate-ping"></div>
          
          {/* Coffee Cup Images */}
          <div className="absolute top-32 right-20 w-16 h-16 opacity-60 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              alt="Café quente"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          
          <div className="absolute bottom-40 right-1/3 w-12 h-12 opacity-50 animate-float-delayed">
            <img 
              src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              alt="Café expresso"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          
          <div className="absolute top-1/2 left-10 w-14 h-14 opacity-40 animate-float-slow">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
              alt="Café latte"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
              Choupana Caffe
              <br />
              <span className="relative">
                Sentidos
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descobre o paraíso do pequeno-almoço e brunch na <span className="font-semibold text-amber-700">Choupana Caffe</span>. 
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
          onClick={() => scrollToSection('reviews')}
        >
          <ChevronDown />
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Os Nossos Favoritos 🍽️
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descobre os pratos que fazem os nossos clientes voltarem sempre
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Panquecas deliciosas com frutas"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">Panquecas Artesanais</h4>
                <p className="text-sm opacity-90">Com frutas frescas e mel</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Avocado toast com ovos"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">Avocado Toast</h4>
                <p className="text-sm opacity-90">Com ovos poché e sementes</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Café especial e pastelaria"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">Café Especial</h4>
                <p className="text-sm opacity-90">Grãos selecionados e pastelaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">
              O que dizem os nossos clientes ⭐⭐⭐⭐⭐
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testemunhos reais do TripAdvisor, só as melhores experiências.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ana M.",
                comment: "Simplesmente maravilhoso! O melhor brunch que já tive em Lisboa. Tudo fresco e delicioso.",
                date: "Março 2024",
              },
              {
                name: "João F.",
                comment: "Ambiente acolhedor e staff super simpático. Recomendo vivamente a avocado toast!",
                date: "Fevereiro 2024",
              },
              {
                name: "Carla R.",
                comment: "As panquecas são divinais e o café é top. Voltarei sempre que puder!",
                date: "Janeiro 2024",
              },
              {
                name: "Miguel T.",
                comment: "Local perfeito para começar o dia. Experiência inesquecível!",
                date: "Dezembro 2023",
              },
              {
                name: "Sara L.",
                comment: "Melhor pequeno-almoço da cidade. A qualidade é excecional e o serviço impecável.",
                date: "Novembro 2023",
              },
              {
                name: "Pedro A.",
                comment: "Espaço bonito, staff simpático e comida deliciosa. Nota máxima!",
                date: "Outubro 2023",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-center mb-4 space-x-2">
                  <span className="text-amber-600 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">“{review.comment}”</p>
                <div className="text-sm text-gray-500 flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{review.name}</span>
                  <span>{review.date}</span>
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
                Na Choupana Caffe, cada receita conta uma história, cada ingrediente é 
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Interior acolhedor do café"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                      Ambiente Acolhedor
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Equipa do café preparando café"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                      Equipa Dedicada
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1442512400268-3c2bdc4b3d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Café artesanal sendo preparado"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                      Café Artesanal
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Clientes desfrutando do café"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                      Momentos Especiais
                    </div>
                  </div>
                </div>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
