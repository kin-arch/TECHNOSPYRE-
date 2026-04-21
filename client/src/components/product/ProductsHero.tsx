import React from 'react';
import { motion, Variants } from 'motion/react';
import { CheckCircle2, Globe, Settings, ShieldCheck, Sparkles } from 'lucide-react';

export const SolutionsHero: React.FC = () => {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-20 md:pb-20 mx-auto px-6 xl:px-20 overflow-hidden bg-background">
      <div className="container-custom relative z-10">

        {/* Top Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20"
          variants={containerVars}
          initial="initial"
          animate="animate"
        >
          {/* Left Side: Main Text */}
          <div className="max-w-xl">
            <motion.div variants={itemVars} className="mb-6">
              <span className="px-4 py-1.5 rounded-sm bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2 w-fit">
                <Sparkles size={14} />
                Enterprise Evolution
              </span>
            </motion.div>

            <motion.h1
              variants={itemVars}
              className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              The Software Suite for <span className="text-primary">Modern Systems</span>
            </motion.h1>

            <motion.p
              variants={itemVars}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              From multi-specialty hospitals to global logistics networks, our precision-engineered ERP systems empower every layer of your business with real-time intelligence and seamless coordination.
            </motion.p>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="space-y-6">
            <motion.div
              variants={itemVars}
              className="group flex gap-5 p-6 rounded-sm bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Settings size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Unified Operations</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Break down silos with interconnected modules that share a single source of truth across your entire organization.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVars}
              className="group flex gap-5 p-6 rounded-sm bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Enterprise Security</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Military-grade encryption and role-based access controls ensure your sensitive operational data remains protected and compliant.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



