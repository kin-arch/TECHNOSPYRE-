import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../base/buttons/button';

export const SolutionsCTA: React.FC = () => {
  return (
    <section className="px-8 py-28 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Let's Build Together</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-on-surface-variant text-lg mb-10">Talk to our team and find the right product for your business needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              iconTrailing={ArrowRight}
              className='max-sm:w-full flex items-center justify-center gap-3 bg-primary hover:bg-foreground border border-primary hover:border-foreground transition-all duration-200 text-primary-foreground font-semibold px-10 py-4 rounded-sm text-sm shadow-sm hover:scale-105'
            >
              Contact Us Today
            </Button>
            <Button
              href="/academy"
              size="lg"
              className='max-sm:w-full flex items-center justify-center gap-3 hover:bg-primary bg-primary/10 border border-primary hover:text-primary-foreground transition-all duration-200 text-primary font-semibold px-10 py-4 rounded-sm text-sm shadow-sm hover:scale-105'
            >
              Browse Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
