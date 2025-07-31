document.addEventListener("DOMContentLoaded", function () {
  const alojamientoCheckbox = document.getElementById("alojamiento");
  const fechaVueltaInput = document.getElementById("fecha-vuelta");
  const seguroCheckbox = document.getElementById("seguro");
  const formularioSeguro = document.getElementById("formulario-seguro");
  const categorias = document.querySelectorAll(".categoria");

  alojamientoCheckbox.addEventListener("change", function () {
    fechaVueltaInput.style.display = this.checked ? "inline-block" : "none";
  });

  seguroCheckbox.addEventListener("change", function () {
    formularioSeguro.style.display = this.checked ? "block" : "none";
  });

  categorias.forEach((btn) => {
    btn.addEventListener("click", function () {
      categorias.forEach((el) => el.classList.remove("seleccionada"));
      this.classList.add("seleccionada");
    });
  });

  document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Aquí se podría implementar la lógica para enviar la búsqueda
    alert("Búsqueda enviada correctamente");
  });
});
