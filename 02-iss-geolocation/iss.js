// Make map and tiles
const issMap = L.map("issMap").setView([0, 0], 1);
const attr =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attr });
const marker = L.marker([0, 0]).addTo(issMap);

tiles.addTo(issMap);

async function getISS() {
  const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
  const res = await fetch(api_url);
  const { latitude, longitude } = await res.json();
  marker.setLatLng([latitude, longitude]);
  issMap.setView([latitude, longitude], 2);

  document.getElementById("lat").textContent = latitude.toFixed(2);
  document.getElementById("lon").textContent = longitude.toFixed(2);
}

getISS();
setInterval(getISS, 2000);
