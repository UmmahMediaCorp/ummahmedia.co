'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroIntroProps {
  onComplete: () => void;
}

export default function HeroIntro({ onComplete }: HeroIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const craftingRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const excellenceRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      craftingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.3'
      )
      .fromTo(
        excellenceRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.2'
      );
  }, []);

  const handleTransition = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete();
      },
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  };

  // Scroll to transition
  useEffect(() => {
    if (!visible) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 10) {
        e.preventDefault();
        handleTransition();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (diff > 50) handleTransition();
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleTransition();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeydown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        background: '#faf8f3',
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(26,94,81,0.06), transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(201,169,97,0.08), transparent 40%),
            linear-gradient(180deg, rgba(250,248,243,0.5), rgba(250,248,243,1))
          `,
        }}
      />

      {/* Shimmer */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: 'linear-gradient(45deg, #1a5e51 25%, #c9a961 50%, #1a5e51 75%)',
          backgroundSize: '400% 400%',
          animation: 'shimmer 8s ease infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-[900px]">
        <div ref={craftingRef} className="opacity-0">
          <h1
            className="font-cinzel leading-none"
            style={{
              fontSize: 'clamp(36px, 9vw, 100px)',
              letterSpacing: '6px',
              color: '#1a1a1a',
            }}
          >
            CRAFTING
          </h1>
        </div>

        <img
          ref={logoRef}
          src="/ummah-media-logo-v2.png"
          alt="Ummah Media"
          className="mx-auto my-5 opacity-0"
          style={{
            height: 'clamp(140px, 30vw, 260px)',
            width: 'clamp(140px, 30vw, 260px)',
            objectFit: 'contain',
            filter: 'drop-shadow(0 0 80px rgba(201,169,97,0.3))',
          }}
        />

        <div ref={excellenceRef} className="opacity-0">
          <h1
            className="font-cinzel leading-none"
            style={{
              fontSize: 'clamp(36px, 9vw, 100px)',
              letterSpacing: '6px',
              color: '#1a1a1a',
            }}
          >
            <span style={{ color: '#c9a961' }}>MUSLIM</span> EXCELLENCE
          </h1>
        </div>

        <div ref={ctaRef} className="mt-8 flex gap-3 justify-center flex-wrap opacity-0">
          <button
            onClick={handleTransition}
            className="font-cinzel text-xs tracking-[3px] uppercase px-8 py-4 bg-[#1a5e51] text-white border-none cursor-pointer transition-all duration-300 hover:bg-[#164e43]"
          >
            START A PROJECT
          </button>
          <button
            onClick={handleTransition}
            className="font-cinzel text-xs tracking-[3px] uppercase px-8 py-4 bg-transparent text-[#1a1a1a] border border-[#1a1a1a] cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
          >
            SEE OUR WORK
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 text-[#999] text-xs tracking-[2px] uppercase font-raleway animate-bounce">
          Scroll to explore
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
