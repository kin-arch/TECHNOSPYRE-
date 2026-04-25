import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Star, Zap, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      delay, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  }),
};

const values = [
  { icon: <Lightbulb size={24} />, title: 'Fresh Ideas', desc: 'We don\'t just copy what others do. We think hard about your problem and design real solutions that fit you.', featured: true },
  { icon: <ShieldCheck size={24} />, title: 'Honest Work', desc: 'Clear pricing, clear timelines, no hidden fees. What we promise is what you get.' },
  { icon: <Star size={24} />, title: 'Top Quality', desc: 'Clean code, beautiful design, careful testing every time.' },
  { icon: <Zap size={24} />, title: 'Fast Support', desc: 'When something needs help, we reply quickly and fix it properly.' },
];

export const ValueCards: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-b border-border/50">
      {/* Decorative background element - simplified for performance */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          eyebrow="Principles"
          title={<>The <span className="text-primary italic">Technospyre</span> Way</>}
          description="Four simple values that shape every project we touch and drive us towards excellence."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-50px" }}
              custom={i * 0.1}
              whileHover={{ y: -6 }}
              className={`group p-8 rounded-2xl border transition-all duration-300 cursor-pointer shadow-sm will-change-transform ${
                v.featured
                  ? 'lg:col-span-2 bg-primary/5 border-primary/20 hover:border-primary/40 min-h-[280px] flex flex-col justify-end relative overflow-hidden'
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              {v.featured && (
                <>
                  {/* Reduced blur radius for performance */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[40px] rounded-full translate-x-1/4 -translate-y-1/4 group-hover:bg-primary/20 transition-colors" />
                  <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Lightbulb size={120} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-primary relative z-10">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Featured Principle</span>
                  </div>
                </>
              )}
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform relative z-10">
                {v.icon}
              </div>
              
              <h3 className={`font-headline font-bold mb-4 relative z-10 group-hover:text-primary transition-colors ${v.featured ? 'text-3xl' : 'text-xl'}`}>
                {v.title}
              </h3>
              
              <p className={`text-muted-foreground leading-relaxed relative z-10 opacity-90 ${v.featured ? 'text-base max-w-sm' : 'text-sm'}`}>
                {v.desc}
              </p>
              
              <div className="mt-8 w-10 h-1 bg-primary/20 group-hover:w-20 group-hover:bg-primary transition-all duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};






