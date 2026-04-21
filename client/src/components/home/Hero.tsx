import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { DeviceMockupShowcase } from './DeviceMockupShowcase';

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
    x: dir > 0 ? 30 : -30,
    filter: 'blur(8px)',
  }),
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 300, damping: 30, mass: 1 }
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -30 : 30,
    filter: 'blur(8px)',
    transition: { duration: 0.2 }
  })
};


export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [typedText, setTypedText] = useState('');

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
    }, 3000);
    return () => clearInterval(t);
  }, [currentIndex]);

  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '100vh', background: 'hsl(var(--background))' }}>
      {/* Slide prev/next nav arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer w-10 sm:w-12 h-10 sm:h-12 rounded-sm flex items-center justify-center hover:scale-110 transition-all active:scale-95 backdrop-blur-md"
        aria-label="Previous Slide"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
          borderWidth: '1px',
          color: 'var(--color-primary)',
          background: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
          boxShadow: '0 4px 20px color-mix(in srgb, var(--color-primary) 15%, transparent)'
        }}
      >
        <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer w-10 sm:w-12 h-10 sm:h-12 rounded-sm flex items-center justify-center hover:scale-110 transition-all active:scale-95 backdrop-blur-md"
        aria-label="Next Slide"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
          borderWidth: '1px',
          color: 'var(--color-primary)',
          background: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
          boxShadow: '0 4px 20px color-mix(in srgb, var(--color-primary) 15%, transparent)'
        }}
      >
        <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
      </button>

      {/* Grid lines background — matches reference design */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(color-mix(in srgb, var(--color-primary) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 8%, transparent) 1px, transparent 1px)',
          backgroundSize: '55px 55px',
        }}
      />

      {/* Subtle top-right radial highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 85% 40%, color-mix(in srgb, var(--color-primary) 8%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 xl:px-20 pt-32 pb-20 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 order-2 lg:order-1 text-left items-start w-full">

            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <span
                className="flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase text-primary border"
                style={{
                  background: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                  borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-sm bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-sm bg-primary" />
                </span>
                Trusted by 100+ Enterprises
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
                  className="space-y-5 lg:space-y-7 flex flex-col items-start w-full"
                >
                  <h1 className="font-sans font-bold leading-[1.1] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[3rem] xl:text-[3.5rem] min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
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
                    <span
                      className="inline-block text-[2.5rem] xl:text-[3rem] pb-2 relative"
                      style={{
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        minWidth: '2ch'
                      }}
                    >
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
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl">
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
              className="flex flex-col sm:flex-row flex-wrap items-start justify-start gap-4 w-full z-20 relative"
            >
              {/* Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -72 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'backOut' } }
                }}
              >
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-between gap-5 sm:min-w-[210px] pl-7 pr-2 py-2 rounded-sm font-bold transition-all duration-300"
                  style={{
                    background: 'var(--gradient-primary)',
                    color: '#fff',
                    boxShadow: '0 4px 24px color-mix(in srgb, var(--color-primary) 35%, transparent)',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.boxShadow = '0 6px 32px color-mix(in srgb, var(--color-primary) 55%, transparent)')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.boxShadow = '0 4px 24px color-mix(in srgb, var(--color-primary) 35%, transparent)')
                  }
                >
                  <span>Free Consultation</span>
                  <div className="w-9 h-9 rounded-sm bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight size={17} className="-rotate-45" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -72 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'backOut' } }
                }}
              >
                <Link
                  to="/solutions"
                  className="group flex items-center justify-between gap-5 sm:min-w-[210px] pl-7 pr-2 py-2 rounded-sm font-bold transition-all duration-300 border"
                  style={{
                    color: 'var(--color-foreground)',
                    borderColor: 'color-mix(in srgb, var(--color-foreground) 15%, transparent)',
                    background: 'color-mix(in srgb, var(--color-foreground) 4%, transparent)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--color-primary) 15%, transparent)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-foreground) 15%, transparent)';
                    e.currentTarget.style.background = 'color-mix(in srgb, var(--color-foreground) 4%, transparent)';
                  }}
                >
                  <span>Our Services</span>
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center group-hover:scale-105 transition-all"
                    style={{ background: 'color-mix(in srgb, var(--color-foreground) 8%, transparent)' }}
                  >
                    <ArrowRight size={17} className="-rotate-45" />
                  </div>
                </Link>
              </motion.div>

            </motion.div>
          </div>

          {/* Right: Device Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex items-center justify-center w-full"
            style={{ minHeight: '480px' }}
          >
            {/* Ambient glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] rounded-sm blur-[90px] opacity-20 pointer-events-none z-0"
              style={{ background: 'radial-gradient(ellipse, hsl(var(--primary)) 0%, hsl(var(--accent)) 60%, transparent 100%)' }}
            />
            <div className="relative z-10 w-full">
              <DeviceMockupShowcase />
            </div>
          </motion.div>

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