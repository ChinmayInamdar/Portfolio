import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if page is scrolled to update header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full bg-white dark:bg-darkbg z-50 transition-colors duration-300 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero" className="text-xl font-bold text-primary">
            <span className="font-sans">Portfolio</span>
          </a>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
            <a href="#skills" className="font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="font-medium hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#education" className="font-medium hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">Contact</a>
            <button 
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun text-yellow-300' : 'fa-moon text-yellow-500'} transition-transform duration-300`}></i>
            </button>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${
        isMobileMenuOpen ? 'block' : 'hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMobileMenu}>About</a>
          <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMobileMenu}>Skills</a>
          <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMobileMenu}>Experience</a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMobileMenu}>Projects</a>
          <a href="#education" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMobileMenu}>Education</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800" onClick={closeMobileMenu}>Contact</a>
          <div className="px-3 py-2">
            <button 
              className="flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => {
                toggleTheme();
                closeMobileMenu();
              }}
            >
              <span className={`${isDarkMode ? 'hidden' : 'inline'}`}>Switch to Dark Mode</span>
              <span className={`${isDarkMode ? 'inline' : 'hidden'}`}>Switch to Light Mode</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
