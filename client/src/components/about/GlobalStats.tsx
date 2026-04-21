import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { globalStats } from '../../data/about';
import { SectionHeading } from './SectionHeading';

const AnimatedNumber: React.FC<{ value: string; active: boolean }> = ({ value, active }) => {
  const num = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, num]);

  return (
    <>
      {current}
      {suffix}
    </>
  );
};

export const GlobalStats: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-muted/20 border-y border-border/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="By the numbers"
          title="Impact at a glance"
          description="A quick snapshot of how far we've grown with our clients and community."
          align="center"
          className="!mb-12 md:!mb-14"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative z-10">
          {globalStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col items-center text-center gap-2.5"
            >
              <div className="w-11 h-11 rounded-sm border border-border bg-card flex items-center justify-center text-primary shadow-sm">
                {s.icon}
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight tabular-nums">
                <AnimatedNumber value={s.value} active={isInView} />
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium leading-snug max-w-[9rem] mx-auto">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




