'use client';

import { Suspense, useRef } from 'react';

import AnimatedTextWords from '@/components/AnimatedTextWords';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Planet } from '@/components/Planet';
import LineSeparator from '@/components/LineSeparator';

const Hero_v3 = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section id='home' className='flex flex-col justify-end min-h-screen'>
      <div ref={contextRef}>
        <div>
          <div
            ref={headerRef}
            className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'
          >
            <p className='text-sm font-light tracking-[0.5rem] uppercase px-10 text-black'>
              404 No Bugs Found
            </p>
            <div className='px-4 md:px-10'>
              <h1 className='flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block -translate-y-[4px] md:-translate-[10px]'>
                <AnimatedTextWords duration={2} className=''>
                  Alevtina Gordienko
                </AnimatedTextWords>
              </h1>
            </div>
          </div>
        </div>
        <div className='relative px-10 text-black'>
          <LineSeparator className='border-black' thickness='border-t-[5px]' />
          <div className='py-12 sm:py-16 ml-auto max-w-4xl'>
            <AnimatedTextWords
              delay={5}
              className='font-light uppercase value-text-responsive text-end'
            >
              Helping Local Companies & Startups Establish a Unique Identity
              That Attracts Customers and Builds Lasting Community Presence.
            </AnimatedTextWords>
          </div>
        </div>
      </div>
      {/* 3D Scene */}
      <figure
        className='absolute inset-x-0 -z-50' // -z-50 sets low z-index, so the canvas is behind the UI
        style={{ width: '100vw', height: '100vh' }} // Stretches the canvas to the viewport
      >
        <Canvas
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          dpr={[1, 1.5]} // Cap device pixel ratio for performance
        >
          {/* Simplified lighting for better performance */}
          <ambientLight intensity={1.5} />
          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <Planet scale={isMobile ? 0.7 : 1} />
            </Float>
          </Suspense>
          <Environment
            preset='dawn'
            background={false}
            resolution={256} // Lower resolution for performance
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero_v3;
