'use client';

import { useState, useEffect } from 'react';
import {
  About,
  Contact,
  ContactSummary,
  Hero,
  Navbar,
  Services,
  ServiceSummary,
  Works,
} from '@/sections';
import { useProgress } from '@react-three/drei';

const LoadingScreen = () => {
  const { progress } = useProgress();
  return (
    <div className='fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light'>
      <p className='mb-4 text-xl tracking-widest animate-pulse'>
        Loading {Math.floor(progress)}%
      </p>
      <div className='relative h-1 w-60 overflow-hidden rounded bg-white/20'>
        <div
          className='absolute top-0 left-0 h-full bg-white transition-all duration-300'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const Page = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // A small delay can be nice to see the 100% state before fading out
      setTimeout(() => setIsReady(true), 500);
    }
  }, [progress]);

  return (
    <>
      {!isReady && <LoadingScreen />}
      <div
        className={`relative w-screen min-h-screen overflow-x-clip transition-opacity duration-1000 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services/>
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </>
  );
};

export default Page;
