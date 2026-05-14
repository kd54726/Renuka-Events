import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Weddings', href: '#weddings' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.15)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <img
              src="https://www.renukaartsandevents.com/images/logo.png"
              alt="Renuka Arts & Events"
              className={`h-12 w-auto object-contain transition-all duration-500 lg:h-14 ${
                scrolled
                  ? ''
                  : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:text-champagne ${
                  scrolled
                    ? 'text-white/70'
                    : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-2.5 font-sans text-xs font-semibold tracking-[0.1em] uppercase text-white transition-all duration-300 hover:bg-champagne-dark hover:shadow-lg hover:shadow-champagne/30"
            >
              <Phone size={13} />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              <motion.img
                src="https://www.renukaartsandevents.com/images/logo.png"
                alt="Renuka Arts & Events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="h-16 w-auto object-contain brightness-0 invert mb-4"
              />
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="font-heading text-3xl font-light text-white/90 tracking-wide hover:text-champagne transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-3 font-sans text-sm font-semibold tracking-[0.1em] uppercase text-white"
              >
                <Phone size={16} />
                Book Consultation
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
