import { motion } from 'framer-motion';
import { CalendarHeart, Flower2, Plane, Music, Sparkles, Hotel } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: CalendarHeart,
    title: 'Wedding Planning',
    description: 'Complete end-to-end wedding planning from conceptualization to execution. We handle timelines, vendors, budgets, and logistics, so you simply show up and say "I do."',
    features: ['Concept & Theme Design', 'Vendor Curation', 'Day-of Coordination'],
  },
  {
    icon: Flower2,
    title: 'Wedding Decor',
    description: 'Stunning, bespoke décor that transforms venues into breathtaking dreamscapes. From floral masterpieces to lighting magic, every detail is curated to perfection.',
    features: ['Floral Architecture', 'Lighting Design', 'Stage & Mandap'],
  },
  {
    icon: Plane,
    title: 'Destination Weddings',
    description: 'Dream of saying your vows at a palace in Rajasthan or a beach in Goa? We specialize in destination weddings that create lifelong memories for you and your guests.',
    features: ['Venue Scouting', 'Travel Logistics', 'Local Coordination'],
  },
  {
    icon: Music,
    title: 'Entertainment & Artists',
    description: 'From chart-topping performers to traditional musicians, we curate unforgettable entertainment lineups that keep your celebrations vibrant and electric.',
    features: ['Celebrity Artists', 'DJ & Sound', 'Cultural Acts'],
  },
  {
    icon: Sparkles,
    title: 'Bridal Entries & Effects',
    description: 'Make your grand entrance truly unforgettable with cinematic special effects, cold pyrotechnics, fog screens, drone shows, and spectacular lighting moments.',
    features: ['Pyrotechnics', 'Fog & Laser', 'Drone Shows'],
  },
  {
    icon: Hotel,
    title: 'Hospitality & Guests',
    description: 'Ensure every guest feels like royalty with our comprehensive hospitality management, from welcome kits to accommodations and seamless F&B coordination.',
    features: ['Guest Relations', 'Accommodation', 'F&B Management'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-charcoal overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tag="Our Services"
          title="Everything Your Wedding Needs"
          subtitle="A comprehensive suite of luxury wedding services, each delivered with the artistry and precision your celebration deserves."
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-champagne/30 hover:shadow-[0_20px_60px_rgba(201,169,110,0.08)]"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-champagne/15 transition-all duration-500 group-hover:bg-champagne/25 group-hover:scale-110">
                  <service.icon size={26} className="text-champagne" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-champagne/20 bg-champagne/10 px-3 py-1 font-sans text-[10px] font-medium tracking-wider uppercase text-champagne-light"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
