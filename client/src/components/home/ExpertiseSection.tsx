import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/home';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-surface-container-low border-y border-outline-variant">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--color-primary)_8%,transparent)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            What We <span className="text-primary italic">Do Best</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Simple, powerful tech services to help your business grow — from idea to launch and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              whileHover={{ y: -10 }}
              className="group relative rounded-sm overflow-hidden border border-outline-variant bg-surface-container transition-all duration-500 cursor-pointer hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-sm bg-primary backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-background/70 backdrop-blur-md border border-outline-variant flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500">
                  <ArrowUpRight size={16} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-3 font-headline group-hover:text-primary transition-colors">{service.title}</h4>
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
