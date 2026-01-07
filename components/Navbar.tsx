import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { NavLinkType } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: NavLinkType.HOME },
    { name: 'About', path: NavLinkType.ABOUT },
    { name: 'Booking', path: NavLinkType.SERVICES },
    { name: 'Reviews', path: NavLinkType.TESTIMONIALS },
    { name: 'Blog', path: NavLinkType.BLOG },
    { name: 'Contact', path: NavLinkType.CONTACT },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <UtensilsCrossed className="h-8 w-8 text-brand-red" />
              <div>
                <span className="block text-xl font-bold font-serif leading-none tracking-tight">LISBON TAPAS</span>
                <span className="block text-xs text-brand-gold tracking-widest uppercase">Restaurant</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-brand-red font-bold' : 'text-stone-600 hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/services"
              className="bg-brand-red text-white px-5 py-2 rounded-md font-semibold hover:bg-red-800 transition-colors shadow-sm"
            >
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-stone-600 hover:text-brand-red focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-brand-cream text-brand-red'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
               <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-red text-white px-5 py-3 rounded-md font-semibold hover:bg-red-800 transition-colors"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;