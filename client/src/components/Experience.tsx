import { useEffect, useRef } from 'react';

// Experience data
const experienceData = [
  {
    title: 'Machine Learning Intern',
    company: 'GeoEdge',
    logoUrl: 'https://companieslogo.com/img/orig/MLNX-465ef42c.png', // Example logo URL - replace with actual
    location: 'Remote',
    period: 'August 2024 - November 2024',
    description: 'Worked on a sign language detection and translation system, focusing on interpreting Indian Sign Language (ISL) sentences.',
    responsibilities: [
      'Developed a system to detect and interpret Indian Sign Language (ISL) sentences with SOV structure',
      'Implemented computer vision algorithms for real-time hand gesture recognition',
      'Optimized model performance for efficient real-time sign language detection',
      'Integrated natural language processing for translation of sign language to text'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLTK']
  },
  {
    title: 'Research Assistant',
    company: 'VivoCardio',
    logoUrl: 'https://companieslogo.com/img/orig/CRSP-674af315.png', // Example logo URL - replace with actual
    location: 'Pune, India',
    period: 'July 2024 - Present',
    description: 'Leading research initiatives in cardiovascular health monitoring systems using wearable technology.',
    responsibilities: [
      'Designing and testing wearable ECG monitoring solutions',
      'Developing machine learning algorithms for heart anomaly detection',
      'Collaborating with medical professionals to validate system accuracy',
      'Documenting research findings and preparing technical reports'
    ],
    technologies: ['Python', 'Signal Processing', 'Machine Learning', 'Embedded Systems']
  },
  {
    title: 'Mentor',
    company: 'Catalyst Student Mentorship Program',
    logoUrl: '',
    location: 'Pune, India',
    period: 'April 2023 - June 2024',
    description: 'Served as a mentor teaching Android development to approximately 300+ students, focusing on building practical mobile applications.',
    responsibilities: [
      'Created and delivered comprehensive Android development curriculum',
      'Provided one-on-one and group mentoring sessions to solve technical challenges',
      'Guided students through the development of real-world Android applications',
      'Conducted code reviews and helped students implement best practices'
    ],
    technologies: ['Android', 'Java', 'Kotlin', 'Mobile Development', 'Technical Teaching']
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Animate timeline items
          timelineItemsRef.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.style.opacity = '1';
              }, 300 + index * 200);
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
    <section id="experience" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-gray-900 dark:text-white mb-4">Professional Experience & Leadership</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            A chronological overview of my professional journey, leadership roles, and accomplishments.
          </p>
        </div>
        
        <div className="timeline-container max-w-4xl mx-auto">
          <div className="timeline-line"></div>
          
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className={`mb-12 relative timeline-item animate-fade-in`}
              ref={el => timelineItemsRef.current[index] = el}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex flex-wrap justify-between items-start mb-5">
                  <div className="flex items-start">
                    {experience.logoUrl ? (
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 mr-4 bg-white">
                        <img 
                          src={experience.logoUrl} 
                          alt={`${experience.company} logo`} 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = "w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700";
                              fallback.innerHTML = `<span className="text-gray-500 dark:text-gray-300 font-mono text-sm font-bold">
                                ${experience.company.split(' ').map(word => word[0]).join('')}
                              </span>`;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center mr-4">
                        <span className="text-gray-600 dark:text-gray-300 font-mono text-sm font-bold">
                          {experience.company.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{experience.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{experience.company}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                        <i className="fas fa-map-marker-alt text-xs mr-1"></i> {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mt-2 md:mt-0 flex items-center">
                    <i className="far fa-calendar-alt mr-1.5"></i> {experience.period}
                  </div>
                </div>
                
                <div className="mb-5 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    {experience.description}
                  </p>
                </div>
                
                <div className="mb-5">
                  <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <i className="fas fa-tasks text-primary mr-2"></i> Key Responsibilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li className="flex items-start hover:bg-gray-50 dark:hover:bg-gray-700/30 p-2 rounded-md transition-colors" key={respIndex}>
                        <i className="fas fa-check-circle text-green-500 dark:text-green-400 mt-1 mr-2"></i>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center">
                    <i className="fas fa-code text-primary mr-2"></i> Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
