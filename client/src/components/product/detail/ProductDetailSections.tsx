import { motion } from 'motion/react';
import { CheckCircle2, LayoutDashboard, Sparkles, Zap, CreditCard, Calendar, ArrowRight, ChevronDown, Check, Info, ShieldCheck, Cpu, Globe, HelpCircle, HardDrive, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingData, formatPKR, type ModulePricing, type ProductPricing } from '@/data/pricing-config';

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
      <h2 className="mb-6 font-headline text-2xl font-semibold text-on-surface md:text-3xl">What you get</h2>
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
            <span className="leading-relaxed font-medium">{item}</span>
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
        <span className="text-xs font-semibold uppercase tracking-widest">Software Previews</span>
      </div>
      <h2 className="mb-3 font-headline text-2xl font-semibold text-on-surface md:text-3xl">See the Software in Action</h2>
      <p className="mb-8 max-w-2xl text-on-surface-variant font-medium">
        This is how your new system will look. It is designed to be simple, fast, and easy for everyone in your team to use.
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
            <img src={src} alt={`${productName} preview ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
            <figcaption className="border-t border-outline-variant/60 px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
              {i === 0 ? 'Admin Dashboard' : i === 1 ? 'Data Entry Screen' : 'Reports & Insights'}
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
        <h2 className="mb-3 font-headline text-2xl font-semibold text-on-surface md:text-3xl">
          Still have questions?
        </h2>
        <p className="mb-6 text-on-surface-variant md:text-lg font-medium">
          Our team is here to help you choose the best solution for your business. Get in touch for a free consultation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95"
          >
            Talk to an Expert <ArrowRight size={16} />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-outline-variant text-on-surface px-8 py-3 rounded-sm font-semibold text-sm transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-95"
          >
            Explore More Products
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

interface ProductDetailPricingProps {
  productId?: string;
}

export function ProductDetailPricing({ productId }: ProductDetailPricingProps) {
  const productPricing = productId ? pricingData.products.find((p) => p.id === productId) : undefined;

  // Fallback pricing
  const fallbackPricing: ProductPricing = {
    id: 'fallback',
    name: 'Custom Software',
    displayName: 'Custom Software',
    fullSuite: {
      implementationFee: 500000,
      monthlyMaintenanceFee: 15000,
      includes: ['Full Software License', 'All Modules Included', 'System Setup', 'Training Sessions'],
    },
    modules: [],
    pricingRules: {
      minimumModulesForPurchase: 3,
      bulkDiscounts: [],
    },
  };

  const pricing: ProductPricing = productPricing || fallbackPricing;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="relative rounded-sm border border-outline-variant bg-surface-container-low p-8 md:p-10"
    >
      <div className="relative z-10">
        <div className="mb-8">
          <div className="mb-2 inline-flex items-center gap-2 text-primary">
            <CreditCard size={20} />
            <span className="text-xs font-semibold uppercase tracking-widest">Pricing Plan</span>
          </div>
          <h2 className="mb-3 font-headline text-2xl font-semibold text-on-surface md:text-3xl">Software Cost & Support</h2>
          <p className="max-w-2xl text-on-surface-variant font-medium">
            We offer simple and honest pricing for our {pricing.displayName}. No hidden fees, just direct costs.
          </p>
        </div>

        {productPricing ? (
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            
            {/* LEFT SIDE: ONE-TIME SETUP COST (ALL MODULES) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-surface border border-outline-variant rounded-sm p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group shadow-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
                  <HardDrive size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface">One-time Cost</h3>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">Software License (All Modules Included)</p>
                </div>
              </div>

              <div className="mb-8 p-5 rounded-sm bg-surface-container border border-outline-variant/40">
                <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase tracking-wide">Starting Setup Fee</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-on-surface">Rs. {formatPKR(pricing.fullSuite.implementationFee)}</span>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-2 font-medium">One-time payment to get **all modules** and full software setup.</p>
              </div>

              <div className="flex-grow">
                <h4 className="text-sm font-semibold text-on-surface mb-4 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" /> What you get:
                </h4>
                 <ul className="space-y-2.5">
                   {pricing.fullSuite.includes.slice(0, 6).map((item, i) => (
                     <li key={i} className="flex items-start gap-2.5 text-xs text-on-surface-variant font-medium">
                       <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                       <span>{item}</span>
                     </li>
                   ))}
                   <li className="flex items-center gap-2 text-xs font-bold text-primary pt-1">
                     <Sparkles size={14} />
                     <span>+ and much more...</span>
                   </li>
                 </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-outline-variant/60">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-sm bg-primary/5 border border-primary/10 text-center">
                    <p className="text-[9px] font-semibold text-primary uppercase mb-0.5">Ownership</p>
                    <p className="text-[10px] font-bold">Life-time License</p>
                  </div>
                  <div className="p-2.5 rounded-sm bg-primary/5 border border-primary/10 text-center">
                    <p className="text-[9px] font-semibold text-primary uppercase mb-0.5">Savings</p>
                    <p className="text-[10px] font-bold">No per-user cost</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: MONTHLY SUPPORT & BILL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-surface border-2 border-primary rounded-sm p-6 md:p-8 shadow-xl relative overflow-hidden"
            >
              {/* RECOMMENDED BADGE */}
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-bl-sm">
                  Recommended
                </div>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-sm bg-primary flex items-center justify-center text-white">
                  <Headset size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface">Monthly Fee</h3>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">Support & Updates</p>
                </div>
              </div>

              <div className="mb-8 p-5 rounded-sm bg-primary/5 border border-primary/10">
                <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">Monthly Bill</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-on-surface">Rs. {formatPKR(pricing.fullSuite.monthlyMaintenanceFee)}</span>
                  <span className="text-xs font-semibold text-on-surface-variant">/ month</span>
                </div>
                <p className="text-[10px] text-on-surface-variant mt-2 font-medium">Regular monthly payment for help and updates.</p>
              </div>

              <div className="flex-grow">
                <h4 className="text-sm font-semibold text-on-surface mb-4 flex items-center gap-2">
                  <Zap size={16} className="text-primary" /> What this includes:
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-xs text-on-surface-variant font-medium">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-on-surface">24/7 Support</p>
                      <p className="text-[10px]">We are always here to help you.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-on-surface-variant font-medium">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-on-surface">New Updates</p>
                      <p className="text-[10px]">Get all new features automatically.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-on-surface-variant font-medium">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-on-surface">Data Backups</p>
                      <p className="text-[10px]">Your data is safe and backed up.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-3 bg-primary py-4 rounded-sm font-bold text-white text-sm transition-all hover:shadow-[0_10px_30px_-10px_rgba(var(--primary),0.5)] active:scale-95"
                >
                  Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-16 rounded-sm border border-dashed border-outline-variant bg-surface-container/30">
            <h3 className="text-xl font-bold text-on-surface mb-2">Custom Quote Needed</h3>
            <p className="text-on-surface-variant max-w-sm mx-auto mb-8 font-medium">
              Every business is different. Contact us for a price that works for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary px-8 py-3 rounded-sm font-semibold text-white transition-all"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        )}

        {/* TRUST SECTION */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-outline-variant">
           <div className="flex flex-col items-center text-center p-4">
             <ShieldCheck size={28} className="text-primary mb-3" />
             <h5 className="font-semibold text-sm mb-1">Safe & Secure</h5>
             <p className="text-[10px] text-on-surface-variant leading-relaxed font-medium">Your data is fully protected.</p>
           </div>
           <div className="flex flex-col items-center text-center p-4">
             <Cpu size={28} className="text-primary mb-3" />
             <h5 className="font-semibold text-sm mb-1">Fast Software</h5>
             <p className="text-[10px] text-on-surface-variant leading-relaxed font-medium">Reliable performance on all devices.</p>
           </div>
           <div className="flex flex-col items-center text-center p-4">
             <Globe size={28} className="text-primary mb-3" />
             <h5 className="font-semibold text-sm mb-1">Works Everywhere</h5>
             <p className="text-[10px] text-on-surface-variant leading-relaxed font-medium">Access your system from anywhere.</p>
           </div>
        </div>
      </div>
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
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Trusted by businesses in Pakistan</p>
      <h2 className="mb-8 font-headline text-2xl font-semibold text-on-surface md:text-3xl">Companies already using our systems</h2>
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
              <div className="font-headline text-lg font-semibold tracking-tight text-on-surface">{c.name}</div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-on-surface-variant">{c.hint}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
