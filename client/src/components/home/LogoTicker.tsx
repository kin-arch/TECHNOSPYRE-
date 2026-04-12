import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { Globe, Cloud, Brain, Code2, Star } from 'lucide-react';

import logo1 from '/logo1.png';
import logo2 from '/logo2.png';
import logo3 from '/logo3.png';
import logo4 from '/logo4.png';
import logo5 from '/logo5.png';
import logo6 from '/logo6.png';
import logo7 from '/logo7.png';
import logo8 from '/logo8.png';
import logo9 from '/logo9.png';
import logo10 from '/logo10.png';

const logos = [
  { src: logo1, alt: 'logo1' },
  { src: logo2, alt: 'logo2' },
  { src: logo3, alt: 'logo3' },
  { src: logo4, alt: 'logo4' },
  { src: logo5, alt: 'logo5' },
  { src: logo6, alt: 'logo6' },
  { src: logo7, alt: 'logo7' },
  { src: logo8, alt: 'logo8' },
  { src: logo9, alt: 'logo9' },
  { src: logo10, alt: 'logo10' },
];

export const AnimatedCounter: React.FC<{ from: number; to: number; duration?: number; decimals?: number; suffix?: string; className?: string }> = ({ from, to, duration = 2.5, decimals = 0, suffix = "", className }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const node = nodeRef.current;
    if (node && isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = value.toFixed(decimals) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, decimals, suffix, isInView]);

  return <span ref={nodeRef} className={className} />;
};

export const LogoTicker: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="py-8 bg-surface-container-lowest overflow-hidden border-y border-outline-variant relative z-30 shadow-[0_0_50px_rgba(251,146,60,0.08)]">
        <div className="container mx-auto px-8 mb-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-on-surface-variant font-bold text-center opacity-50">Trusted by Industry Leaders</p>
        </div>
        <div className="flex">
          <motion.div
            animate={{ x: '-50%' }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-24 whitespace-nowrap px-12"
          >
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center min-w-[120px]">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
