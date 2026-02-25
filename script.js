const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    // Näytetään nappi, kun on skrollattu yli 10 pikseliä
    if (window.scrollY > 10 || window.pageYOffset > 10) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
