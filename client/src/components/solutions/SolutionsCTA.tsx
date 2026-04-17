import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../base/buttons/button';

export const SolutionsCTA: React.FC = () => {
  return (
    <section className="px-8 py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Let's Build Together</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-on-surface-variant text-lg mb-10">Talk to our team and find the right product for your business needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              color="primary"
              iconTrailing={ArrowRight}
            >
              Contact Us Today
            </Button>
            <Button
              href="/academy"
              size="lg"
              color="secondary"
            >
              Browse Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
