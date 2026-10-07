import { useState, useEffect } from 'react';

export interface WebGLCapabilities {
  isSupported: boolean;
  prefersReducedMotion: boolean;
  isLowPowerDevice: boolean;
  isMobile: boolean;
  canRender3D: boolean;
}

export function useWebGLCapabilities(): WebGLCapabilities {
  const [capabilities, setCapabilities] = useState<WebGLCapabilities>({
    isSupported: true,
    prefersReducedMotion: false,
    isLowPowerDevice: false,
    isMobile: false,
    canRender3D: true,
  });

  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // 2. Check mobile
    const isMobile = window.innerWidth < 768;

    // 3. Check low power device
    const concurrency = navigator.hardwareConcurrency || 4;
    // Check deviceMemory if available in Chromium
    const deviceMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory || 8;
    const isLowPowerDevice = concurrency <= 2 || deviceMemory <= 2;

    // 4. Test WebGL context creation
    let isSupported = false;
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      isSupported = Boolean(gl);
    } catch {
      isSupported = false;
    }

    // Determine if 3D should render: must support WebGL, not reduced motion, not severely constrained
    const canRender3D = isSupported && !prefersReducedMotion && !isLowPowerDevice;

    setCapabilities({
      isSupported,
      prefersReducedMotion,
      isLowPowerDevice,
      isMobile,
      canRender3D,
    });

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setCapabilities((prev) => ({
        ...prev,
        prefersReducedMotion: e.matches,
        canRender3D: prev.isSupported && !e.matches && !prev.isLowPowerDevice,
      }));
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  return capabilities;
}
