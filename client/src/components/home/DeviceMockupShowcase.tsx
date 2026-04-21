import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/** Branded mockup art (local assets in /public/mockups) */
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
  <div className="flex flex-col items-center w-full select-none">
    <div
      className="relative w-full max-w-[680px] rounded-sm-t-xl border border-zinc-700 border-b-zinc-600 bg-zinc-900 pt-2.5 px-2.5 pb-1.5 shadow-xl"
      style={{ boxShadow: '0 -2px 0 rgba(255,255,255,0.04) inset' }}
    >
      <div
        className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-sm bg-zinc-800 border border-zinc-600 pointer-events-none"
        aria-hidden
      />
      <div className="rounded-sm overflow-hidden aspect-[18/10] border border-black">
        <ScreenImage
          src={SCREEN_IMAGES.laptop}
          alt="Enterprise dashboard and analytics on a laptop"
          className="block w-full h-full object-cover object-center"
        />
      </div>
    </div>
    <div className="w-full max-w-[680px] h-1 bg-zinc-700 shadow-md" />
    <div className="w-full max-w-[680px] rounded-b-sm border border-t-0 border-zinc-700 bg-zinc-900 px-3.5 pt-2.5 pb-2 shadow-2xl">
      {[14, 12, 12, 11].map((keys, row) => (
        <div key={row} className="flex gap-0.5 mb-0.5 justify-center">
          {Array.from({ length: keys }).map((_, k) => (
            <div
              key={k}
              className="flex-1 h-2.5 rounded-sm bg-white/[0.06] border border-white/[0.04]"
              style={{
                maxWidth:
                  row === 0 && k === 0 ? '28px' : row === 3 ? (k === 0 || k === keys - 1 ? '40px' : '12px') : '12px',
              }}
            />
          ))}
        </div>
      ))}
      <div className="flex justify-center mt-1.5">
        <div className="w-[28%] h-5 rounded-sm bg-white/[0.04] border border-white/[0.06]" />
      </div>
    </div>
    <div className="w-3/4 h-1.5 mt-1 bg-black/40 blur-md rounded-sm" aria-hidden />
  </div>
);

const MobileMockup: React.FC = () => (
  <div className="flex justify-center items-center w-full px-[18%] sm:px-[22%] relative">
    <div className="w-full rounded-sm-[38px] border-[3px] border-zinc-700 bg-zinc-900 p-2.5 shadow-2xl relative">
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 w-[32%] h-[22px] bg-black rounded-sm z-10"
        aria-hidden
      />
      <div className="rounded-sm-[28px] overflow-hidden aspect-[390/844] border border-black relative bg-black">
        <ScreenImage
          src={SCREEN_IMAGES.mobile}
          alt="Mobile app experience"
          className="block w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex justify-center pt-1.5">
        <div className="w-[32%] h-1 rounded-sm bg-white/25" aria-hidden />
      </div>
    </div>
  </div>
);

const TabletMockup: React.FC = () => (
  <div className="flex justify-center items-center w-full px-[8%] sm:px-[12%]">
    <div className="w-full rounded-sm border-4 border-zinc-700 bg-zinc-900 p-2.5 shadow-2xl relative">
      <div
        className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-sm bg-black border border-zinc-700 z-10"
        aria-hidden
      />
      <div className="rounded-sm overflow-hidden aspect-[1024/1366] border border-black relative bg-black">
        <ScreenImage
          src={SCREEN_IMAGES.tablet}
          alt="Tablet workspace and reporting"
          className="block w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex justify-center pt-2">
        <div className="w-[22%] h-1 rounded-sm bg-white/20" aria-hidden />
      </div>
    </div>
  </div>
);

const COMPONENTS = [LaptopMockup, MobileMockup, TabletMockup];

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28, scale: 0.98 }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -28 : 28,
    scale: 0.98,
    transition: { duration: 0.3 },
  }),
};

export const DeviceMockupShowcase: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = useCallback(
    (idx: number) => {
      setDir(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    setDir(1);
    setCurrent((n) => (n + 1) % DEVICES.length);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(next, 5500);
    return () => window.clearTimeout(id);
  }, [current, next]);

  const Device = COMPONENTS[current];

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none">
      <div
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ minHeight: '400px' }}
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex justify-center px-1"
          >
            <InteractiveTiltContainer>
              <Device />
            </InteractiveTiltContainer>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.p
        key={`sub-${current}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-xs font-medium tracking-wide text-muted-foreground"
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
  );
};

const InteractiveTiltContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotate({ x: (y - centerY) / 28, y: (centerX - x) / 28 });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 22, mass: 0.45 }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </motion.div>
  );
};




