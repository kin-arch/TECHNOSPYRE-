import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { timeline } from '../../data/about';
import { SectionHeading } from './SectionHeading';

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
};


export const JourneyTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ['start end', 'end start'] 
  });
  
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const lineHeight = useTransform(springScroll, [0.1, 0.8], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background border-t border-border/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          eyebrow="Timeline"
          title={<>Our <span className="text-primary italic">Journey</span></>}
          description="From a small idea to a global technology company, built with passion and precision."
          align="center"
        />

        <div className="space-y-24 relative mt-20">
          {/* Animated central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2 hidden md:block" />
          <motion.div
            className="absolute left-1/2 top-0 w-px origin-top bg-primary -translate-x-1/2 hidden md:block shadow-[0_0_8px_rgba(var(--color-primary),0.3)]"
            style={{ height: lineHeight }}
          />

          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              variants={idx % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center justify-between gap-12 group ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} flex-col md:flex-row will-change-transform`}
            >
              {/* Content Side */}
              <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                <motion.span 
                  className="font-headline text-4xl lg:text-5xl font-bold text-primary/10 group-hover:text-primary transition-colors duration-500 block mb-3"
                >
                  {item.year}
                </motion.span>
                <h4 className="font-bold text-xl lg:text-2xl mb-3 group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>
              
              {/* Central Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 hidden md:flex w-12 h-12 rounded-xl bg-card border-2 border-border group-hover:border-primary group-hover:scale-125 transition-all duration-500 items-center justify-center text-primary z-10 shadow-lg group-hover:shadow-primary/20">
                <div className="group-hover:animate-pulse">
                  {item.icon}
                </div>
              </div>
              
              {/* Empty side for layout balance */}
              <div className="hidden md:block w-[45%]" />
              
              {/* Mobile Mobile Indicator */}
              <div className="md:hidden w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};





