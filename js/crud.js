document.addEventListener('click', function (e) {
    const dropdown = e.target.closest('.custom-dropdown');
    const menu = dropdown?.querySelector('.custom-dropdown-menu');
  
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    } else {
      document.querySelectorAll('.custom-dropdown-menu').forEach((menu) => {
        menu.style.display = 'none';
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('tbody');
    let rowToEdit = null;
    let rowToDelete = null;
  
    // Delegar eventos para los botones de editar y borrar en la tabla
    tableBody.addEventListener('click', (event) => {
      const editButton = event.target.closest('.edit-btn');
      const deleteButton = event.target.closest('.delete-btn');
  
      // Si se hace clic en el botón de editar
      if (editButton) {
        const row = editButton.closest('tr');
        rowToEdit = row;
        openEditItemModal(row); // Abre el modal de edición para la fila seleccionada
      }
  
      // Si se hace clic en el botón de eliminar
      if (deleteButton) {
        const row = deleteButton.closest('tr');
        rowToDelete = row;
        openDeleteItemModal(row); // Abre el modal de confirmación de eliminación para la tabla
      }
    });
  
    // Función para abrir el modal de edición y cargar los datos dinámicamente
    function openEditItemModal(row) {
      const cells = row.querySelectorAll('td');
      const modalForm = document.querySelector('#editItemModal .modal-body'); // El formulario dentro del modal
      modalForm.innerHTML = ''; // Limpiar el formulario antes de agregar los campos
  
      // Llenar el formulario con los datos de la fila
      cells.forEach((cell, index) => {
        const dataLabel = cell.getAttribute('data-label');
        const value = cell.textContent.trim();
  
        // Verificar si la celda contiene un custom-dropdown
        if (cell.querySelector('.custom-dropdown')) {
          // Si contiene un custom-dropdown, no crear un input para esa celda
          return; // Saltar esta celda
        }
  
        // Verificar si la celda tiene la clase 'name-edit' para agregarla al modal
        if (cell.classList.contains('name-edit')) {
          const formGroup = document.createElement('div');
          formGroup.classList.add('form-group');
          const label = document.createElement('label');
          label.textContent = dataLabel;
          const input = document.createElement('input');
          input.type = 'text';
          input.classList.add('form-control');
          input.value = value;
          input.dataset.index = index; // Para asociar el input con la celda correspondiente
  
          formGroup.appendChild(label);
          formGroup.appendChild(input);
          modalForm.appendChild(formGroup);
        } else {
          // Para otras celdas, puedes agregar el formulario normalmente
          const formGroup = document.createElement('div');
          formGroup.classList.add('form-group');
          const label = document.createElement('label');
          label.textContent = dataLabel;
          const input = document.createElement('input');
          input.type = 'text';
          input.classList.add('form-control');
          input.value = value;
          input.dataset.index = index; // Para asociar el input con la celda correspondiente
  
          formGroup.appendChild(label);
          formGroup.appendChild(input);
          modalForm.appendChild(formGroup);
        }
      });
  
      // Mostrar el modal de edición
      const editModal = new bootstrap.Modal(document.getElementById('editItemModal'));
      editModal.show();
  
      // Asignar la acción de guardar los cambios al botón de guardar
      const saveEditButton = document.getElementById('saveEditButton');
      saveEditButton.onclick = () => {
        const formInputs = modalForm.querySelectorAll('input');
        formInputs.forEach((input, index) => {
          const newValue = input.value;
          cells[index].textContent = newValue; // Actualizar la celda correspondiente con el nuevo valor
        });
  
        // Cerrar el modal después de guardar los cambios
        const modal = bootstrap.Modal.getInstance(document.getElementById('editItemModal'));
        modal.hide();
      };
    }
  
    // Función para abrir el modal de confirmación de eliminación (para elementos de la tabla)
    function openDeleteItemModal(row) {
      const cells = row.querySelectorAll('td');
      const descripcion = row.querySelector('.name-edit') ? row.querySelector('.name-edit').textContent.trim() : ''; // Tomamos el texto de la celda con la clase 'name-edit'
  
      document.getElementById('deleteItemDescripcion').textContent = descripcion;
  
      const deleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteTableModal'));
      deleteModal.show();
  
      document.getElementById('confirmDeleteTableButton').onclick = () => {
        row.remove();
        bootstrap.Modal.getInstance(document.getElementById('confirmDeleteTableModal')).hide();
      };
    }
  });
  
  
  