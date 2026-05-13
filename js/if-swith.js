function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;
  const cajaResultado = document.getElementById("resultado");
  if (isNaN(n1) || isNaN(n2)) {
    cajaResultado.innerText = "Por favor, ingrese ambos numeros.";
    return;
  }
  let resultado = 0;
  switch (operacion) {
    case "suma":
      resultado = n1 + n2;
      break;
    case "resta":
      resultado = n1 - n2;
      break;
    case "multiplicacion":
      resultado = n1 * n2;
      break;
    case "division":
      if (n2 === 0) {
        resultado = "no se puede dividir por cero";
      } else {
        resultado = n1 / n2;
      }
      break;
    default:
      resultado = "Operacion no valida";
  }
  cajaResultado.innerText = resultado;
}

const historial = [];

function calcularpro() {
  const n1 = parseFloat(document.getElementById("pro-num1").value);
  const n2 = parseFloat(document.getElementById("pro-num2").value);
  const operacion = document.getElementById("pro-operacion").value;
  const cajaResultado = document.getElementById("pro-resultado");
  const cajaHistorial = document.getElementById("historial");
  const solounnumero = operacion === "raiz";
  if (isNaN(n1) || (!solounnumero && isNaN(n2))) {
    mostrarerror(
      cajaResultado,
      solounnumero
        ? "Por favor, ingrese un numero."
        : "Por favor, ingrese ambos numeros.",
    );
    return;
  }
  let resultado;
  let expresion;
  switch (operacion) {
    case "suma":
      resultado = n1 + n2;
      expresion = `${n1} + ${n2}`;
      break;
    case "resta":
      resultado = n1 - n2;
      expresion = `${n1} - ${n2}`;
      break;
    case "multiplicacion":
      resultado = n1 * n2;
      expresion = `${n1} * ${n2}`;
      break;
    case "division":
      if (n2 === 0) {
        mostrarerror(cajaResultado, "No se puede dividir por cero.");
        return;
      }
      resultado = n1 / n2;
      expresion = `${n1} / ${n2}`;
      break;
    case "potencia":
      resultado = Math.pow(n1, n2);
      expresion = `${n1} ^ ${n2}`;
      break;
    case "modulo":
      if (n2 === 0) {
        mostrarerror(cajaResultado, "No se puede calcular el modulo por cero.");
        return;
      }
      resultado = n1 % n2;
      expresion = `${n1} % ${n2}`;
      break;
    case "raiz":
      if (n1 < 0) {
        mostrarerror(
          cajaResultado,
          "No se puede calcular la raiz de un numero negativo.",
        );
        return;
      }
      resultado = Math.sqrt(n1);
      expresion = `√${n1}`;
      break;
    default:
      mostrarerror(cajaResultado, "Operacion no valida.");
      return;
  }
  resultado = parseFloat(parseFloat(resultado).toPrecision(12));
  cajaResultado.className = "pro-resultado-ok";
  cajaResultado.innerText = resultado;
  historial.unshift(`${expresion} = ${resultado}`);
  if (historial.length > 5) {
    historial.pop();
    cajaHistorial.innerHTML = historial
      .map((entry, i) => `<li class="${entry}</li>`)
      .join("");
  }
  function mostrarerror(caja, mensaje) {
    caja.className = "pro-resultado-error";
    caja.innerText = mensaje;
  }
  document.addEventListener("DOMContentLoaded", () => {
    ["pro-num1", "pro-num2"].forEach((id) => {
      const el = document.getElementById(id);
      if (el)
        el.addEventListener(
          "keydown",
          (e) => e.key === "enter" && calcularpro(),
        );
    });
  });
}
