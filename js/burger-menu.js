let burgerIcon = document.querySelector('.burger-icon');
let burgerMenu = document.querySelector('.burger-menu');
burgerIcon.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
});