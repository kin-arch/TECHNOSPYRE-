import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye, Target } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const items = [
  {
    icon: <Rocket size={20} />,
    label: 'Our mission',
    title: 'Make powerful software simple for everyone.',
    desc: 'We help hospitals, shops, schools, and growing businesses use technology without stress. Our software is easy to learn, fast to use, and built around how your team actually works.',
    points: ['Easy for non-tech users', 'Fast onboarding', 'Real local support'],
  },
  {
    icon: <Eye size={20} />,
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
    <section id="mission" className="py-24 md:py-28 bg-muted/30 border-b border-border/50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Purpose"
          title="Mission & vision"
          description="What we optimize for every day and where we're headed as a company."
          align="center"
        />
        <div className="grid lg:grid-cols-[1fr_1.12fr] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative rounded-sm overflow-hidden border border-border bg-card shadow-sm aspect-video"
          >
            <img src={showcaseSrc} alt="Team collaboration" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/90 border-t border-border backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-primary">How we work</span>
              <p className="text-sm text-muted-foreground mt-1">Small teams, clear ownership, shipping in the open.</p>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group p-6 rounded-sm bg-card border border-border shadow-sm hover:border-primary/25 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-sm-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">{item.label}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-2 leading-tight text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="flex flex-wrap gap-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/80 px-3 py-1 rounded-sm border border-border"
                    >
                      <Target size={10} className="text-primary shrink-0" /> {p}
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




