var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
var time = document.querySelector(".time");
var content = document.querySelector(".content");

async function changeWeatherUI(capitalSearch) {
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=eddd192e840df6217ceddcb529b78755`;

  let apiUrlv2 = `http://api.weatherapi.com/v1/current.json?key=37b7bd39d46b412598090030222211&q=${capitalSearch}&aqi=no`;

  let data = await fetch(apiUrlv2).then((res) => res.json());
  if (data.location != null) {
    // content.classList.remove("hide");
    city.innerText = data.location.name;
    country.innerText = data.location.country;
    visibility.innerText = data.current + "%";
    visibility.innerText = data.current.cloud + "%";
    wind.innerHTML = data.current.wind_degree + "m/s";
    sun.innerHTML = data.current.humidity + "%";
    value.innerHTML = Math.round(data.current.temp_c) + `<sup>o</sup>C`;
    shortDesc.innerText = data.current.condition
      ? data.current.condition.text
      : "";
    time.innerText = data.location.localtime;
    //   console.log("API:", data);
  } else {
    content.classList.add("hide");
  }
}
search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    let capitalSearch = search.value.trim();
    changeWeatherUI(capitalSearch);
  }
});

changeWeatherUI("hanoi");
