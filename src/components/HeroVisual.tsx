import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Create particles representing agent nodes
    const particleCount = 42;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2.5 + 1.8,
        baseAlpha: Math.random() * 0.4 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const primaryColor = isDark ? '212, 175, 55' : '196, 154, 44'; // Gold (#D4AF37 / #C49A2C)
      const secondaryColor = isDark ? '206, 137, 70' : '180, 110, 40'; // Amber

      // Draw agent connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * (isDark ? 0.22 : 0.15);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw mouse interactive connections
      if (mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (isDark ? 0.35 : 0.25);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${secondaryColor}, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Slight attraction
            particles[i].vx += (dx / dist) * 0.015;
            particles[i].vy += (dy / dist) * 0.015;
          }
        }
      }

      // Draw particle nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Dampen velocity
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.2 + 0.8;
        const currentAlpha = p.baseAlpha * pulse;

        // Outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        gradient.addColorStop(0, `rgba(${primaryColor}, ${currentAlpha * 0.8})`);
        gradient.addColorStop(1, `rgba(${primaryColor}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner solid node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = idx % 3 === 0
          ? `rgba(${secondaryColor}, ${currentAlpha})`
          : `rgba(${primaryColor}, ${currentAlpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <div className="relative w-full h-[380px] sm:h-[430px] lg:h-[480px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#FFFFFF]/30 dark:bg-[#1D1D1A]/30 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-sm group">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial from-[#C49A2C]/10 dark:from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />

      {/* Centered Futuristic Badge / Overlay */}
      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAFAF8]/90 dark:bg-[#0F0F0E]/90 border border-[#E7E3D8] dark:border-[#34332E] backdrop-blur-md shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C49A2C] to-[#CE8946] dark:from-[#D4AF37] dark:to-[#CE8946] p-[1.5px] flex items-center justify-center shadow-xs">
            <div className="w-full h-full bg-[#FAFAF8] dark:bg-[#0F0F0E] rounded-[9px] flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37] animate-pulse" />
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F3EA] flex items-center gap-2">
              <span>Agentic Mesh & Real-Time Engine</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#C49A2C]/15 dark:bg-[#D4AF37]/20 text-[#C49A2C] dark:text-[#D4AF37]">
                ACTIVE
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA]">
              LangGraph • Socket.IO • Distributed Microservices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
