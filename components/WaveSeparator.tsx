"use client";

import React from 'react';
import Wave from 'react-wavify';

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
      {/* Background wave */}
      <Wave
        fill={bottomColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.3,
          points: 3
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3
        }}
      />
      
      {/* Main wave */}
      <Wave
        fill={bottomColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 25,
          speed: 0.4,
          points: 4
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.8
        }}
      />
      
      {/* Top accent wave */}
      <Wave
        fill={bottomColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.6,
          points: 5
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6
        }}
      />
      
      {/* Fast moving wave */}
      <Wave
        fill={bottomColor}
        paused={false}
        options={{
          height: 20,
          amplitude: 15,
          speed: 0.25,
          points: 6
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.4
        }}
      />
    </div>
  );
};

export default WaveSeparator;
