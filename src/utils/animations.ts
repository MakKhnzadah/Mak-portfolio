/**
 * This file contains utility functions for the portfolio website
 */

/**
 * Handles scroll animations for sections
 */
export const initSectionAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all sections
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
};

/**
 * Smooth scroll to an element when a navigation link is clicked
 * @param {string} elementId - The ID of the element to scroll to
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
