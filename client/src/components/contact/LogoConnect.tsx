import React, { useId } from 'react';
import { motion } from 'motion/react';

type LogoConnectProps = {
  className?: string;
};

/**
 * Decorative background: brand logo watermark + animated node/lines network.
 */
export const LogoConnect: React.FC<LogoConnectProps> = ({ className = '' }) => {
  const gradId = `lc-${useId().replace(/:/g, '')}`;
  const hub = { x: 600, y: 380 };
  const nodes = [
    { x: 120, y: 140 },
    { x: 1080, y: 120 },
    { x: 1040, y: 620 },
    { x: 140, y: 640 },
    { x: 600, y: 90 },
    { x: 180, y: 400 },
    { x: 1020, y: 400 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 45%, color-mix(in srgb, var(--color-primary) 12%, transparent) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 80% 20%, color-mix(in srgb, var(--color-secondary) 8%, transparent) 0%, transparent 50%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(color-mix(in srgb, var(--color-primary) 14%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 14%, transparent) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <img src="/logo1.png" alt="" className="max-h-[min(78vh,640px)] w-auto max-w-[min(88vw,720px)] object-contain select-none scale-110" draggable={false} />
      </div>

      <svg
        className="absolute inset-0 h-full w-full text-primary"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {nodes.map((n, i) => {
          const d = `M ${hub.x} ${hub.y} L ${n.x} ${n.y}`;
          return (
            <motion.path
              key={`edge-${n.x}-${n.y}`}
              d={d}
              stroke={`url(#${gradId})`}
              strokeWidth={1.25}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.35, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.4, delay: 0.1 + i * 0.06 },
              }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <motion.circle
            key={`node-${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r={4}
            className="fill-primary"
            fillOpacity={0.35}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22, delay: 0.55 + i * 0.07 }}
          />
        ))}

        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r={10}
          className="fill-primary"
          fillOpacity={0.2}
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx={hub.x}
          cy={hub.y}
          r={5}
          className="fill-primary"
          fillOpacity={0.55}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.2 }}
        />
      </svg>
    </div>
  );
};
