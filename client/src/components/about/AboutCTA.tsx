import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-8 text-center relative overflow-hidden border-t border-primary/20">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-primary/25 bg-primary-foreground/10 mb-8">
          <Sparkles size={14} className="text-primary/90" />
          <span className="text-xs font-semibold uppercase tracking-widest">Let&apos;s build together</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-foreground">
          Want to be <span className='text-primary'>part of the story?</span>
        </h2>

        <p className="text-base md:text-lg text-on-surface/90 mb-10 max-w-xl mx-auto leading-relaxed">
          Whether you need software for your business or want to learn at our Academy start with a simple conversation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 px-10 py-3 rounded-sm font-semibold bg-primary text-primary-foreground hover:scale-105 hover:bg-foreground transition-all duration-200"
          >
            <span>Get in touch</span>
            <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/15">
              <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-all duration-200" />
            </div>
          </Link>
          <Link
            to="/academy"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-sm font-semibold border border-primary text-primary hover:scale-105 hover:bg-primary/10 transition-all duration-200"
          >
            Explore Academy
          </Link>
        </div>
      </motion.div>
    </section>
  );
};




