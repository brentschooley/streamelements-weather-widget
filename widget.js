window.addEventListener("onWidgetLoad", function (obj) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?zip={zipcode},us&appid={apiKey}&units={weatherUnits}";

  function update() {
    fetch(url).then((res) => {
      res.json().then((data) => {
        const fieldData = obj.detail.fieldData;

        const displayUnits =
          fieldData["weatherUnits"] === "imperial" ? "F" : "C";
        const temperature = Math.round(data.main.temp);
        const conditions = data.weather[0].main;
        const weatherIcon = data.weather[0].icon;

        $("#temperature").html(temperature + "°" + displayUnits);
        $("#conditions").html(conditions);
        $("#icon").attr(
          "src",
          `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        );
      });
    });
  }
  update();
  setInterval(update, 60000);
});
