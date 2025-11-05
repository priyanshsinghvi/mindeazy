import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-8 md:mt-12">
      <div className="w-full px-3 sm:px-4 lg:px-5 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand Section */}
          <div className="space-y-4 md:pr-6">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-[#457B9D] transition-transform hover:scale-110" />
              <span className="text-xl font-semibold text-[#1D3557] dark:text-white">
                MindfulSpace
              </span>
            </Link>
            <p className="text-[#457B9D] dark:text-gray-400 text-sm">
              Created by Priyansh Singhvi, a passionate developer dedicated to improving mental wellness through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1D3557] dark:text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '#about' },
                { name: 'Contact Us', path: '#contact' },
                { name: 'Blog', path: '/blog' },
                { name: 'Community', path: '/community' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#457B9D] dark:text-gray-400 hover:text-[#1D3557] dark:hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-[#1D3557] dark:text-white font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Cookie Policy', path: '/cookies' },
                { name: 'Disclaimer', path: '/disclaimer' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#457B9D] dark:text-gray-400 hover:text-[#1D3557] dark:hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-[#1D3557] dark:text-white font-semibold mb-4 text-lg">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Twitter, href: 'https://twitter.com' },
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Youtube, href: 'https://youtube.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F1FAEE] dark:bg-gray-800 flex items-center justify-center text-[#457B9D] dark:text-gray-400 hover:bg-[#A8DADC] dark:hover:bg-gray-700 hover:text-[#1D3557] dark:hover:text-white hover:scale-110 transition-all shadow-sm"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <a
                href="https://priyanshsinghvi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-[#457B9D] dark:text-gray-400 hover:text-[#1D3557] dark:hover:text-white transition-colors"
              >
                <span>Visit Creator's Portfolio</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#457B9D] dark:text-gray-400">
              © {currentYear} MindfulSpace. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-[#457B9D] dark:text-gray-400">
                Made with
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm text-[#457B9D] dark:text-gray-400">
                by Priyansh Singhvi
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;