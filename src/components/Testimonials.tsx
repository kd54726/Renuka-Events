import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: "Renuka and her team didn't just plan our wedding, they brought our wildest dreams to life. Every single guest was in awe. It was like stepping into a fairytale we didn't know we could live.",
    couple: 'Priya & Arjun Mehta',
    wedding: 'Udaipur Palace Wedding • Nov 2023',
    rating: 5,
    initials: 'PM',
  },
  {
    quote: "We were planning from Dubai, and Renuka handled absolutely everything back in India. The attention to detail was extraordinary, from the personalized welcome hampers to the midnight fireworks. Flawless.",
    couple: 'Meera & Karan Sharma',
    wedding: 'Goa Destination Wedding • Feb 2024',
    rating: 5,
    initials: 'MS',
  },
  {
    quote: "Our families had very specific traditions to honor, and the Renuka team wove them in so beautifully with the modern elements we wanted. They understood our vision better than we did ourselves.",
    couple: 'Ananya & Vikram Reddy',
    wedding: 'ITC Grand Bharat • Dec 2023',
    rating: 5,
    initials: 'AR',
  },
  {
    quote: "Three days, 600 guests, zero stress. That's what Renuka Arts gave us. I still get messages from guests saying it was the most beautiful wedding they've ever attended. Worth every penny.",
    couple: 'Sana & Rohan Kapoor',
    wedding: 'Leela Palace, Bangalore • Jan 2024',
    rating: 5,
    initials: 'SK',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tag="Love Letters"
          title="Words From Our Couples"
          subtitle="The highest compliment we receive is the trust couples place in us and the joy they share after their celebration."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.couple} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full rounded-2xl bg-white p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-beige-light/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,169,110,0.1)] hover:border-champagne/20"
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote size={32} className="text-champagne/30" strokeWidth={1} />
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-champagne text-champagne" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-lg italic leading-relaxed text-charcoal/70">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-champagne-dark text-white font-sans text-sm font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-heading text-lg font-semibold text-charcoal">
                      {t.couple}
                    </div>
                    <div className="font-sans text-xs text-charcoal/40 tracking-wide">
                      {t.wedding}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
