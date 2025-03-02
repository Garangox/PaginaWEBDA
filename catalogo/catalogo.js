let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";

    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }

    let lista = document.createElement("ul");
    let total = 0;

    carrito.forEach((producto, index) => {
        let item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.style.marginLeft = "10px";
        botonEliminar.addEventListener("click", () => eliminarProducto(index));

        item.appendChild(botonEliminar);
        lista.appendChild(item);
        total += producto.precio;
    });

    carritoContainer.appendChild(lista);

    let totalElement = document.createElement("p");
    totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    carritoContainer.appendChild(totalElement);
}

function eliminarProducto(index) {
    carrito.splice(index, 1); 
    actualizarCarrito(); 
}

function enviarWhatsApp() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let numero = "1234567890";
    let mensaje = "*Pedido de Productos:*\n\n";

    let total = 0;

    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
        total += producto.precio;
    });

    mensaje += `\n*Total a pagar: $${total.toFixed(2)}*`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".agregar-carrito").forEach(boton => {
        boton.addEventListener("click", () => {
            let nombre = boton.dataset.nombre;
            let precio = parseFloat(boton.dataset.precio);
            agregarAlCarrito(nombre, precio);
        });
    });

    document.getElementById("enviar-whatsapp").addEventListener("click", enviarWhatsApp);
});
