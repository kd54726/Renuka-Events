import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-wedding.jpg"
          alt="Luxury wedding ceremony"
          className="h-full w-full object-cover"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-32 w-px bg-gradient-to-b from-transparent via-champagne to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Pre-heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="hidden sm:block h-px w-12 bg-champagne" />
              <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                Luxury Wedding Planners
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-heading text-5xl font-light leading-[1.1] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Where Every
              <br />
              <span className="font-serif italic text-champagne-light">Love Story</span>
              <br />
              Becomes Legend
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-white/70 sm:text-lg"
            >
              For over a decade, we've been crafting the most breathtaking weddings across India and transforming dreams into celebrations that last a lifetime.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex w-[220px] justify-center items-center gap-3 rounded-full bg-champagne px-8 py-4 font-sans text-xs font-semibold tracking-[0.15em] uppercase text-white transition-all duration-500 hover:bg-champagne-dark hover:shadow-2xl hover:shadow-champagne/30 sm:w-auto"
              >
                Book Your Consultation
                <ArrowRight size={16} className="hidden sm:block transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#weddings"
                className="group inline-flex w-[220px] justify-center items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-sans text-xs font-semibold tracking-[0.15em] uppercase text-white transition-all duration-500 hover:border-champagne hover:bg-white/10 sm:w-auto"
              >
                <Play size={14} className="fill-current" />
                View Weddings
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-white/50">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-champagne" />
        </motion.div>
      </motion.div>
    </section>
  );
}
