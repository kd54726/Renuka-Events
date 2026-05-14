import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const galleryImages = [
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/hero-wedding.jpg?raw=true', alt: 'Grand mandap decoration', span: 'tall' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/wedding1.jpg?raw=true', alt: 'Luxury reception setup', span: 'normal' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery1.jpg?raw=true', alt: 'Bridal entry with sparklers', span: 'normal' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery2.jpg?raw=true', alt: 'Table decor centerpiece', span: 'tall' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/wedding2.jpg?raw=true', alt: 'Beach destination wedding', span: 'normal' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery3.jpg?raw=true', alt: 'Floral mandap from above', span: 'normal' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery4.jpg?raw=true', alt: 'First dance under lights', span: 'tall' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/wedding3.jpg?raw=true', alt: 'Grand stage decoration', span: 'normal' },
  { src: 'https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery5.jpg?raw=true', alt: 'Palace courtyard ceremony', span: 'normal' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-warm-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tag="Our Portfolio"
          title="A Gallery of Dreams"
          subtitle="Every image tells a story. Browse through our collection of breathtaking weddings, each one a unique masterpiece."
        />

        <div className="mt-16">
          <div className="masonry">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                >
                  <div className={`${img.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-champagne-light">
                      {img.alt}
                    </p>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-white/0 group-hover:border-white/40 transition-all duration-500 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-white/0 group-hover:border-white/40 transition-all duration-500 rounded-bl-lg" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
