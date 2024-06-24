(function () {
  var formulario = document.getElementsByName("formulario")[0];

  var validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
      alert("Completa el campo nombre");
      e.preventDefault();
    } else {
      if (formulario.nombre.value.length > 12) {
        alert("Nombre extenso");
        e.preventDefault();
      }
    }
  };

  var validar = function (e) {
    validarNombre(e);
  };
  formulario.addEventListener("submit", validar);
})();

const form = document.querySelector("form");
const span_cb = document.getElementById("cb_validation");

form.addEventListener("submit", (e) => {
  const cb = document.querySelectorAll("label input:checked");
  if (cb.length < 2) {
    span_cb.innerHTML = `Se requiere un mínimo de 2 elementos, has elegido ${cb.length}`;
    e.preventDefault();
  }
});
