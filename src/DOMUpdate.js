/* eslint-disable no-underscore-dangle */
import clear from "./imgs/cate-bligh-lX5wMeZUidA-unsplash.jpg";
import rain from "./imgs/osman-rana-GXEZuWo5m4I-unsplash.jpg";
import haze from "./imgs/damon-lam-M6PJrAd26M0-unsplash.jpg";
import thunderstorm from "./imgs/cooper-baumgartner-1N8iqSsn7ls-unsplash.jpg";
import snow from "./imgs/ant-rozetsky-H9m6mfeeakU-unsplash.jpg";
import clouds from "./imgs/chaz-mcgregor-GKN6rpDr0EI-unsplash.jpg";

const content = document.querySelector(".content");
const attribution = document.querySelector(".attribution");

const photoFuncs = (function photoFuncs() {
  function _makeAttribution(name, profile, img) {
    const profLink = document.createElement("a");
    profLink.href = profile;
    profLink.textContent = name;

    const imgLink = document.createElement("a");
    imgLink.href = img;
    imgLink.textContent = "Unsplash";

    const onText = document.createElement("span");
    onText.textContent = " on ";

    attribution.textContent = "Photo by ";
    attribution.appendChild(profLink);
    attribution.appendChild(onText);
    attribution.appendChild(imgLink);
  }

  function bgChange(pic) {
    const oldbg = document.querySelector("img.visible");
    const newbg = document.querySelector("img.hidden");
    newbg.src = pic;

    oldbg.classList.add("hidden");
    oldbg.classList.remove("visible");

    newbg.classList.add("visible");
    newbg.classList.remove("hidden");
  }

  // Guide to weather conditions by id: https://openweathermap.org/weather-conditions
  function choosePhoto(id) {
    if (id >= 200 && id <= 232) {
      // Thunderstorm
      bgChange(thunderstorm);
      _makeAttribution(
        "Cooper Baumgartner",
        "https://unsplash.com/@cooper_baumgartner",
        "https://unsplash.com/photos/1N8iqSsn7ls"
      );
    } else if (id >= 300 && id <= 531) {
      // Drizzle and rain
      bgChange(rain);
      _makeAttribution(
        "Osman Rana",
        "https://unsplash.com/@osmanrana",
        "https://unsplash.com/photos/GXEZuWo5m4I"
      );
    } else if (id >= 600 && id <= 622) {
      // Snow
      bgChange(snow);
      _makeAttribution(
        "Ant Rozetsky",
        "https://unsplash.com/@rozetsky",
        "https://unsplash.com/photos/H9m6mfeeakU"
      );
    } else if (id >= 701 && id <= 781) {
      // Haze
      bgChange(haze);
      _makeAttribution(
        "Damon Lam",
        "https://unsplash.com/@dayday95",
        "https://unsplash.com/photos/M6PJrAd26M0"
      );
    } else if (id === 800) {
      // Clear
      bgChange(clear);
      _makeAttribution(
        "Cate Bligh",
        "https://unsplash.com/@catebligh",
        "https://unsplash.com/photos/lX5wMeZUidA"
      );
    } else if (id >= 801 && id <= 804) {
      bgChange(clouds);
      _makeAttribution(
        "Chaz McGregor",
        "https://unsplash.com/@chazmcgregor",
        "https://unsplash.com/photos/GKN6rpDr0EI"
      );
    }
  }

  return {
    bgChange,
    choosePhoto,
  };
})();

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

    photoFuncs.choosePhoto(weather.id);
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
