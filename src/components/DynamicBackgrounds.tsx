import { useMemo } from 'react';

export function Particles({ count = 20, color = 'gold' }: { count?: number; color?: 'gold' | 'green' }) {
  const particles = useMemo(() => {
    const seed = (n: number) => ((n * 9301 + 49297) % 233280) / 233280;
    return Array.from({ length: count }, (_, i) => ({
      x: seed(i * 7 + 1) * 100,
      y: seed(i * 13 + 3) * 100,
      size: 1 + seed(i * 17 + 5) * 2,
      twinkleDur: 8 + seed(i * 23 + 7) * 12,
      driftDur: 20 + seed(i * 29 + 11) * 20,
      delay: seed(i * 31 + 13) * 10,
    }));
  }, [count]);

  const bg = color === 'gold' ? 'bg-brand-gold' : 'bg-brand-green-light';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${bg}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `twinkle ${p.twinkleDur}s ease-in-out infinite, drift ${p.driftDur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function GlowOrb({ color, x, y, size = 400, blur = 100 }: { color: string; x: string; y: string; size?: number; blur?: number }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: `blur(${blur}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
