import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Gift, Sparkles, Zap, MousePointer, BarChart3, Badge, Users } from 'lucide-react';

interface SpecialOfferProps {
  offer?: any;
  fetching?: boolean;
}

const DEFAULT_OFFER = {
  originalPrice: '16,000',
  discountedPrice: '7,999',
  duration: '8 Weeks',
  image1: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
  highlights: [
    'React Fundamentals & JSX',
    'Hooks & State Management',
    'React Router & Navigation',
    'Real-world Projects'
  ]
};

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ offer: propOffer }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Use prop offer if provided, otherwise use default
  const offer = propOffer || DEFAULT_OFFER;

  const learningPreview = (offer.highlights || []).slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/50 bg-[linear-gradient(135deg,var(--color-background),var(--color-surface-container)_60%,var(--color-background))] px-4 sm:px-6 py-16 md:py-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[10%] top-[10%] h-40 w-40 rounded-full bg-primary/10 blur-3xl offer-glow opacity-30" />
        <div className="absolute left-[8%] bottom-[12%] h-32 w-32 rounded-full bg-primary/10 blur-3xl offer-glow opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
         <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
            {/* Left Side - Offer Content */}
            <div className="order-1 lg:order-1 flex h-full flex-col justify-between gap-4">
              <div className="flex-grow">
                <div className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-4 py-2">
                  <Gift size={14} className="text-primary" />
                  <span className="text-[11px] font-black uppercase tracking-[0.26em] text-primary">
                    Limited Time Offer
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-[0.4] tracking-[-0.03em] text-foreground sm:text-3xl lg:text-[3.2rem]">
                  Build <span className="text-primary">future</span> with React
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-6 tracking-[0.01em] text-muted-foreground md:text-lg">
                  The complete React mastery program for building production-grade applications. Learn by doing with real projects, expert guidance, and industry certification.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: <MousePointer size={20} />, title: 'Hands-on Practice', desc: 'Code-along sessions with real exercises' },
                    { icon: <BarChart3 size={20} />, title: 'Real-Time Projects', desc: 'Build production apps from day one' },
                    { icon: <Badge size={20} />, title: 'Industry Certification', desc: 'Recognized credential employers value' },
                    { icon: <Users size={20} />, title: 'Expert Mentorship', desc: '1-on-1 guidance from senior developers' }
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="group rounded-sm border border-border bg-background/95 p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                  {learningPreview.slice(0, 4).map((item) => (
                    <li 
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-foreground/90"
                    >
                      <CheckCircle size={15} className="mt-0.5 shrink-0 text-primary" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-start gap-4">
                <div>
                  <Link
                    to="/offers/react-course"
                    className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-foreground"
                  >
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award size={14} />
                  <span>Certificate included · Lifetime access · {offer.duration}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Pricing Cards */}
            <div className="order-1 lg:order-2 flex h-full flex-col justify-between gap-4">
              <div className="rounded-sm border border-primary/20 bg-background/95 p-4 md:p-5 shadow-[0_26px_70px_rgba(15,23,42,0.12)]">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.26em] text-primary">Offer</span>
                    <h3 className="mt-3 text-4xl font-black leading-none text-foreground md:text-5xl">
                      50% off
                    </h3>
                  </div>

                  <div className="rounded-sm border border-primary/15 bg-primary/5 px-4 py-4">
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

              <div className="overflow-hidden rounded-sm border border-outline-variant bg-card p-2.5 shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
                <div className="relative overflow-hidden rounded-sm">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <img
                    src={offer.image1}
                    alt="React Development"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-5 left-5 right-5 z-20">
                    <span className="mb-3 inline-flex items-center gap-1 rounded-sm bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-lg">
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
