import React from 'react';
import { motion } from 'motion/react';
import { globalStats } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const GlobalStats: React.FC = () => {
  return (
    <section className="py-8 bg-surface-container-low border-y border-outline-variant">
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {globalStats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.1}
            className="flex flex-col items-center text-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-1">{s.icon}</div>
            <p className="text-3xl font-headline font-bold text-primary">{s.value}</p>
            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
