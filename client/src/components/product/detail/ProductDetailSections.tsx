import { motion } from 'motion/react';
import { CheckCircle2, LayoutDashboard, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronDown, CreditCard } from 'lucide-react';

interface ProductDetailHighlightsProps {
  items: string[];
}

export function ProductDetailHighlights({ items }: ProductDetailHighlightsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55 }}
      className="rounded-sm border border-outline-variant bg-surface-container p-8 md:p-10"
    >
      <h2 className="mb-6 font-headline text-2xl font-bold text-on-surface md:text-3xl">What you get</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
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
  );
}

interface ProductDetailGalleryProps {
  productName: string;
  images: string[];
}

export function ProductDetailGallery({ productName, images }: ProductDetailGalleryProps) {
  return (
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
        Representative UI layers your teams interact with daily, analytics, operations, and collaboration in one
        coherent experience.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((src, i) => (
          <motion.figure
            key={`${src}-${i}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="overflow-hidden rounded-sm border border-outline-variant bg-surface shadow-lg"
          >
            <img src={src} alt={`${productName} dashboard preview ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
            <figcaption className="border-t border-outline-variant/60 px-4 py-3 text-xs font-medium uppercase tracking-wide text-on-surface-variant">
              {i === 0 ? 'Executive overview' : i === 1 ? 'Operations console' : 'Insights & reporting'}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}

interface ProductDetailCTAProps {
  category?: string;
}

export function ProductDetailCTA({ category }: ProductDetailCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55 }}
      className="rounded-sm border border-outline-variant bg-gradient-to-br from-primary/10 via-primary/5 to-surface-container px-6 py-12 md:px-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-3 font-headline text-2xl font-bold text-on-surface md:text-3xl">
          Ready to transform your {category?.toLowerCase() || 'business'} workflows?
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
  );
}

interface ProductDetailPricingProps {}

export function ProductDetailPricing({}: ProductDetailPricingProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="rounded-sm border border-outline-variant bg-gradient-to-br from-surface-container-low to-surface-container p-8 md:p-10"
    >
      <div className="mb-2 flex items-center gap-2 text-primary">
        <CreditCard size={20} />
        <span className="text-xs font-bold uppercase tracking-widest">Pricing Plans</span>
      </div>
      <h2 className="mb-8 font-headline text-2xl font-bold text-on-surface md:text-3xl">Choose your plan</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-sm border-2 border-primary bg-surface-container p-6 shadow-lg"
        >
          <div className="absolute right-0 top-0 rounded-bl-sm bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            BEST VALUE
          </div>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-lg font-bold text-on-surface">
              <Calendar size={20} className="text-primary" />
              <span>Lifetime Access</span>
            </div>
            <p className="mt-1 text-sm text-on-surface-variant">One-time payment, perpetual access</p>
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-on-surface">â‚¨ 699,999</span>
            <span className="ml-2 text-sm text-on-surface-variant line-through">â‚¨ 1,119,999</span>
            <span className="ml-2 text-sm font-bold text-emerald-600">Save 37%</span>
          </div>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Full software license (perpetual)</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>All future updates included</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Priority 24/7 support</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Custom onboarding session</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Source code included</span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="flex w-full items-center justify-center gap-2 bg-primary py-3 rounded-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95"
          >
            Get Lifetime Access <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-sm border border-outline-variant bg-surface p-6 shadow-lg"
        >
          <div className="mb-4">
            <div className="flex items-center gap-2 text-lg font-bold text-on-surface">
              <Zap size={20} className="text-primary" />
              <span>Monthly Plan</span>
            </div>
            <p className="mt-1 text-sm text-on-surface-variant">Flexible subscription, cancel anytime</p>
          </div>
          <div className="mb-4">
            <span className="text-3xl font-bold text-on-surface">â‚¨ 41,999</span>
            <span className="ml-2 text-sm text-on-surface-variant">/month</span>
          </div>
          <ul className="mb-6 space-y-3">
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Full feature access</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Regular updates & new features</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Email & chat support</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Standard onboarding</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Cloud hosting included</span>
            </li>
          </ul>
          <Link
            to="/contact"
            className="flex w-full items-center justify-center gap-2 border border-primary py-3 rounded-sm font-bold text-primary transition-all duration-300 hover:bg-primary/10 active:scale-95"
          >
            Start Monthly Plan <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6 text-center text-sm text-on-surface-variant"
      >
        Need a custom enterprise solution? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for tailored pricing.
      </motion.p>
    </motion.section>
  );
}

interface ClientRow {
  name: string;
  hint: string;
  color: string;
}

const clientRows: ClientRow[] = [
  { name: 'City Hospital', hint: 'Healthcare', color: 'bg-emerald-600' },
  { name: 'Retail Nexus', hint: 'Logistics', color: 'bg-blue-600' },
  { name: 'Global Logistics', hint: 'Supply Chain', color: 'bg-orange-600' },
  { name: 'Apex Finance', hint: 'Professional Services', color: 'bg-teal-600' },
  { name: 'Prime Resorts', hint: 'Hospitality', color: 'bg-sky-600' },
];

interface ProductDetailClientsProps {}

export function ProductDetailClients({}: ProductDetailClientsProps) {
  return (
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
  );
}



