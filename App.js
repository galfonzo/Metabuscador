// Datos tem�ticos corregidos (con c�digos IATA reales)
const thematicAirports = {
  arquitectura: [
    { name: "Barcelona (BCN) - Espa�a", code: "BCN" },
    { name: "Dub�i (DXB) - Emiratos �rabes Unidos", code: "DXB" },
    { name: "Par�s (CDG) - Francia", code: "CDG" },
    { name: "Roma (FCO) - Italia", code: "FCO" },
    { name: "Estambul (IST) - Turqu�a", code: "IST" },
    { name: "Londres (LHR) - Reino Unido", code: "LHR" },
    { name: "Florencia (FLR) - Italia", code: "FLR" },
    { name: "San Petersburgo (LED) - Rusia", code: "LED" },
    { name: "Praga (PRG) - Rep�blica Checa", code: "PRG" },
    { name: "Venecia (VCE) - Italia", code: "VCE" },
    { name: "Lisboa (LIS) - Portugal", code: "LIS" },
    { name: "Osaka (KIX) - Jap�n", code: "KIX" },
    { name: "Samarcanda (SKD) - Uzbekist�n", code: "SKD" },
    { name: "Bujar� (BHK) - Uzbekist�n", code: "BHK" },
    { name: "Mostar (OMO) - Bosnia-Herzegovina", code: "OMO" }
  ],
  playas: [
    { name: "Canc�n (CUN) - M�xico", code: "CUN" },
    { name: "Miami (MIA) - EE.UU.", code: "MIA" },
    { name: "Phuket (HKT) - Tailandia", code: "HKT" },
    { name: "Maldivas (MLE) - Maldivas", code: "MLE" },
    { name: "Bali (DPS) - Indonesia", code: "DPS" },
    { name: "Ibiza (IBZ) - Espa�a", code: "IBZ" },
    { name: "Maui (OGG) - EE.UU.", code: "OGG" },
    { name: "Boracay (MPH) - Filipinas", code: "MPH" },
    { name: "Barbados (BGI) - Barbados", code: "BGI" },
    { name: "Seychelles (SEZ) - Seychelles", code: "SEZ" },
    { name: "Jericoacoara (JJD) - Brasil", code: "JJD" },
    { name: "Alter do Ch�o (STM) - Brasil", code: "STM" },
    { name: "Ksamil (TIA) - Albania (c�digo del aeropuerto de Tirana)", code: "TIA" },
    { name: "Islas Feroe (FAE) - Dinamarca", code: "FAE" }
  ],
  montanas: [
    { name: "Denver (DEN) - EE.UU.", code: "DEN" },
    { name: "Santiago (SCL) - Chile", code: "SCL" },
    { name: "Z�rich (ZRH) - Suiza", code: "ZRH" },
    { name: "Chamonix (GVA) - Francia", code: "GVA" },
    { name: "Innsbruck (INN) - Austria", code: "INN" },
    { name: "Queenstown (ZQN) - Nueva Zelanda", code: "ZQN" },
    { name: "Aspen (ASE) - EE.UU.", code: "ASE" },
    { name: "Banff (YBA) - Canad�", code: "YBA" },
    { name: "Nagano (NGO) - Jap�n", code: "NGO" },
    { name: "Zermatt (GVA) - Suiza (aeropuerto Ginebra m�s cercano)", code: "GVA" },
    { name: "Hokkaido (CTS) - Jap�n", code: "CTS" },
    { name: "Bariloche (BRC) - Argentina", code: "BRC" },
    { name: "La Paz (LPB) - Bolivia", code: "LPB" },
    { name: "Kathmand� (KTM) - Nepal", code: "KTM" }
  ],
  cultura: [
    { name: "Roma (FCO) - Italia", code: "FCO" },
    { name: "Kyoto (KIX) - Jap�n", code: "KIX" },
    { name: "Estambul (IST) - Turqu�a", code: "IST" },
    { name: "Atenas (ATH) - Grecia", code: "ATH" },
    { name: "Praga (PRG) - Rep�blica Checa", code: "PRG" },
    { name: "Marrakech (RAK) - Marruecos", code: "RAK" },
    { name: "Jerusal�n (JRS) - Israel", code: "JRS" },
    { name: "Cusco (CUZ) - Per�", code: "CUZ" },
    { name: "Cartagena (CTG) - Colombia", code: "CTG" },
    { name: "Se�l (ICN) - Corea del Sur", code: "ICN" },
    { name: "Luang Prabang (LPQ) - Laos", code: "LPQ" },
    { name: "Mostar (OMO) - Bosnia-Herzegovina", code: "OMO" },
    { name: "Matera (BRI) - Italia (aeropuerto Bari m�s cercano)", code: "BRI" }
  ],
  deporte: [
    { name: "Londres (LHR) - Reino Unido", code: "LHR" },
    { name: "Melbourne (MEL) - Australia", code: "MEL" },
    { name: "Madrid (MAD) - Espa�a", code: "MAD" },
    { name: "Barcelona (BCN) - Espa�a", code: "BCN" },
    { name: "Vancouver (YVR) - Canad�", code: "YVR" },
    { name: "R�o de Janeiro (GIG) - Brasil", code: "GIG" },
    { name: "M�nich (MUC) - Alemania", code: "MUC" },
    { name: "Tur�n (TRN) - Italia", code: "TRN" },
    { name: "Sochi (AER) - Rusia", code: "AER" },
    { name: "Salt Lake City (SLC) - EE.UU.", code: "SLC" },
    { name: "Medell�n (MDE) - Colombia", code: "MDE" },
    { name: "Tokyo (HND) - Jap�n", code: "HND" },
    { name: "Jericoacoara (JJD) - Brasil", code: "JJD" }
  ],
  tours: [
    { name: "El Cairo (CAI) - Egipto", code: "CAI" },
    { name: "Nueva Delhi (DEL) - India", code: "DEL" },
    { name: "Pek�n (PEK) - China", code: "PEK" },
    { name: "Machu Picchu (CUZ) - Per�", code: "CUZ" },
    { name: "Petra (AMM) - Jordania", code: "AMM" },
    { name: "Angkor Wat (REP) - Camboya", code: "REP" },
    { name: "Kioto (KIX) - Jap�n", code: "KIX" },
    { name: "Estambul (IST) - Turqu�a", code: "IST" },
    { name: "Cartagena (CTG) - Colombia", code: "CTG" },
    { name: "Jerusal�n (JRS) - Israel", code: "JRS" },
    { name: "Islas Andam�n (IXZ) - India", code: "IXZ" },
    { name: "San Pedro de Atacama (CJC) - Chile", code: "CJC" },
    { name: "Dubrovnik (DBV) - Croacia", code: "DBV" },
    { name: "Reykjavik (KEF) - Islandia", code: "KEF" },
    { name: "Valle de Vi�ales (HAV) - Cuba (aeropuerto La Habana)", code: "HAV" }
  ]
};

