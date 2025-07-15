const screen1 = document.querySelector('.first-screen');
const screen2 = document.querySelector('.second-screen');
const screen3 = document.querySelector('.third-screen');
const screens = document.querySelectorAll('.screen');

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger-button');
    const offScreenMenu = document.querySelector('.first-screen__off-screen-menu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      offScreenMenu.classList.toggle('off-screen-menu-is-active');
    });
})


let currentScreen = 0;
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  const direction = e.deltaY > 0 ? 1 : -1;
  const nextScreen = currentScreen + direction;

  if (nextScreen >= 0 && nextScreen < screens.length) {
    currentScreen = nextScreen;
    isScrolling = true;

    screens[currentScreen].scrollIntoView({ behavior: 'smooth' });

    // Блокируем быстрое переключение
    setTimeout(() => {
      isScrolling = false;
    }, 800); // Длительность анимации (можно настроить)
  }

  e.preventDefault();
}, { passive: false });
