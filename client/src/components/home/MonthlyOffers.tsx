import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { monthlyOffers } from '@/data/courses';

gsap.registerPlugin(ScrollTrigger);

const offer = monthlyOffers[0];

export const MonthlyOffers: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.offer-heading',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.offer-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.offers-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-28 px-6 sm:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background to-surface-container border-b border-border/50"
    >
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="offer-heading mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase flex items-center gap-2">
              <Gift size={14} /> Limited Time Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            {offer.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles size={16} />
              Flat {offer.discount} Discount
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              Valid until {offer.validUntil}
            </span>
          </div>
        </div>

        <div className="offers-grid max-w-2xl mx-auto">
          {offer.courses.map((course, i) => (
            <div
              key={course.id}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              className="offer-card group relative rounded-sm border-2 border-primary/30 bg-surface-container p-8 hover:border-primary/60 transition-all duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                {offer.discount} OFF
              </div>

              <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground mt-4 mb-4 text-center">
                {course.name}
              </h3>

              <div className="flex items-baseline justify-center gap-4 mb-6">
                <span className="text-4xl font-bold text-primary">
                  Rs.{course.discountedFee}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  Rs.{course.originalFee}
                </span>
              </div>

              <Link
                to="/courses"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          ))}
        </div>

        <div className="offer-heading mt-10 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};