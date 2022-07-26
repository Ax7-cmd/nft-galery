const menuToggle = document.querySelector('.nav-toggle input');
const nav = document.querySelector('.nav-links-custom');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});