// Variables para modales y elementos
const modalAirports = document.getElementById('modal-airports');
const modalAirportList = document.getElementById('airport-list');
const btnCloseModalAirports = document.getElementById('close-modal-airports');

const insuranceModal = document.getElementById('insurance-modal');
const btnCloseInsuranceModal = document.getElementById('close-insurance-modal');

let lastFocusedElement = null;

// Funci�n para abrir modal con focus trap b�sico
function openModal(modalEl) {
  lastFocusedElement = document.activeElement;
  modalEl.style.display = 'flex';
  const modalContent = modalEl.querySelector('.modal-content');
  modalContent.setAttribute('tabindex', '0');
  modalContent.focus();
}

// Funci�n para cerrar modal y devolver foco
function closeModal(modalEl) {
  modalEl.style.display = 'none';
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// Manejo de trap b�sico de foco en modales (solo foco en .modal-content y botones)
function trapFocus(modalEl) {
  const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  const focusableElements = modalEl.querySelectorAll(focusableElementsString);
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  modalEl.addEventListener('keydown', function(event) {
    const isTabPressed = (event.key === 'Tab' || event.keyCode === 9);

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

// Aplicamos trapFocus a cada modal
trapFocus(modalAirports);
trapFocus(insuranceModal);

// Funci�n para validar IATA
function isIataValid(value) {
  return /^[A-Z]{3}$/.test(value);
}

// Conversi�n autom�tica a may�sculas en campos IATA
['origin', 'destination'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('input', () => {
    el.value = el.value.toUpperCase();
  });
});

// Mostrar/ocultar fecha regreso y validaci�n
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

// Manejo de botones tem�ticos con soporte para teclado (click + enter/space)
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
  // Focus al primer bot�n
  modalAirportList.querySelector('button')?.focus();
}

// Selecci�n aeropuerto del modal
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

// Modal de seguro viaje y sincronizaci�n con formulario principal
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

// Sincronizaci�n de fechas y pa�s destino en modal seguro
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

// Validaci�n restringida para edad en seguro
const insuredAgeInput = document.getElementById('insured-age');
insuredAgeInput.addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, '');
  if (this.value.length > 3) {
    this.value = this.value.slice(0,3);
  }
});

