import React from 'react';
import { cn } from '../../lib/utils';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'surface' | 'elevated' | 'glass';
  glow?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, variant = 'surface', glow = false, interactive = false, children, ...props }, ref) => {
    const variantStyles = {
      surface: 'bg-[var(--surface-1)] border border-[var(--border-color)]',
      elevated: 'bg-[var(--surface-2)] border border-[var(--border-color)] shadow-sm',
      glass: 'bg-[var(--surface-1)]/80 backdrop-blur-md border border-[var(--border-color)] shadow-lg',
    };

    const glowStyles = glow
      ? 'border-[var(--accent)]/60 shadow-[0_0_24px_rgba(45,212,191,0.12)]'
      : '';

    const interactiveStyles = interactive
      ? 'hover:border-[var(--accent)]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer'
      : 'transition-colors duration-200';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6 sm:p-7 relative overflow-hidden',
          variantStyles[variant],
          glowStyles,
          interactiveStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Panel.displayName = 'Panel';

export const PanelHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn('space-y-1.5 pb-4 mb-4 border-b border-[var(--border-subtle)]', className)} {...props}>
    {children}
  </div>
);
PanelHeader.displayName = 'PanelHeader';

export const PanelTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, children, ...props }) => (
  <h3 className={cn('text-lg font-display font-bold text-[var(--text-primary)] tracking-tight', className)} {...props}>
    {children}
  </h3>
);
PanelTitle.displayName = 'PanelTitle';

export const PanelDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...props }) => (
  <p className={cn('text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed', className)} {...props}>
    {children}
  </p>
);
PanelDescription.displayName = 'PanelDescription';

export const PanelBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn('space-y-3', className)} {...props}>
    {children}
  </div>
);
PanelBody.displayName = 'PanelBody';

export const PanelFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={cn('pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between', className)} {...props}>
    {children}
  </div>
);
PanelFooter.displayName = 'PanelFooter';
