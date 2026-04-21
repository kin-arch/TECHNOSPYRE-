import { motion } from 'motion/react';
import { CheckCircle2, LayoutDashboard, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC2-compliant with end-to-end encryption, role-based access control, and comprehensive audit trails.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second response times and real-time data synchronization across all endpoints.',
  },
  {
    icon: LayoutDashboard,
    title: 'Intuitive Dashboard',
    description: 'Customizable dashboards with drag-and-drop widgets, advanced filtering, and actionable insights at a glance.',
  },
  {
    icon: CheckCircle2,
    title: 'Seamless Integrations',
    description: 'Connect with 100+ pre-built integrations and custom APIs to fit your existing tech stack perfectly.',
  },
];

export function ProductDetailFeatures() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55 }}
      className="rounded-sm border border-outline-variant bg-gradient-to-br from-surface-container-low to-surface-container p-8 md:p-10"
    >
      <div className="mb-2 flex items-center gap-2 text-primary">
        <Zap size={20} />
        <span className="text-xs font-bold uppercase tracking-widest">Key Features</span>
      </div>
      <h2 className="mb-8 font-headline text-2xl font-bold text-on-surface md:text-3xl">Built for scale</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-primary/20 bg-primary/10">
              <feature.icon size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-on-surface">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}


