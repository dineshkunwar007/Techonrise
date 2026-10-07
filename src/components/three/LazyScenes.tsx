import React, { Suspense, lazy } from 'react';
import { useWebGLCapabilities } from '../../hooks/useWebGLCapabilities';
import {
  HeroPosterFallback,
  AutomationPosterFallback,
  InfrastructurePosterFallback,
} from './StaticFallbacks';

// Lazy load 3D chunks so initial bundle remains ultralight and LCP never waits
const HeroSceneR3F = lazy(() => import('./HeroSceneR3F'));
const AutomationGraphR3F = lazy(() => import('./AutomationGraphR3F'));
const InfrastructureLayersR3F = lazy(() => import('./InfrastructureLayersR3F'));

/**
 * Hero 3D Scene Wrapper with Dynamic Loading & Immediate Fallback
 * - Checks WebGL support, low power, and prefers-reduced-motion
 * - Falls back to HeroPosterFallback immediately if 3D cannot/should not run
 * - Displays HeroPosterFallback during Suspense loading
 */
export const LazyHeroScene: React.FC = () => {
  const { canRender3D } = useWebGLCapabilities();

  if (!canRender3D) {
    return <HeroPosterFallback />;
  }

  return (
    <Suspense fallback={<HeroPosterFallback />}>
      <HeroSceneR3F />
    </Suspense>
  );
};

/**
 * AI & Automation Visual Wrapper
 */
export const LazyAutomationGraph: React.FC = () => {
  const { canRender3D } = useWebGLCapabilities();

  if (!canRender3D) {
    return <AutomationPosterFallback />;
  }

  return (
    <Suspense fallback={<AutomationPosterFallback />}>
      <AutomationGraphR3F />
    </Suspense>
  );
};

/**
 * Cloud & Infrastructure Visual Wrapper
 */
export const LazyInfrastructureLayers: React.FC = () => {
  const { canRender3D } = useWebGLCapabilities();

  if (!canRender3D) {
    return <InfrastructurePosterFallback />;
  }

  return (
    <Suspense fallback={<InfrastructurePosterFallback />}>
      <InfrastructureLayersR3F />
    </Suspense>
  );
};
