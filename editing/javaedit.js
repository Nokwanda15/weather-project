let now = new Date();
let dayTime = document.querySelector("#day");
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  `0${minutes}`;
}
if (hours < 10) {
  `0${hours}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[now.getDay()];
dayTime.innerHTML = `${today} ${hours}:${minutes}`;

function weather(response) {
  let temp = document.querySelector(".current-temp");
  let temperatureDay = Math.round(response.data.temperature.current);
  temp.innerHTML = `${temperatureDay}°C`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#insert");
  let yourCity = searchInput.value;
  let apiKey = `9ceba7ba7t6e28o34065e0b00b4cfe71`;
  let url = `https://api.shecodes.io/weather/v1/current?query=${yourCity}&key=${apiKey}&unit=metric`;

  axios.get(url).then(weather);
}
let form = document.querySelector("#formCity");
form.addEventListener("submit", changeCity);
