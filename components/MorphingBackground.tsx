"use client";

import React, { useEffect, useRef } from 'react';

const MorphingBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create morphing shapes
    const createMorphingShape = (index: number) => {
      const shape = document.createElement('div');
      shape.className = `morphing-shape shape-${index}`;
      
      // Random properties with padding to avoid edge cuts
      const size = 80 + Math.random() * 120;
      const padding = 150; // Add more padding to avoid edge cuts
      const x = padding + Math.random() * (window.innerWidth - 2 * padding);
      const y = padding + Math.random() * (window.innerHeight - 2 * padding);
      const color = `hsl(${30 + Math.random() * 60}, 70%, 60%)`; // Amber/orange range
      
      shape.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: ${color};
        border-radius: 50%;
        opacity: 0.03;
        filter: blur(30px);
        animation: morph-${index} ${8 + Math.random() * 4}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
      `;
      
      container.appendChild(shape);
    };

    // Create fewer morphing shapes to avoid overcrowding
    for (let i = 0; i < 4; i++) {
      createMorphingShape(i);
    }

    // Add CSS animations with smaller movements
    const style = document.createElement('style');
    style.textContent = `
      @keyframes morph-0 {
        0%, 100% { 
          transform: translate(0, 0) scale(1) rotate(0deg);
          border-radius: 50%;
        }
        25% { 
          transform: translate(20px, -15px) scale(1.1) rotate(90deg);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        50% { 
          transform: translate(-15px, 20px) scale(0.9) rotate(180deg);
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
        }
        75% { 
          transform: translate(15px, 10px) scale(1.05) rotate(270deg);
          border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
        }
      }
      
      @keyframes morph-1 {
        0%, 100% { 
          transform: translate(0, 0) scale(1) rotate(0deg);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        33% { 
          transform: translate(-20px, 15px) scale(1.15) rotate(120deg);
          border-radius: 50%;
        }
        66% { 
          transform: translate(25px, -10px) scale(0.85) rotate(240deg);
          border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
        }
      }
      
      @keyframes morph-2 {
        0%, 100% { 
          transform: translate(0, 0) scale(1) rotate(0deg);
          border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
        }
        20% { 
          transform: translate(20px, -25px) scale(1.2) rotate(72deg);
          border-radius: 50%;
        }
        40% { 
          transform: translate(-25px, 20px) scale(0.8) rotate(144deg);
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
        }
        60% { 
          transform: translate(25px, 25px) scale(1.1) rotate(216deg);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        80% { 
          transform: translate(-20px, -25px) scale(0.9) rotate(288deg);
          border-radius: 50%;
        }
      }
      
      @keyframes morph-3 {
        0%, 100% { 
          transform: translate(0, 0) scale(1) rotate(0deg);
          border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
        }
        25% { 
          transform: translate(-30px, 15px) scale(1.1) rotate(90deg);
          border-radius: 50%;
        }
        50% { 
          transform: translate(15px, -30px) scale(0.9) rotate(180deg);
          border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
        }
        75% { 
          transform: translate(30px, 30px) scale(1.2) rotate(270deg);
          border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = '';
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default MorphingBackground;