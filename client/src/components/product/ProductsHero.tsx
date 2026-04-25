 import React from 'react';
 import { motion, Variants } from 'motion/react';
 import { CheckCircle2, Settings, ShieldCheck, Sparkles, ArrowRight, Target } from 'lucide-react';
 import { Link } from 'react-router-dom';

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
     <section className="relative pt-12 pb-16 md:pt-14 md:pb-18 mx-auto px-4 sm:px-6 xl:px-16 overflow-hidden bg-background">
       <div className="container-custom relative z-10">

         {/* Main Value Proposition */}
         <motion.div
           className="max-w-4xl mx-auto text-center mb-10"
           variants={containerVars}
           initial="initial"
           animate="animate"
         >
           <motion.div variants={itemVars} className="mb-4">
             <span className="px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 w-fit mx-auto">
               <Sparkles size={12} />
               Purpose-Built Software
             </span>
           </motion.div>

           <motion.h1
             variants={itemVars}
             className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-tight"
           >
             Powerful Software for
             <br />
             <span className="text-primary">Real Business Results</span>
           </motion.h1>

           <motion.p
             variants={itemVars}
             className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
           >
             Ready-to-deploy solutions built for specifics. Streamline operations, enhance productivity, and drive growth with our proven industry software.
           </motion.p>

           <motion.div
             variants={itemVars}
             className="mt-6 flex flex-wrap items-center justify-center gap-3"
           >
             <Link
               to="/contact"
               className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 md:px-8 md:py-3 rounded-sm font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
             >
               Get Started
               <ArrowRight size={16} className="md:w-5 md:h-5" />
             </Link>
             <a
               href="#solutions"
               className="inline-flex items-center justify-center gap-2 border border-border bg-card hover:bg-primary/5 text-foreground px-6 py-2.5 md:px-8 md:py-3 rounded-sm font-bold text-sm md:text-base transition-all duration-300"
             >
               View Solutions
             </a>
           </motion.div>
         </motion.div>

         {/* Trust Indicators */}
         <motion.div
           className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
           variants={containerVars}
           initial="initial"
           animate="animate"
         >
           {[
             { icon: <Settings size={20} />, label: '20+ Industry Solutions' },
             { icon: <ShieldCheck size={20} />, label: 'Enterprise-Grade Security' },
             { icon: <Target size={20} />, label: 'Targeted Workflows' },
             { icon: <CheckCircle2 size={20} />, label: 'Proven Implementation' }
           ].map((item, i) => (
             <motion.div
               key={i}
               variants={itemVars}
               className="flex items-center justify-center gap-2.5 p-3 rounded-sm bg-surface-container/50 border border-border/40"
             >
               <span className="text-primary">{item.icon}</span>
               <span className="text-xs md:text-sm font-semibold text-on-surface-variant">{item.label}</span>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 };



