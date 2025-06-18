window.addEventListener("scroll", () => {
  const litiy = document.querySelector('.litiy-text');

  if (window.scrollY > 10) {
    litiy.classList.add('shrink');
  } else {
    litiy.classList.remove('shrink');
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.contact-toggle');
    const dropdown = document.querySelector('.contact-dropdown');

    toggle.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

    // Закрытие при клике вне блока
document.addEventListener('click', (e) => {
        if (!document.querySelector('.contact-container').contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('sideMenu');

    toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// (Необязательно) закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  });