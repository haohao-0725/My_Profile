document.addEventListener('DOMContentLoaded', () => {
  // Setup IntersectionObserver for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  // Select all timeline items and observe them
  const timelineItems = document.querySelectorAll('.portfolio-card');
  timelineItems.forEach(item => {
    observer.observe(item);
  });
});
