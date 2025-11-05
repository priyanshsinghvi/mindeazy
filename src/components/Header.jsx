import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = ({ onAuthClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="w-full px-3 sm:px-4 lg:px-5">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-[#1D3557] dark:text-white font-semibold text-xl hover:text-[#457B9D] transition-colors flex items-center space-x-2"
          >
            MindfulSpace
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={onAuthClick}
              className="bg-[#A8DADC] text-[#1D3557] dark:bg-[#457B9D] dark:text-white px-6 py-2.5 rounded-full hover:bg-[#457B9D] hover:text-white dark:hover:bg-[#A8DADC] dark:hover:text-[#1D3557] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A8DADC] shadow-sm"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-[#1D3557] dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-6">
            <div className="flex flex-col space-y-5 px-6">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#457B9D] dark:text-gray-300 hover:text-[#1D3557] dark:hover:text-white transition-colors"
              >
                Contact
              </button>
              <button
                onClick={onAuthClick}
                className="bg-[#A8DADC] text-[#1D3557] dark:bg-[#457B9D] dark:text-white px-6 py-3 rounded-full hover:bg-[#457B9D] hover:text-white dark:hover:bg-[#A8DADC] dark:hover:text-[#1D3557] transition-all mt-2 text-center font-medium shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;