const API_KEY = `3edd9b17ea78a017b027e5e023fa227f`;
const city = document.querySelector("input");
const weather = document.querySelector(".weather")

document.querySelector("button").addEventListener("click", function () {
  if (city.value === "") {
    alert("Please enter a city name");
  } else {
    getweather(city.value);
  }
});

async function getweather(city) {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await weather.json();
  console.log(data);
  myweather(data);
}

function myweather(data) {
  if (data.cod == "404") {
    weather.innerHTML = `<h1> City Not Found <h1>`;
    return;
  }

  weather.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
<div class="details">
<h2>${data.main.temp} ℃</h2>
<h4>${data.weather[0].main} </h4>
</div>
</div>
`;
}

