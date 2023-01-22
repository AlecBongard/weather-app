/* eslint-disable no-underscore-dangle */
const content = document.querySelector(".content");

const EltCreator = (function EltCreator() {
  // create location menu item
  function _makeOption(location) {
    const listItem = document.createElement("li");
    listItem.textContent = location.name;

    return listItem;
  }

  // create location menu
  function createMenu(locations) {
    const locationList = document.createElement("ul");

    locations.forEach((location) => {
      console.log(location);
      const locationItem = _makeOption(location);
      locationList.appendChild(locationItem);
    });

    content.appendChild(locationList);
  }

  return {
    createMenu,
  };
})();

export default EltCreator;
