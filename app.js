// Datos de aeropuertos temáticos
const thematicAirports = {
  arquitectura: [
    { code: 'MAD', city: 'Madrid' },
    { code: 'BCN', city: 'Barcelona' },
    { code: 'FCO', city: 'Roma' },
    { code: 'VIE', city: 'Viena' },
    { code: 'IST', city: 'Estambul' },
    { code: 'AMS', city: 'Ámsterdam' },
    { code: 'MEX', city: 'Ciudad de México' }
  ],
  playas: [
    { code: 'CUN', city: 'Cancún' },
    { code: 'LPI', city: 'Gran Canaria' },
    { code: 'PMI', city: 'Palma de Mallorca' },
    { code: 'HNL', city: 'Honolulu' },
    { code: 'NRT', city: 'Tokio' },
    { code: 'LIR', city: 'Liberia (Costa Rica)' },
    { code: 'PUJ', city: 'Punta Cana' }
  ],
  montanas: [
    { code: 'GVA', city: 'Ginebra' },
    { code: 'ZRH', city: 'Zúrich' },
    { code: 'SCL', city: 'Santiago de Chile' },
    { code: 'BKK', city: 'Bangkok' },
    { code: 'KTM', city: 'Katmandú' },
    { code: 'YVR', city: 'Vancouver' },
    { code: 'DEN', city: 'Denver' }
  ],
  cultura: [
    { code: 'JFK', city: 'Nueva York' },
    { code: 'LHR', city: 'Londres' },
    { code: 'CDG', city: 'París' },
    { code: 'BER', city: 'Berlín' },
    { code: 'MOW', city: 'Moscú' },
    { code: 'CAI', city: 'El Cairo' },
    { code: 'JNB', city: 'Johannesburgo' }
  ],
  deporte: [
    { code: 'MUC', city: 'Múnich' },
    { code: 'SFO', city: 'San Francisco' },
    { code: 'LAX', city: 'Los Ángeles' },
    { code: 'FLL', city: 'Fort Lauderdale' },
    { code: 'SYD', city: 'Sídney' },
    { code: 'BUE', city: 'Buenos Aires' },
    { code: 'DXB', city: 'Dubái' }
  ],
  tours: [
    { code: 'NYC', city: 'Nueva York' },
    { code: 'LON', city: 'Londres' },
    { code: 'ROM', city: 'Roma' },
    { code: 'PAR', city: 'París' },
    { code: 'AMS', city: 'Ámsterdam' },
    { code: 'VCE', city: 'Venecia' },
    { code: 'MXP', city: 'Milán' }
  ],
};

// Referencias DOM
const modalAirports = document.getElementById('modal-airports');
const modalAirportList = document.getElementById('airport-list');
const closeModalAirportsBtn = document.getElementById('close-modal-airports');
const insuranceModal = document.getElementById('insurance-modal');
const closeInsuranceModalBtn = document.getElementById('close-insurance-modal');

const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const checkInDateInput = document.getElementById('checkInDate');
const returnDateContainer = document.getElementById('returnDateContainer');
const returnDateInput = document.getElementById('returnDate');
const selectHotelCheckbox = document.getElementById('selectHotel');
const selectInsuranceCheckbox = document.getElementById('selectInsurance');
const insuranceQuoteForm = document.getElementById('insurance-quote-form');
const insuranceQuoteResult = document.getElementById('insurance-quote-result');
const insuredNameInput = document.getElementById('insured-name');
const insuredAgeInput = document.getElementById('insured-age');
const insuredCountryInput = document.getElementById('insured-country');
const insuredStartDateInput = document.getElementById('insured-start-date');
const insuredEndDateInput = document.getElementById('insured-end-date');

const searchForm = document.getElementById('search-form');
const resultadosDiv = document.getElementById('resultados');
const hotelResultsDiv = document.getElementById('hotel-results');

const btnSubmit = searchForm.querySelector('.btn-submit');

