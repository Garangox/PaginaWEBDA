document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { codigo: "1010101", nombre: "Saldos Anteriores", imagen: "imagenes/default.jpg" },
    { codigo: "10001", nombre: "AGUA AQUARELLA BIDON 8 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10002", nombre: "SAVILOE 320", imagen: "imagenes/default.jpg" },
    { codigo: "10003", nombre: "SAVILOE 420", imagen: "imagenes/default.jpg" },
    { codigo: "10004", nombre: "MR TEA VIDRIO 300", imagen: "imagenes/default.jpg" },
    { codigo: "10005", nombre: "SODA BRETAÑA 300", imagen: "imagenes/default.jpg" },
    { codigo: "10006", nombre: "JUGO HIT 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10007", nombre: "JUGO HIT 200", imagen: "imagenes/default.jpg" },
    { codigo: "10008", nombre: "JUGO HIT 500", imagen: "imagenes/default.jpg" },
    { codigo: "10009", nombre: "JUGO HIT 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10010", nombre: "VIVECIEN 240", imagen: "imagenes/default.jpg" },
    { codigo: "10011", nombre: "VIVECIEN 380", imagen: "imagenes/default.jpg" },
    { codigo: "10012", nombre: "VIVECIEN 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10013", nombre: "LIKE", imagen: "imagenes/default.jpg" },
    { codigo: "10014", nombre: "SAVILOE 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10015", nombre: "AMPER 473", imagen: "imagenes/default.jpg" },
    { codigo: "10016", nombre: "VIVECIEN LATON 473", imagen: "imagenes/default.jpg" },
    { codigo: "10017", nombre: "VIVECIEN LATA 269", imagen: "imagenes/default.jpg" },
    { codigo: "10018", nombre: "SPARTAN SIX PACK", imagen: "imagenes/default.jpg" },
    { codigo: "10019", nombre: "GATORADE", imagen: "imagenes/default.jpg" },
    { codigo: "10020", nombre: "SABIFRUT 320", imagen: "imagenes/default.jpg" },
    { codigo: "10021", nombre: "AGUA POOL TAPA PLANA 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10022", nombre: "AGUA POOL TAPA DEPORTIVA 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10023", nombre: "AGUA POOL 600", imagen: "imagenes/default.jpg" },
    { codigo: "10024", nombre: "AGUA POOL 300", imagen: "imagenes/default.jpg" },
    { codigo: "10025", nombre: "AGUA CRISTAL 300", imagen: "imagenes/default.jpg" },
    { codigo: "10026", nombre: "AGUA CRISTAL 600", imagen: "imagenes/default.jpg" },
    { codigo: "10027", nombre: "AGUA CRISTAL 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10028", nombre: "COCA COLA 2.25 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10029", nombre: "GASEOSA POSTOBON 400", imagen: "imagenes/default.jpg" },
    { codigo: "10030", nombre: "GASEOSA POSTOBON 250", imagen: "imagenes/default.jpg" },
    { codigo: "10031", nombre: "COCA COLA 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10032", nombre: "SPEED MAX 250", imagen: "imagenes/default.jpg" },
    { codigo: "10033", nombre: "AGUA H2O 250", imagen: "imagenes/default.jpg" },
    { codigo: "10034", nombre: "AGUA H2O 600", imagen: "imagenes/default.jpg" },
    { codigo: "10035", nombre: "DEL VALLE 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10036", nombre: "GASEOSA PREMIO 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10037", nombre: "GASEOSA PREMIO 3 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10038", nombre: "GASEOSA PREMIO 400", imagen: "imagenes/default.jpg" },
    { codigo: "10039", nombre: "GASEOSA QUATRO 400", imagen: "imagenes/default.jpg" },
    { codigo: "10040", nombre: "GASEOSA QUATRO 3 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10041", nombre: "GASEOSA QUATRO 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10042", nombre: "JUGO CIFRUT 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10043", nombre: "AGUA BRISA MANZANA 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10044", nombre: "GASEOSA SPRITE 400", imagen: "imagenes/default.jpg" },
    { codigo: "10045", nombre: "GASEOSA SPRITE 1.5", imagen: "imagenes/default.jpg" },
    { codigo: "10046", nombre: "GASEOSA SPRITE 3 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10047", nombre: "SODA BRETAÑA 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10048", nombre: "GASEOSA POOL 400", imagen: "imagenes/default.jpg" },
    { codigo: "10049", nombre: "DEL VALLE 400", imagen: "imagenes/default.jpg" },
    { codigo: "10050", nombre: "PONY MALTA 200", imagen: "imagenes/default.jpg" },
    { codigo: "10051", nombre: "PONY MALTA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10052", nombre: "PONY MALTA 1 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10053", nombre: "SODA POOL 400", imagen: "imagenes/default.jpg" },
    { codigo: "10054", nombre: "PONY MALTA 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10055", nombre: "PONY MALTA 2 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10056", nombre: "MR TEA 500", imagen: "imagenes/default.jpg" },
    { codigo: "10057", nombre: "DEL VALLE 500", imagen: "imagenes/default.jpg" },
    { codigo: "10058", nombre: "ELECTROLI", imagen: "imagenes/default.jpg" },
    { codigo: "10059", nombre: "COLA Y POLA SIX PACK", imagen: "imagenes/default.jpg" },
    { codigo: "10060", nombre: "CORONITA 210", imagen: "imagenes/default.jpg" },
    { codigo: "10061", nombre: "CORONA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10062", nombre: "PILSEN LATA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10063", nombre: "PILSEN LATON 473", imagen: "imagenes/default.jpg" },
    { codigo: "10064", nombre: "AGUILA LATA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10065", nombre: "AGUILA LATON 473", imagen: "imagenes/default.jpg" },
    { codigo: "10066", nombre: "POKER LATA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10067", nombre: "CLUB COLOMBIA LATA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10068", nombre: "AGUILA LIGHT LATA 330", imagen: "imagenes/default.jpg" },
    { codigo: "10069", nombre: "AGUILA LIGHT LATON 473", imagen: "imagenes/default.jpg" },
    { codigo: "10070", nombre: "AGUA CRISTAL CON GAS 600", imagen: "imagenes/default.jpg" },
    { codigo: "10071", nombre: "GASEOSA POOL 250", imagen: "imagenes/default.jpg" },
    { codigo: "10072", nombre: "AGUA BRISA MANZANA 600", imagen: "imagenes/default.jpg" },
    { codigo: "10073", nombre: "AGUA BRISA MANZANA 280", imagen: "imagenes/default.jpg" },
    { codigo: "10074", nombre: "AGUA BRISA MARACUYA 600", imagen: "imagenes/default.jpg" },
    { codigo: "10075", nombre: "AGUA BRISA LIMON 280", imagen: "imagenes/default.jpg" },
    { codigo: "10076", nombre: "AGUA BRISA LIMON 600", imagen: "imagenes/default.jpg" },
    { codigo: "10077", nombre: "AGUA BRISA MARACUYA 280", imagen: "imagenes/default.jpg" },
    { codigo: "10078", nombre: "COCA COLA 250", imagen: "imagenes/default.jpg" },
    { codigo: "10079", nombre: "COCA COLA ZERO 250", imagen: "imagenes/default.jpg" },
    { codigo: "10080", nombre: "COCA COLA 400", imagen: "imagenes/default.jpg" },
    { codigo: "10081", nombre: "COCA COLA ZERO 400", imagen: "imagenes/default.jpg" },
    { codigo: "10082", nombre: "COCA COLA ZERO 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10083", nombre: "COCA COLA ZERO 2.25 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10084", nombre: "COCA COLA 3 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10085", nombre: "COCA COLA LATA 235", imagen: "imagenes/default.jpg" },
    { codigo: "10086", nombre: "JUGO CIFRUT 250", imagen: "imagenes/default.jpg" },
    { codigo: "10087", nombre: "JUGO CIFRUT 400", imagen: "imagenes/default.jpg" },
    { codigo: "10088", nombre: "GASEOSA QUATRO 250", imagen: "imagenes/default.jpg" },
    { codigo: "10089", nombre: "MONSTER 473", imagen: "imagenes/default.jpg" },
    { codigo: "10090", nombre: "JUGO POOL TETRA 250", imagen: "imagenes/default.jpg" },
    { codigo: "10091", nombre: "GASEOSA POOL 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10092", nombre: "GASEOSA POOL 1.7 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10093", nombre: "GASEOSA POOL 3 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10094", nombre: "GASEOSA POSTOBON 3 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10095", nombre: "GASEOSA POSTOBON 2.25 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10096", nombre: "GASEOSA POSTOBON 1.5 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10097", nombre: "AGUA AQUARELLA BOLSA", imagen: "imagenes/default.jpg" },
    { codigo: "10098", nombre: "AGUA SULTANA 28", imagen: "imagenes/default.jpg" },
    { codigo: "10099", nombre: "BOLIS", imagen: "imagenes/default.jpg" },
    { codigo: "10100", nombre: "POPETAS", imagen: "imagenes/default.jpg" },
    { codigo: "10101", nombre: "AGUA AQUARELLA BOTELLON", imagen: "imagenes/default.jpg" },
    { codigo: "10102", nombre: "AGUA VATTEN BOTELLON", imagen: "imagenes/default.jpg" },
    { codigo: "10103", nombre: "PILSEN CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10104", nombre: "AGUILA CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10105", nombre: "AGUILA LIGHT CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10106", nombre: "COSTEÑITA CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10107", nombre: "PONY MALTA VIDRIO", imagen: "imagenes/default.jpg" },
    { codigo: "10108", nombre: "COLA Y POLA CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10109", nombre: "CLUB COLOMBIA CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10110", nombre: "PILSENON CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10111", nombre: "AGUILON CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10112", nombre: "AGUILON LIGHT CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10113", nombre: "POKER CAJA", imagen: "imagenes/default.jpg" },
    { codigo: "10114", nombre: "COCA COLA CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10115", nombre: "COCA COLA ZERO CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10116", nombre: "COCA COLA CAJA 8OZ", imagen: "imagenes/default.jpg" },
    { codigo: "10117", nombre: "GASEOSA QUATRO CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10118", nombre: "GASEOSA QUATRO CAJA 8OZ", imagen: "imagenes/default.jpg" },
    { codigo: "10119", nombre: "GASEOSA PREMIO CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10120", nombre: "GASEOSA PREMIO CAJA 8OZ", imagen: "imagenes/default.jpg" },
    { codigo: "10121", nombre: "GASEOSA SPRITE CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10122", nombre: "GASEOSA POSTOBON CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10123", nombre: "SODA BRETAÑA CAJA 350", imagen: "imagenes/default.jpg" },
    { codigo: "10124", nombre: "TUTI FRUTI CAJA 250", imagen: "imagenes/default.jpg" },
    { codigo: "10125", nombre: "POKER LATON 473", imagen: "imagenes/default.jpg" },
    { codigo: "10126", nombre: "AGUA POOL CON GAS", imagen: "imagenes/default.jpg" },
    { codigo: "10127", nombre: "FRUTIÑO 2 LITROS", imagen: "imagenes/default.jpg" },
    { codigo: "10128", nombre: "AGUA SABORIZADA POOL 600", imagen: "imagenes/default.jpg" },
    { codigo: "10129", nombre: "AGUA CON GAS POOL 600", imagen: "imagenes/default.jpg" },
    { codigo: "10130", nombre: "SUNTEA", imagen: "imagenes/default.jpg" },
    { codigo: "10131", nombre: "BOKA", imagen: "imagenes/default.jpg" },
    { codigo: "10132", nombre: "BONICE", imagen: "imagenes/default.jpg" },
    { codigo: "10133", nombre: "BONICE DOBLE", imagen: "imagenes/default.jpg" },
    { codigo: "10134", nombre: "COCA COLA 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10135", nombre: "SODA HATSU 300", imagen: "imagenes/default.jpg" },
    { codigo: "10136", nombre: "TEE HATSU 400", imagen: "imagenes/default.jpg" },
    { codigo: "10137", nombre: "AGUA SABORIZADA POOL 300", imagen: "imagenes/default.jpg" },
    { codigo: "10138", nombre: "AGUA MANANTIAL 600", imagen: "imagenes/default.jpg" },
    { codigo: "10139", nombre: "BUDWEISER LATA", imagen: "imagenes/default.jpg" },
    { codigo: "10140", nombre: "CANDELA ECONOMICA", imagen: "imagenes/default.jpg" },
    { codigo: "10141", nombre: "DEL VALLE 188", imagen: "imagenes/default.jpg" },
    { codigo: "10142", nombre: "DEL VALLE 2.5", imagen: "imagenes/default.jpg" },
    { codigo: "10143", nombre: "RED BULL 250", imagen: "imagenes/default.jpg" },
    { codigo: "10145", nombre: "GASEOSA KOLA ROMAN 400", imagen: "imagenes/default.jpg" },
    { codigo: "10146", nombre: "STELLA SIX PACK", imagen: "imagenes/default.jpg" },
    { codigo: "10148", nombre: "AGUA BRISA 280", imagen: "imagenes/default.jpg" },
    { codigo: "10147", nombre: "AGUA BRISA 1 LITRO", imagen: "imagenes/default.jpg" },
    { codigo: "10149", nombre: "AGUA BRISA 600", imagen: "imagenes/default.jpg" },
    { codigo: "10150", nombre: "AGUA VATTEN BOLSA", imagen: "imagenes/default.jpg" },
    { codigo: "10151", nombre: "FUZETEA 400", imagen: "imagenes/default.jpg" },
    { codigo: "10152", nombre: "POWER 500", imagen: "imagenes/default.jpg" },
    { codigo: "44548", nombre: "SODA SWEEP 400", imagen: "imagenes/default.jpg" },
    { codigo: "5452456", nombre: "AGUA BRISA BIDON", imagen: "imagenes/default.jpg" },
    { codigo: "54328", nombre: "AQUA POSTOBON 400", imagen: "imagenes/default.jpg" },
    { codigo: "3655", nombre: "BIDON AQUARELA 5 LITROS ", imagen: "imagenes/default.jpg" }
]
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
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
