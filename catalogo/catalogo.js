let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".agregar-carrito").forEach((boton) => {
    boton.addEventListener("click", () => {
      let nombre = boton.parentElement.dataset.nombre;
      agregarAlCarrito(nombre);
    });
  });

  document.getElementById("toggle-carrito").addEventListener("click", () => {
    document.getElementById("carrito-container").classList.toggle("oculto");
  });

  document
    .getElementById("enviar-whatsapp")
    .addEventListener("click", enviarWhatsApp);
});

function agregarAlCarrito(nombre) {
  let productoEnCarrito = carrito.find((item) => item.nombre === nombre);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({ nombre, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  let listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";

  carrito.forEach((producto, index) => {
    let item = document.createElement("li");
    item.innerHTML = `${producto.nombre} (x${producto.cantidad}) `;

    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "<span class='icon-delete'>&#128465;</span>";
    botonEliminar.classList.add("eliminar-producto");
    botonEliminar.addEventListener("click", () => eliminarProducto(index));

    item.appendChild(botonEliminar);
    listaCarrito.appendChild(item);
  });
}

function eliminarProducto(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  } else {
    carrito.splice(index, 1);
  }
  actualizarCarrito();
}

function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;

  if (!nombre || !direccion || !telefono) {
    alert("Por favor, complete todos los campos");
    return;
  }

  let numero = "1234567890";
  let mensaje = `*Pedido de Productos:*

`;

  carrito.forEach((producto) => {
    mensaje += `${producto.nombre} (x${producto.cantidad})\n`;
  });

  mensaje += `\n\n*Cliente:* ${nombre}\n📍 Dirección: ${direccion}\n📞 Teléfono: ${telefono}`;

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

function irAlCarrito() {
  document
    .getElementById("carrito-container")
    .scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  ordenarProductos();
});

function ordenarProductos() {
  let contenedor = document.getElementById("productos-container");
  let productos = Array.from(contenedor.getElementsByClassName("producto"));

  productos.sort((a, b) => {
    let nombreA = a.dataset.nombre.toLowerCase();
    let nombreB = b.dataset.nombre.toLowerCase();
    return nombreA.localeCompare(nombreB);
  });

  productos.forEach((producto) => contenedor.appendChild(producto));
}
