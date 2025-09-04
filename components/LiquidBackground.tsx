"use client";

import React, { useEffect, useRef } from 'react';

const LiquidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    let time = 0;

    // Liquid blob class
    class LiquidBlob {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
      maxRadius: number;
      minRadius: number;

      constructor() {
        this.x = canvas ? Math.random() * canvas.width : Math.random() * window.innerWidth;
        this.y = canvas ? Math.random() * canvas.height : Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.maxRadius = 80 + Math.random() * 40;
        this.minRadius = 20 + Math.random() * 20;
        this.radius = this.minRadius;
        this.opacity = 0.1 + Math.random() * 0.1;
        
        // Amber/orange color palette
        const colors = [
          'rgba(245, 158, 11, 0.1)', // amber-500
          'rgba(251, 146, 60, 0.1)', // orange-400
          'rgba(239, 68, 68, 0.1)',  // red-500
          'rgba(251, 191, 36, 0.1)', // amber-400
          'rgba(249, 115, 22, 0.1)', // orange-500
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

          // Keep within bounds
          this.x = Math.max(0, Math.min(canvas.width, this.x));
          this.y = Math.max(0, Math.min(canvas.height, this.y));
        }

        // Pulsing radius
        this.radius = this.minRadius + (this.maxRadius - this.minRadius) * 
          (Math.sin(time * 0.001 + this.x * 0.01) + 1) / 2;
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create blobs
    const blobs: LiquidBlob[] = [];
    for (let i = 0; i < 8; i++) {
      blobs.push(new LiquidBlob());
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(254, 252, 232, 0.05)'; // amber-50 with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });

      // Add some noise/particles
      ctx.fillStyle = 'rgba(245, 158, 11, 0.02)';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      time++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'linear-gradient(135deg, #fefce8 0%, #fed7aa 50%, #fdba74 100%)' }}
      />
    </div>
  );
};

export default LiquidBackground;
