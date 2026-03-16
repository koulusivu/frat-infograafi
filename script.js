const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    // Näytetään nappi, kun on skrollattu yli n pikseliä
    if (window.scrollY > 300 || window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Lisätty osio: Logitus kuvan klikkaukselle
document.addEventListener('DOMContentLoaded', () => {
    const thumb = document.querySelector('.thumbnail');
    if (thumb) {
        thumb.addEventListener('click', () => {
            console.log("Kuvaa klikattu, avataan alkuperäinen tiedosto...");
        });
    }
});
