import { useEffect, useRef } from 'react';

// Experience data
const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2020 - Present',
    description: 'Led development of cloud-based enterprise solutions, improving system performance by 40% and implementing CI/CD pipelines that reduced deployment time by 65%.',
    responsibilities: [
      'Architected and implemented scalable microservices using Node.js and Express',
      'Led a team of 5 developers, providing technical mentorship and code reviews',
      'Redesigned authentication system improving security and reducing login failures by 90%'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'GraphQL']
  },
  {
    title: 'Full-Stack Developer',
    company: 'InnovateSoft Inc.',
    location: 'Seattle, WA',
    period: '2018 - 2020',
    description: 'Developed responsive web applications for clients across various industries, resulting in a 35% increase in user engagement and a 25% decrease in bounce rates.',
    responsibilities: [
      'Built and maintained client websites using React, Vue.js, and vanilla JavaScript',
      'Implemented RESTful APIs and database schemas for web applications',
      'Collaborated with UI/UX designers to implement responsive, accessible interfaces'
    ],
    technologies: ['JavaScript', 'Vue.js', 'Express', 'PostgreSQL', 'SASS']
  },
  {
    title: 'Front-End Developer',
    company: 'Digital Media Labs',
    location: 'Austin, TX',
    period: '2016 - 2018',
    description: 'Started as a junior developer and quickly advanced to take on more complex projects, focusing on creating responsive, accessible web interfaces.',
    responsibilities: [
      'Developed and maintained client websites using HTML, CSS, and JavaScript',
      'Optimized website performance, reducing load times by 40%',
      'Implemented responsive designs ensuring cross-browser compatibility'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap']
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
    <section id="experience" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-darkbg dark:text-white mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            A chronological overview of my professional journey and accomplishments.
          </p>
        </div>
        
        <div className="timeline-container max-w-4xl mx-auto">
          <div className="timeline-line"></div>
          
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className={`mb-12 relative timeline-item opacity-0`}
              ref={el => timelineItemsRef.current[index] = el}
            >
              <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center mr-3">
                        <span className="text-gray-500 dark:text-gray-300 font-mono text-xs">
                          {experience.company.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300">{experience.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {experience.period}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {experience.description}
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Key Responsibilities:</h4>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li className="flex items-start" key={respIndex}>
                        <i className="fas fa-caret-right text-primary mt-1.5 mr-2"></i>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-sm">{tech}</span>
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
