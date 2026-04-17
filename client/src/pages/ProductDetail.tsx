import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, PlayCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { categories } from '../data/solutions';
import SEO from '../components/SEO';
import { VideoPlayer } from '../components/solutions/VideoPlayer';
import { Button } from '../components/base/buttons/button';
import { Badge } from '../components/base/Badge';
import { Card } from '../components/base/Card';

const DEFAULT_VIDEO = 'https://www.w3schools.com/html/mov_bbb.mp4';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    let found = null;
    for (const cat of categories) {
      const p = cat.products.find((prod) => prod.id === id);
      if (p) { found = p; break; }
    }
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <PlayCircle size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Product Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto">The solution you're looking for doesn't exist or may have been moved.</p>
          <Link to="/solutions" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <ArrowLeft size={16} /> Back to Solutions
          </Link>
        </div>
      </div>
    );
  }

  const features = product.features || product.highlights || [
    'Advanced Cloud Architecture',
    'Real-time Data Synchronisation',
    'Enterprise-grade Security',
    'Seamless Third-party Integration',
    'AI-powered Analytics Dashboard'
  ];

  return (
    <div className="pt-32 pb-32 md:pt-40 lg:pt-48 min-h-screen bg-background overflow-x-hidden">
      <SEO title={`${product.name} | Technospyre Solutions`} description={product.shortDescription} />

      {/* Ambient accent - restrained for better mobile layout */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="container-custom px-4 sm:px-8 relative z-10">

        {/* ── Breadcrumb ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Solutions
          </Link>
        </motion.div>

        {/* ── Hero Block ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-24"
        >
          {/* Premium Category Badge from Base Elements */}
          <Badge 
            icon={<span className="text-primary">{product.icon}</span>}
            variant="primary"
            size="md"
            className="mb-8"
          >
            {product.category}
          </Badge>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Title + desc + CTAs */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-on-surface">
                {product.name}
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-light mb-10 max-w-xl">
                {product.shortDescription}
              </p>

              {/* CTA Buttons using Untitled UI */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  href="/contact"
                  size="xl"
                  color="primary"
                  iconTrailing={ArrowRight}
                >
                  Request a Demo
                </Button>
                <Button
                  href="/solutions"
                  size="xl"
                  color="secondary"
                >
                  View Ecosystem
                </Button>
              </div>
            </div>

            {/* Right: Key Capabilities Card from Base Elements */}
            <div className="order-1 lg:order-2">
              <Card 
                variant="elevated" 
                padding="lg"
                header={(
                  <h3 className="text-xl font-bold flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                    Key Capabilities
                  </h3>
                )}
              >
                <div className="grid sm:grid-cols-1 gap-5">
                  {features.map((feature: string) => (
                    <div key={feature} className="flex items-start gap-4 group">
                      <div className="mt-1 bg-primary/10 p-1 rounded-full group-hover:bg-primary transition-colors shrink-0">
                        <CheckCircle2 size={16} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-on-surface-variant font-medium leading-tight text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </motion.div>

        {/* ── Divider ────────────────────────────────────────────── */}
        <div className="border-t border-white/8 mb-16" />

        {/* ── Video Player ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <PlayCircle size={18} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Product Demo</span>
          </div>
          <VideoPlayer
            src={product.demoVideo || DEFAULT_VIDEO}
            poster={product.softwareImages?.[0]}
          />
        </motion.div>

        {/* ── In-depth Details ───────────────────────────────────── */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-20 mb-20 items-start">
            <div>
              <div className="h-px w-8 bg-primary mb-4" />
              <h3 className="text-2xl font-bold leading-snug text-foreground lg:sticky lg:top-40">In-depth capabilities.</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.longDetails}
            </p>
          </div>

          {/* ── Gallery ──────────────────────────────────────────── */}
          {product.softwareImages?.length > 1 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Screenshots</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.softwareImages.slice(1).map((img: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group rounded-xl overflow-hidden border border-white/8 bg-white/[0.02]"
                  >
                    <img
                      src={img}
                      alt={`${product.name} screenshot ${idx + 1}`}
                      className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Bottom CTA strip ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-8 rounded-2xl border border-white/8 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <h4 className="text-xl font-bold mb-1">Ready to transform your operations?</h4>
              <p className="text-muted-foreground text-sm">Get in touch and we'll set you up with a personalised demo.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button href="/contact" size="lg" color="primary" iconTrailing={ArrowRight}>
                Start Today
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
