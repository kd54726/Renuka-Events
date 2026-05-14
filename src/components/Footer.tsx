import { MapPin, Phone, Mail, Heart } from 'lucide-react';

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="5" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const WHATSAPP_NUMBER = '919876543210';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Weddings', href: '#weddings' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Wedding Planning',
  'Wedding Decor',
  'Destination Weddings',
  'Entertainment & Artists',
  'Bridal Entries',
  'Hospitality Management',
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://www.renukaartsandevents.com/images/logo.png"
                alt="Renuka Arts & Events"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="font-sans text-sm leading-relaxed text-white/40 mb-8">
              Crafting India's most extraordinary weddings with passion, precision, and unmatched artistry since 2012.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, href: 'https://instagram.com/renukaarts', label: 'Instagram' },
                { icon: FacebookIcon, href: 'https://facebook.com/renukaarts', label: 'Facebook' },
                { icon: YoutubeIcon, href: 'https://youtube.com/renukaarts', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-champagne/50 hover:text-champagne hover:bg-champagne/10"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-champagne">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/40 transition-colors duration-300 hover:text-champagne"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-champagne">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-sans text-sm text-white/40 transition-colors duration-300 hover:text-champagne"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-sans text-xs font-semibold tracking-[0.2em] uppercase text-champagne">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-start gap-3 group">
                <Phone size={16} className="mt-0.5 text-champagne/60 flex-shrink-0" />
                <span className="font-sans text-sm text-white/40 group-hover:text-champagne transition-colors">
                  +91 98765 43210
                </span>
              </a>
              <a href="mailto:hello@renukaarts.com" className="flex items-start gap-3 group">
                <Mail size={16} className="mt-0.5 text-champagne/60 flex-shrink-0" />
                <span className="font-sans text-sm text-white/40 group-hover:text-champagne transition-colors">
                  hello@renukaarts.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-champagne/60 flex-shrink-0" />
                <span className="font-sans text-sm text-white/40">
                  Mumbai, Maharashtra<br />
                  Available across India
                </span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {['Verified Business', 'Top Rated'].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-champagne/20 bg-champagne/10 px-3 py-1 font-sans text-[10px] font-medium tracking-wider uppercase text-champagne/70"
                >
                  ★ {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/8 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="font-sans text-xs text-white/25">
              © {new Date().getFullYear()} Renuka Arts & Events. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 font-sans text-xs text-white/25">
              Crafted with <Heart size={12} className="text-rose-gold fill-rose-gold" /> for extraordinary celebrations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
