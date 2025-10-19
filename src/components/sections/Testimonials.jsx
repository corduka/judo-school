import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => (
  <section id="testimonials-section" className="bg-gray-100 py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <FaQuoteLeft className="mx-auto text-5xl text-red-600 mb-6" />
      <blockquote className="text-2xl italic text-gray-800 leading-relaxed">
        "My son has struggled with shyness, but since joining the Kids Program, he is a different child. His confidence is soaring! Thank you, Sensei."
      </blockquote>
      <p className="mt-4 text-lg font-semibold text-gray-600">— Sarah M., Parent in London</p>
    </div>
  </section>
);

export default Testimonials;