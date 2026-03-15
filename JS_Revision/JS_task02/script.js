let form = document.querySelector("#weather_form");
let locationInput = document.querySelector("#location");
let outDiv = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userLocation = locationInput.value;
  locationInput.value = "";
  getWeather(userLocation);
});

async function getWeather(loc) {
  try {
    const api_response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=16cb3e08dcde487096f105614261503&q=${loc}&aqi=no`,
    );
    const data = await api_response.json();
    outputWeather(data);
  } catch (error) {
    console.error(error);
  }
}

function outputWeather(CW) {
  outDiv.innerHTML = `<div>
    location: ${CW.location.name}<br>
    Country: ${CW.location.country}<br>
    tempC: ${CW.current.temp_c}<br>
    tempF: ${CW.current.temp_f}<br>
    </div>`;
}
