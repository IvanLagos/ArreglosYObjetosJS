// ----- PROPIEDADES EN VENTA -----
const propiedades_venta = [
  {
    nombre: "Casa Familiar en Providencia",
    src: "assets/imgs/casa1.jpg",
    descripcion: "Hermosa casa con amplio jardín y quincho.",
    ubicacion: "Providencia, Santiago",
    habitaciones: 4,
    costo: 350000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento Moderno",
    src: "assets/imgs/casa2.jpg",
    descripcion: "Departamento con excelente conectividad.",
    ubicacion: "Ñuñoa, Santiago",
    habitaciones: 2,
    costo: 210000000,
    smoke: true,
    pets: false
  },
  {
    nombre: "Casa de madera",
    src: "assets/imgs/casa3.jpg",
    descripcion: "Propiedad de alto estándar con piscina.",
    ubicacion: "Lo Barnechea, Santiago",
    habitaciones: 5,
    costo: 750000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Cabaña en el Sur",
    src: "assets/imgs/casa4.jpg",
    descripcion: "Cabaña rústica ideal para descanso.",
    ubicacion: "Pucón, Chile",
    habitaciones: 3,
    costo: 180000000,
    smoke: true,
    pets: true
  }
];

// ----- PROPIEDADES EN ALQUILER -----
const propiedades_alquiler = [
  {
    nombre: "Depto Estudio",
    src: "assets/imgs/casa5.jpg",
    descripcion: "Ideal para estudiantes o profesionales jóvenes.",
    ubicacion: "Santiago Centro",
    habitaciones: 1,
    costo: 450000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Departamento con Terraza",
    src: "assets/imgs/casa6.jpg",
    descripcion: "Terraza con vista panorámica.",
    ubicacion: "Las Condes, Santiago",
    habitaciones: 2,
    costo: 700000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Casa en la Playa",
    src: "assets/imgs/casa7.jpg",
    descripcion: "Casa frente al mar para disfrutar todo el año.",
    ubicacion: "Viña del Mar",
    habitaciones: 3,
    costo: 1200000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento Económico",
    src: "assets/imgs/casa8.jpg",
    descripcion: "Opción accesible y bien ubicada.",
    ubicacion: "La Florida, Santiago",
    habitaciones: 2,
    costo: 500000,
    smoke: true,
    pets: false
  }
];

// ----- FUNCIÓN DE RENDER -----
function renderPropiedades(lista, id, limite = 0) {
  let contenedor = document.getElementById(id);
  if (!contenedor) return;

  contenedor.innerHTML = "";
  let propiedades = limite ? lista.slice(0, limite) : lista;

  propiedades.forEach(prop => {
    const precioCLP = Number(prop.costo).toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0
    });

    let html = `
      <div class="propiedad">
        <img src="${prop.src}" alt="${prop.nombre}" loading="lazy">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
        <p><strong>Precio:</strong> ${precioCLP}</p>
        <p>${prop.smoke ? "🚬 Permitido fumar" : "❌ No se permite fumar"}</p>
        <p>${prop.pets ? "🐶 Se aceptan mascotas" : "❌ No se aceptan mascotas"}</p>
      </div>
    `;
    contenedor.innerHTML += html;
  });
}

// ----- INDEX -----
renderPropiedades(propiedades_venta, "venta-index", 3);
renderPropiedades(propiedades_alquiler, "alquiler-index", 3);

// ----- VENTA -----
renderPropiedades(propiedades_venta, "venta");

// ----- ALQUILER -----
renderPropiedades(propiedades_alquiler, "alquiler");

// --- MENÚ HAMBURGUESA ---
document.addEventListener("DOMContentLoaded", () => {
  const navbars = document.querySelectorAll(".navbar");

  navbars.forEach((nav) => {
    const btn = nav.querySelector(".menu-toggle");
    const menu = nav.querySelector(".nav-links");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("show");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  });
});
