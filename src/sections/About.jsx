'use client';
import { useRef } from 'react';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LineSeparator from '@/components/LineSeparator';

const About = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to('#about', {
      scale: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: '#about',
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: true,
        markers: false,
      },
      ease: 'power1.inOut',
    });

    // Image clip-path animation
    gsap.set(imgRef.current, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
    });

    gsap.to(imgRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2,
      ease: 'power4.out',
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section
      id='about'
      className='py-16 md:py-32 bg-black rounded-b-4xl relative'
    >
      {/* Container with max width */}
      <div className='max-w-[2400px] mx-auto'>
        <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
          <div className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
            {/* Subtitle */}
            <p className='text-xs sm:text-sm font-light tracking-[0.3rem] sm:tracking-[0.5rem] uppercase px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white'>
              Code with purpose, build to scale
            </p>
            <div className='px-10'>
              <h1 className='flex flex-col gap-12 text-white uppercase banner-text-responsive sm:gap-16 md:block -translate-y-[4px] md:-translate-[10px]'>
                <span>About</span>
              </h1>
            </div>
          </div>
        </div>

        <LineSeparator
          className={'border-white max-w-none'}
          thickness='border-t-[5px]'
        />
        {/* <div className='border-2 border-white w-full absolute left-0 top-[163px] sm:top-[209px] lg:top-[227px]' /> */}

        <div className='relative px-10 text-white max-w-[1870px] mx-auto'>
          <div className='py-12 sm:py-16 lg:py-0 lg:mt-34 text-end '>
            <AnimatedTextLines
              delay={0.2}
              className='font-light uppercase value-text-responsive text-white max-w-4xl ml-auto'
            >
              I build secure, high-performance full-stack apps with smooth UX to
              drive growth not headaches.
            </AnimatedTextLines>
          </div>

          <div className='flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60'>
            <Image
              ref={imgRef}
              src='/images/man.jpg'
              alt='man'
              width={500}
              height={600}
              className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 rounded-lg object-cover aspect-[4/5]'
            />

            <AnimatedTextLines
              delay={0.5}
              className='font-light value-text-responsive text-white max-w-none lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl'
            >
              {`Obsessed with building fast, intuitive apps—from pixel-perfect React UIs to bulletproof serverless backends. Every line of code is a promise: quality that users feel. When I'm not shipping:
⚡️ Open-sourcing my latest experiment (or hacking on yours)
🎥 Teaching devs on Twitch/YouTube—because rising tides lift all ships
🧗 Rock climbing (problem-solving with real stakes)
🎸 Strumming chords while CI pipelines pass (multitasking at its finest)`}
            </AnimatedTextLines>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
