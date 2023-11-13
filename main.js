const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Cierra el menú desplegable
    const navbarCollapse = document.getElementById('mainNav');
    navbarCollapse.classList.remove('show');
  });
});