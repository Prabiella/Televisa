  document.addEventListener("DOMContentLoaded", () => {
    // Obtener los elementos de la tabla
    const tableBody = document.getElementById("table-body");
    const rows = Array.from(tableBody.getElementsByTagName("tr"));
    
    // Función para ordenar la tabla
    const sortTable = (isAscending) => {
      const sortedRows = rows.sort((rowA, rowB) => {
        const userIdA = parseInt(rowA.cells[0].textContent, 10); // Obtener UserID del primer <td>
        const userIdB = parseInt(rowB.cells[0].textContent, 10);
        
        return isAscending ? userIdA - userIdB : userIdB - userIdA;
      });

      // Limpiar el tbody y volver a agregar las filas ordenadas
      tableBody.innerHTML = "";
      sortedRows.forEach(row => tableBody.appendChild(row));
    };

    // Manejar eventos de click para ordenar
    document.querySelector(".FilterHistory a:nth-child(1)").addEventListener("click", (e) => {
      e.preventDefault();
      sortTable(false); // Ordenar Descendente
    });

    document.querySelector(".FilterHistory a:nth-child(2)").addEventListener("click", (e) => {
      e.preventDefault();
      sortTable(true); // Ordenar Ascendente
    });
  });
