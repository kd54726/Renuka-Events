import { motion } from 'framer-motion';
import { Sparkles, Users, Palette, Crown, Music, Shield } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const reasons = [
  {
    icon: Crown,
    title: 'Bespoke Luxury Experience',
    description: 'Every wedding is a one-of-a-kind masterpiece tailored to your vision, culture, and personality, never a template.',
  },
  {
    icon: Shield,
    title: 'Stress-Free Planning',
    description: 'From the first meeting to the last dance, we handle every detail so you can fully enjoy your celebration.',
  },
  {
    icon: Palette,
    title: 'Exquisite Decor Design',
    description: 'Our in-house design team creates jaw-dropping décor that transforms venues into dreamscapes.',
  },
  {
    icon: Users,
    title: 'Personalized Attention',
    description: 'We take on a limited number of weddings each season to ensure you receive our undivided attention.',
  },
  {
    icon: Music,
    title: 'Entertainment Mastery',
    description: 'From Bollywood performers to international DJs, we curate entertainment that keeps guests talking for years.',
  },
  {
    icon: Sparkles,
    title: 'End-to-End Management',
    description: 'Venue selection, catering, photography, hospitality, logistics, we orchestrate everything seamlessly.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-ivory opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-champagne/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tag="Why Couples Choose Us"
          title="Crafted With Love, Delivered With Perfection"
          subtitle="We don't just plan weddings. We create immersive experiences that celebrate your unique love story with unmatched elegance."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative h-full rounded-2xl bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-beige-light/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,169,110,0.12)] hover:border-champagne/30"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-champagne/10 transition-all duration-500 group-hover:bg-champagne/20 group-hover:scale-110">
                    <reason.icon size={26} className="text-champagne" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-charcoal">
                    {reason.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/55">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
