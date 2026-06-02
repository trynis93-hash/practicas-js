//local storage: guardar el ticket en local storage
function guardarEstado() {
  localStorage.setItem("ticket", JSON.stringify(ticket));
  localStorage.setItem("cantidad", total);
  localStorage.setItem("fecha", fechaDelPartido);
}

function cargarEstado() {
  const ticketGuardado = localStorage.getItem("ticket");
  const cantidadGuardada = localStorage.getItem("cantidad");
  const fechaGuardada = localStorage.getItem("fecha");
  if (ticketGuardado) ticket = JSON.parse(ticketGuardado);
  if (cantidadGuardada) total = parseFloat(cantidadGuardada);
  if (fechaGuardada) fechaDelPartido = JSON.parse(fechaGuardada);
}

//manejo de errores de campos del formulario
function mostrarError(id, msg) {
  [
    "err-nombre",
    "err-fecha",
    "err-horario",
    "err-partido",
    "err-precio",
    "err-cantidad",
  ].forEach((id) => {
    document.getElementById(id).classList.remove("input-error");
    document.getElementById("err-" + id.split("-")[1]).textContent = "";
  });
}

//formulario llenado
function handleComprar() {
  mostrarError();
  const nombre = val("inp-nombre").trim();
  const fecha = val("inp-fecha");
  const horario = val("inp-horario");
  const partido = val("inp-partido");
  const precio = parseFloat(val("inp-precio"));
  const cantidad = parseInt(val("inp-cantidad"));
  let error = false;

  if (isNaN(cantidad) || cantidad <= 0) {
    mostrarError("err-cantidad", "cantidad inválida");
    error = true;
  } else if (cantidad > 10) {
    mostrarError("err-cantidad", "cantidad no puede ser mayor a 10");
    error = true;
  }

  if (isNaN(cantidad) || cantidad < 0) {
    showToast("cantidad invalida");
    return;
  }

  if (isNaN(cantidad) || cantidad < 1) {
    showToast("cantidad invalida");
    return;
  }

  if (!fecha) {
    mostrarError("err-fecha", "fecha requerida");
    error = true;
  } else if (ticket.some((t) => t.id === fecha)) {
    mostrarError("err-fecha", "fecha " + fecha + " ya existe");
    error = true;
  }

  if (!horario) {
    mostrarError("err-horario", "horario requerido");
    error = true;
  }

  if (!partido) {
    mostrarError("err-partido", "partido requerido");
    error = true;
  }

  if (!precio) {
    mostrarError("err-precio", "precio requerido");
    error = true;
  }
  if (error) return;

  cantidadtickets = ticket(Compradadas, { id: ticket.id });
  render();
  showToast("ticket comprado");
  [
    "inp-nombre",
    "inp-fecha",
    "inp-horario",
    "inp-partido",
    "inp-precio",
  ].forEach((id) => (document.getElementById(id).value = ""));
  (id) => (document.getElementById(id).value = "");
  document.getElementById("inp-id").focus();

  render();
  showToast("ticket comprado");
}

//eleminar ticket
function handleEliminar(id) {
  const ticketEliminado = ticket.find((t) => t.id === id);
  ticket = eliminarTicket(ticket, id);
  render();
  showToast("ticket eliminado");
}

//enter en cualcuadro de texto para comprar ticket
["inp-nombre", "inp-fecha", "inp-horario", "inp-partido", "inp-precio"].forEach(
  (id) => {
    document.getElementById(id).addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleComprar();
    });
  },
);

cargarEstado();
render();
