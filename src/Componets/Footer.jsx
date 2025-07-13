import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-rose-900 via-rose-800 to-purple-900 text-gray-100 pt-12 pb-6 mt-0">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">YaaRaa Technologies</h2>
          <p className="text-sm leading-relaxed text-rose-100">
            Empowering women through cutting-edge IT training, real-time internships, and placement support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Services", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-yellow-200 transition duration-200 ease-in-out"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-rose-100">
            <p className="flex items-start gap-2 leading-relaxed">
              <MapPin size={16} className="mt-1 text-yellow-300" />
              <span>
                2nd Floor, Deepam Traders,<br />
                Near GK Trading, S. Kodikulam,<br />
                K. Pudur, Tamil Nadu 625007, India
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-300" /> +91 73394 08488
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-300" /> support@yaaraa.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://in.linkedin.com/company/yaaraa-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-rose-800 mt-10 pt-6 text-center text-xs text-rose-200">
        &copy; {new Date().getFullYear()} YaaRaa Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
