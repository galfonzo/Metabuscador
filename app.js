// Datos temáticos corregidos (con códigos IATA reales)
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

// Variables modales y elementos
const modalAirports = document.getElementById('modal-airports');
const modalAirportList = document.getElementById('airport-list');
const btnCloseModalAirports = document.getElementById('close-modal-airports');

const insuranceModal = document.getElementById('insurance-modal');
const btnCloseInsuranceModal = document.getElementById('close-insurance-modal');

let lastFocusedElement = null;

// Función abrir modal con foco y guardando último foco
function openModal(modalEl) {
  lastFocusedElement = document.activeElement;
  modalEl.style.display = 'flex';
  const modalContent = modalEl.querySelector('.modal-content');
  modalContent.setAttribute('tabindex', '0');
  modalContent.focus();
}

// Función cerrar modal y devolver foco
function closeModal(modalEl) {
  modalEl.style.display = 'none';
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// Trap foco básico en modal
function trapFocus(modalEl) {
  const focusableElementsSelector =
    'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

  const focusableElements = modalEl.querySelectorAll(focusableElementsSelector);
  if (focusableElements.length === 0) return;

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  modalEl.addEventListener('keydown', function (event) {
    const isTabPressed = event.key === 'Tab' || event.keyCode === 9;
    if (!isTabPressed) return;

    if (event.shiftKey) { // Shift + Tab
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else { // Tab
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  });
}

// Aplicar foco seguro a los modales
trapFocus(modalAirports);
trapFocus(insuranceModal);

// Validación IATA: 3 letras solo
function isIataValid(value) {
  return /^[A-Z]{3}$/.test(value);
}

// Conversión automática a mayúsculas en campos IATA
['origin', 'destination'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('input', () => {
    el.value = el.value.toUpperCase();
  });
});

// Mostrar/ocultar campo "fecha de regreso" dependiendo checkbox hotel
const selectHotelCheckbox = document.getElementById('selectHotel');
const returnDateContainer = document.getElementById('returnDateContainer');
const returnDateInput = document.getElementById('returnDate');

selectHotelCheckbox.addEventListener('change', () => {
  if (selectHotelCheckbox.checked) {
    returnDateContainer.style.display = 'block';
    returnDateInput.required = true;
  } else {
    returnDateContainer.style.display = 'none';
    returnDateInput.required = false;
    returnDateInput.value = '';
  }
});

// Manejo botones temáticos con soporte teclado
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

// Selección aeropuerto en modal
modalAirportList.addEventListener('click', e => {
  if (e.target.classList.contains('airport-btn')) {
    const code = e.target.getAttribute('data-code');
    document.getElementById('destination').value = code;
    closeModal(modalAirports);
  }
});

// Cierre modal aeropuerto
btnCloseModalAirports.addEventListener('click', () => closeModal(modalAirports));
window.addEventListener('click', e => {
  if (e.target === modalAirports) closeModal(modalAirports);
});

// Modal seguro viaje y sincronización formulario principal
const travelInsuranceCheckbox = document.getElementById('travelInsurance');
const checkInDateInput = document.getElementById('checkInDate');
const insuredStartDateInput = document.getElementById('insured-start-date');
const insuredEndDateInput = document.getElementById('insured-end-date');
const insuredCountryInput = document.getElementById('insured-country');

function resetInsuranceQuote() {
  const resultDiv = document.getElementById('insurance-quote-result');
  resultDiv.innerHTML = '';
  resultDiv.style.display = 'none';
}

travelInsuranceCheckbox.addEventListener('change', () => {
  if (travelInsuranceCheckbox.checked) {
    insuredStartDateInput.value = checkInDateInput.value;
    insuredEndDateInput.value = checkInDateInput.value;
    insuredCountryInput.value = document.getElementById('destination').value.trim();
    openModal(insuranceModal);
  } else {
    closeModal(insuranceModal);
    resetInsuranceQuote();
  }
});

// Cierre modal seguro
btnCloseInsuranceModal.addEventListener('click', () => {
  travelInsuranceCheckbox.checked = false;
  closeModal(insuranceModal);
  resetInsuranceQuote();
});
window.addEventListener('click', e => {
  if (e.target === insuranceModal) {
    travelInsuranceCheckbox.checked = false;
    closeModal(insuranceModal);
    resetInsuranceQuote();
  }
});

// Sincronización fechas y país destino en modal seguro
checkInDateInput.addEventListener('change', () => {
  if (insuranceModal.style.display === 'flex') {
    insuredStartDateInput.value = checkInDateInput.value;
    insuredEndDateInput.value = checkInDateInput.value;
  }
});
document.getElementById('destination').addEventListener('input', () => {
  if (insuranceModal.style.display === 'flex') {
    insuredCountryInput.value = document.getElementById('destination').value.trim();
  }
});

// Validación para edad en seguro
const insuredAgeInput = document.getElementById('insured-age');
insuredAgeInput.addEventListener('input', function () {
  this.value = this.value.replace(/\D/g, '');
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
});

// Llamada a API AviationStack para buscar vuelos
// NOTA IMPORTANTE: para uso real, la API key debe usarse en backend para seguridad
const API_KEY = '3e076e1ca4d7e04f3cc113cfa57fe496'; 

document.getElementById('search-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const origen = document.getElementById('origin').value.trim().toUpperCase();
  const destino = document.getElementById('destination').value.trim().toUpperCase();
  const fechaSalida = document.getElementById('checkInDate').value;
  const selectHotel = document.getElementById('selectHotel').checked;
  const fechaRegreso = document.getElementById('returnDate').value;

  const resultadosDiv = document.getElementById('resultados');
  const hotelResultsDiv = document.getElementById('hotel-results');

  resultadosDiv.innerHTML = '';
  hotelResultsDiv.style.display = 'none';
  hotelResultsDiv.innerHTML = '';

  // Validar IATA
  if (!isIataValid(origen) || !isIataValid(destino)) {
    alert('Los códigos IATA deben tener exactamente 3 letras mayúsculas.');
    return;
  }

  // Validar fechas obligatorias
  if (!fechaSalida) {
    alert('Por favor, selecciona la fecha de salida.');
    return;
  }
  if (selectHotel && !fechaRegreso) {
    alert('Por favor, selecciona la fecha de regreso para el hotel.');
    return;
  }

  if (selectHotel) {
    // Simulación búsqueda hoteles (posteriormente integrar API real)
    hotelResultsDiv.style.display = 'block';
    hotelResultsDiv.innerHTML = `
      <h3>Hoteles disponibles en ${destino} desde ${fechaSalida} hasta ${fechaRegreso}:</h3>
      <ul>
        <li>Hotel Plaza - 4 estrellas</li>
        <li>Hotel Central - 3 estrellas</li>
        <li>Resort Paradise - 5 estrellas</li>
      </ul>`;
    return;
  }

  // Búsqueda vuelos (limitar resultados)
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

// Formulario cotización seguro de viaje
document.getElementById('insurance-quote-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('insured-name').value.trim();
  const ageStr = document.getElementById('insured-age').value.trim();
  const age = parseInt(ageStr, 10);
  const country = document.getElementById('insured-country').value.trim();
  const startDate = document.getElementById('insured-start-date').value;
  const endDate = document.getElementById('insured-end-date').value;

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
