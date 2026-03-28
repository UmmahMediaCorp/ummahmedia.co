import { Instagram, Linkedin, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const SERVICES = [
  'AI Video Production',
  'Brand Development',
  'Social Media',
  'Paid Advertising',
  'AI Automation',
  'Web Design',
];

const COMPANY = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const SOCIALS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-surface-beige border-t border-surface-sand">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-14">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display font-bold text-brand-green-dark text-lg">Ummah Media</span>
            <p className="text-sm text-surface-muted-dark mt-3 leading-relaxed max-w-[220px]">
              South Edmonton's first Muslim-owned media company.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-surface-cream hover:bg-white border border-surface-sand hover:border-brand-green/20 flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-surface-muted-dark hover:text-brand-green transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-surface-muted mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-surface-muted-dark hover:text-brand-green transition-colors duration-300">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-surface-muted mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-surface-muted-dark hover:text-brand-green transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-surface-muted mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-surface-muted-dark">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                South Edmonton, AB
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <a href="mailto:hello@ummahmedia.ca" className="hover:text-brand-green transition-colors">
                  hello@ummahmedia.ca
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <a href="tel:+17805550100" className="hover:text-brand-green transition-colors">
                  (780) 555-0100
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-surface-sand mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-surface-muted">
          <p>2026 Ummah Media. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
