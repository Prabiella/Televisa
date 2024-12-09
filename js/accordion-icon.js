// Cambiar icono
const imagePaths = {
    "acc-1": { expanded: "assets/images/icons/user.svg", collapsed: "assets/images/icons/user-hover.svg" },
    "acc-2": { expanded: "assets/images/icons/vistas.svg", collapsed: "assets/images/icons/vistas-hover.svg" },
    "acc-3": { expanded: "assets/images/icons/contratos.svg", collapsed: "assets/images/icons/contratos-hover.svg" },
    "acc-4": { expanded: "assets/images/icons/mantenimiento.svg", collapsed: "assets/images/icons/mantenimiento-hover.svg" },
    "acc-5": { expanded: "assets/images/icons/reportes.svg", collapsed: "assets/images/icons/reportes-hover.svg" },
    "acc-6": { expanded: "assets/images/icons/configurar.svg", collapsed: "assets/images/icons/configurar-hover.svg" },
    "acc-7": { expanded: "assets/images/icons/horas.svg", collapsed: "assets/images/icons/horas-hover.svg" }
  };
  
  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.closest('.accordion-item');
      const body = accordionItem.querySelector('.accordion-body');
      const img = button.querySelector('img');
  
      const isCollapsed = button.classList.contains('collapsed');
      body.classList.toggle('active', isCollapsed);
  
      for (const [key, paths] of Object.entries(imagePaths)) {
        if (accordionItem.classList.contains(key)) {
          img.src = isCollapsed ? paths.expanded : paths.collapsed;
          break;
        }
      }
    });
  });