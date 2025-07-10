// FILEPATH: /Users/nikolaj/DVLP Projects/portfolio-ali_sanati-june-2025-UNDER-DEVLP/src/components/Planet.jsx

import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function Planet(props) {
  const shapeContainer = useRef(null);
  const shperesContainer = useRef(null);
  const ringContainer = useRef(null);
  const { nodes, materials } = useGLTF('/models/Planet.glb');
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (materials['Material.002']) {
      materials['Material.002'].color.set('copper');
      materials['Material.002'].needsUpdate = true;
    }
  }, [materials]);

  useGSAP(() => {
    if (!animationComplete) {
      const tl = gsap.timeline({
        onComplete: () => setAnimationComplete(true),
      });

      tl.from(shapeContainer.current.position, {
        y: 5,
        duration: 3,
        ease: 'circ.out',
      });
      tl.from(
        shperesContainer.current.rotation,
        {
          x: 0,
          y: Math.PI,
          z: -Math.PI,
          duration: 10,
          ease: 'power1.inOut',
        },
        '-=25%'
      );
      tl.from(
        ringContainer.current.rotation,
        {
          x: 0.8,
          y: 0,
          z: 0,
          duration: 10,
          ease: 'power1.inOut',
        },
        '<'
      );
    }
  }, [animationComplete]);

  return (
    <group ref={shapeContainer} {...props} dispose={null}>
      <group ref={shperesContainer}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.002']}
          rotation={[0, 0, 0.741]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere2.geometry}
          material={materials['Material.001']}
          position={[0.647, 1.03, -0.724]}
          rotation={[0, 0, 0.741]}
          scale={0.223}
        />
      </group>
      <mesh
        ref={ringContainer}
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.124, 0.123, -0.778]}
        scale={2}
      />
    </group>
  );
}

useGLTF.preload('/models/Planet.glb');
