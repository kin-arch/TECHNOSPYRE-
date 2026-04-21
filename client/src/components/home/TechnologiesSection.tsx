import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../data/home';

export const TechnologiesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Technologies We <span className="text-primary italic">Work With</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Clear, reliable tools for modern products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex flex-col items-center justify-center gap-3 p-5 rounded-sm border border-outline-variant bg-surface-container hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300 hover:shadow-[0_10px_30px_-10px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
            >
              <div className="w-16 h-16 rounded-sm bg-background/70 border border-border/60 p-2 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  className={`tech-icon w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 ${tech.logoClassName ?? ''}`}
                />
              </div>
              <span className="text-xs font-semibold text-foreground/90 group-hover:text-foreground transition-colors text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




