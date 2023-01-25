/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./fonts/Roboto/Roboto-Regular.ttf */ "./src/fonts/Roboto/Roboto-Regular.ttf"
          ),
          __webpack_require__.b
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@font-face {\n  font-family: Roboto;\n  src: url(" +
            ___CSS_LOADER_URL_REPLACEMENT_0___ +
            ');\n  font-weight: 400;\n  font-style: normal;\n}\n\nbutton {\n  border: none;\n  display: inline-block;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n  overflow: hidden;\n}\n\n.hidden{\n  opacity: 0;\n}\n\n.visible{\n  opacity: 1;\n}\n\n.bg-img {\n  transition: opacity 1s linear;\n  max-width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 0;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 33%;\n}\n\n.content {\n  color: rgb(255, 255, 255);\n  width: 515px;\n  box-sizing: border-box;\n  visibility: hidden;\n  background-color: #ffffff22;\n  border-radius: 10px;\n  padding: 10px;\n  backdrop-filter: blur(8px) invert(15%);\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n\nform {\n  display: flex;\n  margin: 10px;\n}\n\n#search {\n  border: none;\n  padding: 15px;\n  width: 440px;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n#search:focus {\n  box-sizing: border-box;\n  border: 1px solid #f25d45;\n  outline: none;\n}\n\n#submit {\n  cursor: pointer;\n  font-size: 14px;\n  height: 32px;\n  width: 75px;\n  margin: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #f25d45;\n  color: #ffeaea;\n}\n\n#submit:hover {\n  background-color: #ff6d57;\n}\n\n.attribution{\n  font-size: 14px;\n  color: white;\n  position: absolute;\n  right: 2px;\n  bottom: 0px;\n  backdrop-filter: blur(10px) invert(15%);\n  padding: 3px;\n}\n\n.attribution a{\n  color: white;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,mBAAmB;EACnB,4CAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,2BAA2B;EAC3B,mBAAmB;EACnB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB;;0BAEwB;AAC1B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR;;sCAEoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb;;+BAE6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,SAAS;EACT,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,WAAW;EACX,SAAS;EACT,4BAA4B;EAC5B,+BAA+B;EAC/B,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,uCAAuC;EACvC,YAAY;AACd;;AAEA;EACE,YAAY;AACd",
            sourcesContent: [
              '@font-face {\n  font-family: Roboto;\n  src: url("./fonts/Roboto/Roboto-Regular.ttf");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbutton {\n  border: none;\n  display: inline-block;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n  overflow: hidden;\n}\n\n.hidden{\n  opacity: 0;\n}\n\n.visible{\n  opacity: 1;\n}\n\n.bg-img {\n  transition: opacity 1s linear;\n  max-width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 0;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 33%;\n}\n\n.content {\n  color: rgb(255, 255, 255);\n  width: 515px;\n  box-sizing: border-box;\n  visibility: hidden;\n  background-color: #ffffff22;\n  border-radius: 10px;\n  padding: 10px;\n  backdrop-filter: blur(8px) invert(15%);\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n\nform {\n  display: flex;\n  margin: 10px;\n}\n\n#search {\n  border: none;\n  padding: 15px;\n  width: 440px;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n#search:focus {\n  box-sizing: border-box;\n  border: 1px solid #f25d45;\n  outline: none;\n}\n\n#submit {\n  cursor: pointer;\n  font-size: 14px;\n  height: 32px;\n  width: 75px;\n  margin: 0;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #f25d45;\n  color: #ffeaea;\n}\n\n#submit:hover {\n  background-color: #ff6d57;\n}\n\n.attribution{\n  font-size: 14px;\n  color: white;\n  position: absolute;\n  right: 2px;\n  bottom: 0px;\n  backdrop-filter: blur(10px) invert(15%);\n  padding: 3px;\n}\n\n.attribution a{\n  color: white;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        module.exports = function (cssWithMappingToString) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = "";
              var needLayer = typeof item[5] !== "undefined";
              if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
              }
              if (item[2]) {
                content += "@media ".concat(item[2], " {");
              }
              if (needLayer) {
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {"
                );
              }
              content += cssWithMappingToString(item);
              if (needLayer) {
                content += "}";
              }
              if (item[2]) {
                content += "}";
              }
              if (item[4]) {
                content += "}";
              }
              return content;
            }).join("");
          };

          // import a list of modules into the list
          list.i = function i(modules, media, dedupe, supports, layer) {
            if (typeof modules === "string") {
              modules = [[null, modules, undefined]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _k = 0; _k < modules.length; _k++) {
              var item = [].concat(modules[_k]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                  item[5] = layer;
                } else {
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        module.exports = function (url, options) {
          if (!options) {
            options = {};
          }
          if (!url) {
            return url;
          }
          url = String(url.__esModule ? url.default : url);

          // If url is already wrapped in quotes, remove them
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          if (options.hash) {
            url += options.hash;
          }

          // Should url be wrapped?
          // See https://drafts.csswg.org/css-values-3/#urls
          if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"'
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping)))
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/imgs/ant-rozetsky-H9m6mfeeakU-unsplash.jpg":
      /*!********************************************************!*\
  !*** ./src/imgs/ant-rozetsky-H9m6mfeeakU-unsplash.jpg ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p + "f7ea80092ba02e09780a5b29a9843271.jpg";

        /***/
      },

    /***/ "./src/imgs/cate-bligh-lX5wMeZUidA-unsplash.jpg":
      /*!******************************************************!*\
  !*** ./src/imgs/cate-bligh-lX5wMeZUidA-unsplash.jpg ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p + "b3dcd1be902bca6d4301acab0f525cb6.jpg";

        /***/
      },

    /***/ "./src/imgs/chaz-mcgregor-GKN6rpDr0EI-unsplash.jpg":
      /*!*********************************************************!*\
  !*** ./src/imgs/chaz-mcgregor-GKN6rpDr0EI-unsplash.jpg ***!
  \*********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p + "37f694523e14045b1322a090651e1055.jpg";

        /***/
      },

    /***/ "./src/imgs/cooper-baumgartner-1N8iqSsn7ls-unsplash.jpg":
      /*!**************************************************************!*\
  !*** ./src/imgs/cooper-baumgartner-1N8iqSsn7ls-unsplash.jpg ***!
  \**************************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p + "16654a8a3dfcf3a9da8fabf70f67ac7c.jpg";

        /***/
      },

    /***/ "./src/imgs/damon-lam-M6PJrAd26M0-unsplash.jpg":
      /*!*****************************************************!*\
  !*** ./src/imgs/damon-lam-M6PJrAd26M0-unsplash.jpg ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p + "ce0ba4829022032e076aa2b27b2f4244.jpg";

        /***/
      },

    /***/ "./src/imgs/osman-rana-GXEZuWo5m4I-unsplash.jpg":
      /*!******************************************************!*\
  !*** ./src/imgs/osman-rana-GXEZuWo5m4I-unsplash.jpg ***!
  \******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          __webpack_require__.p + "6a2d652bba920c28881f0cd892819a82.jpg";

        /***/
      },

    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();

        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head"
          );

        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        var stylesInDOM = [];

        function getIndexByIdentifier(identifier) {
          var result = -1;

          for (var i = 0; i < stylesInDOM.length; i++) {
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          }

          return result;
        }

        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3],
              supports: item[4],
              layer: item[5],
            };

            if (indexByIdentifier !== -1) {
              stylesInDOM[indexByIdentifier].references++;
              stylesInDOM[indexByIdentifier].updater(obj);
            } else {
              var updater = addElementStyle(obj, options);
              options.byIndex = i;
              stylesInDOM.splice(i, 0, {
                identifier: identifier,
                updater: updater,
                references: 1,
              });
            }

            identifiers.push(identifier);
          }

          return identifiers;
        }

        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);

          var updater = function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }

              api.update((obj = newObj));
            } else {
              api.remove();
            }
          };

          return updater;
        }

        module.exports = function (list, options) {
          options = options || {};
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];

            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index = getIndexByIdentifier(identifier);
              stylesInDOM[index].references--;
            }

            var newLastIdentifiers = modulesToDom(newList, options);

            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];

              var _index = getIndexByIdentifier(_identifier);

              if (stylesInDOM[_index].references === 0) {
                stylesInDOM[_index].updater();

                stylesInDOM.splice(_index, 1);
              }
            }

            lastIdentifiers = newLastIdentifiers;
          };
        };

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};
        /* istanbul ignore next  */

        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        }
        /* istanbul ignore next  */

        function insertBySelector(insert, style) {
          var target = getTarget(insert);

          if (!target) {
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          }

          target.appendChild(style);
        }

        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }

        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;

          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }

        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function apply(styleElement, options, obj) {
          var css = "";

          if (obj.supports) {
            css += "@supports (".concat(obj.supports, ") {");
          }

          if (obj.media) {
            css += "@media ".concat(obj.media, " {");
          }

          var needLayer = typeof obj.layer !== "undefined";

          if (needLayer) {
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {"
            );
          }

          css += obj.css;

          if (needLayer) {
            css += "}";
          }

          if (obj.media) {
            css += "}";
          }

          if (obj.supports) {
            css += "}";
          }

          var sourceMap = obj.sourceMap;

          if (sourceMap && typeof btoa !== "undefined") {
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */"
              );
          } // For old IE

          /* istanbul ignore if  */

          options.styleTagTransform(css, styleElement, options.options);
        }

        function removeStyleElement(styleElement) {
          // istanbul ignore if
          if (styleElement.parentNode === null) {
            return false;
          }

          styleElement.parentNode.removeChild(styleElement);
        }
        /* istanbul ignore next  */

        function domAPI(options) {
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }

        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = css;
          } else {
            while (styleElement.firstChild) {
              styleElement.removeChild(styleElement.firstChild);
            }

            styleElement.appendChild(document.createTextNode(css));
          }
        }

        module.exports = styleTagTransform;

        /***/
      },

    /***/ "./src/DOMUpdate.js":
      /*!**************************!*\
  !*** ./src/DOMUpdate.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _imgs_cate_bligh_lX5wMeZUidA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./imgs/cate-bligh-lX5wMeZUidA-unsplash.jpg */ "./src/imgs/cate-bligh-lX5wMeZUidA-unsplash.jpg"
          );
        /* harmony import */ var _imgs_osman_rana_GXEZuWo5m4I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./imgs/osman-rana-GXEZuWo5m4I-unsplash.jpg */ "./src/imgs/osman-rana-GXEZuWo5m4I-unsplash.jpg"
          );
        /* harmony import */ var _imgs_damon_lam_M6PJrAd26M0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./imgs/damon-lam-M6PJrAd26M0-unsplash.jpg */ "./src/imgs/damon-lam-M6PJrAd26M0-unsplash.jpg"
          );
        /* harmony import */ var _imgs_cooper_baumgartner_1N8iqSsn7ls_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./imgs/cooper-baumgartner-1N8iqSsn7ls-unsplash.jpg */ "./src/imgs/cooper-baumgartner-1N8iqSsn7ls-unsplash.jpg"
          );
        /* harmony import */ var _imgs_ant_rozetsky_H9m6mfeeakU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./imgs/ant-rozetsky-H9m6mfeeakU-unsplash.jpg */ "./src/imgs/ant-rozetsky-H9m6mfeeakU-unsplash.jpg"
          );
        /* harmony import */ var _imgs_chaz_mcgregor_GKN6rpDr0EI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./imgs/chaz-mcgregor-GKN6rpDr0EI-unsplash.jpg */ "./src/imgs/chaz-mcgregor-GKN6rpDr0EI-unsplash.jpg"
          );
        /* eslint-disable no-underscore-dangle */

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
              bgChange(
                _imgs_cooper_baumgartner_1N8iqSsn7ls_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__[
                  "default"
                ]
              );
              _makeAttribution(
                "Cooper Baumgartner",
                "https://unsplash.com/@cooper_baumgartner",
                "https://unsplash.com/photos/1N8iqSsn7ls"
              );
            } else if (id >= 300 && id <= 531) {
              // Drizzle and rain
              bgChange(
                _imgs_osman_rana_GXEZuWo5m4I_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[
                  "default"
                ]
              );
              _makeAttribution(
                "Osman Rana",
                "https://unsplash.com/@osmanrana",
                "https://unsplash.com/photos/GXEZuWo5m4I"
              );
            } else if (id >= 600 && id <= 622) {
              // Snow
              bgChange(
                _imgs_ant_rozetsky_H9m6mfeeakU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              );
              _makeAttribution(
                "Ant Rozetsky",
                "https://unsplash.com/@rozetsky",
                "https://unsplash.com/photos/H9m6mfeeakU"
              );
            } else if (id >= 701 && id <= 781) {
              // Haze
              bgChange(
                _imgs_damon_lam_M6PJrAd26M0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__[
                  "default"
                ]
              );
              _makeAttribution(
                "Damon Lam",
                "https://unsplash.com/@dayday95",
                "https://unsplash.com/photos/M6PJrAd26M0"
              );
            } else if (id === 800) {
              // Clear
              bgChange(
                _imgs_cate_bligh_lX5wMeZUidA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ]
              );
              _makeAttribution(
                "Cate Bligh",
                "https://unsplash.com/@catebligh",
                "https://unsplash.com/photos/lX5wMeZUidA"
              );
            } else if (id >= 801 && id <= 804) {
              bgChange(
                _imgs_chaz_mcgregor_GKN6rpDr0EI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__[
                  "default"
                ]
              );
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

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          EltCreator;

        /***/
      },

    /***/ "./src/retrieve.js":
      /*!*************************!*\
  !*** ./src/retrieve.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
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

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          Retrieval;

        /***/
      },

    /***/ "./src/fonts/Roboto/Roboto-Regular.ttf":
      /*!*********************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Regular.ttf ***!
  \*********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
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
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
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
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ index: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./retrieve */ "./src/retrieve.js");
    /* harmony import */ var _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./DOMUpdate */ "./src/DOMUpdate.js");

    const search = document.querySelector("#search");
    const submitBtn = document.querySelector("#submit");
    const content = document.querySelector(".content");

    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      content.textContent = "";
      const location = search.value;

      // Retrieval.searchLocation fetches a list of locations matching the search criteria and returns a promise
      _retrieve__WEBPACK_IMPORTED_MODULE_1__["default"]
        .searchLocation(location)
        .then((searchVal) => {
          if (typeof searchVal === "string") {
            _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].displayError(
              searchVal
            );
          } else if (searchVal.length === 0) {
            _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].displayError(
              "No data for that location."
            );
          } else {
            _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createMenu(
              searchVal
            );

            const menuItems = document.querySelectorAll(".location-container");

            menuItems.forEach((item) => {
              item.addEventListener("click", () => {
                const { index } = item.dataset;
                const selected = searchVal[index];

                // Retrieval.getWeather fetches the weather data for the selected location and returns a promise
                _retrieve__WEBPACK_IMPORTED_MODULE_1__["default"]
                  .getWeather(selected)
                  .then((weatherData) => {
                    _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ].createWeatherDisp(weatherData, selected);
                  });
              });
            });
          }
          // errors from Retrieval.searchLocation
        });
    });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ltZ3MvYW50LXJvemV0c2t5LUg5bTZtZmVlYWtVLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbWdzL2NhdGUtYmxpZ2gtbFg1d01lWlVpZEEtdW5zcGxhc2guanBnIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ltZ3MvY2hhei1tY2dyZWdvci1HS042cnBEcjBFSS11bnNwbGFzaC5qcGciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW1ncy9jb29wZXItYmF1bWdhcnRuZXItMU44aXFTc243bHMtdW5zcGxhc2guanBnIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ltZ3MvZGFtb24tbGFtLU02UEpyQWQyNk0wLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbWdzL29zbWFuLXJhbmEtR1hFWnVXbzVtNEktdW5zcGxhc2guanBnIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NVXBkYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnZpc2libGV7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uYmctaW1nIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uY29udGVudC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzMlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgd2lkdGg6IDUxNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCkgaW52ZXJ0KDE1JSk7XFxufVxcblxcbi5sb2NhdGlvbi1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgbWFyZ2luOiA4cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkNWFhO1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtYXJlYTogbmFtZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNpdHktbG9jYXRpb24ge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLndlYXRoZXItd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwidGVtcCBtYWluLXdyYXBcXFwiIDFmclxcbiAgICBcXFwiZGVzYyAuXFxcIiAxZnIgLyAxZnIgMWZyO1xcbn1cXG5cXG4uY2l0eS1sYXQge1xcbiAgZ3JpZC1hcmVhOiBsYXQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5jaXR5LWxvbiB7XFxuICBncmlkLWFyZWE6IGxvbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiA0cHg7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwibmFtZSAuIGxhdFxcXCIgMWZyXFxuICAgIFxcXCJsb2NhdGlvbiAuIGxvblxcXCIgMWZyIC8gMWZyIDFmciAxZnI7XFxufVxcblxcbi53ZWF0aGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uZGVzYy13cmFwIHtcXG4gIGdyaWQtYXJlYTogZGVzYztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwiaWNvbiBtYWluLXdlYXRoZXJcXFwiIDhmclxcbiAgICBcXFwiaWNvbiBkZXRhaWxcXFwiIDdmciAvIDFmciAyZnI7XFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjLW1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdlYXRoZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5kZXNjLWRldGFpbCB7XFxuICBncmlkLWFyZWE6IGRldGFpbDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubWFpbi13cmFwIHtcXG4gIGdyaWQtYXJlYTogbWFpbi13cmFwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRlbXAge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xcbiAgZm9udC1zaXplOiA1MnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLm1pbi10ZW1wIHtcXG4gIGdyaWQtYXJlYTogbWluO1xcbn1cXG5cXG4ubWF4LXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtYXg7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3NlYXJjaCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDQ0MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3NlYXJjaDpmb2N1cyB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyNWQ0NTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjVkNDU7XFxuICBjb2xvcjogI2ZmZWFlYTtcXG59XFxuXFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2ZDU3O1xcbn1cXG5cXG4uYXR0cmlidXRpb257XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMnB4O1xcbiAgYm90dG9tOiAwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgaW52ZXJ0KDE1JSk7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbi5hdHRyaWJ1dGlvbiBhe1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1Qjs7RUFFdkI7OzBCQUV3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSOztzQ0FFb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2I7OytCQUU2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHVDQUF1QztFQUN2QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oaWRkZW57XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udmlzaWJsZXtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5iZy1pbWcge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMyU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB3aWR0aDogNTE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjIyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KSBpbnZlcnQoMTUlKTtcXG59XFxuXFxuLmxvY2F0aW9uLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWQ1YWE7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2l0eS1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ud2VhdGhlci13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ0ZW1wIG1haW4td3JhcFxcXCIgMWZyXFxuICAgIFxcXCJkZXNjIC5cXFwiIDFmciAvIDFmciAxZnI7XFxufVxcblxcbi5jaXR5LWxhdCB7XFxuICBncmlkLWFyZWE6IGxhdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpdHktbG9uIHtcXG4gIGdyaWQtYXJlYTogbG9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDRweDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJuYW1lIC4gbGF0XFxcIiAxZnJcXG4gICAgXFxcImxvY2F0aW9uIC4gbG9uXFxcIiAxZnIgLyAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLndlYXRoZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5kZXNjLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJpY29uIG1haW4td2VhdGhlclxcXCIgOGZyXFxuICAgIFxcXCJpY29uIGRldGFpbFxcXCIgN2ZyIC8gMWZyIDJmcjtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2MtbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW4td2VhdGhlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRlc2MtZGV0YWlsIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYWluLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtaW47XFxufVxcblxcbi5tYXgtdGVtcCB7XFxuICBncmlkLWFyZWE6IG1heDtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jc2VhcmNoIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogNDQwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4jc2VhcmNoOmZvY3VzIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjI1ZDQ1O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI3N1Ym1pdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICB3aWR0aDogNzVweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyNWQ0NTtcXG4gIGNvbG9yOiAjZmZlYWVhO1xcbn1cXG5cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZkNTc7XFxufVxcblxcbi5hdHRyaWJ1dGlvbntcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAycHg7XFxuICBib3R0b206IDBweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBpbnZlcnQoMTUlKTtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuXFxuLmF0dHJpYnV0aW9uIGF7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmN2VhODAwOTJiYTAyZTA5NzgwYTViMjlhOTg0MzI3MS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjNkY2QxYmU5MDJiY2E2ZDQzMDFhY2FiMGY1MjVjYjYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZjY5NDUyM2UxNDA0NWIxMzIyYTA5MDY1MWUxMDU1LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxNjY1NGE4YTNkZmNmM2E5ZGE4ZmFiZjcwZjY3YWM3Yy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2UwYmE0ODI5MDIyMDMyZTA3NmFhMmIyN2IyZjQyNDQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZhMmQ2NTJiYmE5MjBjMjg4ODFmMGNkODkyODE5YTgyLmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IGNsZWFyIGZyb20gJy4vaW1ncy9jYXRlLWJsaWdoLWxYNXdNZVpVaWRBLXVuc3BsYXNoLmpwZydcbmltcG9ydCByYWluIGZyb20gJy4vaW1ncy9vc21hbi1yYW5hLUdYRVp1V281bTRJLXVuc3BsYXNoLmpwZyc7XG5pbXBvcnQgaGF6ZSBmcm9tICcuL2ltZ3MvZGFtb24tbGFtLU02UEpyQWQyNk0wLXVuc3BsYXNoLmpwZyc7XG5pbXBvcnQgdGh1bmRlcnN0b3JtIGZyb20gJy4vaW1ncy9jb29wZXItYmF1bWdhcnRuZXItMU44aXFTc243bHMtdW5zcGxhc2guanBnJztcbmltcG9ydCBzbm93IGZyb20gJy4vaW1ncy9hbnQtcm96ZXRza3ktSDltNm1mZWVha1UtdW5zcGxhc2guanBnJztcbmltcG9ydCBjbG91ZHMgZnJvbSAnLi9pbWdzL2NoYXotbWNncmVnb3ItR0tONnJwRHIwRUktdW5zcGxhc2guanBnJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IGF0dHJpYnV0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdHRyaWJ1dGlvblwiKTtcblxuXG5jb25zdCBwaG90b0Z1bmNzID0gKGZ1bmN0aW9uIHBob3RvRnVuY3MoKXtcblxuICBmdW5jdGlvbiBfbWFrZUF0dHJpYnV0aW9uKG5hbWUsIHByb2ZpbGUsIGltZyl7XG4gICAgY29uc3QgcHJvZkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBwcm9mTGluay5ocmVmID0gcHJvZmlsZTtcbiAgICBwcm9mTGluay50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBpbWdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgaW1nTGluay5ocmVmID0gaW1nO1xuICAgIGltZ0xpbmsudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG5cbiAgICBjb25zdCBvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBvblRleHQudGV4dENvbnRlbnQgPSBcIiBvbiBcIjtcblxuICAgIGF0dHJpYnV0aW9uLnRleHRDb250ZW50ID0gXCJQaG90byBieSBcIjtcbiAgICBhdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChwcm9mTGluayk7XG4gICAgYXR0cmlidXRpb24uYXBwZW5kQ2hpbGQob25UZXh0KTtcbiAgICBhdHRyaWJ1dGlvbi5hcHBlbmRDaGlsZChpbWdMaW5rKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gYmdDaGFuZ2UocGljKXtcbiAgICBjb25zdCBvbGRiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWcudmlzaWJsZVwiKTtcbiAgICBjb25zdCBuZXdiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWcuaGlkZGVuXCIpO1xuICAgIG5ld2JnLnNyYyA9IHBpYztcblxuICAgIG9sZGJnLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgb2xkYmcuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIilcblxuICAgIG5ld2JnLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIG5ld2JnLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7IFxuICAgIFxuICB9XG5cbiAgICAvLyBHdWlkZSB0byB3ZWF0aGVyIGNvbmRpdGlvbnMgYnkgaWQ6IGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL3dlYXRoZXItY29uZGl0aW9uc1xuICAgIGZ1bmN0aW9uIGNob29zZVBob3RvKGlkKXtcblxuICAgICAgaWYoaWQ+PTIwMCAmJiBpZDw9MjMyKXsgLy8gVGh1bmRlcnN0b3JtXG4gICAgICAgIGJnQ2hhbmdlKHRodW5kZXJzdG9ybSk7XG4gICAgICAgIF9tYWtlQXR0cmlidXRpb24oXCJDb29wZXIgQmF1bWdhcnRuZXJcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY29vcGVyX2JhdW1nYXJ0bmVyXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzFOOGlxU3NuN2xzXCIpO1xuICAgICAgfWVsc2UgaWYoaWQ+PTMwMCAmJiBpZDw9NTMxKXsgLy8gRHJpenpsZSBhbmQgcmFpblxuICAgICAgICBiZ0NoYW5nZShyYWluKTtcbiAgICAgICAgX21ha2VBdHRyaWJ1dGlvbihcIk9zbWFuIFJhbmFcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3NtYW5yYW5hXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0dYRVp1V281bTRJXCIpO1xuICAgICAgfWVsc2UgaWYoaWQ+PTYwMCAmJiBpZDw9NjIyKXsgLy8gU25vd1xuICAgICAgICBiZ0NoYW5nZShzbm93KTtcbiAgICAgICAgX21ha2VBdHRyaWJ1dGlvbihcIkFudCBSb3pldHNreVwiLCBcImh0dHBzOi8vdW5zcGxhc2guY29tL0Byb3pldHNreVwiLCBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9IOW02bWZlZWFrVVwiKTtcbiAgICAgIH1lbHNlIGlmKGlkPj03MDEgJiYgaWQ8PTc4MSl7IC8vIEhhemVcbiAgICAgICAgYmdDaGFuZ2UoaGF6ZSk7XG4gICAgICAgIF9tYWtlQXR0cmlidXRpb24oXCJEYW1vbiBMYW1cIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZGF5ZGF5OTVcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTTZQSnJBZDI2TTBcIik7XG4gICAgICB9ZWxzZSBpZihpZD09PTgwMCl7IC8vIENsZWFyXG4gICAgICAgIGJnQ2hhbmdlKGNsZWFyKTtcbiAgICAgICAgX21ha2VBdHRyaWJ1dGlvbihcIkNhdGUgQmxpZ2hcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY2F0ZWJsaWdoXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2xYNXdNZVpVaWRBXCIpO1xuICAgICAgfWVsc2UgaWYoaWQ+PTgwMSAmJiBpZDw9ODA0KXtcbiAgICAgICAgYmdDaGFuZ2UoY2xvdWRzKTtcbiAgICAgICAgX21ha2VBdHRyaWJ1dGlvbihcIkNoYXogTWNHcmVnb3JcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AY2hhem1jZ3JlZ29yXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0dLTjZycERyMEVJXCIpO1xuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4ge1xuICAgIGJnQ2hhbmdlLFxuICAgIGNob29zZVBob3RvLFxuICB9XG5cbn0pKCk7XG5cbmNvbnN0IEVsdENyZWF0b3IgPSAoZnVuY3Rpb24gRWx0Q3JlYXRvcigpIHtcbiAgLy8gY3JlYXRlIGxvY2F0aW9uIG1lbnUgaXRlbVxuICBmdW5jdGlvbiBfbWFrZU9wdGlvbihsb2NhdGlvbiwgaW5kZXgpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tY29udGFpbmVyXCIpO1xuICAgIGl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZChcImNpdHktbmFtZVwiKTtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICAvLyBzdGF0ZSAoaWYgYXBwbGljYWJsZSkgYW5kIGNvdW50cnlcbiAgICBjb25zdCBjaXR5TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2l0eS1sb2NhdGlvblwiKTtcblxuICAgIGlmIChsb2NhdGlvbi5zdGF0ZSkge1xuICAgICAgY2l0eUxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24uc3RhdGV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2l0eUxvY2F0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb24uY291bnRyeTtcbiAgICB9XG5cbiAgICBjb25zdCByb3VuZExhdCA9IGxvY2F0aW9uLmxhdC50b0ZpeGVkKDQpO1xuICAgIGNvbnN0IGNpdHlMYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlMYXQuY2xhc3NMaXN0LmFkZChcImNpdHktbGF0XCIpO1xuICAgIGNpdHlMYXQudGV4dENvbnRlbnQgPSBgbGF0OiAke3JvdW5kTGF0fWA7XG5cbiAgICBjb25zdCByb3VuZExvbiA9IGxvY2F0aW9uLmxvbi50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IGNpdHlMb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlMb24uY2xhc3NMaXN0LmFkZChcImNpdHktbG9uXCIpO1xuICAgIGNpdHlMb24udGV4dENvbnRlbnQgPSBgbG9uOiAke3JvdW5kTG9ufWA7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlMYXQpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUxvY2F0aW9uKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlMb24pO1xuXG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH1cblxuICAvLyBjcmVhdGUgbG9jYXRpb24gbWVudVxuICBmdW5jdGlvbiBjcmVhdGVNZW51KGxvY2F0aW9ucykge1xuICAgIGNvbnN0IGxvY2F0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsb2NhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWxpc3RcIik7XG4gICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbG9jYXRpb25zLmluZGV4T2YobG9jYXRpb24pO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbkl0ZW0gPSBfbWFrZU9wdGlvbihsb2NhdGlvbiwgaW5kZXgpO1xuICAgICAgbG9jYXRpb25MaXN0LmFwcGVuZENoaWxkKGxvY2F0aW9uSXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyRGlzcCh3ZWF0aGVyTG9jLCBzZWFyY2hMb2MpIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgIC8vIGluZm9ybWF0aW9uIGZyb20gdGhlICd3ZWF0aGVyJyBzZWN0aW9uIG9mIHRoZSBvcGVud2VhdGhlcm1hcCBkYXRhXG4gICAgY29uc3Qgd2VhdGhlciA9IHdlYXRoZXJMb2Mud2VhdGhlclswXTtcblxuICAgIC8vIGluZm9ybWF0aW9uIGZyb20gdGhlICdtYWluJyBzZWN0aW9uIG9mIHRoZSBvcGVud2VhdGhlcm1hcCBkYXRhXG4gICAgY29uc3QgZGF0YU1haW4gPSB3ZWF0aGVyTG9jLm1haW47XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItdGl0bGVcIik7XG5cbiAgICBpZiAoc2VhcmNoTG9jLnN0YXRlKSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NlYXJjaExvYy5uYW1lfSwgJHtzZWFyY2hMb2Muc3RhdGV9LCAke3NlYXJjaExvYy5jb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c2VhcmNoTG9jLm5hbWV9LCAke3NlYXJjaExvYy5jb3VudHJ5fWA7XG4gICAgfVxuXG4gICAgY29uc3Qgd2VhdGhlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJXcmFwLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLXdyYXBcIik7XG5cbiAgICBjb25zdCBkZXNjV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY1dyYXAuY2xhc3NMaXN0LmFkZChcImRlc2Mtd3JhcFwiKTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaWNvblwiKTtcbiAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXIuaWNvbn1AMngucG5nYDtcblxuICAgIGNvbnN0IGRlc2NNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY01haW4uY2xhc3NMaXN0LmFkZChcImRlc2MtbWFpblwiKTtcbiAgICBkZXNjTWFpbi50ZXh0Q29udGVudCA9IHdlYXRoZXIubWFpbjtcblxuICAgIGNvbnN0IGRlc2NEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjRGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJkZXNjLWRldGFpbFwiKTtcbiAgICBkZXNjRGV0YWlsLnRleHRDb250ZW50ID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcblxuICAgIGRlc2NXcmFwLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGRlc2NXcmFwLmFwcGVuZENoaWxkKGRlc2NNYWluKTtcbiAgICBkZXNjV3JhcC5hcHBlbmRDaGlsZChkZXNjRGV0YWlsKTtcblxuICAgIGNvbnN0IG1haW5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluV3JhcC5jbGFzc0xpc3QuYWRkKFwibWFpbi13cmFwXCIpO1xuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGFNYWluLnRlbXAudG9GaXhlZCgxKX3CsEZgO1xuXG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wXCIpO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgTG93OiAke2RhdGFNYWluLnRlbXBfbWluLnRvRml4ZWQoMSl9wrBGYDtcblxuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJtYXgtdGVtcFwiKTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYE1heDogJHtkYXRhTWFpbi50ZW1wX21heC50b0ZpeGVkKDEpfcKwRmA7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImZlZWxzLWxpa2VcIik7XG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YU1haW4uZmVlbHNfbGlrZX3CsEZgO1xuXG4gICAgY29uc3Qgb3RoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdGhlckluZm8uY2xhc3NMaXN0LmFkZChcIm90aGVyLWluZm9cIik7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmQtc3BlZWRcIik7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlckxvYy53aW5kLnNwZWVkfSBtcGhgO1xuXG4gICAgY29uc3QgcHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmVzcy5jbGFzc0xpc3QuYWRkKFwicHJlc3N1cmVcIik7XG4gICAgcHJlc3MudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7ZGF0YU1haW4ucHJlc3N1cmV9IGhQYWA7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhTWFpbi5odW1pZGl0eX0lYDtcblxuICAgIG90aGVySW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICAgIG90aGVySW5mby5hcHBlbmRDaGlsZChwcmVzcyk7XG4gICAgb3RoZXJJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKG1heFRlbXApO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJXcmFwKTtcbiAgICB3ZWF0aGVyV3JhcC5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICB3ZWF0aGVyV3JhcC5hcHBlbmRDaGlsZChtYWluV3JhcCk7XG4gICAgd2VhdGhlcldyYXAuYXBwZW5kQ2hpbGQoZGVzY1dyYXApO1xuICAgIHdlYXRoZXJXcmFwLmFwcGVuZENoaWxkKG90aGVySW5mbyk7XG5cbiAgICBwaG90b0Z1bmNzLmNob29zZVBob3RvKHdlYXRoZXIuaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUVycm9yKGVycm9yVGV4dCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBlcnJvclRleHQ7XG4gICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZU1lbnUsXG4gICAgY3JlYXRlV2VhdGhlckRpc3AsXG4gICAgZGlzcGxheUVycm9yLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRWx0Q3JlYXRvcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jb25zdCBSZXRyaWV2YWwgPSAoZnVuY3Rpb24gUmV0cmlldmFsKCkge1xuICBmdW5jdGlvbiBfbWFrZVBsdXNlcyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2VBbGwoXCIgXCIsIFwiK1wiKTtcbiAgfVxuXG4gIC8vIEdlb2NvZGluZyBkb2N1bWVudGF0aW9uIGxvY2F0ZWQgaGVyZTogaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvYXBpL2dlb2NvZGluZy1hcGlcbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoTG9jYXRpb24obG9jYWwsIHN0YXRlID0gXCJcIiwgY291bnRyeSA9IFwiXCIpIHtcbiAgICBjb25zdCBzdGF0ZUNvZGUgPSBfbWFrZVBsdXNlcyhzdGF0ZSk7XG4gICAgY29uc3QgY291bnRyeUNvZGUgPSBfbWFrZVBsdXNlcyhjb3VudHJ5KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2FsfSwke3N0YXRlQ29kZX0sJHtjb3VudHJ5Q29kZX0mbGltaXQ9NSZhcHBpZD1hYTNiZGM5OWI3YjdlZTZmZGMzODVkMjFiN2IzZmU5OWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBnZW9EYXRhO1xuICAgIH1cblxuICAgIHJldHVybiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHNlYXJjaCB0ZXJtXCI7XG4gIH1cblxuICAvLyBjdXJyZW50IHdlYXRoZXIgZG9jdW1lbnRhdGlvbiBoZXJlOiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9jdXJyZW50XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBsb2NhdGlvbjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWFhM2JkYzk5YjdiN2VlNmZkYzM4NWQyMWI3YjNmZTk5JnVuaXRzPWltcGVyaWFsYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hMb2NhdGlvbixcbiAgICBnZXRXZWF0aGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUmV0cmlldmFsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFJldHJpZXZhbCBmcm9tIFwiLi9yZXRyaWV2ZVwiO1xuaW1wb3J0IEVsdENyZWF0b3IgZnJvbSBcIi4vRE9NVXBkYXRlXCI7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2gudmFsdWU7XG5cbiAgLy8gUmV0cmlldmFsLnNlYXJjaExvY2F0aW9uIGZldGNoZXMgYSBsaXN0IG9mIGxvY2F0aW9ucyBtYXRjaGluZyB0aGUgc2VhcmNoIGNyaXRlcmlhIGFuZCByZXR1cm5zIGEgcHJvbWlzZVxuICBSZXRyaWV2YWwuc2VhcmNoTG9jYXRpb24obG9jYXRpb24pLnRoZW4oKHNlYXJjaFZhbCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoVmFsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBFbHRDcmVhdG9yLmRpc3BsYXlFcnJvcihzZWFyY2hWYWwpO1xuICAgIH0gZWxzZSBpZiAoc2VhcmNoVmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgRWx0Q3JlYXRvci5kaXNwbGF5RXJyb3IoXCJObyBkYXRhIGZvciB0aGF0IGxvY2F0aW9uLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgRWx0Q3JlYXRvci5jcmVhdGVNZW51KHNlYXJjaFZhbCk7XG5cbiAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9jYXRpb24tY29udGFpbmVyXCIpO1xuXG4gICAgICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gaXRlbS5kYXRhc2V0O1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VhcmNoVmFsW2luZGV4XTtcblxuICAgICAgICAgIC8vIFJldHJpZXZhbC5nZXRXZWF0aGVyIGZldGNoZXMgdGhlIHdlYXRoZXIgZGF0YSBmb3IgdGhlIHNlbGVjdGVkIGxvY2F0aW9uIGFuZCByZXR1cm5zIGEgcHJvbWlzZVxuICAgICAgICAgIFJldHJpZXZhbC5nZXRXZWF0aGVyKHNlbGVjdGVkKS50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgRWx0Q3JlYXRvci5jcmVhdGVXZWF0aGVyRGlzcCh3ZWF0aGVyRGF0YSwgc2VsZWN0ZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBlcnJvcnMgZnJvbSBSZXRyaWV2YWwuc2VhcmNoTG9jYXRpb25cbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
