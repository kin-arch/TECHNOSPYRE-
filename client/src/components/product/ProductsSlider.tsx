import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { getAllProducts } from '../../data/product';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
      delay: index * 0.07,
    },
  }),
};

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <Link id='prodcuts' to={`/products/${product.id}`} className="block h-full">
      <motion.div
        className="product-card group relative rounded-sm border border-outline-variant bg-surface-container overflow-hidden h-full flex flex-col cursor-pointer hover:border-primary/45 hover:bg-surface-container-high transition-all duration-300 min-h-[280px]"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        custom={index}
        whileHover={{
          y: -12,
          scale: 1.03,
          transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
        }}
        whileTap={{ scale: 0.97 }}
        layout
        data-home-glow
      >
        {/* Spotlight Effect Overlay */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(233, 100%, 18%, 0.08), transparent 40%)`,
          }}
        />
        
        {/* Content */}
        <div className="p-7 sm:p-8 flex flex-col flex-1 relative z-10">
          <div className="flex items-start justify-between mb-5">
            <motion.div
              className="card-icon w-16 h-16 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm"
              whileHover={{
                scale: 1.2,
                rotate: 12,
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
              }}
            >
              {product.icon}
            </motion.div>

            {/* Category Badge */}
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-on-surface-variant border border-outline-variant bg-background/60 px-3 py-1.5 rounded-sm backdrop-blur-sm">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="card-title font-headline text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-sm text-muted-foreground leading-relaxed font-medium flex-1">
            {product.shortDescription}
          </p>

          {/* Link */}
          <motion.div 
            className="card-link mt-6"
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Learn More <ArrowRight size={16} className="transition-transform" />
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export const ProductsSlider = () => {
  const products = getAllProducts();
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 5;
  const displayedProducts = showAll ? products : products.slice(0, initialDisplayCount);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const cards = sectionRef.current.querySelectorAll('.product-card') as NodeListOf<HTMLElement>;
    
    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      };
      
      card.addEventListener('mousemove', handleMouseMove);
    });
    
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', () => {});
      });
    };
  }, [displayedProducts]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-primary/10 border border-primary/30 mb-6">
              <span className="text-xs font-bold tracking-[3px] text-primary uppercase">Our Ecosystem</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-1px] text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Discover Our <span className="text-secondary">Software </span>Suite
          </motion.h2>

          <motion.p
            className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Professional-grade solutions engineered for performance, scalability, and clarity.
          </motion.p>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* View More / View Less */}
        {products.length > initialDisplayCount && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-sm bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {showAll ? (
                <>
                  View Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View More ({products.length - initialDisplayCount} More) <ChevronDown size={18} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};


