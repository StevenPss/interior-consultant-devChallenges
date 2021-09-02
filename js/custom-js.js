// Variable decleration
const navToggle = document.querySelector('.js-nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // console.log(document.body.classList.toggle('nav-open'));
});