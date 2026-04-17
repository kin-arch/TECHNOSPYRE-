import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Eye } from 'lucide-react';

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export const MissionVision: React.FC = () => {
  return (
    <section className="py-28 bg-surface-container-low relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {[
            { icon: <Rocket size={22} />, color: 'primary', title: 'Our Mission', desc: 'To empower enterprises through disruptive engineering, fostering a world where technology and human intuition synergize to solve the most complex challenges of our generation.' },
            { icon: <Eye size={22} />, color: 'primary', title: 'Our Vision', desc: 'Becoming the global epicenter for digital literacy and high-end technological architecture, setting the standard for the next industrial revolution.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-sm bg-surface-container border border-outline-variant hover:border-primary/30 transition-all duration-500 group"
            >
              <div className={`w-12 h-12 bg-${item.color}/15 rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-${item.color}`}>
                {item.icon}
              </div>
              <h2 className="font-headline text-2xl font-bold mb-3">{item.title}</h2>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
            alt="Team vision"
            className="rounded-sm shadow-2xl border border-outline-variant w-full object-cover transition-all duration-700"
          />
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 blur-3xl rounded-sm" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/10 blur-3xl rounded-sm" />
        </motion.div>
      </div>
    </section>
  );
};
