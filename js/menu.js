//Menu hamburguesa
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const container = document.querySelector('.menu-container');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  container.classList.toggle('active');
  hamburger.classList.toggle('active');
});