const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    // Näytetään nappi, kun on skrollattu yli 10 pikseliä
    if (window.scrollY > 600 || window.pageYOffset > 600) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
