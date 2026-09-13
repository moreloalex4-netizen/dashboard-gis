# Panel de monitoreo

Plantilla de dashboard con 3 pestañas: imágenes satelitales (con selector de fechas), mapa interactivo y gráfico. Hecho con HTML/CSS/JS puro más dos librerías gratuitas cargadas desde CDN:

- **Leaflet** — para el mapa interactivo
- **Chart.js** — para el gráfico

No necesitas instalar nada ni usar npm; todo funciona abriendo `index.html` en el navegador o publicándolo en GitHub Pages.

## Estructura

- `index.html` — estructura de la página y las 3 pestañas
- `style.css` — estilos (colores, layout)
- `data.js` — **aquí es donde editas tus datos** (imágenes, puntos del mapa, valores del gráfico)
- `script.js` — la lógica que conecta todo (normalmente no necesitas tocarlo)
- `images/` — carpeta para tus imágenes satelitales o capturas

## Cómo agregar tus propios datos

Todo se edita en `data.js`, sin tocar el resto del código:

**Imágenes:** agrega tus archivos a la carpeta `images/` y súmalos a la lista `IMAGENES`:
```js
{ fecha: "5 Mar", etiqueta: "5 Marzo — Recuperación", src: "images/mi-imagen.png" }
```

**Puntos del mapa:** agrega coordenadas a `PUNTOS_MAPA`:
```js
{ nombre: "Mi punto", lat: 8.76, lon: -75.88, descripcion: "Lo que quieras mostrar al hacer click" }
```

**Gráfico:** cambia las etiquetas y los valores en `GRAFICO`. Puedes agregar más de una serie de datos (por ejemplo, comparar dos variables) agregando otro objeto dentro de `series`.

## Cómo agregar más gráficos o mapas

- Para otro gráfico: agrega un `<canvas id="otro-grafico"></canvas>` en el HTML, y en `script.js` crea otro `new Chart(...)` apuntando a ese canvas.
- Para más capas en el mapa (por ejemplo, polígonos de zonas inundadas): usa `L.polygon([...]).addTo(map)` dentro de `initMap()` en `script.js`. Leaflet tiene muchísima documentación con ejemplos: https://leafletjs.com/examples.html

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube todos estos archivos (manteniendo la carpeta `images/`).
2. Ve a Settings → Pages, selecciona la rama `main` y la carpeta `/ (root)`.
3. Tu sitio queda disponible en `https://tu-usuario.github.io/nombre-repo/`.

Cada vez que quieras actualizar los datos, solo edita `data.js` (o agrega imágenes nuevas), vuelve a subir los cambios, y el sitio se actualiza solo.
