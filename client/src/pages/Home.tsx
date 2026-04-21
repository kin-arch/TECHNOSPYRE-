import React, { useLayoutEffect, useRef } from 'react';
import { Hero } from '../components/home/Hero';
import { SectionLines } from '../components/SectionLines';
import { LogoTicker } from '../components/home/LogoTicker';
import { ProductsGrid } from '../components/home/ProductsGrid';
import { ProductsSlider } from '../components/home/TechnologiesSlider';
import { TestimonialsGrid } from '../components/home/TestimonialsGrid';
import { HomeCTA } from '../components/home/HomeCTA';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-home-reveal]').forEach((section) => {
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

      gsap.utils.toArray<HTMLElement>('[data-home-stagger]').forEach((el) => {
        const children = el.querySelectorAll('[data-home-item]');
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

      gsap.utils.toArray<HTMLElement>('[data-home-float]').forEach((el) => {
        gsap.to(el, {
          y: -15,
          duration: 2.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-home-glow]').forEach((el) => {
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

      gsap.utils.toArray<HTMLElement>('[data-home-slide-left]').forEach((el) => {
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

      gsap.utils.toArray<HTMLElement>('[data-home-slide-right]').forEach((el) => {
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

      gsap.utils.toArray<HTMLElement>('[data-home-scale]').forEach((el) => {
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

      gsap.utils.toArray<HTMLElement>('[data-home-blur]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, filter: 'blur(10px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          },
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-x-hidden" ref={pageRef}>
      <SEO
        title="TechnoSpyre | Leading AI & Cloud Solutions"
        description="TechnoSpyre Inc. specializes in engineering, scaling, and managing resilient technology ecosystems for modern businesses."
      />
      <div data-home-reveal>
        <Hero />
      </div>
      <SectionLines />
      <div data-home-reveal>
        <LogoTicker />
      </div>
      <SectionLines />
      <div data-home-reveal>
        <ProductsGrid />
      </div>
      <SectionLines />
      <div data-home-reveal>
        <ProductsSlider />
      </div>
      <SectionLines />
      <div data-home-reveal>
        <TestimonialsGrid />
      </div>
      <SectionLines />
      <div data-home-reveal>
        <HomeCTA />
      </div>
    </div>
  );
};

export default Home;