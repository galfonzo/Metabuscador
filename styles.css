/* Reset básico y estilos globales */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #11a49a; /* color de fondo del isotipo TuneMyTrip */
  color: #222;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 15px;
}

main {
  width: 100%;
  max-width: 1100px;
  background: white;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.15);
  padding: 32px 24px 48px;
  box-sizing: border-box;
}

/* Logo */
#logo-container {
  text-align: center;
  margin-bottom: 36px;
}
#logo {
  width: auto;
  height: 125px; /* 250% tamaño original ~ 50px * 2.5 */
  user-select: none;
  pointer-events: none;
}

/* Inputs en línea */
.inputs-row {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: nowrap;
  margin-bottom: 24px;
}

.inputs-row .row {
  flex: 1 1 33%;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 0.85rem;
}

input[type="text"],
input[type="date"],
input[type="number"] {
  padding: 10px 14px;
  border: 1.8px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="date"]:focus,
input[type="number"]:focus {
  border-color: #11a49a;
  outline: none;
  box-shadow: 0 0 7px #11a49a;
}

/* Fecha regreso */
#returnDateContainer {
  margin-bottom: 24px;
}

/* Checkbox grupo */
.checkbox-group {
  display: flex;
  justify-content: center;
  gap: 36px;
  font-weight: 600;
  font-size: 0.88rem;
  margin-bottom: 30px;
  user-select: none;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* Botones temáticos */
.button-group {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 36px;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.btn-feature {
  flex: 0 0 auto;
  background: white;
  border-radius: 18px;
  padding: 14px 20px;
  min-width: 140px;
  max-width: 140px;
  color: #11a49a;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  border: 2.5px solid transparent;
  box-shadow: 0 6px 14px rgb(0 0 0 / 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn-feature i {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.btn-feature:hover,
.btn-feature:focus {
  outline: none;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.15);
  border-color: #07776a;
  transform: translateY(-5px);
}

/* Botón submit */
.btn-submit {
  background: linear-gradient(90deg, #11a49a 60%, #00c6ff 100%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 14px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 470px;
  display: block;
  margin: 0 auto;
  box-shadow: 0 6px 12px rgb(0 196 255 / 0.4);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.btn-submit:disabled {
  background: #99c9c7;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-submit:hover:not(:disabled),
.btn-submit:focus:not(:disabled) {
  background: linear-gradient(90deg, #008375 60%, #0099cc 100%);
  box-shadow: 0 8px 18px rgb(0 147 204 / 0.6);
  outline: none;
}

/* Error */
.error-message {
  font-size: 0.7rem;
  color: #e74c3c;
  min-height: 1.1em;
  margin-top: 3px;
}

/* Modal común */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 0.48);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}

.modal[style*="display:none"] {
  display: none !important;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 24px 28px;
  max-width: 400px;
  width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
}

.modal-content h2 {
  margin-top: 0;
  margin-bottom: 16px;
  color: #11a49a;
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
}

.modal-content button[aria-label="Cerrar modal"] {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: transparent;
  font-size: 1.4rem;
  font-weight: 700;
  color: #11a49a;
  cursor: pointer;
}

.modal-content button[aria-label="Cerrar modal"]:hover,
.modal-content button[aria-label="Cerrar modal"]:focus {
  color: #007766;
  outline: none;
}

/* Listado aeropuertos */
#airport-list {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 320px;
  overflow-y: auto;
}

#airport-list li button {
  width: 100%;
  padding: 10px 14px;
  text-align: left;
  background: #e6f7f6;
  border: none;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  font-weight: 600;
  color: #0b5653;
  transition: background 0.3s ease;
}

#airport-list li button:hover,
#airport-list li button:focus {
  background: #11a49a;
  color: white;
  outline: none;
}

/* Resultado de cotización seguro */
#insurance-quote-result {
  font-size: 1rem;
  color: #007766;
  text-align: center;
}
