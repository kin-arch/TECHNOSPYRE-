import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { DeviceMockupShowcase } from './DeviceMockupShowcase'; // Keep this import accurate to your structure

const SLIDE_DATA = [
  {
    title: 'Empowering Enterprise With',
    highlight: 'Next-Gen Technology',
    desc: 'We engineer, scale, and manage resilient technology ecosystems that empower modern businesses to operate securely and efficiently.',
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Architecting the Future of',
    highlight: 'Cloud Infrastructure',
    desc: 'Seamlessly migrate, optimize, and secure your enterprise operations with our state-of-the-art cloud management solutions.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Driving Innovation Through',
    highlight: 'Intelligent Systems',
    desc: 'Harness the power of AI-driven analytics, automation, and intelligent pipelines to unlock new business dimensions today.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let len = 0;
    const highlight = SLIDE_DATA[currentIndex].highlight;
    const t = setInterval(() => {
      if (len < highlight.length) {
        len++;
        setTypedText(highlight.substring(0, len));
      } else {
        clearInterval(t);
      }
    }, 55);
    return () => clearInterval(t);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
  }, []);

  useEffect(() => {
    const t = setInterval(handleNext, 3500);
    return () => clearInterval(t);
  }, [handleNext]);

  const slideVariants: Variants = {
    hidden: (dir: number) => ({ opacity: 0, x: dir > 0 ? 20 : -20 }),
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 280, damping: 32, mass: 1 } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -20 : 20, transition: { duration: 0.22 } }),
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden w-full bg-background border-b border-border/50">
      
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-sm flex items-center justify-center border border-border bg-card/50 text-primary shadow-sm active:scale-[0.98] hidden sm:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-sm flex items-center justify-center border border-border bg-card/50 text-primary shadow-sm active:scale-[0.98] hidden sm:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center justify-center h-full">
          
          {/* Left: Text Content */}
          <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1 text-center lg:text-start items-center lg:items-start justify-center w-full mx-auto z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex"
            >
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-sm bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-sm bg-primary" />
                </span>
                Trusted by 100+ enterprises
              </span>
            </motion.div>

            <div className="w-full flex flex-col items-center lg:items-start justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center lg:items-start w-full absolute lg:relative"
                >
                  <h1 className="font-sans font-bold leading-tight tracking-tight text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-balance">
                    <span className="block">{SLIDE_DATA[currentIndex].title}</span>
                    <span className="block text-primary pt-1 min-h-[1.2em]">{typedText}</span>
                  </h1>
                  <motion.p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light max-w-lg mt-3">
                    {SLIDE_DATA[currentIndex].desc}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-row flex-wrap items-center justify-start lg:items-start gap-3 sm:gap-4 w-full mt-2"
            >
              <Link to="/contact" className="group flex items-center justify-center gap-2 sm:min-w-[180px] px-8 py-3 rounded-sm font-bold transition-all duration-200 bg-primary hover:bg-foreground text-primary-foreground hover:scale-105">
                <span className="text-sm sm:text-base">Free Consultation</span>
                <ArrowRight size={16} className="rotate-[-45deg] group-hover:rotate-0 transition-all duration-200" />
              </Link>
              <Link to="/products" className="group flex items-center justify-center gap-2 sm:min-w-[180px] px-8 py-3 rounded-sm font-bold transition-all duration-200 border border-border bg-card text-foreground hover:bg-primary/10 hover:scale-105">
                <span className="text-sm sm:text-base">Our Services</span>
                <ArrowRight size={16} className="rotate-[-45deg] group-hover:rotate-0 transition-all duration-200" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative order-1 lg:order-2 flex items-center justify-center w-full mx-auto h-full min-h-[300px] lg:min-h-[500px]"
          >
            <DeviceMockupShowcase />
          </motion.div>

        </div>
      </div>

      {/* Mobile dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex sm:hidden gap-2 z-50">
        {SLIDE_DATA.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
          />
        ))}
      </div>
    </section>
  );
};