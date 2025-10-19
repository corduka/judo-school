import React from 'react';
import CTAButton from '../ui/CTAButton';

const ContactForm = () => (
  <section id="contact-section" className="py-16 bg-[#1A237E]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-white text-center mb-10">
        Claim Your Free Class & Start Today
      </h2>
      
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Which class are you interested in?</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            ></textarea>
          </div>
          <div className="pt-2 text-center">
            <CTAButton className="w-full">
              Send My Free Class Request
            </CTAButton>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactForm;