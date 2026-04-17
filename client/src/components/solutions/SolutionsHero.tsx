import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getAllProducts } from '../../data/solutions';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SolutionsHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Choose specifically requested products
  const products = getAllProducts();
  const heroProductsIds = ['hospital-erp', 'school-erp', 'hr-erp', 'inventory-erp'];
  const heroItems = products.filter(p => heroProductsIds.includes(p.id));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [heroItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

  if (heroItems.length === 0) return null;

  const currentItem = heroItems[currentIndex];

  return (
    <section className="relative min-h-[100svh] pb-12 lg:py-0 w-full bg-background overflow-hidden flex items-start">
      {/* Background Graphic elements */}
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

      {/* Grid pattern removed for flat design */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-primary/5 pointer-events-none" />

      <div className="container-custom px-6 md:px-12 lg:px-16 mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center pt-10">
        {/* Left Side: Text Details */}
        <div className="flex flex-col z-20 order-2 lg:order-1 pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 inline-flex px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 w-fit text-xs md:text-sm font-medium tracking-wider uppercase backdrop-blur-md"
          >
            Featured Solutions
          </motion.div>

          <div className="relative h-[320px] sm:h-[280px] lg:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 text-primary">
                  {currentItem.icon}
                  <span className="text-lg md:text-xl tracking-widest uppercase font-bold text-primary">{currentItem.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-[3rem] font-bold leading-tight mb-4 md:mb-6">
                  {currentItem.name}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-8">
                  {currentItem.shortDescription}
                </p>

                <Link
                  to={`/solutions/product/${currentItem.id}`}
                  className="w-fit flex items-center gap-2 text-primary hover:text-white transition-colors"
                >
                  <span className="font-semibold uppercase tracking-wider text-sm">Explore specific details</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 md:gap-6 mt-8 w-full">
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
                aria-label="Previous Slide"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
                aria-label="Next Slide"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              {heroItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 md:h-2 rounded-lg transition-all duration-300 ${idx === currentIndex ? 'w-8 md:w-10 bg-primary' : 'w-3 md:w-4 bg-primary/30 hover:bg-primary/60'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Image slider */}
        <div className="relative h-full w-full rounded-lg md:rounded-lg overflow-hidden border border-white/10 shadow-2xl z-10 order-1 lg:order-2 mt-8 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 z-10 hidden lg:block" />
              <img
                src={currentItem.softwareImages[0]}
                alt={`${currentItem.name} preview`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
