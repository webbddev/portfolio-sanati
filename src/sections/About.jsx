'use client';
import { useRef } from 'react';
import { AnimatedTextLines_v3 } from '../components/AnimatedTextLines_v3';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to('#about', {
      scale: 0.95,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
      },
      ease: 'power1.inOut',
    });

    // Image fade-in with blur effect
    gsap.set(imgRef.current, {
      opacity: 0,
      filter: 'blur(20px)',
    });

    gsap.to(imgRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 2.5,
      delay: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // gsap.set(imgRef.current, {
    //   clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
    // });

    // gsap.to(imgRef.current, {
    //   clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    //   duration: 2,
    //   ease: 'power4.out',
    //   scrollTrigger: { trigger: imgRef.current },
    // });
  });

  return (
    <section id='about' className='min-h-screen bg-black rounded-b-4xl'>
      <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
        <div className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
          <p className='text-sm font-light tracking-[0.5rem] uppercase px-10 text-white'>
            Code with purpose, build to scale
          </p>
          <div className='px-10'>
            <h1 className='flex flex-col gap-12 text-white uppercase banner-text-responsive sm:gap-16 md:block  -translate-y-[4px] md:-translate-[10px]'>
              <span>About</span>
            </h1>
          </div>
        </div>
      </div>
      <div className='relative px-10 text-white'>
        <div className='absolute inset-x-0 border-t-2' />
        <div className='py-12 sm:py-16 text-end'>
          <AnimatedTextLines_v3
            delay={0.2}
            className='font-light uppercase value-text-responsive text-white max-w-4xl ml-auto'
          >
            I build secure, high-performance full-stack apps with smooth UX to
            drive growth not headaches.
          </AnimatedTextLines_v3>
        </div>
        <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
          <Image
            ref={imgRef}
            src='/images/man.jpg'
            alt='man'
            width={500}
            height={600}
            className='w-md rounded-3xl'
          />
          <AnimatedTextLines_v3
            delay={0.5}
            className='font-light value-text-responsive text-white max-w-6xl ml-auto'
          >
            {`Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel. When I'm not shipping:
⚡️ Open-sourcing my latest experiment (or hacking on yours)
🎥 Teaching devs on Twitch/YouTube—because rising tides lift all ships
🧗 Rock climbing (problem-solving with real stakes)
🎸 Strumming chords while CI pipelines pass (multitasking at its finest)`}
          </AnimatedTextLines_v3>
          {/* <AnimatedTextLines text={aboutText} className={'w-full'} /> */}
        </div>
      </div>
    </section>
  );
};

export default About;
