import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&auto=format&fit=crop&q=80"
          alt="About hero"
          className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity"
        />
        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-secondary/6 blur-[140px] rounded-full pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block flex items-center gap-2">
            <Calendar size={12} /> Established 2013
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tight text-on-surface mb-8">
            Driving Digital <span className="text-primary italic">Transformation</span> <br />with Unwavering Precision.
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-xl leading-relaxed font-light">
            Technospyre is an elite technology firm dedicated to bridging the gap between legacy infrastructure and the future of autonomous intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
