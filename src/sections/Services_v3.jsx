'use client';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { servicesData } from '../constants/data';
import { AnimatedTextLines } from '../components/AnimatedTextLines';
import { AnimatedTextLines_v3 } from '../components/AnimatedTextLines_v3';

// Register GSAP plugins
gsap.registerPlugin(SplitText);

const Services_v3 = () => {
  // const text = `I build secure, high-performance full-stack apps
  //   with smooth UX to drive growth 
  //   not headaches.`;

  const serviceRefs = useRef([]);
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: '48rem' }); //768px

  useGSAP(() => {
    // Header animation with scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contextRef.current,
      },
    });

    tl.from(contextRef.current, {
      y: '50vh',
      duration: 1,
      ease: 'circ.out',
    });

    tl.from(
      headerRef.current, 
      {
        opacity: 0,
        y: '200',
        duration: 1,
        ease: 'circ.out',
      },
      '<+0.2'
    );

    // Service cards animation
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        },
        duration: 1,
        ease: 'circ.out',
      });
    });
  }, []);

  return (
    <section id='services' className='min-h-screen bg-black rounded-t-4xl'>
      <div ref={contextRef}>
        <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
          <div
            ref={headerRef}
            className='flex flex-col justify-center gap-12 pt-16 sm:gap-16'
          >
            <p className='text-sm font-light tracking-[0.5rem] uppercase px-10 text-white'>
              Behind the scene, Beyond the screen
            </p>
            <div className='px-10'>
              <h1 className='flex flex-col gap-12 text-white uppercase banner-text-responsive sm:gap-16 md:block  -translate-y-[4px] md:-translate-[10px]'>
                <span>Service</span>
              </h1>
            </div>
          </div>
        </div>
        <div className='relative px-10 text-white'>
          <div className='absolute inset-x-0 border-t-2' />
          <div className='py-12 sm:py-16 text-end'>
            {/* <AnimatedTextLines
              text={text}
              className='font-light uppercase value-text-responsive text-white'
            /> */}
            <AnimatedTextLines_v3
              delay={1.5}
              className='font-light uppercase value-text-responsive text-white max-w-4xl ml-auto'
            >
              I build secure, high-performance full-stack apps with smooth UX to
              drive growth not headaches.
            </AnimatedTextLines_v3>
          </div>
        </div>
      </div>

      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className='sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30'
          // style={
          //   isDesktop
          //     ? {
          //         top: `calc(10vh + ${index * 5}em)`,
          //         marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
          //       }
          //     : { top: 0 }
          // }
        >
          <div className='flex items-center justify-between gap-4 font-light'>
            <div className='flex flex-col gap-6'>
              <h2 className='text-4xl lg:text-5xl'>{service.title}</h2>
              <p className='text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty'>
                {service.description}
              </p>
              <div className='flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80'>
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className='flex'>
                      <span className='mr-12 text-lg text-white/30'>
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className='w-full h-px my-2 bg-white/30' />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services_v3;
