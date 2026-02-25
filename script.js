const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    // Näytetään nappi, kun on skrollattu yli n pikseliä
    if (window.scrollY > 400 || window.pageYOffset > 400) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
