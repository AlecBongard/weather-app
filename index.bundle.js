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
            ');\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content {\n  visibility: hidden;\n  background-color: #fafaf9;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,mBAAmB;EACnB,4CAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB;;0BAEwB;AAC1B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR;;sCAEoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb;;+BAE6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB",
            sourcesContent: [
              '@font-face {\n  font-family: Roboto;\n  src: url("./fonts/Roboto/Roboto-Regular.ttf");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content {\n  visibility: hidden;\n  background-color: #fafaf9;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n',
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
              console.log(location);
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

          return {
            createMenu,
            createWeatherDisp,
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

            const geoData = await response.json();

            return geoData;
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
                  console.log(weatherData);
                  _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__[
                    "default"
                  ].createWeatherDisp(weatherData, selected);
                });
            });
          });
        });
    });
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYztBQUNFOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGdFQUF3QjtBQUMxQixJQUFJLDZEQUFxQjs7QUFFekI7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCOztBQUVBO0FBQ0EsUUFBUSw0REFBb0I7QUFDNUI7QUFDQSxVQUFVLG9FQUE0QjtBQUN0QyxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET01VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWQ1YWE7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2l0eS1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ud2VhdGhlci13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ0ZW1wIG1haW4td3JhcFxcXCIgMWZyXFxuICAgIFxcXCJkZXNjIC5cXFwiIDFmciAvIDFmciAxZnI7XFxufVxcblxcbi5jaXR5LWxhdCB7XFxuICBncmlkLWFyZWE6IGxhdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpdHktbG9uIHtcXG4gIGdyaWQtYXJlYTogbG9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDRweDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJuYW1lIC4gbGF0XFxcIiAxZnJcXG4gICAgXFxcImxvY2F0aW9uIC4gbG9uXFxcIiAxZnIgLyAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLndlYXRoZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5kZXNjLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJpY29uIG1haW4td2VhdGhlclxcXCIgOGZyXFxuICAgIFxcXCJpY29uIGRldGFpbFxcXCIgN2ZyIC8gMWZyIDJmcjtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2MtbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW4td2VhdGhlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRlc2MtZGV0YWlsIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYWluLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtaW47XFxufVxcblxcbi5tYXgtdGVtcCB7XFxuICBncmlkLWFyZWE6IG1heDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1Qjs7RUFFdkI7OzBCQUV3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSOztzQ0FFb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2I7OytCQUU2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkM2QxO1xcbn1cXG5cXG4uY29udGVudC13cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tbGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyIHtcXG4gIG1hcmdpbjogOHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZDVhYTtcXG59XFxuXFxuLmNpdHktbmFtZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IG5hbWU7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jaXR5LWxvY2F0aW9uIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtYXJlYTogbG9jYXRpb247XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi53ZWF0aGVyLXdyYXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcInRlbXAgbWFpbi13cmFwXFxcIiAxZnJcXG4gICAgXFxcImRlc2MgLlxcXCIgMWZyIC8gMWZyIDFmcjtcXG59XFxuXFxuLmNpdHktbGF0IHtcXG4gIGdyaWQtYXJlYTogbGF0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG4uY2l0eS1sb24ge1xcbiAgZ3JpZC1hcmVhOiBsb247XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gIGdhcDogNHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcIm5hbWUgLiBsYXRcXFwiIDFmclxcbiAgICBcXFwibG9jYXRpb24gLiBsb25cXFwiIDFmciAvIDFmciAxZnIgMWZyO1xcbn1cXG5cXG4ud2VhdGhlci10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuLmRlc2Mtd3JhcCB7XFxuICBncmlkLWFyZWE6IGRlc2M7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcImljb24gbWFpbi13ZWF0aGVyXFxcIiA4ZnJcXG4gICAgXFxcImljb24gZGV0YWlsXFxcIiA3ZnIgLyAxZnIgMmZyO1xcbn1cXG5cXG4ud2VhdGhlci1pY29uIHtcXG4gIGdyaWQtYXJlYTogaWNvbjtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGVzYy1tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbi13ZWF0aGVyO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZGVzYy1kZXRhaWwge1xcbiAgZ3JpZC1hcmVhOiBkZXRhaWw7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLm1haW4td3JhcCB7XFxuICBncmlkLWFyZWE6IG1haW4td3JhcDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi50ZW1wIHtcXG4gIGdyaWQtYXJlYTogdGVtcDtcXG4gIGZvbnQtc2l6ZTogNTJweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxufVxcblxcbi5taW4tdGVtcCB7XFxuICBncmlkLWFyZWE6IG1pbjtcXG59XFxuXFxuLm1heC10ZW1wIHtcXG4gIGdyaWQtYXJlYTogbWF4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbmNvbnN0IEVsdENyZWF0b3IgPSAoZnVuY3Rpb24gRWx0Q3JlYXRvcigpIHtcbiAgLy8gY3JlYXRlIGxvY2F0aW9uIG1lbnUgaXRlbVxuICBmdW5jdGlvbiBfbWFrZU9wdGlvbihsb2NhdGlvbiwgaW5kZXgpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuXG4gICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tY29udGFpbmVyXCIpO1xuICAgIGl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZChcImNpdHktbmFtZVwiKTtcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICAvLyBzdGF0ZSAoaWYgYXBwbGljYWJsZSkgYW5kIGNvdW50cnlcbiAgICBjb25zdCBjaXR5TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2l0eS1sb2NhdGlvblwiKTtcblxuICAgIGlmIChsb2NhdGlvbi5zdGF0ZSkge1xuICAgICAgY2l0eUxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7bG9jYXRpb24uc3RhdGV9LCAke2xvY2F0aW9uLmNvdW50cnl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2l0eUxvY2F0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb24uY291bnRyeTtcbiAgICB9XG5cbiAgICBjb25zdCByb3VuZExhdCA9IGxvY2F0aW9uLmxhdC50b0ZpeGVkKDQpO1xuICAgIGNvbnN0IGNpdHlMYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlMYXQuY2xhc3NMaXN0LmFkZChcImNpdHktbGF0XCIpO1xuICAgIGNpdHlMYXQudGV4dENvbnRlbnQgPSBgbGF0OiAke3JvdW5kTGF0fWA7XG5cbiAgICBjb25zdCByb3VuZExvbiA9IGxvY2F0aW9uLmxvbi50b0ZpeGVkKDIpO1xuICAgIGNvbnN0IGNpdHlMb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlMb24uY2xhc3NMaXN0LmFkZChcImNpdHktbG9uXCIpO1xuICAgIGNpdHlMb24udGV4dENvbnRlbnQgPSBgbG9uOiAke3JvdW5kTG9ufWA7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlMYXQpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUxvY2F0aW9uKTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlMb24pO1xuXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xuICB9XG5cbiAgLy8gY3JlYXRlIGxvY2F0aW9uIG1lbnVcbiAgZnVuY3Rpb24gY3JlYXRlTWVudShsb2NhdGlvbnMpIHtcbiAgICBjb25zdCBsb2NhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbG9jYXRpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1saXN0XCIpO1xuICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgbG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbik7XG4gICAgICBjb25zdCBpbmRleCA9IGxvY2F0aW9ucy5pbmRleE9mKGxvY2F0aW9uKTtcblxuICAgICAgY29uc3QgbG9jYXRpb25JdGVtID0gX21ha2VPcHRpb24obG9jYXRpb24sIGluZGV4KTtcbiAgICAgIGxvY2F0aW9uTGlzdC5hcHBlbmRDaGlsZChsb2NhdGlvbkl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChsb2NhdGlvbkxpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckRpc3Aod2VhdGhlckxvYywgc2VhcmNoTG9jKSB7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAvLyBpbmZvcm1hdGlvbiBmcm9tIHRoZSAnd2VhdGhlcicgc2VjdGlvbiBvZiB0aGUgb3BlbndlYXRoZXJtYXAgZGF0YVxuICAgIGNvbnN0IHdlYXRoZXIgPSB3ZWF0aGVyTG9jLndlYXRoZXJbMF07XG5cbiAgICAvLyBpbmZvcm1hdGlvbiBmcm9tIHRoZSAnbWFpbicgc2VjdGlvbiBvZiB0aGUgb3BlbndlYXRoZXJtYXAgZGF0YVxuICAgIGNvbnN0IGRhdGFNYWluID0gd2VhdGhlckxvYy5tYWluO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLXRpdGxlXCIpO1xuXG4gICAgaWYgKHNlYXJjaExvYy5zdGF0ZSkge1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzZWFyY2hMb2MubmFtZX0sICR7c2VhcmNoTG9jLnN0YXRlfSwgJHtzZWFyY2hMb2MuY291bnRyeX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NlYXJjaExvYy5uYW1lfSwgJHtzZWFyY2hMb2MuY291bnRyeX1gO1xuICAgIH1cblxuICAgIGNvbnN0IHdlYXRoZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyV3JhcC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci13cmFwXCIpO1xuXG4gICAgY29uc3QgZGVzY1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NXcmFwLmNsYXNzTGlzdC5hZGQoXCJkZXNjLXdyYXBcIik7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWljb25cIik7XG4gICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyLmljb259QDJ4LnBuZ2A7XG5cbiAgICBjb25zdCBkZXNjTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NNYWluLmNsYXNzTGlzdC5hZGQoXCJkZXNjLW1haW5cIik7XG4gICAgZGVzY01haW4udGV4dENvbnRlbnQgPSB3ZWF0aGVyLm1haW47XG5cbiAgICBjb25zdCBkZXNjRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY0RldGFpbC5jbGFzc0xpc3QuYWRkKFwiZGVzYy1kZXRhaWxcIik7XG4gICAgZGVzY0RldGFpbC50ZXh0Q29udGVudCA9IHdlYXRoZXIuZGVzY3JpcHRpb247XG5cbiAgICBkZXNjV3JhcC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBkZXNjV3JhcC5hcHBlbmRDaGlsZChkZXNjTWFpbik7XG4gICAgZGVzY1dyYXAuYXBwZW5kQ2hpbGQoZGVzY0RldGFpbCk7XG5cbiAgICBjb25zdCBtYWluV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbldyYXAuY2xhc3NMaXN0LmFkZChcIm1haW4td3JhcFwiKTtcblxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wXCIpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtkYXRhTWFpbi50ZW1wLnRvRml4ZWQoMSl9wrBGYDtcblxuICAgIGNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoXCJtaW4tdGVtcFwiKTtcbiAgICBtaW5UZW1wLnRleHRDb250ZW50ID0gYExvdzogJHtkYXRhTWFpbi50ZW1wX21pbi50b0ZpeGVkKDEpfcKwRmA7XG5cbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWF4VGVtcC5jbGFzc0xpc3QuYWRkKFwibWF4LXRlbXBcIik7XG4gICAgbWF4VGVtcC50ZXh0Q29udGVudCA9IGBNYXg6ICR7ZGF0YU1haW4udGVtcF9tYXgudG9GaXhlZCgxKX3CsEZgO1xuXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoXCJmZWVscy1saWtlXCIpO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGFNYWluLmZlZWxzX2xpa2V9wrBGYDtcblxuICAgIGNvbnN0IG90aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3RoZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJvdGhlci1pbmZvXCIpO1xuXG4gICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoXCJ3aW5kLXNwZWVkXCIpO1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAke3dlYXRoZXJMb2Mud2luZC5zcGVlZH0gbXBoYFxuXG4gICAgY29uc3QgcHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmVzcy5jbGFzc0xpc3QuYWRkKFwicHJlc3N1cmVcIik7XG4gICAgcHJlc3MudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7ZGF0YU1haW4ucHJlc3N1cmV9IGhQYWBcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZChcImh1bWlkaXR5XCIpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGFNYWluLmh1bWlkaXR5fSVgXG5cbiAgICBvdGhlckluZm8uYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcbiAgICBvdGhlckluZm8uYXBwZW5kQ2hpbGQocHJlc3MpO1xuICAgIG90aGVySW5mby5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG5cbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChtYXhUZW1wKTtcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyV3JhcCk7XG4gICAgd2VhdGhlcldyYXAuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgd2VhdGhlcldyYXAuYXBwZW5kQ2hpbGQobWFpbldyYXApO1xuICAgIHdlYXRoZXJXcmFwLmFwcGVuZENoaWxkKGRlc2NXcmFwKTtcbiAgICB3ZWF0aGVyV3JhcC5hcHBlbmRDaGlsZChvdGhlckluZm8pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVNZW51LFxuICAgIGNyZWF0ZVdlYXRoZXJEaXNwLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRWx0Q3JlYXRvcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jb25zdCBSZXRyaWV2YWwgPSAoZnVuY3Rpb24gUmV0cmlldmFsKCkge1xuICBmdW5jdGlvbiBfbWFrZVBsdXNlcyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2VBbGwoXCIgXCIsIFwiK1wiKTtcbiAgfVxuXG4gIC8vIEdlb2NvZGluZyBkb2N1bWVudGF0aW9uIGxvY2F0ZWQgaGVyZTogaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvYXBpL2dlb2NvZGluZy1hcGlcbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoTG9jYXRpb24obG9jYWwsIHN0YXRlID0gXCJcIiwgY291bnRyeSA9IFwiXCIpIHtcbiAgICBjb25zdCBzdGF0ZUNvZGUgPSBfbWFrZVBsdXNlcyhzdGF0ZSk7XG4gICAgY29uc3QgY291bnRyeUNvZGUgPSBfbWFrZVBsdXNlcyhjb3VudHJ5KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2FsfSwke3N0YXRlQ29kZX0sJHtjb3VudHJ5Q29kZX0mbGltaXQ9NSZhcHBpZD1hYTNiZGM5OWI3YjdlZTZmZGMzODVkMjFiN2IzZmU5OWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBnZW9EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGdlb0RhdGE7XG4gIH1cblxuICAvLyBjdXJyZW50IHdlYXRoZXIgZG9jdW1lbnRhdGlvbiBoZXJlOiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9jdXJyZW50XG4gIGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBsb2NhdGlvbjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWFhM2JkYzk5YjdiN2VlNmZkYzM4NWQyMWI3YjNmZTk5JnVuaXRzPWltcGVyaWFsYCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hMb2NhdGlvbixcbiAgICBnZXRXZWF0aGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgUmV0cmlldmFsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFJldHJpZXZhbCBmcm9tIFwiLi9yZXRyaWV2ZVwiO1xuaW1wb3J0IEVsdENyZWF0b3IgZnJvbSBcIi4vRE9NVXBkYXRlXCI7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgbG9jYXRpb24gPSBzZWFyY2gudmFsdWU7XG5cbiAgLy8gUmV0cmlldmFsLnNlYXJjaExvY2F0aW9uIGZldGNoZXMgYSBsaXN0IG9mIGxvY2F0aW9ucyBtYXRjaGluZyB0aGUgc2VhcmNoIGNyaXRlcmlhIGFuZCByZXR1cm5zIGEgcHJvbWlzZVxuICBSZXRyaWV2YWwuc2VhcmNoTG9jYXRpb24obG9jYXRpb24pLnRoZW4oKHNlYXJjaFZhbCkgPT4ge1xuICAgIEVsdENyZWF0b3IuY3JlYXRlTWVudShzZWFyY2hWYWwpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sb2NhdGlvbi1jb250YWluZXJcIik7XG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGluZGV4IH0gPSBpdGVtLmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VhcmNoVmFsW2luZGV4XTtcblxuICAgICAgICAvLyBSZXRyaWV2YWwuZ2V0V2VhdGhlciBmZXRjaGVzIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBzZWxlY3RlZCBsb2NhdGlvbiBhbmQgcmV0dXJucyBhIHByb21pc2VcbiAgICAgICAgUmV0cmlldmFsLmdldFdlYXRoZXIoc2VsZWN0ZWQpLnRoZW4oKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgICAgIEVsdENyZWF0b3IuY3JlYXRlV2VhdGhlckRpc3Aod2VhdGhlckRhdGEsIHNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
