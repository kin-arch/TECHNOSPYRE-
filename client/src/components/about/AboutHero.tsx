import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const words = ['Real Software', 'Smarter Systems', 'Better Futures'];

const stats = [
  { value: '12+', label: 'Years building' },
  { value: '200+', label: 'Happy clients' },
  { value: '500+', label: 'Students trained' },
  { value: '4', label: 'Countries' },
];

export const AboutHero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let len = 0;
    const word = words[wordIndex];
    const t = setInterval(() => {
      if (len < word.length) {
        len++;
        setTypedText(word.substring(0, len));
      } else clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, [wordIndex]);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((p) => (p + 1) % words.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden px-6 sm:px-8 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto relative z-10 w-full pt-10 pb-20">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 shrink-0 opacity-45" aria-hidden />
          <span className="font-medium text-foreground">About us</span>
        </nav>

        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-[11px] font-semibold tracking-widest uppercase text-primary border border-primary/25 bg-primary/5 mb-6"
            >
              <Calendar size={11} />
              Founded in 2013· 12+ years
            </motion.span>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-foreground mb-6 text-balance">
              We build{' '}
              <span className="text-primary inline-block min-w-[3ch]">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.75, ease: 'linear' }}
                  className="inline-block align-middle ml-0.5 w-0.5 h-[0.85em] bg-primary rounded-sm"
                  aria-hidden
                />
              </span>{' '}
              for real businesses.
            </h1>

            <p className="max-w-xl text-muted-foreground text-base md:text-[1.05rem] leading-relaxed mb-8 text-pretty">
              Technospyre is a Pakistani-rooted, globally trusted software company. We build practical tools â€” from hospital systems to mobile apps â€” and we train the next generation of developers.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-sm font-semibold text-sm bg-primary text-primary-foreground shadow-md hover:opacity-95 transition-opacity"
              >
                <span>Work with us</span>
                <div className="w-8 h-8 rounded-sm bg-primary-foreground/15 flex items-center justify-center group-hover:bg-primary-foreground/25 transition-colors">
                  <ArrowRight size={15} className="-rotate-45" />
                </div>
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-sm font-semibold text-sm border border-border bg-card hover:bg-muted/80 transition-colors shadow-sm"
              >
                <span>See products</span>
                <div className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center">
                  <ArrowRight size={15} className="-rotate-45" />
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-5"
          >
            <div className="relative overflow-hidden rounded-sm border border-border bg-muted/30 shadow-xl ring-1 ring-black/[0.04] aspect-[4/3]">
              <img
                src="/mockups/mockup-laptop.png"
                alt="Technospyre enterprise software dashboard preview"
                className="w-full h-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




