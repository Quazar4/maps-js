document.addEventListener("DOMContentLoaded", function () {
    const defaultMapCenter = [40.7128, -74.0060]; // New York City coordinates
    const initialZoom = 12;
  
    const map = L.map("map").setView(defaultMapCenter, initialZoom);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  
    function updateMapCenterAndMarker(lat, lng) {
      const newMapCenter = [parseFloat(lat), parseFloat(lng)];
      map.setView(newMapCenter, initialZoom);
  
      if (marker) {
        map.removeLayer(marker);
      }
  
      marker = L.marker(newMapCenter).addTo(map);
  
      marker.bindPopup(`Latitude: ${lat}, Longitude: ${lng}`).openPopup();
    }
  
    let marker = null;
    const form = document.getElementById("coordinatesForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const latitudeInput = document.getElementById("latitude");
      const longitudeInput = document.getElementById("longitude");
      const latitude = latitudeInput.value;
      const longitude = longitudeInput.value;
  
      if (latitude && longitude) {
        updateMapCenterAndMarker(latitude, longitude);
      }
    });
  });
  
