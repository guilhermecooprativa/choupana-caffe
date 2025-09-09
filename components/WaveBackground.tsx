"use client";

import React from 'react';

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Animated waves */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="-100 0 1400 120"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(245, 158, 11, 0.1)" />
              <stop offset="50%" stopColor="rgba(251, 146, 60, 0.1)" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(251, 191, 36, 0.08)" />
              <stop offset="50%" stopColor="rgba(249, 115, 22, 0.08)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0.08)" />
            </linearGradient>
          </defs>
          
          <path
            d="M-100,60 C200,20 500,100 800,60 C950,40 1100,80 1300,60 L1300,120 L-100,120 Z"
            fill="url(#waveGradient1)"
            className="animate-wave-1"
          />
          <path
            d="M-100,80 C200,40 500,120 800,80 C950,60 1100,100 1300,80 L1300,120 L-100,120 Z"
            fill="url(#waveGradient2)"
            className="animate-wave-2"
          />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-amber-400 rounded-full opacity-20 animate-float-particle-${i % 3 + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200 to-orange-300 rounded-full opacity-10 animate-pulse blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-200 to-red-300 rounded-full opacity-10 animate-pulse blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-full opacity-15 animate-pulse blur-2xl" />
      </div>

      <style jsx>{`
        @keyframes wave-1 {
          0% { transform: translateX(-100px) scaleY(1); }
          50% { transform: translateX(0px) scaleY(1.2); }
          100% { transform: translateX(100px) scaleY(1); }
        }
        
        @keyframes wave-2 {
          0% { transform: translateX(100px) scaleY(1); }
          50% { transform: translateX(0px) scaleY(0.8); }
          100% { transform: translateX(-100px) scaleY(1); }
        }
        
        @keyframes float-particle-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.2); }
          50% { transform: translateY(-10px) translateX(-5px) scale(0.8); }
          75% { transform: translateY(-30px) translateX(15px) scale(1.1); }
        }
        
        @keyframes float-particle-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-15px) translateX(-10px) scale(0.9); }
          66% { transform: translateY(-25px) translateX(5px) scale(1.3); }
        }
        
        @keyframes float-particle-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          20% { transform: translateY(-10px) translateX(8px) scale(1.1); }
          40% { transform: translateY(-20px) translateX(-3px) scale(0.7); }
          60% { transform: translateY(-15px) translateX(12px) scale(1.2); }
          80% { transform: translateY(-5px) translateX(-8px) scale(0.9); }
        }
        
        .animate-wave-1 {
          animation: wave-1 8s ease-in-out infinite;
        }
        
        .animate-wave-2 {
          animation: wave-2 10s ease-in-out infinite reverse;
        }
        
        .animate-float-particle-1 {
          animation: float-particle-1 6s ease-in-out infinite;
        }
        
        .animate-float-particle-2 {
          animation: float-particle-2 7s ease-in-out infinite;
        }
        
        .animate-float-particle-3 {
          animation: float-particle-3 9s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WaveBackground;
