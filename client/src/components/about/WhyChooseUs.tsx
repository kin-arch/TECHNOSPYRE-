import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background border-y border-outline-variant/30 overflow-hidden" aria-labelledby="why-choose-heading">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Why Technospyre
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="why-choose-heading" 
            className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Why people <span className="text-secondary">Choose us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Experience seamless processes, powerful results, and dedicated support. We blend innovation with expertise to propel your business forward.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative"
            >
              {/* Card Hover Glow */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg" />
              
              <div className="relative h-full flex flex-col justify-between rounded-2xl border border-outline-variant/40 bg-card/80 backdrop-blur-xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 overflow-hidden">
                
                {/* Decorative background element inside card */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/15 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500 ease-out">
                      {item.icon}
                    </div>
                    <div className="text-6xl font-black text-outline-variant/20 group-hover:text-primary/10 transition-colors duration-500 select-none">
                      0{i + 1}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-headline text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Animated bottom line accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
