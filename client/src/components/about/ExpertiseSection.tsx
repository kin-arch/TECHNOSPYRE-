import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/about';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export const ExpertiseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Removed conflicting GSAP fromTo animations that were overriding Framer Motion's whileInView

      gsap.utils.toArray<HTMLElement>('.expertise-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-28 relative overflow-hidden bg-background border-y border-border/60" id="what-we-do">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y, opacity }} className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-sm bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-40 right-[-100px] w-[500px] h-[500px] rounded-sm bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          variants={headingVariants}
          initial="visible"
          animate="visible"
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto expertise-heading"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">Why choose us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-tight text-foreground">
            Why People Trust Us
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed">
            We have 20+ years of experience, happy clients, and the fastest support to help you grow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group flex flex-col rounded-sm border border-border bg-card overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/35 hover:shadow-lg expertise-card"
              
            >
              <div className="relative h-40 overflow-hidden bg-muted shrink-0">
                <img
                  src={service.image}
                  alt=""
                  width={600}
                  height={240}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90 pointer-events-none" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground shadow-md ring-2 ring-background">
                  {service.icon}
                </div>
                <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-background/90 opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight size={16} className="text-primary" aria-hidden />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-bold font-headline text-foreground group-hover:text-primary transition-colors mb-3">
                  {service.title}
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2.5 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 leading-snug">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-1.5 transition-all"
                >
                  Discuss this service
                  <ArrowUpRight size={14} className="shrink-0" aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



