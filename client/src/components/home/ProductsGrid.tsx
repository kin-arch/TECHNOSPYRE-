import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productOffers } from '@/data/home';

gsap.registerPlugin(ScrollTrigger);

export const ProductsGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Section heading animation
      gsap.fromTo(
        '[data-products-heading]',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    const cards = gsap.utils.toArray<HTMLElement>('.product-card');

    cards.forEach((card) => {
      const icon = card.querySelector('.card-icon');
      const title = card.querySelector('.card-title');
      const link = card.querySelector('.card-link');

      gsap.set([icon, title, link], { y: 0, opacity: 1 });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };

      card.addEventListener('mousemove', handleMouseMove);

      // Enhanced hover animations
      card.addEventListener('mouseenter', () => {
        const tl = gsap.timeline();
        
        tl.to(card, {
          y: -12,
          scale: 1.03,
          duration: 0.4,
          ease: 'back.out(1.7)',
        }, 0)
        .to(icon, {
          scale: 1.2,
          rotation: 12,
          duration: 0.4,
          ease: 'back.out(1.7)',
        }, 0)
        .to(title, {
          y: -3,
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out',
        }, 0.05)
        .to(link, {
          x: 8,
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out',
        }, 0.08);
      });

      card.addEventListener('mouseleave', () => {
        gsap.to([card, icon, title, link], {
          y: 0,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });

    return () => {
      ctx.revert();
      cards.forEach((card) => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el;
      }}
      className="py-24 md:py-28 px-6 sm:px-8 relative overflow-hidden bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-products-heading>
          <div>
            <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block inline-flex items-center gap-2">
              <Sparkles size={14} /> Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
              Run Your <span className="text-primary">Business</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              With Our Advanced Softwares
            </p>
          </div>
          <Link to="/solutions" className="text-primary font-bold flex items-center gap-2 group whitespace-nowrap shrink-0">
            View All Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div ref={gridRef} data-home-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {productOffers.map((c, i) => (
            <div
              key={c.id}
              data-home-item
              className="product-card group relative rounded-sm border border-outline-variant bg-surface-container p-7 sm:p-8 min-h-[280px] flex flex-col justify-between hover:border-primary/45 hover:bg-surface-container-high transition-all duration-300 cursor-pointer overflow-hidden"
              data-home-glow
            >
              {/* Spotlight Effect Overlay */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(251, 146, 60, 0.15), transparent 40%)`,
                }}
              />
              <div className="flex items-center justify-between">
                <div className="card-icon w-16 h-16 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all duration-300 shadow-sm">
                  {c.icon}
                </div>
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-on-surface-variant border border-outline-variant bg-background/60 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="card-title font-headline text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
                  {c.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {c.tagline}
                </p>
              </div>

              <Link
                to={c.to}
                className="card-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Learn More <ArrowRight size={16} className="transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




