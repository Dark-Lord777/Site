// Выбираем все текстовые блоки
const faders = document.querySelectorAll('p, p1, h1, h2, h3, h4, h5, h6, .formula, .quote, img ');

// Parametrs viewers
const appearOptions = {
  threshold: 0.1, 
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible'); 
    observer.unobserve(entry.target); 
  });
}, appearOptions);

// Add viewer jn every elements
faders.forEach(fader => {
  fader.classList.add('fade-in-section'); 
  appearOnScroll.observe(fader);
});
