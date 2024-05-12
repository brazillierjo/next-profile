"use client";

import React, { Suspense, useRef, useState } from "react";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const generateRandomSpherePositions = (numPoints: number, radius: number): Float32Array => {
  const positions = new Float32Array(numPoints * 3);

  for (let i = 0; i < numPoints; i++) {
    // Generate random points in spherical coordinates
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());

    // Convert spherical coordinates to Cartesian coordinates
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return positions;
};

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const spherePositions = generateRandomSpherePositions(5000, 1.2);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spherePositions} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} dethWrite={false} />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<{}> = () => (
  <div className="fixed inset-0 z-[1] h-auto w-full ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
