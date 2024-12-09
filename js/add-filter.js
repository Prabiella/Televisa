document.addEventListener('DOMContentLoaded', () => {
    const filtersContainer = document.querySelector('.filters'); 
    const addFilterButton = document.querySelector('.add-filter'); 
    const confirmDeleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal')); 
    let filterToDelete = null; 
  
    // Plantilla del nuevo filtro
    const filterTemplate = `
      <div class="filter-content row g-3 align-items-center justify-content-center">
        <div class="col-md-2">
          <select class="form-select">
            <option selected>AND</option>
            <option value="1">OR</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected>ID</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected>es diferente !=</option>
            <option value="1">es igual =</option>
            <option value="2">es mayor a ></option>
          </select>
        </div>
        <div class="col-md-3">
          <input type="text" class="form-control" placeholder="valor">
        </div>
        <div class="col-md-1 text-end">
          <button class="trash btn btn-link p-0">
            <img src="assets/images/icons/borrar.svg" alt="Eliminar filtro">
          </button>
        </div>
      </div>
    `;
  
    // Función para agregar un nuevo filtro
    addFilterButton.addEventListener('click', () => {
      const newFilter = document.createElement('div');
      newFilter.innerHTML = filterTemplate;
      filtersContainer.insertBefore(newFilter.firstElementChild, filtersContainer.querySelector('hr'));
    });
  
    //Eliminar filtro
    filtersContainer.addEventListener('click', (event) => {
      const trashButton = event.target.closest('.trash');
      if (trashButton) {
        const filterRow = trashButton.closest('.filter-content');
        if (filterRow) {
          filterToDelete = filterRow; 
          confirmDeleteModal.show(); 
        }
      }
    });
  
    // Confirmar eliminación del filtro
    document.getElementById('confirmDeleteButton').addEventListener('click', () => {
      if (filterToDelete) {
        filterToDelete.remove(); 
        filterToDelete = null; 
      }
      confirmDeleteModal.hide(); 
    });
  });
  