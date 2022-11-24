var search = $(".search");
var city = $(".city");
var country = $(".country");
var shortDesc = $(".short-desc");
var visibility = $(".visibility span");
var wind = $(".wind span");
var sun = $(".sun span");
var time = $(".time");
var value = $(".value");
var content = $(".content");

$(document).ready(function () {
  function changeWeatherUI(capitalSearch) {
    var urlApi = `http://api.weatherapi.com/v1/current.json?key=37b7bd39d46b412598090030222211&q=${capitalSearch}&aqi=no`;

    $.ajax({
      type: "get",
      url: urlApi,
      dataType: "json",
      success: function (rs, status) {
        if (rs.location != null) {
          content.removeClass("hide");
          city.html(rs.location.name);
          country.html(rs.location.country);
          time.html(rs.location.localtime);
          shortDesc.html(rs.current.condition.text);
          value.html(Math.round(rs.current.temp_c) + `<sup>o</sup>C`);
          sun.html(rs.current.humidity + "%");
          wind.html(rs.current.wind_degree + "m/s");
          visibility.html(rs.current.cloud + "%");
        }
      },
      error: function () {
        content.addClass("hide");
      },
    });
    search.keypress(function (e) {
      if (e.code == "Enter") {
        let capitalSearch = search.val().trim();
        console.log(capitalSearch);
        changeWeatherUI(capitalSearch);
      }
    });
  }

  changeWeatherUI("hanoi");
});
