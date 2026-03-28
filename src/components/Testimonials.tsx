import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ROW_1 = [
  {
    name: 'Ahmed Hassan',
    business: 'Edmonton Halal Eats',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Ummah Media transformed our social media presence. Our engagement is up 300% and we\'re seeing customers walk in mentioning our content daily.',
  },
  {
    name: 'Fatima Al-Mansouri',
    business: 'Modesty Boutique',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Finally, a marketing partner who truly understands our values. They\'ve helped us reach customers we never could before -- all while staying halal.',
  },
  {
    name: 'Ibrahim Khan',
    business: 'Khan Financial Services',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'The AI video content they produce is incredible. Premium quality at a fraction of what traditional agencies charge. Best investment we\'ve made.',
  },
];

const ROW_2 = [
  {
    name: 'Yusuf Ahmed',
    business: 'YA Construction',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'They built us a website that actually converts. Within the first month we saw a 40% increase in quote requests. Worth every penny.',
  },
  {
    name: 'Sara Mohammad',
    business: 'Noor Academy',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Our enrollment doubled after working with Ummah Media. Their understanding of the Muslim community in Edmonton is unmatched.',
  },
  {
    name: 'Omar Rashid',
    business: 'Digital Ummah',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Hands down the best agency experience we\'ve had. They don\'t just execute -- they think strategically about growth and community impact.',
  },
];

function TestimonialCard({ name, business, image, text }: typeof ROW_1[0]) {
  return (
    <div className="w-[380px] sm:w-[420px] shrink-0 p-6 rounded-2xl bg-white border border-surface-sand">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 fill-brand-gold text-brand-green" />
        ))}
      </div>
      <p className="text-[14px] text-brand-green-dark/80 leading-relaxed mb-6">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-medium text-brand-green-dark">{name}</div>
          <div className="text-xs text-surface-muted-dark">{business}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction }: { items: typeof ROW_1; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6"
        style={{
          animation: `marquee-${direction} ${direction === 'left' ? 50 : 55}s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36 bg-surface-cream-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-green-light mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-section text-brand-green-dark">
            Trusted by the community.
          </h2>
        </motion.div>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={ROW_1} direction="left" />
        <MarqueeRow items={ROW_2} direction="right" />
      </div>
    </section>
  );
}
