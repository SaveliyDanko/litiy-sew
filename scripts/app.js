document.querySelector('.scroll-wrapper').addEventListener('wheel', function(event) {
    event.preventDefault(); // предотвращаем стандартное поведение прокрутки

    const scrollAmount = event.deltaY; // получаем направление прокрутки
    const scrollContainer = document.querySelector('.scroll-wrapper');
    
    if (scrollAmount > 0) {
        // Прокрутка вниз
        scrollContainer.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    } else {
        // Прокрутка вверх
        scrollContainer.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth'
        });
    }
}, { passive: false });

const boxes = [
  { className: "part-1", url: "./box1.html" },
  { className: "part-2", url: "./box2.html" },
  { className: "part-3", url: "./box3.html" }
];

boxes.forEach(({ className, url }) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.addEventListener("click", () => {
      // добавляем анимацию ухода
      document.body.classList.add("fade-out");

      // ждём окончания анимации и переходим
      setTimeout(() => {
        window.location.href = url;
      }, 500); // 500ms = длительность transition
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const part1 = document.querySelector('.part-1');

  // Небольшая задержка для плавности (можно убрать)
  setTimeout(() => {
    part1.classList.add('show');
  }, 100); // 100ms после загрузки
});

