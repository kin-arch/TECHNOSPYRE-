import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllProducts } from '../../data/solutions';

const cardVariants = {
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
    <motion.div
      className="group relative bg-surface-container border border-outline-variant rounded-sm overflow-hidden h-full flex flex-col cursor-pointer shadow-md hover:shadow-2xl transition-shadow"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={index}
      whileHover={{
        y: -10,
        scale: 1.03,
        transition: { duration: 0.35, ease: [0.23, 1, 0.32, 1] },
      }}
      whileTap={{ scale: 0.97 }}
      layout
    >
      {/* Content - Compact */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <motion.div
            className="text-6xl flex-shrink-0"
            whileHover={{
              scale: 1.15,
              rotate: [0, -8, 8, 0],
              transition: { duration: 0.5 },
            }}
          >
            {product.icon}
          </motion.div>

          {/* Category Badge - Subtle & professional */}
          <div className="px-4 py-1.5 text-xs tracking-widest bg-primary/5 border border-primary rounded-sm text-primary backdrop-blur-sm">
            {product.category}
          </div>
        </div>

        {/* Title */}
        <motion.h3
          className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.25 }}
        >
          {product.name}
        </motion.h3>

        {/* Short description - Kept compact */}
        <p className="text-muted-foreground text-[15px] leading-relaxed flex-1 line-clamp-4">
          {product.shortDescription}
        </p>

        {/* Button - Clean & modern */}
        <motion.div className="mt-auto pt-7">
          <Link to={`/solutions/product/${product.id}`}>
            <motion.button
              className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-sm text-sm shadow-sm"
              whileHover={{
                scale: 1.03,
                gap: "16px",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              Explore Solution
              <ArrowRight size={19} className="transition-transform group-hover:rotate-45" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Subtle bottom accent line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-primary/70 to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export const ProductsSlider = () => {
  const products = getAllProducts();
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 7);

  return (
    <section className="py-20 md:py-28 bg-background border-y border-white/5">
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
            Discover Our <span className="text-primary">Software </span>Suite
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        {products.length > 7 && (
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-4 px-9 py-6 rounded-sm bg-primary/1 hover:bg-primary/10 border border-primary text-primary font-medium text-lg backdrop-blur-xl transition-all active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {showAll ? 'View less' : 'View more'}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};