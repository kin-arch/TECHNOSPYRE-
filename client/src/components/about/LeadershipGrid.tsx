import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { leadership } from '../../data/about';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } }),
};

export const LeadershipGrid: React.FC = () => {
  return (
    <section className="py-28 bg-surface-container-low border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <span className="font-label text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The People Behind It</span>
          <h2 className="font-headline text-4xl font-bold border-l-4 border-primary pl-6">Meet the Leadership</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leadership.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-primary border border-primary/30 px-3 py-1.5 rounded-full bg-surface-container/80 backdrop-blur-md">
                    Connect <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
              <div className="px-2">
                <h3 className="font-headline text-2xl font-bold">{member.name}</h3>
                <p className="font-label text-primary text-xs font-semibold tracking-wider mb-2 uppercase">{member.role}</p>
                <p className="text-on-surface-variant text-sm">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
