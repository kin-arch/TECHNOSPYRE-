import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  LayoutDashboard,
  PlayCircle,
  Sparkles,
  Zap,
} from 'lucide-react';
import { categories, type Product } from '../data/product';
import { softwareSuite } from '../data/softwareSuite';
import SEO from '../components/SEO';
import { VideoPlayer } from '@/components/VideoPlayer';
import { ProductDetailPricing } from '../components/product/detail/ProductDetailSections';

const DEFAULT_VIDEO = '/solution.mp4';

const integrations = [
  { name: 'Biometric Integration', desc: 'Sync attendance data directly from hardware devices.', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2432/2432320.png' },
  { name: 'Payment Gateways', desc: 'Connect with local and international processors for instant billing.', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1084/1084033.png' },
  { name: 'Accounting APIs', desc: 'Export ledger data to standard accounting software like Tally or SAP.', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2618/2618245.png' },
  { name: 'Insurance Providers', desc: 'Real-time claim verification with major insurance carriers.', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2966/2966486.png' },
];

const comparisonRows = [
  { capability: 'Implementation', us: 'Rapid, pre-configured modules', them: 'Long-term custom development' },
  { capability: 'Customization', us: 'Highly flexible industry templates', them: 'Rigid off-the-shelf software' },
  { capability: 'Support', us: '24/7 dedicated enterprise support', them: 'Standard ticketing queues' },
  { capability: 'Integration', us: 'Plug-and-play API ecosystem', them: 'Manual, expensive integration hooks' },
  { capability: 'User Experience', us: 'Modern, role-based dashboards', them: 'Legacy, complex interfaces' },
];

const clientRows = [
  { name: 'City Hospital', hint: 'Healthcare', color: 'bg-emerald-600' },
  { name: 'Retail Nexus', hint: 'Logistics', color: 'bg-blue-600' },
  { name: 'Global Logistics', hint: 'Supply Chain', color: 'bg-orange-600' },
  { name: 'Apex Finance', hint: 'Professional Services', color: 'bg-teal-600' },
  { name: 'Prime Resorts', hint: 'Hospitality', color: 'bg-sky-600' },
];

const baseFaqs = [
  { q: 'Is the data stored securely?', a: 'Yes, we use industry-standard encryption and secure cloud hosting providers, ensuring your data is protected at rest and in transit.' },
  { q: 'Can we migrate data from our old system?', a: 'Absolutely. We provide data migration tools and specialist support to ensure a smooth transition from your legacy software.' },
  { q: 'Does it support multi-branch operations?', a: 'Yes, our solutions are built for scale, supporting multi-location synchronization and centralized management.' },
  { q: 'What kind of training do you provide?', a: 'We offer comprehensive on-site and remote training for your team, along with detailed documentation and a dedicated support portal.' },
  { q: 'Are there personalized modules for our specific needs?', a: 'Yes, our ERP systems are modular and highly customizable to fit your unique business workflows.' },
];

function FAQItem({ faq }: { faq: (typeof baseFaqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <span className="font-semibold text-lg text-on-surface">{faq.q}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-outline-variant">
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={16} className="text-on-surface-variant" />
          </motion.span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="mt-3 pr-10 text-on-surface-variant leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { product, categoryLabel } = useMemo(() => {
    for (const cat of categories) {
      const p = cat.products.find((prod) => prod.id === id);
      if (p) return { product: p as Product, categoryLabel: cat.label };
    }
    return { product: null as Product | null, categoryLabel: null as string | null };
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const videoSrc = product?.demoVideo || DEFAULT_VIDEO;
  const poster = product?.softwareImages?.[0];
  const dashboardImages =
    product?.softwareImages?.length ? product.softwareImages : [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop&q=80',
    ];

  const suite = useMemo(() => {
    if (!product) return null;
    return softwareSuite.find((item) => item.productId === product.id) ?? null;
  }, [product]);

  const featureList = suite?.featureHighlights?.length
    ? suite.featureHighlights
    : product?.features?.length
      ? product.features
      : [
          'Role-based access & audit trails',
          'Real-time dashboards & exports',
          'Workflow automation & approvals',
          'API-first integrations',
        ];

  const allModules = useMemo(() => {
    if (suite?.keyFeatures?.length) return suite.keyFeatures;
    return product?.features?.map((feature) => ({
      title: feature,
      category: 'Core Module',
      description: `Comprehensive ${feature.toLowerCase()} capability tailored for your ${product.category === 'operations' ? 'operational' : 'business'} needs.`,
    })) || [];
  }, [product, suite]);

  const defaultVisibleModules = 6;
  const [showAllModules, setShowAllModules] = useState(false);
  const visibleModules = showAllModules ? allModules : allModules.slice(0, defaultVisibleModules);
  const hiddenModuleCount = Math.max(allModules.length - defaultVisibleModules, 0);

  useEffect(() => {
    setShowAllModules(false);
  }, [id]);

  const faqs = useMemo(() => {
    if (!product) return baseFaqs;
    return baseFaqs.map((f, i) =>
      i === 0
        ? {
          q: `How does ${product.name} fit our stack?`,
          a: `${product.shortDescription} We map your systems in discovery, then connect through secure APIs and governed data contracts not rip-and-replace by default.`,
        }
        : f
    );
  }, [product]);

  if (!product || !categoryLabel) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
            <PlayCircle size={28} className="text-primary" />
          </div>
          <h2 className="mb-3 text-3xl font-bold font-headline text-on-surface">Product not found</h2>
          <p className="mx-auto mb-8 max-w-sm text-on-surface-variant">
            This solution may have moved. Browse all offerings on the solutions hub.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
          >
            <ArrowLeft size={16} /> Back to solutions
          </Link>
        </div>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.shortDescription,
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title={`${product.name} | TechnoSpyre`} description={product.shortDescription} jsonLd={jsonLd} />

      <div className="mx-auto max-w-7xl px-6 pt-10 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 font-medium text-on-surface-variant transition-colors hover:text-primary"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            Back to products all products
          </Link>
        </motion.div>

        <div className="flex flex-col gap-12">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-1 lg:order-2"
            >
              <div className="sticky top-10 space-y-6 rounded-sm border border-outline-variant bg-surface-container/70 p-8 shadow-xl backdrop-blur-xl inner-highlight">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                >
                  <div className="mb-4 flex items-center justify-between text-sm font-semibold text-on-surface">
                    <PlayCircle size={18} className="text-primary" />
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95 text-center">
                      Get In Touch <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="relative h-[360px] w-full rounded-sm overflow-hidden border border-outline-variant bg-black shadow-2xl ring-1 ring-white/10">
                    <VideoPlayer src={videoSrc} poster={poster} />
                  </div>

                  <p className="mt-3 text-xs text-on-surface-variant italic">
                    Experience the {product.name} interface.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Ã¢â‚¬â€Ã¢â‚¬â€ Main column Ã¢â‚¬â€Ã¢â‚¬â€ */}
            <div className="space-y-16 lg:col-span-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
                  <Sparkles size={14} />
                  {categoryLabel}
                </div>
                <h1 className="relative mb-6 font-headline text-3xl font-bold leading-tight tracking-tighter text-on-surface md:text-4xl lg:text-4xl">
                  {product.name}
                  <span className="absolute -inset-6 -z-10 rounded-sm bg-primary/15 opacity-40 blur-3xl" aria-hidden />
                </h1>
                <div className="max-w-3xl">
                  <p className="text-lg leading-relaxed text-on-surface-variant">{product.shortDescription}</p>
                  <p className="mt-4 text-base leading-relaxed text-on-surface-variant/90">{product.longDetails}</p>
                  {suite?.moduleSummary && (
                    <p className="mt-4 rounded-sm border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-on-surface-variant">
                      {suite.moduleSummary}
                    </p>
                  )}
                </div>
              </motion.div>

               {/* Modules Section */}
               <motion.section
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: '-40px' }}
                 transition={{ duration: 0.55 }}
                 className="rounded-sm border border-outline-variant bg-gradient-to-br from-surface-container-low to-surface-container p-8 md:p-10"
               >
                 <div className="mb-2 flex items-center gap-2 text-primary">
                   <LayoutDashboard size={20} />
                   <span className="text-xs font-bold uppercase tracking-widest">Modules</span>
                 </div>
                 <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                   <div>
                     <h2 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">Everything you need to operate</h2>
                     <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
                       {suite?.readMore || 'Purpose-built modules organized around the way your teams actually work.'}
                     </p>
                   </div>
                   <div className="inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">
                     <Sparkles size={16} />
                     {allModules.length} operational modules
                   </div>
                 </div>
                 <div className="grid gap-6 sm:grid-cols-2">
                   {visibleModules.map((module, index) => (
                     <motion.div
                       key={index}
                       initial={{ opacity: 0, y: 12 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.4, delay: index * 0.06 }}
                       className="flex gap-4 p-4 rounded-sm bg-surface-container/50 border border-border/40 hover:border-primary/30 transition-all"
                     >
                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary/10 border border-primary/20 text-primary">
                         <CheckCircle2 size={20} />
                       </div>
                        <div>
                          {'category' in module && module.category && (
                            <span className="mb-2 inline-flex rounded-sm border border-primary/15 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                              {module.category}
                            </span>
                          )}
                          <h3 className="text-base md:text-lg font-bold text-on-surface mb-1">{module.title}</h3>
                          <p className="text-xs md:text-sm leading-relaxed text-on-surface-variant">
                            {module.description}
                          </p>
                        </div>
                     </motion.div>
                   ))}
                 </div>

                  {allModules.length > defaultVisibleModules && (
                    <div className="mt-6 flex justify-center">
                      <button
                        type="button"
                        onClick={() => setShowAllModules((prev) => !prev)}
                        className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        {showAllModules ? 'Show Fewer Modules' : `View More Modules${hiddenModuleCount ? ` (${hiddenModuleCount})` : ''}`}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${showAllModules ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                  )}
               </motion.section>

               {/* Highlights */}
               <motion.section
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: '-40px' }}
                 transition={{ duration: 0.55 }}
                 className="rounded-sm border border-outline-variant bg-surface-container p-6 md:p-8"
               >
                 <h2 className="mb-2 font-headline text-xl md:text-2xl font-bold text-on-surface">What you get</h2>
                 <p className="mb-5 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
                   Key capabilities that make {product.name} easier to adopt, easier to scale, and better aligned with real operational needs.
                 </p>
                 <div className="grid gap-3 sm:grid-cols-2">
                  {featureList.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3 text-on-surface-variant"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Dashboard gallery */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55 }}
              >
                <div className="mb-2 inline-flex items-center gap-2 text-primary">
                  <LayoutDashboard size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Live-style previews</span>
                </div>
                <h2 className="mb-3 font-headline text-2xl font-bold text-on-surface md:text-3xl">Dashboards & workspaces</h2>
                <p className="mb-8 max-w-2xl text-on-surface-variant">
                  Representative UI layers your teams interact with dailyÃ¢â‚¬â€analytics, operations, and collaboration in one
                  coherent experience.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {dashboardImages.map((src, i) => (
                    <motion.figure
                      key={`${src}-${i}`}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="overflow-hidden rounded-sm border border-outline-variant bg-surface shadow-lg"
                    >
                      <img src={src} alt={`${product.name} dashboard preview ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                      <figcaption className="border-t border-outline-variant/60 px-4 py-3 text-xs font-medium uppercase tracking-wide text-on-surface-variant">
                        {i === 0 ? 'Executive overview' : i === 1 ? 'Operations console' : 'Insights & reporting'}
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55 }}
                className="rounded-sm border border-outline-variant bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container px-6 py-12 md:px-12"
              >
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="mb-3 font-headline text-2xl font-bold text-on-surface md:text-3xl">
                    Ready to transform your {product.category?.toLowerCase() || 'business'} workflows?
                  </h2>
                  <p className="mb-6 text-on-surface-variant md:text-lg">
                    Join hundreds of teams already using TechnoSpyre to streamline operations and drive growth.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-bold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95"
                    >
                      Start Your Journey <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 border border-outline-variant text-on-surface px-8 py-3 rounded-sm font-bold text-sm transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-95"
                    >
                      Explore Other Solutions
                    </Link>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          <div className="flex flex-col gap-20">
            {/* Pricing Section */}
            <ProductDetailPricing productId={product.id} />

            {/* Clients */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55 }}
              className="px-6 py-12 text-center md:px-12"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Trusted by teams like yours</p>
              <h2 className="mb-8 font-headline text-2xl font-bold text-on-surface md:text-3xl">Companies shipping with TechnoSpyre</h2>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 opacity-90 grayscale transition-all duration-500 hover:grayscale-0 md:gap-x-14">
                {clientRows.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className={`h-9 w-9 shrink-0 rounded-sm ${c.color}`} aria-hidden />
                    <div className="text-left">
                      <div className="font-headline text-lg font-bold tracking-tight text-on-surface">{c.name}</div>
                      <div className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">{c.hint}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;




