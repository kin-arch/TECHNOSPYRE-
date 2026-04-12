import React from 'react';
import { motion } from 'motion/react';

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const ContactVisual: React.FC = () => {
  return (
    <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-1/2 relative">
      <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant shadow-2xl inner-highlight relative">
        <img
          className="w-full h-full object-cover transition-all duration-700"
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=80"
          alt="Global tech office"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/80 via-transparent to-transparent" />

        {/* Ping dots */}
        <div className="absolute top-[25%] left-[32%] group">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#a4e6ff]" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-surface-container/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">HEADQUARTERS</div>
        </div>
        <div className="absolute top-[52%] left-[62%] group">
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_#d1bcff]" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-surface-container/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-secondary border border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">INNOVATION HUB</div>
        </div>

        {/* Stats overlay */}
        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
          {[
            { value: '24/7', label: 'Global Support', color: 'primary' },
            { value: '12+', label: 'Tech Nodes', color: 'primary' },
          ].map((s) => (
            <div key={s.label} className="bg-surface-container/80 backdrop-blur-md p-5 rounded-xl border border-outline-variant">
              <div className={`text-3xl font-headline font-bold text-${s.color} mb-1`}>{s.value}</div>
              <div className="text-xs font-label text-on-surface-variant uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
