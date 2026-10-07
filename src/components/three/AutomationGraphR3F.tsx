import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';

interface GraphNode {
  id: string;
  pos: [number, number, number];
  label: string;
  color: string;
  size: number;
}

// Nodes and dynamic pulsing signal conduits
function OrchestrationNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const signalsRef = useRef<THREE.Group>(null);

  const nodes: GraphNode[] = useMemo(
    () => [
      { id: 'inbound', pos: [-3.2, 0.4, 0], label: 'INBOUND', color: '#2DD4BF', size: 0.35 },
      { id: 'extract', pos: [-1.2, 1.2, 0.6], label: 'EXTRACTION', color: '#2DD4BF', size: 0.4 },
      { id: 'triage', pos: [-0.8, -1.0, -0.4], label: 'TRIAGE', color: '#2DD4BF', size: 0.38 },
      { id: 'llm', pos: [1.2, 0.8, 0.2], label: 'LLM_REASONING', color: '#E7B65C', size: 0.5 },
      { id: 'crm', pos: [3.2, 1.4, -0.2], label: 'CRM_UPDATE', color: '#2DD4BF', size: 0.36 },
      { id: 'dispatch', pos: [3.0, -0.8, 0.4], label: 'DISPATCH', color: '#2DD4BF', size: 0.38 },
      { id: 'audit', pos: [1.0, -1.6, -0.2], label: 'AUDIT_LOG', color: '#475569', size: 0.3 },
    ],
    []
  );

  // Line paths connecting nodes
  const paths = useMemo(() => {
    return [
      { from: nodes[0].pos, to: nodes[1].pos },
      { from: nodes[0].pos, to: nodes[2].pos },
      { from: nodes[1].pos, to: nodes[3].pos },
      { from: nodes[2].pos, to: nodes[3].pos },
      { from: nodes[2].pos, to: nodes[6].pos },
      { from: nodes[3].pos, to: nodes[4].pos },
      { from: nodes[3].pos, to: nodes[5].pos },
      { from: nodes[6].pos, to: nodes[5].pos },
    ];
  }, [nodes]);

  // Precompute lines buffer
  const linePositions = useMemo(() => {
    const pos = new Float32Array(paths.length * 2 * 3);
    let pIdx = 0;
    paths.forEach(({ from, to }) => {
      pos[pIdx++] = from[0];
      pos[pIdx++] = from[1];
      pos[pIdx++] = from[2];
      pos[pIdx++] = to[0];
      pos[pIdx++] = to[1];
      pos[pIdx++] = to[2];
    });
    return pos;
  }, [paths]);

  // Signal pulses travelling along the paths
  const signalCount = paths.length * 2;
  const signalMeshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.25;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.15) * 0.1;
    }

    // Advance signals along lines
    const time = state.clock.elapsedTime;
    paths.forEach((p, idx) => {
      const mesh1 = signalMeshRefs.current[idx * 2];
      const mesh2 = signalMeshRefs.current[idx * 2 + 1];

      const t1 = (time * 0.7 + idx * 0.25) % 1;
      const t2 = (time * 0.7 + idx * 0.25 + 0.5) % 1;

      if (mesh1) {
        mesh1.position.x = p.from[0] + (p.to[0] - p.from[0]) * t1;
        mesh1.position.y = p.from[1] + (p.to[1] - p.from[1]) * t1;
        mesh1.position.z = p.from[2] + (p.to[2] - p.from[2]) * t1;
      }
      if (mesh2) {
        mesh2.position.x = p.from[0] + (p.to[0] - p.from[0]) * t2;
        mesh2.position.y = p.from[1] + (p.to[1] - p.from[1]) * t2;
        mesh2.position.z = p.from[2] + (p.to[2] - p.from[2]) * t2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres */}
      {nodes.map((node) => (
        <group key={node.id} position={node.pos}>
          {/* Core Sphere */}
          <mesh>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshStandardMaterial
              color="#161B22"
              emissive={node.color}
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
          {/* Subtle Outer Halo Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[node.size * 1.45, 0.015, 8, 32]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Network Connection Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#2DD4BF"
          transparent
          opacity={0.3}
          linewidth={1}
        />
      </lineSegments>

      {/* Pulsing Energy Signals */}
      <group ref={signalsRef}>
        {Array.from({ length: signalCount }).map((_, sIdx) => (
          <mesh
            key={sIdx}
            ref={(el) => {
              signalMeshRefs.current[sIdx] = el;
            }}
          >
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshBasicMaterial
              color={sIdx % 3 === 0 ? '#E7B65C' : '#2DD4BF'}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function AutomationGraphR3F() {
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
      className="w-full h-[260px] sm:h-[300px] relative select-none rounded-2xl overflow-hidden bg-[var(--surface-1)] border border-subtle"
    >
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-mono text-muted/80 bg-[var(--surface-2)]/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-subtle">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>ACTIVE_PIPELINE: LIVE_ORCHESTRATION</span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
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
        <pointLight position={[0, 4, 4]} intensity={2.0} color="#2DD4BF" />
        <pointLight position={[3, -3, 2]} intensity={1.2} color="#E7B65C" />
        <OrchestrationNetwork />
      </Canvas>
    </div>
  );
}
