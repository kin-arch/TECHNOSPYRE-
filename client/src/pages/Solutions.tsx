import React, { useEffect } from 'react';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { ProductsSlider } from '../components/solutions/ProductsSlider';
import { ComparisonSection } from '../components/solutions/ComparisonSection';
import { AdvantagesSection } from '../components/solutions/AdvantagesSection';
import { SolutionsCTA } from '../components/solutions/SolutionsCTA';
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
