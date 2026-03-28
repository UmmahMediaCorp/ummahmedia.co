import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { SubtlePattern } from './IslamicGeometry';
import { Particles } from './DynamicBackgrounds';

export default function CallToAction() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-gold" />
      <SubtlePattern />
      <Particles count={15} color="gold" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-28">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-arabic text-3xl sm:text-4xl lg:text-5xl text-surface-cream mb-16 leading-relaxed"
        >
          وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-section text-white mb-6"
        >
          Ready to build something
          <br />
          that matters?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-white/80 max-w-xl mx-auto mb-12"
        >
          Free 30-minute strategy call. No pressure, no generic pitch.
          Just an honest conversation about where your business could be.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-surface-cream text-brand-green font-display font-bold text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-2xl"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70"
        >
          <a
            href="mailto:hello@ummahmedia.ca"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            hello@ummahmedia.ca
          </a>
          <a
            href="tel:+17805550100"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            (780) 555-0100
          </a>
        </motion.div>
      </div>
    </section>
  );
}
