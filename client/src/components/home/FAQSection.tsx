import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../../data/home';

export const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block flex items-center gap-2">
              <HelpCircle size={14} /> FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-6">
              Got <span className="text-primary italic">Questions?</span>
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Quick, simple answers to the most common things people ask before working with us.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] hover:-translate-y-0.5 transition-all"
            >
              Still confused? Talk to us
            </Link>
          </motion.div>

          {/* Right: accordions */}
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-primary/40 bg-surface-container shadow-[0_10px_40px_-20px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]'
                      : 'border-outline-variant bg-surface-container/60 hover:border-primary/30'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-headline font-bold text-base md:text-lg">{f.q}</span>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-primary text-on-primary rotate-45' : 'bg-surface-container-high text-primary'
                      }`}
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-on-surface-variant leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
