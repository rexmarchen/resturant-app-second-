import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white font-bold">Lisbon Tapas</h3>
            <p className="text-sm leading-relaxed">
              Authentic Portuguese & Spanish tapas in the heart of Wrexham. Trusted by 5,000+ happy customers over 5 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-gold transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold transition-colors">Book a Table</Link></li>
              <li><Link to="/testimonials" className="hover:text-brand-gold transition-colors">Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-brand-gold shrink-0" />
                <span>6 Church St,<br/>Wrexham LL13 8LS,<br/>United Kingdom</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-gold shrink-0" />
                <span>+44 1978 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-gold shrink-0" />
                <span>info@lisbontapas.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Sun:</span>
                <span>12:00 PM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Lisbon Tapas Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;