import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'warning' | 'outline';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'neutral',
  size = 'md',
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-mono',
    md: 'text-xs px-2.5 py-1 font-mono',
  };

  const variantStyles = {
    neutral: 'bg-[var(--surface-2)] text-[var(--text-muted)] border border-[var(--border-color)]',
    accent: 'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-medium',
    warning: 'bg-[#E7B65C]/10 text-[#E7B65C] border border-[#E7B65C]/20 font-medium',
    outline: 'bg-transparent text-[var(--text-muted)] border border-[var(--border-color)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md uppercase tracking-wider select-none whitespace-nowrap shrink-0',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
