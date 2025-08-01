// Esperar a que el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', () => {
  const seguroCheckbox = document.getElementById('seguro');
  const seguroForm = document.getElementById('formulario-seguro');
  const alojamientoCheckbox = document.getElementById('alojamiento');
  const fechaVueltaField = document.getElementById('fecha-vuelta-field');
  const categoriaButtons = document.querySelectorAll('.categoria-viaje');

  // Mostrar/ocultar formulario de seguro de viaje
  seguroCheckbox.addEventListener('change', () => {
    seguroForm.style.display = seguroCheckbox.checked ? 'block' : 'none';
  });

  // Mostrar/ocultar campo de fecha de vuelta al seleccionar alojamiento
  alojamientoCheckbox.addEventListener('change', () => {
    fechaVueltaField.style.display = alojamientoCheckbox.checked ? 'block' : 'none';
  });

  // Manejar selección de categoría de viaje
  categoriaButtons.forEach(button => {
    button.addEventListener('click', () => {
      const categoriaSeleccionada = button.dataset.categoria;
      categoriaButtons.forEach(btn => btn.classList.remove('seleccionada'));
      button.classList.add('seleccionada');

      // Guardar la categoría seleccionada para el formulario
      document.getElementById('categoria').value = categoriaSeleccionada;
    });
  });

  // Evitar envío si faltan campos obligatorios
  document.getElementById('formulario-busqueda').addEventListener('submit', e => {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;

    if (!origen || !destino || !fecha) {
      e.preventDefault();
      alert('Por favor, completa todos los campos obligatorios.');
    }
  });
});
