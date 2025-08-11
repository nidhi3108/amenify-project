import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              Amenify India
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Amenify has raised <strong>$20M</strong> to date and provides
              premium interior furnishing, lifestyle and maintenance services to
              residential and commercial clients. With over{' '}
              <strong>60,000+ five star reviews</strong> and{' '}
              <strong>100,000+ clients served</strong>, Amenify India brings the
              same quality assurance to India as offered by the Amenify
              Corporation, USA.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Cities We Serve</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  NCR (Gurugram, Delhi, Noida)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Bangalore
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Hyderabad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Mumbai
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Pune
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Kolkata
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Chandigarh
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Ahmedabad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Login / Sign-up
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-green-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-green-400 mr-3 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">
                    Emaar Digital Greens, Sector 61, Gurugram Haryana - 122001
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-green-400 mr-3" size={18} />
                <p className="text-gray-300">+91 98731 23716</p>
              </div>

              <div className="flex items-center">
                <Mail className="text-green-400 mr-3" size={18} />
                <p className="text-gray-300">india@amenify.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12 text-gray-300 text-sm leading-relaxed">
          <p>
            Amenify offers expert home and commercial Best Interior Designers
            Company in Delhi NCR and other major Indian cities. From{' '}
            <strong>2BHK homes</strong> to <strong>luxury apartments</strong>{' '}
            and <strong>office spaces</strong>, we bring together style,
            functionality, and cutting-edge 3D-AR/VR tech to turn your vision
            into reality.
          </p>
          <p className="mt-4 italic">
            Whether you're searching for{' '}
            <em>
              interior designers near me, home interior design on a budget
            </em>
            , or <em>office renovation experts</em>, our in-house team ensures
            on-time delivery, transparent pricing, and premium-quality finishes.
          </p>
          <p className="mt-4">
            Ready to design your dream space? Trust one of India’s most
            innovative and reliable interior design companies; Amenify.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Amenify India. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
