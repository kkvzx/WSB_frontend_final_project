/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/mainView.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/mainView.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-view-body {\n  padding: 16px 24px;\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.layout {\n  min-width: min-content;\n}\n\n.main-view-container {\n  width: 100%;\n  min-width: 400px;\n  margin-top: 12px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.5);\n  display: grid;\n  place-content: center;\n  padding: 24px;\n}\n.main-view-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.main-view-container-weather {\n  width: min-content;\n  white-space: nowrap;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  min-height: 28px;\n  margin: 4px 0;\n  padding: 2px 8px;\n  display: grid;\n  place-content: center;\n}\n\n.main-view-form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: min-content;\n  border: 1px solid var(--);\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.main-view-form-container label {\n  font-weight: bold;\n  margin-bottom: 10px;\n  white-space: nowrap;\n}\n\n.main-view-form-container select,\n.main-view-form-container input {\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--accent-color);\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.main-view-form-container button {\n  background-color: #007bff;\n  border: none;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.main-view-form-container button:hover {\n  background-color: #0069d9;\n}\n\n.loader-container {\n  min-width: 200px;\n  height: 100%;\n  display: grid;\n  place-content: center;\n}\n\n.loader {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  animation: spin 1s linear infinite;\n  margin-left: 8px;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background: var(--bg-color);\n  border-radius: 4px;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 400px;\n}\n\n.close {\n  color: var(--accent-color);\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n.main-view-login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main-view-login-form label {\n  font-weight: bold;\n}\n\n.main-view-login-form input[type='text'],\n.main-view-login-form input[type='password'],\n.main-view-login-form input[type='email'] {\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--accent-color);\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.main-view-login-form input[type='submit'] {\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n.main-view-login-form input[type='submit']:hover {\n  background-color: #45a049;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/mainView.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,8BAA8B;EAC9B,aAAa;EACb,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,qCAAqC;EACrC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,6CAA6C;AAC/C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;AACtC;;AAEA,sBAAsB;AACtB;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,eAAe;EACf,aAAa;EACb,kBAAkB;EAClB,qCAAqC;EACrC,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".main-view-body {\n  padding: 16px 24px;\n  color: whitesmoke;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.layout {\n  min-width: min-content;\n}\n\n.main-view-container {\n  width: 100%;\n  min-width: 400px;\n  margin-top: 12px;\n  border-radius: 4px;\n  background: rgba(0, 0, 0, 0.5);\n  display: grid;\n  place-content: center;\n  padding: 24px;\n}\n.main-view-header-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.main-view-container-weather {\n  width: min-content;\n  white-space: nowrap;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  min-height: 28px;\n  margin: 4px 0;\n  padding: 2px 8px;\n  display: grid;\n  place-content: center;\n}\n\n.main-view-form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: min-content;\n  border: 1px solid var(--);\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.main-view-form-container label {\n  font-weight: bold;\n  margin-bottom: 10px;\n  white-space: nowrap;\n}\n\n.main-view-form-container select,\n.main-view-form-container input {\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--accent-color);\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.main-view-form-container button {\n  background-color: #007bff;\n  border: none;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.main-view-form-container button:hover {\n  background-color: #0069d9;\n}\n\n.loader-container {\n  min-width: 200px;\n  height: 100%;\n  display: grid;\n  place-content: center;\n}\n\n.loader {\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  width: 16px;\n  height: 16px;\n  animation: spin 1s linear infinite;\n  margin-left: 8px;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n/* Modal Content/Box */\n.modal-content {\n  background: var(--bg-color);\n  border-radius: 4px;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 400px;\n}\n\n.close {\n  color: var(--accent-color);\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n.main-view-login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.main-view-login-form label {\n  font-weight: bold;\n}\n\n.main-view-login-form input[type='text'],\n.main-view-login-form input[type='password'],\n.main-view-login-form input[type='email'] {\n  font-size: 16px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid var(--accent-color);\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.main-view-login-form input[type='submit'] {\n  background-color: #4caf50;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n.main-view-login-form input[type='submit']:hover {\n  background-color: #45a049;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n/*\n    3. Allow percentage-based heights in the application\n  */\nhtml,\nbody {\n  height: 100%;\n}\n/*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;  \n    font-family: Arial, sans-serif;\n    background-image: url('https://i.insider.com/5e8f70a8c023205e4245d983?width=1000&format=jpeg&auto=webp');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: rgba(0, 0, 0, 0.7);\n    background-blend-mode: multiply;\n  \n}\n/*\n    6. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n    7. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n    8. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n    9. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #8294C4;\n  --main-color: #ACB1D6;\n  --secondary-color: #DBDFEA;\n  --accent-color: #FFEAD2;\n\n}\n", "",{"version":3,"sources":["webpack://./src/assets/reset.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;GAEG;AACH;EACE,SAAS;AACX;AACA;;GAEG;AACH;;EAEE,YAAY;AACd;AACA;;;;GAIG;AACH;EACE,gBAAgB;EAChB,mCAAmC;IACjC,8BAA8B;IAC9B,wGAAwG;IACxG,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,oCAAoC;IACpC,+BAA+B;;AAEnC;AACA;;GAEG;AACH;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;GAEG;AACH;;;;EAIE,aAAa;AACf;AACA;;GAEG;AACH;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;GAEG;AACH;;EAEE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,0BAA0B;EAC1B,uBAAuB;;AAEzB","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n/*\n    3. Allow percentage-based heights in the application\n  */\nhtml,\nbody {\n  height: 100%;\n}\n/*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;  \n    font-family: Arial, sans-serif;\n    background-image: url('https://i.insider.com/5e8f70a8c023205e4245d983?width=1000&format=jpeg&auto=webp');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: rgba(0, 0, 0, 0.7);\n    background-blend-mode: multiply;\n  \n}\n/*\n    6. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n    7. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n    8. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n    9. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --bg-color: #8294C4;\n  --main-color: #ACB1D6;\n  --secondary-color: #DBDFEA;\n  --accent-color: #FFEAD2;\n\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/mainView.css":
/*!*********************************!*\
  !*** ./src/assets/mainView.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mainView.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/mainView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/reset.css":
/*!******************************!*\
  !*** ./src/assets/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/scripts/mainView/constants.ts":
/*!*******************************************!*\
  !*** ./src/scripts/mainView/constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRIVAL_AIRPORTS": () => (/* binding */ ARRIVAL_AIRPORTS),
