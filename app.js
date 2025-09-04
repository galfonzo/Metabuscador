// Mostrar/ocultar fecha de regreso según checkbox "Viaje redondo" con manejo aria-checked y limpieza valor
const roundTripCheckbox = document.getElementById('round-trip');
const returnDateContainer = document.getElementById('returnDateContainer');
roundTripCheckbox.addEventListener('change', () => {
  const isChecked = roundTripCheckbox.checked;
  returnDateContainer.style.display = isChecked ? 'block' : 'none';
  roundTripCheckbox.setAttribute('aria-checked', isChecked);
  if (!isChecked) {
    document.getElementById('return-date').value = '';
    document.querySelector('#returnDateContainer .error-message').textContent = '';
  }
});

// Mostrar/ocultar campos relacionados a alojamiento y limpiar valor oculto
const accommodationCheckbox = document.getElementById('accommodation');
const accommodationExtra = document.getElementById('accommodation-extra');
accommodationCheckbox.addEventListener('change', () => {
  accommodationExtra.style.display = accommodationCheckbox.checked ? 'block' : 'none';
  if (!accommodationCheckbox.checked) {
    document.getElementById('hotel-name').value = '';
  }
});

// Mostrar/ocultar selector tipo seguro y limpiar valor oculto
const seguroCheckbox = document.getElementById('insurance');
const tipoSeguroSelect = document.getElementById('tipo-seguro');
seguroCheckbox.addEventListener('change', () => {
  if (seguroCheckbox.checked) {
    tipoSeguroSelect.style.display = 'block';
    tipoSeguroSelect.disabled = false;
  } else {
    tipoSeguroSelect.style.display = 'none';
    tipoSeguroSelect.disabled = true;
    tipoSeguroSelect.value = '';
  }
});

// Listado de destinos por categoría y selección con roles aria-option
const destinosPorCategoria = {
  aventura: ["Patagonia", "Islandia", "Machu Picchu", "Alpes Suizos", "Costa Rica Selva"],
  cultural: ["Roma", "Atenas", "Kioto", "Estambul", "París"],
  playa: ["Maldivas", "Cancún", "Ibiza", "Phuket", "Riviera Maya"],
  gastronomico: ["Lima", "Bangkok", "Barcelona", "Bolonia", "Tokio"],
  ecoturismo: ["Costa Rica", "Galápagos", "Amazonas", "Torres del Paine", "Islas Malvinas"],
  lujo: ["Dubai", "Mónaco", "Maldivas Grand Resort", "Bora Bora", "Saint-Tropez"],
  senderismo: ["Torres del Paine", "Camino Inca", "Sendero Patagonia", "Ruta Parques Chile", "Selva Lacandona"],
  canotaje: ["Río Negro", "Río Futaleufú", "Río Grande", "Lago Todos Santos", "Isla Chiloé"],
  vela: ["Mar Caribe", "Mediterráneo", "Islas Griegas", "Bahamas", "Costa Amalfitana"]
};

const destinosLista = document.getElementById('destinos-lista');
const destinationInput = document.getElementById('destination');
const categoryButtons = document.querySelectorAll('.btn-feature');

function resetDestinations() {
  destinosLista.style.display = 'none';
  destinosLista.innerHTML = '';
  categoryButtons.forEach(btn => {
    btn.classList.remove('selected');
    btn.setAttribute('aria-pressed', 'false');
  });
}

function mostrarDestinos(categoria) {
  let destinos = destinosPorCategoria[categoria] || [];
  if (destinos.length === 0) {
    resetDestinations();
    return;
  }
  destinosLista.innerHTML = `<ul>${destinos.map(d => `<li role="option" tabindex="0">${d}</li>`).join('')}</ul>`;
  destinosLista.style.display = 'block';
  const items = destinosLista.querySelectorAll('li');
  items.forEach(item => {
    item.addEventListener('click', () => {
      destinationInput.value = item.textContent;
      resetDestinations();
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('selected')) {
      resetDestinations();
      return;
    }
    resetDestinations();
    btn.classList.add('selected');
    btn.setAttribute('aria-pressed', 'true');
    mostrarDestinos(btn.dataset.category);
  });
});

document.addEventListener('click', e => {
  if (
    !destinosLista.contains(e.target) &&
    ![...categoryButtons].some(btn => btn === e.target)
  ) {
    resetDestinations();
  }
});

// Validación mejorada del formulario, incluida fecha de regreso condicional
const form = document.getElementById('travel-form');
form.addEventListener('submit', async e => {
  e.preventDefault();
  let valid = true;
  // Validar inputs requeridos de fila
  form.querySelectorAll('.row').forEach(row => {
    const input = row.querySelector('input');
    const errorDiv = row.querySelector('.error-message');
    if (input && input.hasAttribute('required') && !input.value.trim()) {
      errorDiv.textContent = 'Este campo es obligatorio.';
      valid = false;
    } else {
      errorDiv.textContent = '';
    }
  });
  // Validar fecha de regreso solo si viaje redondo está marcado
  if (roundTripCheckbox.checked) {
    const returnDateInput = document.getElementById('return-date');
    const returnErrorDiv = document.querySelector('#returnDateContainer .error-message');
    if (!returnDateInput.value) {
      returnErrorDiv.textContent =
        'La fecha de regreso es obligatoria para viaje redondo.';
      valid = false;
    } else {
      returnErrorDiv.textContent = '';
    }
  }
  if (!valid) return;

  // Simulamos envío a servidor (por ejemplo fetch)
  try {
    // Simulación de retardo de red
    await new Promise(resolve => setTimeout(resolve, 1000));

    alert('¡Formulario enviado correctamente! Simulación exitosa.');
    form.reset();
    resetDestinations();
    returnDateContainer.style.display = 'none';
    accommodationExtra.style.display = 'none';
    tipoSeguroSelect.style.display = 'none';
    tipoSeguroSelect.disabled = true;
    categoryButtons.forEach(btn => {
      btn.classList.remove('selected');
      btn.setAttribute('aria-pressed', 'false');
    });
    roundTripCheckbox.setAttribute('aria-checked', 'false');
  } catch (error) {
    alert('Error al enviar el formulario. Por favor, intenta más tarde.');
  }
});
