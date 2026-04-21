import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay, ease: 'easeOut' as const } }),
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-24 md:py-28 bg-muted/20 border-y border-border/60 overflow-hidden" aria-labelledby="why-choose-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-[-120px] h-[520px] w-[520px] rounded-sm bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-48 right-[-140px] h-[520px] w-[520px] rounded-sm bg-primary/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">Why Technospyre</p>
          <h2 id="why-choose-heading" className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why people choose us
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Easy process, strong results, and reliable support.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none p-0 m-0">
          {whyChooseUs.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i * 0.05}
              className="group relative rounded-sm border border-outline-variant bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/35 hover:-translate-y-1 hover:bg-surface-container-high/60 hover:shadow-[0_18px_50px_-28px_color-mix(in_srgb,var(--color-primary)_45%,transparent)]"
            >
              <div className="absolute top-5 right-5 text-[10px] font-bold tracking-[0.22em] uppercase text-muted-foreground">
                0{i + 1}
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary ring-1 ring-primary/15 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};