/* harmony export */   "DEPARTURE_AIRPORTS": () => (/* binding */ DEPARTURE_AIRPORTS),
/* harmony export */   "EMPTY_FLIGHT_MODEL": () => (/* binding */ EMPTY_FLIGHT_MODEL),
/* harmony export */   "KATOWICE_COORDINATES": () => (/* binding */ KATOWICE_COORDINATES),
/* harmony export */   "OPENCAGEDATA_API_KEY": () => (/* binding */ OPENCAGEDATA_API_KEY),
/* harmony export */   "OPEN_WEATHER_API_KEY": () => (/* binding */ OPEN_WEATHER_API_KEY)
/* harmony export */ });
// export const API_KEY = '751c5fccbbd330b54786c41ed91cfff3';
var OPEN_WEATHER_API_KEY = 'a48ebb02d984830ced1a889260d4cbd9';
var OPENCAGEDATA_API_KEY = '765eb0efe3f644808f086b836bf0255e'; // Replace with your OpenCage API key
var EMPTY_AIRPORTDATA = {
    name: '',
    icon: '',
    latitude: 0,
    longitude: 0,
};
var EMPTY_FLIGHT_MODEL = {
    departureAirport: EMPTY_AIRPORTDATA,
    arrivalAirport: EMPTY_AIRPORTDATA,
    date: '',
    numberOfPassangers: 0,
};
var KATOWICE_COORDINATES = {
    lon: 19.039993,
    lat: 50.270908,
};
var DEPARTURE_AIRPORTS = {
    Katowice: {
        name: 'Katowice',
        icon: '🇵🇱',
        longitude: 19.039993,
        latitude: 50.270908,
    },
};
var ARRIVAL_AIRPORTS = {
    Warsaw: {
        name: 'Warsaw',
        icon: '🇵🇱',
        longitude: 21.178225,
        latitude: 52.196217,
    },
    Paris: {
        name: 'Paris',
        icon: '🇫🇷',
        longitude: 2.349014,
        latitude: 48.864716,
    },
    NewYork: {
        name: 'New York',
        icon: '🇺🇸',
        longitude: -73.935242,
        latitude: 40.73061,
    },
};


/***/ }),

/***/ "./src/scripts/mainView/function.ts":
/*!******************************************!*\
  !*** ./src/scripts/mainView/function.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "createDropdown": () => (/* binding */ createDropdown),
/* harmony export */   "getCityFromCoordinates": () => (/* binding */ getCityFromCoordinates),
/* harmony export */   "getCurrentWeatherData": () => (/* binding */ getCurrentWeatherData),
/* harmony export */   "getUserLocation": () => (/* binding */ getUserLocation),
/* harmony export */   "handleLoginFormSubmit": () => (/* binding */ handleLoginFormSubmit),
/* harmony export */   "hideLoader": () => (/* binding */ hideLoader),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "saveFormData": () => (/* binding */ saveFormData),
/* harmony export */   "setMinDateForDatePicker": () => (/* binding */ setMinDateForDatePicker),
/* harmony export */   "showLoader": () => (/* binding */ showLoader)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/mainView/constants.ts");
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElements */ "./src/scripts/mainView/htmlElements.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var position, _a, latitude, longitude, weatherDepartureData, weatherArrivalData, cityName, cityOfDepartureKey, cityNameToDispaly;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                showLoader();
                return [4 /*yield*/, getUserLocation()];
            case 1:
                position = _b.sent();
                _a = position.coords, latitude = _a.latitude, longitude = _a.longitude;
                return [4 /*yield*/, getCurrentWeatherData(latitude, longitude)];
            case 2:
                weatherDepartureData = _b.sent();
                return [4 /*yield*/, getCurrentWeatherData(_constants__WEBPACK_IMPORTED_MODULE_0__.ARRIVAL_AIRPORTS.Warsaw.latitude, _constants__WEBPACK_IMPORTED_MODULE_0__.ARRIVAL_AIRPORTS.Warsaw.longitude)];
            case 3:
                weatherArrivalData = _b.sent();
                return [4 /*yield*/, getCityFromCoordinates(latitude, longitude)];
            case 4:
                cityName = _b.sent();
                cityOfDepartureKey = Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS).find(function (airportKey) { return _constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS[airportKey].name === cityName; });
                cityNameToDispaly = cityOfDepartureKey
                    ? _constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS[cityOfDepartureKey].name +
                        ' ' +
                        _constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS[cityOfDepartureKey].icon
                    : cityName;
                _htmlElements__WEBPACK_IMPORTED_MODULE_1__.WEATHER_DEPARTURE_HEADER.textContent = "".concat(cityNameToDispaly, " | ").concat(weatherDepartureData.temperature, "\u00B0C | ").concat(weatherDepartureData.windSpeed, " km/h | ").concat(weatherDepartureData.humidity, " g/m\u00B3");
                _htmlElements__WEBPACK_IMPORTED_MODULE_1__.WEATHER_ARRIVAL_HEADER.textContent = "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.ARRIVAL_AIRPORTS.Warsaw.name, " ").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.ARRIVAL_AIRPORTS.Warsaw.icon, " | ").concat(weatherArrivalData.temperature, "\u00B0C | ").concat(weatherArrivalData.windSpeed, " km/h | ").concat(weatherArrivalData.humidity, " g/m\u00B3");
                hideLoader();
                return [2 /*return*/];
        }
    });
}); };
var saveFormData = function (model) {
    model.departureAirport = _constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS[_htmlElements__WEBPACK_IMPORTED_MODULE_1__.DEPARTURE_DROPDOWN.value];
    model.arrivalAirport = _constants__WEBPACK_IMPORTED_MODULE_0__.ARRIVAL_AIRPORTS[_htmlElements__WEBPACK_IMPORTED_MODULE_1__.ARRIVAL_DROPDOWN.value];
    model.date = _htmlElements__WEBPACK_IMPORTED_MODULE_1__.DATE_PICKER.value;
    model.numberOfPassangers = Number(_htmlElements__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_PASSENGERS_PICKER.value);
    localStorage.setItem('model', JSON.stringify(model));
};
var getUserLocation = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                if (!navigator.geolocation) {
                    reject(new Error('Geolocation is not supported.'));
                }
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve(position);
                }, function (error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        resolve({
                            coords: {
                                latitude: _constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS.Katowice.latitude,
                                longitude: _constants__WEBPACK_IMPORTED_MODULE_0__.DEPARTURE_AIRPORTS.Katowice.longitude,
                                accuracy: 0,
                                altitude: undefined,
                                altitudeAccuracy: undefined,
                                heading: undefined,
                                speed: undefined,
                            },
                            timestamp: 0,
                        });
                    }
                    else {
                        reject(new Error("Failed to retrieve location: ".concat(error.message)));
                    }
                });
            })];
    });
}); };
var getCityFromCoordinates = function (latitude, longitude) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        url = "https://api.opencagedata.com/geocode/v1/json?q=".concat(latitude, "+").concat(longitude, "&key=").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.OPENCAGEDATA_API_KEY);
        return [2 /*return*/, new Promise(function (resolve, reject) {
                fetch(url)
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    if (data.results.length > 0) {
                        var city = data.results[0].components.city;
                        if (city) {
                            resolve(city);
                        }
                        else {
                            reject(new Error('City not found.'));
                        }
                    }
                    else {
                        reject(new Error('Location not found.'));
                    }
                })
                    .catch(function (error) {
                    reject(error);
                });
            })];
    });
}); };
var getCurrentWeatherData = function (lat, lon) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, temperature, humidity, windSpeed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(_constants__WEBPACK_IMPORTED_MODULE_0__.OPEN_WEATHER_API_KEY, "&units=metric"))];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                temperature = data.main.temp;
                humidity = data.main.humidity;
                windSpeed = data.wind.speed;
                return [2 /*return*/, { temperature: temperature, humidity: humidity, windSpeed: windSpeed }];
        }
    });
}); };
var createDropdown = function (dropdownData, selectedHtmlElement) {
    for (var key in dropdownData) {
        var selectedCity = dropdownData[key];
        var option = document.createElement('option');
        option.setAttribute('value', key);
        var optionText = document.createTextNode("".concat(selectedCity.name, " ").concat(selectedCity.icon));
        option.appendChild(optionText);
        selectedHtmlElement.appendChild(option);
    }
};
var setMinDateForDatePicker = function () {
    var minDate = new Date().toISOString().split('T')[0];
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.DATE_PICKER.setAttribute('min', minDate);
};
var showLoader = function () {
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOADERS.forEach(function (loader) {
        loader.style.display = 'grid';
    });
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.WEATHER_ARRIVAL_HEADER.style.display = 'none';
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.WEATHER_DEPARTURE_HEADER.style.display = 'none';
};
var hideLoader = function () {
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOADERS.forEach(function (loader) {
        loader.style.display = 'none';
    });
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.WEATHER_ARRIVAL_HEADER.style.display = 'block';
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.WEATHER_DEPARTURE_HEADER.style.display = 'block';
};
function handleLoginFormSubmit() {
    return __awaiter(this, void 0, void 0, function () {
        var url;
        return __generator(this, function (_a) {
            url = 'detailsView.html';
            if (!_htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOGIN_FORM_USERNAME || !_htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOGIN_FORM_PASSWORD) {
                console.error('Could not find username and/or password input elements.');
                return [2 /*return*/];
            }
            fetch('users.json')
                .then(function (response) { return response.json(); })
                .then(function (loginData) {
                var isLoginAndPasswordMatch = loginData.users.find(function (user) {
                    return user.username === _htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOGIN_FORM_USERNAME.value &&
                        user.password === _htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOGIN_FORM_PASSWORD.value;
                });
                if (isLoginAndPasswordMatch) {
                    alert('Login successful!');
                    window.location.href = url;
                }
                else {
                    alert('Username or password is incorrect. Please try again.');
                }
            })
                .catch(function (error) {
                console.error('Error fetching login data:', error);
                alert('Error logging in. Please try again later.');
            });
            return [2 /*return*/];
        });
    });
}
var openModal = function () {
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOGIN_MODAL.style.display = 'block';
};
var closeModal = function () {
    _htmlElements__WEBPACK_IMPORTED_MODULE_1__.LOGIN_MODAL.style.display = 'none';
};


