import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '../../data/home';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } }),
};

const AUTOPLAY_MS = 2500;

export const ProductsGrid: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = categories.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, AUTOPLAY_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, total]);

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);
  const cat = categories[active];

  return (
    <section className="py-28 px-6 sm:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
              Software That <span className="text-primary">Works for You</span>
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-lg">
              18 ready products across 4 categories — built for hospitals, shops, schools, and growing businesses.
            </p>
          </div>
          <Link to="/solutions" className="text-primary font-bold flex items-center gap-2 group whitespace-nowrap shrink-0">
            See All Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main showcase slider */}
          <div className="relative grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative rounded-3xl overflow-hidden border border-outline-variant bg-surface-container min-h-[300px] lg:min-h-[480px] group"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/30 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/25 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary">
                    {cat.icon}
                  </div>
                  <span className="bg-background/70 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full border border-primary/30">
                    {cat.count} Products
                  </span>
                </div>
                <span className="absolute top-5 right-5 bg-primary/15 border border-primary/30 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                  {cat.tag}
                </span>
                <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                  <h3 className="font-headline text-2xl font-bold text-foreground">{cat.label}</h3>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`txt-${active}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col justify-center p-2 lg:p-6"
              >
                <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4 hidden lg:block">{cat.label}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 text-base">{cat.desc}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {cat.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="group flex items-center gap-3 p-3 rounded-xl border border-outline-variant bg-surface-container hover:border-primary/40 hover:bg-surface-container-high hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        {cat.itemIcons[i]}
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  to={`/solutions?category=${cat.id}`}
                  className="inline-flex items-center gap-2 self-start bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] hover:-translate-y-0.5 transition-all"
                >
                  Explore {cat.label} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {categories.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${c.label}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-primary' : 'w-2 bg-outline-variant hover:bg-primary/50'
                  }`}
                />
              ))}
              <span className="ml-4 text-xs text-on-surface-variant font-mono">
                0{active + 1} / 0{total}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-11 h-11 rounded-full border border-outline-variant bg-surface-container hover:bg-primary hover:text-on-primary hover:border-primary flex items-center justify-center transition-all hover:-translate-x-0.5"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-11 h-11 rounded-full border border-outline-variant bg-surface-container hover:bg-primary hover:text-on-primary hover:border-primary flex items-center justify-center transition-all hover:translate-x-0.5"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick category chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={`chip-${c.id}`}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                  i === active
                    ? 'bg-primary text-on-primary border-primary'
                    : 'border-outline-variant text-on-surface-variant hover:border-primary/50 hover:text-primary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
