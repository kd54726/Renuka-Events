import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Heart } from 'lucide-react';

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Mobile-only heading (above image) */}
          <AnimatedSection className="w-full lg:hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-champagne" />
              <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                The Woman Behind The Magic
              </span>
            </div>
            <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
              Meet Renuka
            </h2>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection direction="left" className="w-full lg:w-5/12">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border border-champagne/30" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
                <div className="aspect-[3/4]">
                  <img
                    src="/images/founder.jpg"
                    alt="Renuka - Founder of Renuka Arts & Events"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-black/8 border border-beige-light/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/15">
                    <Heart size={18} className="text-champagne fill-champagne" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-charcoal">12+</div>
                    <div className="font-sans text-[10px] font-medium tracking-wider uppercase text-charcoal/50">Years of Love</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="w-full lg:w-7/12">
            {/* Desktop-only heading (stays in content column) */}
            <div className="hidden lg:flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-champagne" />
              <span className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-champagne">
                The Woman Behind The Magic
              </span>
            </div>
            <h2 className="hidden lg:block font-heading text-4xl font-semibold text-charcoal sm:text-5xl lg:text-6xl">
              Meet Renuka
            </h2>

            <div className="mt-0 lg:mt-8 space-y-5 font-sans text-base leading-relaxed text-charcoal/60">
              <p>
                With an artist's eye and a planner's precision, Renuka has been transforming wedding 
                dreams into reality for over 12 years. What began as a passion for creating beautiful 
                moments has grown into one of India's most sought-after luxury wedding planning firms.
              </p>
              <p>
                "Every couple has a unique love story, and their wedding should be a reflection of that 
                uniqueness," she believes. This philosophy drives every celebration she creates whether 
                it's an intimate 50-guest ceremony or a grand 1,000-guest extravaganza.
              </p>
              <p>
                Her expertise spans traditional Indian weddings, modern fusion celebrations, and 
                spectacular destination events. With a trusted network of premium vendors and a team 
                of passionate professionals, Renuka ensures that every detail from the first 
                invitation to the last goodbye is nothing short of extraordinary.
              </p>
            </div>

            {/* Signature-style quote */}
            <div className="mt-10 border-l-2 border-champagne pl-6">
              <p className="font-serif text-xl italic text-charcoal/70 leading-relaxed">
                "I don't create events. I create memories that families cherish for generations."
              </p>
              <p className="mt-3 font-sans text-sm font-semibold tracking-wider text-champagne">
                — Renuka, Founder
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 font-sans text-xs font-semibold tracking-[0.15em] uppercase text-white transition-all duration-500 hover:bg-charcoal-light hover:shadow-lg"
            >
              Let's Discuss Your Vision
              <span className="text-champagne text-lg">→</span>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
