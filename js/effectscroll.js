// Выбираем все текстовые блоки
const faders = document.querySelectorAll('p, p1, h1, h2, h3, h4, h5, h6, .formula, .quote');

// Параметры наблюдателя
const appearOptions = {
  threshold: 0.1, 
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible'); // показываем элемент
    observer.unobserve(entry.target); // анимируем один раз
  });
}, appearOptions);

// Подключаем наблюдателя к каждому элементу
faders.forEach(fader => {
  fader.classList.add('fade-in-section'); // добавляем класс ко всем сразу
  appearOnScroll.observe(fader);
});
