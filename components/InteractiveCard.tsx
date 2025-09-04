"use client";

import React from 'react';

interface InteractiveCardProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  className?: string;
}

const InteractiveCard = ({ title, subtitle, image, alt, className = "" }: InteractiveCardProps) => {
  return (
    <div className={`interactive-card-container ${className}`}>
      <div className="interactive-card-wrapper">
        <div className="interactive-card-canvas">
          {/* Trackers */}
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`interactive-card-tracker tr-${i + 1}`} />
          ))}
          
          <div className="interactive-card">
            <div className="interactive-card-image">
              <img 
                src={image} 
                alt={alt}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="interactive-card-overlay"></div>
            </div>
            <p className="interactive-card-prompt">HOVER PARA VER</p>
            <div className="interactive-card-title">{title}</div>
            <div className="interactive-card-subtitle">{subtitle}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .interactive-card-container {
          position: relative;
          width: 300px;
          height: 400px;
          transition: 200ms;
        }

        .interactive-card-container:active {
          width: 290px;
          height: 390px;
        }

        .interactive-card-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .interactive-card-canvas {
          perspective: 800px;
          inset: 0;
          z-index: 200;
          position: absolute;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          gap: 0px 0px;
          grid-template-areas: 
            "tr-1 tr-2 tr-3 tr-4 tr-5"
            "tr-6 tr-7 tr-8 tr-9 tr-10"
            "tr-11 tr-12 tr-13 tr-14 tr-15"
            "tr-16 tr-17 tr-18 tr-19 tr-20"
            "tr-21 tr-22 tr-23 tr-24 tr-25";
        }

        .interactive-card {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          transition: 700ms;
          overflow: hidden;
        }

        .interactive-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .interactive-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(43deg, rgba(245, 158, 11, 0.8) 0%, rgba(251, 146, 60, 0.8) 46%, rgba(239, 68, 68, 0.8) 100%);
          opacity: 0.7;
          transition: 200ms;
        }

        .interactive-card-subtitle {
          transform: translateY(160px);
          color: rgb(255, 255, 255);
          text-align: center;
          width: 100%;
          font-size: 14px;
          font-weight: 500;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .interactive-card-title {
          opacity: 0;
          transition-duration: 300ms;
          transition-timing-function: ease-in-out;
          transition-delay: 100ms;
          position: absolute;
          font-size: 24px;
          font-weight: bold;
          color: white;
          text-align: center;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
          z-index: 10;
        }

        .interactive-card-tracker:hover ~ .interactive-card .interactive-card-title {
          opacity: 1;
        }

        .interactive-card-prompt {
          bottom: 8px;
          left: 12px;
          z-index: 20;
          font-size: 16px;
          font-weight: bold;
          transition: 300ms ease-in-out;
          position: absolute;
          max-width: 120px;
          color: rgb(255, 255, 255);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
        }

        .interactive-card-tracker {
          position: absolute;
          z-index: 200;
          width: 100%;
          height: 100%;
        }

        .interactive-card-tracker:hover {
          cursor: pointer;
        }

        .interactive-card-tracker:hover ~ .interactive-card .interactive-card-prompt {
          opacity: 0;
        }

        .interactive-card-tracker:hover ~ .interactive-card {
          transition: 300ms;
          filter: brightness(1.1);
        }

        .interactive-card-tracker:hover ~ .interactive-card .interactive-card-overlay {
          transition: 200ms;
          opacity: 0.9;
        }

        /* Grid areas */
        .tr-1 { grid-area: tr-1; }
        .tr-2 { grid-area: tr-2; }
        .tr-3 { grid-area: tr-3; }
        .tr-4 { grid-area: tr-4; }
        .tr-5 { grid-area: tr-5; }
        .tr-6 { grid-area: tr-6; }
        .tr-7 { grid-area: tr-7; }
        .tr-8 { grid-area: tr-8; }
        .tr-9 { grid-area: tr-9; }
        .tr-10 { grid-area: tr-10; }
        .tr-11 { grid-area: tr-11; }
        .tr-12 { grid-area: tr-12; }
        .tr-13 { grid-area: tr-13; }
        .tr-14 { grid-area: tr-14; }
        .tr-15 { grid-area: tr-15; }
        .tr-16 { grid-area: tr-16; }
        .tr-17 { grid-area: tr-17; }
        .tr-18 { grid-area: tr-18; }
        .tr-19 { grid-area: tr-19; }
        .tr-20 { grid-area: tr-20; }
        .tr-21 { grid-area: tr-21; }
        .tr-22 { grid-area: tr-22; }
        .tr-23 { grid-area: tr-23; }
        .tr-24 { grid-area: tr-24; }
        .tr-25 { grid-area: tr-25; }

        /* 3D Transform Effects */
        .tr-1:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
        }
        .tr-2:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
        }
        .tr-3:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
        }
        .tr-4:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
        }
        .tr-5:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
        }
        .tr-6:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
        }
        .tr-7:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
        }
        .tr-8:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
        }
        .tr-9:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
        }
        .tr-10:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
        }
        .tr-11:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
        }
        .tr-12:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
        }
        .tr-13:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }
        .tr-14:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
        }
        .tr-15:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
        }
        .tr-16:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
        }
        .tr-17:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
        }
        .tr-18:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
        }
        .tr-19:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
        }
        .tr-20:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
        }
        .tr-21:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
        }
        .tr-22:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
        }
        .tr-23:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
        }
        .tr-24:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
        }
        .tr-25:hover ~ .interactive-card {
          transition: 125ms ease-in-out;
          transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
        }

        .interactive-card-container {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default InteractiveCard;
