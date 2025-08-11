import React, { useState } from 'react';
import Logo from '../images/Amenify-Logo-Dark-Blue.png';
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-green-600">
            <img src={Logo} alt="Amenify Logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Product Catalog
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Blog
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Facebook size={16} className="mr-2" />
            </div>
            <div className="flex items-center text-gray-600">
              <Instagram size={16} className="mr-2" />
            </div>
            <div className="flex items-center text-gray-600">
              <Twitter size={16} className="mr-2" />
            </div>
            <div className="flex items-center text-gray-600">
              <Linkedin size={16} className="mr-2" />
            </div>
            <div className="flex items-center text-white bg-green-600 px-5 py-3 rounded-full">
              <button className="flex items-center">Login</button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                About
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
