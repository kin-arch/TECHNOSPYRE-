import React, { useEffect } from 'react';
import { SolutionsHero } from '../components/product/ProductsHero';
import { ProductsSlider } from '../components/product/ProductsSlider';
import { ComparisonSection } from '../components/product/ProductsComparison';
import { AdvantagesSection } from '../components/product/ProductsAdvantages';
import { SolutionsCTA } from '../components/product/ProductsCTA';
import SEO from '../components/SEO';

const Solutions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <SEO
        title="Enterprise IT Solutions | Technospyre"
        description="Comprehensive Cloud, AI, and Cybersecurity solutions tailored for modern businesses to operate securely and efficiently."
      />
      <SolutionsHero />
      <ProductsSlider />
      <ComparisonSection />
      <AdvantagesSection />
      <SolutionsCTA />
    </div>
  );
};

export default Solutions;
