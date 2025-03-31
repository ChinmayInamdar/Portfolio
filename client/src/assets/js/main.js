// This file contains JavaScript utilities and functions for the portfolio
// The main functionality is now handled by the React components

// Helper functions that can be used across components
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerHeight = 64; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Email validation
export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Form validation
export const validateForm = (formData) => {
  const errors = {};
  
  // Name validation
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  }
  
  // Email validation
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Subject validation
  if (!formData.subject || formData.subject.trim() === '') {
    errors.subject = 'Subject is required';
  }
  
  // Message validation
  if (!formData.message || formData.message.trim() === '') {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Handle form submission
export const handleFormSubmission = async (formData) => {
  try {
    // In a real application, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    };
  } catch (error) {
    return {
      success: false,
      message: 'There was an error sending your message. Please try again.'
    };
  }
};

// Dynamic loading for content sections
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
      imgObserver.observe(img);
    });
  } else {
    // Fallback for browsers without intersection observer support
    document.querySelectorAll('img.lazy').forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.setAttribute('src', src);
        img.classList.remove('lazy');
      }
    });
  }
};

// Helper to get current year
export const getCurrentYear = () => {
  return new Date().getFullYear();
};
