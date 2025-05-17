let tbody;

document.addEventListener("DOMContentLoaded", () => {
  tbody = document.getElementById("tabla-gastos").getElementsByTagName('tbody')[0];
  const contenedorGasto = document.querySelector(".contenedor-gasto");
  const mensajeDiv = document.createElement("div");
  mensajeDiv.id = "mensaje";
  contenedorGasto.appendChild(mensajeDiv);

  cargarGastosDesdeAlmacenamiento();
  actualizarTotal();
});

// Validación de los campos del formulario
function calcular() {
  const descripcion = document.getElementById("descripcion").value.trim();
  const monto = parseFloat(document.getElementById("monto").value);
  const categoria = document.getElementById("categoria").value;
  const mensaje = document.getElementById("mensaje");

  if (!descripcion || isNaN(monto) || !categoria) {
    // Muestra mensaje de error en rojo si falta algún dato
    mensaje.style.width = "300px";
    mensaje.style.padding = "10px";
    mensaje.style.color = "red";
    mensaje.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
    mensaje.textContent = "Error : Completa todos los campos";
    return;
  }

  const gasto = { descripcion, monto, categoria };
  agregarGastoATabla(gasto);
  guardarGastoEnAlmacenamiento(gasto);
  // Muestra mensaje de éxito en verde
  mensaje.style.width = "300px";
  mensaje.style.padding = "10px";
  mensaje.style.color = "green";
  mensaje.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
  mensaje.textContent = `Se agregado $${monto.toFixed(2)} en ${categoria}`;

  document.getElementById("formulario-gasto").reset();
  actualizarTotal();
}

// Función para agregar un gasto a la tabla
function agregarGastoATabla(gasto) {
  const fila = tbody.insertRow();
  // Celda editable para descripción
  const celdaDescripcion = fila.insertCell();
  celdaDescripcion.contentEditable = true;
  celdaDescripcion.textContent = gasto.descripcion;
  celdaDescripcion.addEventListener("input", actualizarAlmacenamiento);
  // Celda editable para monto
  const celdaMonto = fila.insertCell();
  celdaMonto.contentEditable = true;
  celdaMonto.textContent = gasto.monto.toFixed(2);
  celdaMonto.addEventListener("input", () => {
    actualizarTotal();
    actualizarAlmacenamiento();
  });
  // Celda editable para categoría
  const celdaCategoria = fila.insertCell();
  celdaCategoria.contentEditable = true;
  celdaCategoria.textContent = gasto.categoria;
  celdaCategoria.addEventListener("input", actualizarAlmacenamiento);
  // Celda para eliminar un gasto
  const celdaEliminar = fila.insertCell();
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => {
    fila.remove();
    actualizarTotal();
    actualizarAlmacenamiento();
  });
  celdaEliminar.appendChild(botonEliminar);
}

// Función para actualizar el total de gastos sumando los montos
function actualizarTotal() {
  let total = 0;
  for (let i = 0; i < tbody.rows.length; i++) {
    const monto = parseFloat(tbody.rows[i].cells[1].textContent);
    if (!isNaN(monto)) total += monto;
  }
  console.log("Total gastos: $" + total.toFixed(2));
}

// Función para guardar el gasto en el almacenamiento local
function guardarGastoEnAlmacenamiento(gasto) {
  const gastos = JSON.parse(localStorage.getItem("gastos")) || [];
  gastos.push(gasto);
  localStorage.setItem("gastos", JSON.stringify(gastos));
}

// Función para cargar los gastos desde el almacenamiento local al cargar la página
function cargarGastosDesdeAlmacenamiento() {
  const gastos = JSON.parse(localStorage.getItem("gastos")) || [];
  gastos.forEach(gasto => agregarGastoATabla(gasto));
}

// Función para actualizar el almacenamiento local al editar o eliminar un gasto
function actualizarAlmacenamiento() {
  const nuevosGastos = [];
  for (let i = 0; i < tbody.rows.length; i++) {
    const fila = tbody.rows[i];
    const descripcion = fila.cells[0].textContent.trim();
    const monto = parseFloat(fila.cells[1].textContent);
    const categoria = fila.cells[2].textContent.trim();

    if (descripcion && !isNaN(monto) && categoria) {
      nuevosGastos.push({ descripcion, monto, categoria });
    }
  }
  localStorage.setItem("gastos", JSON.stringify(nuevosGastos));
}