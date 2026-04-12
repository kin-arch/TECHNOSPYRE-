import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/home';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const TestimonialsGrid: React.FC = () => {
  return (
    <section className="py-28 px-8 bg-surface-container-low border-t border-outline-variant relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Client Feedback</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Trusted by <span className="text-primary italic">Visionaries</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx * 0.12}
              whileHover={{ y: -6 }}
              className="glass-card p-8 rounded-2xl border border-outline-variant flex flex-col justify-between hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="space-y-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-primary fill-primary" />)}
                </div>
                <p className="text-on-surface-variant italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full object-cover transition-all duration-500" />
                <div>
                  <h4 className="font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
