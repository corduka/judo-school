// src/components/sections/ServicesSummary.jsx
import React from 'react';
import { FaChild, FaUser, FaStar } from 'react-icons/fa';

const services = [
  { 
    icon: FaChild, 
    headline: "Build Confidence & Focus", 
    text: "Our children's classes focus on fun, respect, and discipline. Watch your child grow into a confident, responsible leader.",
    linkText: "View Kids Schedule",
    linkTarget: "#classes-section"
  },
  { 
    icon: FaUser, 
    headline: "World-Class Fitness & Stress Relief", 
    text: "Adult classes provide a full-body workout, teaching practical self-defense while offering a great way to relieve stress.",
    linkText: "Explore Adult Classes",
    linkTarget: "#classes-section"
  },
  { 
    icon: FaStar, 
    headline: "Accelerated Mastery", 
    text: "Tailored one-on-one sessions with our experienced Sensei. Perfect for focused competition training or rapidly mastering techniques.",
    linkText: "Book Private Trial",
    linkTarget: "#contact-section"
  },
];

const ServicesSummary = () => (
  <section id="about-section" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-[#1A237E] text-center mb-12">Our Core Offerings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-xl text-center border-t-4 border-red-600 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <service.icon className="mx-auto text-6xl text-red-600 mb-4" />
            <h3 className="text-2xl font-bold text-[#1A237E] mb-3">{service.headline}</h3>
            <p className="text-gray-600 mb-6">{service.text}</p>
            <a href={service.linkTarget} className="text-red-600 font-semibold hover:text-red-800 transition duration-150">
                {service.linkText} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSummary;