import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Edmonton Halal Eats',
    category: 'Branding + Social Media',
    result: '+300% engagement in 3 months',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Modesty Boutique',
    category: 'AI Video + Brand Identity',
    result: '2x online sales after launch',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Khan Financial Services',
    category: 'Web Design + Paid Ads',
    result: '150 qualified leads in 30 days',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Al-Shifa Wellness Clinic',
    category: 'Full Campaign',
    result: 'Fully booked within 6 weeks',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-surface-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-green mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-section text-brand-green-dark">
            Results that speak
            <br />
            for themselves.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative rounded-3xl overflow-hidden mb-6 cursor-pointer"
        >
          <div className="relative h-[400px] sm:h-[520px] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-green mb-3">
              {featured.category}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              {featured.title}
            </h3>
            <p className="text-surface-muted-dark mb-4">{featured.result}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-green mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-surface-muted-dark">{project.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
