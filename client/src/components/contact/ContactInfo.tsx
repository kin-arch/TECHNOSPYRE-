import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { contacts, features } from '../../data/contact';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const ContactInfo: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.12}
            whileHover={{ y: -6 }}
            className="glass-card border border-outline-variant rounded-sm p-8 flex flex-col justify-between group hover:border-primary/30 transition-all duration-400 cursor-pointer inner-highlight"
          >
            <div>
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center mb-7 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-7">{item.desc}</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-label font-bold text-sm group-hover:gap-4 transition-all duration-300">
              {item.action} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Features bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 flex flex-wrap gap-4 justify-center"
      >
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-2 text-on-surface-variant text-sm bg-surface-container border border-outline-variant px-4 py-2.5 rounded-sm">
            <span className="text-primary">{f.icon}</span>
            {f.label}
          </div>
        ))}
      </motion.div>
    </section>
  );
};



