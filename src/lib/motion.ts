import { type Variants, type Transition } from 'motion/react';

/**
 * Standardized easing curve per specification: cubic-bezier(0.22, 1, 0.36, 1)
 * High-precision, zero-bounce, premium luxury decelerating curve.
 */
export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export const transitionFast: Transition = {
  duration: 0.45,
  ease: PREMIUM_EASE,
};

export const transitionMedium: Transition = {
  duration: 0.65,
  ease: PREMIUM_EASE,
};

export const transitionSlow: Transition = {
  duration: 0.85,
  ease: PREMIUM_EASE,
};

/**
 * Fade-Up Reveal Variant
 */
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: PREMIUM_EASE,
      delay: customDelay,
    },
  }),
};

/**
 * Simple Fade In Variant (ideal for reduced motion or subtle overlays)
 */
export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: PREMIUM_EASE,
      delay: customDelay,
    },
  }),
};

/**
 * Stagger Container Variant
 */
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Soft Scale Variant (for dialogs, cards, or featured modals)
 */
export const softScaleVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE,
      delay: customDelay,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.3,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Helper to generate motion props that automatically respect reduced-motion
 */
export function getMotionProps(reducedMotion: boolean, variants: Variants, customDelay = 0) {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.2 },
    };
  }

  return {
    initial: 'hidden',
    animate: 'visible',
    variants,
    custom: customDelay,
  };
}
