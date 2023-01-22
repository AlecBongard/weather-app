/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ // The require scope
  /******/ var __webpack_require__ = {};
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!*************************!*\
  !*** ./src/retrieve.js ***!
  \*************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
    /* harmony export */
  });
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

      const geoData = await response.json();

      return geoData;
    }

    // current weather documentation here: https://openweathermap.org/current
    async function getWeather(location) {
      const { lat, lon } = location;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aa3bdc99b7b7ee6fdc385d21b7b3fe99`,
        {
          mode: "cors",
        }
      );

      const weatherData = await response.json();
      console.log(weatherData);
    }

    return {
      searchLocation,
      getWeather,
    };
  })();

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Retrieval;

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVGQUF1RixNQUFNLEdBQUcsVUFBVSxHQUFHLFlBQVk7QUFDekg7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsVUFBVTs7QUFFekIsNEZBQTRGLElBQUksT0FBTyxJQUFJO0FBQzNHO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmNvbnN0IFJldHJpZXZhbCA9IChmdW5jdGlvbiBSZXRyaWV2YWwoKXtcblxuICAgIGZ1bmN0aW9uIF9tYWtlUGx1c2VzKHN0cil7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZUFsbChcIiBcIiwgXCIrXCIpO1xuICAgIH1cblxuXG4gICAgLy8gR2VvY29kaW5nIGRvY3VtZW50YXRpb24gbG9jYXRlZCBoZXJlOiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9hcGkvZ2VvY29kaW5nLWFwaVxuICAgIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKGxvY2FsLCBzdGF0ZT1cIlwiLCBjb3VudHJ5PVwiXCIpe1xuICAgICAgICBjb25zdCBzdGF0ZUNvZGUgPSBfbWFrZVBsdXNlcyhzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNvdW50cnlDb2RlID0gX21ha2VQbHVzZXMoY291bnRyeSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2FsfSwke3N0YXRlQ29kZX0sJHtjb3VudHJ5Q29kZX0mbGltaXQ9NSZhcHBpZD1hYTNiZGM5OWI3YjdlZTZmZGMzODVkMjFiN2IzZmU5OWAsIHtcbiAgICAgICAgICAgIG1vZGU6IFwiY29yc1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgcmV0dXJuIGdlb0RhdGE7XG4gICAgfVxuXG4gICAgLy8gY3VycmVudCB3ZWF0aGVyIGRvY3VtZW50YXRpb24gaGVyZTogaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvY3VycmVudFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pe1xuICAgICAgICBjb25zdCB7bGF0LCBsb259ID0gbG9jYXRpb247XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWFhM2JkYzk5YjdiN2VlNmZkYzM4NWQyMWI3YjNmZTk5YCwge1xuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlYXJjaExvY2F0aW9uLFxuICAgICAgICBnZXRXZWF0aGVyXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUmV0cmlldmFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
