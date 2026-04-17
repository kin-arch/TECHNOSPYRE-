import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../base/buttons/button';

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
        <div className="absolute inset-0" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-8">Ready to Accelerate <br />Your <span className="text-primary italic">Career?</span></h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">Join the TechnoSpyre Academy today and gain the technical edge that industry leaders demand.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              href="/academy"
              size="lg"
              color="primary"
              iconTrailing={ArrowRight}
            >
              Apply for Admission
            </Button>
            <Button
              href="/academy"
              size="lg"
              color="secondary"
            >
              Download Academic Calendar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
