import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 px-8 text-center bg-surface-container-low border-t border-outline-variant">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Want to be part of the story?</h2>
        <p className="text-on-surface-variant mb-8">Partner with us or enroll in the academy — the future is being built here.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-bold text-sm hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] active:scale-95 transition-all">
            Get In Touch <ArrowRight size={16} />
          </Link>
          <Link to="/academy" className="inline-flex items-center gap-2 bg-surface-container border border-outline-variant text-on-surface px-8 py-4 rounded-full font-bold text-sm hover:border-secondary/40 hover:text-secondary transition-all">
            Explore Academy
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
