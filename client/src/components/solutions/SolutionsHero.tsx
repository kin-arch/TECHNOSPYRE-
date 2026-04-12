import React from 'react';
import { motion } from 'motion/react';

export const SolutionsHero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-24 overflow-hidden px-8 text-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 blur-[160px] rounded-full" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Our Product Suite</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tight text-on-surface mb-8">
            Precision-Built <br /><span className="text-primary italic">Digital Products</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed font-light">
            From enterprise operations to mobile-first experiences — every product is engineered to perform at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
