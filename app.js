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
