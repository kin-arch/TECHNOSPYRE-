import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, MotionValue, Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cloud, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedCounter } from './LogoTicker';

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

interface HeroProps {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}

export const Hero: React.FC<HeroProps> = ({ smoothX, smoothY }) => {
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

  // Parallax transforms for the hero image
  const imgX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const imgY = useTransform(smoothY, [-1, 1], [-8, 8]);

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
    <section className="relative flex items-center overflow-hidden bg-background">
      {/* Absolute Left/Right Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 xl:left-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all active:scale-95 backdrop-blur-md"
        aria-label="Previous Slide"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
          borderWidth: '1px',
          color: 'var(--color-primary)',
          background: 'color-mix(in srgb, var(--color-background) 80%, transparent)',
          boxShadow: '0 4px 20px color-mix(in srgb, var(--color-primary) 15%, transparent)'
        }}
      >
        <ChevronLeft className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 xl:right-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all active:scale-95 backdrop-blur-md"
        aria-label="Next Slide"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-primary) 30%, transparent)',
          borderWidth: '1px',
          color: 'var(--color-primary)',
          background: 'color-mix(in srgb, var(--color-background) 80%, transparent)',
          boxShadow: '0 4px 20px color-mix(in srgb, var(--color-primary) 15%, transparent)'
        }}
      >
        <ChevronRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7" />
      </button>

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 65% 50%, var(--color-primary) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 10% 20%, var(--color-accent) 0%, transparent 60%)',
          opacity: 0.1,
        }}
      />

      {/* Animated grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-foreground) 2px, transparent 2px), linear-gradient(90deg, var(--color-foreground) 2px, transparent 2px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 mx-auto px-6 xl:px-26 pt-28 pb-16 lg:pt-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 items-start">
          <div className="flex flex-col gap-5 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start w-full">

            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 self-center lg:self-start"
            >
              <span
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-primary border"
                style={{
                  background: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                  borderColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Trusted by 100+ Enterprises
              </span>
            </motion.div>

            <div className="w-full flex flex-col items-center lg:items-start justify-center overflow-hidden py-2" style={{ minHeight: 'clamp(280px, 30vh, 360px)' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start w-full"
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
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
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
              className="flex flex-col xl:flex-row flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 w-full z-20 relative"
            >
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -72 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'backOut' } }
                  }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/contact"
                    className="group relative flex items-center justify-between gap-5 w-full sm:w-auto sm:min-w-[220px] pl-7 pr-2 py-2 rounded-full font-bold transition-all duration-300"
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
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight size={17} className="-rotate-45" />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -72 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'backOut' } }
                  }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="/solutions"
                    className="group flex items-center justify-between gap-5 w-full sm:w-auto sm:min-w-[220px] pl-7 pr-2 py-2 rounded-full font-bold transition-all duration-300 border"
                    style={{
                      color: 'var(--color-foreground)',
                      borderColor: 'color-mix(in srgb, var(--color-foreground) 15%, transparent)',
                      background: 'color-mix(in srgb, var(--color-foreground) 4%, transparent)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.background = 'color-mix(in srgb, var(--color-primary) 20%, transparent)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-foreground) 15%, transparent)';
                      e.currentTarget.style.background = 'color-mix(in srgb, var(--color-foreground) 4%, transparent)';
                    }}
                  >
                    <span>Our Services</span>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-105 transition-all"
                      style={{ background: 'color-mix(in srgb, var(--color-foreground) 8%, transparent)' }}
                    >
                      <ArrowRight size={17} className="-rotate-45" />
                    </div>
                  </Link>
                </motion.div>
              </div>

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end lg:pr-8"
          >
            {/* Glow blob behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full blur-[80px] opacity-40 z-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 80%)',
              }}
            />

            {/* Image frame */}
            <motion.div
              style={{
                x: imgX,
                y: imgY,
                background: 'var(--color-surface)',
                border: '1px solid color-mix(in srgb, var(--color-primary-foreground) 10%, transparent)',
                boxShadow: '0 25px 50px -12px rgb(0, 0, 0, 0.5), 0 0 60px color-mix(in srgb, var(--color-primary) 15%, transparent)',
              }}
              className="relative z-10 h-[85vh] w-full max-w-[400px] aspect-[3/4] rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 my-auto"
            >
              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                <AnimatePresence mode="popLayout" custom={direction}>
                  <motion.img
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    src={SLIDE_DATA[currentIndex].img}
                    alt={SLIDE_DATA[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Subtle overlay tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, transparent 20%)',
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 sm:top-10 -left-6 sm:-left-12 lg:-left-16 z-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2, ease: 'backOut' }}
                  className="flex items-center gap-3 md:gap-4 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl backdrop-blur-xl"
                  style={{
                    background: 'var(--color-primary)',
                    border: '1px solid color-mix(in srgb, var(--color-primary-foreground) 15%, transparent)',
                    boxShadow: '0 16px 32px color-mix(in srgb, var(--color-primary) 15%, transparent)',
                  }}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'color-mix(in srgb, var(--color-primary-foreground) 20%, transparent)' }}>
                    <Shield size={20} style={{ color: 'var(--color-primary-foreground)' }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight" style={{ color: 'var(--color-primary-foreground)' }}>System Secure</p>
                    <p className="text-xs mt-0.5" style={{ color: 'color-mix(in srgb, var(--color-primary-foreground) 80%, transparent)' }}>Zero threats detected</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 sm:bottom-12 -right-4 sm:-right-10 lg:-right-12 z-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4, ease: 'backOut' }}
                  className="flex items-center gap-3 md:gap-4 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl backdrop-blur-xl shadow-[0_16px_32px_rgba(0,0,0,0.4)]"
                  style={{
                    background: 'color-mix(in srgb, var(--color-background) 85%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--color-foreground) 15%, transparent)',
                  }}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}>
                    <Cloud size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">99.9% Uptime</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Cloud operations</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
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