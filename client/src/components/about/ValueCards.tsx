import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { values } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const ValueCards: React.FC = () => {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">What Drives Us</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The DNA of <span className="text-primary italic">Technospyre</span></h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">Guided by principles that define our every interaction.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              whileHover={{ y: -6 }}
              className={`group p-8 rounded-lg border border-outline-variant inner-highlight transition-all duration-300 hover:border-primary/40 cursor-pointer ${
                v.featured ? 'md:col-span-2 bg-surface-container-high min-h-[280px] flex flex-col justify-end relative overflow-hidden' : 'bg-surface-container'
              }`}
            >
              {v.featured && (
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lightbulb size={100} className="text-primary" />
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className={`font-headline font-bold mb-3 ${v.featured ? 'text-3xl' : 'text-xl'}`}>{v.title}</h3>
              <p className={`text-on-surface-variant leading-relaxed ${v.featured ? 'text-base' : 'text-sm'}`}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
