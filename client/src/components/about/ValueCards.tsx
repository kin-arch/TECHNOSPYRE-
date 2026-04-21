import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Star, Zap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' as const } }),
};

const values = [
  { icon: <Lightbulb size={22} />, title: 'Fresh Ideas', desc: 'We don\'t just copy what others do. We think hard about your problem and design real solutions that fit you.', featured: true },
  { icon: <ShieldCheck size={22} />, title: 'Honest Work', desc: 'Clear pricing, clear timelines, no hidden fees. What we promise is what you get.' },
  { icon: <Star size={22} />, title: 'Top Quality', desc: 'Clean code, beautiful design, careful testing every time.' },
  { icon: <Zap size={22} />, title: 'Fast Support', desc: 'When something needs help, we reply quickly and fix it properly.' },
];

export const ValueCards: React.FC = () => {
  return (
    <section className="py-24 md:py-28 bg-background relative overflow-hidden border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Principles"
          title="The Technospyre way"
          description="Four simple values that shape every project we touch."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={i * 0.08}
              whileHover={{ y: -4 }}
              className={`group p-6 rounded-sm border border-border transition-colors hover:border-primary/35 cursor-pointer shadow-sm ${
                v.featured
                  ? 'md:col-span-2 bg-card min-h-[220px] flex flex-col justify-end relative overflow-hidden border-primary/20'
                  : 'bg-muted/30'
              }`}
            >
              {v.featured && (
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-25 transition-opacity">
                  <Lightbulb size={90} className="text-primary" />
                </div>
              )}
              <div className="w-10 h-10 rounded-sm-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform relative z-10">
                {v.icon}
              </div>
              <h3 className={`font-headline font-bold mb-2 relative z-10 ${v.featured ? 'text-2xl' : 'text-lg'}`}>{v.title}</h3>
              <p className={`text-muted-foreground leading-relaxed relative z-10 ${v.featured ? 'text-sm' : 'text-xs'}`}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




