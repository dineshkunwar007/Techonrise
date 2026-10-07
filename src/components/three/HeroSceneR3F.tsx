import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

// -------------------------------------------------------------
// Constrained Atmospheric Particle Dust (Calm, purposeful drift)
// -------------------------------------------------------------
function AmbientDust({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const teal = new THREE.Color('#2DD4BF');
    const slate = new THREE.Color('#334155');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Focus particles toward the right half and mid-to-back depth
      pos[i3] = 1.0 + (Math.random() - 0.2) * 16;
      pos[i3 + 1] = (Math.random() - 0.5) * 12;
      pos[i3 + 2] = (Math.random() - 0.5) * 10 - 2;

      const chosen = Math.random() > 0.65 ? teal : slate;
      col[i3] = chosen.r;
      col[i3 + 1] = chosen.g;
      col[i3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      // Extremely slow, dignified rotational drift (0.008 vs old 0.025)
      pointsRef.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// -------------------------------------------------------------
// Cohesive Sculptural Architecture:
// 1. Brushed Metal Primary Monolith
// 2. Translucent Frosted Glass Slab with Soft Internal Refraction
// 3. Precision Engineering Core (Satin Titanium Plinth with Restrained Teal Emissive)
// -------------------------------------------------------------
function SculpturalArchitecture() {
  const groupRef = useRef<THREE.Group>(null);
  const primaryMeshRef = useRef<THREE.Mesh>(null);
  const glassMeshRef = useRef<THREE.Mesh>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);

  // Consistent material definitions
  const brushedMetalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1E252E'),
        metalness: 0.88,
        roughness: 0.32, // satin brushed finish
        envMapIntensity: 0.8,
      }),
    []
  );

  const frostedGlassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#0F172A'),
        transmission: 0.82,
        opacity: 1,
        transparent: true,
        roughness: 0.22, // frosted haze
        ior: 1.48,
        reflectivity: 0.5,
        clearcoat: 0.4,
        clearcoatRoughness: 0.15,
        emissive: new THREE.Color('#2DD4BF'),
        emissiveIntensity: 0.08, // very restrained, quiet glow
      }),
    []
  );

  const titaniumCoreMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#141A21'),
        metalness: 0.94,
        roughness: 0.2,
        emissive: new THREE.Color('#2DD4BF'),
        emissiveIntensity: 0.32,
      }),
    []
  );

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very calm, deliberate rotation (0.03 vs old 0.08)
      groupRef.current.rotation.y += delta * 0.03;
      // Gentle, low-frequency breathing oscillation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }

    if (glassMeshRef.current) {
      // Subtle counter-oscillation for tactile depth
      glassMeshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[4.2, 0.1, -0.6]}>
      {/* 1. Primary Brushed Metal Architectural Monolith */}
      <mesh
        ref={primaryMeshRef}
        material={brushedMetalMaterial}
        position={[0, 0, 0]}
        rotation={[0.3, 0.4, 0.05]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.0, 3.4, 0.28]} />
      </mesh>

      {/* 2. Floating Translucent Frosted Glass Slab */}
      <mesh
        ref={glassMeshRef}
        material={frostedGlassMaterial}
        position={[0.65, 0.5, 0.45]}
        rotation={[-0.15, 0.65, -0.05]}
      >
        <boxGeometry args={[1.7, 2.5, 0.1]} />
      </mesh>

      {/* 3. Satin Core Plinth with Restrained Emissive Accents */}
      <mesh
        ref={coreMeshRef}
        material={titaniumCoreMaterial}
        position={[-0.7, -0.9, 0.35]}
        rotation={[0.5, -0.3, 0.2]}
      >
        <boxGeometry args={[0.9, 1.3, 0.9]} />
      </mesh>

      {/* 4. Fine Architectural Laser Datum Rings (Clean, non-distracting) */}
      <mesh rotation={[Math.PI / 3, 0.1, 0]}>
        <torusGeometry args={[2.9, 0.012, 16, 120]} />
        <meshBasicMaterial color="#2DD4BF" transparent opacity={0.28} />
      </mesh>

      <mesh rotation={[-Math.PI / 4, 0.2, 0.1]}>
        <torusGeometry args={[3.4, 0.008, 16, 120]} />
        <meshBasicMaterial color="#475569" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// -------------------------------------------------------------
// Subtle Ground Grid Datum (Receding into fog)
// -------------------------------------------------------------
function GroundGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.y -= delta * 0.006;
    }
  });

  return (
    <group position={[3.5, -2.8, -1]}>
      <gridHelper
        ref={gridRef}
        args={[28, 20, '#1E293B', '#0F172A']}
        position={[0, 0, 0]}
      />
    </group>
  );
}

// -------------------------------------------------------------
// Restrained Parallax Camera Rig (Calm, damping-smoothed response)
// -------------------------------------------------------------
function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    // Restrained mouse follow: max 0.5 X and 0.25 Y offset for cinematic stillness
    const targetX = pointer.x * 0.5;
    const targetY = pointer.y * 0.25;

    camera.position.x += (targetX - camera.position.x) * 0.025;
    camera.position.y += (targetY - camera.position.y) * 0.025;
    camera.lookAt(1.2, 0, 0);
  });

  return null;
}

// -------------------------------------------------------------
// Main R3F Canvas Container
// -------------------------------------------------------------
export default function HeroSceneR3F() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    // Pause WebGL render loop when scrolled offscreen
    const el = containerRef.current;
    if (el) {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0.05 }
      );
      observer.observe(el);
      return () => {
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none overflow-hidden"
    >
      {/* 
        Refined Readability Scrim:
        Deep atmospheric transition so text on left is 100% legible,
        while 3D scene emerges gracefully on the right half and bleeds off-screen.
      */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[var(--bg-main)] via-[var(--bg-main)]/92 sm:via-[var(--bg-main)]/80 to-transparent w-full md:w-3/5 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-1 w-24 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-main)] pointer-events-none" />

      {/* R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 46 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
      >
        <AdaptiveDpr pixelated />

        {/* Soft atmospheric depth-of-field fog */}
        <fog attach="fog" args={['#0C0F12', 8, 22]} />

        {/* Soft, area-style studio lighting hierarchy */}
        <ambientLight intensity={0.55} />
        
        {/* Key Light: Restrained cool teal highlight from top-right */}
        <directionalLight
          position={[7, 6, 4]}
          intensity={1.8}
          color="#99F6E4"
        />

        {/* Fill Light: Soft neutral studio bounce from bottom-left */}
        <directionalLight
          position={[-5, -3, -2]}
          intensity={0.6}
          color="#E2E8F0"
        />

        {/* Subtle Rim / Core Accent Light */}
        <pointLight
          position={[4, 1.5, 1.5]}
          intensity={1.1}
          color="#2DD4BF"
          distance={8}
          decay={2}
        />

        {/* 3D Scene Components */}
        <CameraRig />
        <SculpturalArchitecture />
        <GroundGrid />
        <AmbientDust count={isMobile ? 200 : 650} />
      </Canvas>
    </div>
  );
}
