import { useState, useEffect } from 'react';
import chinmayPhoto from '../assets/images/chinmay-profile.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-darkbg dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-sm font-medium">
              <span>Electronics & Telecommunications Engineering Student</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans">
              Chinmay Inamdar
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Machine Learning Enthusiast passionate about the intersection of hardware and software development, exploring innovations in hardware-software co-design.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium transition-colors shadow-md hover:shadow-lg"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-blue-300 dark:border-blue-500 dark:hover:bg-blue-800 dark:hover:border-blue-800 font-medium transition-all"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-4 pt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
          <div className={`flex justify-center md:justify-end ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src={chinmayPhoto} 
                alt="Chinmay Inamdar headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
