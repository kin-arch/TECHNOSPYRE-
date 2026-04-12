import React, { useEffect } from 'react';
import { useMotionValue, useSpring } from 'motion/react';
import { Hero } from '../components/home/Hero';
import { LogoTicker } from '../components/home/LogoTicker';
import { ProductsGrid } from '../components/home/ProductsGrid';
import { ExpertiseSection } from '../components/home/ExpertiseSection';
import { AcademyTeaser } from '../components/home/AcademyTeaser';
import { TestimonialsGrid } from '../components/home/TestimonialsGrid';
import { HomeCTA } from '../components/home/HomeCTA';
import SEO from '../components/SEO';

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="Leading AI & Cloud Solutions"
        description="TechnoSpyre Inc. specializes in engineering, scaling, and managing resilient technology ecosystems for modern businesses."
      />
      <Hero smoothX={smoothX} smoothY={smoothY} />
      <LogoTicker />
      <ProductsGrid />
      <ExpertiseSection />
      <AcademyTeaser />
      <TestimonialsGrid />
      <HomeCTA />
    </div>
  );
};

export default Home;
