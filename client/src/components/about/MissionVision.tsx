import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, Target, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const items = [
  {
    icon: <Rocket size={22} />,
    label: 'Our mission',
    title: 'Make powerful software simple for everyone.',
    desc: 'We help hospitals, shops, schools, and growing businesses use technology without stress. Our software is easy to learn, fast to use, and built around how your team actually works.',
    points: ['Easy for non-tech users', 'Fast onboarding', 'Real local support'],
  },
  {
    icon: <Eye size={22} />,
    label: 'Our vision',
    title: 'Build a smarter Pakistan, then a smarter world.',
    desc: 'We want to be the first name people think of when they need digital tools and the place where the next generation of developers learns to build them.',
    points: ['World-class quality', 'Local-first thinking', 'Train future talent'],
  },
];

const showcaseSrc =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 md:py-32 bg-muted/20 border-b border-border/50 scroll-mt-28 relative overflow-hidden">
      {/* Optimized background element - simplified for performance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 [mask-image:radial-gradient(circle,white_0%,transparent_70%)] -translate-y-1/2 translate-x-1/3 pointer-events-none" />


      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          eyebrow="Purpose"
          title={<>Mission & <span className="text-primary italic">Vision</span></>}
          description="What we optimize for every day and where we're headed as a company."
          align="center"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-xl aspect-[4/3] group will-change-transform"
          >
            <img 
              src={showcaseSrc} 
              alt="Team collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-background/80 border-t border-border/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary">How we work</span>
              </div>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">Small teams, clear ownership, and shipping high-impact code in the open.</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                className="group p-8 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-300 hover:shadow-md will-change-transform"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{item.label}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 leading-tight text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 opacity-90">{item.desc}</p>
                <ul className="flex flex-wrap gap-3">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted/40 px-4 py-2 rounded-full border border-border transition-colors group-hover:border-primary/10"
                    >
                      <Target size={12} className="text-primary shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};






