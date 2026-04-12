import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const HomeCTA: React.FC = () => {
  return (
    <section className="py-28 px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/6 blur-[160px] rounded-full" />
      </div>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto relative z-10">
        <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Ready to Begin?</span>
        <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">Let's build something <span className="text-primary italic">extraordinary.</span></h2>
        <p className="text-on-surface-variant text-lg mb-10">From first consultation to global deployment — we're with you every step of the way.</p>
        <div className="flex max-sm:flex-col gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95 text-center">
            Get In Touch <ArrowRight size={16} />
          </Link>
          <Link to="/solutions" className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant text-on-surface px-10 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:border-primary/40 hover:text-primary active:scale-95 text-center">
            View Products
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
