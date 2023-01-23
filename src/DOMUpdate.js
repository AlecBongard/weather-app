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

    if (location.state) {
      itemContainer.textContent = `${location.name}, ${location.state}, ${location.country}`;
    } else {
      itemContainer.textContent = `${location.name}, ${location.country}`;
    }

    listItem.appendChild(itemContainer);

    return listItem;
  }

  // create location menu
  function createMenu(locations) {
    const locationList = document.createElement("ul");
    locationList.classList.add("location-list");

    locations.forEach((location) => {
      console.log(location);
      const index = locations.indexOf(location);

      const locationItem = _makeOption(location, index);
      locationList.appendChild(locationItem);
    });

    content.appendChild(locationList);
  }

  function createWeatherDisp(weatherloc, searchLoc) {
    content.textContent = "";

    const dataWrap = document.createElement("div");
    const { temp } = weatherloc.main;

    dataWrap.textContent = `The temperature in ${searchLoc.name} is ${temp} degrees.`;

    content.appendChild(dataWrap);
  }

  return {
    createMenu,
    createWeatherDisp,
  };
})();

export default EltCreator;
