import React from 'react';
import { cx as cn } from '@/utils/cx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'flat' | 'elevated' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className,
  header,
  footer,
  variant = 'flat',
  padding = 'md'
}) => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const variants = {
    flat: 'bg-surface-container border border-outline-variant',
    elevated: 'bg-surface-container border border-outline-variant shadow-card',
    glass: 'bg-surface-container/80 backdrop-blur-md border border-white/10 shadow-xl',
  };

  return (
    <div className={cn(
      'rounded-sm overflow-hidden transition-all duration-300',
      variants[variant],
      className
    )}>
      {header && (
        <div className="border-b border-outline-variant px-6 py-4">
          {header}
        </div>
      )}
      <div className={paddings[padding]}>
        {children}
      </div>
      {footer && (
        <div className="bg-surface-container-low border-t border-outline-variant px-6 py-4">
          {footer}
        </div>
      )}
    </div>
  );
};
