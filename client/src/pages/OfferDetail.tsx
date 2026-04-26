import React, { useLayoutEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Clock, Award, Sparkles, Zap, 
  Shield, GraduationCap, Video, BookOpen
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { courseCategories } from '@/data/courses';

import { getOffer } from '@/data/offerStore';

gsap.registerPlugin(ScrollTrigger);







const OfferDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pageRef = useRef<HTMLDivElement | null>(null);
  // Load offer synchronously from localStorage (falls back to defaults automatically)
  const offer = getOffer();

  // If offer is hidden or ID doesn't match, redirect to 404
  if (offer.hidden || id !== 'react-course') {
    return <Navigate to="/404" replace />;
  }

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-up',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pageRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.pricing-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-section',
            start: 'top 75%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="pt-0 overflow-x-hidden" ref={pageRef}>
      <SEO 
        title={`Exclusive Offer: ${offer.title} | TechnoSpyre`} 
        description={offer.subtitle}
      />

      {/* Hero Section */}
      <section className="relative px-6 sm:px-8 py-8 md:pb-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 reveal-up">
            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary bg-primary/10 px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Sparkles size={16} /> {offer.heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight mb-6">
              {offer.title.includes('React') ? (
                <>
                  {offer.title.split('React')[0]}
                  <span className="text-primary">React</span>
                  {offer.title.split('React')[1]}
                </>
              ) : offer.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {offer.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Video className="text-primary" size={20} />
                <span className="font-medium">{offer.videosCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="text-primary" size={20} />
                <span className="font-medium">{offer.projectsCount}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-primary" size={20} />
                <span className="font-medium">Certificate</span>
              </div>
            </div>
            <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(var(--primary),0.4)]">
              View Special Pricing <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
          <div className="order-1 lg:order-2 reveal-up relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-outline-variant">
              <img 
                src={offer.image2} 
                alt="Course Workspace" 
                className="w-full h-auto aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="bg-background/90 backdrop-blur-sm p-4 rounded-xl border border-outline-variant/50 max-w-sm">
                  <p className="text-foreground font-bold text-lg mb-1">"The best course I've taken."</p>
                  <p className="text-sm text-muted-foreground">— Sarah J., Professional Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details / Syllabus */}
      <section className="bg-surface-container py-20 px-6 sm:px-8 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our curriculum is designed to take you from fundamentals to advanced concepts seamlessly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 reveal-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <GraduationCap className="text-primary" /> Core Syllabus
              </h3>
              <div className="space-y-4">
                {offer.syllabus.map((item, i) => (
                  <div key={i} className="bg-background p-5 rounded-xl border border-outline-variant shadow-sm flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg font-bold text-sm shrink-0">
                      {item.week}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.topic}</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive deep dive into {item.topic.toLowerCase()} with hands-on exercises.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="text-yellow-500" /> Key Highlights
              </h3>
              <ul className="grid gap-4">
                {offer.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3 bg-background p-4 rounded-xl border border-outline-variant shadow-sm">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-gradient-to-br from-primary/10 to-purple-500/10 p-6 rounded-xl border border-primary/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="text-primary" size={18} /> Course Guarantee
                </h4>
                <p className="text-sm text-muted-foreground">{offer.guarantee}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section id="pricing" className="pricing-section py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Flexible Plans</span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Choose Your Learning Pace</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Unlock the full course with a plan that suits your schedule and budget.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekly Plan */}
          <div className="pricing-card relative bg-surface-container rounded-2xl p-8 border border-outline-variant shadow-lg hover:border-primary/50 transition-colors">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Weekly Access</h3>
              <p className="text-muted-foreground text-sm">Perfect for intensive, fast-paced learners.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-4xl font-bold">PKR {offer.weeklyPrice}</span>
              <span className="text-muted-foreground">/week</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span>Full access to all course materials</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span>Community support</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle className="text-muted-foreground/50 shrink-0" size={18} />
                <span>Certificate (Requires full completion)</span>
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
              Subscribe Weekly
            </button>
          </div>

          {/* Monthly Plan (Recommended) */}
          <div className="pricing-card relative bg-background rounded-2xl p-8 border-2 border-primary shadow-[0_0_30px_rgba(var(--primary),0.15)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Monthly Master</h3>
              <p className="text-muted-foreground text-sm">Best value for thorough learning & practice.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold">PKR {offer.monthlyPrice || offer.discountedPrice}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <span className="text-xs text-green-600 font-bold bg-green-500/10 px-2 py-1 rounded">Save {offer.discount} vs original PKR {offer.originalPrice}</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span className="font-bold">Unlimited access to everything</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span>Priority 1-on-1 mentorship</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span>Guaranteed Certificate of Completion</span>
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg">
              Get Monthly Plan
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto reveal-up">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">{offer.ctaHeading}</h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">
              {offer.ctaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="px-8 py-4 bg-background text-foreground font-bold rounded-lg hover:scale-105 transition-transform">
                {offer.ctaPrimaryBtn}
              </a>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors">
                {offer.ctaSecondaryBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferDetail;
