import { useEffect, useRef } from 'react';

// Programming language skill data
const programmingSkills = [
  { name: 'Python', level: 90 },
  { name: 'C/C++', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'VHDL', level: 75 }
];

// Technologies data
const technologiesSkills = [
  'TensorFlow', 'OpenCV', 'MATLAB', 'Git',
  'SQLite', 'Linux', 'Raspberry Pi', 'FPGA'
];

// Academic knowledge data
const academicSkills = [
  'Operating Systems', 'Data Structures', 'Computer Networks',
  'Linux Systems', 'DBMS', 'Object-Oriented Programming'
];

// Professional skills data
const professionalSkills = [
  {
    name: 'Problem Solving',
    description: 'Analytical approach to diagnose issues and develop innovative solutions.'
  },
  {
    name: 'Leadership',
    description: 'Experience leading teams and organizing technical workshops and events.'
  },
  {
    name: 'Team Collaboration',
    description: 'Effective team player with experience in cross-functional project environments.'
  },
  {
    name: 'Mentorship',
    description: 'Dedicated to teaching and guiding others in technical learning journeys.'
  }
];

// Additional skills data
const additionalSkills = [
  { name: 'Hardware-Software Co-design', level: 85 },
  { name: 'Embedded Systems', level: 80 },
  { name: 'Machine Learning', level: 90 },
  { name: 'Signal Processing', level: 75 }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Animate skill bars when visible
          skillBarsRef.current.forEach((bar, index) => {
            if (bar) {
              setTimeout(() => {
                const skill = index < programmingSkills.length 
                  ? programmingSkills[index] 
                  : additionalSkills[index - programmingSkills.length];
                  
                bar.style.width = `${skill.level}%`;
              }, 300 + index * 100);
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-darkbg transition-colors duration-300 opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-darkbg dark:text-white mb-4">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold font-sans text-darkbg dark:text-white mb-6">Technical Skills</h3>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Programming Languages</h4>
              
              {programmingSkills.map((skill, index) => (
                <div className="mb-5" key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress bg-primary" 
                      style={{ width: '0%' }}
                      ref={el => skillBarsRef.current[index] = el}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {technologiesSkills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-2 bg-white dark:bg-gray-800 text-primary dark:text-blue-300 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Academic Knowledge */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Academic Knowledge</h4>
              <div className="grid grid-cols-2 gap-4">
                {academicSkills.map(skill => (
                  <div className="flex items-center" key={skill}>
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Soft Skills & Other Capabilities */}
          <div>
            <h3 className="text-2xl font-semibold font-sans text-darkbg dark:text-white mb-6">Professional Skills</h3>
            
            {/* Soft Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Leadership & Collaboration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {professionalSkills.map(skill => (
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm" key={skill.name}>
                    <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{skill.name}</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Skills */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Specialized Knowledge</h4>
              {additionalSkills.map((skill, index) => (
                <div className="mb-5" key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress bg-secondary" 
                      style={{ width: '0%' }}
                      ref={el => skillBarsRef.current[programmingSkills.length + index] = el}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
