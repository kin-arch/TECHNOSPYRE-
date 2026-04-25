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
