import "./style.css";
import Retrieval from "./retrieve";
import EltCreator from "./DOMUpdate";

const search = document.querySelector("#search");
const submitBtn = document.querySelector("#submit");
const content = document.querySelector(".content");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  content.textContent = "";
  const location = search.value;

  // Retrieval.searchLocation fetches a list of locations matching the search criteria and returns a promise
  Retrieval.searchLocation(location).then((searchVal) => {
    EltCreator.createMenu(searchVal);

    const menuItems = document.querySelectorAll(".location-container");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const { index } = item.dataset;
        const selected = searchVal[index];

        // Retrieval.getWeather fetches the weather data for the selected location and returns a promise
        Retrieval.getWeather(selected).then((weatherData) => {
          console.log(weatherData);
          EltCreator.createWeatherDisp(weatherData, selected);
        });
      });
    });
  });
});
