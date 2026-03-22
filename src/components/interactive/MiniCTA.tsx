'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

interface MiniCTAProps {
  isVisible: boolean;
  serviceName: string;
  serviceHref: string;
  stats: string[];
  ctaText?: string;
}

export default function MiniCTA({
  isVisible,
  serviceName,
  serviceHref,
  stats,
  ctaText = 'Explore',
}: MiniCTAProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);

  // Chevron bounce animation (continuous while mounted)
  useEffect(() => {
    if (!chevronRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(chevronRef.current, {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 0.85,
        ease: 'power1.inOut',
      });
    });
    return () => ctx.revert();
  }, []);

  // Slide-in / slide-out driven by isVisible
  useEffect(() => {
    if (!containerRef.current || !cardRef.current) return;

    if (isVisible) {
      gsap.set(containerRef.current, { pointerEvents: 'auto' });
      gsap.fromTo(
        cardRef.current,
        { autoAlpha: 0, y: 32 },
        { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out' }
      );
    } else {
      gsap.to(cardRef.current, {
        autoAlpha: 0,
        y: 20,
        duration: 0.3,
        ease: 'power1.in',
        onComplete: () => {
          if (containerRef.current) {
            gsap.set(containerRef.current, { pointerEvents: 'none' });
          }
        },
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 bottom-10 flex flex-col items-center gap-3"
      style={{ zIndex: 10 }}
      aria-hidden={!isVisible}
    >
      {/* Main card */}
      <div
        ref={cardRef}
        className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-black/50 px-6 py-5 backdrop-blur-md sm:flex-row sm:gap-6"
        style={{ opacity: 0, visibility: 'hidden', maxWidth: '640px', width: '90vw' }}
      >
        {/* Service name */}
        <span className="font-cinzel text-sm font-semibold uppercase tracking-widest text-white sm:text-base">
          {serviceName}
        </span>

        {/* Stats pills */}
        {stats.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {stats.map((stat) => (
              <span
                key={stat}
                className="rounded-full bg-white/10 px-3 py-1 font-raleway text-xs font-light text-white/80"
              >
                {stat}
              </span>
            ))}
          </div>
        )}

        {/* CTA button */}
        <button
          onClick={() => router.push(serviceHref)}
          className="ml-auto shrink-0 rounded-full bg-white px-6 py-2 font-raleway text-sm font-semibold text-black transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          tabIndex={isVisible ? 0 : -1}
        >
          {ctaText}
        </button>
      </div>

      {/* "Continue scrolling" indicator */}
      <div className="flex flex-col items-center gap-1" aria-hidden="true">
        <span className="font-raleway text-xs font-light tracking-widest text-white/40">
          Continue scrolling
        </span>
        <svg
          ref={chevronRef}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/40"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
