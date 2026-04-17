import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const AcademyHero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-28 overflow-hidden px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1800&auto=format&fit=crop&q=80"
          alt="Academy hero"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        {/* Grid pattern removed to achieve 100% gradient-free flat design */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.02] bg-primary/5" />
      </div>
      
      {/* Glow orbs */}
      {/* Solid subtle accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full pointer-events-none z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/3 rounded-full pointer-events-none z-10" />

      <div className="container mx-auto relative z-30">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block flex items-center gap-3">
            <Star size={14} className="text-primary fill-primary/20" /> The Gold Standard in IT Academy
          </span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold leading-[0.95] tracking-tight text-on-surface mb-8">
            Architecting Your <br /><span className="text-primary italic">Professional Destiny.</span>
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed font-light">
            Bridge the technical gap with our industry-led certification programs. Precision-engineered curriculum for the next generation of engineers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