// Función para abrir modal
function openModal(modal) {
  modal.style.display = 'flex';
  modal.focus();
  document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function closeModal(modal) {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Abrir modal aeropuertos con aeropuertos temáticos
document.querySelectorAll('.btn-feature').forEach(btn => {
  btn.addEventListener('click', function () {
    const theme = this.getAttribute('data-theme');
    const airports = thematicAirports[theme] || [];
    modalAirportList.innerHTML = airports.map(a =>
      `<li><button class="airport-btn" data-code="${a.code}">${a.city} (${a.code})</button></li>`
    ).join('');
    openModal(modalAirports);
    // focus al primer botón
    setTimeout(() => {
      const firstBtn = modalAirportList.querySelector('button');
      if (firstBtn) firstBtn.focus();
    }, 100);
  });
});

// Cerrar modal aeropuertos
closeModalAirportsBtn.addEventListener('click', () => closeModal(modalAirports));
modalAirports.addEventListener('click', e => {
  if (e.target === modalAirports) closeModal(modalAirports);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalAirports.style.display === 'flex') closeModal(modalAirports);
});

// Al seleccionar aeropuerto de la lista
modalAirportList.addEventListener('click', e => {
  if (e.target.classList.contains('airport-btn')) {
    const code = e.target.getAttribute('data-code');
    // Lógica para asignar el aeropuerto elegido en el input más lógico
    // Aquí asignamos al input que tenga el foco o la última caja que se usó
    if (document.activeElement === originInput || originInput.value === '') {
      originInput.value = code;
    } else {
      destinationInput.value = code;
    }
    closeModal(modalAirports);
    originInput.focus();
  }
});

// Mostrar u ocultar fecha regreso según checkbox (hotel seleccionado)
selectHotelCheckbox.addEventListener('change', () => {
  returnDateContainer.style.display = selectHotelCheckbox.checked ? 'flex' : 'none';
});

// Habilitar botón buscar solo si campos obligatorios están llenos
function validateInputs() {
  const originVal = originInput.value.trim().toUpperCase();
  const destVal = destinationInput.value.trim().toUpperCase();
  const dateVal = checkInDateInput.value;

  let valid = true;

  if (!originVal || originVal.length !== 3) valid = false;
  if (!destVal || destVal.length !== 3) valid = false;
  if (!dateVal) valid = false;

  btnSubmit.disabled = !valid;
}
originInput.addEventListener('input', validateInputs);
destinationInput.addEventListener('input', validateInputs);
checkInDateInput.addEventListener('input', validateInputs);
returnDateInput.addEventListener('input', validateInputs);

// Checkbox seguro abre modal de cotización seguro
selectInsuranceCheckbox.addEventListener('change', () => {
  if (selectInsuranceCheckbox.checked) {
    // Prellenar formulario con datos de viaje actuales
    insuredCountryInput.value = destinationInput.value.toUpperCase();
    insuredStartDateInput.value = checkInDateInput.value;
    insuredEndDateInput.value = returnDateInput.value || checkInDateInput.value;
    openModal(insuranceModal);
  } else {
    closeModal(insuranceModal);
  }
});

// Cerrar modal seguro
closeInsuranceModalBtn.addEventListener('click', () => {
  closeModal(insuranceModal);
  selectInsuranceCheckbox.checked = false;
});
insuranceModal.addEventListener('click', e => {
  if (e.target === insuranceModal) {
    closeModal(insuranceModal);
    selectInsuranceCheckbox.checked = false;
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && insuranceModal.style.display === 'flex') {
    closeModal(insuranceModal);
    selectInsuranceCheckbox.checked = false;
  }
});

// Validación y simulación cotización seguro
insuranceQuoteForm.addEventListener('submit', e => {
  e.preventDefault();

  // Validar campos simples
  if (
    !insuredNameInput.value.trim() ||
    !insuredAgeInput.value ||
    !insuredCountryInput.value.trim() ||
    !insuredStartDateInput.value ||
    !insuredEndDateInput.value
  ) {
    alert('Por favor completa todos los campos para cotizar el seguro.');
    return;
  }

  // Simular cálculo simple
  let age = parseInt(insuredAgeInput.value, 10);
  let days =
    (new Date(insuredEndDateInput.value) - new Date(insuredStartDateInput.value)) /
    (1000 * 60 * 60 * 24);
  if (days < 0) {
    alert('La fecha fin debe ser posterior a la fecha inicio.');
    return;
  }
  days = Math.ceil(days) + 1;

  // Cotización base
  let basePrice = 20;
  if (age < 18) basePrice = 15;
  else if (age > 65) basePrice = 35;

  let price = basePrice + days * 2.5;

  insuranceQuoteResult.style.display = 'block';
  insuranceQuoteResult.textContent = `Estimado ${insuredNameInput.value.trim()}, el precio estimado del seguro es USD ${price.toFixed(2)} para ${days} día(s) de viaje.`;
});

// Validación básica del formulario búsqueda y envío (simulado)
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  resultadosDiv.textContent = 'Buscando vuelos y hoteles...';

  // Simulación de resultados (puedes reemplazarlo con fetch / API real)
  setTimeout(() => {
    resultadosDiv.textContent = `Resultados para vuelo: ${originInput.value.toUpperCase()} → ${destinationInput.value.toUpperCase()}, salida ${checkInDateInput.value}${returnDateInput.value ? ', regreso ' + returnDateInput.value : ''}.`;
    if (selectHotelCheckbox.checked) {
      hotelResultsDiv.style.display = 'block';
      hotelResultsDiv.textContent = 'Mostrando opciones de hotel disponibles...';
    } else {
      hotelResultsDiv.style.display = 'none';
    }
  }, 1200);
});

// Validar inputs al cargar la página
validateInputs();
