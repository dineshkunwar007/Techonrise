import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

function StackedRacks() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Tier 1: Edge & Security (Top) */}
      <group position={[0, 1.3, 0]}>
        <mesh>
          <boxGeometry args={[4.2, 0.6, 2.2]} />
          <meshStandardMaterial
            color="#161B22"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>
        {/* LED Strip */}
        <mesh position={[1.6, 0, 1.11]}>
          <boxGeometry args={[0.4, 0.08, 0.02]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
        <mesh position={[1.0, 0, 1.11]}>
          <boxGeometry args={[0.08, 0.08, 0.02]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
      </group>

      {/* Tier 2: Application Compute & Next.js Runtime (Middle) */}
      <group position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[4.2, 0.6, 2.2]} />
          <meshStandardMaterial
            color="#1A222B"
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        {/* LED Strip */}
        <mesh position={[1.6, 0, 1.11]}>
          <boxGeometry args={[0.4, 0.08, 0.02]} />
          <meshBasicMaterial color="#E7B65C" />
        </mesh>
        <mesh position={[1.0, 0, 1.11]}>
          <boxGeometry args={[0.08, 0.08, 0.02]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
      </group>

      {/* Tier 3: UK Sovereign Database & Storage (Bottom) */}
      <group position={[0, -1.3, 0]}>
        <mesh>
          <boxGeometry args={[4.2, 0.6, 2.2]} />
          <meshStandardMaterial
            color="#161B22"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>
        {/* LED Strip */}
        <mesh position={[1.6, 0, 1.11]}>
          <boxGeometry args={[0.4, 0.08, 0.02]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
        <mesh position={[1.0, 0, 1.11]}>
          <boxGeometry args={[0.08, 0.08, 0.02]} />
          <meshBasicMaterial color="#2DD4BF" />
        </mesh>
      </group>

      {/* Vertical Data Bus Lines (Sides) */}
      <mesh position={[-1.9, 0, 1.05]}>
        <boxGeometry args={[0.04, 3.2, 0.04]} />
        <meshBasicMaterial color="#2DD4BF" transparent opacity={0.5} />
      </mesh>
      <mesh position={[-1.7, 0, 1.05]}>
        <boxGeometry args={[0.04, 3.2, 0.04]} />
        <meshBasicMaterial color="#2DD4BF" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function InfrastructureLayersR3F() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="w-full h-[240px] sm:h-[280px] relative select-none rounded-2xl overflow-hidden bg-[var(--surface-1)] border border-subtle"
    >
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-mono text-muted/80 bg-[var(--surface-2)]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-subtle">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>UK_CLOUD: MANAGED_STACK_HEALTHY</span>
      </div>

      <Canvas
        camera={{ position: [2.5, 1.5, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 6, 4]} intensity={2.2} color="#2DD4BF" />
        <directionalLight position={[-4, -3, -2]} intensity={1.0} color="#E7B65C" />
        <StackedRacks />
      </Canvas>
    </div>
  );
}
