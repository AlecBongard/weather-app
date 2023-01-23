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
    
    if(location.state){
        cityLocation.textContent = `${location.state}, ${location.country}`;
    }else{
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
