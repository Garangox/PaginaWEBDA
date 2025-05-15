document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    {
      codigo: "1010101",
      nombre: "Saldos Anteriores",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10001",
      nombre: "AGUA AQUARELLA BIDON 8 LITROS",
      imagen: "ImagesProductos/AGUA AQUARELA BIDON 8 LITROS.jpg",
    },
    {
      codigo: "10002",
      nombre: "SAVILOE 320",
      imagen: "ImagesProductos/SAVILOE 320.webp",
    },
    {
      codigo: "10003",
      nombre: "SAVILOE 420",
      imagen: "ImagesProductos/SAVILOE 420.webp",
    },
    {
      codigo: "10004",
      nombre: "MR TEA VIDRIO 300",
      imagen: "ImagesProductos/MR-TEA-300ML.PNG",
    },
    {
      codigo: "10005",
      nombre: "SODA BRETAÑA 300",
      imagen: "ImagesProductos/SODA BRETAÑA 300.webp",
    },
    {
      codigo: "10006",
      nombre: "JUGO HIT 1 LITRO",
      imagen: "ImagesProductos/JUGO HIT 1 LITRO.webp",
    },
    {
      codigo: "10007",
      nombre: "JUGO HIT 200",
      imagen: "ImagesProductos/JUGO HIT 200.jpg",
    },
    {
      codigo: "10008",
      nombre: "JUGO HIT 500",
      imagen: "ImagesProductos/JUGO HIT 500.webp",
    },
    {
      codigo: "10009",
      nombre: "JUGO HIT 1.5 LITROS",
      imagen: "ImagesProductos/JUGO HIT 1.5 LITROS.webp",
    },
    {
      codigo: "10010",
      nombre: "VIVECIEN 240",
      imagen: "ImagesProductos/VIVECIEN 240.webp",
    },
    {
      codigo: "10011",
      nombre: "VIVECIEN 380",
      imagen: "ImagesProductos/VIVECIEN 380.webp",
    },
    {
      codigo: "10012",
      nombre: "VIVECIEN 1 LITRO",
      imagen: "ImagesProductos/VIVECIEN 1 LITRO.webp",
    },
    { codigo: "10013", nombre: "LIKE", imagen: "ImagesProductos/LIKE.webp" },
    {
      codigo: "10014",
      nombre: "SAVILOE 1 LITRO",
      imagen: "ImagesProductos/SAVILOE 1 LITRO.png",
    },
    {
      codigo: "10015",
      nombre: "AMPER 473",
      imagen: "ImagesProductos/AMPER 473.webp",
    },
    {
      codigo: "10016",
      nombre: "VIVECIEN LATON 473",
      imagen: "ImagesProductos/VIVECIEN LATON 473.webp",
    },
    {
      codigo: "10017",
      nombre: "VIVECIEN LATA 269",
      imagen: "ImagesProductos/VIVECIEN LATA 269.jpg",
    },
    {
      codigo: "10018",
      nombre: "SPARTAN SIX PACK",
      imagen: "ImagesProductos/SPARTAN SIX PACK.png",
    },
    {
      codigo: "10019",
      nombre: "GATORADE",
      imagen: "ImagesProductos/GATORADE.webp",
    },
    {
      codigo: "10020",
      nombre: "SABIFRUT 320",
      imagen: "ImagesProductos/SABIFRUT 320.webp",
    },
    {
      codigo: "10021",
      nombre: "AGUA POOL TAPA PLANA 1 LITRO",
      imagen: "ImagesProductos/AGUA POOL TAPA PLANA 1 LITRO.png",
    },
    {
      codigo: "10022",
      nombre: "AGUA POOL TAPA DEPORTIVA 1 LITRO",
      imagen: "ImagesProductos/AGUA POOL TAPA DEPORTIVA 1 LITRO.png",
    },
    {
      codigo: "10023",
      nombre: "AGUA POOL 600",
      imagen: "ImagesProductos/AGUA POOL 600.png",
    },
    {
      codigo: "10024",
      nombre: "AGUA POOL 300",
      imagen: "ImagesProductos/AGUA POOL 300.jpg",
    },
    {
      codigo: "10025",
      nombre: "AGUA CRISTAL 300",
      imagen: "ImagesProductos/AGUA CRISTAL 300.png",
    },
    {
      codigo: "10026",
      nombre: "AGUA CRISTAL 600",
      imagen: "ImagesProductos/AGUA CRISTAL 600.jpg",
    },
    {
      codigo: "10027",
      nombre: "AGUA CRISTAL 1 LITRO",
      imagen: "ImagesProductos/AGUA CRISTAL 1 LITRO.JPG",
    },
    {
      codigo: "10028",
      nombre: "COCA COLA 2.25 LITROS",
      imagen: "ImagesProductos/COCA COLA 2.25 LITROS.png",
    },
    {
      codigo: "10029",
      nombre: "GASEOSA POSTOBON 400",
      imagen: "ImagesProductos/GASEOSA POSTOBON 400.jpg",
    },
    {
      codigo: "10030",
      nombre: "GASEOSA POSTOBON 250",
      imagen: "ImagesProductos/GASEOSA POSTOBON 250.webp",
    },
    {
      codigo: "10031",
      nombre: "COCA COLA 1.5 LITROS",
      imagen: "ImagesProductos/COCA COLA 1.5 LITROS.jpg",
    },
    {
      codigo: "10032",
      nombre: "SPEED MAX 250",
      imagen: "ImagesProductos/SPEED MAX 250.webp",
    },
    {
      codigo: "10033",
      nombre: "AGUA H2O 250",
      imagen: "ImagesProductos/AGUA H2O 250.webp",
    },
    {
      codigo: "10034",
      nombre: "AGUA H2O 600",
      imagen: "ImagesProductos/AGUA H2O 600.jpg",
    },
    {
      codigo: "10035",
      nombre: "DEL VALLE 1.5 LITROS",
      imagen: "ImagesProductos/DEL VALLE 1.5 LITROS.webp",
    },
    {
      codigo: "10036",
      nombre: "GASEOSA PREMIO 1.5 LITROS",
      imagen: "ImagesProductos/GASEOSA PREMIO 1.5 LITROS.jpg",
    },
    {
      codigo: "10037",
      nombre: "GASEOSA PREMIO 3 LITROS",
      imagen: "ImagesProductos/GASEOSA PREMIO 3 LITROS.jpg",
    },
    {
      codigo: "10038",
      nombre: "GASEOSA PREMIO 400",
      imagen: "ImagesProductos/GASEOSA PREMIO 400.webp",
    },
    {
      codigo: "10039",
      nombre: "GASEOSA QUATRO 400",
      imagen: "ImagesProductos/GASEOSA QUATRO 400.jpg",
    },
    {
      codigo: "10040",
      nombre: "GASEOSA QUATRO 3 LITROS",
      imagen: "ImagesProductos/GASEOSA QUATRO 3 LITROS.jpg",
    },
    {
      codigo: "10041",
      nombre: "GASEOSA QUATRO 1.5 LITROS",
      imagen: "ImagesProductos/GASEOSA QUATRO 1.5 LITROS.png",
    },
    {
      codigo: "10042",
      nombre: "JUGO CIFRUT 1.5 LITROS",
      imagen: "ImagesProductos/JUGO CIFRUT 1.5 LITROS.jpg",
    },
    {
      codigo: "10043",
      nombre: "AGUA BRISA MANZANA 1.5 LITROS",
      imagen: "ImagesProductos/AGUA BRISA MANZANA 1.5 LITROS.png",
    },
    {
      codigo: "10044",
      nombre: "GASEOSA SPRITE 400",
      imagen: "ImagesProductos/GASEOSA SPRITE 400.webp",
    },
    {
      codigo: "10045",
      nombre: "GASEOSA SPRITE 1.5",
      imagen: "ImagesProductos/GASEOSA SPRITE 1.5.jpg",
    },
    {
      codigo: "10046",
      nombre: "GASEOSA SPRITE 3 LITROS",
      imagen: "ImagesProductos/GASEOSA SPRITE 3 LITROS.webp",
    },
    {
      codigo: "10047",
      nombre: "SODA BRETAÑA 1.5 LITROS",
      imagen: "ImagesProductos/GASEOSA SPRITE 1.5.jpg",
    },
    {
      codigo: "10048",
      nombre: "GASEOSA POOL 400",
      imagen: "ImagesProductos/GASEOSA POOL 400.jpg",
    },
    {
      codigo: "10049",
      nombre: "DEL VALLE 400",
      imagen: "ImagesProductos/DEL VALLE 400.jpg",
    },
    {
      codigo: "10050",
      nombre: "PONY MALTA 200",
      imagen: "ImagesProductos/PONY MALTA 200.webp",
    },
    {
      codigo: "10051",
      nombre: "PONY MALTA 330",
      imagen: "ImagesProductos/PONY MALTA 330.webp",
    },
    {
      codigo: "10052",
      nombre: "PONY MALTA 1 LITROS",
      imagen: "ImagesProductos/PONY MALTA 1 LITROS.webp",
    },
    {
      codigo: "10053",
      nombre: "SODA POOL 400",
      imagen: "ImagesProductos/SODA POOL 400.png",
    },
    {
      codigo: "10054",
      nombre: "PONY MALTA 1.5 LITROS",
      imagen: "ImagesProductos/PONY MALTA 1.5 LITROS.webp",
    },
    {
      codigo: "10055",
      nombre: "PONY MALTA 2 LITROS",
      imagen: "ImagesProductos/PONY MALTA 2 LITROS.webp",
    },
    {
      codigo: "10056",
      nombre: "MR TEA 500",
      imagen: "ImagesProductos/MR TEA 500.png",
    },
    {
      codigo: "10057",
      nombre: "DEL VALLE 500",
      imagen: "ImagesProductos/DEL VALLE 500.webp",
    },
    {
      codigo: "10058",
      nombre: "ELECTROLI",
      imagen: "ImagesProductos/ELECTROLI.webp",
    },
    {
      codigo: "10059",
      nombre: "COLA Y POLA SIX PACK",
      imagen: "ImagesProductos/COLA Y POLA SIX PACK.jpg",
    },
    {
      codigo: "10060",
      nombre: "CORONITA 210",
      imagen: "ImagesProductos/CORONITA 210.webp",
    },
    {
      codigo: "10061",
      nombre: "CORONA 330",
      imagen: "ImagesProductos/CORONA 330.webp",
    },
    {
      codigo: "10062",
      nombre: "PILSEN LATA 330",
      imagen: "ImagesProductos/PILSEN LATA 330.webp",
    },
    {
      codigo: "10063",
      nombre: "PILSEN LATON 473",
      imagen: "ImagesProductos/PILSEN LATON 473.jpg",
    },
    {
      codigo: "10064",
      nombre: "AGUILA LATA 330",
      imagen: "ImagesProductos/AGUILA LATA 330.png",
    },
    {
      codigo: "10065",
      nombre: "AGUILA LATON 473",
      imagen: "ImagesProductos/AGUILA LATON 473.webp",
    },
    {
      codigo: "10066",
      nombre: "POKER LATA 330",
      imagen: "ImagesProductos/POKER LATA 330.jpg",
    },
    {
      codigo: "10067",
      nombre: "CLUB COLOMBIA LATA 330",
      imagen: "ImagesProductos/CLUB COLOMBIA LATA 330.jpg",
    },
    {
      codigo: "10068",
      nombre: "AGUILA LIGHT LATA 330",
      imagen: "ImagesProductos/AGUILA LIGHT LATA 330.jpg",
    },
    {
      codigo: "10069",
      nombre: "AGUILA LIGHT LATON 473",
      imagen: "ImagesProductos/AGUILA LIGHT LATON 473.webp",
    },
    {
      codigo: "10070",
      nombre: "AGUA CRISTAL CON GAS 600",
      imagen: "ImagesProductos/AGUA CRISTAL CON GAS 600.png",
    },
    {
      codigo: "10071",
      nombre: "GASEOSA POOL 250",
      imagen: "ImagesProductos/GASEOSA POOL 250.png",
    },
    {
      codigo: "10072",
      nombre: "AGUA BRISA MANZANA 600",
      imagen: "ImagesProductos/AGUA BRISA MANZANA 600.jpeg",
    },
    {
      codigo: "10073",
      nombre: "AGUA BRISA MANZANA 280",
      imagen: "ImagesProductos/AGUA BRISA MANZANA 280.webp",
    },
    {
      codigo: "10074",
      nombre: "AGUA BRISA MARACUYA 600",
      imagen: "ImagesProductos/AGUA BRISA MARACUYA 600.png",
    },
    {
      codigo: "10075",
      nombre: "AGUA BRISA LIMON 280",
      imagen: "ImagesProductos/AGUA BRISA LIMON 280.png",
    },
    {
      codigo: "10076",
      nombre: "AGUA BRISA LIMON 600",
      imagen: "ImagesProductos/AGUA BRISA LIMON 600.webp",
    },
    {
      codigo: "10077",
      nombre: "AGUA BRISA MARACUYA 280",
      imagen: "ImagesProductos/AGUA BRISA MARACUYA 280.webp",
    },
    {
      codigo: "10078",
      nombre: "COCA COLA 250",
      imagen: "ImagesProductos/COCA COLA 250.webp",
    },
    {
      codigo: "10079",
      nombre: "COCA COLA ZERO 250",
      imagen: "ImagesProductos/COCA COLA ZERO 250.png",
    },
    {
      codigo: "10080",
      nombre: "COCA COLA 400",
      imagen: "ImagesProductos/COCA COLA 400.webp",
    },
    {
      codigo: "10081",
      nombre: "COCA COLA ZERO 400",
      imagen: "ImagesProductos/COCA COLA ZERO 400.jpg",
    },
    {
      codigo: "10082",
      nombre: "COCA COLA ZERO 1.5 LITROS",
      imagen: "ImagesProductos/COCA COLA ZERO 1.5 LITROS.webp",
    },
    {
      codigo: "10083",
      nombre: "COCA COLA ZERO 2.25 LITROS",
      imagen: "ImagesProductos/COCA COLA ZERO 2.25 LITROS.jpg",
    },
    {
      codigo: "10084",
      nombre: "COCA COLA 3 LITROS",
      imagen: "ImagesProductos/COCA COLA 3 LITROS.webp",
    },
    {
      codigo: "10085",
      nombre: "COCA COLA LATA 235",
      imagen: "ImagesProductos/COCA COLA LATA 235.jpg",
    },
    {
      codigo: "10086",
      nombre: "JUGO CIFRUT 250",
      imagen: "ImagesProductos/JUGO CIFRUT 250.jpg",
    },
    {
      codigo: "10087",
      nombre: "JUGO CIFRUT 400",
      imagen: "ImagesProductos/JUGO CIFRUT 400.jpg",
    },
    {
      codigo: "10088",
      nombre: "GASEOSA QUATRO 250",
      imagen: "ImagesProductos/GASEOSA QUATRO 250.jpg",
    },
    {
      codigo: "10089",
      nombre: "MONSTER 473",
      imagen: "ImagesProductos/MONSTER 473.jpg",
    },
    {
      codigo: "10090",
      nombre: "JUGO POOL TETRA 250",
      imagen: "ImagesProductos/JUGO POOL TETRA 250.webp",
    },
    {
      codigo: "10091",
      nombre: "GASEOSA POOL 1 LITRO",
      imagen: "ImagesProductos/GASEOSA POOL 1 LITRO.webp",
    },
    {
      codigo: "10092",
      nombre: "GASEOSA POOL 1.7 LITROS",
      imagen: "ImagesProductos/GASEOSA POOL 1.7 LITROS.jpg",
    },
    {
      codigo: "10093",
      nombre: "GASEOSA POOL 3 LITROS",
      imagen: "ImagesProductos/GASEOSA POOL 3 LITROS.jpg",
    },
    {
      codigo: "10094",
      nombre: "GASEOSA POSTOBON 3 LITROS",
      imagen: "ImagesProductos/GASEOSA POSTOBON 3 LITROS.jpg",
    },
    {
      codigo: "10095",
      nombre: "GASEOSA POSTOBON 2.25 LITROS",
      imagen: "ImagesProductos/GASEOSA POSTOBON 2.25 LITROS.webp",
    },
    {
      codigo: "10096",
      nombre: "GASEOSA POSTOBON 1.5 LITROS",
      imagen: "ImagesProductos/GASEOSA POSTOBON 1.5 LITROS.png",
    },
    {
      codigo: "10097",
      nombre: "AGUA AQUARELLA BOLSA",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10098",
      nombre: "AGUA SULTANA 28",
      imagen: "ImagesProductos/default.jpg",
    },
    { codigo: "10099", nombre: "BOLIS", imagen: "ImagesProductos/default.jpg" },
    {
      codigo: "10100",
      nombre: "POPETAS",
      imagen: "ImagesProductos/POPETAS.webp",
    },
    {
      codigo: "10101",
      nombre: "AGUA AQUARELLA BOTELLON",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10102",
      nombre: "AGUA VATTEN BOTELLON",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10103",
      nombre: "PILSEN CAJA",
      imagen: "ImagesProductos/PILSEN CAJA.jpg",
    },
    {
      codigo: "10104",
      nombre: "AGUILA CAJA",
      imagen: "ImagesProductos/AGUILA CAJA.webp",
    },
    {
      codigo: "10105",
      nombre: "AGUILA LIGHT CAJA",
      imagen: "ImagesProductos/AGUILA LIGHT CAJA.webp",
    },
    {
      codigo: "10106",
      nombre: "COSTEÑITA CAJA",
      imagen: "ImagesProductos/COSTEÑITA CAJA.webp",
    },
    {
      codigo: "10107",
      nombre: "PONY MALTA VIDRIO",
      imagen: "ImagesProductos/PONY MALTA VIDRIO.png",
    },
    {
      codigo: "10108",
      nombre: "COLA Y POLA CAJA",
      imagen: "ImagesProductos/COLA Y POLA CAJA.jpg",
    },
    {
      codigo: "10109",
      nombre: "CLUB COLOMBIA CAJA",
      imagen: "ImagesProductos/CLUB COLOMBIA CAJA.webp",
    },
    {
      codigo: "10110",
      nombre: "PILSENON CAJA",
      imagen: "ImagesProductos/PILSENON CAJA.png",
    },
    {
      codigo: "10111",
      nombre: "AGUILON CAJA",
      imagen: "ImagesProductos/AGUILON CAJA.jpg",
    },
    {
      codigo: "10112",
      nombre: "AGUILON LIGHT CAJA",
      imagen: "ImagesProductos/AGUILON LIGHT CAJA.jpg",
    },
    {
      codigo: "10113",
      nombre: "POKER CAJA",
      imagen: "ImagesProductos/POKER CAJA.jpg",
    },
    {
      codigo: "10114",
      nombre: "COCA COLA CAJA 350",
      imagen: "ImagesProductos/COCA COLA CAJA 350.jpg",
    },
    {
      codigo: "10115",
      nombre: "COCA COLA ZERO CAJA 350",
      imagen: "ImagesProductos/COCA COLA ZERO CAJA 350.jpg",
    },
    {
      codigo: "10116",
      nombre: "COCA COLA CAJA 8OZ",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10117",
      nombre: "GASEOSA QUATRO CAJA 350",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10118",
      nombre: "GASEOSA QUATRO CAJA 8OZ",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10119",
      nombre: "GASEOSA PREMIO CAJA 350",
      imagen: "ImagesProductos/GASEOSA PREMIO CAJA 350.jpg",
    },
    {
      codigo: "10120",
      nombre: "GASEOSA PREMIO CAJA 8OZ",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10121",
      nombre: "GASEOSA SPRITE CAJA 350",
      imagen: "ImagesProductos/GASEOSA SPRITE CAJA 350.jpg",
    },
    {
      codigo: "10122",
      nombre: "GASEOSA POSTOBON CAJA 350",
      imagen: "ImagesProductos/GASEOSA POSTOBON CAJA 350.jpg",
    },
    {
      codigo: "10123",
      nombre: "SODA BRETAÑA CAJA 350",
      imagen: "ImagesProductos/SODA BRETAÑA CAJA.jpg",
    },
    {
      codigo: "10124",
      nombre: "TUTI FRUTI CAJA 250",
      imagen: "ImagesProductos/TUTI FRUTI CAJA 250.jpg",
    },
    {
      codigo: "10125",
      nombre: "POKER LATON 473",
      imagen: "ImagesProductos/POKER LATON 473.jpg",
    },
    {
      codigo: "10126",
      nombre: "AGUA POOL CON GAS",
      imagen: "ImagesProductos/AGUA POOL CON GAS.jpeg",
    },
    {
      codigo: "10127",
      nombre: "FRUTIÑO 2 LITROS",
      imagen: "ImagesProductos/FRUTIÑO 2 LITROS.JPG",
    },
    {
      codigo: "10128",
      nombre: "AGUA SABORIZADA POOL 600",
      imagen: "ImagesProductos/AGUA SABORIZADA POOL 600.png",
    },
    {
      codigo: "10129",
      nombre: "AGUA CON GAS POOL 600",
      imagen: "ImagesProductos/AGUA  CON GAS POOL 600.jpeg",
    },
    {
      codigo: "10130",
      nombre: "SUNTEA",
      imagen: "ImagesProductos/SUNTEA.jpg",
    },
    { codigo: "10131", nombre: "BOKA", imagen: "ImagesProductos/BOKA.jpg" },
    {
      codigo: "10132",
      nombre: "BONICE",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10133",
      nombre: "BONICE DOBLE",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10134",
      nombre: "COCA COLA 1 LITRO",
      imagen: "ImagesProductos/COCA COLA 1 LITRO.png",
    },
    {
      codigo: "10135",
      nombre: "SODA HATSU 300",
      imagen: "ImagesProductos/SODA HATSU 300.png",
    },
    {
      codigo: "10136",
      nombre: "TEA HATSU 400",
      imagen: "ImagesProductos/TEA HATSU 400.jpeg",
    },
    {
      codigo: "10137",
      nombre: "AGUA SABORIZADA POOL 300",
      imagen: "ImagesProductos/AGUA SABORIZADA POOL 300.png",
    },
    {
      codigo: "10138",
      nombre: "AGUA MANANTIAL 600",
      imagen: "ImagesProductos/AGUA MANANTIAL 600.jpeg",
    },
    {
      codigo: "10139",
      nombre: "BUDWEISER LATA",
      imagen: "ImagesProductos/BUDWEISER LATA.jpg",
    },
    {
      codigo: "10140",
      nombre: "CANDELA ECONOMICA",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10141",
      nombre: "DEL VALLE 188",
      imagen: "ImagesProductos/DEL VALLE 188.jpg",
    },
    {
      codigo: "10142",
      nombre: "DEL VALLE 2.5",
      imagen: "ImagesProductos/DEL VALLE 2.5.jpg",
    },
    {
      codigo: "10143",
      nombre: "RED BULL 250",
      imagen: "ImagesProductos/RED BULL 250.JPG",
    },
    {
      codigo: "10145",
      nombre: "GASEOSA KOLA ROMAN 400",
      imagen: "ImagesProductos/GASEOSA KOLA ROMAN 400.jpg",
    },
    {
      codigo: "10146",
      nombre: "STELLA SIX PACK",
      imagen: "ImagesProductos/STELLA SIX PACK.jpg",
    },
    {
      codigo: "10148",
      nombre: "AGUA BRISA 280",
      imagen: "ImagesProductos/AGUA BRISA 280.jpg",
    },
    {
      codigo: "10147",
      nombre: "AGUA BRISA 1 LITRO",
      imagen: "ImagesProductos/AGUA BRISA 1 LITRO.jpg",
    },
    {
      codigo: "10149",
      nombre: "AGUA BRISA 600",
      imagen: "ImagesProductos/AGUA BRISA 600.png",
    },
    {
      codigo: "10150",
      nombre: "AGUA VATTEN BOLSA",
      imagen: "ImagesProductos/default.jpg",
    },
    {
      codigo: "10151",
      nombre: "FUZETEA 400",
      imagen: "ImagesProductos/FUZETEA 400.jpg",
    },
    {
      codigo: "10152",
      nombre: "POWER 500",
      imagen: "ImagesProductos/POWER 500.jpg",
    },
    {
      codigo: "44548",
      nombre: "SODA SWEEP 400",
      imagen: "ImagesProductos/SODA SWEEP 400.jpg",
    },
    {
      codigo: "5452456",
      nombre: "AGUA BRISA BIDON",
      imagen: "ImagesProductos/AGUA BRISA BIDON.jpg",
    },
    {
      codigo: "54328",
      nombre: "ACQUA POSTOBON 400",
      imagen: "ImagesProductos/ACQUA POSTOBON 400.jpg",
    },
    {
      codigo: "3655",
      nombre: "BIDON AQUARELA 5 LITROS ",
      imagen: "ImagesProductos/BIDON AQUARELA 5 LITROS.jpg",
    },
  ];
  productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

  function mostrarProductos(filtro = "") {
    const contenedorProductos = document.getElementById("productos-container");
    contenedorProductos.innerHTML = "";

    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    productosFiltrados.forEach((producto) => {
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

    document.querySelectorAll(".agregar-carrito").forEach((boton) => {
      boton.addEventListener("click", () => {
        let productoElemento = boton.parentElement;
        let codigo = productoElemento.dataset.codigo;
        let nombre = productoElemento.dataset.nombre;
        let nota = productoElemento.querySelector(".nota-producto").value;
        agregarAlCarrito(codigo, nombre, nota);
      });
    });
  }

  mostrarProductos();

  document.getElementById("buscador").addEventListener("input", function () {
    const filtro = this.value;
    mostrarProductos(filtro);
  });

  let carrito = [];

  function agregarAlCarrito(codigo, nombre, nota) {
    let productoEnCarrito = carrito.find((item) => item.codigo === codigo);
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

  // Enviar el pedido a WhatsApp
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
      mensaje += `${index + 1}. [${producto.codigo}] ${producto.nombre} x${
        producto.cantidad
      }`;
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
