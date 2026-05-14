import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const weddings = [
  {
    image: '/images/wedding1.jpg',
    couple: 'Priya & Arjun',
    venue: 'Taj Palace, Udaipur',
    style: 'Royal Heritage Wedding',
    description: 'A three-day celebration at one of India\'s most iconic palaces, blending royal Rajasthani traditions with contemporary luxury.',
  },
  {
    image: '/images/wedding2.jpg',
    couple: 'Meera & Karan',
    venue: 'W Goa, Vagator',
    style: 'Destination Beach Wedding',
    description: 'An intimate seaside ceremony with 200 guests, featuring sunset vows, bohemian-chic decor, and a starlit sangeet night.',
  },
  {
    image: '/images/wedding3.jpg',
    couple: 'Ananya & Vikram',
    venue: 'ITC Grand Bharat, Gurugram',
    style: 'Grand Indian Celebration',
    description: 'A 500-guest extravaganza with elaborate floral mandaps, celebrity performances, and bespoke culinary experiences.',
  },
];

export default function FeaturedWeddings() {
  return (
    <section id="weddings" className="py-24 lg:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tag="Featured Weddings"
          title="Love Stories We've Crafted"
          subtitle="Every wedding we design is a unique reflection of the couple's journey, filled with emotion, beauty, and unforgettable moments."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {weddings.map((wedding, i) => (
            <AnimatedSection key={wedding.couple} delay={0.1}>
              <div className={`flex flex-col gap-8 lg:gap-16 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center`}>
                {/* Image */}
                <div className="w-full lg:w-3/5">
                  <div className="img-hover-zoom relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10 group">
                    <div className="aspect-[4/3]">
                      <img
                        src={wedding.image}
                        alt={`${wedding.couple} wedding`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-champagne-light">
                        {wedding.style}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-champagne">
                      {wedding.style}
                    </span>
                    <h3 className="mt-3 font-heading text-4xl font-semibold text-charcoal lg:text-5xl">
                      {wedding.couple}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-charcoal/50">
                      <div className="h-px w-6 bg-champagne" />
                      <span className="font-sans text-sm">{wedding.venue}</span>
                    </div>
                    <p className="mt-6 font-sans text-sm leading-relaxed text-charcoal/60">
                      {wedding.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase text-champagne transition-all duration-300 hover:gap-4"
                    >
                      Plan Your Wedding Like This
                      <span className="text-lg">→</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
