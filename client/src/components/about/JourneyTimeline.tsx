import React from 'react';
import { motion } from 'motion/react';
import { timeline } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const JourneyTimeline: React.FC = () => {
  return (
    <section className="py-28 bg-background border-t border-outline-variant">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Story</span>
          <h2 className="font-headline text-4xl font-bold">Our Journey</h2>
        </motion.div>

        <div className="space-y-16 relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              variants={idx % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative flex items-center justify-between gap-8 group ${idx % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="font-headline text-3xl font-bold text-primary block mb-2">{item.year}</span>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-surface-container border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all z-10">
                {item.icon}
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
