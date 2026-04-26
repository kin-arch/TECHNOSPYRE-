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
import { getOffer } from '../data/offerStore';

const Home = () => {
  const offer = getOffer();

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
      
      {!offer.hidden && (
        <>
          <SectionLines />
          <div>
            <SpecialOffer />
          </div>
        </>
      )}

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
