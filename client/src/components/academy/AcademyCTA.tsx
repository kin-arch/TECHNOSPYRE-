import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const AcademyCTA: React.FC = () => {
  return (
    <section className="py-28 px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600" 
          className="w-full h-full object-cover opacity-10" 
          alt="Academy CTA"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-8">Ready to Accelerate <br />Your <span className="text-primary italic">Career?</span></h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">Join the TechnoSpyre Academy today and gain the technical edge that industry leaders demand.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-primary text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] transition-all active:scale-95 flex items-center gap-2">
              Apply for Admission <ChevronRight size={18} />
            </button>
            <button className="px-10 py-5 border border-outline-variant text-on-surface font-bold rounded-full hover:bg-white/5 transition-all">
              Download Academic Calendar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
