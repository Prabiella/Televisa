document.addEventListener('DOMContentLoaded', function () {
  // Elementos
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const container = document.querySelector('.menu-container');
  const body = document.querySelector('body');

  // Evento de click en el hamburguesa
  hamburger.addEventListener('click', () => {
    // Togglear clases en el menú, contenedor y botón hamburguesa
    menu.classList.toggle('active');
    container.classList.toggle('active');
    body.classList.toggle('menu-open');
    hamburger.classList.toggle('active');
  });
});
