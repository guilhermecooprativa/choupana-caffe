"use client";

import React from 'react';

interface WaveSeparatorProps {
  topColor?: string;
  bottomColor?: string;
  className?: string;
}

const WaveSeparator = ({ 
  topColor = "#fefce8", // amber-50
  bottomColor = "#92400e", // amber-800
  className = "" 
}: WaveSeparatorProps) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ zIndex: 60 }}>
      <svg
        className="w-full h-24 md:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="50%" stopColor={topColor} />
            <stop offset="100%" stopColor={topColor} />
          </linearGradient>
          <filter id="waveBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
          </filter>
        </defs>
        
        {/* Background wave for smooth edges */}
        <path
          d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,100 1200,60 L1200,120 L0,120 Z"
          fill={bottomColor}
          fillOpacity="0.3"
          className="animate-wave-bg"
        />
        
        {/* Main wave path */}
        <path
          d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,100 1200,60 L1200,120 L0,120 Z"
          fill={bottomColor}
          className="animate-wave-slow"
        />
        
        {/* Secondary wave for depth */}
        <path
          d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 L1200,120 L0,120 Z"
          fill={bottomColor}
          fillOpacity="0.7"
          className="animate-wave-medium"
        />
        
        {/* Top wave accent */}
        <path
          d="M0,40 C100,0 200,80 300,40 C400,0 500,80 600,40 C700,0 800,80 900,40 C1000,0 1100,80 1200,40 L1200,120 L0,120 Z"
          fill={bottomColor}
          fillOpacity="0.5"
          className="animate-wave-fast"
        />
        
        {/* Smoothing wave for edges */}
        <path
          d="M0,50 C100,10 200,90 300,50 C400,10 500,90 600,50 C700,10 800,90 900,50 C1000,10 1100,90 1200,50 L1200,120 L0,120 Z"
          fill={bottomColor}
          fillOpacity="0.2"
          className="animate-wave-smooth"
        />
      </svg>

      <style jsx>{`
        @keyframes wave-bg {
          0% { 
            transform: translateX(-20px) scaleY(1);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(10px) scaleY(1.05);
            opacity: 0.4;
          }
          100% { 
            transform: translateX(-20px) scaleY(1);
            opacity: 0.3;
          }
        }
        
        @keyframes wave-slow {
          0% { 
            transform: translateX(-30px) scaleY(1);
            opacity: 1;
          }
          50% { 
            transform: translateX(15px) scaleY(1.08);
            opacity: 0.9;
          }
          100% { 
            transform: translateX(-30px) scaleY(1);
            opacity: 1;
          }
        }
        
        @keyframes wave-medium {
          0% { 
            transform: translateX(20px) scaleY(1);
            opacity: 0.7;
          }
          50% { 
            transform: translateX(-10px) scaleY(0.95);
            opacity: 0.8;
          }
          100% { 
            transform: translateX(20px) scaleY(1);
            opacity: 0.7;
          }
        }
        
        @keyframes wave-fast {
          0% { 
            transform: translateX(-15px) scaleY(1);
            opacity: 0.5;
          }
          25% { 
            transform: translateX(8px) scaleY(1.15);
            opacity: 0.6;
          }
          50% { 
            transform: translateX(0px) scaleY(0.9);
            opacity: 0.7;
          }
          75% { 
            transform: translateX(-8px) scaleY(1.05);
            opacity: 0.6;
          }
          100% { 
            transform: translateX(-15px) scaleY(1);
            opacity: 0.5;
          }
        }
        
        @keyframes wave-smooth {
          0% { 
            transform: translateX(-10px) scaleY(1);
            opacity: 0.2;
          }
          50% { 
            transform: translateX(5px) scaleY(1.02);
            opacity: 0.3;
          }
          100% { 
            transform: translateX(-10px) scaleY(1);
            opacity: 0.2;
          }
        }
        
        .animate-wave-bg {
          animation: wave-bg 15s ease-in-out infinite;
        }
        
        .animate-wave-slow {
          animation: wave-slow 12s ease-in-out infinite;
        }
        
        .animate-wave-medium {
          animation: wave-medium 10s ease-in-out infinite reverse;
        }
        
        .animate-wave-fast {
          animation: wave-fast 8s ease-in-out infinite;
        }
        
        .animate-wave-smooth {
          animation: wave-smooth 14s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WaveSeparator;
