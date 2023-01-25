/* eslint-disable no-underscore-dangle */
const content = document.querySelector(".content");

const EltCreator = (function EltCreator() {
  // create location menu item
  function _makeOption(location, index) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("location-container");
    itemContainer.setAttribute("data-index", index);

    const cityName = document.createElement("div");
    cityName.classList.add("city-name");
    cityName.textContent = location.name;

    // state (if applicable) and country
    const cityLocation = document.createElement("div");
    cityLocation.classList.add("city-location");

    if (location.state) {
      cityLocation.textContent = `${location.state}, ${location.country}`;
    } else {
      cityLocation.textContent = location.country;
    }

    const roundLat = location.lat.toFixed(4);
    const cityLat = document.createElement("div");
    cityLat.classList.add("city-lat");
    cityLat.textContent = `lat: ${roundLat}`;

    const roundLon = location.lon.toFixed(2);
    const cityLon = document.createElement("div");
    cityLon.classList.add("city-lon");
    cityLon.textContent = `lon: ${roundLon}`;

    listItem.appendChild(itemContainer);
    itemContainer.appendChild(cityName);
    itemContainer.appendChild(cityLat);
    itemContainer.appendChild(cityLocation);
    itemContainer.appendChild(cityLon);

    return listItem;
  }

  // create location menu
  function createMenu(locations) {
    const locationList = document.createElement("ul");
    locationList.classList.add("location-list");
    content.style.visibility = "visible";

    locations.forEach((location) => {
      const index = locations.indexOf(location);

      const locationItem = _makeOption(location, index);
      locationList.appendChild(locationItem);
    });

    content.appendChild(locationList);
  }

  function createWeatherDisp(weatherLoc, searchLoc) {
    content.textContent = "";
    content.style.visibility = "visible";

    // information from the 'weather' section of the openweathermap data
    const weather = weatherLoc.weather[0];

    // information from the 'main' section of the openweathermap data
    const dataMain = weatherLoc.main;

    const title = document.createElement("div");
    title.classList.add("weather-title");

    if (searchLoc.state) {
      title.textContent = `${searchLoc.name}, ${searchLoc.state}, ${searchLoc.country}`;
    } else {
      title.textContent = `${searchLoc.name}, ${searchLoc.country}`;
    }

    const weatherWrap = document.createElement("div");
    weatherWrap.classList.add("weather-wrap");

    const descWrap = document.createElement("div");
    descWrap.classList.add("desc-wrap");

    const icon = document.createElement("img");
    icon.classList.add("weather-icon");
    icon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    const descMain = document.createElement("p");
    descMain.classList.add("desc-main");
    descMain.textContent = weather.main;

    const descDetail = document.createElement("p");
    descDetail.classList.add("desc-detail");
    descDetail.textContent = weather.description;

    descWrap.appendChild(icon);
    descWrap.appendChild(descMain);
    descWrap.appendChild(descDetail);

    const mainWrap = document.createElement("div");
    mainWrap.classList.add("main-wrap");

    const temp = document.createElement("p");
    temp.classList.add("temp");
    temp.textContent = `${dataMain.temp.toFixed(1)}°F`;

    const minTemp = document.createElement("p");
    minTemp.classList.add("min-temp");
    minTemp.textContent = `Low: ${dataMain.temp_min.toFixed(1)}°F`;

    const maxTemp = document.createElement("p");
    maxTemp.classList.add("max-temp");
    maxTemp.textContent = `Max: ${dataMain.temp_max.toFixed(1)}°F`;

    const feelsLike = document.createElement("p");
    feelsLike.classList.add("feels-like");
    feelsLike.textContent = `Feels like: ${dataMain.feels_like}°F`;

    const otherInfo = document.createElement("div");
    otherInfo.classList.add("other-info");

    const windSpeed = document.createElement("p");
    windSpeed.classList.add("wind-speed");
    windSpeed.textContent = `Wind Speed: ${weatherLoc.wind.speed} mph`;

    const press = document.createElement("p");
    press.classList.add("pressure");
    press.textContent = `Pressure: ${dataMain.pressure} hPa`;

    const humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.textContent = `Humidity: ${dataMain.humidity}%`;

    otherInfo.appendChild(windSpeed);
    otherInfo.appendChild(press);
    otherInfo.appendChild(humidity);

    mainWrap.appendChild(minTemp);
    mainWrap.appendChild(maxTemp);
    mainWrap.appendChild(feelsLike);

    content.appendChild(title);
    content.appendChild(weatherWrap);
    weatherWrap.appendChild(temp);
    weatherWrap.appendChild(mainWrap);
    weatherWrap.appendChild(descWrap);
    weatherWrap.appendChild(otherInfo);
  }

  function displayError(errorText) {
    content.textContent = errorText;
    content.style.visibility = "visible";
  }

  return {
    createMenu,
    createWeatherDisp,
    displayError,
  };
})();

export default EltCreator;
