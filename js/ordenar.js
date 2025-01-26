document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const firstHeaderCell = table.querySelector("thead th:first-child"); // Selecciona solo la primera celda del encabezado

  if (firstHeaderCell) {
    // Crear un botón de ordenación para la primera columna
    const sortButton = document.createElement("button");
    sortButton.textContent = "↕"; // Símbolo de ordenación
    sortButton.style.marginLeft = "10px";
    sortButton.addEventListener("click", () => toggleSort(table, 0)); // Solo afecta la columna 0
    firstHeaderCell.appendChild(sortButton);
  }

  function toggleSort(table, columnIndex) {
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const isAscending = table.getAttribute("data-sort-dir") !== "asc";

    rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();

      // Ordenar por texto o convertir a número si aplica
      return isAscending
        ? aText.localeCompare(bText, undefined, { numeric: true })
        : bText.localeCompare(aText, undefined, { numeric: true });
    });

    // Reinsertar filas ordenadas en el tbody
    const tbody = table.querySelector("tbody");
    rows.forEach((row) => tbody.appendChild(row));

    // Actualizar el estado de ordenación
    table.setAttribute("data-sort-dir", isAscending ? "asc" : "desc");
  }
});








/* Este script permite mover las columnas */


document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const headerCells = table.querySelectorAll("thead th");
  let draggedIndex = null;

  // Agregar eventos de arrastre
  headerCells.forEach((th, index) => {
    th.setAttribute("draggable", true);

    th.addEventListener("dragstart", (e) => {
      draggedIndex = index; // Guardar el índice de la columna arrastrada
      e.dataTransfer.effectAllowed = "move";
    });

    th.addEventListener("dragover", (e) => {
      e.preventDefault(); // Permitir el drop
    });

    th.addEventListener("drop", (e) => {
      e.preventDefault();
      const targetIndex = Array.from(headerCells).indexOf(th);

      // Mover la columna en el thead
      moveColumn(table, draggedIndex, targetIndex);

      // Actualizar el índice de la columna arrastrada
      draggedIndex = null;
    });
  });

  // Función para mover columnas
  function moveColumn(table, fromIndex, toIndex) {
    const rows = table.querySelectorAll("tr");

    rows.forEach((row) => {
      const cells = Array.from(row.children);
      if (fromIndex < toIndex) {
        row.insertBefore(cells[fromIndex], cells[toIndex].nextSibling);
      } else {
        row.insertBefore(cells[fromIndex], cells[toIndex]);
      }
    });
  }
});
