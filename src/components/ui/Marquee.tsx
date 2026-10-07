import React from 'react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  children: React.ReactNode;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  speed = 'normal',
  pauseOnHover = true,
  fadeEdges = true,
  children,
  ...props
}) => {
  const reducedMotion = useReducedMotion();

  const speedDuration = {
    slow: '40s',
    normal: '25s',
    fast: '15s',
  }[speed];

  return (
    <div
      className={cn('relative w-full overflow-hidden select-none group', className)}
      {...props}
    >
      {fadeEdges && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--bg-main)] to-transparent z-10 pointer-events-none" />
        </>
      )}

      <div
        className={cn(
          'flex w-max shrink-0 items-center gap-8',
          !reducedMotion && 'animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{
          animationDuration: speedDuration,
        }}
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
};
