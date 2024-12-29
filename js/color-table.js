document.addEventListener("DOMContentLoaded", function () {
  // Inicializar colores de fondo al cargar la tabla
  document.querySelectorAll(".table tbody tr").forEach((row) => {
    const statusCell = row.querySelector('[data-label="Estatus"]');
    const statusValue = statusCell.querySelector(".estatus-value").textContent.trim();

    // Aplica el color inicial de la celda de estatus y las celdas con clase ColoStatusRow
    updateStatusColor(row, statusValue);
  });

  // Cambiar el estatus dinámicamente al hacer clic en una opción
  window.updateStatus = function (element, status) {
    const parentRow = element.closest("tr");
    const statusCell = parentRow.querySelector('[data-label="Estatus"]');
    const statusValueSpan = statusCell.querySelector(".estatus-value");

    // Actualiza el texto del estatus
    statusValueSpan.textContent = status;

    // Actualiza el color de la celda de estatus y las celdas con clase ColoStatusRow
    updateStatusColor(parentRow, status);
  };

  // Función para actualizar color de la celda de estatus y las celdas ColoStatusRow
  function updateStatusColor(row, status) {
    const statusCell = row.querySelector('[data-label="Estatus"]');
    const cellsToColor = row.querySelectorAll(".ColoStatusRow"); // Selecciona solo celdas con la clase ColoStatusRow

    // Cambia el color del <td> de estatus según el valor
    switch (status) {
      case "0.0": // Por revisar
        statusCell.style.backgroundColor = "#F2B707"; // Color de la celda (Amarillo)
        cellsToColor.forEach((cell) => {
          cell.style.backgroundColor = "#FFE9A5"; // Fondo amarillo claro para celdas ColoStatusRow
        });
        break;
      case "1.0": // Revisado
        statusCell.style.backgroundColor = "#48A1D9"; // Color de la celda (Azul)
        cellsToColor.forEach((cell) => {
          cell.style.backgroundColor = "#DBF2FF"; // Fondo azul claro para celdas ColoStatusRow
        });
        break;
      case "2.0": // Autorizado
        statusCell.style.backgroundColor = "#278C33"; // Color de la celda (Verde)
        cellsToColor.forEach((cell) => {
          cell.style.backgroundColor = "#E3FCE2"; // Fondo verde claro para celdas ColoStatusRow
        });
        break;
      case "3.0": // Enviado
        statusCell.style.backgroundColor = "#8C7456"; // Color de la celda (Café)
        cellsToColor.forEach((cell) => {
          cell.style.backgroundColor = "#F0D8B3"; // Fondo café claro para celdas ColoStatusRow
        });
        break;
      case "-1.0": // Inhabilitado
        statusCell.style.backgroundColor = "#919191"; // Color de la celda (Gris)
        cellsToColor.forEach((cell) => {
          cell.style.backgroundColor = "#F2F2F2"; // Fondo gris claro para celdas ColoStatusRow
        });
        break;
      default:
        statusCell.style.backgroundColor = "transparent"; // Si no coincide con ningún estatus
        cellsToColor.forEach((cell) => {
          cell.style.backgroundColor = "transparent"; // Fondo transparente para celdas ColoStatusRow
        });
        break;
    }
  }

// Función para mostrar/ocultar el submenu
window.toggleSubmenu = function (button) {
  // Obtener todos los submenus abiertos
  const allSubmenus = document.querySelectorAll('.submenu');

  // Cerrar todos los submenus excepto el actual
  allSubmenus.forEach((submenu) => {
    if (submenu !== button.nextElementSibling) {
      submenu.style.display = "none";
    }
  });

  // Mostrar/ocultar el submenu actual
  const submenu = button.nextElementSibling;
  const isVisible = submenu.style.display === "block";
  submenu.style.display = isVisible ? "none" : "block";
};

});
