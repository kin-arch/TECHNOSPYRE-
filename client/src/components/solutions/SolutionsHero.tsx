import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllProducts } from '../../data/solutions';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionsHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const products = getAllProducts();
  const heroProductsIds = ['hospital-erp', 'school-erp', 'hr-erp', 'inventory-erp'];
  const heroItems = products.filter(p => heroProductsIds.includes(p.id));

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroItems.length);
  }, [heroItems.length]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (heroItems.length === 0) return null;

  const currentItem = heroItems[currentIndex];

  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-[90vh] w-full flex items-center lg:items-start overflow-hidden">

      {/* Absolute Edge Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full border border-primary/20 text-primary bg-background/50 backdrop-blur-md hover:text-white hover:bg-primary transition-all shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full border border-primary/20 text-primary bg-background/50 backdrop-blur-md hover:text-white hover:bg-primary transition-all shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-foreground) 2px, transparent 2px), linear-gradient(90deg, var(--color-foreground) 2px, transparent 2px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-12 sm:px-16 md:px-20 lg:px-24 w-full py-6 my-auto">

        <div className="grid lg:grid-cols-2 gap-12 justify-center lg:justify-start items-center lg:items-start">

          {/* Content Side */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            key={`content-${currentIndex}`}
            className="flex flex-col items-start"
          >
            {/* Animated Badge */}
            <motion.div
              variants={itemVars}
              className="group flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-foreground text-sm mb-6 hover:border-primary/50 transition-colors cursor-default mt-2"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium tracking-wide uppercase text-[10px] md:text-xs">
                {currentItem.category} • Solution
              </span>
            </motion.div>

            {/* Separately Animated Heading */}
            <motion.h1
              variants={itemVars}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.25rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold text-foreground tracking-tight leading-[1.15] mb-6 text-balance line-clamp-2"
              title={currentItem.name}
            >
              {currentItem.name.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-primary" : "text-foreground"}>
                  {word}{' '}
                </span>
              ))}
            </motion.h1>

            {/* Separately Animated Description */}
            <motion.p
              variants={itemVars}
              className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg mb-6"
            >
              {currentItem.shortDescription}
            </motion.p>

            {/* CTA Section */}
            <motion.div variants={itemVars} className="w-full max-w-md">
              <form className="relative group flex flex-col sm:flex-row items-stretch sm:items-center p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm focus-within:border-primary/50 transition-all shadow-2xl gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Your work email..."
                  className="flex-1 bg-transparent border border-white/10 sm:border-none rounded-sm sm:rounded-none text-white px-4 py-3 focus:ring-1 sm:focus:ring-0 focus:ring-primary placeholder:text-gray-500"
                />
                <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-bold flex justify-center items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20 sm:ml-2">
                  Join <ArrowRight size={18} />
                </button>
              </form>
              <p className="mt-4 text-xs text-gray-500 flex items-center gap-1">
                <Sparkles size={12} className="text-primary" />
                Start your Journey with <b>TechnoSpyre</b>
              </p>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 40, rotateY: 15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -40, rotateY: -15 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative rounded-sm border border-white/20 overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
                <img
                  src={currentItem.softwareImages[0]}
                  alt={currentItem.name}
                  className="w-full aspect-[4/3] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
              </motion.div>
            </AnimatePresence>

            {/* Glassmorphism Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/30 blur-[60px] rounded-full animate-pulse pointer-events-none -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none -z-10" />
          </div>

        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background:
            'linear-gradient(to top, var(--color-background) 0%, transparent 100%)',
        }}
      />
    </section>
  );
};