/***/ }),

/***/ "./src/scripts/mainView/htmlElements.ts":
/*!**********************************************!*\
  !*** ./src/scripts/mainView/htmlElements.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRIVAL_DROPDOWN": () => (/* binding */ ARRIVAL_DROPDOWN),
/* harmony export */   "DATE_PICKER": () => (/* binding */ DATE_PICKER),
/* harmony export */   "DEPARTURE_DROPDOWN": () => (/* binding */ DEPARTURE_DROPDOWN),
/* harmony export */   "LOADERS": () => (/* binding */ LOADERS),
/* harmony export */   "LOGIN_FORM": () => (/* binding */ LOGIN_FORM),
/* harmony export */   "LOGIN_FORM_PASSWORD": () => (/* binding */ LOGIN_FORM_PASSWORD),
/* harmony export */   "LOGIN_FORM_USERNAME": () => (/* binding */ LOGIN_FORM_USERNAME),
/* harmony export */   "LOGIN_MODAL": () => (/* binding */ LOGIN_MODAL),
/* harmony export */   "LOGIN_MODAL_CLOSE_BTN": () => (/* binding */ LOGIN_MODAL_CLOSE_BTN),
/* harmony export */   "NUMBER_OF_PASSENGERS_PICKER": () => (/* binding */ NUMBER_OF_PASSENGERS_PICKER),
/* harmony export */   "SUBMIT_FORM": () => (/* binding */ SUBMIT_FORM),
/* harmony export */   "WEATHER_ARRIVAL_HEADER": () => (/* binding */ WEATHER_ARRIVAL_HEADER),
/* harmony export */   "WEATHER_DEPARTURE_HEADER": () => (/* binding */ WEATHER_DEPARTURE_HEADER)
/* harmony export */ });
var WEATHER_DEPARTURE_HEADER = document.getElementById('main-view-departure-weather');
var WEATHER_ARRIVAL_HEADER = document.getElementById('main-view-arrival-header');
var DEPARTURE_DROPDOWN = document.getElementById('departureDropDown');
var ARRIVAL_DROPDOWN = document.getElementById('arrivalDropDown');
var DATE_PICKER = document.getElementById('datePicker');
var LOADERS = document.querySelectorAll('.loader-container');
var NUMBER_OF_PASSENGERS_PICKER = document.getElementById('main-view-passengers-picker');
var SUBMIT_FORM = document.querySelector('.main-view-form-container');
var LOGIN_MODAL = document.querySelector('.modal');
var LOGIN_MODAL_CLOSE_BTN = document.querySelector('.close');
var LOGIN_FORM = document.querySelector('.main-view-login-form');
var LOGIN_FORM_USERNAME = document.querySelector('#username');
var LOGIN_FORM_PASSWORD = document.querySelector('#password');


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/scripts/mainView/mainView.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_mainView_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/mainView.css */ "./src/assets/mainView.css");
/* harmony import */ var _assets_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/reset.css */ "./src/assets/reset.css");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/scripts/mainView/constants.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function */ "./src/scripts/mainView/function.ts");
/* harmony import */ var _htmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./htmlElements */ "./src/scripts/mainView/htmlElements.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var model = _constants__WEBPACK_IMPORTED_MODULE_2__.EMPTY_FLIGHT_MODEL;
window.addEventListener('load', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        (0,_function__WEBPACK_IMPORTED_MODULE_3__.init)();
        (0,_function__WEBPACK_IMPORTED_MODULE_3__.createDropdown)(_constants__WEBPACK_IMPORTED_MODULE_2__.DEPARTURE_AIRPORTS, _htmlElements__WEBPACK_IMPORTED_MODULE_4__.DEPARTURE_DROPDOWN);
        (0,_function__WEBPACK_IMPORTED_MODULE_3__.createDropdown)(_constants__WEBPACK_IMPORTED_MODULE_2__.ARRIVAL_AIRPORTS, _htmlElements__WEBPACK_IMPORTED_MODULE_4__.ARRIVAL_DROPDOWN);
        (0,_function__WEBPACK_IMPORTED_MODULE_3__.setMinDateForDatePicker)();
        return [2 /*return*/];
    });
}); });
_htmlElements__WEBPACK_IMPORTED_MODULE_4__.ARRIVAL_DROPDOWN.addEventListener('change', function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var selectedCity, selectedCityData, weatherData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(event.target instanceof HTMLSelectElement &&
                    event.target.value !== 'none')) return [3 /*break*/, 2];
                (0,_function__WEBPACK_IMPORTED_MODULE_3__.showLoader)();
                selectedCity = event.target.value;
                selectedCityData = _constants__WEBPACK_IMPORTED_MODULE_2__.ARRIVAL_AIRPORTS[selectedCity];
                return [4 /*yield*/, (0,_function__WEBPACK_IMPORTED_MODULE_3__.getCurrentWeatherData)(selectedCityData.latitude, selectedCityData.longitude)];
            case 1:
                weatherData = _a.sent();
                _htmlElements__WEBPACK_IMPORTED_MODULE_4__.WEATHER_ARRIVAL_HEADER.textContent = "".concat(selectedCityData.name, " ").concat(selectedCityData.icon, " | ").concat(weatherData.temperature, "\u00B0C | ").concat(weatherData.windSpeed, " km/h | ").concat(weatherData.humidity, " g/m\u00B3");
                (0,_function__WEBPACK_IMPORTED_MODULE_3__.hideLoader)();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); });
