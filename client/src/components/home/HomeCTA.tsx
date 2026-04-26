import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const HomeCTA: React.FC = () => {
  return (
    <section
      className="relative py-12 md:py-16 px-6 text-center overflow-hidden bg-background border-t border-border/50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Ready to Begin?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-4xl md:text-6xl font-headline font-bold text-foreground mb-8 leading-[1.1] tracking-tight"
        >
          Let's build something <br className="hidden md:block" />
          <span className="text-secondary">
            extraordinary.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          From first consultation to global deployment, we're with you every step of the way.
          No jargon, no complexity. Just results.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-bold bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 active:scale-95"
            >
              <span>Get In Touch</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-all duration-200" />
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-bold text-foreground border border-border bg-transparent hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              View Products
            </Link>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};
