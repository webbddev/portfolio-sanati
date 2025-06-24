'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { socials } from '@/constants/data';

// --- Nav Links Data ---
const navLinks = [
  { name: 'home', href: 'home' },
  { name: 'services', href: 'services' },
  { name: 'about', href: 'about' },
  { name: 'work', href: 'work' },
  { name: 'contact', href: 'contact' },
];

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  // State to manage menu open/close and burger icon visibility
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    // Set initial positions/styles
    gsap.set(navRef.current, { xPercent: 100 }); // Move nav off-screen to the right
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0, // Hide links and contact
      x: -20, // Move them slightly left
    });

    // Timeline for opening/closing the nav menu
    tl.current = gsap
      .timeline({ paused: true }) // Anim start paused - will be triggered by user interaction
      // Slide the navigation menu in from the right
      .to(navRef.current, {
        xPercent: 0, // Move to original position (0% = fully visible)
        duration: 1, // Animation duration in seconds
        ease: 'power3.out', // Easing function for smooth deceleration
      })
      // Animate navigation links with staggered entrance
      .to(
        linksRef.current,
        {
          autoAlpha: 1, // Fade in links (opacity + visibility)
          x: 0, // Move to original position
          stagger: 0.1, // Delay between each link animation (0.1s apart)
          duration: 0.5, // Duration for each link animation
          ease: 'power2.out', // Smooth easing
        },
        '<' // Start at the same time as previous animation
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1, // Fade in contact section
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<+0.2' // Start 0.2s after previous
      );

    // Timeline for burger icon crossing lines animation
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.6,
          ease: 'power2.inOut',
        },
        '<'
      );
  }, []);

  // Handle scroll to show/hide burger icon
  // Show burger icon when scrolling up or at the top of the page
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);

      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse(); // Animate menu out
      iconTl.current.reverse(); // Animate icon back to burger
    } else {
      tl.current.play(); // Animate menu in
      iconTl.current.play(); // Animate icon to 'X'
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'
      >
        <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl'>
          {/* --- Navigation Links Section --- */}
          {navLinks.map((link, index) => (
            <div key={link.name} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className='transition-all duration-300 cursor-pointer hover:text-white'
                to={link.href} // Use href from navLinks object
                smooth
                offset={0}
                duration={2000}
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
        <div
          ref={contactRef}
          className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'
        >
          <div className='font-light'>
            <p className='tracking-wider text-white/50'>E-mail</p>
            <p className='text-xl tracking-widest lowercase text-pretty'>
              alevtina.gordienko@gmail.com
            </p>
          </div>
          <div className='font-light'>
            <p className='tracking-wider text-white/50'>Social Media</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className='text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300'
                >
                  {'{ '}
                  {social.name}
                  {' }'}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10'
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: 'circle(50% at 50% 50%)' }
            : { clipPath: 'circle(0% at 50% 50%)' }
        }
      >
        <span
          ref={topLineRef}
          className='block w-8 h-0.5 bg-white rounded-full origin-center'
        ></span>
        <span
          ref={bottomLineRef}
          className='block w-8 h-0.5 bg-white rounded-full origin-center'
        ></span>
      </div>
    </>
  );
};

export default Navbar;
