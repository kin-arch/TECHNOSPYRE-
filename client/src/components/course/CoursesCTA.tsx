import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../base/buttons/button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const CoursesCTA: React.FC = () => {
  return (
    <section className="py-10 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight mb-8">Ready to Accelerate <br />Your <span className="text-primary italic">Career?</span></h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto font-light">Join the TechnoSpyre Academy today and gain the technical edge that industry leaders demand.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              href="/Contact"
              className='flex items-center justify-center gap-3 bg-primary hover:bg-foreground hover:scale-105 border hover:border-primary transition-all duration-300 text-primary-foreground font-semibold px-10 py-4 rounded-sm text-sm shadow-sm'
              iconTrailing={ArrowRight}
            >
              Apply for Admission
            </Button>
            <Button
              href="/Courses"
              className='flex items-center justify-center gap-3 bg-primary/20 border border-primary transition-all duration-200 hover:scale-105 hover:bg-primary/30 text-primary font-semibold px-10 py-4 rounded-sm text-sm shadow-sm'
            >
              Download Brochure (3MB)
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



