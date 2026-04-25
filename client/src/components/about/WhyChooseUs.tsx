import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay, ease: 'easeOut' as const }
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-24 md:py-28 bg-muted/20 border-y border-border/60" aria-labelledby="why-choose-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--primary)/10%,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,var(--primary)/8%,transparent)] pointer-events-none" />

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

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none p-0 m-0"
        >
          {whyChooseUs.map((item, i) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="group relative rounded-sm border border-outline-variant bg-card p-6 sm:p-7 shadow-sm will-change-transform hover:border-primary/35 hover:bg-surface-container-high/60"
              style={{ transitionDelay: `${i * 40}ms` }}
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
        </motion.ul>
      </div>
    </section>
  );
};




