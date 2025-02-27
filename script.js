let map;
async function initMap() {
  const response = await fetch('map-config.json');
  const config = await response.json();

  map = L.map('map', {
    minZoom: -2,
    maxZoom: 1,
    zoomSnap: 0.25,
    zoomDelta: 0.25,
    crs: L.CRS.Simple
  }).setView(config.view, config.zoom);

  L.tileLayer(config.tileLayer, {
    minZoom: -2,
    maxZoom: 2,
    tileSize: 256,
    noWrap: true,
    attribution: 'Custom Tiles'
  }).addTo(map);

  const customStyle = document.createElement('style');
  customStyle.textContent = `
    .leaflet-popup-content {
      min-width: 200px;
      padding: 10px;
    }

    .marker-popup {
      padding: 10px;
    }

    .marker-popup h3 {
      margin-top: 0;
      margin-bottom: 10px;
    }

    .marker-popup p {
      margin-bottom: 15px;
    }

    .marker-popup .image-container {
      margin: 15px 0;
      text-align: center;
      max-width: 100%;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .marker-popup img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      border-radius: 5px;
    }

    .leaflet-tooltip {
      background-color: #333;
      color: #ffffff;
      font-size: 1rem;
      padding: 5px;
      border-radius: 3px;
      text-align: center;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    }
  `;
  document.head.appendChild(customStyle);

  config.markers.forEach((markerData) => {
    const scale = markerData.iconScale || 1;
    const baseSize = 32;
    const iconSize = [baseSize * scale, baseSize * scale];

    const marker = L.marker(markerData.latlng, {
      icon: L.icon({
        iconUrl: markerData.iconUrl,
        iconSize: iconSize,
        iconAnchor: [iconSize[0] / 2, iconSize[1]]
      })
    }).addTo(map);

    let popupContent = `<div class="marker-popup">
      <h3>${markerData.name || 'Unnamed Marker'}</h3>
      <p>${markerData.description || ''}</p>`;

    let imageWidth = 400; 
    let imageHeight = 250; 

    if (markerData.popupImage) {
      popupContent += `<div class="image-container">
        <img src="${markerData.popupImage}" alt="${markerData.name}" style="width: ${imageWidth}px; height: ${imageHeight}px;">
      </div>`;
    }

    popupContent += `</div>`;

    marker.bindPopup(popupContent, {
      maxWidth: imageWidth + 40,
      minWidth: 300,
      className: 'custom-popup'
    });

    marker.bindTooltip(markerData.name || "Unnamed Marker", {
      permanent: false,
      direction: "top",
      offset: [0, -10],
      opacity: 0.8 
    });
  });

  config.lines.forEach(line => {
    L.polyline(line.coordinates, {
      color: line.color,
      dashArray: line.dashArray,
      weight: line.weight || 4
    }).addTo(map);
  });
}

initMap().catch(error => {
  console.error('Error loading map:', error);
  alert('Failed to load map configuration! Check console for details.');
});
