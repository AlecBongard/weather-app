/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto/Roboto-Regular.ttf */ "./src/fonts/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content {\n  visibility: hidden;\n  background-color: #fafaf9;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    \"temp main-wrap\" 1fr\n    \"desc .\" 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    \"name . lat\" 1fr\n    \"location . lon\" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    \"icon main-weather\" 8fr\n    \"icon detail\" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;;EAEvB;;0BAEwB;AAC1B;;AAEA;EACE,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR;;sCAEoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb;;+BAE6B;AAC/B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@font-face {\n  font-family: Roboto;\n  src: url(\"./fonts/Roboto/Roboto-Regular.ttf\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: Roboto;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d6d3d1;\n}\n\n.content-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.content {\n  visibility: hidden;\n  background-color: #fafaf9;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.location-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-container {\n  margin: 8px;\n  padding: 8px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.location-container:hover {\n  background-color: #dadad5aa;\n}\n\n.city-name {\n  height: 100%;\n  grid-area: name;\n  font-size: 18px;\n}\n\n.city-location {\n  align-self: end;\n  height: 100%;\n  grid-area: location;\n  font-size: 14px;\n}\n\n.weather-wrap {\n  display: grid;\n  justify-content: center;\n\n  grid-template:\n    \"temp main-wrap\" 1fr\n    \"desc .\" 1fr / 1fr 1fr;\n}\n\n.city-lat {\n  grid-area: lat;\n  font-size: 14px;\n  align-self: end;\n}\n\n.city-lon {\n  grid-area: lon;\n  font-size: 14px;\n  align-self: start;\n}\n\n.location-container {\n  height: 36px;\n  display: grid;\n  justify-items: stretch;\n  gap: 4px;\n  grid-template:\n    \"name . lat\" 1fr\n    \"location . lon\" 1fr / 1fr 1fr 1fr;\n}\n\n.weather-title {\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.desc-wrap {\n  grid-area: desc;\n  display: grid;\n  grid-template:\n    \"icon main-weather\" 8fr\n    \"icon detail\" 7fr / 1fr 2fr;\n}\n\n.weather-icon {\n  grid-area: icon;\n  height: 75px;\n  width: 75px;\n  align-self: center;\n}\n\n.desc-main {\n  grid-area: main-weather;\n  align-self: end;\n  font-size: 24px;\n}\n\n.desc-detail {\n  grid-area: detail;\n  align-self: start;\n  font-size: 14px;\n}\n\n.main-wrap {\n  grid-area: main-wrap;\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.temp {\n  grid-area: temp;\n  font-size: 52px;\n  align-self: center;\n  justify-self: start;\n  padding-left: 25px;\n}\n\n.min-temp {\n  grid-area: min;\n}\n\n.max-temp {\n  grid-area: max;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
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
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



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
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
      layer: item[5]
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
        references: 1
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
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
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
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
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
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
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
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/DOMUpdate.js":
/*!**************************!*\
  !*** ./src/DOMUpdate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

    mainWrap.appendChild(minTemp);
    mainWrap.appendChild(maxTemp);
    mainWrap.appendChild(feelsLike);

    content.appendChild(title);
    content.appendChild(weatherWrap);
    weatherWrap.appendChild(temp);
    weatherWrap.appendChild(mainWrap);
    weatherWrap.appendChild(descWrap);
  }

  return {
    createMenu,
    createWeatherDisp,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EltCreator);


/***/ }),

/***/ "./src/retrieve.js":
/*!*************************!*\
  !*** ./src/retrieve.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Retrieval);


/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _retrieve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieve */ "./src/retrieve.js");
/* harmony import */ var _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMUpdate */ "./src/DOMUpdate.js");




