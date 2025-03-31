import { useEffect, useRef } from 'react';

// Education data
const educationData = [
  {
    degree: 'Bachelor of Technology',
    field: 'Electronics and Telecommunications Engineering',
    institution: 'Vishwakarma Institute of Technology',
    location: 'Pune, Maharashtra',
    period: '2022-2026 (Expected)',
    gpa: '8.1',
    courses: ['Digital Signal Processing', 'Embedded Systems', 'Communication Networks', 'Microprocessors', 'Operating Systems', 'Data Structures']
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const educationItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Animate education items
          educationItemsRef.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.style.opacity = '1';
              }, 200 + index * 200);
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
    <section id="education" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-darkbg dark:text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            My academic background and continuous learning journey.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 opacity-0"
                ref={el => educationItemsRef.current[index] = el}
              >
                <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-primary dark:text-blue-300 text-2xl"></i>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{education.field}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{education.institution}, {education.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                          {education.period}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">CGPA: {education.gpa}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">
                        Key Courses:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.courses.map(course => (
                          <span 
                            key={course} 
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400">
                    Currently focusing on the intersection of embedded systems, signal processing, and machine learning applications.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;