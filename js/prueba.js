const prueba = "expresion";
console.log(prueba);

document.getElementById("prueba").innerHTML = prueba;
console.log(prueba);

const dos = "segunda";
console.log(dos);

document.querySelector(".dos").innerHTML = dos;
console.log(dos);

const boton = document.querySelector("[data-estado]");
boton.addEventListener("click", () => {
  boton.dataset.estado = "activado";
  boton.textContent = "activado";
});

const sw = document.getElementById("interruptor");
sw.addEventListener("click", () => {
  const estacheckeado = sw.getAttribute("aria-checked") === "true";
  sw.setAttribute("aria-checked", !estacheckeado);
  document.body.classList.toggle("dark-mode");
});

const editor = document.getElementById("nota-rapida");
editor.addEventListener("input", () => {
  console.log("contenido actual:", editor.textContent);
});
