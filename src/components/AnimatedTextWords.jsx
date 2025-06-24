'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(SplitText);

const AnimatedTextWords = ({
  children,
  className = '',
  delay = 0,
  ...restProps
}) => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      let split = SplitText.create(textRef.current, {
        type: 'words',
        aria: false,
        wordsClass: '',
      });

      gsap.from(split.words, {
        y: 100,
        autoAlpha: 0,
        scale: 2,
        duration: 1.7,
        delay: delay,

        ease: 'expo.out',
        stagger: {
          amount: 0.5,
          from: 'start',
        },
      });

      // Cleanup when component unmounts
      return () => {
        split.revert();
      };
    }
  }, []);

  return (
    <div ref={textRef} className={className} delay={delay} {...restProps}>
      {children}
    </div>
  );
};

export default AnimatedTextWords;
