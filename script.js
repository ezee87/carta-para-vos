(() => {
  const elements = Array.from(document.querySelectorAll('.reveal'));

  if (!('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('js');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -12% 0px'
  });

  elements.forEach((element) => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
})();
