import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Star } from 'lucide-react';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const AcademyTeaser: React.FC = () => {
  return (
    <section className="py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80"
                alt="Academy 1"
                className="rounded-sm h-64 w-full object-cover shadow-xl shadow-primary/15"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80"
                alt="Academy 2"
                className="rounded-sm h-64 w-full object-cover mt-12 shadow-xl shadow-primary/15"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/6 blur-[80px]" />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-surface-container border border-outline-variant rounded-sm p-5 shadow-2xl inner-highlight"
            >
              <div className="flex items-center gap-3">
                <Star className="text-primary" size={22} />
                <div>
                  <div className="font-headline font-bold text-lg text-primary">98%</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-wider">Placement Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase block">The Elite Academy</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">Empowering the next <br /><span className="text-primary">Legacy of Coders</span></h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Technospyre Academy is an incubator for high-level engineering talent, bridging the gap between theory and the demands of modern enterprise IT.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Users size={18} />, value: '500+', label: 'Graduates Monthly' },
                { icon: <Award size={18} />, value: '40+', label: 'Courses Available' },
              ].map((s) => (
                <div key={s.label} className="flex-col sm:flex-row flex items-center max-md:text-center gap-3 p-5 rounded-sm bg-surface-container border border-outline-variant">
                  <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center text-secondary shrink-0">{s.icon}</div>
                  <div>
                    <p className="text-3xl font-headline font-bold text-primary">{s.value}</p>
                    <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/academy" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-bold rounded-sm hover:brightness-110 transition-all shadow-xl shadow-secondary/10">
              Browse Courses <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
