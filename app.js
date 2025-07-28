// Object thematicAirports debe estar definido en este archivo o importado si lo tienes separado, ejemplo:
const thematicAirports = {
  arquitectura: [
    { code: 'MAD', name: 'Aeropuerto Adolfo Suárez Madrid-Barajas' },
    { code: 'BCN', name: 'Aeropuerto Josep Tarradellas Barcelona-El Prat' },
    { code: 'FCO', name: 'Aeropuerto de Roma-Fiumicino' },
  ],
  playas: [
    { code: 'CUN', name: 'Aeropuerto Internacional de Cancún' },
    { code: 'LPI', name: 'Aeropuerto de Gran Canaria' },
    { code: 'PMI', name: 'Aeropuerto de Palma de Mallorca' },
  ],
  montanas: [
    { code: 'MEX', name: 'Aeropuerto Internacional Benito Juárez' },
    { code: 'GVA', name: 'Aeropuerto de Ginebra' },
    { code: 'ZRH', name: 'Aeropuerto de Zúrich' },
  ],
  cultura: [
    { code: 'JFK', name: 'Aeropuerto John F. Kennedy' },
    { code: 'LHR', name: 'Aeropuerto de Londres-Heathrow' },
    { code: 'CDG', name: 'Aeropuerto Charles de Gaulle' },
  ],
  deporte: [
    { code: 'SFO', name: 'Aeropuerto Internacional de San Francisco' },
    { code: 'MUC', name: 'Aeropuerto de Múnich' },
    { code: 'BCN', name: 'Aeropuerto Josep Tarradellas Barcelona-El Prat' },
  ],
  tours: [
    { code: 'NYC', name: 'Aeropuerto LaGuardia' },
    { code: 'LAX', name: 'Aeropuerto Internacional de Los Ángeles' },
    { code: 'DXB', name: 'Aeropuerto Internacional de Dubái' },
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const btnSubmit = form.querySelector('.btn-submit');
  const originInput = document.getElementById('origin');
  const destinationInput = document.getElementById('destination');
  const checkInDateInput = document.getElementById('checkInDate');
  const selectHotelCheckbox = document.getElementById('selectHotel');
  const returnDateContainer = document.getElementById('returnDateContainer');
  const returnDateInput = document.getElementById('returnDate');
  const resultadosDiv = document.getElementById('resultados');
  const hotelResultsDiv = document.getElementById('hotel-results');

  const modalAirports = document.getElementById('modal-airports');
  const modalAirportList = document.getElementById('airport-list');
  const btnCloseModalAirports = document.getElementById('close-modal-airports');

  const insuranceModal = document.getElementById('insurance-modal');
  const btnCloseInsuranceModal = document.getElementById('close-insurance-modal');

  let lastFocusedElement = null;
  let modalKeydownHandler = null;

  // Funciones para trap focus en modales
  function openModal(modalEl) {
    lastFocusedElement = document.activeElement;
    modalEl.style.display = 'flex';
    const modalContent = modalEl.querySelector('.modal-content');
    modalContent.setAttribute('tabindex', '0');
    modalContent.focus();

    modalKeydownHandler = event => {
      const focusableElsSelector = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
      const focusableEls = modalEl.querySelectorAll(focusableElsSelector);
      if (focusableEls.length === 0) return;

      const firstFocusable = focusableEls[0];
      const lastFocusable = focusableEls[focusableEls.length - 1];
      const isTabPressed = event.key === 'Tab' || event.keyCode === 9;

      if (!isTabPressed) return;

      if (event.shiftKey) { // shift + tab
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else { // tab
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    modalEl.addEventListener('keydown', modalKeydownHandler);
  }

  function closeModal(modalEl) {
    modalEl.style.display = 'none';
    if (lastFocusedElement) lastFocusedElement.focus();
    if (modalKeydownHandler) {
      modalEl.removeEventListener('keydown', modalKeydownHandler);
      modalKeydownHandler = null;
    }
  }

  // Validaciones y mensajes inline
  function showError(input, message) {
    let errorDiv = input.nextElementSibling;
    if (!errorDiv || !errorDiv.classList.contains('error-message')) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      input.parentNode.insertBefore(errorDiv, input.nextSibling);
    }
    errorDiv.textContent = message;
    input.classList.add('input-error');
  }

  function clearError(input) {
    let errorDiv = input.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
      errorDiv.textContent = '';
    }
    input.classList.remove('input-error');
  }

  function isIataValid(value) {
    return /^[A-Z]{3}$/.test(value);
  }

  function validateIata(input) {
    if (!input.value.trim()) {
      showError(input, 'Este campo es obligatorio.');
      return false;
    }
    if (!isIataValid(input.value)) {
      showError(input, 'Código IATA inválido. Deben ser 3 letras mayúsculas.');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateDate(input) {
    if (!input.value) {
      showError(input, 'Este campo es obligatorio.');
      return false;
    }
    const inputDate = new Date(input.value + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (inputDate < today) {
      showError(input, 'La fecha no puede ser anterior a hoy.');
      return false;
    }
    clearError(input);
    return true;
  }

  function validateReturnDate() {
    if (selectHotelCheckbox.checked) {
      if (!returnDateInput.value) {
        showError(returnDateInput, 'La fecha de regreso es obligatoria.');
        return false;
      }
      const ds = new Date(checkInDateInput.value + 'T00:00:00');
      const dr = new Date(returnDateInput.value + 'T00:00:00');
      if (dr <= ds) {
        showError(returnDateInput, 'La fecha de regreso debe ser posterior a la fecha de salida.');
        return false;
      }
      clearError(returnDateInput);
      return true;
    } else {
      clearError(returnDateInput);
      return true;
    }
  }

  function validateForm() {
    const validOrigin = validateIata(originInput);
    const validDestination = validateIata(destinationInput);
    const validCheckIn = validateDate(checkInDateInput);
    const validReturn = validateReturnDate();
    const formIsValid = validOrigin && validDestination && validCheckIn && validReturn;
    btnSubmit.disabled = !formIsValid;
    return formIsValid;
  }

  // Escuchar inputs para validación dinámica y mayúsculas
  [originInput, destinationInput].forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.toUpperCase();
      validateIata(input);
      validateForm();
    });
  });

  checkInDateInput.addEventListener('input', () => {
    validateDate(checkInDateInput);
    validateReturnDate();
    validateForm();
  });

  returnDateInput.addEventListener('input', () => {
    validateReturnDate();
    validateForm();
  });

  selectHotelCheckbox.addEventListener('change', () => {
    if (selectHotelCheckbox.checked) {
      returnDateContainer.style.display = 'flex';
      returnDateInput.setAttribute('required', 'required');
    } else {
      returnDateContainer.style.display = 'none';
      returnDateInput.removeAttribute('required');
      returnDateInput.value = '';
      clearError(returnDateInput);
    }
    validateForm();
  });

  // Inicial estado campo regreso
  if (selectHotelCheckbox.checked) {
    returnDateContainer.style.display = 'flex';
    returnDateInput.setAttribute('required', 'required');
  } else {
    returnDateContainer.style.display = 'none';
    returnDateInput.removeAttribute('required');
  }

  // Botones temáticos con accesibilidad teclado y apertura modal
  const featureButtons = document.querySelectorAll('.btn-feature');
  featureButtons.forEach(btn => {
    btn.addEventListener('click', openAirportModal);
    btn.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " " || e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        openAirportModal.call(btn, e);
      }
    });
  });

  // Abrir modal listado aeropuertos según temática
  function openAirportModal() {
    const theme = this.getAttribute('data-theme');
    const airports = thematicAirports[theme] || [];
    modalAirportList.innerHTML = airports.map(a =>
      `<li><button class="airport-btn" data-code="${a.code}">${a.name}</button></li>`
    ).join('');
    openModal(modalAirports);
    modalAirportList.querySelector('button')?.focus();
  }

  // Selección aeropuerto en modal
  modalAirportList.addEventListener('click', e => {
    if (e.target.classList.contains('airport-btn')) {
      const code = e.target.getAttribute('data-code');
      destinationInput.value = code;
      validateIata(destinationInput);
      validateForm();
      closeModal(modalAirports);
    }
  });

  btnCloseModalAirports.addEventListener('click', () => closeModal(modalAirports));
  window.addEventListener('click', e => {
    if (e.target === modalAirports) closeModal(modalAirports);
  });

  // Clave API AviationStack (por seguridad no poner en producción así)
  const API_KEY = '3e076e1ca4d7e04f3cc113cfa57fe496';

  // Envío formulario - búsqueda
  form.addEventListener('submit', async e => {
    e.preventDefault();

    if (!validateForm()) return;

    const origen = originInput.value.trim();
    const destino = destinationInput.value.trim();
    const fechaSalida = checkInDateInput.value;
    const selectHotel = selectHotelCheckbox.checked;
    const fechaRegreso = returnDateInput.value;

    resultadosDiv.innerHTML = '';
    hotelResultsDiv.style.display = 'none';
    hotelResultsDiv.innerHTML = '';

    if (selectHotel) {
      // Hoteles simulados
      const hotelsSimulated = [
        { name: 'Hotel Plaza', stars: 4, address: destino, price: 120 },
        { name: 'Hotel Central', stars: 3, address: destino, price: 85 },
        { name: 'Resort Paradise', stars: 5, address: destino, price: 250 }
      ];
      hotelResultsDiv.style.display = 'block';
      hotelResultsDiv.innerHTML = `<h3>Hoteles disponibles en ${destino} desde ${fechaSalida} hasta ${fechaRegreso}:</h3>` +
        hotelsSimulated.map(hotel =>
          `<div>
            <strong>${hotel.name}</strong> - ${hotel.stars} estrellas - ${hotel.address} - $${hotel.price} USD
          </div>`).join('');
      localStorage.setItem('hotelResults', JSON.stringify(hotelsSimulated));
      localStorage.setItem('flightResults', JSON.stringify([]));
      // Para usar página de resultados, descomenta la línea siguiente:
      // window.location.href = 'resultados.html';
      return;
    }

    resultadosDiv.innerHTML = 'Buscando vuelos...';

    try {
      const url = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${origen}&arr_iata=${destino}&flight_date=${fechaSalida}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) throw new Error(data.error.message);

      const vuelos = data.data || [];
      if (vuelos.length > 0) {
        const maxResults = 10;
        resultadosDiv.innerHTML = vuelos.slice(0, maxResults).map(flight => `
          <div>
            <strong>${flight.airline.name} - Vuelo ${flight.flight.number}</strong><br/>
            Salida: ${flight.departure.airport} a las ${flight.departure.scheduled}<br/>
            Llegada: ${flight.arrival.airport} a las ${flight.arrival.scheduled}<br/>
            Estado: ${flight.flight_status}
          </div>
        `).join('') + (vuelos.length > maxResults ? `<p>Mostrando solo los primeros ${maxResults} resultados.</p>` : '');

        localStorage.setItem('flightResults', JSON.stringify(vuelos));
        localStorage.setItem('hotelResults', JSON.stringify([]));
      } else {
        resultadosDiv.innerHTML = '<p>No se encontraron vuelos para esos parámetros.</p>';
        localStorage.setItem('flightResults', JSON.stringify([]));
        localStorage.setItem('hotelResults', JSON.stringify([]));
      }
    } catch (error) {
      resultadosDiv.innerHTML = `<p>Error al obtener datos: ${error.message}</p>`;
      localStorage.setItem('flightResults', JSON.stringify([]));
      localStorage.setItem('hotelResults', JSON.stringify([]));
    }
  });

  // Aquí puedes agregar funciones para el modal de seguro de viaje si lo usas

  // Inicializar validación
  validateForm();
});
