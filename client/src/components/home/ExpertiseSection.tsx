import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { services } from '../../data/home';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-surface-container-low border-y border-outline-variant">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.06)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Expertise in every <span className="text-primary italic">Layer</span></h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">From strategic consulting to full-cycle development, we deliver excellence at every touchpoint.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden border border-outline-variant bg-surface-container inner-highlight transition-all duration-400 cursor-pointer"
            >
              <div className="h-36 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-50" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-primary backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-3 font-headline">{service.title}</h4>
                <ul className="text-sm text-on-surface-variant space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
