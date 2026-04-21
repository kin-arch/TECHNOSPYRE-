import React, { useLayoutEffect, useRef } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { AboutCompany } from '../components/about/AboutCompany';
import { LeadershipGrid } from '../components/about/LeadershipGrid';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { ExpertiseSection } from '../components/about/ExpertiseSection';
import { FAQSection } from '../components/about/FAQSection';
import { JourneyTimeline } from '../components/about/JourneyTimeline';
import { AboutCTA } from '../components/about/AboutCTA';
import { SectionLines } from '../components/SectionLines';
import { ScrollProgress } from '../components/ScrollProgress';

import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-about-reveal]').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 1, y: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 0,
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-about-stagger]').forEach((el) => {
        const children = el.querySelectorAll('[data-about-item]');
        gsap.fromTo(
          children,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-about-float]').forEach((el) => {
        gsap.to(el, {
          y: -15,
          duration: 2.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-about-glow]').forEach((el) => {
        gsap.fromTo(
          el,
          { boxShadow: '0 0 0 0 rgba(0,0,0,0)' },
          {
            boxShadow: '0 0 35px -8px rgba(139, 92, 246, 0.35)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-about-slide-left]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-about-slide-right]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-about-scale]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden" ref={pageRef}>
      <ScrollProgress />
      <SEO
        title="Why Choose TechnoSpyre"
        description="Learn why TechnoSpyre is the best choice for your business. Expert team, proven results, and dedicated support."
      />
      <div data-about-reveal data-about-float>
        <AboutHero />
      </div>
      <SectionLines />
      <div data-about-reveal>
        <AboutCompany />
      </div>
      <SectionLines />
      <div data-about-reveal>
        <WhyChooseUs />
      </div>
      <SectionLines />
      <div>
        <ExpertiseSection />
      </div>
      <SectionLines />
      <div data-about-reveal>
        <LeadershipGrid />
      </div>
      <SectionLines />
      <div data-about-reveal>
        <FAQSection />
      </div>
      <SectionLines />
      <div data-about-reveal>
        <JourneyTimeline />
      </div>
      <SectionLines />
      <div data-about-reveal>
        <AboutCTA />
      </div>
    </div>
  );
};

export default About;