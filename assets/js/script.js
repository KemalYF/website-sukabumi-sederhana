const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const hero = document.querySelector('.jumbotron');
const main = document.querySelector('main');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

hero.addEventListener('click', function () {
    nav.classList.remove('slide');
});

main.addEventListener('click', function () {
    nav.classList.remove('slide');
});