const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
});