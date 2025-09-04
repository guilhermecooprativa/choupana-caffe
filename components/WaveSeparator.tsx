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
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden ${className}`} style={{ zIndex: 70, height: '120px' }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="50%" stopColor={topColor} />
            <stop offset="100%" stopColor={topColor} />
          </linearGradient>
        </defs>
        
        {/* Background wave - slow and smooth */}
        <path
          d="M-200,80 C0,40 200,120 400,80 C600,40 800,120 1000,80 C1200,40 1400,120 1400,80 L1400,120 L-200,120 Z"
          fill={bottomColor}
          fillOpacity="0.4"
          className="animate-wave-bg"
        />
        
        {/* Main wave - slow movement */}
        <path
          d="M-200,60 C-50,20 100,100 250,60 C400,20 550,100 700,60 C850,20 1000,100 1150,60 C1300,20 1400,100 1400,60 L1400,120 L-200,120 Z"
          fill={bottomColor}
          fillOpacity="0.8"
          className="animate-wave-main"
        />
        
        {/* Top accent wave - very slow */}
        <path
          d="M-200,40 C-100,0 0,80 100,40 C200,0 300,80 400,40 C500,0 600,80 700,40 C800,0 900,80 1000,40 C1100,0 1200,80 1300,40 C1400,0 1400,80 1400,40 L1400,120 L-200,120 Z"
          fill={bottomColor}
          fillOpacity="0.6"
          className="animate-wave-accent"
        />
        
        {/* Smoothing wave for edges */}
        <path
          d="M-200,50 C-100,10 0,90 100,50 C200,10 300,90 400,50 C500,10 600,90 700,50 C800,10 900,90 1000,50 C1100,10 1200,90 1300,50 C1400,10 1400,90 1400,50 L1400,120 L-200,120 Z"
          fill={bottomColor}
          fillOpacity="0.3"
          className="animate-wave-smooth"
        />
      </svg>

      <style jsx>{`
        @keyframes wave-bg {
          0% { 
            transform: translateX(0px);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(-200px);
            opacity: 0.5;
          }
          100% { 
            transform: translateX(0px);
            opacity: 0.4;
          }
        }
        
        @keyframes wave-main {
          0% { 
            transform: translateX(0px);
            opacity: 0.8;
          }
          50% { 
            transform: translateX(-200px);
            opacity: 0.9;
          }
          100% { 
            transform: translateX(0px);
            opacity: 0.8;
          }
        }
        
        @keyframes wave-accent {
          0% { 
            transform: translateX(0px);
            opacity: 0.6;
          }
          50% { 
            transform: translateX(-200px);
            opacity: 0.7;
          }
          100% { 
            transform: translateX(0px);
            opacity: 0.6;
          }
        }
        
        @keyframes wave-smooth {
          0% { 
            transform: translateX(0px);
            opacity: 0.3;
          }
          50% { 
            transform: translateX(-200px);
            opacity: 0.4;
          }
          100% { 
            transform: translateX(0px);
            opacity: 0.3;
          }
        }
        
        .animate-wave-bg {
          animation: wave-bg 20s linear infinite;
        }
        
        .animate-wave-main {
          animation: wave-main 18s linear infinite;
        }
        
        .animate-wave-accent {
          animation: wave-accent 22s linear infinite;
        }
        
        .animate-wave-smooth {
          animation: wave-smooth 16s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WaveSeparator;
