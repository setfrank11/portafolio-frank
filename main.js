const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Cierra el menú desplegable
    const navbarCollapse = document.getElementById('mainNav');
    navbarCollapse.classList.remove('show');
  });
});

var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    
    form.addEventListener("submit", handleSubmit)
    var formulario = document.getElementById('miFormulario');

    // Restablece el formulario después de enviarlo
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    
      // Envía el formulario aquí (puedes agregar tu lógica de envío de correo)
    
      formulario.reset(); // Restablece los valores de los campos del formulario
    });