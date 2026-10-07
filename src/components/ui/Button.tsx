import React from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight, Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      withArrow = false,
      loading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer whitespace-nowrap shrink-0 disabled:opacity-50 disabled:cursor-not-allowed select-none group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]';

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-2 min-h-[38px] gap-1.5',
      md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
      lg: 'text-base px-6 py-3.5 min-h-[50px] gap-2.5',
    };

    const variantStyles = {
      primary:
        'bg-[#2DD4BF] text-[#0C0F12] font-semibold hover:bg-[#14B8A6] active:scale-[0.98] shadow-[0_2px_14px_rgba(45,212,191,0.28)] dark:bg-[#2DD4BF] dark:text-[#0C0F12] light:bg-[#0F766E] light:text-white',
      secondary:
        'bg-[var(--surface-2)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:bg-[var(--surface-1)] active:scale-[0.98]',
      outline:
        'bg-transparent text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98]',
      ghost:
        'bg-transparent text-[var(--text-primary)] hover:bg-[var(--surface-2)] hover:text-[var(--accent)] active:scale-[0.98]',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
        ) : (
          icon && <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {withArrow && !loading && (
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" aria-hidden="true" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