const search = document.querySelector("#search");
const submitBtn = document.querySelector("#submit");
const content = document.querySelector(".content");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  content.textContent = "";
  const location = search.value;

  // Retrieval.searchLocation fetches a list of locations matching the search criteria and returns a promise
  _retrieve__WEBPACK_IMPORTED_MODULE_1__["default"].searchLocation(location).then((searchVal) => {
    _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createMenu(searchVal);

    const menuItems = document.querySelectorAll(".location-container");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const { index } = item.dataset;
        const selected = searchVal[index];

        // Retrieval.getWeather fetches the weather data for the selected location and returns a promise
        _retrieve__WEBPACK_IMPORTED_MODULE_1__["default"].getWeather(selected).then((weatherData) => {
          console.log(weatherData);
          _DOMUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createWeatherDisp(weatherData, selected);
        });
      });
    });
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7QUFDRTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnRUFBd0I7QUFDMUIsSUFBSSw2REFBcUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4Qjs7QUFFQTtBQUNBLFFBQVEsNERBQW9CO0FBQzVCO0FBQ0EsVUFBVSxvRUFBNEI7QUFDdEMsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NVXBkYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3JldHJpZXZlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQzZDE7XFxufVxcblxcbi5jb250ZW50LXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWY5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1saXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgbWFyZ2luOiA4cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkNWFhO1xcbn1cXG5cXG4uY2l0eS1uYW1lIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtYXJlYTogbmFtZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmNpdHktbG9jYXRpb24ge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLndlYXRoZXItd3JhcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwidGVtcCBtYWluLXdyYXBcXFwiIDFmclxcbiAgICBcXFwiZGVzYyAuXFxcIiAxZnIgLyAxZnIgMWZyO1xcbn1cXG5cXG4uY2l0eS1sYXQge1xcbiAgZ3JpZC1hcmVhOiBsYXQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5jaXR5LWxvbiB7XFxuICBncmlkLWFyZWE6IGxvbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4ubG9jYXRpb24tY29udGFpbmVyIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgZ2FwOiA0cHg7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwibmFtZSAuIGxhdFxcXCIgMWZyXFxuICAgIFxcXCJsb2NhdGlvbiAuIGxvblxcXCIgMWZyIC8gMWZyIDFmciAxZnI7XFxufVxcblxcbi53ZWF0aGVyLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uZGVzYy13cmFwIHtcXG4gIGdyaWQtYXJlYTogZGVzYztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwiaWNvbiBtYWluLXdlYXRoZXJcXFwiIDhmclxcbiAgICBcXFwiaWNvbiBkZXRhaWxcXFwiIDdmciAvIDFmciAyZnI7XFxufVxcblxcbi53ZWF0aGVyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiBpY29uO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjLW1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdlYXRoZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5kZXNjLWRldGFpbCB7XFxuICBncmlkLWFyZWE6IGRldGFpbDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubWFpbi13cmFwIHtcXG4gIGdyaWQtYXJlYTogbWFpbi13cmFwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnRlbXAge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wO1xcbiAgZm9udC1zaXplOiA1MnB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG59XFxuXFxuLm1pbi10ZW1wIHtcXG4gIGdyaWQtYXJlYTogbWluO1xcbn1cXG5cXG4ubWF4LXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtYXg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCOzswQkFFd0I7QUFDMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUjs7c0NBRW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiOzsrQkFFNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDNkMTtcXG59XFxuXFxuLmNvbnRlbnQtd3JhcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWxpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvY2F0aW9uLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWQ1YWE7XFxufVxcblxcbi5jaXR5LW5hbWUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2l0eS1sb2NhdGlvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ud2VhdGhlci13cmFwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ0ZW1wIG1haW4td3JhcFxcXCIgMWZyXFxuICAgIFxcXCJkZXNjIC5cXFwiIDFmciAvIDFmciAxZnI7XFxufVxcblxcbi5jaXR5LWxhdCB7XFxuICBncmlkLWFyZWE6IGxhdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLmNpdHktbG9uIHtcXG4gIGdyaWQtYXJlYTogbG9uO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxuICBnYXA6IDRweDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJuYW1lIC4gbGF0XFxcIiAxZnJcXG4gICAgXFxcImxvY2F0aW9uIC4gbG9uXFxcIiAxZnIgLyAxZnIgMWZyIDFmcjtcXG59XFxuXFxuLndlYXRoZXItdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5kZXNjLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBkZXNjO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJpY29uIG1haW4td2VhdGhlclxcXCIgOGZyXFxuICAgIFxcXCJpY29uIGRldGFpbFxcXCIgN2ZyIC8gMWZyIDJmcjtcXG59XFxuXFxuLndlYXRoZXItaWNvbiB7XFxuICBncmlkLWFyZWE6IGljb247XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2MtbWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW4td2VhdGhlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmRlc2MtZGV0YWlsIHtcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5tYWluLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiBtYWluLXdyYXA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4udGVtcCB7XFxuICBncmlkLWFyZWE6IHRlbXA7XFxuICBmb250LXNpemU6IDUycHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbn1cXG5cXG4ubWluLXRlbXAge1xcbiAgZ3JpZC1hcmVhOiBtaW47XFxufVxcblxcbi5tYXgtdGVtcCB7XFxuICBncmlkLWFyZWE6IG1heDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5jb25zdCBFbHRDcmVhdG9yID0gKGZ1bmN0aW9uIEVsdENyZWF0b3IoKSB7XG4gIC8vIGNyZWF0ZSBsb2NhdGlvbiBtZW51IGl0ZW1cbiAgZnVuY3Rpb24gX21ha2VPcHRpb24obG9jYXRpb24sIGluZGV4KSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbVwiKTtcblxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBpdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuXG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoXCJjaXR5LW5hbWVcIik7XG4gICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgLy8gc3RhdGUgKGlmIGFwcGxpY2FibGUpIGFuZCBjb3VudHJ5XG4gICAgY29uc3QgY2l0eUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXR5TG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImNpdHktbG9jYXRpb25cIik7XG5cbiAgICBpZiAobG9jYXRpb24uc3RhdGUpIHtcbiAgICAgIGNpdHlMb2NhdGlvbi50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLnN0YXRlfSwgJHtsb2NhdGlvbi5jb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNpdHlMb2NhdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uLmNvdW50cnk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm91bmRMYXQgPSBsb2NhdGlvbi5sYXQudG9GaXhlZCg0KTtcbiAgICBjb25zdCBjaXR5TGF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXR5TGF0LmNsYXNzTGlzdC5hZGQoXCJjaXR5LWxhdFwiKTtcbiAgICBjaXR5TGF0LnRleHRDb250ZW50ID0gYGxhdDogJHtyb3VuZExhdH1gO1xuXG4gICAgY29uc3Qgcm91bmRMb24gPSBsb2NhdGlvbi5sb24udG9GaXhlZCgyKTtcbiAgICBjb25zdCBjaXR5TG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaXR5TG9uLmNsYXNzTGlzdC5hZGQoXCJjaXR5LWxvblwiKTtcbiAgICBjaXR5TG9uLnRleHRDb250ZW50ID0gYGxvbjogJHtyb3VuZExvbn1gO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TGF0KTtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlMb2NhdGlvbik7XG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5TG9uKTtcblxuICAgIHJldHVybiBsaXN0SXRlbTtcbiAgfVxuXG4gIC8vIGNyZWF0ZSBsb2NhdGlvbiBtZW51XG4gIGZ1bmN0aW9uIGNyZWF0ZU1lbnUobG9jYXRpb25zKSB7XG4gICAgY29uc3QgbG9jYXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxvY2F0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24tbGlzdFwiKTtcbiAgICBjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgIGxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pO1xuICAgICAgY29uc3QgaW5kZXggPSBsb2NhdGlvbnMuaW5kZXhPZihsb2NhdGlvbik7XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9uSXRlbSA9IF9tYWtlT3B0aW9uKGxvY2F0aW9uLCBpbmRleCk7XG4gICAgICBsb2NhdGlvbkxpc3QuYXBwZW5kQ2hpbGQobG9jYXRpb25JdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb25MaXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJEaXNwKHdlYXRoZXJMb2MsIHNlYXJjaExvYykge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRlbnQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgLy8gaW5mb3JtYXRpb24gZnJvbSB0aGUgJ3dlYXRoZXInIHNlY3Rpb24gb2YgdGhlIG9wZW53ZWF0aGVybWFwIGRhdGFcbiAgICBjb25zdCB3ZWF0aGVyID0gd2VhdGhlckxvYy53ZWF0aGVyWzBdO1xuXG4gICAgLy8gaW5mb3JtYXRpb24gZnJvbSB0aGUgJ21haW4nIHNlY3Rpb24gb2YgdGhlIG9wZW53ZWF0aGVybWFwIGRhdGFcbiAgICBjb25zdCBkYXRhTWFpbiA9IHdlYXRoZXJMb2MubWFpbjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci10aXRsZVwiKTtcblxuICAgIGlmIChzZWFyY2hMb2Muc3RhdGUpIHtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7c2VhcmNoTG9jLm5hbWV9LCAke3NlYXJjaExvYy5zdGF0ZX0sICR7c2VhcmNoTG9jLmNvdW50cnl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtzZWFyY2hMb2MubmFtZX0sICR7c2VhcmNoTG9jLmNvdW50cnl9YDtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlcldyYXAuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItd3JhcFwiKTtcblxuICAgIGNvbnN0IGRlc2NXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjV3JhcC5jbGFzc0xpc3QuYWRkKFwiZGVzYy13cmFwXCIpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1pY29uXCIpO1xuICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlci5pY29ufUAyeC5wbmdgO1xuXG4gICAgY29uc3QgZGVzY01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjTWFpbi5jbGFzc0xpc3QuYWRkKFwiZGVzYy1tYWluXCIpO1xuICAgIGRlc2NNYWluLnRleHRDb250ZW50ID0gd2VhdGhlci5tYWluO1xuXG4gICAgY29uc3QgZGVzY0RldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NEZXRhaWwuY2xhc3NMaXN0LmFkZChcImRlc2MtZGV0YWlsXCIpO1xuICAgIGRlc2NEZXRhaWwudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuXG4gICAgZGVzY1dyYXAuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgZGVzY1dyYXAuYXBwZW5kQ2hpbGQoZGVzY01haW4pO1xuICAgIGRlc2NXcmFwLmFwcGVuZENoaWxkKGRlc2NEZXRhaWwpO1xuXG4gICAgY29uc3QgbWFpbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5XcmFwLmNsYXNzTGlzdC5hZGQoXCJtYWluLXdyYXBcIik7XG5cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcFwiKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7ZGF0YU1haW4udGVtcC50b0ZpeGVkKDEpfcKwRmA7XG5cbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWluVGVtcC5jbGFzc0xpc3QuYWRkKFwibWluLXRlbXBcIik7XG4gICAgbWluVGVtcC50ZXh0Q29udGVudCA9IGBMb3c6ICR7ZGF0YU1haW4udGVtcF9taW4udG9GaXhlZCgxKX3CsEZgO1xuXG4gICAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1heFRlbXAuY2xhc3NMaXN0LmFkZChcIm1heC10ZW1wXCIpO1xuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgTWF4OiAke2RhdGFNYWluLnRlbXBfbWF4LnRvRml4ZWQoMSl9wrBGYDtcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwiZmVlbHMtbGlrZVwiKTtcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhTWFpbi5mZWVsc19saWtlfcKwRmA7XG5cbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChtaW5UZW1wKTtcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChtYXhUZW1wKTtcbiAgICBtYWluV3JhcC5hcHBlbmRDaGlsZChmZWVsc0xpa2UpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyV3JhcCk7XG4gICAgd2VhdGhlcldyYXAuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgd2VhdGhlcldyYXAuYXBwZW5kQ2hpbGQobWFpbldyYXApO1xuICAgIHdlYXRoZXJXcmFwLmFwcGVuZENoaWxkKGRlc2NXcmFwKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlTWVudSxcbiAgICBjcmVhdGVXZWF0aGVyRGlzcCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVsdENyZWF0b3I7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuY29uc3QgUmV0cmlldmFsID0gKGZ1bmN0aW9uIFJldHJpZXZhbCgpIHtcbiAgZnVuY3Rpb24gX21ha2VQbHVzZXMoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlQWxsKFwiIFwiLCBcIitcIik7XG4gIH1cblxuICAvLyBHZW9jb2RpbmcgZG9jdW1lbnRhdGlvbiBsb2NhdGVkIGhlcmU6IGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2FwaS9nZW9jb2RpbmctYXBpXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaExvY2F0aW9uKGxvY2FsLCBzdGF0ZSA9IFwiXCIsIGNvdW50cnkgPSBcIlwiKSB7XG4gICAgY29uc3Qgc3RhdGVDb2RlID0gX21ha2VQbHVzZXMoc3RhdGUpO1xuICAgIGNvbnN0IGNvdW50cnlDb2RlID0gX21ha2VQbHVzZXMoY291bnRyeSk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhbH0sJHtzdGF0ZUNvZGV9LCR7Y291bnRyeUNvZGV9JmxpbWl0PTUmYXBwaWQ9YWEzYmRjOTliN2I3ZWU2ZmRjMzg1ZDIxYjdiM2ZlOTlgLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBnZW9EYXRhO1xuICB9XG5cbiAgLy8gY3VycmVudCB3ZWF0aGVyIGRvY3VtZW50YXRpb24gaGVyZTogaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvY3VycmVudFxuICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gbG9jYXRpb247XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1hYTNiZGM5OWI3YjdlZTZmZGMzODVkMjFiN2IzZmU5OSZ1bml0cz1pbXBlcmlhbGAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2VhcmNoTG9jYXRpb24sXG4gICAgZ2V0V2VhdGhlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJldHJpZXZhbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBSZXRyaWV2YWwgZnJvbSBcIi4vcmV0cmlldmVcIjtcbmltcG9ydCBFbHRDcmVhdG9yIGZyb20gXCIuL0RPTVVwZGF0ZVwiO1xuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnN0IGxvY2F0aW9uID0gc2VhcmNoLnZhbHVlO1xuXG4gIC8vIFJldHJpZXZhbC5zZWFyY2hMb2NhdGlvbiBmZXRjaGVzIGEgbGlzdCBvZiBsb2NhdGlvbnMgbWF0Y2hpbmcgdGhlIHNlYXJjaCBjcml0ZXJpYSBhbmQgcmV0dXJucyBhIHByb21pc2VcbiAgUmV0cmlldmFsLnNlYXJjaExvY2F0aW9uKGxvY2F0aW9uKS50aGVuKChzZWFyY2hWYWwpID0+IHtcbiAgICBFbHRDcmVhdG9yLmNyZWF0ZU1lbnUoc2VhcmNoVmFsKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubG9jYXRpb24tY29udGFpbmVyXCIpO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpbmRleCB9ID0gaXRlbS5kYXRhc2V0O1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlYXJjaFZhbFtpbmRleF07XG5cbiAgICAgICAgLy8gUmV0cmlldmFsLmdldFdlYXRoZXIgZmV0Y2hlcyB0aGUgd2VhdGhlciBkYXRhIGZvciB0aGUgc2VsZWN0ZWQgbG9jYXRpb24gYW5kIHJldHVybnMgYSBwcm9taXNlXG4gICAgICAgIFJldHJpZXZhbC5nZXRXZWF0aGVyKHNlbGVjdGVkKS50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgICBFbHRDcmVhdG9yLmNyZWF0ZVdlYXRoZXJEaXNwKHdlYXRoZXJEYXRhLCBzZWxlY3RlZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=