// B�squeda vuelos y hoteles con l�mite de resultados
const API_KEY = '3e076e1ca4d7e04f3cc113cfa57fe496'; // RECOMENDADO: Mover esta key a backend

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
    alert('Los c�digos IATA deben tener exactamente 3 letras may�sculas.');
    return;
  }

  // Validar fechas obligatorias
  if(!fechaSalida) {
    alert('Por favor, selecciona la fecha de salida.');
    return;
  }
  if (selectHotel && !fechaRegreso) {
    alert('Por favor, selecciona la fecha de regreso para el hotel.');
    return;
  }

  if (selectHotel) {
    // Simulaci�n b�squeda hoteles (posteriormente integrar API real)
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

  // B�squeda vuelos (limitar resultados)
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
      if(vuelos.length > maxResults) {
        resultadosDiv.innerHTML += `<p>Mostrando solo los primeros ${maxResults} resultados.</p>`;
      }
    } else {
      resultadosDiv.innerHTML = '<p>No se encontraron vuelos para esos par�metros.</p>';
    }
  } catch (error) {
    resultadosDiv.innerHTML = `<p>Error al obtener datos: ${error.message}</p>`;
  }
});

// Formulario seguro de viaje
document.getElementById('insurance-quote-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('insured-name').value.trim();
  const ageStr = document.getElementById('insured-age').value.trim();
  const age = parseInt(ageStr, 10);
  const country = document.getElementById('insured-country').value.trim();
  const startDate = document.getElementById('insured-start-date').value;
  const endDate = document.getElementById('insured-end-date').value;

  if (!/^\d{1,3}$/.test(ageStr) || isNaN(age) || age < 0 || age > 120) {
    alert('Por favor, ingresa una edad v�lida (0-120, m�ximo 3 d�gitos).');
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
      <strong style="color:#00c6ff;font-size:1.2em;">Cotizaci�n para ${name}:</strong><br>
      Destino: ${country}<br>
      Fechas: ${startDate} a ${endDate}<br>
      Edad: ${age} a�os<br>
      <span style="font-size:1.1em;">Precio estimado: <strong style="color:#000;">$${quote} USD</strong></span>
    </div>
    <div style="margin-top:10px;">
      <button id="btn-solicitar-seguro" style="background:#00c6ff;color:#003f5c;font-weight:700;padding:10px 22px;border:none;border-radius:7px;cursor:pointer;">Solicitar este seguro</button>
    </div>
  `;
  resultDiv.style.display = 'block';

  document.getElementById('btn-solicitar-seguro').addEventListener('click', () => {
    alert('�Solicitud enviada! Un asesor te contactar� pronto.');
  });
});