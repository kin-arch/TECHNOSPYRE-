import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Gift, Sparkles, Zap, Clock, MousePointer, BarChart3, Badge, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactCourse } from '@/data/courses';

gsap.registerPlugin(ScrollTrigger);

interface OfferData {
  title: string;
  subtitle: string;
  duration: string;
  certification: string;
  highlights: string[];
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  weeklyPrice: string;
  image1: string;
  image2: string;
}

const API_BASE = 'http://localhost:5000/api';

const fallback: OfferData = {
  title: 'Build Future with React',
  subtitle: 'Complete React mastery program with projects, tools, and certificate.',
  duration: reactCourse.beginner.duration,
  certification: 'Industry Recognized',
  highlights: reactCourse.beginner.highlights.slice(0, 4),
  originalPrice: '40,000',
  discountedPrice: '20,000',
  discount: '50%',
  weeklyPrice: '1,999',
  image1: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
  image2: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
};

export const SpecialOffer: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offer, setOffer] = useState<OfferData>(fallback);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/offer`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) setOffer({ ...fallback, ...data });
      })
      .catch(() => {
        /* silently use fallback */
      })
      .finally(() => setFetching(false));
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current || fetching) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.offer-animate-up',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef.current);

    return () => ctx.revert();
  }, [fetching]);

  const learningPreview = (offer.highlights || []).slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(135deg,var(--color-background),var(--color-surface-container)_60%,var(--color-background))] px-4 sm:px-6 py-16 md:py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[10%] top-[10%] h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-[8%] bottom-[12%] h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
         <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
           {/* Left Side - Offer Content */}
           <div className="order-1 lg:order-1 flex h-full flex-col justify-between gap-4">
             <div className="flex-grow">
               <div className="offer-animate-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                 <Gift size={14} className="text-primary" />
                 <span className="text-[11px] font-black uppercase tracking-[0.26em] text-primary">
                   Limited Time Offer
                 </span>
               </div>

               <h2 className="offer-animate-up mt-5 max-w-2xl text-2xl font-black leading-[1.04] tracking-[-0.03em] text-foreground sm:text-3xl lg:text-[3.2rem]">
                 Build <span className="text-primary">future</span> with React
               </h2>

                <p className="offer-animate-up mt-4 max-w-2xl text-base leading-6 tracking-[0.01em] text-muted-foreground md:text-lg">
                  The complete React mastery program for building production-grade applications. Learn by doing with real projects, expert guidance, and industry certification.
                </p>

                <div className="offer-animate-up mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="group rounded-[1.25rem] border border-border bg-background/95 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <MousePointer size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Hands-on Practice</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Code-along sessions with real exercises</p>
                  </div>

                  <div className="group rounded-[1.25rem] border border-border bg-background/95 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <BarChart3 size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Real-Time Projects</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Build production apps from day one</p>
                  </div>

                  <div className="group rounded-[1.25rem] border border-border bg-background/95 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Badge size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Industry Certification</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">Recognized credential employers value</p>
                  </div>

                  <div className="group rounded-[1.25rem] border border-border bg-background/95 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Users size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-foreground">Expert Mentorship</h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">1-on-1 guidance from senior developers</p>
                  </div>
                </div>

                <ul className="offer-animate-up mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                 {learningPreview.slice(0, 4).map((item) => (
                   <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-foreground/90">
                     <CheckCircle size={15} className="mt-0.5 shrink-0 text-primary" />
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="offer-animate-up flex flex-col items-start gap-4">
               <Link
                 to="/offers/react-course"
                 className="group inline-flex items-center justify-center gap-2 rounded-[1rem] bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-foreground"
               >
                 Start Learning
                 <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
               </Link>
               <div className="flex items-center gap-2 text-xs text-muted-foreground">
                 <Award size={14} />
                 <span>Certificate included · Lifetime access · {offer.duration}</span>
               </div>
             </div>
           </div>

           {/* Right Side - Pricing Cards */}
           <div className="order-1 lg:order-2 flex h-full flex-col justify-between gap-4">
             <div className="offer-animate-up rounded-[2rem] border border-primary/20 bg-background/95 p-4 md:p-5 shadow-[0_26px_70px_rgba(15,23,42,0.12)]">
               <div className="flex flex-col gap-4">
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-[0.26em] text-primary">Offer</span>
                   <h3 className="mt-3 text-4xl font-black leading-none text-foreground md:text-5xl">
                     50% off
                   </h3>
                 </div>

                 <div className="rounded-[1.6rem] border border-primary/15 bg-primary/5 px-4 py-4">
                   <span className="text-xs font-semibold text-muted-foreground line-through decoration-red-500/70">
                     PKR {offer.originalPrice}
                   </span>
                   <span className="block text-2xl font-black leading-none text-foreground md:text-3xl">
                     PKR {offer.discountedPrice}
                   </span>
                 </div>
               </div>

               <p className="mt-4 max-w-md text-xs leading-5 text-muted-foreground md:text-sm">
                 Build real projects · Get certified · Landing the job
               </p>
             </div>

             <div className="offer-animate-up overflow-hidden rounded-[2rem] border border-outline-variant bg-card p-2.5 shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
               <div className="relative overflow-hidden rounded-[1.5rem]">
                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                 <img
                   src={offer.image1}
                   alt="React Development"
                   className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                 />
                 <div className="absolute bottom-5 left-5 right-5 z-20">
                   <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                     <Sparkles size={12} /> Premium
                   </span>
                   <p className="max-w-sm text-sm font-semibold leading-6 text-white">
                     Industry-relevant React training with portfolio projects
                   </p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
