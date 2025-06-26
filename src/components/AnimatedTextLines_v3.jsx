'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const AnimatedTextLines_v3 = ({
  children,
  className = '',
  delay = 0,
  duration = 1,
  withScrollTrigger = true,
  ...restProps
}) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  // Split children text into lines, preserving the original logic
  const text =
    typeof children === 'string' ? children : children?.toString() || '';
  const lines = text.split('\n').filter((line) => line.trim() !== '');

  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        duration: duration,
        delay: delay,
        stagger: 0.3,
        ease: 'back.out',
        scrollTrigger: withScrollTrigger
          ? {
              trigger: containerRef.current,
            }
          : undefined,
      });
    }
  }, [delay, duration, withScrollTrigger]);

  return (
    <div ref={containerRef} className={className} {...restProps}>
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
