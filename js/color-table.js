document.addEventListener("DOMContentLoaded", function () {
  // Inicializar colores de fondo al cargar la tabla
  document.querySelectorAll(".table tbody tr").forEach((row) => {
    const statusCell = row.querySelector('[data-label="Estatus"]');
    const statusValue = statusCell.querySelector(".estatus-value").textContent.trim();

    // Aplica el color de fondo según el valor del estatus
    applyStatusColor(statusCell, statusValue);
  });

  // Cambiar el estatus dinámicamente al hacer clic en una opción
  window.updateStatus = function (element, status) {
    const parentRow = element.closest("tr");
    const statusCell = parentRow.querySelector('[data-label="Estatus"]');
    const statusValueSpan = statusCell.querySelector(".estatus-value");

    // Actualiza el texto del estatus
    statusValueSpan.textContent = status;

    // Elimina las clases de color previas y asigna la nueva clase
    statusCell.className = ""; // Elimina todas las clases previas
    applyStatusColor(statusCell, status);
  };

  // Función para aplicar color de fondo según el estatus
  function applyStatusColor(cell, status) {
    switch (status) {
      case "0.0":
        cell.classList.add("status-0-0");
        break;
      case "1.0":
        cell.classList.add("status-1-0");
        break;
      case "2.0":
        cell.classList.add("status-2-0");
        break;
      case "3.0":
        cell.classList.add("status-3-0");
        break;
      case "-1.0":
        cell.classList.add("status--1-0");
        break;
      default:
        cell.style.background = "transparent"; // Sin color si el estatus no es válido
        break;
    }
  }

  // Función para mostrar/ocultar el submenu
  window.toggleSubmenu = function (button) {
    const submenu = button.nextElementSibling;
    const isVisible = submenu.style.display === "block";
    submenu.style.display = isVisible ? "none" : "block";
  };
});





