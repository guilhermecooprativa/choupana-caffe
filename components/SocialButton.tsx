"use client";

import React from 'react';

const SocialButton = () => {
  return (
    <div className="flex gap-2">
      {/* Instagram Button */}
      <a 
        href="https://instagram.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative w-20 h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0,0,256,256" 
          width="24px" 
          height="24px" 
          className="relative z-20 transition-all duration-300"
          style={{fill: '#cc39a4'}}
        >
          <g transform="scale(8,8)">
            <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
          </g>
        </svg>
        <style jsx>{`
          .group:hover svg {
            fill: white !important;
          }
        `}</style>
      </a>

      {/* Facebook Button */}
      <a 
        href="https://facebook.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative w-20 h-16 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span 
          className="relative z-20 text-2xl font-bold transition-all duration-300"
          style={{color: '#1877F2'}}
        >
          f
        </span>
        <style jsx>{`
          .group:hover span {
            color: white !important;
          }
        `}</style>
      </a>
    </div>
  );
}

export default SocialButton;
