// src/components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll'; // Import the utility
import logoImage from '../../assets/logo.webp';

// Navigation items for smooth scrolling
const navItems = [
  { name: 'Home', path: '/', targetId: 'home-section' },
  { name: 'About the School', path: '/', targetId: 'about-section' },
  { name: 'Classes & Training', path: '/', targetId: 'classes-section' },
  { name: 'Testimonials', path: '/', targetId: 'testimonials-section' },
  { name: 'Events', path: '/', targetId: 'events-section' },
  { name: 'Contact', path: '/', targetId: 'contact-section' },
];

const Navbar = () => {
  const handleNavClick = (e, targetId) => {
    // Only scroll if we are on the Home page
    if (window.location.pathname === '/') {
      e.preventDefault();
      scrollToSection(targetId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#160B72] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 text-white text-2xl font-black tracking-wider">
           <img src={logoImage} alt="Judo School Logo" className="h-14 w-auto mr-3" />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.targetId)}
                  className="text-white hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile Menu Button - Left out for brevity */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;