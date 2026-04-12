import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/solutions';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { SolutionPanel } from '../components/solutions/SolutionPanel';
import { FullOverview } from '../components/solutions/FullOverview';
import { AdvantagesSection } from '../components/solutions/AdvantagesSection';
import { SolutionsCTA } from '../components/solutions/SolutionsCTA';
import SEO from '../components/SEO';

const Solutions = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('operations');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && categories.find((c) => c.id === cat)) {
      setActiveCategory(cat);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);

  return (
    <div>
      <SEO 
        title="Enterprise IT Solutions"
        description="Comprehensive Cloud, AI, and Cybersecurity solutions tailored for modern businesses to operate securely and efficiently."
      />
      <SolutionsHero />
      <SolutionPanel 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <FullOverview 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <AdvantagesSection />
      <SolutionsCTA />
    </div>
  );
};

export default Solutions;
