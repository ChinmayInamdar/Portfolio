import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold font-sans text-darkbg dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            Get to know more about me, my background, and what drives me professionally.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-sans text-darkbg dark:text-white">My Story</h3>
            <p className="text-gray-600 dark:text-gray-300">
              With over 5 years of experience in software development, I've built a strong foundation in creating efficient, scalable applications. I began my journey as a front-end developer before expanding my skills to become a full-stack engineer capable of handling complex projects from conception to deployment.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm particularly passionate about creating intuitive user experiences and solving challenging problems through clean, maintainable code. My background in both startup environments and larger organizations has given me a versatile perspective on development practices and collaborative workflows.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold font-sans text-darkbg dark:text-white mb-3">Professional Goals</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-chevron-right text-primary mt-1 mr-2"></i>
                  <span>Develop innovative solutions that make a positive impact on users' lives</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-right text-primary mt-1 mr-2"></i>
                  <span>Continue mastering emerging technologies and best practices</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chevron-right text-primary mt-1 mr-2"></i>
                  <span>Mentor junior developers and contribute to the tech community</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md space-y-6">
            <div>
              <h4 className="text-xl font-semibold font-sans text-darkbg dark:text-white mb-3">Personal Details</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-24 text-gray-500 dark:text-gray-400 flex-shrink-0">
                    <i className="fas fa-map-marker-alt mr-2"></i> Location:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">San Francisco, CA</div>
                </li>
                <li className="flex items-center">
                  <div className="w-24 text-gray-500 dark:text-gray-400 flex-shrink-0">
                    <i className="fas fa-graduation-cap mr-2"></i> Degree:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">BS in Computer Science</div>
                </li>
                <li className="flex items-center">
                  <div className="w-24 text-gray-500 dark:text-gray-400 flex-shrink-0">
                    <i className="fas fa-user-tie mr-2"></i> Role:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">Senior Software Engineer</div>
                </li>
                <li className="flex items-center">
                  <div className="w-24 text-gray-500 dark:text-gray-400 flex-shrink-0">
                    <i className="fas fa-language mr-2"></i> Languages:
                  </div>
                  <div className="text-gray-800 dark:text-gray-200">English (Native), Spanish (Intermediate)</div>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold font-sans text-darkbg dark:text-white mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Open Source</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">UI/UX Design</span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Web Accessibility</span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Performance Optimization</span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Mobile Development</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold font-sans text-darkbg dark:text-white mb-3">Download</h4>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-gray-800 dark:text-gray-200 font-medium transition-colors"
              >
                <i className="fas fa-file-pdf mr-2"></i> Resume PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
