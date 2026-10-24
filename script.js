(() => {
  const elements = Array.from(document.querySelectorAll('.reveal'));
  const botanicals = Array.from(document.querySelectorAll('.botanical'));

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

  const botanicalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      botanicalObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.04,
    rootMargin: '0px 0px -18% 0px'
  });

  botanicals.forEach((botanical) => {
    botanical.classList.add('botanical-ready');
    botanicalObserver.observe(botanical);
  });
})();
