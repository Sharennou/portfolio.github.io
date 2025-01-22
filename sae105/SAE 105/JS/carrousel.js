const carrousel = document.querySelector('.carrousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    carrousel.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    carrousel.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});