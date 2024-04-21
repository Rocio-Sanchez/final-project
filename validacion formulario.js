// Obtener el formulario
const form = document.getElementById('contactForm');

// Agregar un event listener para el envío del formulario
form.addEventListener('submit', function(event) {
  // Prevenir el envío del formulario
  event.preventDefault();

  // Validar campos obligatorios
  const nombre = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const asunto = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value.trim();

  // Validar que todos los campos obligatorios estén llenos
  if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  // Si todo está bien, enviar el formulario
  form.submit();
});