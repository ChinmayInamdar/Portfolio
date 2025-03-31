import { useEffect, useRef } from 'react';

// Project data
const projectsData = [
  {
    title: 'Federated GAN for Medical Images',
    description: 'Developed a distributed system for generating synthetic medical images while preserving data privacy. Implemented training across multiple datasets using the Flower framework for improved scalability.',
    bgColor: 'from-blue-500 to-blue-700',
    icon: 'fa-brain',
    technologies: ['Python', 'TensorFlow', 'Flower Framework', 'Distributed Computing'],
    featured: true,
    demoLink: '#',
    codeLink: 'https://github.com/ChinmayInamdar'
  },
  {
    title: 'Smart GPS Tracking System',
    description: 'Optimized GPS tracking system with efficient data handling and storage. Implemented circular buffer for memory optimization, reducing data redundancy by 40% and designed robust data persistence using SQLite.',
    bgColor: 'from-green-500 to-green-700',
    icon: 'fa-map-marker-alt',
    technologies: ['Python', 'SQLite', 'Streamlit', 'Raspberry Pi', 'OpenStreetMap'],
    featured: false,
    demoLink: '#',
    codeLink: 'https://github.com/ChinmayInamdar'
  },
  {
    title: 'ECG Arrhythmia Detection',
    description: 'FPGA-based system for real-time arrhythmia detection utilizing hardware-software co-design. Implemented efficient QRS detection and RR interval computation achieving 96% classification accuracy.',
    bgColor: 'from-red-500 to-red-700',
    icon: 'fa-heartbeat',
    technologies: ['VHDL', 'MATLAB', 'Python', 'FPGA', 'ECG Analysis'],
    featured: true,
    demoLink: '#',
    codeLink: 'https://github.com/ChinmayInamdar'
  }
];

// Filter categories for projects
const categories = [
  'All',
  'Python',
  'Hardware',
  'Machine Learning',
  'FPGA'
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Animate project cards
          projectCardsRef.current.forEach((card, index) => {
            if (card) {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.add('translate-y-0');
                card.classList.remove('translate-y-8');
                card.style.opacity = '1';
              }, 100 + index * 150);
            }
          });
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-darkbg transition-colors duration-300 opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-darkbg dark:text-white mb-4">Technical Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Explore a selection of my most significant projects spanning hardware, software, and machine learning domains.
          </p>
        </div>
        
        {/* Project Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all opacity-0 translate-y-8"
              ref={el => projectCardsRef.current[index] = el}
            >
              <div className={`h-48 overflow-hidden relative bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                <i className={`fas ${project.icon} text-white text-5xl opacity-90`}></i>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-white text-gray-800 dark:bg-gray-800 dark:text-white text-xs font-semibold rounded-md shadow-sm">Featured</span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.demoLink} 
                    className="px-3 py-2 bg-primary hover:bg-blue-600 text-white text-sm rounded-lg transition-colors"
                  >
                    <i className="fas fa-globe mr-1"></i> Project Details
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-lg transition-colors"
                  >
                    <i className="fab fa-github mr-1"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/ChinmayInamdar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-5 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md transition-colors"
          >
            <i className="fab fa-github mr-2"></i> Explore More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
