import React from 'react';
import { cx as cn } from '@/utils/cx';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  icon, 
  variant = 'primary', 
  size = 'md',
  className 
}) => {
  const variants = {
    primary: 'bg-primary/5 text-primary border-primary/20',
    secondary: 'bg-secondary/5 text-secondary border-secondary/20',
    accent: 'bg-accent/5 text-accent border-accent/20',
    outline: 'bg-transparent text-on-surface-variant border-outline-variant',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <div className={cn(
      'inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.15em] rounded-sm border shadow-xs-skeuomorphic',
      variants[variant],
      sizes[size],
      className
    )}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </div>
  );
};
