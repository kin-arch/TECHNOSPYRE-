import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { powerComparison } from '../../data/home';

export const PowerComparison: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-8 bg-surface-container-low border-y border-outline-variant relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/5 blur-[140px] rounded-sm pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Technospyre vs <span className="text-primary italic">Others</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
            See the simple difference. We give you more value, more support, and clear pricing — every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-sm border border-outline-variant bg-surface-container overflow-hidden shadow-[0_20px_60px_-30px_color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
        >
          {/* Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-surface-container-high border-b border-outline-variant">
            <div className="p-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Feature</div>
            <div className="p-5 text-center bg-primary/10 border-x border-outline-variant">
              <div className="flex items-center justify-center gap-2 text-primary font-bold">
                <Sparkles size={16} /> Technospyre
              </div>
            </div>
            <div className="p-5 text-center text-on-surface-variant font-bold text-sm">Other Agencies</div>
          </div>

          {/* Rows */}
          {powerComparison.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-outline-variant last:border-b-0 hover:bg-surface-container-high/40 transition-colors"
            >
              <div className="p-5 text-sm font-medium">{row.feature}</div>
              <div className="p-5 flex items-center justify-center bg-primary/5 border-x border-outline-variant">
                {row.us ? (
                  <span className="w-8 h-8 rounded-sm bg-primary text-on-primary flex items-center justify-center">
                    <Check size={16} strokeWidth={3} />
                  </span>
                ) : (
                  <span className="w-8 h-8 rounded-sm bg-muted text-muted-foreground flex items-center justify-center">
                    <X size={16} />
                  </span>
                )}
              </div>
              <div className="p-5 flex items-center justify-center">
                {row.others ? (
                  <Check size={18} className="text-primary" />
                ) : (
                  <span className="w-8 h-8 rounded-sm bg-muted/50 text-muted-foreground flex items-center justify-center">
                    <X size={16} />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
