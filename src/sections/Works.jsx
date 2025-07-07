'use client';

import { AnimatedTextLines_v3 } from '@/components/AnimatedTextLines_v3';
import LineSeparator from '@/components/LineSeparator';
import { projects } from '../constants/data';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });
  const moveX = useRef(0);
  const moveY = useRef(0);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, 'x', {
      duration: 1.5,
      ease: 'power3.out',
    });

    moveY.current = gsap.quickTo(previewRef.current, 'y', {
      duration: 2.5,
      ease: 'power3.out',
    });

    gsap.from('#project', {
      y: 200, // Start 200px lower
      opacity: 0, // Start completely transparent
      delay: 0.5, // Wait 0.5s before starting
      duration: 1, // Animation duration — 1s
      stagger: 0.3, // Delay between the animation of each element with id='project'
      ease: 'back.out', // Animation style (with a slight "bounce" at the end)
      scrollTrigger: {
        trigger: '#project',
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return; // Disable hover effect on mobile
    setCurrentIndex(index);
    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      },
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        duration: 0.3,
        ease: 'power2.out',
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null); // Reset the index when mouse leaves

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
      duration: 0.2,
      ease: 'power2.in',
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Disable hover effect on mobile
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id='works' className='min-h-screen relative'>
      {/* Container with max width */}
      <div className='flex flex-col max-w-[2400px] mx-auto'>
        <div className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'>
          {/* Subtitle */}
          <p className='text-xs sm:text-sm font-light tracking-[0.3rem] sm:tracking-[0.5rem] uppercase px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-black'>
            Logic meets aesthetics, seamlessly
          </p>
          <div className='px-10'>
            <h1 className='flex flex-col gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block -translate-y-[4px] md:-translate-[10px]'>
              <span>Works</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Full width horizontal line placed under the title */}
      <LineSeparator className={'border-black'} />

      <div className='relative px-10 text-black max-w-[1870px] mx-auto'>
        <div className='py-12 sm:py-16 text-end'>
          <AnimatedTextLines_v3
            delay={0.2}
            className='font-light uppercase value-text-responsive text-black max-w-4xl ml-auto'
          >
            Featured projects that have been meticulously crafted with passion
            to drive results and impact.
          </AnimatedTextLines_v3>
        </div>
      </div>

      <div
        className='relative flex flex-col font-light'
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id='project'
            className='relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className='absolute inset-0 hidden md:block duration-200 bg-black/90 -z-10 clip-path'
            />
            {/* Project title */}
            <div className='flex items-center justify-between px-10 text-black transition-all duration-500 md:group-hover:px-16 md:group-hover:text-white'>
              <h2 className='lg:text-[32px] text-[26px] leading-none'>
                {project.name}
              </h2>
              <Icon icon='mynaui:arrow-up-right' className='md:size-6 size-5' />
            </div>
            {/* divider */}
            <div className='w-full h-0.5 bg-black/80' />

            {/* framework */}
            <div className='flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-20'>
              {project.technologies.map((technology) => (
                <p
                  key={technology.id}
                  className='text-black transition-colors duration-500 md:group-hover:text-white'
                >
                  {technology.name}
                </p>
              ))}
            </div>

            {/* Mobile preview images */}
            <div className='relative flex items-center justify-center px-6 md:hidden h-[400px] '>
              <div className='absolute inset-2'>
                <Image
                  src={project.bgImage}
                  alt={`${project.name}-bg-image`}
                  fill
                  className='object-cover rounded-md brightness-50'
                  sizes='100vw'
                  priority
                />
              </div>
              <div className='relative w-full max-w-lg sm:max-w-xl px-4 rounded-xl'>
                <Image
                  src={project.image}
                  alt={`${project.name}-image`}
                  width={600}
                  height={400}
                  className='w-full h-auto bg-center rounded-xl'
                  priority
                />
              </div>
            </div>
          </div>
        ))}
        {/* Desktop floating preview images */}
        <div
          ref={previewRef}
          className='fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black/90 rounded-xl pointer-events-none w-[960px] md:block hidden opacity-0'
        >
          {currentIndex !== null && (
            <Image
              src={projects[currentIndex].image}
              alt='preview'
              width={500}
              height={300}
              className='object-cover w-full h-full'
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
