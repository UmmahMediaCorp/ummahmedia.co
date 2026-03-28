import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Particles } from './DynamicBackgrounds';

const VALUES = [
  {
    title: 'Cultural Fluency',
    desc: 'Halal-compliant content. Gender-appropriate representation. Ramadan-aware scheduling. We don\'t need a cultural briefing -- this is our community.',
  },
  {
    title: 'AI-Powered Precision',
    desc: 'Cutting-edge AI tools produce content at speed and scale, while human strategy ensures every piece is culturally resonant and brand-aligned.',
  },
  {
    title: 'Community-First',
    desc: 'We reinvest in the ummah. Every project strengthens the local ecosystem of Muslim-owned businesses, creating a rising tide that lifts all boats.',
  },
];

export default function Network() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-surface-beige">
      <div className="relative min-h-[90vh] flex items-center">
        <motion.div style={{ y: imgY }} className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Community collaboration"
            className="w-full h-[130%] object-cover opacity-20"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-surface-black via-surface-black/80 to-surface-black/30" />
        <Particles count={15} color="gold" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 sm:py-36">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-green mb-6"
            >
              The Network
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-section text-brand-green-dark mb-8"
            >
              Built-in distribution
              <br />
              through Edmonton's
              <br />
              <span className="text-gradient-gold">masjid network.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-lg text-surface-muted-dark leading-relaxed mb-14"
            >
              Through partnerships with 42 masjids across Edmonton, your message
              meets the community where they gather, trust, and engage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-10 max-w-md"
            >
              {[
                { value: '42', label: 'Masjid Partners' },
                { value: '100K+', label: 'Weekly Reach' },
                { value: '100%', label: 'Halal Compliant' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-3xl font-bold text-brand-green">{stat.value}</div>
                  <div className="text-xs text-surface-muted-dark mt-1.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-20 sm:py-28">
        <div className="grid sm:grid-cols-3 gap-6">
          {VALUES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-500"
            >
              <h4 className="font-display text-lg font-semibold text-brand-green-dark mb-3">{item.title}</h4>
              <p className="text-sm text-surface-muted-dark leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
