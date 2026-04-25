import { motion } from 'motion/react';
import { CheckCircle2, LayoutDashboard, Sparkles, Zap, CreditCard, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
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

interface ProductDetailPricingProps {
  productId?: string;
}

export function ProductDetailPricing({ productId }: ProductDetailPricingProps) {
  const productPricing = productId ? pricingData.products.find((p) => p.id === productId) : undefined;

  // Fallback pricing if no config found
  const fallbackPricing: ProductPricing = {
    id: 'fallback',
    name: 'Custom Solution',
    displayName: 'Custom Solution',
    fullSuite: {
      implementationFee: 2000000,
      monthlyMaintenanceFee: 50000,
      includes: ['Full software license', 'All future updates', 'Priority support', 'Onboarding session'],
    },
    modules: [],
    pricingRules: {
      minimumModulesForPurchase: 3,
      bulkDiscounts: [],
    },
  };

  const pricing: ProductPricing = productPricing || fallbackPricing;

  const formatPKR = (amount: number) => {
    return new Intl.NumberFormat('en-PK').format(amount).replace(/,/g, ',');
  };

  const totalModuleSetup = pricing.modules.reduce((sum, m) => sum + (m as ModulePricing).setupFee, 0);
  const totalModuleMonthly = pricing.modules.reduce((sum, m) => sum + (m as ModulePricing).monthlyFee, 0);
  const savings = totalModuleSetup - pricing.fullSuite.implementationFee;

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

      {productPricing ? (
        <>
          {/* Full Suite Pricing */}
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            {/* Full Suite Card */}
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
                  <span>Full Suite License</span>
                </div>
                <p className="mt-1 text-sm text-on-surface-variant">Complete implementation + ongoing support</p>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-on-surface">Rs. {formatPKR(pricing.fullSuite.implementationFee)}</span>
                <span className="ml-2 text-sm text-on-surface-variant line-through">
                  Rs. {formatPKR(totalModuleSetup)}
                </span>
                {savings > 0 && (
                  <span className="ml-2 text-sm font-bold text-emerald-600">
                    Save {Math.round((savings / totalModuleSetup) * 100)}%
                  </span>
                )}
              </div>
              <div className="mb-4 border-t border-outline-variant/30 pt-4">
                <p className="text-xs text-on-surface-variant mb-2">Monthly Maintenance</p>
                <span className="text-2xl font-bold text-primary">Rs. {formatPKR(pricing.fullSuite.monthlyMaintenanceFee)}</span>
                <span className="text-sm text-on-surface-variant">/month</span>
              </div>
              <ul className="mb-6 space-y-3">
                {pricing.fullSuite.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {pricing.fullSuite.benefits && pricing.fullSuite.benefits.length > 0 && (
                <div className="mb-6 rounded-sm bg-primary/5 p-3 border border-primary/15">
                  <p className="text-xs font-semibold text-primary mb-1.5">Suite Benefits</p>
                  <ul className="space-y-1">
                    {pricing.fullSuite.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-on-surface-variant flex items-start gap-1.5">
                        <span className="text-primary">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 bg-primary py-3 rounded-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,146,60,0.4)] active:scale-95"
              >
                Request Full Suite Quote <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Modular Pricing Card */}
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
                  <span>Modular / À La Carte</span>
                </div>
                <p className="mt-1 text-sm text-on-surface-variant">Build your custom solution module by module</p>
              </div>

              <div className="mb-4 max-h-64 overflow-y-auto rounded-sm border border-border/40 bg-surface-container/50 p-4">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-surface-container border-b border-outline-variant/30">
                    <tr>
                      <th className="text-left py-2 pr-2 text-on-surface-variant font-semibold">Module</th>
                      <th className="text-right py-2 pl-2 text-on-surface-variant font-semibold">Setup</th>
                      <th className="text-right py-2 pl-2 text-on-surface-variant font-semibold">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.modules.map((module: ModulePricing) => (
                      <tr key={module.id} className="border-b border-outline-variant/10 last:border-0">
                        <td className="py-2 pr-2 text-on-surface">
                          <div>
                            <p className="font-medium text-xs">{module.name}</p>
                            {module.isAddon && (
                              <span className="text-[10px] text-primary/70 italic">(add-on)</span>
                            )}
                          </div>
                        </td>
                        <td className="py-2 pl-2 text-right text-on-surface-variant">
                          {module.setupFee > 0 ? `Rs. ${formatPKR(module.setupFee)}` : '—'}
                        </td>
                        <td className="py-2 pl-2 text-right text-on-surface-variant">
                          {module.monthlyFee > 0 ? `Rs. ${formatPKR(module.monthlyFee)}` : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-sm bg-surface-container/70 border border-outline-variant/30">
                  <p className="text-on-surface-variant mb-1">Total (all modules)</p>
                  <p className="text-lg font-bold text-on-surface">Rs. {formatPKR(totalModuleSetup)}</p>
                  <p className="text-xs text-on-surface-variant">one-time</p>
                </div>
                <div className="p-3 rounded-sm bg-surface-container/70 border border-outline-variant/30">
                  <p className="text-on-surface-variant mb-1">Total Monthly</p>
                  <p className="text-lg font-bold text-on-surface">Rs. {formatPKR(totalModuleMonthly)}</p>
                  <p className="text-xs text-on-surface-variant">recurring</p>
                </div>
              </div>

              <div className="mb-4 rounded-sm bg-primary/5 border border-primary/15 p-3">
                <p className="text-xs text-on-surface-variant">
                  <span className="font-semibold text-primary">Minimum {pricing.pricingRules?.minimumModulesForPurchase || 3} modules</span> required for modular purchase.
                </p>
                {pricing.pricingRules?.bulkDiscounts && pricing.pricingRules.bulkDiscounts.length > 0 && (
                  <p className="text-xs text-on-surface-variant mt-1">
                    Bulk discounts: {pricing.pricingRules.bulkDiscounts.map((d: { threshold: number; discountPercentage: number }) => 
                      `${d.threshold}+ modules → ${d.discountPercentage}% off`
                    ).join(', ')}.
                  </p>
                )}
              </div>

              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 border border-primary py-3 rounded-sm font-bold text-primary transition-all duration-300 hover:bg-primary/10 active:scale-95"
              >
                Build Custom Quote <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Educational/Government Discount Notice */}
          {(pricingData.configuration.educationalInstitutionDiscount || pricingData.configuration.governmentDiscount) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 rounded-sm border border-primary/20 bg-primary/5 p-4 text-center"
            >
              <p className="text-sm text-on-surface-variant">
                <span className="font-semibold text-primary">Special discounts available:</span>{' '}
                {pricingData.configuration.educationalInstitutionDiscount && (
                  <span className="inline-block mx-1">Educational institutions get {pricingData.configuration.educationalInstitutionDiscount}% off</span>
                )}
                {pricingData.configuration.governmentDiscount && (
                  <span className="inline-block mx-1">Government organizations receive {pricingData.configuration.governmentDiscount}% off</span>
                )}
                {pricingData.configuration.nonProfitDiscount && (
                  <span className="inline-block mx-1">Non-profits get {pricingData.configuration.nonProfitDiscount}% off</span>
                )}
              </p>
            </motion.div>
          )}

          {/* Educational Institution Special Pricing */}
          {productId === 'school-management' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 rounded-sm border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100/30 dark:from-emerald-950/20 dark:to-emerald-900/10 p-6 md:p-8 text-center"
            >
              <div className="inline-flex items-center justify-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Special Education Pricing</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 dark:text-emerald-300 mb-2">
                Starting from Rs. 15 <span className="text-lg md:text-xl font-medium">per student</span>
              </h3>
              <p className="text-sm md:text-base text-emerald-700 dark:text-emerald-400 max-w-xl mx-auto mb-5">
                Affordable, scalable pricing designed for schools of all sizes. No hidden costs. Includes all modules and support.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-sm font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Request Education Quote
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}

          {/* Custom Enterprise CTA */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 text-center text-sm text-on-surface-variant"
          >
            Need a custom enterprise solution? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for tailored pricing.
          </motion.p>
        </>
      ) : (
        /* Fallback when no pricing data exists for product */
        <div className="text-center py-8">
          <p className="text-on-surface-variant mb-4">
            Detailed pricing for this product is being finalized. Please contact us for a custom quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-sm font-bold text-primary-foreground transition-all hover:shadow-lg"
          >
            Request Pricing <ArrowRight size={16} />
          </Link>
        </div>
      )}
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



