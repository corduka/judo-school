import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSummary from '../components/sections/ServicesSummary';
import Testimonials from '../components/sections/Testimonials';
import ProblemSolution from '../components/sections/ProblemSolution';
import Schedule from '../components/sections/Schedule';
import ContactForm from '../components/sections/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials /> {/* Social Proof (Testimonials) section first */}
      <ProblemSolution />
      <ServicesSummary />
      <Schedule />
      <ContactForm />
      {/* 'Events' section is currently a placeholder link, but would go here */}
    </>
  );
};

export default Home;