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
