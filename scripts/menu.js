var menuIcon = document.querySelector(".menu");
var navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-scroll');
});