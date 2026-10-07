import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  headline: string | React.ReactNode;
  intro?: string | React.ReactNode;
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  eyebrow,
  headline,
  intro,
  align = 'left',
  size = 'lg',
  ...props
}) => {
  const alignStyles = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const headlineSizes = size === 'lg' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl';

  return (
    <div className={cn('flex flex-col space-y-3 max-w-3xl mb-12 sm:mb-16', alignStyles, className)} {...props}>
      {eyebrow && (
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold tracking-wider uppercase select-none">
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={cn('font-display font-bold text-[var(--text-primary)] tracking-tight text-balance leading-[1.12]', headlineSizes)}>
        {headline}
      </h2>

      {intro && (
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
};
