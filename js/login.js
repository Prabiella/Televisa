function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.src = 'img/eyebrow-open.svg'; // Ícono de ojo abierto
    } else {
      passwordInput.type = 'password';
      toggleIcon.src = 'img/eyebrow.svg'; // Ícono de ojo cerrado
    }
  }
  