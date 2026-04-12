import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { categories } from '../../data/solutions';

interface SolutionPanelProps {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
}

export const SolutionPanel: React.FC<SolutionPanelProps> = ({ activeCategory, setActiveCategory }) => {
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <section className="px-8 max-w-7xl mx-auto py-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold font-headline transition-all duration-300 border ${
              activeCategory === cat.id
                ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(251,146,60,0.25)]'
                : 'bg-surface-container/60 text-on-surface-variant border-outline-variant hover:text-primary hover:border-primary/40'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Active panel with image */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl overflow-hidden border border-outline-variant bg-surface-container inner-highlight shadow-2xl"
      >
        {/* Image banner */}
        <div className="relative h-52 md:h-64 overflow-hidden">
          <img
            src={active.image}
            alt={active.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-8 flex items-center gap-4 p-4 bg-surface/5 border-surface/10">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
              {active.icon}
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-on-surface">{active.label}</h2>
              <p className="text-on-surface-variant text-sm">{active.products.length} products</p>
            </div>
          </div>
        </div>

        {/* Description + product cards */}
        <div className="p-8">
          <p className="text-on-surface-variant text-base leading-relaxed mb-8 max-w-2xl">{active.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {active.products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-surface-container-high border border-outline-variant hover:border-primary/40 hover:bg-surface-container-highest transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  {product.icon}
                </div>
                <span className="font-headline font-semibold text-on-surface text-sm leading-snug flex-1">{product.name}</span>
                <ChevronRight size={16} className="text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
