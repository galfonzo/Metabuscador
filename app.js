// Datos temáticos con códigos IATA reales
const thematicAirports = {
  arquitectura: [
    { name: "Barcelona (BCN) - España", code: "BCN" },
    { name: "Dubái (DXB) - Emiratos Árabes Unidos", code: "DXB" },
    { name: "París (CDG) - Francia", code: "CDG" },
    { name: "Roma (FCO) - Italia", code: "FCO" },
    { name: "Estambul (IST) - Turquía", code: "IST" },
    { name: "Londres (LHR) - Reino Unido", code: "LHR" },
    { name: "Florencia (FLR) - Italia", code: "FLR" },
    { name: "San Petersburgo (LED) - Rusia", code: "LED" },
    { name: "Praga (PRG) - República Checa", code: "PRG" },
    { name: "Venecia (VCE) - Italia", code: "VCE" },
    { name: "Lisboa (LIS) - Portugal", code: "LIS" },
    { name: "Osaka (KIX) - Japón", code: "KIX" },
    { name: "Samarcanda (SKD) - Uzbekistán", code: "SKD" },
    { name: "Bujará (BHK) - Uzbekistán", code: "BHK" },
    { name: "Mostar (OMO) - Bosnia-Herzegovina", code: "OMO" }
  ],
  playas: [
    { name: "Cancún (CUN) - México", code: "CUN" },
    { name: "Miami (MIA) - EE.UU.", code: "MIA" },
    { name: "Phuket (HKT) - Tailandia", code: "HKT" },
    { name: "Maldivas (MLE) - Maldivas", code: "MLE" },
    { name: "Bali (DPS) - Indonesia", code: "DPS" },
    { name: "Ibiza (IBZ) - España", code: "IBZ" },
    { name: "Maui (OGG) - EE.UU.", code: "OGG" },
    { name: "Boracay (MPH) - Filipinas", code: "MPH" },
    { name: "Barbados (BGI) - Barbados", code: "BGI" },
    { name: "Seychelles (SEZ) - Seychelles", code: "SEZ" },
    { name: "Jericoacoara (JJD) - Brasil", code: "JJD" },
    { name: "Alter do Chão (STM) - Brasil", code: "STM" },
    { name: "Ksamil (TIA) - Albania (código del aeropuerto de Tirana)", code: "TIA" },
    { name: "Islas Feroe (FAE) - Dinamarca", code: "FAE" }
  ],
  montanas: [
    { name: "Denver (DEN) - EE.UU.", code: "DEN" },
    { name: "Santiago (SCL) - Chile", code: "SCL" },
    { name: "Zúrich (ZRH) - Suiza", code: "ZRH" },
    { name: "Chamonix (GVA) - Francia", code: "GVA" },
    { name: "Innsbruck (INN) - Austria", code: "INN" },
    { name: "Queenstown (ZQN) - Nueva Zelanda", code: "ZQN" },
    { name: "Aspen (ASE) - EE.UU.", code: "ASE" },
    { name: "Banff (YBA) - Canadá", code: "YBA" },
    { name: "Nagano (NGO) - Japón", code: "NGO" },
    { name: "Zermatt (GVA) - Suiza (aeropuerto Ginebra más cercano)", code: "GVA" },
    { name: "Hokkaido (CTS) - Japón", code: "CTS" },
    { name: "Bariloche (BRC) - Argentina", code: "BRC" },
    { name: "La Paz (LPB) - Bolivia", code: "LPB" },
    { name: "Kathmandú (KTM) - Nepal", code: "KTM" }
  ],
  cultura: [
    { name: "Roma (FCO) - Italia", code: "FCO" },
    { name: "Kyoto (KIX) - Japón", code: "KIX" },
    { name: "Estambul (IST) - Turquía", code: "IST" },
    { name: "Atenas (ATH) - Grecia", code: "ATH" },
    { name: "Praga (PRG) - República Checa", code: "PRG" },
    { name: "Marrakech (RAK) - Marruecos", code: "RAK" },
    { name: "Jerusalén (JRS) - Israel", code: "JRS" },
    { name: "Cusco (CUZ) - Perú", code: "CUZ" },
    { name: "Cartagena (CTG) - Colombia", code: "CTG" },
    { name: "Seúl (ICN) - Corea del Sur", code: "ICN" },
    { name: "Luang Prabang (LPQ) - Laos", code: "LPQ" },
    { name: "Mostar (OMO) - Bosnia-Herzegovina", code: "OMO" },
    { name: "Matera (BRI) - Italia (aeropuerto Bari más cercano)", code: "BRI" }
  ],
  deporte: [
    { name: "Londres (LHR) - Reino Unido", code: "LHR" },
    { name: "Melbourne (MEL) - Australia", code: "MEL" },
    { name: "Madrid (MAD) - España", code: "MAD" },
    { name: "Barcelona (BCN) - España", code: "BCN" },
    { name: "Vancouver (YVR) - Canadá", code: "YVR" },
    { name: "Río de Janeiro (GIG) - Brasil", code: "GIG" },
    { name: "Múnich (MUC) - Alemania", code: "MUC" },
    { name: "Turín (TRN) - Italia", code: "TRN" },
    { name: "Sochi (AER) - Rusia", code: "AER" },
    { name: "Salt Lake City (SLC) - EE.UU.", code: "SLC" },
    { name: "Medellín (MDE) - Colombia", code: "MDE" },
    { name: "Tokyo (HND) - Japón", code: "HND" },
    { name: "Jericoacoara (JJD) - Brasil", code: "JJD" }
  ],
  tours: [
    { name: "El Cairo (CAI) - Egipto", code: "CAI" },
    { name: "Nueva Delhi (DEL) - India", code: "DEL" },
    { name: "Pekín (PEK) - China", code: "PEK" },
    { name: "Machu Picchu (CUZ) - Perú", code: "CUZ" },
    { name: "Petra (AMM) - Jordania", code: "AMM" },
    { name: "Angkor Wat (REP) - Camboya", code: "REP" },
    { name: "Kioto (KIX) - Japón", code: "KIX" },
    { name: "Estambul (IST) - Turquía", code: "IST" },
    { name: "Cartagena (CTG) - Colombia", code: "CTG" },
    { name: "Jerusalén (JRS) - Israel", code: "JRS" },
    { name: "Islas Andamán (IXZ) - India", code: "IXZ" },
    { name: "San Pedro de Atacama (CJC) - Chile", code: "CJC" },
    { name: "Dubrovnik (DBV) - Croacia", code: "DBV" },
    { name: "Reykjavik (KEF) - Islandia", code: "KEF" },
    { name: "Valle de Viñales (HAV) - Cuba (aeropuerto La Habana)", code: "HAV" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos
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

  // Modales y botones cerrar modal
  const modalAirports = document.getElementById('modal-airports');
  const modalAirportList = document.getElementById('airport-list');
  const btnCloseModalAirports = document.getElementById('close-modal-airports');

  const insuranceModal = document.getElementById('insurance-modal');
  const btnCloseInsuranceModal = document.getElementById('close-insurance-modal');

  // Variables para foco y evento trapFocus
  let lastFocusedElement = null;
  let modalKeydownHandler = null;

  // ------------------- FUNCIONES DE MODALES -------------------

  function openModal(modalEl) {
    lastFocusedElement = document.activeElement;
    modalEl.style.display = 'flex';
    const modalContent = modalEl.querySelector('.modal-content');
    modalContent.setAttribute('tabindex', '0');
    modalContent.focus();

    // Agregar trap focus para modal
    modalKeydownHandler = function (event) {
      const focusableElementsSelector = 
        'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
      const focusableElements = modalEl.querySelectorAll(focusableElementsSelector);
      if (focusableElements.length === 0) return;

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
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
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
    if (modalKeydownHandler) {
      modalEl.removeEventListener('keydown', modalKeydownHandler);
      modalKeydownHandler = null;
    }
  }

  // ------------------- VALIDACIONES -------------------

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
    today.setHours(0,0,0,0);
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
      return true; // No es obligatorio si no está seleccionado hotel
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

  // ------------------- EVENTOS -------------------

  // Convertir inputs IATA a mayúsculas y validar en tiempo real
  [originInput, destinationInput].forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.toUpperCase();
      validateIata(input);
      validateForm();
    });
  });

  // Validar fechas al ingresar
  checkInDateInput.addEventListener('input', () => {
    validateDate(checkInDateInput);
    validateReturnDate();
    validateForm();
  });

  returnDateInput.addEventListener('input', () => {
    validateReturnDate();
    validateForm();
  });

  // Mostrar/ocultar fecha regreso y ajustar validación según checkbox hotel
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

  // Inicializar estado del returnDateContainer según checkbox estado al cargar
  if (selectHotelCheckbox.checked) {
    returnDateContainer.style.display = 'flex';
    returnDateInput.setAttribute('required', 'required');
  } else {
    returnDateContainer.style.display = 'none';
    returnDateInput.removeAttribute('required');
  }

  // Manejo clicks y teclado en botones temáticos para abrir modal aeropuertos
  const featureButtons = document.querySelectorAll('.btn-feature');
  featureButtons.forEach(btn => {
    btn.addEventListener('click', openAirportModal);
    btn.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " " || e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
        openAirportModal.call(btn, e);
      }
    });
  });

  function openAirportModal() {
    const theme = this.getAttribute('data-theme');
    const airports = thematicAirports[theme] || [];
    modalAirportList.innerHTML = airports.map(a =>
      `<li><button class="airport-btn" data-code="${a.code}">${a.name}</button></li>`
    ).join('');
    openModal(modalAirports);
    modalAirportList.querySelector('button')?.focus();
  }

  // Selección aeropuerto en modal y cierre
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
  window.addEventListener('click', (e) => { if (e.target === modalAirports) closeModal(modalAirports); });

  // ------------------- BÚSQUEDA VUELOS Y HOTELES -------------------

  const API_KEY = '3e076e1ca4d7e04f3cc113cfa57fe496';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // No enviar si hay errores
    }

    const origen = originInput.value.trim();
    const destino = destinationInput.value.trim();
    const fechaSalida = checkInDateInput.value;
    const selectHotel = selectHotelCheckbox.checked;
    const fechaRegreso = returnDateInput.value;

    resultadosDiv.innerHTML = '';
    hotelResultsDiv.style.display = 'none';
    hotelResultsDiv.innerHTML = '';

    if (selectHotel) {
      // Resultados hotel simulados
      hotelResultsDiv.style.display = 'block';
      hotelResultsDiv.innerHTML = `
        <h3>Hoteles disponibles en ${destino} desde ${fechaSalida} hasta ${fechaRegreso}:</h3>
        <ul>
          <li>Hotel Plaza - 4 estrellas</li>
          <li>Hotel Central - 3 estrellas</li>
          <li>Resort Paradise - 5 estrellas</li>
        </ul>
      `;
      resultadosDiv.innerHTML = '';
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
        `).join('');
        if (vuelos.length > maxResults) {
          resultadosDiv.innerHTML += `<p>Mostrando solo los primeros ${maxResults} resultados.</p>`;
        }
      } else {
        resultadosDiv.innerHTML = '<p>No se encontraron vuelos para esos parámetros.</p>';
      }
    } catch (error) {
      resultadosDiv.innerHTML = `<p>Error al obtener datos: ${error.message}</p>`;
    }
  });

  // ------------------- SEGURO DE VIAJE -------------------
  const travelInsuranceCheckbox = document.getElementById('travelInsurance');
  const insuredStartDateInput = document.getElementById('insured-start-date');
  const insuredEndDateInput = document.getElementById('insured-end-date');
  const insuredCountryInput = document.getElementById('insured-country');
  const checkInDate = document.getElementById('checkInDate');
  const insuredAgeInput = document.getElementById('insured-age');

  function resetInsuranceQuote() {
    const resultDiv = document.getElementById('insurance-quote-result');
    resultDiv.innerHTML = '';
    resultDiv.style.display = 'none';
  }

  travelInsuranceCheckbox.addEventListener('change', () => {
    if (travelInsuranceCheckbox.checked) {
      insuredStartDateInput.value = checkInDate.value;
      insuredEndDateInput.value = checkInDate.value;
      insuredCountryInput.value = destinationInput.value.trim();
      openModal(insuranceModal);
    } else {
      closeModal(insuranceModal);
      resetInsuranceQuote();
    }
  });

  btnCloseInsuranceModal.addEventListener('click', () => {
    travelInsuranceCheckbox.checked = false;
    closeModal(insuranceModal);
    resetInsuranceQuote();
  });

  window.addEventListener('click', (e) => {
    if (e.target === insuranceModal) {
      travelInsuranceCheckbox.checked = false;
      closeModal(insuranceModal);
      resetInsuranceQuote();
    }
  });

  checkInDate.addEventListener('change', () => {
    if (insuranceModal.style.display === 'flex') {
      insuredStartDateInput.value = checkInDate.value;
      insuredEndDateInput.value = checkInDate.value;
    }
  });

  destinationInput.addEventListener('input', () => {
    if (insuranceModal.style.display === 'flex') {
      insuredCountryInput.value = destinationInput.value.trim();
    }
  });

  insuredAgeInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 3) {
      this.value = this.value.slice(0, 3);
    }
  });

  // Cotización seguro de viaje
  document.getElementById('insurance-quote-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('insured-name').value.trim();
    const ageStr = insuredAgeInput.value.trim();
    const age = parseInt(ageStr, 10);
    const country = insuredCountryInput.value.trim();
    const startDate = insuredStartDateInput.value;
    const endDate = insuredEndDateInput.value;

    if (!/^\d{1,3}$/.test(ageStr) || isNaN(age) || age < 0 || age > 120) {
      alert('Por favor, ingresa una edad válida (0-120, máximo 3 dígitos).');
      return;
    }
    if (endDate < startDate) {
      alert('La fecha de fin debe ser igual o posterior a la fecha de inicio.');
      return;
    }

    let quote = 0;
    if (age < 18) quote = 30;
    else if (age < 40) quote = 50;
    else if (age < 65) quote = 70;
    else quote = 120;

    const resultDiv = document.getElementById('insurance-quote-result');
    resultDiv.innerHTML = `
      <div>
        <strong style="color:#00c6ff;font-size:1.2em;">Cotización para ${name}:</strong><br>
        Destino: ${country}<br>
        Fechas: ${startDate} a ${endDate}<br>
        Edad: ${age} años<br>
        <span style="font-size:1.1em;">Precio estimado: <strong style="color:#000;">$${quote} USD</strong></span>
      </div>
      <div style="margin-top:10px;">
        <button id="btn-solicitar-seguro" style="background:#00c6ff;color:#003f5c;font-weight:700;padding:10px 22px;border:none;border-radius:7px;cursor:pointer;">Solicitar este seguro</button>
      </div>
    `;
    resultDiv.style.display = 'block';

    document.getElementById('btn-solicitar-seguro').addEventListener('click', () => {
      alert('¡Solicitud enviada! Un asesor te contactará pronto.');
    });
  });
});
