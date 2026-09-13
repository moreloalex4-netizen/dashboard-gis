// ============================================
// No necesitas editar este archivo para cambiar datos —
// eso se hace en data.js. Aquí va la lógica del sitio.
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initImageViewer();
  initMap();
  initChart();
});

// --- Pestañas ---
function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");

      // Leaflet necesita esto porque el mapa se inicializa oculto
      if (btn.dataset.tab === "mapa" && window._leafletMap) {
        setTimeout(() => window._leafletMap.invalidateSize(), 50);
      }
    });
  });
}

// --- Visor de imágenes ---
function initImageViewer() {
  const dateContainer = document.getElementById("date-buttons");
  const img = document.getElementById("main-image");
  const label = document.getElementById("image-label");

  IMAGENES.forEach((item, i) => {
    const btn = document.createElement("button");
    btn.className = "date-btn" + (i === IMAGENES.length - 1 ? " active" : "");
    btn.textContent = item.fecha;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".date-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showImage(item);
    });
    dateContainer.appendChild(btn);
  });

  function showImage(item) {
    img.src = item.src;
    img.alt = item.etiqueta;
    label.textContent = item.etiqueta;
  }

  showImage(IMAGENES[IMAGENES.length - 1]);
}

// --- Mapa ---
function initMap() {
  const map = L.map("leaflet-map").setView([MAPA_CENTRO.lat, MAPA_CENTRO.lon], MAPA_CENTRO.zoom);
  window._leafletMap = map;

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  PUNTOS_MAPA.forEach(p => {
    L.marker([p.lat, p.lon]).addTo(map).bindPopup(`<b>${p.nombre}</b><br>${p.descripcion}`);
  });
}

// --- Gráfico ---
function initChart() {
  const ctx = document.getElementById("main-chart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: GRAFICO.etiquetas,
      datasets: GRAFICO.series.map(s => ({
        label: s.nombre,
        data: s.valores,
        borderColor: "#4fd3c4",
        backgroundColor: "rgba(79, 211, 196, 0.15)",
        tension: 0.3,
        fill: true
      }))
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: "#e7ecf3" } }
      },
      scales: {
        x: { ticks: { color: "#7f8fab" }, grid: { color: "#21304a" } },
        y: { ticks: { color: "#7f8fab" }, grid: { color: "#21304a" } }
      }
    }
  });
}
