// ============================================
// EDITA ESTE ARCHIVO CON TUS PROPIOS DATOS
// ============================================

// --- 1. Imágenes satelitales / fechas ---
// "src" puede apuntar a un archivo en la carpeta images/, o a una URL.
const IMAGENES = [
  {
    fecha: "27 Ene",
    etiqueta: "27 Enero — Antes",
    src: "images/placeholder1.svg"
  },
  {
    fecha: "8 Feb",
    etiqueta: "8 Febrero — Crítico",
    src: "images/placeholder2.svg"
  },
  {
    fecha: "26 Feb",
    etiqueta: "26 Febrero — Emergencia",
    src: "images/placeholder3.svg"
  }
];

// --- 2. Puntos del mapa ---
// lat/lon de ejemplo (Montería, Córdoba). Cámbialos por los tuyos.
const PUNTOS_MAPA = [
  { nombre: "Montería", lat: 8.7479, lon: -75.8814, descripcion: "Punto de referencia" },
  { nombre: "Zona de estudio", lat: 8.80, lon: -75.85, descripcion: "Agrega tu descripción aquí" }
];

const MAPA_CENTRO = { lat: 8.75, lon: -75.87, zoom: 10 };

// --- 3. Datos del gráfico ---
const GRAFICO = {
  etiquetas: ["27 Ene", "2 Feb", "8 Feb", "14 Feb", "20 Feb", "26 Feb"],
  series: [
    {
      nombre: "Área inundada (km²)",
      valores: [2, 8, 34, 41, 38, 35]
    }
  ]
};
