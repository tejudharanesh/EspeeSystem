
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ESPEE SYSTEM</h3>
            <p className="mb-6 text-gray-300">
              Providing innovative & energy-efficient heat pump solutions since 2013.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-espee-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-espee-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-espee-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-espee-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-espee-blue transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-espee-blue transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-espee-blue transition-colors">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-espee-blue transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-espee-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-espee-blue transition-colors">Residential Heat Pumps</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-espee-blue transition-colors">Commercial Heat Pumps</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-espee-blue transition-colors">Industrial Heat Pumps</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-espee-blue transition-colors">Swimming Pool Heat Pumps</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-espee-blue transition-colors">Supportive Products</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-espee-blue" />
                <p><address></address></p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-espee-blue" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-espee-blue" />
                <p>info@espeesystem.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ESPEE SYSTEM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
