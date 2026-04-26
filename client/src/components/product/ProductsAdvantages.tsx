import React from 'react';
import { motion } from 'motion/react';
import { advantages, categories } from '../../data/product';

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="px-8 py-24 bg-surface-container-low mt-4 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Why Choose Us</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The <span className="text-secondary italic">Technospyre</span> Advantage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-sm bg-surface-container border border-outline-variant hover:border-primary/40 inner-highlight transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-headline font-bold text-xl mb-3">{item.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Product count stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 rounded-sm bg-surface-container border border-outline-variant"
            >
              <div className="w-9 h-9 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                {cat.icon}
              </div>
              <div>
                <div className="font-headline font-bold text-lg text-primary">{cat.products.length}</div>
                <div className="text-xs text-on-surface-variant">{cat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



