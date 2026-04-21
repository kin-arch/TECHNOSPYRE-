import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)',
          boxShadow: '0 0 15px rgba(56,189,248,0.5), 0 0 5px rgba(129,140,248,0.3)',
        }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
};
