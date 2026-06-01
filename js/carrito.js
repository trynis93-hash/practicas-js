//?utilidad: formatea un numero al estilo latino
function fmt(num) {
  return num.toLocaleString("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

//?localstorage: guarda y carga el estado
function guardarEstado() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("descuentoactual", descuentoactual);
}

function cargarEstado() {
  const carritoGuardado = localStorage.getItem("carrito");
  const descuentoGuardado = localStorage.getItem("descuentoactual");
  if (carritoGuardado) carrito = JSON.parse(carritoGuardado);
  if (descuentoGuardado) descuentoactual = parseFloat(descuentoGuardado);
}

//?utilidad. crea un elemento con clase y texto opcional//
function crear(tag, clase, texto) {
  const el = document.createElement(tag);
  if (clase) el.className = clase;
  if (texto !== undefined) el.textContent = texto;
  return el;
}

//?utilidad: obtiene el valor de un input por su id//
const val = (id) => document.getElementById(id).value;

//?funciones del carrito//
const agregarproducto = (carrito, producto) => [...carrito, producto];
const eliminarproducto = (carrito, id) => carrito.filter((p) => p.id !== id);
const calculartotal = (carrito) =>
  carrito.reduce((t, p) => t + p.precio * p.cantidad, 0);
const aplicardescuento = (carrito, pct) =>
  calculartotal(carrito) * (1 - pct / 100);

//?estado//
let carrito = [];
let descuentoactual = 0;

//?toast (notiicacion flotante)//
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

//*render: dibuja el carrito y actualiza los totales
function render() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";

  if (carrito.length === 0) {
    list.appendChild(crear("li", "empty-msg", "el carrito esta vacio"));
  } else {
    carrito.forEach((p) => {
      const divinfo = crear("div", "item-info");
      divinfo.appendChild(crear("div", "item-name", p.nombre));
      divinfo.appendChild(
        crear("div", "item-detail", "$" + fmt(p.precio) + "x" + p.cantidad),
      );
      const btnEliminar = crear("button", "btn-remove", "x");
      btnEliminar.title = "eliminar";
      btnEliminar.addEventListener("click", () => handleEliminar(p.id));
      const li = crear("li", "cart-item");
      li.appendChild(crear("span", "item-id", p.id));
      li.appendChild(divinfo);
      li.appendChild(
        crear("span", "item-subtotal", "$" + fmt(p.precio * p.cantidad)),
      );
      li.appendChild(btnEliminar);
      list.appendChild(li);
    });
  }

  //*actualizar totales en el resumen
  const subtotal = calculartotal(carrito);
  const total =
    descuentoactual > 0 ? aplicardescuento(carrito, descuentoactual) : subtotal;

  const ahorro = parseFloat((subtotal - total).toFixed(2));
  document.getElementById("lbl-subtotal").textContent = "$" + fmt(subtotal);
  document.getElementById("lbl-total").textContent = "$" + fmt(total);

  const rowsavings = document.getElementById("row-savings");
  rowsavings.style.display =
    descuentoactual > 0 && ahorro > 0 ? "flex" : "none";
  document.getElementById("lbl-savings-label").textContent =
    "descuento(" + descuentoactual + "%)";
  document.getElementById("lbl-savings").textContent = "-$" + fmt(ahorro);

  guardarEstado();
}

//?manejo de errores en campos//

function mostrarerror(inputid, errid, msg) {
  document.getElementById(inputid).classList.add("input-error");
  document.getElementById(errid).textContent = msg;
}

function limpiarerrores() {
  ["inp-id", "inp-nombre"].forEach((id) => {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById("err-" + id.split("-")[1]).textContent = "";
  });
}

//* agregar producto
function handleAgregar() {
  limpiarerrores();
  const idval = parseInt(val("inp-id"));
  const nombre = val("inp-nombre").trim();
  const precio = parseFloat(val("inp-precio"));
  const cantidad = parseInt(val("inp-cantidad"));
  let error = false;

  if (isNaN(idval) || idval < 1) {
    mostrarerror("inp-id", "err-id", "ID requerido(numero mayor a 0)");
    error = true;
  } else if (carrito.some((p) => p.id === idval)) {
    mostrarerror("inp-id", "err-id", "ID " + idval + " ya existe");
    error = true;
  }

  if (!nombre) {
    mostrarerror("inp-nombre", "err-nombre", "nombre requerido");
    error = true;
  } else if (
    carrito.some((p) => p.nombre.toLowerCase() === nombre.toLowerCase())
  ) {
    mostrarerror("inp-nombre", "err-nombre", "" + nombre + "ya existe");
    error = true;
  }

  if (isNaN(precio) || precio < 0) {
    showToast("precio invalido");
    return;
  }
  if (isNaN(cantidad) || cantidad < 1) {
    showToast("cantidad invalida");
    return;
  }
  if (error) return;

  carrito = agregarproducto(carrito, { id: idval, nombre, precio, cantidad });
  render();
  showToast(" " + nombre + "agregado");
  ["inp-id", "inp-nombre", "inp-precio", "inp-cantidad"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("inp-id").focus();
}

//*eleminar producto//
function handleEliminar(id) {
  const prod = carrito.find((p) => p.id === id);
  carrito = eliminarproducto(carrito, id);
  render();
  if (prod) showToast("" + prod.nombre + "eliminado");
}

//?aplicar descuento//
function handleDescuento() {
  const pct = parseFloat(val("inp-descuento"));
  if (isNaN(pct) || pct < 0 || pct > 100) {
    showToast("porcentaje entre 0 y 100");
    return;
  }
  descuentoactual = pct;
  render();
  showToast(
    pct > 0 ? "descuento del " + pct + "%aplicado" : "descuento eleminado",
  );
}

//*enter en cualquier campo del formulario -> agregar//
["inp-id", "inp-nombre", "inp-precio", "inp-cantidad"].forEach((id) => {
  document.getElementById(id).addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleAgregar();
  });
});

cargarEstado();
render();
