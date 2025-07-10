'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useRef } from 'react';

import { SplitText } from 'gsap/SplitText';
import AnimatedTextWords from '@/components/AnimatedTextWords';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Line } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Diamond } from '@/components/Diamond';
import { Planet } from '@/components/Planet';
import LineSeparator from '@/components/LineSeparator';

// Register GSAP plugins
gsap.registerPlugin(SplitText);

const Hero_v3 = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  useGSAP(() => {
    // if (textRef.current) {
    let split = SplitText.create(textRef.current, {
      type: 'words',
      wordsClass: '',
    });

    gsap.from(split.words, {
      y: 100,
      autoAlpha: 0,
      scale: 2,
      duration: 1.5,
      // yoyo: true,
      // repeat: -1,
      // repeatDelay: 0.5,
      // stagger: 0.1,
      stagger: {
        amount: 0.5,
        from: 'start',
      },
      ease: 'expo.out',
    });
    // }
  });

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
      
    </section>
  );
};

export default Hero_v3;
