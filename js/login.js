function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.src = 'assets/images/login/eyebrow-open.svg'; // Ícono de ojo abierto
    } else {
      passwordInput.type = 'password';
      toggleIcon.src = 'assets/images/login/eyebrow.svg'; // Ícono de ojo cerrado
    }
  }
  