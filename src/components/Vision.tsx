import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GlowOrb } from './DynamicBackgrounds';

function AnimatedStat({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-brand-green">
        {count}{suffix}
      </div>
      <div className="text-sm text-surface-muted-dark mt-2">{label}</div>
    </div>
  );
}

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const p1 = {
    opacity: useTransform(scrollYProgress, [0, 0.08, 0.18, 0.28], [0, 1, 1, 0]),
    y: useTransform(scrollYProgress, [0, 0.08, 0.18, 0.28], [50, 0, 0, -50]),
  };
  const p2 = {
    opacity: useTransform(scrollYProgress, [0.22, 0.32, 0.42, 0.52], [0, 1, 1, 0]),
    y: useTransform(scrollYProgress, [0.22, 0.32, 0.42, 0.52], [50, 0, 0, -50]),
  };
  const p3 = {
    opacity: useTransform(scrollYProgress, [0.46, 0.56, 0.66, 0.76], [0, 1, 1, 0]),
    y: useTransform(scrollYProgress, [0.46, 0.56, 0.66, 0.76], [50, 0, 0, -50]),
  };
  const p4 = {
    opacity: useTransform(scrollYProgress, [0.7, 0.82, 0.95, 1], [0, 1, 1, 1]),
    y: useTransform(scrollYProgress, [0.7, 0.82, 0.95, 1], [50, 0, 0, 0]),
  };

  return (
    <section ref={containerRef} className="relative bg-surface-beige" style={{ height: '350vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <GlowOrb color="rgba(21,112,63,0.08)" x="30%" y="40%" size={600} blur={150} />
          <GlowOrb color="rgba(212,168,67,0.06)" x="70%" y="60%" size={400} blur={120} />
        </div>

        <motion.div
          style={p1}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <h2 className="font-display text-hero text-brand-green-dark text-center max-w-4xl">
            We don't just<br />make content.
          </h2>
        </motion.div>

        <motion.div
          style={p2}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <h2 className="font-display text-hero text-gradient-gold text-center max-w-4xl">
            We build<br />attention empires.
          </h2>
        </motion.div>

        <motion.div
          style={p3}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-3xl">
            <h2 className="font-display text-hero text-gradient-green mb-6">
              For the Ummah.
            </h2>
            <p className="text-subtitle text-surface-muted-dark">
              AI-powered production. Cultural fluency.
              Edmonton's largest masjid distribution network.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={p4}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="grid grid-cols-3 gap-10 sm:gap-16 max-w-lg mx-auto">
            <AnimatedStat value={42} label="Masjid Partners" />
            <AnimatedStat value={100} suffix="K+" label="Community Reach" />
            <AnimatedStat value={98} suffix="%" label="Satisfaction" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