_htmlElements__WEBPACK_IMPORTED_MODULE_4__.SUBMIT_FORM.addEventListener('submit', function (event) {
    event.preventDefault();
    (0,_function__WEBPACK_IMPORTED_MODULE_3__.saveFormData)(model);
    (0,_function__WEBPACK_IMPORTED_MODULE_3__.openModal)();
});
_htmlElements__WEBPACK_IMPORTED_MODULE_4__.LOGIN_MODAL_CLOSE_BTN.addEventListener('click', function () { return (0,_function__WEBPACK_IMPORTED_MODULE_3__.closeModal)(); });
_htmlElements__WEBPACK_IMPORTED_MODULE_4__.LOGIN_FORM.addEventListener('submit', function (event) {
    event.preventDefault();
    (0,_function__WEBPACK_IMPORTED_MODULE_3__.handleLoginFormSubmit)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztJQUNwQixvREFBUyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQztBQUVILGlGQUFzQyxDQUFDLE9BQU8sRUFBRSxjQUFNLDREQUFVLEVBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztBQUVwRSxzRUFBMkIsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO0lBQzFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixnRUFBcUIsRUFBRSxDQUFDO0FBQzFCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3NiX2Zyb250ZW5kX2ZpbmFsX3Byb2plY3QvLi9zcmMvYXNzZXRzL21haW5WaWV3LmNzcyIsIndlYnBhY2s6Ly93c2JfZnJvbnRlbmRfZmluYWxfcHJvamVjdC8uL3NyYy9hc3NldHMvcmVzZXQuY3NzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93c2JfZnJvbnRlbmRfZmluYWxfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9tYWluVmlldy5jc3M/ZDEyMCIsIndlYnBhY2s6Ly93c2JfZnJvbnRlbmRfZmluYWxfcHJvamVjdC8uL3NyYy9hc3NldHMvcmVzZXQuY3NzPzEzZmYiLCJ3ZWJwYWNrOi8vd3NiX2Zyb250ZW5kX2ZpbmFsX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd3NiX2Zyb250ZW5kX2ZpbmFsX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd3NiX2Zyb250ZW5kX2ZpbmFsX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93c2JfZnJvbnRlbmRfZmluYWxfcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW5WaWV3L2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93c2JfZnJvbnRlbmRfZmluYWxfcHJvamVjdC8uL3NyYy9zY3JpcHRzL21haW5WaWV3L2Z1bmN0aW9uLnRzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFpblZpZXcvaHRtbEVsZW1lbnRzLnRzIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93c2JfZnJvbnRlbmRfZmluYWxfcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd3NiX2Zyb250ZW5kX2ZpbmFsX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dzYl9mcm9udGVuZF9maW5hbF9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFpblZpZXcvbWFpblZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi12aWV3LWJvZHkge1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxheW91dCB7XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ubWFpbi12aWV3LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbi5tYWluLXZpZXctaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4tdmlldy1jb250YWluZXItd2VhdGhlciB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWluLWhlaWdodDogMjhweDtcXG4gIG1hcmdpbjogNHB4IDA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tdmlldy1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubWFpbi12aWV3LWZvcm0tY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5tYWluLXZpZXctZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbi5tYWluLXZpZXctZm9ybS1jb250YWluZXIgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXZpZXctZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tdmlldy1mb3JtLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMzQ5OGRiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG59XFxuXFxuLm1haW4tdmlldy1sb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi12aWV3LWxvZ2luLWZvcm0gbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLXZpZXctbG9naW4tZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuLm1haW4tdmlldy1sb2dpbi1mb3JtIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXFxuLm1haW4tdmlldy1sb2dpbi1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXZpZXctbG9naW4tZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxufVxcblxcbi5tYWluLXZpZXctbG9naW4tZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL21haW5WaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi12aWV3LWJvZHkge1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxheW91dCB7XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4ubWFpbi12aWV3LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbi5tYWluLXZpZXctaGVhZGVyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4tdmlldy1jb250YWluZXItd2VhdGhlciB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWluLWhlaWdodDogMjhweDtcXG4gIG1hcmdpbjogNHB4IDA7XFxuICBwYWRkaW5nOiAycHggOHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tdmlldy1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubWFpbi12aWV3LWZvcm0tY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5tYWluLXZpZXctZm9ybS1jb250YWluZXIgc2VsZWN0LFxcbi5tYWluLXZpZXctZm9ybS1jb250YWluZXIgaW5wdXQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXZpZXctZm9ybS1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1haW4tdmlldy1mb3JtLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjlkOTtcXG59XFxuXFxuLmxvYWRlci1jb250YWluZXIge1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2FkZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2YzZjNmMztcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMzQ5OGRiO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxNSUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG59XFxuXFxuLm1haW4tdmlldy1sb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubWFpbi12aWV3LWxvZ2luLWZvcm0gbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLXZpZXctbG9naW4tZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sXFxuLm1haW4tdmlldy1sb2dpbi1mb3JtIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXFxuLm1haW4tdmlldy1sb2dpbi1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluLXZpZXctbG9naW4tZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XFxufVxcblxcbi5tYWluLXZpZXctbG9naW4tZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qXFxuICAgIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiAgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gICAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcbiAgKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4vKlxcbiAgICBUeXBvZ3JhcGhpYyB0d2Vha3MhXFxuICAgIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICAgIDUuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4gICovXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7ICBcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5pbnNpZGVyLmNvbS81ZThmNzBhOGMwMjMyMDVlNDI0NWQ5ODM/d2lkdGg9MTAwMCZmb3JtYXQ9anBlZyZhdXRvPXdlYnAnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBcXG59XFxuLypcXG4gICAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiAgKi9cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiAgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbi8qXFxuICAgIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuICAqL1xcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLypcXG4gICAgOS4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxuICAqL1xcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjODI5NEM0O1xcbiAgLS1tYWluLWNvbG9yOiAjQUNCMUQ2O1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNEQkRGRUE7XFxuICAtLWFjY2VudC1jb2xvcjogI0ZGRUFEMjtcXG5cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFDRDs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLFNBQVM7QUFDWDtBQUNBOztHQUVHO0FBQ0g7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7R0FJRztBQUNIO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztJQUNqQyw4QkFBOEI7SUFDOUIsd0dBQXdHO0lBQ3hHLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9DQUFvQztJQUNwQywrQkFBK0I7O0FBRW5DO0FBQ0E7O0dBRUc7QUFDSDs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOztHQUVHO0FBQ0g7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFDQTs7R0FFRztBQUNIOzs7Ozs7O0VBT0UseUJBQXlCO0FBQzNCO0FBQ0E7O0dBRUc7QUFDSDs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQix1QkFBdUI7O0FBRXpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLypcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuICAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4vKlxcbiAgICAzLiBBbGxvdyBwZXJjZW50YWdlLWJhc2VkIGhlaWdodHMgaW4gdGhlIGFwcGxpY2F0aW9uXFxuICAqL1xcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qXFxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gICAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gICAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcbiAgKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgIFxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLmluc2lkZXIuY29tLzVlOGY3MGE4YzAyMzIwNWU0MjQ1ZDk4Mz93aWR0aD0xMDAwJmZvcm1hdD1qcGVnJmF1dG89d2VicCcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIFxcbn1cXG4vKlxcbiAgICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxuICAqL1xcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi8qXFxuICAgIDcuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxuICAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gICAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4gICovXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4vKlxcbiAgICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4gICovXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6ICM4Mjk0QzQ7XFxuICAtLW1haW4tY29sb3I6ICNBQ0IxRDY7XFxuICAtLXNlY29uZGFyeS1jb2xvcjogI0RCREZFQTtcXG4gIC0tYWNjZW50LWNvbG9yOiAjRkZFQUQyO1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluVmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5WaWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQWlycG9ydERhdGEgfSBmcm9tICcuL2ludGVyZmFjZXMvQWlycG9ydERhdGEnO1xuaW1wb3J0IHsgRHJvcGRvd25EYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0Ryb3Bkb3duRGF0YSc7XG5pbXBvcnQgeyBGbGlnaHRNb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlcy9GbGlnaHRNb2RlbCc7XG5cbi8vIGV4cG9ydCBjb25zdCBBUElfS0VZID0gJzc1MWM1ZmNjYmJkMzMwYjU0Nzg2YzQxZWQ5MWNmZmYzJztcbmV4cG9ydCBjb25zdCBPUEVOX1dFQVRIRVJfQVBJX0tFWSA9ICdhNDhlYmIwMmQ5ODQ4MzBjZWQxYTg4OTI2MGQ0Y2JkOSc7XG5leHBvcnQgY29uc3QgT1BFTkNBR0VEQVRBX0FQSV9LRVkgPSAnNzY1ZWIwZWZlM2Y2NDQ4MDhmMDg2YjgzNmJmMDI1NWUnOyAvLyBSZXBsYWNlIHdpdGggeW91ciBPcGVuQ2FnZSBBUEkga2V5XG5cbmNvbnN0IEVNUFRZX0FJUlBPUlREQVRBOiBBaXJwb3J0RGF0YSA9IHtcbiAgbmFtZTogJycsXG4gIGljb246ICcnLFxuICBsYXRpdHVkZTogMCxcbiAgbG9uZ2l0dWRlOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IEVNUFRZX0ZMSUdIVF9NT0RFTDogRmxpZ2h0TW9kZWwgPSB7XG4gIGRlcGFydHVyZUFpcnBvcnQ6IEVNUFRZX0FJUlBPUlREQVRBLFxuICBhcnJpdmFsQWlycG9ydDogRU1QVFlfQUlSUE9SVERBVEEsXG4gIGRhdGU6ICcnLFxuICBudW1iZXJPZlBhc3NhbmdlcnM6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgS0FUT1dJQ0VfQ09PUkRJTkFURVMgPSB7XG4gIGxvbjogMTkuMDM5OTkzLFxuICBsYXQ6IDUwLjI3MDkwOCxcbn07XG5cbmV4cG9ydCBjb25zdCBERVBBUlRVUkVfQUlSUE9SVFM6IERyb3Bkb3duRGF0YSA9IHtcbiAgS2F0b3dpY2U6IHtcbiAgICBuYW1lOiAnS2F0b3dpY2UnLFxuICAgIGljb246ICfwn4e18J+HsScsXG4gICAgbG9uZ2l0dWRlOiAxOS4wMzk5OTMsXG4gICAgbGF0aXR1ZGU6IDUwLjI3MDkwOCxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBBUlJJVkFMX0FJUlBPUlRTOiBEcm9wZG93bkRhdGEgPSB7XG4gIFdhcnNhdzoge1xuICAgIG5hbWU6ICdXYXJzYXcnLFxuICAgIGljb246ICfwn4e18J+HsScsXG4gICAgbG9uZ2l0dWRlOiAyMS4xNzgyMjUsXG4gICAgbGF0aXR1ZGU6IDUyLjE5NjIxNyxcbiAgfSxcbiAgUGFyaXM6IHtcbiAgICBuYW1lOiAnUGFyaXMnLFxuICAgIGljb246ICfwn4er8J+HtycsXG4gICAgbG9uZ2l0dWRlOiAyLjM0OTAxNCxcbiAgICBsYXRpdHVkZTogNDguODY0NzE2LFxuICB9LFxuICBOZXdZb3JrOiB7XG4gICAgbmFtZTogJ05ldyBZb3JrJyxcbiAgICBpY29uOiAn8J+HuvCfh7gnLFxuICAgIGxvbmdpdHVkZTogLTczLjkzNTI0MixcbiAgICBsYXRpdHVkZTogNDAuNzMwNjEsXG4gIH0sXG59O1xuIiwiaW1wb3J0IHtcbiAgQVJSSVZBTF9BSVJQT1JUUyxcbiAgREVQQVJUVVJFX0FJUlBPUlRTLFxuICBPUEVOQ0FHRURBVEFfQVBJX0tFWSxcbiAgT1BFTl9XRUFUSEVSX0FQSV9LRVksXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIEFSUklWQUxfRFJPUERPV04sXG4gIERBVEVfUElDS0VSLFxuICBERVBBUlRVUkVfRFJPUERPV04sXG4gIExPQURFUlMsXG4gIExPR0lOX0ZPUk1fUEFTU1dPUkQsXG4gIExPR0lOX0ZPUk1fVVNFUk5BTUUsXG4gIExPR0lOX01PREFMLFxuICBOVU1CRVJfT0ZfUEFTU0VOR0VSU19QSUNLRVIsXG4gIFdFQVRIRVJfQVJSSVZBTF9IRUFERVIsXG4gIFdFQVRIRVJfREVQQVJUVVJFX0hFQURFUixcbn0gZnJvbSAnLi9odG1sRWxlbWVudHMnO1xuaW1wb3J0IHsgRHJvcGRvd25EYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0Ryb3Bkb3duRGF0YSc7XG5pbXBvcnQgeyBGbGlnaHRNb2RlbCB9IGZyb20gJy4vaW50ZXJmYWNlcy9GbGlnaHRNb2RlbCc7XG5pbXBvcnQgeyBMb2dpbkRhdGFEdG8gfSBmcm9tICcuL2ludGVyZmFjZXMvTG9naW5EYXRhRHRvJztcbmltcG9ydCB7IFdlYXRoZXJEYXRhRHRvIH0gZnJvbSAnLi9pbnRlcmZhY2VzL1dlYXRoZXJEYXRhRHRvJztcblxuZXhwb3J0IGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIHNob3dMb2FkZXIoKTtcbiAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBnZXRVc2VyTG9jYXRpb24oKTtcbiAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gIGNvbnN0IHdlYXRoZXJEZXBhcnR1cmVEYXRhID0gYXdhaXQgZ2V0Q3VycmVudFdlYXRoZXJEYXRhKGxhdGl0dWRlLCBsb25naXR1ZGUpO1xuICBjb25zdCB3ZWF0aGVyQXJyaXZhbERhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlckRhdGEoXG4gICAgQVJSSVZBTF9BSVJQT1JUUy5XYXJzYXcubGF0aXR1ZGUsXG4gICAgQVJSSVZBTF9BSVJQT1JUUy5XYXJzYXcubG9uZ2l0dWRlXG4gICk7XG4gIGNvbnN0IGNpdHlOYW1lID0gYXdhaXQgZ2V0Q2l0eUZyb21Db29yZGluYXRlcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKTtcbiAgY29uc3QgY2l0eU9mRGVwYXJ0dXJlS2V5ID0gT2JqZWN0LmtleXMoREVQQVJUVVJFX0FJUlBPUlRTKS5maW5kKFxuICAgIChhaXJwb3J0S2V5KSA9PiBERVBBUlRVUkVfQUlSUE9SVFNbYWlycG9ydEtleV0ubmFtZSA9PT0gY2l0eU5hbWVcbiAgKTtcbiAgY29uc3QgY2l0eU5hbWVUb0Rpc3BhbHkgPSBjaXR5T2ZEZXBhcnR1cmVLZXlcbiAgICA/IERFUEFSVFVSRV9BSVJQT1JUU1tjaXR5T2ZEZXBhcnR1cmVLZXldLm5hbWUgK1xuICAgICAgJyAnICtcbiAgICAgIERFUEFSVFVSRV9BSVJQT1JUU1tjaXR5T2ZEZXBhcnR1cmVLZXldLmljb25cbiAgICA6IGNpdHlOYW1lO1xuXG4gIFdFQVRIRVJfREVQQVJUVVJFX0hFQURFUi50ZXh0Q29udGVudCA9IGAke2NpdHlOYW1lVG9EaXNwYWx5fSB8ICR7d2VhdGhlckRlcGFydHVyZURhdGEudGVtcGVyYXR1cmV9wrBDIHwgJHt3ZWF0aGVyRGVwYXJ0dXJlRGF0YS53aW5kU3BlZWR9IGttL2ggfCAke3dlYXRoZXJEZXBhcnR1cmVEYXRhLmh1bWlkaXR5fSBnL23Cs2A7XG4gIFdFQVRIRVJfQVJSSVZBTF9IRUFERVIudGV4dENvbnRlbnQgPSBgJHtBUlJJVkFMX0FJUlBPUlRTLldhcnNhdy5uYW1lfSAke0FSUklWQUxfQUlSUE9SVFMuV2Fyc2F3Lmljb259IHwgJHt3ZWF0aGVyQXJyaXZhbERhdGEudGVtcGVyYXR1cmV9wrBDIHwgJHt3ZWF0aGVyQXJyaXZhbERhdGEud2luZFNwZWVkfSBrbS9oIHwgJHt3ZWF0aGVyQXJyaXZhbERhdGEuaHVtaWRpdHl9IGcvbcKzYDtcbiAgaGlkZUxvYWRlcigpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNhdmVGb3JtRGF0YSA9IChtb2RlbDogRmxpZ2h0TW9kZWwpID0+IHtcbiAgbW9kZWwuZGVwYXJ0dXJlQWlycG9ydCA9IERFUEFSVFVSRV9BSVJQT1JUU1tERVBBUlRVUkVfRFJPUERPV04udmFsdWVdO1xuICBtb2RlbC5hcnJpdmFsQWlycG9ydCA9IEFSUklWQUxfQUlSUE9SVFNbQVJSSVZBTF9EUk9QRE9XTi52YWx1ZV07XG4gIG1vZGVsLmRhdGUgPSBEQVRFX1BJQ0tFUi52YWx1ZTtcbiAgbW9kZWwubnVtYmVyT2ZQYXNzYW5nZXJzID0gTnVtYmVyKE5VTUJFUl9PRl9QQVNTRU5HRVJTX1BJQ0tFUi52YWx1ZSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGVsJywgSlNPTi5zdHJpbmdpZnkobW9kZWwpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyTG9jYXRpb24gPSBhc3luYyAoKTogUHJvbWlzZTxHZW9sb2NhdGlvblBvc2l0aW9uPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTxHZW9sb2NhdGlvblBvc2l0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0dlb2xvY2F0aW9uIGlzIG5vdCBzdXBwb3J0ZWQuJykpO1xuICAgIH1cbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIHJlc29sdmUocG9zaXRpb24pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gZXJyb3IuUEVSTUlTU0lPTl9ERU5JRUQpIHtcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIGNvb3Jkczoge1xuICAgICAgICAgICAgICBsYXRpdHVkZTogREVQQVJUVVJFX0FJUlBPUlRTLkthdG93aWNlLmxhdGl0dWRlLFxuICAgICAgICAgICAgICBsb25naXR1ZGU6IERFUEFSVFVSRV9BSVJQT1JUUy5LYXRvd2ljZS5sb25naXR1ZGUsXG4gICAgICAgICAgICAgIGFjY3VyYWN5OiAwLFxuICAgICAgICAgICAgICBhbHRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBhbHRpdHVkZUFjY3VyYWN5OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGhlYWRpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc3BlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aW1lc3RhbXA6IDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgRmFpbGVkIHRvIHJldHJpZXZlIGxvY2F0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2l0eUZyb21Db29yZGluYXRlcyA9IGFzeW5jIChcbiAgbGF0aXR1ZGU6IG51bWJlcixcbiAgbG9uZ2l0dWRlOiBudW1iZXJcbik6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9xPSR7bGF0aXR1ZGV9KyR7bG9uZ2l0dWRlfSZrZXk9JHtPUEVOQ0FHRURBVEFfQVBJX0tFWX1gO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGNpdHkgPSBkYXRhLnJlc3VsdHNbMF0uY29tcG9uZW50cy5jaXR5O1xuICAgICAgICAgIGlmIChjaXR5KSB7XG4gICAgICAgICAgICByZXNvbHZlKGNpdHkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDaXR5IG5vdCBmb3VuZC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZC4nKSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFdlYXRoZXJEYXRhID0gYXN5bmMgKFxuICBsYXQ6IG51bWJlcixcbiAgbG9uOiBudW1iZXJcbik6IFByb21pc2U8V2VhdGhlckRhdGFEdG8+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7T1BFTl9XRUFUSEVSX0FQSV9LRVl9JnVuaXRzPW1ldHJpY2BcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXRhLm1haW4udGVtcDtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgcmV0dXJuIHsgdGVtcGVyYXR1cmUsIGh1bWlkaXR5LCB3aW5kU3BlZWQgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEcm9wZG93biA9IChcbiAgZHJvcGRvd25EYXRhOiBEcm9wZG93bkRhdGEsXG4gIHNlbGVjdGVkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50XG4pID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGRyb3Bkb3duRGF0YSkge1xuICAgIGNvbnN0IHNlbGVjdGVkQ2l0eSA9IGRyb3Bkb3duRGF0YVtrZXldO1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGtleSk7XG5cbiAgICBsZXQgb3B0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgYCR7c2VsZWN0ZWRDaXR5Lm5hbWV9ICR7c2VsZWN0ZWRDaXR5Lmljb259YFxuICAgICk7XG4gICAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xuXG4gICAgc2VsZWN0ZWRIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TWluRGF0ZUZvckRhdGVQaWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgREFURV9QSUNLRVIuc2V0QXR0cmlidXRlKCdtaW4nLCBtaW5EYXRlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TG9hZGVyID0gKCkgPT4ge1xuICBMT0FERVJTLmZvckVhY2goKGxvYWRlcikgPT4ge1xuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9KTtcbiAgV0VBVEhFUl9BUlJJVkFMX0hFQURFUi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBXRUFUSEVSX0RFUEFSVFVSRV9IRUFERVIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmV4cG9ydCBjb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xuICBMT0FERVJTLmZvckVhY2goKGxvYWRlcikgPT4ge1xuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbiAgV0VBVEhFUl9BUlJJVkFMX0hFQURFUi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgV0VBVEhFUl9ERVBBUlRVUkVfSEVBREVSLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxvZ2luRm9ybVN1Ym1pdCgpIHtcbiAgY29uc3QgdXJsID0gJ2RldGFpbHNWaWV3Lmh0bWwnO1xuICBpZiAoIUxPR0lOX0ZPUk1fVVNFUk5BTUUgfHwgIUxPR0lOX0ZPUk1fUEFTU1dPUkQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDb3VsZCBub3QgZmluZCB1c2VybmFtZSBhbmQvb3IgcGFzc3dvcmQgaW5wdXQgZWxlbWVudHMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZldGNoKCd1c2Vycy5qc29uJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigobG9naW5EYXRhKSA9PiB7XG4gICAgICBjb25zdCBpc0xvZ2luQW5kUGFzc3dvcmRNYXRjaCA9IGxvZ2luRGF0YS51c2Vycy5maW5kKFxuICAgICAgICAodXNlcjogTG9naW5EYXRhRHRvKSA9PlxuICAgICAgICAgIHVzZXIudXNlcm5hbWUgPT09IExPR0lOX0ZPUk1fVVNFUk5BTUUudmFsdWUgJiZcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkID09PSBMT0dJTl9GT1JNX1BBU1NXT1JELnZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAoaXNMb2dpbkFuZFBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgYWxlcnQoJ0xvZ2luIHN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGxvZ2luIGRhdGE6JywgZXJyb3IpO1xuICAgICAgYWxlcnQoJ0Vycm9yIGxvZ2dpbmcgaW4uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gIExPR0lOX01PREFMLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIExPR0lOX01PREFMLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuIiwiZXhwb3J0IGNvbnN0IFdFQVRIRVJfREVQQVJUVVJFX0hFQURFUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAnbWFpbi12aWV3LWRlcGFydHVyZS13ZWF0aGVyJ1xuKTtcbmV4cG9ydCBjb25zdCBXRUFUSEVSX0FSUklWQUxfSEVBREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICdtYWluLXZpZXctYXJyaXZhbC1oZWFkZXInXG4pO1xuZXhwb3J0IGNvbnN0IERFUEFSVFVSRV9EUk9QRE9XTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAnZGVwYXJ0dXJlRHJvcERvd24nXG4pIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuZXhwb3J0IGNvbnN0IEFSUklWQUxfRFJPUERPV04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgJ2Fycml2YWxEcm9wRG93bidcbikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgREFURV9QSUNLRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgJ2RhdGVQaWNrZXInXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgTE9BREVSUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICcubG9hZGVyLWNvbnRhaW5lcidcbikgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD47XG5leHBvcnQgY29uc3QgTlVNQkVSX09GX1BBU1NFTkdFUlNfUElDS0VSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICdtYWluLXZpZXctcGFzc2VuZ2Vycy1waWNrZXInXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgU1VCTUlUX0ZPUk0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi12aWV3LWZvcm0tY29udGFpbmVyJyk7XG5leHBvcnQgY29uc3QgTE9HSU5fTU9EQUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSBhcyBIVE1MRWxlbWVudDtcbmV4cG9ydCBjb25zdCBMT0dJTl9NT0RBTF9DTE9TRV9CVE4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmV4cG9ydCBjb25zdCBMT0dJTl9GT1JNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdmlldy1sb2dpbi1mb3JtJyk7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9VU0VSTkFNRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjdXNlcm5hbWUnXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5leHBvcnQgY29uc3QgTE9HSU5fRk9STV9QQVNTV09SRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjcGFzc3dvcmQnXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi8uLi9hc3NldHMvbWFpblZpZXcuY3NzXCJcbmltcG9ydCBcIi4uLy4uL2Fzc2V0cy9yZXNldC5jc3NcIlxuaW1wb3J0IHtcbiAgQVJSSVZBTF9BSVJQT1JUUyxcbiAgREVQQVJUVVJFX0FJUlBPUlRTLFxuICBFTVBUWV9GTElHSFRfTU9ERUwsXG59IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGNsb3NlTW9kYWwsXG4gIGNyZWF0ZURyb3Bkb3duLFxuICBnZXRDdXJyZW50V2VhdGhlckRhdGEsXG4gIGhhbmRsZUxvZ2luRm9ybVN1Ym1pdCxcbiAgaGlkZUxvYWRlcixcbiAgaW5pdCxcbiAgb3Blbk1vZGFsLFxuICBzYXZlRm9ybURhdGEsXG4gIHNldE1pbkRhdGVGb3JEYXRlUGlja2VyLFxuICBzaG93TG9hZGVyLFxufSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7XG4gIEFSUklWQUxfRFJPUERPV04sXG4gIERFUEFSVFVSRV9EUk9QRE9XTixcbiAgTE9HSU5fRk9STSxcbiAgTE9HSU5fTU9EQUxfQ0xPU0VfQlROLFxuICBTVUJNSVRfRk9STSxcbiAgV0VBVEhFUl9BUlJJVkFMX0hFQURFUixcbn0gZnJvbSAnLi9odG1sRWxlbWVudHMnO1xuXG5jb25zdCBtb2RlbCA9IEVNUFRZX0ZMSUdIVF9NT0RFTDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGluaXQoKTtcbiAgY3JlYXRlRHJvcGRvd24oREVQQVJUVVJFX0FJUlBPUlRTLCBERVBBUlRVUkVfRFJPUERPV04pO1xuICBjcmVhdGVEcm9wZG93bihBUlJJVkFMX0FJUlBPUlRTLCBBUlJJVkFMX0RST1BET1dOKTtcbiAgc2V0TWluRGF0ZUZvckRhdGVQaWNrZXIoKTtcbn0pO1xuXG5BUlJJVkFMX0RST1BET1dOLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoXG4gICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgJiZcbiAgICBldmVudC50YXJnZXQudmFsdWUgIT09ICdub25lJ1xuICApIHtcbiAgICBzaG93TG9hZGVyKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRDaXR5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdGVkQ2l0eURhdGEgPSBBUlJJVkFMX0FJUlBPUlRTW3NlbGVjdGVkQ2l0eV07XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlckRhdGEoXG4gICAgICBzZWxlY3RlZENpdHlEYXRhLmxhdGl0dWRlLFxuICAgICAgc2VsZWN0ZWRDaXR5RGF0YS5sb25naXR1ZGVcbiAgICApO1xuICAgIFdFQVRIRVJfQVJSSVZBTF9IRUFERVIudGV4dENvbnRlbnQgPSBgJHtzZWxlY3RlZENpdHlEYXRhLm5hbWV9ICR7c2VsZWN0ZWRDaXR5RGF0YS5pY29ufSB8ICR7d2VhdGhlckRhdGEudGVtcGVyYXR1cmV9wrBDIHwgJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IGttL2ggfCAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSBnL23Cs2A7XG4gICAgaGlkZUxvYWRlcigpO1xuICB9XG59KTtcblxuU1VCTUlUX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHNhdmVGb3JtRGF0YShtb2RlbCk7XG4gIG9wZW5Nb2RhbCgpO1xufSk7XG5cbkxPR0lOX01PREFMX0NMT1NFX0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XG5cbkxPR0lOX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGhhbmRsZUxvZ2luRm9ybVN1Ym1pdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=