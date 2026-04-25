import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/home';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TestimonialsGrid: React.FC = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-testimonial-card]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          },
        );
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-6 sm:px-8 bg-surface-container-low border-t border-outline-variant relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      {/* Optimized background element - removed blur for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full [mask-image:radial-gradient(circle,white_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Customer Reviews</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">
            Trusted by <span className="text-primary italic">Real Customers</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-xl mx-auto">
            Real feedback from organizations that have worked with TechnoSpyre.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
          {/* Featured quote */}
          <div data-testimonial-card className="relative rounded-sm border border-outline-variant bg-surface-container p-8 md:p-10 overflow-hidden min-h-[320px] flex flex-col justify-between will-change-transform">

            <Quote size={120} className="absolute -top-4 -right-4 text-primary/10" strokeWidth={1} />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-headline leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-outline-variant">
                  <img src={t.img} alt={t.author} className="w-14 h-14 rounded-sm object-cover ring-2 ring-primary/30" />
                  <div>
                    <h4 className="font-bold text-base">{t.author}</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">{t.role}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8 relative z-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-sm transition-all ${
                      i === active ? 'w-8 bg-primary' : 'w-2 bg-outline-variant hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActive((p) => (p - 1 + total) % total)}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-sm border border-outline-variant hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setActive((p) => (p + 1) % total)}
                  aria-label="Next"
                  className="w-10 h-10 rounded-sm border border-outline-variant hover:border-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Side mini cards */}
          <div className="flex flex-col gap-4">
            {testimonials.map((tm, i) => (
              <motion.button
                key={tm.author}
                onClick={() => setActive(i)}
                whileHover={{ x: 6 }}
                className={`text-left flex gap-4 p-5 rounded-sm border transition-all duration-300 ${
                  i === active
                    ? 'border-primary/50 bg-surface-container'
                    : 'border-outline-variant bg-surface-container/50 hover:border-primary/30'
                }`}
              >
                <img src={tm.img} alt={tm.author} className="w-12 h-12 rounded-sm object-cover shrink-0" />
                <div className="min-w-0">
                  <h4 className="font-bold text-sm truncate">{tm.author}</h4>
                  <p className="text-xs text-on-surface-variant truncate">{tm.role} - {tm.company}</p>
                  <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">"{tm.quote.slice(0, 80)}..."</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




