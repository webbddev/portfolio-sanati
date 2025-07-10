'use client';
import LineSeparator from '@/components/LineSeparator';
import { AnimatedTextLines_v3 } from '../components/AnimatedTextLines_v3';
import { socials } from '@/constants/data';
import Link from 'next/link';
import Marquee from '@/components/Marquee';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Contact = () => {
  const sectionRef = useRef(null);
  
  const items = [
    'just imagin, I code',
    'just imagin, I code',
    'just imagin, I code',
    'just imagin, I code',
    'just imagin, I code',
  ];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        y: 100,
        scale: 0.9,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );
    gsap.from('.social-link', {
      y: 100, // Start 100px lower
      opacity: 0, // Start completely transparent
      delay: 0.5, // Wait 0.5s before starting
      duration: 1, // Animation duration — 1s
      stagger: 0.3, // Delay between the animation of each element with className='.social-link'
      ease: 'back.out', // Animation style (with a slight "bounce" at the end)
      scrollTrigger: {
        trigger: '.social-link',
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id='contact'
      className='min-h-screen relative bg-black rounded-t-4xl'
    >
      {/* Container with max width */}
      <div className='flex flex-col max-w-[2400px] mx-auto'>
        <div className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
          {/* Subtitle */}
          <p className='text-xs sm:text-sm font-light tracking-[0.3rem] sm:tracking-[0.5rem] uppercase px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white'>
            You Dream It, I Code it
          </p>
          <div className='px-10'>
            <h1 className='flex flex-col gap-12 text-white uppercase banner-text-responsive sm:gap-16 md:block -translate-y-[4px] md:-translate-[10px]'>
              <span>Contact</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Full width horizontal line placed under the title */}
      <LineSeparator className={'border-white'} thickness={'border-t-[5px]'} />
      <div className='relative px-10 text-white max-w-[1870px] mx-auto'>
        <div className='py-12 sm:py-16 text-end'>
          <AnimatedTextLines_v3
            delay={0.2}
            className='font-light uppercase value-text-responsive text-white max-w-4xl ml-auto'
          >
            Let's collaborate and bring your vision to life through innovative
            web solutions.
          </AnimatedTextLines_v3>
        </div>
      </div>
      <div className='max-w-[1870px] mx-auto flex px-10 font-light text-white uppercase text-[26px] lg:text-[32px] leading-none mb-10'>
        <div className='flex flex-col w-full gap-10'>
          <div className='social-link'>
            <h2>E-mail</h2>
            <div className='w-full h-px my-2 bg-white/30' />
            <p className='text-xl tracking-wider lowercase md:text-2xl lg:text-3xl'>
              alevtina.gordienko@gmail.com{' '}
            </p>
          </div>
          <div className='social-link'>
            <h2>Phone</h2>
            <div className='w-full h-px my-2 bg-white/30' />
            <p className='text-xl lowercase md:text-2xl lg:text-3xl'>
              +373 79 123 456
            </p>
          </div>
          <div className='social-link'>
            <h2>Social Media</h2>
            <div className='w-full h-px my-2 bg-white/30' />
            <div className='flex flex-wrap gap-2'>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target='_blank'
                  className='text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-300'
                >
                  {'{ '}
                  {social.name}
                  {' }'}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0'>
        <Marquee items={items} className='text-white bg-transparent' />
      </div>
    </section>
  );
};

export default Contact;
