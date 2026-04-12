import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Calendar, Layers, Award, CreditCard, ChevronRight, Info, ChevronLeft } from 'lucide-react';
import { diplomasData } from '../../data/academy';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const DiplomaSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % diplomasData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + diplomasData.length) % diplomasData.length);
  };

  const currentDiploma = diplomasData[currentIndex];

  const slideVariants = {
    hidden: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 50 : -50,
      filter: 'blur(10px)',
    }),
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 1,
      }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -50 : 50,
      filter: 'blur(10px)',
      transition: {
        duration: 0.2
      }
    })
  };

  return (
    <section className="py-28 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div className="space-y-8 overflow-hidden relative">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase block">Premier Certification</span>
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="cursor-pointer w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/30 transition-all active:scale-95"
                  aria-label="Previous Diploma"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  className="cursor-pointer w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary/10 hover:border-primary/30 transition-all active:scale-95"
                  aria-label="Next Diploma"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-6">
                    {currentDiploma.title}
                  </h2>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary rounded-full text-primary text-sm font-bold mb-8">
                    <Calendar size={16} /> Total Duration: {currentDiploma.duration}
                  </div>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                    A comprehensive program designed to build a rock-solid foundation in modern computing, development, and IT management.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {currentDiploma.semesters.map((sem, i) => (
                    <motion.div 
                      key={sem.title}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl bg-surface-container border border-outline-variant inner-highlight group transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-5 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                        {i === 0 ? <Layers size={20} /> : <Award size={20} />}
                      </div>
                      <h3 className="text-xl font-bold font-headline mb-4 text-surface">{sem.title}</h3>
                      <ul className="space-y-3">
                        {sem.subjects.map(subject => (
                          <li key={subject} className="flex items-start gap-3 text-sm text-on-surface-variant">
                            <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                            <span className="leading-tight">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-high rounded-3xl border border-outline-variant overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-8 border-b border-outline-variant bg-gradient-to-r from-secondary/10 to-transparent">
                    <div className="flex items-center gap-3 text-primary mb-3">
                      <CreditCard size={20} />
                      <span className="font-label text-xs font-bold tracking-[0.2em] uppercase">Financial Overview</span>
                    </div>
                    <h3 className="text-3xl font-headline font-bold">
                      {currentDiploma.title.includes('DIT') ? 'DIT Fee Structure' : 
                       currentDiploma.title.includes('CIT') ? 'CIT Fee Structure' : 'IICT Fee Structure'}
                    </h3>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      {currentDiploma.feeStructure.map((item) => (
                        <div key={item.label} className="flex justify-between items-center py-4 border-b border-outline-variant last:border-0 group">
                          <span className="text-on-surface-variant group-hover:text-on-surface transition-colors">{item.label}</span>
                          <span className="text-xl font-headline font-bold text-primary">PKR {item.amount}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-8 py-4 bg-secondary text-on-secondary rounded-xl font-bold hover:shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                      Enroll in Course <ChevronRight size={18} />
                    </button>
                    <p className="text-center text-[10px] text-on-surface-variant uppercase mt-12 tracking-widest flex items-center justify-center gap-2">
                      <Info size={12} /> Prices are subject to board regulations
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
