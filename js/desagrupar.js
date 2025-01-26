  // JavaScript para cambiar el ícono dinámicamente
  document.addEventListener('DOMContentLoaded', () => {
    const collapseElement = document.getElementById('desagruparForm');
    const collapseIcon = document.getElementById('collapseIcon');

    collapseElement.addEventListener('show.bs.collapse', () => {
      collapseIcon.textContent = '↑'; // Ícono de menos cuando está abierto
    });

    collapseElement.addEventListener('hide.bs.collapse', () => {
      collapseIcon.textContent = '↓'; // Ícono de más cuando está cerrado
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    const desagruparForms = document.querySelectorAll("#desagruparForm");
  
    desagruparForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const noArticuloInput = form.querySelector("#no-articulo");
        const numberOfRows = parseInt(noArticuloInput.value, 10);
  
        if (isNaN(numberOfRows) || numberOfRows <= 0) {
          alert("Por favor, ingresa un número válido.");
          return;
        }
  
        // Encuentra el registro relacionado al formulario
        const currentRow = form.closest("tr");
  
        if (!currentRow) {
          console.error("No se pudo encontrar la fila relacionada al formulario.");
          return;
        }
  
        // Extraer los datos del tr original
        const originalData = Array.from(currentRow.children).map((td) => td.outerHTML);
  
        // Generar nuevas filas e insertarlas debajo del registro actual
        for (let i = 1; i <= numberOfRows; i++) {
          const newRow = document.createElement("tr");
          newRow.setAttribute("data-id", `${Date.now()}-${i}`); // ID único
          newRow.classList.add("TableColor");
          newRow.innerHTML = originalData.join("");
          currentRow.insertAdjacentElement("afterend", newRow);
        }
  
        // Cerrar el menú desplegable
        const submenu = form.closest(".submenu");
        if (submenu) {
          const arrowButton = submenu.previousElementSibling; // Busca el botón relacionado
          if (arrowButton && arrowButton.classList.contains("arrow-down")) {
            toggleSubmenu(arrowButton); // Llama a la función para cerrar el menú
          }
        }
  
        // Restablecer el formulario
        noArticuloInput.value = "";
      });
    });
  });
  