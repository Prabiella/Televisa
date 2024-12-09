// Obtener la URL actual
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll('a');

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active-link");
  }
});