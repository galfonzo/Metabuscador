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

  // Validaciones
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

  // Eventos para inputs
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

  // Mostrar/ocultar fecha regreso según checkbox
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

  // Envío formulario
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validateForm()) return;

    const origen = originInput.value.trim();
    const destino = destinationInput.value.trim();
    const fechaSalida = checkInDateInput.value;
    const incluirHotel = selectHotelCheckbox.checked;
    const fechaRegreso = returnDateInput.value;

    resultadosDiv.innerHTML = '';
    hotelResultsDiv.style.display = 'none';
    hotelResultsDiv.innerHTML = '';

    if (incluirHotel) {
      // Simulación de hoteles
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
      const API_KEY = '3e076e1ca4d7e04f3cc113cfa57fe496';
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

  // Validar formulario inicial
  validateForm();
});
