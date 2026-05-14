import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  image: string;
  quote?: string;
  author?: string;
}

export default function ParallaxDivider({ image, quote, author }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative h-[40vh] min-h-[300px] overflow-hidden lg:h-[50vh]">
      <motion.div style={{ y }} className="absolute inset-[-15%] h-[130%]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/60" />

      {quote && (
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <div className="luxury-divider mb-6">
              <span className="text-champagne text-2xl">✦</span>
            </div>
            <p className="font-serif text-2xl italic leading-relaxed text-white/90 sm:text-3xl lg:text-4xl">
              "{quote}"
            </p>
            {author && (
              <p className="mt-6 font-sans text-xs font-medium tracking-[0.2em] uppercase text-champagne">
                — {author}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
