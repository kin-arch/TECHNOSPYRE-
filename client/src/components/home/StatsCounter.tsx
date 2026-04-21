import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Package, Globe, Clock, Shield, TrendingUp } from 'lucide-react';

const stats = [
  { icon: <Users size={22} />, value: 500, suffix: '+', label: 'Happy Clients' },
  { icon: <Package size={22} />, value: 18, suffix: '', label: 'Products Built' },
  { icon: <Clock size={22} />, value: 99.9, suffix: '%', label: 'System Uptime', decimals: 1 },
  { icon: <Globe size={22} />, value: 6, suffix: '+', label: 'Countries Served' },
  { icon: <Shield size={22} />, value: 24, suffix: '/7', label: 'Support Available' },
  { icon: <TrendingUp size={22} />, value: 12, suffix: 'M+', label: 'Records Processed' },
];

const AnimatedNumber: React.FC<{ target: number; suffix: string; decimals?: number; active: boolean }> = ({ target, suffix, decimals = 0, active }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target]);

  return <>{decimals > 0 ? current.toFixed(decimals) : Math.floor(current)}{suffix}</>;
};

export const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(56,189,248,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(129,140,248,0.3) 0%, transparent 50%)'
      }} />
      {/* Animated line across */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
      />
      <motion.div
        animate={{ x: ['200%', '-100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-60"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400/15 group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-500">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-1">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} decimals={stat.decimals} active={isInView} />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




