import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { DeviceMockupShowcase } from './DeviceMockupShowcase';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const slideVariants: Variants = {
  hidden: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 20 : -20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 280, damping: 32, mass: 1 },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -20 : 20,
    transition: { duration: 0.22 },
  }),
};


export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [typedText, setTypedText] = useState('');
  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Typewriter effect synchronized with slider
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

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
  };

  useEffect(() => {
    const t = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(t);
  }, [currentIndex]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden w-full bg-background min-h-[100vh] border-b border-border/50">
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 w-10 sm:w-11 h-10 sm:h-11 rounded-sm flex items-center justify-center border border-border bg-card text-primary shadow-sm hover:bg-muted transition-colors active:scale-[0.98]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 sm:w-5 h-5 sm:h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 w-10 sm:w-11 h-10 sm:h-11 rounded-sm flex items-center justify-center border border-border bg-card text-primary shadow-sm hover:bg-muted transition-colors active:scale-[0.98]"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 sm:w-5 h-5 sm:h-5" />
      </button>

     

      <div className="container relative z-10 mx-auto px-6 xl:px-20 w-full py-12 lg:py-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center">
          <div className="flex flex-col gap-5 order-2 lg:order-1 text-center items-center justify-center w-full mx-auto">

            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center gap-2"
            >
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase text-primary border border-primary/20 bg-primary/5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-sm bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-sm bg-primary" />
                </span>
                Trusted by 100+ enterprises
              </span>
            </motion.div>

            <div className="w-full flex flex-col items-start justify-center overflow-hidden py-2" style={{ minHeight: 'clamp(240px, 28vh, 340px)' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-5 lg:space-y-7 flex flex-col items-center justify-center w-full"
                >
                  <h1 className="font-sans font-bold leading-[1.1] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[3rem] xl:text-[3.5rem] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] text-balance">
                    <motion.div
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                      }}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {SLIDE_DATA[currentIndex].title.split(' ').map((word, i) => (
                        <motion.span
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                          }}
                          className="inline-block mr-3"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.div>
                    <br />{' '}
                    <span className="inline-block text-[2.5rem] xl:text-[3rem] pb-2 relative text-primary min-w-[2ch]">
                      {typedText}
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.75, ease: 'linear' }}
                        className="inline-block align-middle ml-1"
                        style={{
                          width: '4px',
                          height: '1.1em',
                          background: 'var(--color-primary)',
                          borderRadius: '2px',
                          verticalAlign: 'middle',
                        }}
                      />
                    </span>
                  </h1>

                  <motion.p
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl mx-auto">
                    {SLIDE_DATA[currentIndex].desc}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA & Controls */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-row flex-wrap items-center justify-center gap-4 w-full z-20 relative mt-4"
            >
              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -72 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'backOut' } }
                }}
              >
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="group relative flex items-center justify-between gap-5 sm:min-w-[210px] pl-7 pr-2 py-2 rounded-sm font-bold transition-all duration-300 bg-primary text-primary-foreground shadow-md hover:opacity-95 hover:shadow-lg"
                  >
                    <span>Free Consultation</span>
                    <div className="w-9 h-9 rounded-sm bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight size={17} className="-rotate-45" />
                    </div>
                  </Link>
                </MagneticButton>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -72 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'backOut' } }
                }}
              >
                <MagneticButton>
                  <Link
                    to="/solutions"
                    className="group flex items-center justify-between gap-5 sm:min-w-[210px] pl-7 pr-2 py-2 rounded-sm font-bold transition-all duration-300 border border-border bg-card text-foreground hover:border-primary/40 hover:bg-muted/80"
                  >
                    <span>Our Services</span>
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center group-hover:scale-105 transition-all bg-muted">
                      <ArrowRight size={17} className="-rotate-45" />
                    </div>
                  </Link>
                </MagneticButton>
              </motion.div>

            </motion.div>
          </div>

          {/* Right: Device Mockup Showcase */}
          <motion.div
            style={{ y: imageY, scale: imageScale, minHeight: '520px' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex items-center justify-center w-full max-w-[850px] mx-auto lg:scale-[1.02]"
          >
            <div className="relative z-10 w-full">
              <DeviceMockupShowcase />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

const MagneticButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};



