    const searchInput = document.querySelector('input[type="search"]');
    const tableBody = document.querySelector('#table-body');
  
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
      const rows = tableBody.querySelectorAll('tr');
  
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let rowContainsQuery = false;
  
        cells.forEach(cell => {
          if (cell.textContent.toLowerCase().includes(query)) {
            rowContainsQuery = true;
          }
        });
  
        if (rowContainsQuery) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });