import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform, MotionValue } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cloud, Star } from 'lucide-react';
import { AnimatedCounter } from './LogoTicker';
const SLIDE_DATA = [
  { text: 'Next-Gen Technology', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200' },
  { text: 'Cloud Infrastructure', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200' },
  { text: 'Intelligent Systems', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' }
];

interface HeroProps {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}

export const Hero: React.FC<HeroProps> = ({ smoothX, smoothY }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax transforms for the hero image
  const imgX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const imgY = useTransform(smoothY, [-1, 1], [-8, 8]);

  // Typewriter effect
  useEffect(() => {
    const currentWord = SLIDE_DATA[wordIndex].text;

    if (!isDeleting && displayText === currentWord) {
      const t = setTimeout(() => setIsDeleting(true), 2400);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex(i => (i + 1) % SLIDE_DATA.length);
      return;
    }

    const delay = isDeleting ? 38 : 76;
    const t = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
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

      <div className="container relative z-10 mx-auto px-6 xl:px-12 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-12 items-center">
          <div className="flex flex-col gap-8 lg:gap-10 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start w-full">

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

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
              className="font-sans font-bold leading-[1.1] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem]"
            >
              Empowering Enterprise With<br />{' '}
              <span
                className="inline-block text-[2.5rem] xl:text-[3rem]"
                style={{
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  minWidth: '2ch'
                }}
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.75, ease: 'linear' }}
                  className="inline-block align-middle ml-1"
                  style={{
                    width: '3px',
                    height: '0.9em',
                    background: 'var(--color-primary) ',
                    borderRadius: '2px',
                    verticalAlign: 'middle',
                  }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light max-w-xl mx-auto lg:mx-0"
            >
              We engineer, scale, and manage resilient technology ecosystems that
              empower modern businesses to operate securely and efficiently.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'backOut' }}
              className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
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

            {/* Fade In Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="pt-2 lg:pt-6 mb-10 grid grid-cols-3 items-center lg:items-start justify-center lg:justify-start gap-8 md:gap-12 xl:gap-16 w-full"
            >
              {/* Avatars & Rating */}
              <div className="flex flex-col items-center lg:items-start gap-3">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80" alt="User 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="User 3" />
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold z-10 shadow-lg">+</div>
                </div>
                <div className="flex items-center gap-2">
                  <AnimatedCounter from={0} to={5} decimals={1} duration={2} className="font-bold text-foreground text-lg" />
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="fill-primary" />)}
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-xs text-surface uppercase tracking-widest max-w-[120px] leading-tight mx-auto lg:mx-0">Businesses Served</p>
                <AnimatedCounter from={0} to={500} suffix="+" duration={2.5} className="block text-4xl font-sans font-medium text-primary tracking-tight" />
              </div>
              <div className="space-y-1 text-center lg:text-left">
                <p className="text-xs text-surface uppercase tracking-widest max-w-[120px] leading-tight mx-auto lg:mx-0">System Uptime</p>
                <AnimatedCounter from={0} to={99.9} decimals={1} suffix="%" duration={2.5} className="block text-4xl font-sans font-medium text-primary tracking-tight" />
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
              className="relative z-10 h-full w-full max-w-[500px] aspect-[3/4] rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 mb-10"
            >
              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={wordIndex}
                    initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    src={SLIDE_DATA[wordIndex].img}
                    alt="TechnoSpyre — Enterprise Technology Solutions"
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