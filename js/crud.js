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