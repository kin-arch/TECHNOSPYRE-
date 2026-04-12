import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SolutionsCTA: React.FC = () => {
  return (
    <section className="px-8 py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-secondary/8 blur-[140px] rounded-full" />
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Let's Build Together</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-on-surface-variant text-lg mb-10">Talk to our team and find the right product for your business needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95"
            >
              Contact Us Today <ArrowRight size={16} />
            </Link>
            <Link
              to="/academy"
              className="inline-flex items-center gap-2 bg-surface-container text-on-surface border border-outline-variant px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:border-primary/40 hover:text-primary active:scale-95"
            >
              Browse Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
