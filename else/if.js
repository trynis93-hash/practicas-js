function validaringreso() {
  const edad = parseInt(document.getElementById("edad").value);
  const tienecuenta = document.getElementById("cuentaactiva").checked;
  const esbaneado = document.getElementById("baneado").checked;
  const visor = document.getElementById("mensaje");

  if (isNaN(edad)) {
    visor.innerText = "por favor, ingresa una edad valido";
    visor.style.color = "orange";
    return;
  }

  if (edad >= 18 && tienecuenta && !esbaneado) {
    visor.innerText = "acceso concedido: bienvenido al portal bienestar";
    visor.style.color = "green";
  } else if (edad < 18) {
    visor.innerText = "acceso denegado: debes ser mayor de edad para ingresar";
    visor.style.color = "red";
  } else if (esbaneado) {
    visor.innerText = "acceso denegado: tu cuenta ha sido baneada";
    visor.style.color = "darkred";
  } else {
    visor.innerText =
      "acceso denegado: debes tener una cuenta activa para ingresar";
    visor.style.color = "red";
  }
}
