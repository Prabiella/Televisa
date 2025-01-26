/* Script para habilitar el filtro en los modales de Filtros */
document.addEventListener("DOMContentLoaded", () => {
  const toggleFields = document.querySelectorAll(".toggle-field");

  toggleFields.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const inputField = checkbox.nextElementSibling;
      if (inputField) {
        if (checkbox.checked) {
          inputField.disabled = false; // Habilitar el campo
        } else {
          inputField.disabled = true; // Deshabilitar el campo
          if (inputField.tagName === "SELECT") {
            inputField.selectedIndex = 0; // Restablecer select al valor inicial
          } else {
            inputField.value = ""; // Borrar contenido de otros inputs
          }
        }
      }
    });
  });
});
