import React from 'react';
import { motion } from 'framer-motion';

import companyImage from '/CompanyImg.avif';

const metrics = [
  { value: '200+', label: 'Projects delivered' },
  { value: '32+', label: 'Partner organizations' },
  { value: '12+', label: 'Years building' },
  { value: '500+', label: 'Students trained' },
];

export const AboutCompany: React.FC = () => {
  return (
    <section id="about-company" className="py-24 md:py-28 bg-background border-b border-border/60 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <header className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About the company
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Learn more about who we are, how we work, and the outcomes we drive for teams across Pakistan and beyond.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative rounded-sm overflow-hidden border border-border bg-muted aspect-[4/3] shadow-sm"
          >
            <img
              src={companyImage}
              alt="Abstract technology and light"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Build better, launch faster</p>
            <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Build great products, faster than ever
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Technospyre combines product thinking, solid engineering, and hands-on training so your organization gets software people actually use not shelf-ware.
            </p>

            <dl className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-sm border border-border bg-card px-4 py-4 sm:px-5 sm:py-5">
                  <dt className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mb-1">{m.label}</dt>
                  <dd className="font-headline text-2xl sm:text-3xl font-bold text-foreground tabular-nums">{m.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};




