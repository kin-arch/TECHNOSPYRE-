import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Award, Sparkles, Zap, Gift, Loader2 } from 'lucide-react';
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

// Fallback from static data file
const fallback: OfferData = {
  title: 'Master React.js & Build the Future',
  subtitle: reactCourse.title,
  duration: reactCourse.beginner.duration,
  certification: 'Industry Recognized',
  highlights: reactCourse.beginner.highlights.slice(0, 4),
  originalPrice: reactCourse.beginner.originalFee,
  discountedPrice: reactCourse.beginner.discountedFee,
  discount: reactCourse.beginner.discount,
  weeklyPrice: '1,999',
  image1: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
  image2: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
};

export const SpecialOffer: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offer, setOffer] = useState<OfferData>(fallback);
  const [fetching, setFetching] = useState(true);

  // Fetch live offer from server
  useEffect(() => {
    fetch(`${API_BASE}/offer`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setOffer({ ...fallback, ...data }); })
      .catch(() => {/* silently use fallback */})
      .finally(() => setFetching(false));
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current || fetching) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.offer-animate-up',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 sm:px-8 relative overflow-hidden bg-gradient-to-br from-surface-container via-background to-surface-container border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text */}
          <div className="order-2 lg:order-1">
            <div className="offer-animate-up inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20 flex items-center gap-2 shadow-[0_0_15px_rgba(var(--primary),0.15)]">
                <Gift size={14} /> Limited Time Special Offer
              </span>
            </div>

            <h2 className="offer-animate-up text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight mb-6 leading-tight">
              {offer.title.includes('React') ? (
                <>
                  {offer.title.split('React')[0]}
                  <span className="text-primary to-purple-500">React</span>
                  {offer.title.split('React')[1]}
                </>
              ) : offer.title}
            </h2>

            <p className="offer-animate-up text-lg text-muted-foreground mb-8 max-w-xl">
              {offer.subtitle}
            </p>

            <div className="offer-animate-up grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-outline-variant shadow-sm backdrop-blur-sm">
                <Clock className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Duration</h4>
                  <p className="text-sm text-muted-foreground">{offer.duration} Intensive</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-outline-variant shadow-sm backdrop-blur-sm">
                <Award className="text-primary shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground">Certification</h4>
                  <p className="text-sm text-muted-foreground">{offer.certification}</p>
                </div>
              </div>
            </div>

            <div className="offer-animate-up mb-8">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Zap className="text-yellow-500" size={18} /> What you will learn:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {(offer.highlights || []).slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="offer-animate-up flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border/50">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground line-through decoration-red-500/50 mb-1">
                  Regular Price: Rs.{offer.originalPrice}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    Rs.{offer.discountedPrice}
                  </span>
                  <span className="text-sm font-bold text-green-600 bg-green-500/10 px-2 py-1 rounded-md border border-green-500/20">
                    Save {offer.discount}
                  </span>
                </div>
              </div>

              <Link
                to="/offers/react-course"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative flex items-center gap-2">
                  Learn More & Claim Offer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="order-1 lg:order-2 offer-animate-up relative">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={offer.image1}
                alt="React Development"
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Sparkles size={12} /> Bestseller
                  </span>
                  <span className="bg-background/90 backdrop-blur text-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    4.9/5 Average Rating
                  </span>
                </div>
                <p className="text-white font-medium text-lg lg:text-xl drop-shadow-md">
                  Join 5,000+ students who have transformed their careers.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-6 -right-6 bg-background rounded-xl p-4 shadow-xl border border-outline-variant"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Zap className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Job Success</p>
                  <p className="text-sm font-bold">92% Rate</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};
