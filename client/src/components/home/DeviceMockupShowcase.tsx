import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA & ASSETS ---
const SCREEN_IMAGES = {
  laptop: '/mockups/mockup-laptop.png',
  mobile: '/mockups/mockup-mobile.png',
  tablet: '/mockups/mockup-tablet.png',
} as const;

const DEVICES = [
  { id: 'laptop' as const, label: 'Laptop', subtitle: 'Enterprise analytics & operations' },
  { id: 'mobile' as const, label: 'Mobile', subtitle: 'Products on every device' },
  { id: 'tablet' as const, label: 'Tablet', subtitle: 'Field & floor teams' },
];

// --- MOCKUP COMPONENTS ---
function ScreenImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

const LaptopMockup: React.FC = () => (
  <div className="flex flex-col items-center w-full max-w-[450px] lg:max-w-[600px] select-none">
    <div
      className="relative w-full rounded-t-xl lg:rounded-t-2xl border border-zinc-700 border-b-zinc-600 bg-zinc-900 pt-2 lg:pt-2.5 px-2 lg:px-2.5 pb-1 lg:pb-1.5 shadow-xl"
      style={{ boxShadow: '0 -2px 0 rgba(255,255,255,0.04) inset' }}
    >
      <div className="absolute top-1 lg:top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-2xl bg-zinc-800 border border-zinc-600 pointer-events-none" aria-hidden />
      <div className="rounded-lg lg:rounded-xl overflow-hidden aspect-[18/10] border border-black">
        <ScreenImage src={SCREEN_IMAGES.laptop} alt="Laptop" className="block w-full h-full object-cover object-center" />
      </div>
    </div>
    <div className="w-full h-1 bg-zinc-700 shadow-md" />
    <div className="w-full rounded-b-xl lg:rounded-b-2xl border border-t-0 border-zinc-700 bg-zinc-900 px-3 lg:px-3.5 pt-2 pb-1 lg:pb-2 shadow-2xl">
      <div className="flex justify-center mt-1 lg:mt-1.5 pb-1">
        <div className="w-[28%] h-3 lg:h-4 rounded-sm bg-white/[0.04] border border-white/[0.06]" />
      </div>
    </div>
    <div className="w-3/4 h-1.5 mt-1 bg-black/40 blur-md rounded-sm" aria-hidden />
  </div>
);

const MobileMockup: React.FC = () => (
  <div className="flex justify-center items-center w-[160px] lg:w-[220px] relative">
    <div className="w-full rounded-[24px] lg:rounded-[38px] border-[3px] border-zinc-700 bg-zinc-900 p-1.5 lg:p-2.5 shadow-2xl relative">
      <div className="absolute top-2 lg:top-3 left-1/2 -translate-x-1/2 w-[32%] h-[14px] lg:h-[22px] bg-black rounded-b-md lg:rounded-b-xl z-10" aria-hidden />
      <div className="rounded-[18px] lg:rounded-[28px] overflow-hidden aspect-[390/844] border border-black relative bg-black">
        <ScreenImage src={SCREEN_IMAGES.mobile} alt="Mobile" className="block w-full h-full object-cover object-top" />
      </div>
      <div className="flex justify-center pt-1 lg:pt-1.5">
        <div className="w-[32%] h-1 rounded-sm bg-white/25" aria-hidden />
      </div>
    </div>
  </div>
);

const TabletMockup: React.FC = () => (
  <div className="flex justify-center items-center w-[240px] lg:w-[320px]">
    <div className="w-full rounded-xl lg:rounded-2xl border-[3px] lg:border-4 border-zinc-700 bg-zinc-900 p-1.5 lg:p-2.5 shadow-2xl relative">
      <div className="absolute top-1.5 lg:top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-black border border-zinc-700 z-10" aria-hidden />
      <div className="rounded-lg lg:rounded-xl overflow-hidden aspect-[1024/1366] border border-black relative bg-black">
        <ScreenImage src={SCREEN_IMAGES.tablet} alt="Tablet" className="block w-full h-full object-cover object-center" />
      </div>
    </div>
  </div>
);

const COMPONENTS = [LaptopMockup, MobileMockup, TabletMockup];

// --- MAIN EXPORT ---
export const DeviceMockupShowcase: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDir(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDir(1);
    setCurrent((n) => (n + 1) % DEVICES.length);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(next, 5500);
    return () => window.clearTimeout(id);
  }, [current, next]);

  const Device = COMPONENTS[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -28 : 28, transition: { duration: 0.3 } }),
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none h-full justify-center">
      {/* FIXED HEIGHT CONTAINER */}
      <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex justify-center items-center px-2"
          >
            {/* Direct render, no more InteractiveTiltContainer (floating) */}
            <Device />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center gap-2 mt-2">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="text-xs font-medium tracking-wide text-muted-foreground h-4"
        >
          {DEVICES[current].subtitle}
        </motion.p>
        <div className="flex items-center gap-2">
          {DEVICES.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${d.label}`}
              className="rounded-sm transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              style={{
                width: i === current ? '22px' : '7px',
                height: '7px',
                background: i === current ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.35)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};