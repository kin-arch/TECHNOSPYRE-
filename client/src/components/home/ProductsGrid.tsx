import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/home';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const ProductsGrid: React.FC = () => {
  return (
    <section className="py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Product Suite</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">18 Products. <span className="text-primary">4 Categories.</span></h2>
            <p className="text-on-surface-variant mt-4 max-w-lg">Precision-engineered digital products for enterprise operations, sales, web, and mobile — all under one roof.</p>
          </div>
          <Link to="/solutions" className="text-primary font-bold flex items-center gap-2 group whitespace-nowrap shrink-0">
            Explore All Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT: Large featured card — Operations */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:row-span-2"
          >
            <Link
              to={`/solutions?category=${categories[0].id}`}
              className="group block h-full rounded-3xl overflow-hidden border border-outline-variant inner-highlight bg-surface-container hover:border-primary/40 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={categories[0].image}
                  alt={categories[0].label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-100"
                />
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
                    {categories[0].icon}
                  </div>
                  <span className="bg-surface-container/80 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/20">
                    {categories[0].count} Products
                  </span>
                </div>
                <span className="absolute top-4 right-4 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                  {categories[0].tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-headline text-3xl font-bold mb-3">{categories[0].label}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-7">{categories[0].desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {categories[0].items.map((item, i) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      <span className="text-primary shrink-0">{categories[0].itemIcons[i]}</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  View Operations <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* RIGHT: 3 smaller cards */}
          <div className="flex flex-col gap-6">
            {categories.slice(1).map((cat, i) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.12}
              >
                <Link
                  to={`/solutions?category=${cat.id}`}
                  className="group flex overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-high inner-highlight hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 block"
                >
                  <div className="w-44 shrink-0 overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        {cat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{cat.tag}</span>
                      <span className="ml-auto bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">{cat.count}</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-2">{cat.label}</h3>
                    <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{cat.desc}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {cat.items.slice(0, 3).map((item, j) => (
                        <span key={item} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                          <span className="text-primary">{cat.itemIcons[j]}</span>{item}
                        </span>
                      ))}
                      {cat.items.length > 3 && (
                        <span className="text-xs text-primary font-bold">+{cat.items.length - 3} more</span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
