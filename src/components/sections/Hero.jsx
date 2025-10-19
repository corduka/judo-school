// src/components/sections/Hero.jsx
import React, { useEffect, useRef } from 'react';
import CTAButton from '../ui/CTAButton';
import heroImage from '../../assets/judo-hero.jpg';
import { scrollToSection } from '../../utils/scroll';

const Hero = () => {
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);

 useEffect(() => {
    // 1. Animate Headline (after component mount)
    if (headlineRef.current) {
      setTimeout(() => {
        // This removes the initial translate-y-10 and opacity-0, triggering the animation
        headlineRef.current.classList.add('translate-y-0', 'opacity-100');
      }, 300); // 300ms delay for a smooth load-in effect

      // 2. Animate Button (after headline)
      if (buttonRef.current) {
         setTimeout(() => {
            // This removes the initial translate-y-10 and opacity-0, triggering the animation
            buttonRef.current.classList.add('translate-y-0', 'opacity-100');
          }, 800); // Wait for headline animation to start before moving the button
      }
    }
    
    // The empty dependency array ensures this runs once on component mount.
  }, []);

  return (
    <section 
      id="home-section"
      className="relative pt-20 h-[60vh] md:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Dark overlay */}
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
        
        {/* Headline with initial state for animation */}
        <h1
          ref={headlineRef}
          className="text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-8 transition duration-500 ease-out transform translate-y-10 opacity-0"
        >
          Build Confidence and Discipline Through the Art of Judo.
        </h1>

        {/* CTA Button with initial state for animation */}
        <div
          ref={buttonRef}
          className="transition duration-500 ease-out delay-500 transform translate-y-10 opacity-0"
        >
          <CTAButton onClick={() => scrollToSection('contact-section')}>
            Claim Your Free First Class
          </CTAButton>
        </div>

      </div>
    </section>
  );
};

export default Hero;