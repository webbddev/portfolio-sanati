import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLines = ({ text, className, delay = 0 }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split('\n').filter((line) => line.trim() !== '');

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out',
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          // start: 'top bottom',
          // end: 'bottom top',
          // toggleActions: 'play none none reverse',
          // markers: false, // Set to true for debugging
        },
      });
    }
  });

  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span
          key={index}
          ref={(el) => (lineRefs.current[index] = el)}
          className='block leading-relaxed tracking-wide text-pretty'
        >
          {line}
        </span>
      ))}
    </div>
  );
};
