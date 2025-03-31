import { useEffect, useRef } from 'react';

// Education data
const educationData = [
  {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'University of Technology',
    period: '2012-2016',
    courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Operating Systems', 'Software Engineering']
  },
  {
    degree: 'Professional Certification',
    field: 'Full-Stack Web Development',
    institution: 'Tech Academy',
    period: '2017',
    courses: ['Front-End Development', 'Back-End Systems', 'RESTful APIs', 'Database Design']
  }
];

// Continuing education data
const continuingEducation = [
  {
    course: 'Machine Learning Specialization',
    provider: 'Stanford University via Coursera',
    year: '2019',
    icon: 'https://www.coursera.org/favicon.ico'
  },
  {
    course: 'Advanced React and Redux',
    provider: 'Udemy',
    year: '2020',
    icon: 'https://www.udemy.com/favicon.ico'
  },
  {
    course: 'Cloud Architecture with AWS',
    provider: 'LinkedIn Learning',
    year: '2021',
    icon: 'https://www.linkedin.com/favicon.ico'
  },
  {
    course: 'Microservices Architecture',
    provider: 'Pluralsight',
    year: '2022',
    icon: 'https://pluralsight.imgix.net/favicon.ico'
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const educationItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const continuingEdItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
          
          // Animate continuing education items
          continuingEdItemsRef.current.forEach((item, index) => {
            if (item) {
              setTimeout(() => {
                item.classList.add('animate-fade-in');
                item.style.opacity = '1';
              }, 600 + index * 150);
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
            My academic background and continuous learning endeavors.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 opacity-0"
                ref={el => educationItemsRef.current[index] = el}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <i className={`fas ${index === 0 ? 'fa-graduation-cap' : 'fa-certificate'} text-primary dark:text-blue-300 text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{education.field}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{education.institution}, {education.period}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {index === 0 ? 'Key Courses:' : 'Focus Areas:'}
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
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold font-sans text-darkbg dark:text-white mb-6 text-center">Continuing Education</h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {continuingEducation.map((course, index) => (
                  <div 
                    key={index} 
                    className="flex items-start opacity-0"
                    ref={el => continuingEdItemsRef.current[index] = el}
                  >
                    <img src={course.icon} alt={course.provider} className="w-8 h-8 mt-1 mr-3" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">{course.course}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.provider}, {course.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
