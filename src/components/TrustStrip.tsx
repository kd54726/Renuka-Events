import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, Heart, MapPin, Star } from 'lucide-react';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Award, value: 12, suffix: '+', label: 'Years of Excellence', detail: 'Since 2012' },
  { icon: Heart, value: 500, suffix: '+', label: 'Weddings Crafted', detail: 'Dream weddings delivered' },
  { icon: MapPin, value: 25, suffix: '+', label: 'Cities Served', detail: 'Across India & beyond' },
  { icon: Star, value: 98, suffix: '%', label: 'Client Satisfaction', detail: 'Five-star rated' },
];

export default function TrustStrip() {
  return (
    <section className="relative -mt-20 z-20 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-white/80 backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.08)] border border-white/60 p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-champagne/10 transition-all duration-500 group-hover:bg-champagne/20">
                  <stat.icon size={22} className="text-champagne" />
                </div>
                <div className="font-heading text-4xl font-semibold text-charcoal lg:text-5xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 font-sans text-xs font-semibold tracking-[0.15em] uppercase text-charcoal/80">
                  {stat.label}
                </div>
                <div className="mt-1 font-sans text-xs text-charcoal/50">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
