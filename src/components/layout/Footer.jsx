import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../utils/scroll'; // Import the utility

// Navigation items for smooth scrolling (same as Navbar)
const navItems = [
  { name: 'Home', path: '/', targetId: 'home-section' },
  { name: 'About the School', path: '/', targetId: 'about-section' },
  { name: 'Classes & Training', path: '/', targetId: 'classes-section' },
  { name: 'Testimonials', path: '/', targetId: 'testimonials-section' },
  { name: 'Events', path: '/', targetId: 'events-section' },
  { name: 'Contact', path: '/', targetId: 'contact-section' },
];

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      scrollToSection(targetId);
    }
  };

  return (
    <footer className="bg-[#160B72] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1: School Info */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-red-600 inline-block">Judo School</h4>
          <p className="text-sm">
            Teaching the art of Judo to children and adults in London. <br/>
            Instilling discipline, confidence, and respect.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-red-600 inline-block">Quick Links</h4>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.targetId)}
                  className="text-sm hover:text-red-400 transition duration-150"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
                <Link to="/store" className="text-sm font-bold text-red-400 hover:text-red-600 transition duration-150">
                    Our Store
                </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-red-600 inline-block">Get In Touch</h4>
          <p className="text-sm">Sandhurst Memorial Hall<br /> Sandhurst<br /> GU47 9BJ<br /> United Kingdom

</p>
          <p className="text-sm mt-2 flex items-center"><FaPhone className="mr-2 text-red-600" /><a href="tel:+447785790190" className="hover:text-red-600"> +44 778 579 01 90 </a></p>
          <p className="text-sm flex items-center"><FaEnvelope className="mr-2 text-red-600" /> <a href="mailto:judoschooluk@gmail.com" className="hover:text-red-600">judoschooluk@gmail.com</a></p>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b-2 border-red-600 inline-block">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/judoschooluk" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-600 transition duration-150">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-600 transition duration-150">
              <FaInstagram />
            </a>
            <a href="mailto:judoschooluk@gmail.com" className="text-2xl hover:text-red-600 transition duration-150">
              <FaEnvelope />
            </a>
            <a href="tel:+447785790190" className="text-2xl hover:text-red-600 transition duration-150">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-red-900 text-center text-sm text-red-200">
        &copy; {new Date().getFullYear()} Judo School. All Rights Reserved.
        <p className="text-xs mt-1">Developed with 💙 by <a href="mailto:cordukabdullah@gmail.com">Corduka</a></p>
      </div>
    </footer>
  );
};

export default Footer;