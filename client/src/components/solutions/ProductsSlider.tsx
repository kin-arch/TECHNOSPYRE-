import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimationControls } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { getAllProducts } from '../../data/solutions';

const ProfessionalProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 bg-surface-container border border-outline-variant rounded-lg overflow-hidden flex flex-col h-[400px] transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover hover:border-primary/50 relative">
      <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-primary/5 border border-primary/10 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
            {product.icon}
          </div>
          <span className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-lg bg-white/5 text-white/70 uppercase tracking-widest border border-white/5">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5">
          <Link 
            to={`/solutions/product/${product.id}`}
            className="inline-flex items-center text-sm font-medium text-primary group-hover:text-white transition-colors gap-2"
          >
            Read More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const ProductsSlider = () => {
  const products = getAllProducts();
  const [isHovered, setIsHovered] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Clone products to allow 'infinite' scrolling effect without running out of cards.
  const extendedProducts = [...products, ...products, ...products, ...products];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardNode = container.firstElementChild as HTMLElement;
        if (!cardNode) return;
        
        const cardWidth = cardNode.offsetWidth;
        const gap = 24; // Equivalent to gap-6

        // Check if we reached the right edge
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }
    }, 3000); // Stop for 3 seconds
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden border-y border-white/5 relative">
      <div className="container-custom px-6 md:px-12 lg:px-16 mx-auto mb-10 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-semibold tracking-wider text-primary uppercase mb-2">Our Ecosystem</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-2">
              Explore Our Software Suite
            </h3>
            <p className="text-muted-foreground max-w-md text-sm md:text-base">
              Professional-grade software architectures engineered to optimize operations across all leading global industries.
            </p>
          </div>
        </div>
      </div>

      <div 
        className="relative w-full pb-8 pt-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 px-6 md:px-12 lg:px-16 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedProducts.map((p, i) => (
            <div key={`${p.id}-${i}`} className="snap-start flex-shrink-0">
              <ProfessionalProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
