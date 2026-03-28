import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HeroPattern } from './IslamicGeometry';
import { Particles, GlowOrb } from './DynamicBackgrounds';

const ease = [0.33, 1, 0.68, 1] as const;

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y = useTransform(scrollY, [0, 600], [0, 150]);

  return (
    <section className="relative h-screen flex items-center justify-center bg-surface-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(212,168,67,0.12),transparent)]" />
        <GlowOrb color="rgba(21,112,63,0.08)" x="20%" y="30%" size={600} blur={140} />
      </div>

      <HeroPattern />
      <Particles count={20} color="gold" />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-6 max-w-[980px] mx-auto"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="font-arabic text-2xl sm:text-3xl text-brand-green mb-10"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="font-display text-display text-brand-green-dark"
          >
            UMMAH
          </motion.h1>
        </div>
        <div className="overflow-hidden -mt-2 sm:-mt-4">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="font-display text-display text-gradient-gold"
          >
            MEDIA
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-subtitle text-surface-muted-dark mt-8 max-w-xl mx-auto"
        >
          Mine Attention. Build Brands. Monetize Impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-sm text-surface-muted mt-3"
        >
          South Edmonton's first Muslim-owned media company
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-surface-cream font-display font-bold text-[15px] rounded-full hover:bg-brand-green-light transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-brand-green/20"
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#work"
            className="text-sm text-surface-muted-dark hover:text-brand-green transition-colors duration-300 underline underline-offset-4 decoration-surface-muted/40 hover:decoration-brand-green/60"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-brand-green/40 to-transparent" />
      </motion.div>
    </section>
  );
}
