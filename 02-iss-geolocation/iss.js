async function getISS() {
  const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
  const res = await fetch(api_url);
  const { latitude, longitude } = await res.json();

  document.getElementById("lat").textContent = latitude;
  document.getElementById("lon").textContent = longitude;
}

getISS();
