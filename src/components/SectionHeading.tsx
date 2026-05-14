import AnimatedSection from './AnimatedSection';

interface Props {
  tag: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeading({ tag, title, subtitle, light = false, align = 'center' }: Props) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
      <AnimatedSection>
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} mb-4`}>
          <div className="h-px w-8 bg-champagne" />
          <span className={`font-sans text-xs font-medium tracking-[0.3em] uppercase ${
            light ? 'text-champagne-light' : 'text-champagne'
          }`}>
            {tag}
          </span>
          <div className="h-px w-8 bg-champagne" />
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className={`font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${
          light ? 'text-white' : 'text-charcoal'
        }`}>
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p className={`mt-5 font-sans text-base leading-relaxed ${
            light ? 'text-white/60' : 'text-charcoal/50'
          } max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
