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
            ');\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content {\n  visibility: hidden;\n  background-color: #fafaf9;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n\n.search-form {\n  display: flex;\n}\n\n#search {\n  padding: 15px;\n  width: 440px;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n#submit {\n  height: 32px;\n  width: 75px;\n  margin: 0;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,mBAAmB;EACnB,4CAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB;;0BAEwB;AAC1B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR;;sCAEoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb;;+BAE6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,SAAS;AACX",
            sourcesContent: [
              '@font-face {\n  font-family: Roboto;\n  src: url("./fonts/Roboto/Roboto-Regular.ttf");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content {\n  visibility: hidden;\n  background-color: #fafaf9;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    "temp main-wrap" 1fr\n    "desc ." 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    "name . lat" 1fr\n    "location . lon" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    "icon main-weather" 8fr\n    "icon detail" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n\n.search-form {\n  display: flex;\n}\n\n#search {\n  padding: 15px;\n  width: 440px;\n  height: 32px;\n  box-sizing: border-box;\n  margin: 0;\n}\n\n#submit {\n  height: 32px;\n  width: 75px;\n  margin: 0;\n}\n',
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
                    console.log(weatherData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsb0VBQTRCO0FBQzFDLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET01VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvcmV0cmlldmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWQ1YWE7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2l0eS1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ud2VhdGhlci13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ0ZW1wIG1haW4td3JhcFxcXCIgMWZyXFxuICAgIFxcXCJkZXNjIC5cXFwiIDFmciAvIDFmciAxZnI7XFxufVxcblxcbi5jaXR5LWxhdCB7XFxuICBncmlkLWFyZWE6IGxhdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpdHktbG9uIHtcXG4gIGdyaWQtYXJlYTogbG9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDRweDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJuYW1lIC4gbGF0XFxcIiAxZnJcXG4gICAgXFxcImxvY2F0aW9uIC4gbG9uXFxcIiAxZnIgLyAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLndlYXRoZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5kZXNjLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJpY29uIG1haW4td2VhdGhlclxcXCIgOGZyXFxuICAgIFxcXCJpY29uIGRldGFpbFxcXCIgN2ZyIC8gMWZyIDJmcjtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2MtbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW4td2VhdGhlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRlc2MtZGV0YWlsIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYWluLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtaW47XFxufVxcblxcbi5tYXgtdGVtcCB7XFxuICBncmlkLWFyZWE6IG1heDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCOzswQkFFd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUjs7c0NBRW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiOzsrQkFFNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWQ1YWE7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2l0eS1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ud2VhdGhlci13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ0ZW1wIG1haW4td3JhcFxcXCIgMWZyXFxuICAgIFxcXCJkZXNjIC5cXFwiIDFmciAvIDFmciAxZnI7XFxufVxcblxcbi5jaXR5LWxhdCB7XFxuICBncmlkLWFyZWE6IGxhdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpdHktbG9uIHtcXG4gIGdyaWQtYXJlYTogbG9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDRweDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJuYW1lIC4gbGF0XFxcIiAxZnJcXG4gICAgXFxcImxvY2F0aW9uIC4gbG9uXFxcIiAxZnIgLyAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLndlYXRoZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5kZXNjLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJpY29uIG1haW4td2VhdGhlclxcXCIgOGZyXFxuICAgIFxcXCJpY29uIGRldGFpbFxcXCIgN2ZyIC8gMWZyIDJmcjtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2MtbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW4td2VhdGhlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRlc2MtZGV0YWlsIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYWluLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtaW47XFxufVxcblxcbi5tYXgtdGVtcCB7XFxuICBncmlkLWFyZWE6IG1heDtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzZWFyY2gge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHdpZHRoOiA0NDBweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNzdWJtaXQge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuY29uc3QgRWx0Q3JlYXRvciA9IChmdW5jdGlvbiBFbHRDcmVhdG9yKCkge1xuICAvLyBjcmVhdGUgbG9jYXRpb24gbWVudSBpdGVtXG4gIGZ1bmN0aW9uIF9tYWtlT3B0aW9uKGxvY2F0aW9uLCBpbmRleCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1cIik7XG5cbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbi1jb250YWluZXJcIik7XG4gICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGluZGV4KTtcblxuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKFwiY2l0eS1uYW1lXCIpO1xuICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbG9jYXRpb24ubmFtZTtcblxuICAgIC8vIHN0YXRlIChpZiBhcHBsaWNhYmxlKSBhbmQgY291bnRyeVxuICAgIGNvbnN0IGNpdHlMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2l0eUxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaXR5LWxvY2F0aW9uXCIpO1xuXG4gICAgaWYgKGxvY2F0aW9uLnN0YXRlKSB7XG4gICAgICBjaXR5TG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtsb2NhdGlvbi5zdGF0ZX0sICR7bG9jYXRpb24uY291bnRyeX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaXR5TG9jYXRpb24udGV4dENvbnRlbnQgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgIH1cblxuICAgIGNvbnN0IHJvdW5kTGF0ID0gbG9jYXRpb24ubGF0LnRvRml4ZWQoNCk7XG4gICAgY29uc3QgY2l0eUxhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2l0eUxhdC5jbGFzc0xpc3QuYWRkKFwiY2l0eS1sYXRcIik7XG4gICAgY2l0eUxhdC50ZXh0Q29udGVudCA9IGBsYXQ6ICR7cm91bmRMYXR9YDtcblxuICAgIGNvbnN0IHJvdW5kTG9uID0gbG9jYXRpb24ubG9uLnRvRml4ZWQoMik7XG4gICAgY29uc3QgY2l0eUxvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2l0eUxvbi5jbGFzc0xpc3QuYWRkKFwiY2l0eS1sb25cIik7XG4gICAgY2l0eUxvbi50ZXh0Q29udGVudCA9IGBsb246ICR7cm91bmRMb259YDtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUxhdCk7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TG9jYXRpb24pO1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUxvbik7XG5cbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gIH1cblxuICAvLyBjcmVhdGUgbG9jYXRpb24gbWVudVxuICBmdW5jdGlvbiBjcmVhdGVNZW51KGxvY2F0aW9ucykge1xuICAgIGNvbnN0IGxvY2F0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsb2NhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWxpc3RcIik7XG4gICAgY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gbG9jYXRpb25zLmluZGV4T2YobG9jYXRpb24pO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbkl0ZW0gPSBfbWFrZU9wdGlvbihsb2NhdGlvbiwgaW5kZXgpO1xuICAgICAgbG9jYXRpb25MaXN0LmFwcGVuZENoaWxkKGxvY2F0aW9uSXRlbSk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGxvY2F0aW9uTGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyRGlzcCh3ZWF0aGVyTG9jLCBzZWFyY2hMb2MpIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgIC8vIGluZm9ybWF0aW9uIGZyb20gdGhlICd3ZWF0aGVyJyBzZWN0aW9uIG9mIHRoZSBvcGVud2VhdGhlcm1hcCBkYXRhXG4gICAgY29uc3Qgd2VhdGhlciA9IHdlYXRoZXJMb2Mud2VhdGhlclswXTtcblxuICAgIC8vIGluZm9ybWF0aW9uIGZyb20gdGhlICdtYWluJyBzZWN0aW9uIG9mIHRoZSBvcGVud2VhdGhlcm1hcCBkYXRhXG4gICAgY29uc3QgZGF0YU1haW4gPSB3ZWF0aGVyTG9jLm1haW47XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItdGl0bGVcIik7XG5cbiAgICBpZiAoc2VhcmNoTG9jLnN0YXRlKSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3NlYXJjaExvYy5uYW1lfSwgJHtzZWFyY2hMb2Muc3RhdGV9LCAke3NlYXJjaExvYy5jb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c2VhcmNoTG9jLm5hbWV9LCAke3NlYXJjaExvYy5jb3VudHJ5fWA7XG4gICAgfVxuXG4gICAgY29uc3Qgd2VhdGhlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJXcmFwLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLXdyYXBcIik7XG5cbiAgICBjb25zdCBkZXNjV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY1dyYXAuY2xhc3NMaXN0LmFkZChcImRlc2Mtd3JhcFwiKTtcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaWNvblwiKTtcbiAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXIuaWNvbn1AMngucG5nYDtcblxuICAgIGNvbnN0IGRlc2NNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY01haW4uY2xhc3NMaXN0LmFkZChcImRlc2MtbWFpblwiKTtcbiAgICBkZXNjTWFpbi50ZXh0Q29udGVudCA9IHdlYXRoZXIubWFpbjtcblxuICAgIGNvbnN0IGRlc2NEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjRGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJkZXNjLWRldGFpbFwiKTtcbiAgICBkZXNjRGV0YWlsLnRleHRDb250ZW50ID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcblxuICAgIGRlc2NXcmFwLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGRlc2NXcmFwLmFwcGVuZENoaWxkKGRlc2NNYWluKTtcbiAgICBkZXNjV3JhcC5hcHBlbmRDaGlsZChkZXNjRGV0YWlsKTtcblxuICAgIGNvbnN0IG1haW5XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluV3JhcC5jbGFzc0xpc3QuYWRkKFwibWFpbi13cmFwXCIpO1xuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke2RhdGFNYWluLnRlbXAudG9GaXhlZCgxKX3CsEZgO1xuXG4gICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1pblRlbXAuY2xhc3NMaXN0LmFkZChcIm1pbi10ZW1wXCIpO1xuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgTG93OiAke2RhdGFNYWluLnRlbXBfbWluLnRvRml4ZWQoMSl9wrBGYDtcblxuICAgIGNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoXCJtYXgtdGVtcFwiKTtcbiAgICBtYXhUZW1wLnRleHRDb250ZW50ID0gYE1heDogJHtkYXRhTWFpbi50ZW1wX21heC50b0ZpeGVkKDEpfcKwRmA7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmZWVsc0xpa2UuY2xhc3NMaXN0LmFkZChcImZlZWxzLWxpa2VcIik7XG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YU1haW4uZmVlbHNfbGlrZX3CsEZgO1xuXG4gICAgY29uc3Qgb3RoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdGhlckluZm8uY2xhc3NMaXN0LmFkZChcIm90aGVyLWluZm9cIik7XG5cbiAgICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZChcIndpbmQtc3BlZWRcIik7XG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYFdpbmQgU3BlZWQ6ICR7d2VhdGhlckxvYy53aW5kLnNwZWVkfSBtcGhgO1xuXG4gICAgY29uc3QgcHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmVzcy5jbGFzc0xpc3QuYWRkKFwicHJlc3N1cmVcIik7XG4gICAgcHJlc3MudGV4dENvbnRlbnQgPSBgUHJlc3N1cmU6ICR7ZGF0YU1haW4ucHJlc3N1cmV9IGhQYWA7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJodW1pZGl0eVwiKTtcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhTWFpbi5odW1pZGl0eX0lYDtcblxuICAgIG90aGVySW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xuICAgIG90aGVySW5mby5hcHBlbmRDaGlsZChwcmVzcyk7XG4gICAgb3RoZXJJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcblxuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKG1pblRlbXApO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKG1heFRlbXApO1xuICAgIG1haW5XcmFwLmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJXcmFwKTtcbiAgICB3ZWF0aGVyV3JhcC5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgICB3ZWF0aGVyV3JhcC5hcHBlbmRDaGlsZChtYWluV3JhcCk7XG4gICAgd2VhdGhlcldyYXAuYXBwZW5kQ2hpbGQoZGVzY1dyYXApO1xuICAgIHdlYXRoZXJXcmFwLmFwcGVuZENoaWxkKG90aGVySW5mbyk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5RXJyb3IoZXJyb3JUZXh0KSB7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IGVycm9yVGV4dDtcbiAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlTWVudSxcbiAgICBjcmVhdGVXZWF0aGVyRGlzcCxcbiAgICBkaXNwbGF5RXJyb3IsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbHRDcmVhdG9yO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmNvbnN0IFJldHJpZXZhbCA9IChmdW5jdGlvbiBSZXRyaWV2YWwoKSB7XG4gIGZ1bmN0aW9uIF9tYWtlUGx1c2VzKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZUFsbChcIiBcIiwgXCIrXCIpO1xuICB9XG5cbiAgLy8gR2VvY29kaW5nIGRvY3VtZW50YXRpb24gbG9jYXRlZCBoZXJlOiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9hcGkvZ2VvY29kaW5nLWFwaVxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hMb2NhdGlvbihsb2NhbCwgc3RhdGUgPSBcIlwiLCBjb3VudHJ5ID0gXCJcIikge1xuICAgIGNvbnN0IHN0YXRlQ29kZSA9IF9tYWtlUGx1c2VzKHN0YXRlKTtcbiAgICBjb25zdCBjb3VudHJ5Q29kZSA9IF9tYWtlUGx1c2VzKGNvdW50cnkpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYWx9LCR7c3RhdGVDb2RlfSwke2NvdW50cnlDb2RlfSZsaW1pdD01JmFwcGlkPWFhM2JkYzk5YjdiN2VlNmZkYzM4NWQyMWI3YjNmZTk5YCxcbiAgICAgIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIGdlb0RhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgc2VhcmNoIHRlcm1cIjtcbiAgfVxuXG4gIC8vIGN1cnJlbnQgd2VhdGhlciBkb2N1bWVudGF0aW9uIGhlcmU6IGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2N1cnJlbnRcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IGxvY2F0aW9uO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9YWEzYmRjOTliN2I3ZWU2ZmRjMzg1ZDIxYjdiM2ZlOTkmdW5pdHM9aW1wZXJpYWxgLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNlYXJjaExvY2F0aW9uLFxuICAgIGdldFdlYXRoZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXRyaWV2YWw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgUmV0cmlldmFsIGZyb20gXCIuL3JldHJpZXZlXCI7XG5pbXBvcnQgRWx0Q3JlYXRvciBmcm9tIFwiLi9ET01VcGRhdGVcIjtcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIik7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb25zdCBsb2NhdGlvbiA9IHNlYXJjaC52YWx1ZTtcblxuICAvLyBSZXRyaWV2YWwuc2VhcmNoTG9jYXRpb24gZmV0Y2hlcyBhIGxpc3Qgb2YgbG9jYXRpb25zIG1hdGNoaW5nIHRoZSBzZWFyY2ggY3JpdGVyaWEgYW5kIHJldHVybnMgYSBwcm9taXNlXG4gIFJldHJpZXZhbC5zZWFyY2hMb2NhdGlvbihsb2NhdGlvbilcbiAgICAudGhlbigoc2VhcmNoVmFsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHNlYXJjaFZhbCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBFbHRDcmVhdG9yLmRpc3BsYXlFcnJvcihzZWFyY2hWYWwpO1xuICAgICAgfSBlbHNlIGlmKHNlYXJjaFZhbC5sZW5ndGggPT09IDApe1xuICAgICAgICBFbHRDcmVhdG9yLmRpc3BsYXlFcnJvcihcIk5vIGRhdGEgZm9yIHRoYXQgbG9jYXRpb24uXCIpXG4gICAgICB9ZWxzZSB7XG4gICAgICAgIEVsdENyZWF0b3IuY3JlYXRlTWVudShzZWFyY2hWYWwpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9jYXRpb24tY29udGFpbmVyXCIpO1xuXG4gICAgICAgIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gaXRlbS5kYXRhc2V0O1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWFyY2hWYWxbaW5kZXhdO1xuXG4gICAgICAgICAgICAvLyBSZXRyaWV2YWwuZ2V0V2VhdGhlciBmZXRjaGVzIHRoZSB3ZWF0aGVyIGRhdGEgZm9yIHRoZSBzZWxlY3RlZCBsb2NhdGlvbiBhbmQgcmV0dXJucyBhIHByb21pc2VcbiAgICAgICAgICAgIFJldHJpZXZhbC5nZXRXZWF0aGVyKHNlbGVjdGVkKS50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgICAgICAgICAgIEVsdENyZWF0b3IuY3JlYXRlV2VhdGhlckRpc3Aod2VhdGhlckRhdGEsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGVycm9ycyBmcm9tIFJldHJpZXZhbC5zZWFyY2hMb2NhdGlvblxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
