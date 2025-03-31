import { getCurrentYear } from '../assets/js/main';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  
  // Update year when component mounts
  useEffect(() => {
    setCurrentYear(getCurrentYear());
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-primary mb-2 font-sans">
              John Doe
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Software Developer • Problem Solver • Tech Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <nav className="flex gap-6 text-sm mb-4">
              <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>
            </nav>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              &copy; {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
