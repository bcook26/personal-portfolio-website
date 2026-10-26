"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 1.25;

// Module-level state: this file only loads client-side (see HeroVisual)
const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
  position: new THREE.Vector3(
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 2
  ),
  velocity: new THREE.Vector3(
    (Math.random() - 0.5) * 0.005,
    (Math.random() - 0.5) * 0.005,
    (Math.random() - 0.5) * 0.002
  ),
}));

const pointPositions = new Float32Array(PARTICLE_COUNT * 3);

// Worst case allocation
const linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6);

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  useFrame(() => {
    let pIndex = 0;

    // Update particle positions
    particles.forEach((particle) => {
      particle.position.add(particle.velocity);

      if (Math.abs(particle.position.x) > 4)
        particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 2.5)
        particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 1)
        particle.velocity.z *= -1;

      pointPositions[pIndex++] = particle.position.x;
      pointPositions[pIndex++] = particle.position.y;
      pointPositions[pIndex++] = particle.position.z;
    });

    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(pointPositions, 3)
      );
      geometry.attributes.position.needsUpdate = true;
    }

    // Build connecting lines
    let lineIndex = 0;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i].position;
        const b = particles[j].position;

        if (a.distanceTo(b) < CONNECTION_DISTANCE) {
          linePositions[lineIndex++] = a.x;
          linePositions[lineIndex++] = a.y;
          linePositions[lineIndex++] = a.z;

          linePositions[lineIndex++] = b.x;
          linePositions[lineIndex++] = b.y;
          linePositions[lineIndex++] = b.z;
        }
      }
    }

    if (lineRef.current) {
      const geometry = lineRef.current.geometry;

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
          linePositions.slice(0, lineIndex),
          3
        )
      );

      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          size={0.04}
          color="#2563eb"
          sizeAttenuation
        />
      </points>

      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.35}
        />
      </lineSegments>
    </>
  );
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false
  );

  // Pause rendering while the hero is scrolled out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        frameloop={visible && !reducedMotion ? "always" : "demand"}
        camera={{
          position: [0, 0, 7],
          fov: 55,
        }}
      >
        <ambientLight intensity={1} />

        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
