import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { DeviceMockupShowcase } from './DeviceMockupShowcase';

const SLIDE_DATA = [
  {
    title: 'Welcome to Technospyre',
    highlight: 'Your Trusted IT Partner    ',
    desc: 'We engineer manage resilient technology ecosystems that empower modern businesses to operate securely and efficiently.',
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200',
    device: 'monitor'
  },
  {
    title: 'Hospital Management System',
    highlight: 'All-in-One Solution         ',
    desc: 'Seamlessly migrate, optimize, and secure your enterprise operations with our state-of-the-art cloud management solutions.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    device: 'mobile'
  },
  {
    title: 'Start Learning with Us Today',
    highlight: 'Build Your IT Future',
    desc: 'Harness the power of AI-driven analytics, automation, and intelligent pipelines to unlock new business dimensions today.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    device: 'laptop'
  }
];

const Typewriter = ({ text }: { text: string }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let len = 0;
    const t = setInterval(() => {
      if (len < text.length) {
        len++;
        setTypedText(text.substring(0, len));
      } else {
        clearInterval(t);
      }
    }, 55);
    return () => clearInterval(t);
  }, [text]);

  return <>{typedText}</>;
};

const slideVariants: Variants = {
  hidden: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 280, damping: 32, mass: 1 } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, transition: { duration: 0.22 } }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
  exit: { opacity: 0, x: -80, transition: { duration: 0.3 } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

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

  return (
    <section className="relative flex items-center justify-center overflow-hidden w-full bg-background border-b border-border/50 py-3 md:py-4">

      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-sm flex items-center justify-center border border-border bg-card/50 text-primary shadow-sm active:scale-[0.98] hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-sm flex items-center justify-center border border-border bg-card/50 text-primary shadow-sm active:scale-[0.98] hidden md:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex flex-col items-center justify-center">

        <div className="container relative z-10 mx-auto px-4 sm:px-20 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center h-full">

            {/* Left: Text Content */}
            <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1 text-center lg:text-start items-center lg:items-start justify-center w-full mx-auto z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
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
                    className="flex flex-col items-center lg:items-start w-full"
                  >
                    <h1 className="font-sans font-bold leading-[1.1] tracking-tight text-foreground text-3xl sm:text-4xl md:text-4xl lg:text-[2.3rem] xl:text-[3rem] 2xl:text-[3.7rem] text-balance">
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="block"
                      >
                        {SLIDE_DATA[currentIndex].title}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="block text-secondary pt-2 min-h-[1.2em] drop-shadow-sm"
                      >
                        <Typewriter text={SLIDE_DATA[currentIndex].highlight} />
                      </motion.span>
                    </h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light max-w-lg mt-2"
                    >
                      {SLIDE_DATA[currentIndex].desc}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col items-center justify-center sm:flex-row md:justify-start lg:justify-start lg:items-start gap-3 sm:gap-4 w-full mt-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  className="w-full sm:w-auto"
                >
                  <Link to="/contact" className="group flex items-center justify-center gap-2 min-w-full sm:min-w-fit px-4 md:px-8 py-3 rounded-sm font-bold transition-all duration-200 bg-primary hover:bg-foreground text-primary-foreground hover:scale-105">
                    <span className="text-sm sm:text-base">Free Consultation</span>
                    <ArrowRight size={16} className="rotate-[-45deg] group-hover:rotate-0 transition-all duration-200" />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                  className="w-full sm:w-auto"
                >
                  <Link to="/products" className="group flex items-center justify-center gap-2 min-w-full sm:min-w-fit px-4 md:px-8 py-3 rounded-sm font-bold transition-all duration-200 border border-border bg-card text-foreground hover:bg-primary/10 hover:scale-105">
                    <span className="text-sm sm:text-base">Our Services</span>
                    <ArrowRight size={16} className="rotate-[-45deg] group-hover:rotate-0 transition-all duration-200" />
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative order-1 lg:order-2 flex items-center justify-center w-full mx-auto h-full min-h-[240px] sm:min-h-[280px] lg:min-h-[400px]"
            >
              <DeviceMockupShowcase imageUrl={SLIDE_DATA[currentIndex].img} direction={direction} device={SLIDE_DATA[currentIndex].device as 'laptop' | 'mobile' | 'tablet' | 'monitor'} />
            </motion.div>
          </div>
        </div>

        {/* Mobile dot indicators */}
        <div className="flex mt-5 lg:mt-0 gap-2 z-50">
          {SLIDE_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-12 h-2' : 'bg-muted-foreground/30 hover:bg-primary/50 w-6 h-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
