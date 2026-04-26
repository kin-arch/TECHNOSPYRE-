import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/about';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-surface-container-lowest border-y border-outline-variant/30" id="what-we-do">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col justify-cetner items-center gap-6 mb-12 md:mb-14">
          <div className="max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Trusted Globally
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-foreground"
            >
              Why People <span className="text-secondary">Trust Us</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl border border-outline-variant/40 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative h-40 md:h-44 overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-95" />

                 {/* Floating Icon */}
                 <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-outline-variant/50 shadow-lg text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 ease-out">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-6 h-6 text-current transition-colors duration-500' } as React.Attributes) }
                 </div>
              </div>

              <div className="flex flex-col flex-1 p-5 pt-3 md:p-6 md:pt-4 relative z-10">
                <h3 className="text-lg font-bold font-headline text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 mb-6 flex-1 text-sm">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                      <CheckCircle2 size={16} className="text-primary/70 shrink-0 mt-0.5" aria-hidden />
                      <span className="font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between w-full p-3 rounded-lg bg-surface-container-low border border-outline-variant/50 text-foreground font-semibold text-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm"
                >
                  Discuss this service
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
