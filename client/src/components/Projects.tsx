import { useEffect, useRef } from 'react';

// Project data
const projectsData = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for online retailers with real-time analytics, inventory management, and order processing capabilities.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    featured: true,
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Social Media Analytics',
    description: 'Platform that aggregates and analyzes social media data, providing actionable insights and custom reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
    featured: false,
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, deadline tracking, and team performance analytics.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: ['React', 'Firebase', 'Redux', 'Material UI'],
    featured: false,
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first application that tracks workouts, nutrition, and provides personalized fitness recommendations.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    featured: false,
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Weather App',
    description: 'Location-based weather forecasting application with interactive maps, historical data, and severe weather alerts.',
    image: 'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: ['JavaScript', 'OpenWeatherAPI', 'Leaflet.js', 'PWA'],
    featured: false,
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'E-Learning Platform',
    description: 'Online learning platform with course creation tools, interactive assessments, and student progress tracking.',
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    technologies: ['Django', 'Python', 'PostgreSQL', 'AWS S3'],
    featured: false,
    demoLink: '#',
    codeLink: '#'
  }
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
          <h2 className="text-3xl font-bold font-sans text-darkbg dark:text-white mb-4">Portfolio Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Explore a selection of my most significant projects and technical accomplishments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all opacity-0 translate-y-8"
              ref={el => projectCardsRef.current[index] = el}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-md">Featured</span>
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
                    <i className="fas fa-globe mr-1"></i> Live Demo
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
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-5 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-md transition-colors"
          >
            <i className="fab fa-github mr-2"></i> See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
