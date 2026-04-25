import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const partnerLogos = [
  '/partners/50ba9f98aaf8f8ded4d576a6969668f0.jpg',
  '/partners/AREAA Construction North Pvt. Ltd..jpg',
  '/partners/ASL_LOGO.png',
  '/partners/BANU MUKHTAR CONTRACTING (PVT) LTD.jpg',
  '/partners/BANU MUKHTAR.jpg',
  '/partners/COLLEGE_LOGO.jpg',
  '/partners/Monogram - PNG - Copy.png',
  '/partners/NEW CITY.JPG',
  '/partners/PGCL-LOGO-BLACK1.png',
  '/partners/Peshawar Excellence.jpg',
  '/partners/Yomifood - Copy.jpg',
  '/partners/bahria-town-logo-D1A3F8C43C-seeklogo.com.png',
  '/partners/base college.jpg',
  '/partners/carousel_2.png',
  '/partners/doc-img-3.jpg',
  '/partners/gmis.png',
  '/partners/image1.jpeg',
  '/partners/izzat ali sha.png',
  '/partners/jmc logo.png',
  '/partners/logo JPG.jpg',
  '/partners/logo.png',
  '/partners/logo0.png',
  '/partners/logonew.png',
  '/partners/park view city.png',
  '/partners/rehmat.jpg',
  '/partners/rsz_ajk-logo-symbol-57.png',
  '/partners/s flogo.png',
  '/partners/sangel.png',
  '/partners/shenghui.png',
  '/partners/tomorroland.png',
  '/partners/valley.png',
  '/partners/welcome.png',
];

export const PARTNER_LOGO_COUNT = partnerLogos.length;

// Properly handle paths with spaces and special characters
const logos = partnerLogos.map(src => {
  const filename = src.split('/').pop() || '';
  return {
    src: `/partners/${encodeURIComponent(filename)}`,
    alt: filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') || 'partner logo'
  };
});

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
  const totalLogos = logos.length;
  // Use 3 copies for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  return (
    <div className="w-full flex flex-col items-center py-12 md:py-16">
      <div className="container mx-auto px-8 mb-8 md:mb-10 text-center">
        <h2 className="text-3xl md:text-3xl uppercase tracking-[0.35em] font-bold mb-3 text-foregorund">
          Trusted by industry <span className='text-primary'>leaders</span>
        </h2>
        <p className="text-lg sm:text-xl font-medium text-muted-foreground max-w-2xl mx-auto text-pretty">
          Join Us Be Part of Our Growing Network of Partners.
        </p>
      </div>

      <div className="w-full overflow-hidden relative py-5 border-y border-border/50 bg-muted/25">
        <motion.div
          animate={{ x: [0, -100 / 3 + '%'] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="flex items-center gap-6 md:gap-7 whitespace-nowrap will-change-transform"
          style={{ width: 'fit-content' }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`logo-${idx}`}
              className="flex shrink-0 items-center justify-center px-4 py-4 bg-card border border-border rounded-sm shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 w-[168px] h-[88px] md:w-[200px] md:h-[100px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};



