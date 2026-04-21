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

const TabletLandscapeMockup: React.FC<{ imageUrl?: string }> = ({ imageUrl }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-[340px] lg:max-w-[440px] select-none">
    <div className="relative w-full flex">
      {/* Left side physical buttons (volume) */}
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 lg:gap-1.5 z-10">
        <div className="w-1 h-5 lg:h-6 rounded-l-sm bg-zinc-700 border border-r-0 border-zinc-600" aria-hidden />
        <div className="w-1 h-8 lg:h-10 rounded-l-sm bg-zinc-700 border border-r-0 border-zinc-600" aria-hidden />
        <div className="w-1 h-5 lg:h-6 rounded-l-sm bg-zinc-700 border border-r-0 border-zinc-600" aria-hidden />
      </div>
      
      {/* Main tablet body - rounded top and bottom */}
      <div className="flex flex-col w-full rounded-xl lg:rounded-2xl border-[4px] lg:border-[5px] border-zinc-800 bg-zinc-900 shadow-lg" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
        {/* Top bezel with camera only */}
        <div className="relative w-full px-2.5 lg:px-3 pt-2 lg:pt-2.5 pb-1">
          <div className="absolute top-2 lg:top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-zinc-950 border border-zinc-700 z-10" aria-hidden />
        </div>
        
        {/* Screen */}
        <div className="w-full bg-zinc-900 shadow-inner relative">
          <div className="overflow-hidden aspect-[4/3] relative bg-black">
            <ScreenImage src={imageUrl || SCREEN_IMAGES.tablet} alt="Tablet Landscape" className="block w-full h-full object-cover object-center" />
          </div>
        </div>
        
        {/* Bottom bezel */}
        <div className="w-full bg-zinc-900 px-2.5 lg:px-3 pt-1 pb-2 lg:pb-2.5" />
      </div>
      
      {/* Right side physical button (power) */}
      <div className="absolute right-0 top-1/3 -translate-x-1/2 z-10">
        <div className="w-1 h-6 lg:h-8 rounded-r-sm bg-zinc-700 border border-l-0 border-zinc-600" aria-hidden />
      </div>
    </div>
    
    {/* Tablet stand/shadow */}
    <div className="w-1/3 h-1 bg-black/30 blur-md rounded-sm mt-1" aria-hidden />
  </div>
);

const COMPONENTS = [LaptopMockup, MobileMockup, TabletMockup];

// --- MAIN EXPORT ---
export const DeviceMockupShowcase: React.FC<{ imageUrl?: string; direction?: number }> = ({ imageUrl, direction = 1 }) => {
  const [current, setCurrent] = useState(0);
  const [internalDir, setInternalDir] = useState(1);

  const goTo = useCallback((idx: number) => {
    setInternalDir(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setInternalDir(1);
    setCurrent((n) => (n + 1) % DEVICES.length);
  }, []);

  useEffect(() => {
    if (imageUrl) return; // Disable timer when showing hero images
    const id = window.setTimeout(next, 5500);
    return () => window.clearTimeout(id);
  }, [current, next, imageUrl]);

  const Device = COMPONENTS[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -28 : 28, transition: { duration: 0.3 } }),
  };

  // Use Hero's direction when showing image, otherwise use internal direction
  const activeDir = imageUrl ? direction : internalDir;

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none h-full justify-center">
      {/* Main Image Display */}
      <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px] overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <AnimatePresence mode="wait" custom={activeDir}>
            <motion.div
              key={imageUrl}
              custom={activeDir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex justify-center items-center"
            >
              <TabletLandscapeMockup imageUrl={imageUrl} />
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence mode="wait" custom={internalDir}>
            <motion.div
              key={current}
              custom={internalDir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex justify-center items-center px-2"
            >
              <Device />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="flex flex-col items-center gap-2 mt-2">
        <motion.p
          key={`sub-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="text-xs font-medium tracking-wide text-muted-foreground h-4"
        >
          {imageUrl ? '' : DEVICES[current].subtitle}
        </motion.p>
        {/* Only show device dots when no image is provided */}
        {!imageUrl && (
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
        )}
      </div>
    </div>
  );
};