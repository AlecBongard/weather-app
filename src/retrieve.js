/* eslint-disable no-underscore-dangle */
const Retrieval = (function Retrieval() {
  function _makePluses(str) {
    return str.replaceAll(" ", "+");
  }

  // Geocoding documentation located here: https://openweathermap.org/api/geocoding-api
  async function searchLocation(local, state = "", country = "") {
    const stateCode = _makePluses(state);
    const countryCode = _makePluses(country);

    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${local},${stateCode},${countryCode}&limit=5&appid=aa3bdc99b7b7ee6fdc385d21b7b3fe99`,
      {
        mode: "cors",
      }
    );

    if (response.ok) {
      const geoData = await response.json();

      return geoData;
    }

    return "Please enter a valid search term";
  }

  // current weather documentation here: https://openweathermap.org/current
  async function getWeather(location) {
    const { lat, lon } = location;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aa3bdc99b7b7ee6fdc385d21b7b3fe99&units=imperial`,
      {
        mode: "cors",
      }
    );

    const weatherData = await response.json();

    return weatherData;
  }

  return {
    searchLocation,
    getWeather,
  };
})();

export default Retrieval;
