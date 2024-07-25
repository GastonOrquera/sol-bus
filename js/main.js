var hamburger = document.querySelector('.hamburger');
var chivo = document.querySelector('.chivo');


hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('active');
    chivo.classList.toggle('active');

});

ScrollReveal().reveal('.revealBoxs', {
    origin: 'top',
    distance: '10px',
    duration: 600,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 300
});

function redirigir_lineas() {
    window.location.href = "pages/lineas.html";
}

function redirigir_paradas() {
    window.location.href = "pages/paradas.html"
}

function redirigir_favoritos() {
    window.location.href = "pages/favoritos.html"
}

function redirigir_paradas_cercanas() {
    window.location.href = "pages/paradas_cercanas.html"
}
