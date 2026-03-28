import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlowOrb } from './DynamicBackgrounds';
import { BrandDevIcon, VideoMarketingIcon, SocialMediaIcon, UgcInfluencerIcon, SmartSuiteIcon, AiEducationIcon } from '../icons';

const SERVICE_ICONS = [BrandDevIcon, VideoMarketingIcon, SocialMediaIcon, UgcInfluencerIcon, SmartSuiteIcon, AiEducationIcon];

const SERVICES = [
  {
    name: 'Brand Development',
    desc: 'Full brand build-out — strategy, visuals, content, and systems. Foundation, Signature, or Flagship tiers.',
    accent: 'green' as const,
  },
  {
    name: 'Video Marketing',
    desc: 'Cinematic brand films, short-form content, and event coverage — engineered for every stage of the funnel.',
    accent: 'gold' as const,
  },
  {
    name: 'Social Media Marketing',
    desc: 'Revenue-driven social media management. Strategy, content, community, and analytics — fully managed.',
    accent: 'green' as const,
  },
  {
    name: 'UGC & Influencer Agency',
    desc: 'Muslim creators and UGC content that converts. Real influencers, AI influencers, and campaign management.',
    accent: 'gold' as const,
  },
  {
    name: 'SmartSuite',
    desc: 'AI-powered business systems — Smart Funnel, Smart Agent, Smart Site, Smart Project Media, and Smart Portal.',
    accent: 'green' as const,
  },
  {
    name: 'AI Education',
    desc: 'Courses, workshops, and custom AI tool development. From AI 101 to building your own AI agents.',
    accent: 'gold' as const,
  },
];

const STATS = [
  { value: '10x', label: 'Faster Production' },
  { value: '70%', label: 'Cost Savings' },
  { value: '5x', label: 'Avg. ROAS' },
  { value: '48hr', label: 'Turnaround' },
];

export default function ServiceSections() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-surface-cream-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <GlowOrb color="rgba(21,112,63,0.06)" x="20%" y="30%" size={500} blur={130} />
        <GlowOrb color="rgba(212,168,67,0.05)" x="80%" y="70%" size={400} blur={100} />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-green mb-4">
            Services
          </p>
          <h2 className="font-display text-section text-brand-green-dark max-w-2xl">
            Everything your brand needs
            <br />
            <span className="text-gradient-gold">to own its market.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-sand/40 rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative p-8 sm:p-10 bg-surface-light hover:bg-white transition-all duration-500 cursor-pointer border border-surface-sand/30"
            >
              <div className={`mb-6 transition-transform duration-500 group-hover:scale-110 ${
                service.accent === 'gold' ? 'text-brand-gold' : 'text-brand-green'
              }`}>
                {(() => { const Icon = SERVICE_ICONS[i]; return <Icon size={44} />; })()}
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-green-dark mb-3">
                {service.name}
              </h3>
              <p className="text-sm text-surface-muted-dark leading-relaxed mb-6">
                {service.desc}
              </p>
              <ArrowRight className="w-4 h-4 text-surface-muted/0 group-hover:text-brand-green transition-all duration-300 group-hover:translate-x-1" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-brand-green">
                {stat.value}
              </div>
              <div className="text-xs text-surface-muted-dark mt-1.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
          >
            Discuss your project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
