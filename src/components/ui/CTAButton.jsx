import React from 'react';

const CTAButton = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 
        rounded-lg shadow-lg uppercase tracking-wide transition duration-300 
        transform hover:scale-105 ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CTAButton;