import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/solutions';

interface FullOverviewProps {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export const FullOverview: React.FC<FullOverviewProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <section className="px-8 max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Everything We Offer</span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Full Product Overview</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1 }}
            onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
            className={`group rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer hover:shadow-xl ${
              activeCategory === cat.id
                ? 'border-primary shadow-[0_0_30px_rgba(251,146,60,0.15)]'
                : 'border-outline-variant hover:border-primary/40'
            }`}
          >
            {/* Card image */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
                {cat.icon}
              </div>
              {activeCategory === cat.id && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-lg">Active</div>
              )}
            </div>

            {/* Card body */}
            <div className="bg-surface-container-low p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-headline text-lg font-bold">{cat.label}</h4>
                <span className="text-xs text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-lg border border-outline-variant">
                  {cat.products.length} products
                </span>
              </div>
              <ul className="space-y-2.5">
                {cat.products.map((p) => (
                  <li key={p.name} className="flex items-center gap-2.5 text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    <span className="text-primary shrink-0">{p.icon}</span>
                    {p.name}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 text-primary text-sm font-bold font-label">
                <span>Explore {cat.label}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
