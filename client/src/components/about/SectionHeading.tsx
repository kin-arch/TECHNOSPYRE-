import React from 'react';
import { motion } from 'framer-motion';

type Align = 'left' | 'center';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: Align;
  className?: string;
};

export const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignCls} ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">{eyebrow}</p>
      <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-foreground text-balance leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl text-pretty ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};
