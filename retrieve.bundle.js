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

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Retrieval;

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxNQUFNLEdBQUcsVUFBVSxHQUFHLFlBQVk7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksV0FBVzs7QUFFdkI7QUFDQSw2REFBNkQsSUFBSSxPQUFPLElBQUk7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZXRyaWV2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jb25zdCBSZXRyaWV2YWwgPSAoZnVuY3Rpb24gUmV0cmlldmFsKCkge1xuICBmdW5jdGlvbiBfbWFrZVBsdXNlcyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2VBbGwoXCIgXCIsIFwiK1wiKTtcbiAgfVxuXG4gIC8vIEdlb2NvZGluZyBkb2N1bWVudGF0aW9uIGxvY2F0ZWQgaGVyZTogaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvYXBpL2dlb2NvZGluZy1hcGlcbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoTG9jYXRpb24obG9jYWwsIHN0YXRlID0gXCJcIiwgY291bnRyeSA9IFwiXCIpIHtcbiAgICBjb25zdCBzdGF0ZUNvZGUgPSBfbWFrZVBsdXNlcyhzdGF0ZSk7XG4gICAgY29uc3QgY291bnRyeUNvZGUgPSBfbWFrZVBsdXNlcyhjb3VudHJ5KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2FsfSwke3N0YXRlQ29kZX0sJHtjb3VudHJ5Q29kZX0mbGltaXQ9NSZhcHBpZD1hYTNiZGM5OWI3YjdlZTZmZGMzODVkMjFiN2IzZmU5OWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBnZW9EYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHNlYXJjaCB0ZXJtXCI7XG4gIH1cblxuICAvLyBjdXJyZW50IHdlYXRoZXIgZG9jdW1lbnRhdGlvbiBoZXJlOiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9jdXJyZW50XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBsb2NhdGlvbjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWFhM2JkYzk5YjdiN2VlNmZkYzM4NWQyMWI3YjNmZTk5JnVuaXRzPWltcGVyaWFsYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hMb2NhdGlvbixcbiAgICBnZXRXZWF0aGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUmV0cmlldmFsO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
