"use client";

import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Marquee from '../components/Marquee';
import ReviewCard from '../components/ReviewCard';
import InteractiveCard from '../components/InteractiveCard';
import LiquidBackground from '../components/LiquidBackground';
import WaveBackground from '../components/WaveBackground';
import MorphingBackground from '../components/MorphingBackground';
import WaveSeparator from '../components/WaveSeparator';

export default function page() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-white relative">
      {/* Liquid Background Effects */}
      <LiquidBackground />
      <WaveBackground />
      <MorphingBackground />
      
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden z-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Café acolhedor com ambiente moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-purple-800/60 to-indigo-900/70"></div>
        </div>
        
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in-up">
            {/* Text Background for Better Readability */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 max-w-5xl mx-auto animate-fade-in-up-delayed shadow-2xl">
              <h2 className="text-7xl md:text-8xl font-black mb-6 text-gray-900 leading-tight">
                Whoops-
                <br />
                <span className="relative text-6xl md:text-7xl">
                  Just way too good.
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce"></div>
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Rua das Delícias, 123, Lisboa<br />
                <span className="font-semibold text-pink-600">(351) 21 123 4567</span>
              </p>
            </div>
            
          </div>
        </div>
        
        {/* Wave Separator - Overlapping the hero */}
        <WaveSeparator 
          topColor="#ffffff" 
          bottomColor="#f8fafc" 
          className=""
        />
      </section>

      {/* Brioches Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-6xl font-black text-gray-900 mb-4">
              Warm 'n'<br />
              yummy!
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-gray-900 mb-8">Our Famous Fluffy Rolls</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Classic</h5>
                    <p className="text-sm text-gray-600">Vanilla Cream Cheese Frosting</p>
                  </div>
                  <span className="font-bold text-gray-900">6,00€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Pistachio Bliss</h5>
                    <p className="text-sm text-gray-600">Pistachio butter, crushed pistachios & crumble</p>
                  </div>
                  <span className="font-bold text-gray-900">7,50€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Speculoos Dream</h5>
                    <p className="text-sm text-gray-600">Speculoos cream & cookie crumble</p>
                  </div>
                  <span className="font-bold text-gray-900">7,00€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Gooey S'mores Delight</h5>
                    <p className="text-sm text-gray-600">Chocolate ganache & toasted meringue</p>
                  </div>
                  <span className="font-bold text-gray-900">7,00€</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">4 sweet rolls</h5>
                  </div>
                  <span className="font-bold text-gray-900">25€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">6 sweet rolls</h5>
                  </div>
                  <span className="font-bold text-gray-900">36€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-6xl font-black text-gray-900 mb-4">
              Coffee Menu
            </h3>
            <p className="text-lg text-gray-600">12 oz</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Latte</h5>
                <span className="font-bold text-gray-900">5,50€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Cappuccino</h5>
                <span className="font-bold text-gray-900">5,00€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Cortado</h5>
                <span className="font-bold text-gray-900">4,25€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Espresso</h5>
                <span className="font-bold text-gray-900">3,00€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Allongé</h5>
                <span className="font-bold text-gray-900">3,00€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Americano</h5>
                <span className="font-bold text-gray-900">3,00€</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <h5 className="font-semibold text-gray-900">Affogato</h5>
                <span className="font-bold text-gray-900">5,75€</span>
              </div>
              <div className="py-2">
                <p className="text-sm text-gray-600">Alternative milk - Oat or Almond – Your Choice! +0,75€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Serve Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-6xl font-black text-gray-900 mb-4">
              Frosty &<br />
              fabulous
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-gray-900 mb-8">Soft serve ice cream</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="py-2">
                  <h5 className="font-semibold text-gray-900 mb-2">Classic Vanilla</h5>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-600">Small (3 swirls)</span>
                    <span className="font-bold text-gray-900">4,25€</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-600">Medium (4 swirls)</span>
                    <span className="font-bold text-gray-900">5,25€</span>
                  </div>
                </div>
                <div className="py-2">
                  <h5 className="font-semibold text-gray-900 mb-2">Vegan Delight – Coconut & Vanilla</h5>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-600">Small (2 swirls)</span>
                    <span className="font-bold text-gray-900">4,25€</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm text-gray-600">Medium (3 swirls)</span>
                    <span className="font-bold text-gray-900">6,25€</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Twist of the moment</h5>
                    <p className="text-sm text-gray-600">Vanilla + fruity soft sorbet – One size only</p>
                  </div>
                  <span className="font-bold text-gray-900">5,75€</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <h5 className="font-semibold text-gray-900">Sugar Cone</h5>
                  <span className="font-bold text-gray-900">+1,00€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <h5 className="font-semibold text-gray-900">Belgian dip</h5>
                  <span className="font-bold text-gray-900">+2,50€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Brioche Roll & Soft Serve Combo</h5>
                    <p className="text-sm text-gray-600">Cinnamon Roll + extra vanilla or vegan soft serve (+1,00€)</p>
                  </div>
                  <span className="font-bold text-gray-900">8,50€</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h5 className="font-semibold text-gray-900">Milkshake</h5>
                    <p className="text-sm text-gray-600">Made with vanilla or vegan soft serve (+1,00€)</p>
                  </div>
                  <span className="font-bold text-gray-900">7,75€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-r from-pink-900 to-purple-900 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-4">
              O que dizem os nossos clientes ⭐⭐⭐⭐⭐
            </h3>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Testemunhos reais do TripAdvisor, só as melhores experiências.
            </p>
          </div>

          <div className="space-y-8">
            <div className="relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-pink-900 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pink-900 to-transparent z-10 pointer-events-none"></div>
              
              <Marquee direction="left" className="py-4" speed={30}>
              {[
                {
                  name: "Ana M.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
                  rating: 5,
                  review: 'Simplesmente maravilhoso! O melhor brunch que já tive em Lisboa. Tudo fresco e delicioso.',
                  date: "Março 2024",
                },
                {
                  name: "João F.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
                  rating: 5,
                  review: 'Ambiente acolhedor e staff super simpático. Recomendo vivamente a avocado toast!',
                  date: "Fevereiro 2024",
                },
                {
                  name: "Carla R.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carla",
                  rating: 5,
                  review: 'As panquecas são divinais e o café é top. Voltarei sempre que puder!',
                  date: "Janeiro 2024",
                },
                {
                  name: "Miguel T.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=miguel",
                  rating: 5,
                  review: 'Local perfeito para começar o dia. Experiência inesquecível!',
                  date: "Dezembro 2023",
                },
                {
                  name: "Sara L.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
                  rating: 5,
                  review: 'Melhor pequeno-almoço da cidade. A qualidade é excecional e o serviço impecável.',
                  date: "Novembro 2023",
                },
                {
                  name: "Pedro A.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
                  rating: 5,
                  review: 'Espaço bonito, staff simpático e comida deliciosa. Nota máxima!',
                  date: "Outubro 2023",
                },
                {
                  name: "Maria S.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
                  rating: 5,
                  review: 'Café excecional e ambiente único. Definitivamente o meu local favorito!',
                  date: "Setembro 2023",
                },
                {
                  name: "Ricardo P.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ricardo",
                  rating: 5,
                  review: 'Serviço impecável e comida de qualidade superior. Recomendo a 100%!',
                  date: "Agosto 2023",
                },
              ].map((review, index) => (
                <ReviewCard
                  key={index}
                  avatar={review.avatar}
                  name={review.name}
                  rating={review.rating}
                  review={review.review}
                  date={review.date}
                />
              ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-6xl font-black text-gray-900 mb-8">
              Clearly, you've<br />
              just<br />
              stepped into the<br />
              take-out<br />
              fun zone.
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-3xl font-bold text-gray-900 mb-8">About</h4>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A delicious detour you won't forget — finger-lickin' guaranteed!
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              The team behind Café Nordik is back with a brand-new adventure. One that puts indulgence and good times with friends at the heart of this tasty new spot in Lisboa. Nothing beats a brioche… Okay, maybe that's up for debate, but definitely not when it's a Choupana Caffe brioche. That said, we'll admit a classic soft-serve cone is pretty hard to beat too.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              So why choose? We're serving up the best of both worlds—with plenty of options, zero compromises, and all the good vibes.
            </p>
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
        
        @keyframes fade-in-up-delayed {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          50% {
            opacity: 0.5;
            transform: translateY(25px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
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
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1.5s ease-out;
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
