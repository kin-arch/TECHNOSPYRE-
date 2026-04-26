import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { categories } from '../../data/home';

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } }),
};

const AUTOPLAY_MS = 2500;

export const ProductsSlider: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = categories.length;

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, total, reduceMotion]);

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  const cat = categories[active];
  const highlights = cat.items.slice(0, 3);
  const highlightIcons = cat.itemIcons.slice(0, 3);

  return (
    <section
      className="py-16 md:py-20 px-6 sm:px-8 relative overflow-hidden bg-background border-y border-border/60"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/5 [mask-image:radial-gradient(circle,white_0%,transparent_70%)]" />
        <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-primary/5 [mask-image:radial-gradient(circle,white_0%,transparent_70%)]" />
      </div>


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3 inline-flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              Technology Stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground"
            >
              Modern <span className="text-secondary">Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              Cutting-edge tools and frameworks that power exceptional digital experiences.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 group whitespace-nowrap shrink-0">
              Explore Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${cat.id}`}
                variants={slideInLeft}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-sm overflow-hidden border border-outline-variant bg-surface-container min-h-[280px] lg:min-h-[380px] group cursor-pointer"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 flex items-center gap-3">
                  <div className="w-16 h-16 rounded-sm bg-background/70 backdrop-blur border border-border flex items-center justify-center text-primary shadow-lg">
                    {cat.icon}
                  </div>
                  <span className="bg-background/70 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-sm border border-primary/30">
                    {cat.tag}
                  </span>
                  <span className="bg-background/70 backdrop-blur text-foreground text-xs font-bold px-3 py-1.5 rounded-sm border border-border">
                    {cat.count} technologies
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">{cat.label}</h3>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`txt-${cat.id}`}
                variants={slideInRight}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                className="rounded-sm border border-outline-variant bg-card p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      {categories.map((c, i) => (
                        <button
                          key={`dot-${c.id}`}
                          onClick={() => setActive(i)}
                          aria-label={`Show ${c.label}`}
                          aria-current={i === active}
                          className={`h-2 rounded-sm transition-all duration-500 ${
                            i === active ? 'w-10 bg-primary' : 'w-2 bg-outline-variant hover:bg-primary/50'
                          }`}
                        />
                      ))}
                      <span className="ml-3 text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                        0{active + 1} / 0{total}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        onClick={prev}
                        aria-label="Previous"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-sm border border-outline-variant bg-surface-container hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all"
                      >
                        <ChevronLeft size={18} />
                      </motion.button>
                      <motion.button
                        onClick={next}
                        aria-label="Next"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-sm border border-outline-variant bg-surface-container hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all"
                      >
                        <ChevronRight size={18} />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {cat.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {cat.desc}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {highlights.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 rounded-sm border border-outline-variant bg-surface-container px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      >
                        <motion.span
                          className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {highlightIcons[i]}
                        </motion.span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/services"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-sm font-bold text-sm hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] hover:-translate-y-0.5 active:scale-95 transition-all text-white"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-outline-variant bg-background px-6 py-3 rounded-sm font-bold text-sm hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      Book a demo
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
