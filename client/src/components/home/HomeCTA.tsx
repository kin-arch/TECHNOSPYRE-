import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const HomeCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.floating-element').forEach((el) => {
        gsap.to(el, {
          y: -10,
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      gsap.fromTo(
        '[data-cta-heading]',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 py-4 px-8 text-center relative overflow-hidden bg-background border-t border-border/50">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[140px] rounded-sm pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-primary/10 border border-primary/20 mb-6 floating-element"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Ready to Begin?</span>
        </motion.div>

        <h2 data-cta-heading className="flex flex-col gap-5 text-4xl md:text-5xl font-headline font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
          Let's build something{' '}
          <span className="relative inline-block text-primary ">
            extraordinary.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
          From first consultation to global deployment we're with you every step of the way. No jargon, no complexity. Just results.
        </p>

        <div className="flex max-sm:flex-col gap-5 justify-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-sm font-bold bg-primary hover:bg-foreground text-primary-foreground transition-all duration-200 hover:scale-105"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="relative z-10 w-8 h-8 rounded-sm bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-all duration-200" />
            </div>
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-sm font-bold text-primary border border-primary hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200"
          >
            View Products
          </Link>
        </div>
      </motion.div>
    </section>
  );
};



