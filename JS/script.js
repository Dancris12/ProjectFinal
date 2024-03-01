$(document).ready(function () {
  $(".btn").click(function () {
    $(".items").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});

// Validación de caracteres especiales

var nombresInput = document.getElementById("validationTooltip01");
var apellidosInput = document.getElementById("validationTooltip02");


nombresInput.addEventListener("input", restrictInput);
apellidosInput.addEventListener("input", restrictInput);

function restrictInput(event) {
  var input = event.target;
  var inputValue = input.value;

  var limpiarValor = inputValue.replace(/[^A-Za-z]/g, "");

  if (inputValue !== limpiarValor) {
    input.value = limpiarValor;
  }
}

// Validar correo
document.addEventListener("DOMContentLoaded", function () {
  var emailInput = document.getElementById("validationTooltipUsername");
  var emailTooltip = document.querySelector(".invalid-tooltip");

  emailInput.addEventListener("input", function () {
    var email = emailInput.value.trim();
    var isValid = validarEmail(email);

    if (isValid) {
      emailInput.classList.remove("is-invalid");
      emailTooltip.style.display = "none";
    } else {
      emailInput.classList.add("is-invalid");
      emailTooltip.style.display = "block";
    }
  });

  function validarEmail(email) {
    var valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return valEmail.test(email);
  }
});
