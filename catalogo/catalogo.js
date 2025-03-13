document.addEventListener("DOMContentLoaded", () => {
  const productos = [
      { codigo: "001", nombre: "Coca-Cola", imagen: "imagenes/coca.jpg" },
      { codigo: "002", nombre: "Fanta", imagen: "imagenes/fanta.jpg" },
      { codigo: "003", nombre: "Pepsi", imagen: "imagenes/pepsi.jpg" },
      { codigo: "004", nombre: "Sprite", imagen: "imagenes/sprite.jpg" },
      { codigo: "005", nombre: "Manzanita Sol", imagen: "imagenes/manzanita.jpg" },
      { codigo: "006", nombre: "Peñafiel", imagen: "imagenes/penafiel.jpg" },
      { codigo: "007", nombre: "Squirt", imagen: "imagenes/squirt.jpg" },
      { codigo: "008", nombre: "Topo Chico", imagen: "imagenes/topo-chico.jpg" },
      { codigo: "009", nombre: "Fresca", imagen: "imagenes/fresca.jpg" },
      { codigo: "010", nombre: "Vive 100", imagen: "imagenes/vive100.jpg" }
  ];
  
  const contenedorProductos = document.getElementById("productos-container");
  productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.dataset.codigo = producto.codigo;
      div.dataset.nombre = producto.nombre;
      div.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <input type="text" class="nota-producto" placeholder="Nota opcional">
          <button class="agregar-carrito">Agregar</button>
      `;
      contenedorProductos.appendChild(div);
  });
  
  let carrito = [];
  document.querySelectorAll(".agregar-carrito").forEach(boton => {
      boton.addEventListener("click", () => {
          let productoElemento = boton.parentElement;
          let codigo = productoElemento.dataset.codigo;
          let nombre = productoElemento.dataset.nombre;
          let nota = productoElemento.querySelector(".nota-producto").value;
          agregarAlCarrito(codigo, nombre, nota);
      });
  });

  function agregarAlCarrito(codigo, nombre, nota) {
      let productoEnCarrito = carrito.find(item => item.codigo === codigo);
      if (productoEnCarrito) {
          productoEnCarrito.cantidad++;
          productoEnCarrito.nota = nota;
      } else {
          carrito.push({ codigo, nombre, cantidad: 1, nota });
      }
      actualizarCarrito();
  }

  function actualizarCarrito() {
      let listaCarrito = document.getElementById("lista-carrito");
      listaCarrito.innerHTML = "";
      carrito.forEach((producto, index) => {
          let item = document.createElement("li");
          item.textContent = `${producto.nombre} (x${producto.cantidad})`;
          if (producto.nota) {
              item.textContent += ` - Nota: ${producto.nota}`;
          }
          let botonEliminar = document.createElement("button");
          botonEliminar.textContent = "❌";
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

  document.getElementById("enviar-whatsapp").addEventListener("click", () => {
      let nombre = document.getElementById("nombre").value;
      let direccion = document.getElementById("direccion").value;
      let telefono = document.getElementById("telefono").value;
      if (!nombre || !direccion || !telefono) {
          alert("Por favor, complete todos los campos");
          return;
      }
      let mensaje = "*Pedido de Productos:*\n\n";
      carrito.forEach((producto, index) => {
          mensaje += `${index + 1}. [${producto.codigo}] ${producto.nombre} x${producto.cantidad}`;
          if (producto.nota) {
              mensaje += ` - Nota: ${producto.nota}`;
          }
          mensaje += "\n";
      });
      mensaje += `\n*Cliente:* ${nombre}\n📍 Dirección: ${direccion}\n📞 Teléfono: ${telefono}`;
      let url = `https://wa.me/123456789?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
  });

  document.getElementById("toggle-carrito").addEventListener("click", () => {
      document.getElementById("carrito-container").classList.toggle("oculto");
  });
});
