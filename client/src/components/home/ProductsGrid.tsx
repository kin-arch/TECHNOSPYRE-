import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { productOffers } from '@/data/home';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProductsGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleOffers = showAll ? productOffers : productOffers.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-14 px-4 sm:px-6 relative overflow-hidden bg-background border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6 md:gap-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-label text-primary text-xs font-bold tracking-[0.34em] uppercase mb-4 block inline-flex items-center gap-2"
            >
              <Sparkles size={14} /> Product Offers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="max-w-2xl text-3xl md:text-4xl lg:text-[2.8rem] font-headline font-bold tracking-[-0.03em] leading-[1.05] text-foreground"
            >
              Software Built To Run Your <span className="text-secondary">Daily Operations</span> With Confidence
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <Link to="/products" className="md:mt-2 text-primary font-bold flex items-center gap-2 group whitespace-nowrap shrink-0">
              View All Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {visibleOffers.map((c) => (
            <div
              key={c.id}
              data-home-item
              className="product-card group relative rounded-sm border border-outline-variant bg-surface-container p-5 sm:p-6 min-h-[240px] flex flex-col justify-between hover:border-primary/45 transition-all duration-300 cursor-pointer overflow-hidden will-change-transform"
              data-home-glow  
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.06), transparent 40%)`,
                }}
              />
              <div className="flex items-center justify-between relative z-20">
                <motion.div className="card-icon w-14 h-14 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm">
                  {c.icon}
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface-variant border border-outline-variant bg-background/60 px-2.5 py-1 rounded-sm backdrop-blur-sm"
                >
                  {c.tag}
                </motion.span>
              </div>
 
                <div className="mt-4 relative z-20">
                  <h3 className="card-title font-headline text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-1.5">
                    {c.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {c.tagline}
                  </p>
                </div>


              {'pricingLabel' in c && c.pricingLabel && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  className="mt-3"
                >
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-sm ${'pricingSpecial' in c && c.pricingSpecial
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'bg-primary/10 text-primary'
                    }`}>
                    {('pricingFrom' in c && c.pricingFrom !== 0) ? `From Rs. ${c.pricingFrom}` : ''}
                    {c.pricingLabel}
                  </span>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              >
                <Link
                  to={c.to}
                  className="card-link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

            </div>
          ))}
        </div>

        {productOffers.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              {showAll ? 'View Less' : 'View More'}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
