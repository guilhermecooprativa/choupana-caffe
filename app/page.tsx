"use client";

import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Page() {
  useEffect(() => {
    const handleScroll = () => {
      // Obter elementos das imagens
      const image1 = document.getElementById('image-1');
      const image2 = document.getElementById('image-2');
      
      console.log('Image1 found:', !!image1, 'Image2 found:', !!image2);
      
      if (image1 && image2) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calcular progresso baseado na posição da secção do menu
        const menuSectionStart = windowHeight * 1.5; // 150vh
        const menuSectionEnd = menuSectionStart + (windowHeight * 1.5); // 150vh para o menu
        
        const menuScrollProgress = Math.max(0, Math.min(1, (scrollY - menuSectionStart) / (menuSectionEnd - menuSectionStart)));
        
        console.log('Scroll Y:', scrollY, 'Menu Start:', menuSectionStart, 'Menu End:', menuSectionEnd, 'Menu Progress:', menuScrollProgress);
        
        // Imagem 1: Sempre visível
        image1.style.opacity = '1';
        image1.style.transform = 'scale(1)';
        
        // Imagem 2: Aparece quando o menu já está a fazer scroll
        if (menuScrollProgress >= 0.3) {
          const progress = (menuScrollProgress - 0.3) / 0.7; // De 30% a 100% do menu
          console.log('Image 2 progress:', progress, 'Menu Progress:', menuScrollProgress);
          image2.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
          image2.style.opacity = '1';
          image2.style.transform = `scale(${progress})`;
          image2.style.zIndex = '10'; // Garantir que está por cima
        } else {
          console.log('Image 2 hidden, Menu Progress:', menuScrollProgress);
          image2.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
          image2.style.opacity = '0';
          image2.style.transform = 'scale(0)';
          image2.style.zIndex = '5';
        }
      } else {
        console.log('Images not found!');
      }
    };

    // Aguardar um pouco para garantir que os elementos existem
    setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Executar uma vez no início
    }, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Primeira Secção - Fundo #F6F5F0 com título dividido e imagem cortada */}
      <section className="h-[150vh] relative bg-[#F6F5F0] overflow-hidden">
        {/* Título dividido */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight">
            <div className="mb-4">Choupana</div>
            <div>Caffe</div>
          </h1>
        </div>
        
        {/* Imagem cortada que se revela com scroll */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Choupana Caffe"
            className="w-full h-[100vh] object-cover object-center"
          />
        </div>
      </section>

      {/* Segunda Secção - Castanho com Menu e Imagem */}
      <section className="py-20 bg-[#9B663A]">
        <div className="container mx-auto px-6">
          <div className="bg-[#F8F6F0] rounded-[20px] p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Coluna Esquerda - Menu de Café */}
              <div className="py-8">
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-gray-900 mb-2 tracking-wide">COFFEE</h2>
                  <div className="w-16 h-1 bg-[#9B663A] rounded-full"></div>
                </div>
                
                <div className="space-y-12">
                  {/* Espressos */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider">Espressos</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Espresso</span>
                        <span className="font-bold text-gray-900 text-xl">0,95€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Decaf</span>
                        <span className="font-bold text-gray-900 text-xl">0,95€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Macchiato</span>
                        <span className="font-bold text-gray-900 text-xl">1,25€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Espresso Macchiato</span>
                        <span className="font-bold text-gray-900 text-xl">1,30€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Double Espresso</span>
                        <span className="font-bold text-gray-900 text-xl">2,00€</span>
                      </div>
                    </div>
                  </div>

                  {/* Café com Leite */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider">Café com Leite</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Americano</span>
                        <span className="font-bold text-gray-900 text-xl">1,70€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Coffee with Milk</span>
                        <span className="font-bold text-gray-900 text-xl">1,80€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Regular Latte</span>
                        <span className="font-bold text-gray-900 text-xl">1,90€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Cappuccino</span>
                        <span className="font-bold text-gray-900 text-xl">2,70€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Latte Macchiato</span>
                        <span className="font-bold text-gray-900 text-xl">3,15€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg text-lg">Flavored Latte Macchiato</span>
                        <span className="font-bold text-gray-900 text-xl">3,40€</span>
                      </div>
                    </div>
                  </div>

                  {/* Especiais */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider">Especiais</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <div>
                          <span className="text-gray-700 font-medium text-lg">Caffe Mocha</span>
                          <div className="text-xs text-gray-500 mt-1">Nutella, Milk Foam, Coffee, Whipped Cream</div>
                        </div>
                        <span className="font-bold text-gray-900 text-xl">3,70€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <div>
                          <span className="text-gray-700 font-semibold text-[#9B663A]">Choupana Espresso</span>
                          <div className="text-xs text-gray-500 mt-1">Condensed Milk, Coffee, Cinnamon, Whipped Cream</div>
                        </div>
                        <span className="font-bold text-gray-900 text-xl">2,50€</span>
                      </div>
                    </div>
                  </div>

                  {/* Bebidas Frias */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider">Bebidas Frias</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg">Iced Latte Macchiato</span>
                        <span className="font-bold text-gray-900 text-xl">3,25€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg">Iced Flavored Latte Macchiato</span>
                        <span className="font-bold text-gray-900 text-xl">3,50€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg">Iced Caffe Mocha</span>
                        <span className="font-bold text-gray-900 text-xl">3,80€</span>
                      </div>
                    </div>
                  </div>

                  {/* Outros */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 uppercase tracking-wider">Outros</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg">Cup of Milk 20cl</span>
                        <span className="font-bold text-gray-900 text-xl">1,50€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg">Large Cup of Milk 30cl</span>
                        <span className="font-bold text-gray-900 text-xl">1,90€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <span className="text-gray-700 font-medium text-lg">Chocolate Milk 30cl</span>
                        <span className="font-bold text-gray-900 text-xl">2,30€</span>
                      </div>
                      <div className="flex justify-between items-center py-4 border-b border-gray-300">
                        <div>
                          <span className="text-gray-700 font-medium text-lg">Hot Chocolate</span>
                          <div className="text-xs text-gray-500 mt-1">Only Whole/Semi-Skimmed Milk</div>
                        </div>
                        <span className="font-bold text-gray-900 text-xl">3,00€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Imagem do Café com Scroll e Transições */}
              <div className="relative">
                <div className="sticky top-20 h-[calc(100vh-10rem)] my-10">
                  <div className="rounded-[20px] overflow-hidden w-full h-full relative">
                    {/* Imagem 1 - Base */}
                    <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" id="image-1">
                      <img 
                        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Café artesanal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Imagem 2 - Transição */}
                    <div className="absolute inset-0" id="image-2" style={{opacity: 0, transform: 'scale(0)'}}>
                      <img 
                        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Café especial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terceira Secção - Fundo #F6F5F0 */}
      <section className="min-h-screen flex items-center justify-center bg-[#F6F5F0]">
        <div className="text-center text-gray-900">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Secção 3
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Conteúdo da terceira secção em branco.
          </p>
        </div>
      </section>

      {/* Quarta Secção - Castanho/Amber */}
      <section className="min-h-screen flex items-center justify-center bg-amber-800">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Secção 4
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Conteúdo da quarta secção em cor castanho/amber.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
