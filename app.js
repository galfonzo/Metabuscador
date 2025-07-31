// Listado temático con código IATA y ciudad/ región
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

document.addEventListener('DOMContentLoaded', () => {
  // Elementos HTML
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
  const insuranceModal = document.getElementById('insurance-modal');
  const btnCloseInsuranceModal = document.getElementById('close-insurance-modal');
  const cotizarSeguroCheckbox = document.getElementById('cotizarSeguro');

  // Modal seguro accesible desde botón visible
  cotizarSeguroCheckbox.addEventListener('change', () => {
    if (cotizarSeguroCheckbox.checked) {
      openModal(insuranceModal);
      // Prellenar fechas y destino si están disponibles
      document.getElementById('insured-start-date').value = checkInDateInput.value || '';
      document.getElementById('insured-end-date').value = returnDateInput.value || checkInDateInput.value || '';
      document.getElementById('insured-country').value = destinationInput.value || '';
    }
  });

  btnCloseInsuranceModal.addEventListener('click', () => closeModal(insuranceModal));
  window.addEventListener('click', e => {
    if (e.target === insuranceModal) closeModal(insuranceModal);
  });

  let lastFocusedElement = null;
  let modalKeydownHandler = null;

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
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
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
  if (selectHotelCheckbox.checked) {
    returnDateContainer.style.display = 'flex';
    returnDateInput.setAttribute('required', 'required');
  } else {
    returnDateContainer.style.display = 'none';
    returnDateInput.removeAttribute('required');
  }

  // Botones temáticos: abrir modal ciudades/códigos
  const modalAirports = document.createElement('div');
  modalAirports.id = 'modal-airports';
  modalAirports.className = 'modal';
  modalAirports.style.display = 'none';
  modalAirports.innerHTML = `
    <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-airports-title">
      <button id="close-modal-airports" aria-label="Cerrar modal" class="close-button">&times;</button>
      <h2 id="modal-airports-title">Selecciona un aeropuerto</h2>
      <ul id="airport-list" style="list-style:none; padding:0; margin:0;"></ul>
    </div>`;
  document.body.appendChild(modalAirports);
  const modalAirportList = document.getElementById('airport-list');
  const btnCloseModalAirports = document.getElementById('close-modal-airports');

  const featureButtons = document.querySelectorAll('.btn-feature');
  featureButtons.forEach(btn => {
    btn.addEventListener('click', openAirportModal);
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        openAirportModal.call(btn, e);
      }
    });
  });
  function openAirportModal() {
    const theme = this.getAttribute('data-theme');
    const airports = thematicAirports[theme] || [];
    modalAirportList.innerHTML = airports.map(a =>
      `<li style="margin:8px 0;">
        <button class="airport-btn" data-code="${a.code}" style="font-size:1rem; padding: 8px 14px; border-radius: 7px; border: none; background: #00c6ff; color: #003f5c; cursor: pointer; width: 100%; text-align: left;">
          ${a.city} (${a.code})
        </button>
      </li>`
    ).join('');
    openModal(modalAirports);
    modalAirportList.querySelector('button')?.focus();
  }
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
    if(e.target === modalAirports) closeModal(modalAirports);
  });

  // API Key (debes actualizarla si tienes una personalizada)
  const API_KEY = '3e076e1ca4d7e04f3cc113cfa57fe496';

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
      // Simulación de resultados de hoteles
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
          <div style="margin-bottom: 16px; padding: 12px; border-radius: 8px; background: rgba(0,198,255,0.15); color: #003f5c;">
            <strong>${flight.airline.name} - Vuelo ${flight.flight.number}</strong><br/>
            Salida: ${flight.departure.airport} a las ${new Date(flight.departure.scheduled).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}<br/>
            Llegada: ${flight.arrival.airport} a las ${new Date(flight.arrival.scheduled).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}<br/>
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

  // Modal seguro, formulario validación y ejemplo de cotización básica
  document.getElementById('insurance-quote-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('insured-name').value.trim();
    const ageStr = document.getElementById('insured-age').value.trim();
    const age = parseInt(ageStr, 10);
    const country = document.getElementById('insured-country').value.trim();
    const startDate = document.getElementById('insured-start-date').value;
    const endDate = document.getElementById('insured-end-date').value;

    if (!name) {
      alert('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!/^\d{1,3}$/.test(ageStr) || isNaN(age) || age < 0 || age > 120) {
      alert('Edad no válida.');
      return;
    }
    if (endDate < startDate) {
      alert('La fecha fin debe ser igual o posterior a la de inicio.');
      return;
    }
    let quote = 0;
    if (age < 18) quote = 30;
    else if (age < 40) quote = 50;
    else if (age < 65) quote = 70;
    else quote = 120;

    const resultDiv = document.getElementById('insurance-quote-result');
    resultDiv.innerHTML =
      `<div>
        <strong style="color:#00c6ff;font-size:1.2em;">Cotización para ${name}:</strong><br/>
        Destino: ${country}<br/>
        Fechas: ${startDate} a ${endDate}<br/>
        Edad: ${age} años<br/>
        <span style="font-size:1.1em;">Precio estimado: <strong style="color:#000;">$${quote} USD</strong></span>
      </div>
      <div style="margin-top:10px;">
        <button id="btn-solicitar-seguro" style="background:#00c6ff;color:#003f5c;font-weight:700;padding:10px
