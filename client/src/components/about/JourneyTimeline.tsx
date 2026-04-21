import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timeline } from '../../data/about';
import { SectionHeading } from './SectionHeading';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 } as const
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 } as const
  },
};

export const JourneyTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-24 md:py-28 bg-background border-t border-border/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Timeline"
          title="Our journey"
          description="From a small idea to a global technology company."
          align="center"
        />

        <div className="space-y-12 relative mt-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            className="absolute left-1/2 top-0 w-px origin-top bg-primary"
            style={{ height: lineHeight }}
          />

          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              variants={idx % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className={`relative flex items-center justify-between gap-6 group ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="font-headline text-2xl font-bold text-primary block mb-1">{item.year}</span>
                <h4 className="font-bold text-base mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-sm bg-card border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 z-10 shadow-sm">
                {item.icon}
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




