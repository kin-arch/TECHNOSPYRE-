import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { LogoConnect } from './LogoConnect';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-20 overflow-hidden px-8 text-center">
      <div className="absolute inset-0 z-0 bg-background">
        <LogoConnect className="z-0" />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-background/85 via-background/70 to-background"
          aria-hidden
        />
      </div>

      <div className="container mx-auto relative z-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-4xl mx-auto">
          <span className="font-label text-secondary text-xs font-bold tracking-[0.4em] uppercase mb-6 block flex items-center justify-center gap-2">
            <Globe size={12} /> Global Connectivity
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tight text-on-surface mb-8">
            Architecting <span className="text-primary italic">Connections</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed font-light">
            The next chapter of your digital evolution starts with a conversation. Reach out to our engineering hubs or connect with our academy leads.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
