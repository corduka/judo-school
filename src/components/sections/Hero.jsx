// src/components/sections/Hero.jsx
import React, { useEffect, useRef } from 'react';
import CTAButton from '../ui/CTAButton';
import heroImage from '../../assets/judo-hero.jpg';

const Hero = () => {
  const headlineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation logic
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate Headline: slide up
          setTimeout(() => {
            headlineRef.current.classList.add('translate-y-0', 'opacity-100');
          }, 300); // Slight delay for initial visibility

          // Animate Button: slide up after headline
          setTimeout(() => {
            buttonRef.current.classList.add('translate-y-0', 'opacity-100');
          }, 800); 

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
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