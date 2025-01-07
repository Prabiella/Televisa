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

  // Delegar eventos para los botones de editar, borrar y ver en la tabla
  tableBody.addEventListener('click', (event) => {
    const editButton = event.target.closest('.edit-btn');
    const deleteButton = event.target.closest('.delete-btn');
    const viewButton = event.target.closest('.see-btn');

    if (editButton) {
      const row = editButton.closest('tr');
      rowToEdit = row;
      openEditItemModal(row);
    }

    if (deleteButton) {
      const row = deleteButton.closest('tr');
      rowToDelete = row;
      openDeleteItemModal(row);
    }

    if (viewButton) {
      const row = viewButton.closest('tr');
      openViewItemModal(row);
    }
  });

  // Función para abrir el modal de edición
  function openEditItemModal(row) {
    const cells = row.querySelectorAll('td');
    const modalForm = document.querySelector('#editItemModal .modal-body');
    modalForm.innerHTML = ''; // Limpia el contenido del modal
  
    cells.forEach((cell, index) => {
      const dataLabel = cell.getAttribute('data-label');
  
      // Manejo de elementos con clase .ChangeStatus
      if (cell.querySelector('.ChangeStatus')) {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
  
        const label = document.createElement('label');
        label.textContent = dataLabel;
  
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.value = cell.textContent.trim();
        input.dataset.index = index;
        input.disabled = true; // Deshabilitar el campo para evitar edición
  
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        modalForm.appendChild(formGroup);
        return; // Salir del ciclo para este elemento
      }
  
      // Manejo de switches (checkbox)
      const checkbox = cell.querySelector('input[type="checkbox"]');
      if (checkbox) {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group', 'd-flex', 'align-items-center', 'gap-2');
  
        const label = document.createElement('label');
        label.textContent = dataLabel;
        label.style.flexGrow = '1';
  
        const switchWrapper = document.createElement('div');
        switchWrapper.classList.add('form-check', 'form-switch', 'd-flex', 'justify-content-center');
  
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.classList.add('form-check-input');
        input.id = `switch-${index}`;
        input.checked = checkbox.checked; // Refleja el estado actual del switch
        input.dataset.index = index; // Vincula con la celda correspondiente
  
        const switchLabel = document.createElement('label');
        switchLabel.classList.add('form-check-label');
        switchLabel.setAttribute('for', `switch-${index}`);
  
        switchWrapper.appendChild(input);
        switchWrapper.appendChild(switchLabel);
        formGroup.appendChild(label);
        formGroup.appendChild(switchWrapper);
        modalForm.appendChild(formGroup);
        return;
      }
  
      // Manejo de inputs de texto
      if (!cell.querySelector('.custom-dropdown')) {
        const value = cell.textContent.trim();
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        const label = document.createElement('label');
        label.textContent = dataLabel;
  
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.value = value;
        input.dataset.index = index;
  
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        modalForm.appendChild(formGroup);
      }
    });
  
    const editModal = new bootstrap.Modal(document.getElementById('editItemModal'));
    editModal.show();
  
    // Guardar cambios
    const saveEditButton = document.getElementById('saveEditButton');
    saveEditButton.onclick = () => {
      const formInputs = modalForm.querySelectorAll('input');
      formInputs.forEach((input) => {
        const index = input.dataset.index;
        const cell = row.children[index];
  
        if (input.type === 'checkbox') {
          // Actualizar estado del switch en la tabla
          const checkbox = cell.querySelector('input[type="checkbox"]');
          if (checkbox) {
            checkbox.checked = input.checked;
          }
        } else if (!input.disabled) {
          // Actualizar texto de la celda si no está deshabilitado
          cell.textContent = input.value;
        }
      });
  
      const modal = bootstrap.Modal.getInstance(document.getElementById('editItemModal'));
      modal.hide();
    };
  }
  


  // Función para abrir el modal de confirmación de eliminación
  function openDeleteItemModal(row) {
    const descripcion = row.querySelector('.name-edit')?.textContent.trim() || '';
    document.getElementById('deleteItemDescripcion').textContent = descripcion;

    const deleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteTableModal'));
    deleteModal.show();

    document.getElementById('confirmDeleteTableButton').onclick = () => {
      row.remove();
      bootstrap.Modal.getInstance(document.getElementById('confirmDeleteTableModal')).hide();
    };
  }

  // Función para abrir el modal de visualización
   function openViewItemModal(row) {
    const cells = row.querySelectorAll('td');
    const modalBody = document.querySelector('#viewItemModal .modal-body');
    modalBody.innerHTML = ''; 
    cells.forEach((cell) => {
      const dataLabel = cell.getAttribute('data-label');

      // Manejo de switches (checkbox)
      const checkbox = cell.querySelector('input[type="checkbox"]');
      let value = cell.textContent.trim();

      if (checkbox) {
        value = checkbox.checked ? 'Activado' : 'Desactivado';
      }

      if (dataLabel) {
        const detailGroup = document.createElement('div');
        detailGroup.classList.add('detail-group');
        const label = document.createElement('strong');
        label.textContent = `${dataLabel}: `;
        const valueText = document.createElement('span');
        valueText.textContent = value;

        detailGroup.appendChild(label);
        detailGroup.appendChild(valueText);
        modalBody.appendChild(detailGroup);
      }
    });

    const viewModal = new bootstrap.Modal(document.getElementById('viewItemModal'));
    viewModal.show();
  }
});
