import React from 'react';
import { Hero } from '../components/home/Hero';
import { SectionLines } from '../components/SectionLines';
import { LogoTicker } from '../components/home/LogoTicker';
import { ProductsGrid } from '../components/home/ProductsGrid';
import { ProductsSlider } from '../components/home/TechnologiesSlider';
import { SpecialOffer } from '../components/home/SpecialOffer';
import { TestimonialsGrid } from '../components/home/TestimonialsGrid';
import { HomeCTA } from '../components/home/HomeCTA';
import SEO from '../components/SEO';

const Home = () => {
<<<<<<< HEAD
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
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          },
        );
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

=======
>>>>>>> bf4f46c55be49902978ce9731da20456181294b7
  return (
    <div className="overflow-x-hidden">
      <SEO
        title="TechnoSpyre | Leading AI & Cloud Solutions"
        description="TechnoSpyre Inc. specializes in engineering, scaling, and managing resilient technology ecosystems for modern businesses."
      />
      <div>
        <Hero />
      </div>
      <SectionLines />
      <div>
        <LogoTicker />
      </div>
      <SectionLines />
      <div>
        <SpecialOffer />
      </div>
      <SectionLines />
      <div>
        <ProductsGrid />
      </div>
      <SectionLines />
      <div>
        <ProductsSlider />
      </div>
      <SectionLines />
      <div>
        <TestimonialsGrid />
      </div>
      <SectionLines />
      <div>
        <HomeCTA />
      </div>
    </div>
  );
};

export default Home;