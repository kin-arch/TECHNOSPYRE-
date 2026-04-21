import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const CoursesStats: React.FC = () => {
  return (
    <section className="py-6 bg-surface-container-low border-y border-surface-container relative z-40 backdrop-blur-sm px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { icon: <Users size={20} />, value: '1,200+', label: 'Registered Students' },
          { icon: <BookOpen size={20} />, value: '35+', label: 'Expert Mentors' },
          { icon: <Award size={20} />, value: '95%', label: 'Job Placement' },
          { icon: <Clock size={20} />, value: '24/7', label: 'Lab Access' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i * 0.1}
            className="flex flex-col items-center text-center gap-2"
          >
            <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary border border-primary/20">{s.icon}</div>
            <div>
              <p className="text-4xl font-headline font-bold text-primary">{s.value}</p>
              <p className="text-[10px] font-label uppercase tracking-[0.2em] text-surface mt-1">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



