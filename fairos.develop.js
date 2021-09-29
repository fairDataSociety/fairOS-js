(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("stream"));
	else if(typeof define === 'function' && define.amd)
		define(["axios", "stream"], factory);
	else if(typeof exports === 'object')
		exports["FairOS"] = factory(require("axios"), require("stream"));
	else
		root["FairOS"] = factory(root["axios"], root["stream"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_axios__, __WEBPACK_EXTERNAL_MODULE_stream__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/form-data-encoder/lib/esm/Encoder.js":
/*!***********************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/Encoder.js ***!
  \***********************************************************/
/*! exports provided: Encoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoder", function() { return Encoder; });
/* harmony import */ var _util_createBoundary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/createBoundary.js */ "./node_modules/form-data-encoder/lib/esm/util/createBoundary.js");
/* harmony import */ var _util_escapeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/escapeName.js */ "./node_modules/form-data-encoder/lib/esm/util/escapeName.js");
/* harmony import */ var _util_isFormData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFormData.js */ "./node_modules/form-data-encoder/lib/esm/util/isFormData.js");
/* harmony import */ var _util_isFile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFile.js */ "./node_modules/form-data-encoder/lib/esm/util/isFile.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Encoder_instances, _Encoder_CRLF, _Encoder_CRLF_BYTES, _Encoder_CRLF_BYTES_LENGTH, _Encoder_DASHES, _Encoder_encoder, _Encoder_footer, _Encoder_form, _Encoder_getFieldHeader;




class Encoder {
    constructor(form, boundary = Object(_util_createBoundary_js__WEBPACK_IMPORTED_MODULE_0__["default"])(16)) {
        _Encoder_instances.add(this);
        _Encoder_CRLF.set(this, void 0);
        _Encoder_CRLF_BYTES.set(this, void 0);
        _Encoder_CRLF_BYTES_LENGTH.set(this, void 0);
        _Encoder_DASHES.set(this, "-".repeat(2));
        _Encoder_encoder.set(this, void 0);
        _Encoder_footer.set(this, void 0);
        _Encoder_form.set(this, void 0);
        if (!Object(_util_isFormData_js__WEBPACK_IMPORTED_MODULE_2__["default"])(form)) {
            throw new TypeError("Expected first argument to be a FormData instance.");
        }
        if (typeof boundary !== "string") {
            throw new TypeError("Expected boundary to be a string.");
        }
        this.boundary = `form-data-boundary-${boundary}`;
        this.contentType = `multipart/form-data; boundary=${this.boundary}`;
        __classPrivateFieldSet(this, _Encoder_encoder, new TextEncoder(), "f");
        __classPrivateFieldSet(this, _Encoder_CRLF, "\r\n", "f");
        __classPrivateFieldSet(this, _Encoder_CRLF_BYTES, __classPrivateFieldGet(this, _Encoder_encoder, "f").encode(__classPrivateFieldGet(this, _Encoder_CRLF, "f")), "f");
        __classPrivateFieldSet(this, _Encoder_CRLF_BYTES_LENGTH, __classPrivateFieldGet(this, _Encoder_CRLF_BYTES, "f").byteLength, "f");
        __classPrivateFieldSet(this, _Encoder_form, form, "f");
        __classPrivateFieldSet(this, _Encoder_footer, __classPrivateFieldGet(this, _Encoder_encoder, "f").encode(`${__classPrivateFieldGet(this, _Encoder_DASHES, "f")}${this.boundary}${__classPrivateFieldGet(this, _Encoder_DASHES, "f")}${__classPrivateFieldGet(this, _Encoder_CRLF, "f").repeat(2)}`), "f");
        this.headers = Object.freeze({
            "Content-Type": this.contentType,
            "Content-Length": this.getContentLength()
        });
    }
    getContentLength() {
        let length = 0;
        for (const [name, value] of __classPrivateFieldGet(this, _Encoder_form, "f")) {
            length += __classPrivateFieldGet(this, _Encoder_instances, "m", _Encoder_getFieldHeader).call(this, name, value).byteLength;
            length += Object(_util_isFile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)
                ? value.size
                : __classPrivateFieldGet(this, _Encoder_encoder, "f").encode(String(value)).byteLength;
            length += __classPrivateFieldGet(this, _Encoder_CRLF_BYTES_LENGTH, "f");
        }
        return length + __classPrivateFieldGet(this, _Encoder_footer, "f").byteLength;
    }
    *values() {
        for (const [name, value] of __classPrivateFieldGet(this, _Encoder_form, "f").entries()) {
            yield __classPrivateFieldGet(this, _Encoder_instances, "m", _Encoder_getFieldHeader).call(this, name, value);
            yield Object(_util_isFile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) ? value : __classPrivateFieldGet(this, _Encoder_encoder, "f").encode(String(value));
            yield __classPrivateFieldGet(this, _Encoder_CRLF_BYTES, "f");
        }
        yield __classPrivateFieldGet(this, _Encoder_footer, "f");
    }
    async *encode() {
        for (const part of this.values()) {
            if (Object(_util_isFile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(part)) {
                yield* part.stream();
            }
            else {
                yield part;
            }
        }
    }
    [(_Encoder_CRLF = new WeakMap(), _Encoder_CRLF_BYTES = new WeakMap(), _Encoder_CRLF_BYTES_LENGTH = new WeakMap(), _Encoder_DASHES = new WeakMap(), _Encoder_encoder = new WeakMap(), _Encoder_footer = new WeakMap(), _Encoder_form = new WeakMap(), _Encoder_instances = new WeakSet(), _Encoder_getFieldHeader = function _Encoder_getFieldHeader(name, value) {
        let header = "";
        header += `${__classPrivateFieldGet(this, _Encoder_DASHES, "f")}${this.boundary}${__classPrivateFieldGet(this, _Encoder_CRLF, "f")}`;
        header += `Content-Disposition: form-data; name="${Object(_util_escapeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(name)}"`;
        if (Object(_util_isFile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
            header += `; filename="${Object(_util_escapeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.name)}"${__classPrivateFieldGet(this, _Encoder_CRLF, "f")}`;
            header += `Content-Type: ${value.type || "application/octet-stream"}`;
        }
        return __classPrivateFieldGet(this, _Encoder_encoder, "f").encode(`${header}${__classPrivateFieldGet(this, _Encoder_CRLF, "f").repeat(2)}`);
    }, Symbol.iterator)]() {
        return this.values();
    }
    [Symbol.asyncIterator]() {
        return this.encode();
    }
}


/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/FileLike.js":
/*!************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/FileLike.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/FormDataLike.js":
/*!****************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/FormDataLike.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/index.js ***!
  \*********************************************************/
/*! exports provided: Encoder, isFileLike, isFormDataLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormDataLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDataLike.js */ "./node_modules/form-data-encoder/lib/esm/FormDataLike.js");
/* empty/unused harmony star reexport *//* harmony import */ var _FileLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileLike.js */ "./node_modules/form-data-encoder/lib/esm/FileLike.js");
/* empty/unused harmony star reexport *//* harmony import */ var _Encoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Encoder.js */ "./node_modules/form-data-encoder/lib/esm/Encoder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Encoder", function() { return _Encoder_js__WEBPACK_IMPORTED_MODULE_2__["Encoder"]; });

/* harmony import */ var _util_isFile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFile.js */ "./node_modules/form-data-encoder/lib/esm/util/isFile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFileLike", function() { return _util_isFile_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _util_isFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/isFormData.js */ "./node_modules/form-data-encoder/lib/esm/util/isFormData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormDataLike", function() { return _util_isFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/util/createBoundary.js":
/*!***********************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/util/createBoundary.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function createBoundary(size) {
    let res = "";
    while (size--) {
        res += alphabet[(Math.random() * alphabet.length) << 0];
    }
    return res;
}
/* harmony default export */ __webpack_exports__["default"] = (createBoundary);


/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/util/escapeName.js":
/*!*******************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/util/escapeName.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const escapeName = (name) => String(name)
    .replace(/\r/g, "%0D")
    .replace(/\n/g, "%0A")
    .replace(/"/g, "%22");
/* harmony default export */ __webpack_exports__["default"] = (escapeName);


/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/util/isFile.js":
/*!***************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/util/isFile.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/form-data-encoder/lib/esm/util/isFunction.js");

const VALID_NAMES = ["File", "Blob"];
const isFile = (value) => Boolean(value
    && typeof value === "object"
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.constructor)
    && VALID_NAMES.includes(value[Symbol.toStringTag])
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.stream)
    && value.name != null
    && value.size != null
    && value.lastModified != null);
/* harmony default export */ __webpack_exports__["default"] = (isFile);


/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/util/isFormData.js":
/*!*******************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/util/isFormData.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/form-data-encoder/lib/esm/util/isFunction.js");

const isFormData = (value) => Boolean(value
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.constructor)
    && value[Symbol.toStringTag] === "FormData"
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.append)
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.getAll)
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.entries)
    && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value[Symbol.iterator]));
/* harmony default export */ __webpack_exports__["default"] = (isFormData);


/***/ }),

/***/ "./node_modules/form-data-encoder/lib/esm/util/isFunction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/form-data-encoder/lib/esm/util/isFunction.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isFunction = (value) => (typeof value === "function");
/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./src/FairOS.js":
/*!***********************!*\
  !*** ./src/FairOS.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FairOS; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var form_data_encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-data-encoder */ "./node_modules/form-data-encoder/lib/esm/index.js");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // todo self-documented code with possibility to create docs page

var FairOS = /*#__PURE__*/function () {
  function FairOS() {
    var baseURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost:9090/v1/';
    var isStoreNodeCookie = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, FairOS);

    _defineProperty(this, "isNode", typeof window === 'undefined');

    _defineProperty(this, "baseURL", void 0);

    _defineProperty(this, "cookie", '');

    _defineProperty(this, "isStoreNodeCookie", void 0);

    this.baseURL = baseURL;
    this.isStoreNodeCookie = isStoreNodeCookie;
  }

  _createClass(FairOS, [{
    key: "setNodeCookie",
    value: function setNodeCookie() {
      var cookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.cookie = cookie;
    }
  }, {
    key: "setIsStoreNewCookie",
    value: function setIsStoreNewCookie(isStoreNodeCookie) {
      this.isStoreNodeCookie = isStoreNodeCookie;
    }
  }, {
    key: "handleCookies",
    value: function handleCookies(response) {
      if (this.isNode && this.isStoreNodeCookie) {
        var receivedCookie = response.headers['set-cookie'];

        if (receivedCookie && receivedCookie.length) {
          receivedCookie = receivedCookie[0].split(';');

          if (receivedCookie && receivedCookie.length) {
            this.cookie = receivedCookie[0];
          }
        }
      }

      return response;
    }
  }, {
    key: "getCookieObject",
    value: function getCookieObject() {
      return this.isNode ? {
        'Cookie': this.cookie
      } : {};
    }
  }, {
    key: "get",
    value: function get(apiMethod) {
      var _this = this;

      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        baseURL: this.baseURL,
        url: apiMethod,
        method: 'GET',
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, this.getCookieObject()),
        withCredentials: true
      }).then(function (response) {
        return _this.handleCookies(response);
      });
    }
  }, {
    key: "post",
    value: function post(apiMethod) {
      var _this2 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        baseURL: this.baseURL,
        url: apiMethod,
        method: 'POST',
        data: data,
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, this.getCookieObject()),
        withCredentials: true
      }).then(function (response) {
        return _this2.handleCookies(response);
      });
    }
  }, {
    key: "download",
    value: function download(apiMethod) {
      var _this3 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var onDownloadProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        responseType: 'arraybuffer',
        baseURL: this.baseURL,
        url: apiMethod,
        method: 'POST',
        data: data,
        headers: _objectSpread({}, this.getCookieObject()),
        withCredentials: true,
        onDownloadProgress: onDownloadProgress
      }).then(function (response) {
        return _this3.handleCookies(response);
      });
    }
  }, {
    key: "delete",
    value: function _delete(apiMethod) {
      var _this4 = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        baseURL: this.baseURL,
        url: apiMethod,
        method: 'DELETE',
        data: data,
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, this.getCookieObject()),
        withCredentials: true
      }).then(function (response) {
        return _this4.handleCookies(response);
      });
    }
  }, {
    key: "upload",
    value: function upload(apiMethod, formData) {
      var _this5 = this;

      var onUploadProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // todo if node then add headers, if not - not add
      // todo check for node and for browser
      var encoder = new form_data_encoder__WEBPACK_IMPORTED_MODULE_1__["Encoder"](formData);
      return axios__WEBPACK_IMPORTED_MODULE_0___default()({
        baseURL: this.baseURL,
        url: apiMethod,
        method: 'POST',
        data: this.isNode ? stream__WEBPACK_IMPORTED_MODULE_2__["Readable"].from(encoder.encode()) : formData,
        headers: _objectSpread(_objectSpread({}, this.getCookieObject()), this.isNode ? encoder.headers : {}),
        withCredentials: true,
        onUploadProgress: onUploadProgress
      }).then(function (response) {
        return _this5.handleCookies(response);
      });
    }
  }, {
    key: "userLogin",
    value: function userLogin(username, password) {
      return this.post('user/login', {
        user_name: username,
        password: password
      });
    }
  }, {
    key: "userSignup",
    value: function userSignup(username, password) {
      var mnemonic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return this.post('user/signup', {
        user_name: username,
        password: password,
        mnemonic: mnemonic
      });
    }
  }, {
    key: "userImport",
    value: function userImport(username, password) {
      var mnemonic = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

      if (mnemonic && address || !mnemonic && !address) {
        throw Error('Pass only mnemonic or only address');
      }

      return this.post('user/import', {
        user_name: username,
        password: password,
        mnemonic: mnemonic,
        address: address
      });
    }
  }, {
    key: "userPresent",
    value: function userPresent(username) {
      return this.get("user/present?user_name=".concat(username));
    }
  }, {
    key: "userIsLoggedIn",
    value: function userIsLoggedIn(username) {
      return this.get("user/isloggedin?user_name=".concat(username));
    }
  }, {
    key: "userLogout",
    value: function userLogout() {
      return this.post('user/logout');
    }
  }, {
    key: "userExport",
    value: function userExport() {
      return this.post('user/export');
    }
  }, {
    key: "userStat",
    value: function userStat() {
      return this.get('user/stat');
    }
  }, {
    key: "userDelete",
    value: function userDelete(password) {
      return this["delete"]('user/delete', {
        password: password
      });
    }
  }, {
    key: "podNew",
    value: function podNew(podName, password) {
      return this.post('pod/new', {
        pod_name: podName,
        password: password
      });
    }
  }, {
    key: "podOpen",
    value: function podOpen(podName, password) {
      return this.post('pod/open', {
        pod_name: podName,
        password: password
      });
    }
  }, {
    key: "podSync",
    value: function podSync(podName) {
      return this.post('pod/sync', {
        pod_name: podName
      });
    }
  }, {
    key: "podClose",
    value: function podClose(podName) {
      return this.post('pod/close', {
        pod_name: podName
      });
    }
  }, {
    key: "podDelete",
    value: function podDelete(podName) {
      return this["delete"]('pod/delete', {
        pod_name: podName
      });
    }
  }, {
    key: "podLs",
    value: function podLs() {
      return this.get('pod/ls');
    }
  }, {
    key: "podStat",
    value: function podStat(podName) {
      return this.get("pod/stat?pod_name=".concat(podName));
    }
  }, {
    key: "podShare",
    value: function podShare(podName, password) {
      return this.post('pod/share', {
        pod_name: podName,
        password: password
      });
    }
  }, {
    key: "podReceiveInfo",
    value: function podReceiveInfo(sharingRef) {
      return this.get("pod/receiveinfo?sharing_ref=".concat(sharingRef));
    }
  }, {
    key: "podReceive",
    value: function podReceive(sharingRef) {
      return this.get("pod/receive?sharing_ref=".concat(sharingRef));
    }
  }, {
    key: "dirMkdir",
    value: function dirMkdir(podName, dirFullPath) {
      return this.post('dir/mkdir', {
        dir_path: dirFullPath,
        pod_name: podName
      });
    }
  }, {
    key: "dirRmdir",
    value: function dirRmdir(podName, dirFullPath) {
      return this["delete"]('dir/rmdir', {
        dir_path: dirFullPath,
        pod_name: podName
      });
    }
  }, {
    key: "dirLs",
    value: function dirLs(podName) {
      var dirFullPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
      return this.get("dir/ls?pod_name=".concat(podName, "&dir_path=").concat(dirFullPath));
    }
  }, {
    key: "dirStat",
    value: function dirStat(podName, dir, dirFullPath) {
      return this.get("dir/stat?dir=".concat(dir, "&pod_name=").concat(podName, "&dir_path=").concat(dirFullPath));
    }
  }, {
    key: "fileUpload",
    value: function fileUpload(podName, podDirFull, formData) {
      var blockSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '1Mb';
      var onUploadProgress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      if (!formData.has('files')) {
        throw new Error('Field "files" is not defined');
      } // todo implement -H "fairOS-dfs-Compression: snappy/gzip"


      formData.set('pod_name', podName);
      formData.set('block_size', blockSize);
      formData.set('dir_path', podDirFull);
      return this.upload('file/upload', formData, onUploadProgress);
    }
  }, {
    key: "fileDownload",
    value: function fileDownload(podName, filePath, file) {
      var onDownloadProgress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      return this.download("file/download?file_path=".concat(filePath, "&file=").concat(file, "&pod_name=").concat(podName), {}, onDownloadProgress);
    }
  }, {
    key: "fileStat",
    value: function fileStat(podName, file) {
      return this.get("file/stat?pod_name=".concat(podName, "&file_path=").concat(file));
    }
  }, {
    key: "fileShare",
    value: function fileShare(podName, filePath, toAddress) {
      return this.post('file/share', {
        pod_name: podName,
        file_path: filePath,
        dest_user: toAddress
      });
    }
  }, {
    key: "fileReceiveInfo",
    value: function fileReceiveInfo(podName, fileReference) {
      return this.get("file/receiveinfo?pod_name=".concat(podName, "&sharing_ref=").concat(fileReference));
    }
  }, {
    key: "fileReceive",
    value: function fileReceive(podName, fileReference) {
      var dirPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
      return this.get("file/receive?pod_name=".concat(podName, "&sharing_ref=").concat(fileReference, "&dir_path=").concat(dirPath));
    }
  }, {
    key: "fileDelete",
    value: function fileDelete(podName, filePath) {
      return this["delete"]('file/delete', {
        pod_name: podName,
        file_path: filePath
      });
    }
  }, {
    key: "kvNew",
    value: function kvNew(podName, tableName) {
      return this.post('kv/new', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "kvOpen",
    value: function kvOpen(podName, tableName) {
      return this.post('kv/open', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "kvCount",
    value: function kvCount(podName, tableName) {
      return this.post('kv/count', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "kvLs",
    value: function kvLs(podName) {
      return this.get("kv/ls?pod_name=".concat(podName));
    }
  }, {
    key: "kvDelete",
    value: function kvDelete(podName, tableName) {
      return this["delete"]('kv/delete', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "kvEntryPut",
    value: function kvEntryPut(podName, tableName, key, value) {
      return this.post('kv/entry/put', {
        pod_name: podName,
        table_name: tableName,
        key: key,
        value: value
      });
    }
  }, {
    key: "kvEntryGet",
    value: function kvEntryGet(podName, tableName, key) {
      return this.get("kv/entry/get?pod_name=".concat(podName, "&table_name=").concat(tableName, "&key=").concat(key));
    }
  }, {
    key: "kvEntryDelete",
    value: function kvEntryDelete(podName, tableName, key) {
      return this["delete"]('kv/entry/del', {
        pod_name: podName,
        table_name: tableName,
        key: key
      });
    }
  }, {
    key: "kvLoadCsv",
    value: function kvLoadCsv(podName, tableName, formData) {
      var memory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (!formData.has('csv')) {
        throw new Error('Field "csv" is not defined');
      }

      formData.set('pod_name', podName);
      formData.set('table_name', tableName);
      formData.set('memory', memory);
      return this.upload('kv/loadcsv', formData);
    }
  }, {
    key: "kvSeek",
    value: function kvSeek(podName, tableName, startPrefix, endPrefix, limit) {
      return this.post('kv/seek', {
        pod_name: podName,
        table_name: tableName,
        start_prefix: startPrefix,
        end_prefix: endPrefix,
        limit: limit
      });
    }
  }, {
    key: "kvSeekNext",
    value: function kvSeekNext(podName, tableName) {
      return this.get("kv/seek/next?pod_name=".concat(podName, "&table_name=").concat(tableName));
    }
    /*
    POST -F 'name=\<document table name>' http://localhost:9090/v0/doc/new
    POST -F 'name=\<document table name>' http://localhost:9090/v0/doc/open
    POST -F 'name=\<tdocument able name>' -F 'expr=\<expression>' http://localhost:9090/v0/doc/count
    POST -F 'name=\<document table name>' -F 'expr=\<expression>' -F 'limit=\<no of records>' http://localhost:9090/v0/doc/find
    POST http://localhost:9090/v0/doc/ls
    DELETE -F 'name=\<tdocument able name>' http://localhost:9090/v0/doc/delete
    POST -F 'name=\<tdocument able name>' -F 'doc=\<json document in bytes>' http://localhost:9090/v0/doc/entry/put
    GET -F 'name=\<document table name>' -F 'id=\<document id>' http://localhost:9090/v0/doc/entry/get
    DELETE -F 'name=\<document table name>' -F 'id=\<document id>' http://localhost:9090/v0/doc/entry/del
    POST -F 'name=\<document table name>' -F 'json=@\<json_file>' http://localhost:9090/v0/doc/loadjson
    POST -F 'name=\<document table name>' -F 'file=\<pod file>' http://localhost:9090/v0/doc/indexjson
    */

  }, {
    key: "docNew",
    value: function docNew(podName, tableName, simpleIndex) {
      var mutable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return this.post('doc/new', {
        pod_name: podName,
        table_name: tableName,
        si: simpleIndex,
        mutable: mutable.toString()
      });
    }
  }, {
    key: "docOpen",
    value: function docOpen(podName, tableName) {
      return this.post('doc/open', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "docCount",
    value: function docCount(podName, tableName) {
      return this.post('doc/count', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "docFind",
    value: function docFind(podName, tableName, expr) {
      var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
      return this.get("doc/find?pod_name=".concat(podName, "&table_name=").concat(tableName, "&expr=").concat(expr, "&limit=").concat(limit));
    }
  }, {
    key: "docLs",
    value: function docLs(podName) {
      // todo fix it https://github.com/fairDataSociety/fairOS-dfs/issues/97
      // return this.get(`doc/ls`);
      return this.get("doc/ls?pod_name=".concat(podName));
    }
  }, {
    key: "docDelete",
    value: function docDelete(podName, tableName) {
      return this["delete"]('doc/delete', {
        pod_name: podName,
        table_name: tableName
      });
    }
  }, {
    key: "docEntryPut",
    value: function docEntryPut(podName, tableName, doc) {
      return this.post('doc/entry/put', {
        pod_name: podName,
        table_name: tableName,
        doc: doc
      });
    }
  }, {
    key: "docEntryGet",
    value: function docEntryGet(podName, tableName, id) {
      return this.get("doc/entry/get?pod_name=".concat(podName, "&table_name=").concat(tableName, "&id=").concat(id));
    }
  }, {
    key: "docEntryDelete",
    value: function docEntryDelete(podName, tableName, id) {
      return this["delete"]('doc/entry/del', {
        pod_name: podName,
        table_name: tableName,
        id: id
      });
    }
  }, {
    key: "docLoadJson",
    value: function docLoadJson(podName, tableName, formData) {
      if (!formData.has('json')) {
        throw new Error('Field "json" is not defined');
      }

      formData.set('pod_name', podName);
      formData.set('table_name', tableName);
      return this.upload('doc/loadjson', formData);
    }
  }, {
    key: "docIndexJson",
    value: function docIndexJson(podName, tableName, formData) {
      if (!formData.has('json')) {
        throw new Error('Field "json" is not defined');
      }

      formData.set('pod_name', podName);
      formData.set('table_name', tableName);
      return this.upload('doc/indexjson', formData);
    }
  }, {
    key: "test",
    value: function test() {
      return 'FairOS test OK';
    }
  }]);

  return FairOS;
}();



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/FairOS.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/FairOS.js */"./src/FairOS.js");


/***/ }),

/***/ "axios":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"axios","commonjs2":"axios","amd":"axios","root":"axios"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ }),

/***/ "stream":
/*!******************************************************************************************!*\
  !*** external {"commonjs":"stream","commonjs2":"stream","amd":"stream","root":"stream"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_stream__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYWlyT1Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0ZhaXJPUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS9FbmNvZGVyLmpzIiwid2VicGFjazovL0ZhaXJPUy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEtZW5jb2Rlci9saWIvZXNtL0ZpbGVMaWtlLmpzIiwid2VicGFjazovL0ZhaXJPUy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEtZW5jb2Rlci9saWIvZXNtL0Zvcm1EYXRhTGlrZS5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS91dGlsL2NyZWF0ZUJvdW5kYXJ5LmpzIiwid2VicGFjazovL0ZhaXJPUy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEtZW5jb2Rlci9saWIvZXNtL3V0aWwvZXNjYXBlTmFtZS5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS91dGlsL2lzRmlsZS5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS91dGlsL2lzRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vRmFpck9TLy4vbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS1lbmNvZGVyL2xpYi9lc20vdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL0ZhaXJPUy8uL3NyYy9GYWlyT1MuanMiLCJ3ZWJwYWNrOi8vRmFpck9TL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJheGlvc1wiLFwiY29tbW9uanMyXCI6XCJheGlvc1wiLFwiYW1kXCI6XCJheGlvc1wiLFwicm9vdFwiOlwiYXhpb3NcIn0iLCJ3ZWJwYWNrOi8vRmFpck9TL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJzdHJlYW1cIixcImNvbW1vbmpzMlwiOlwic3RyZWFtXCIsXCJhbWRcIjpcInN0cmVhbVwiLFwicm9vdFwiOlwic3RyZWFtXCJ9Il0sIm5hbWVzIjpbIkZhaXJPUyIsImJhc2VVUkwiLCJpc1N0b3JlTm9kZUNvb2tpZSIsIndpbmRvdyIsImNvb2tpZSIsInJlc3BvbnNlIiwiaXNOb2RlIiwicmVjZWl2ZWRDb29raWUiLCJoZWFkZXJzIiwibGVuZ3RoIiwic3BsaXQiLCJhcGlNZXRob2QiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImdldENvb2tpZU9iamVjdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJoYW5kbGVDb29raWVzIiwiZGF0YSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsInJlc3BvbnNlVHlwZSIsImZvcm1EYXRhIiwib25VcGxvYWRQcm9ncmVzcyIsImVuY29kZXIiLCJFbmNvZGVyIiwiUmVhZGFibGUiLCJmcm9tIiwiZW5jb2RlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBvc3QiLCJ1c2VyX25hbWUiLCJtbmVtb25pYyIsImFkZHJlc3MiLCJFcnJvciIsImdldCIsInBvZE5hbWUiLCJwb2RfbmFtZSIsInNoYXJpbmdSZWYiLCJkaXJGdWxsUGF0aCIsImRpcl9wYXRoIiwiZGlyIiwicG9kRGlyRnVsbCIsImJsb2NrU2l6ZSIsImhhcyIsInNldCIsInVwbG9hZCIsImZpbGVQYXRoIiwiZmlsZSIsImRvd25sb2FkIiwidG9BZGRyZXNzIiwiZmlsZV9wYXRoIiwiZGVzdF91c2VyIiwiZmlsZVJlZmVyZW5jZSIsImRpclBhdGgiLCJ0YWJsZU5hbWUiLCJ0YWJsZV9uYW1lIiwia2V5IiwidmFsdWUiLCJtZW1vcnkiLCJzdGFydFByZWZpeCIsImVuZFByZWZpeCIsImxpbWl0Iiwic3RhcnRfcHJlZml4IiwiZW5kX3ByZWZpeCIsInNp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QUN3QixHQUFULENBQWEsWUFBYixFQUEyQlUsU0FBM0I7QUFFQSxhQUFPLEtBQUtULE1BQUwsQ0FBWSxlQUFaLEVBQTZCekIsUUFBN0IsQ0FBUDtBQUNIOzs7V0FFRCxnQkFBTztBQUNILGFBQU8sZ0JBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyZEwsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiZmFpcm9zLmRldmVsb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSwgcmVxdWlyZShcInN0cmVhbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJheGlvc1wiLCBcInN0cmVhbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGYWlyT1NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSwgcmVxdWlyZShcInN0cmVhbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmFpck9TXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0sIHJvb3RbXCJzdHJlYW1cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N0cmVhbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9FbmNvZGVyX2luc3RhbmNlcywgX0VuY29kZXJfQ1JMRiwgX0VuY29kZXJfQ1JMRl9CWVRFUywgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEgsIF9FbmNvZGVyX0RBU0hFUywgX0VuY29kZXJfZW5jb2RlciwgX0VuY29kZXJfZm9vdGVyLCBfRW5jb2Rlcl9mb3JtLCBfRW5jb2Rlcl9nZXRGaWVsZEhlYWRlcjtcbmltcG9ydCBjcmVhdGVCb3VuZGFyeSBmcm9tIFwiLi91dGlsL2NyZWF0ZUJvdW5kYXJ5LmpzXCI7XG5pbXBvcnQgZXNjYXBlIGZyb20gXCIuL3V0aWwvZXNjYXBlTmFtZS5qc1wiO1xuaW1wb3J0IGlzRm9ybURhdGEgZnJvbSBcIi4vdXRpbC9pc0Zvcm1EYXRhLmpzXCI7XG5pbXBvcnQgaXNGaWxlIGZyb20gXCIuL3V0aWwvaXNGaWxlLmpzXCI7XG5leHBvcnQgY2xhc3MgRW5jb2RlciB7XG4gICAgY29uc3RydWN0b3IoZm9ybSwgYm91bmRhcnkgPSBjcmVhdGVCb3VuZGFyeSgxNikpIHtcbiAgICAgICAgX0VuY29kZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0VuY29kZXJfQ1JMRi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0VuY29kZXJfQ1JMRl9CWVRFUy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEguc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9FbmNvZGVyX0RBU0hFUy5zZXQodGhpcywgXCItXCIucmVwZWF0KDIpKTtcbiAgICAgICAgX0VuY29kZXJfZW5jb2Rlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0VuY29kZXJfZm9vdGVyLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfRW5jb2Rlcl9mb3JtLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBpZiAoIWlzRm9ybURhdGEoZm9ybSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBmaXJzdCBhcmd1bWVudCB0byBiZSBhIEZvcm1EYXRhIGluc3RhbmNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJvdW5kYXJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYm91bmRhcnkgdG8gYmUgYSBzdHJpbmcuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRhcnkgPSBgZm9ybS1kYXRhLWJvdW5kYXJ5LSR7Ym91bmRhcnl9YDtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke3RoaXMuYm91bmRhcnl9YDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfRW5jb2Rlcl9lbmNvZGVyLCBuZXcgVGV4dEVuY29kZXIoKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9FbmNvZGVyX0NSTEYsIFwiXFxyXFxuXCIsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfRW5jb2Rlcl9DUkxGX0JZVEVTLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2VuY29kZXIsIFwiZlwiKS5lbmNvZGUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEgsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFUywgXCJmXCIpLmJ5dGVMZW5ndGgsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfRW5jb2Rlcl9mb3JtLCBmb3JtLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0VuY29kZXJfZm9vdGVyLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2VuY29kZXIsIFwiZlwiKS5lbmNvZGUoYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9EQVNIRVMsIFwiZlwiKX0ke3RoaXMuYm91bmRhcnl9JHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX0RBU0hFUywgXCJmXCIpfSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIikucmVwZWF0KDIpfWApLCBcImZcIik7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogdGhpcy5jb250ZW50VHlwZSxcbiAgICAgICAgICAgIFwiQ29udGVudC1MZW5ndGhcIjogdGhpcy5nZXRDb250ZW50TGVuZ3RoKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9mb3JtLCBcImZcIikpIHtcbiAgICAgICAgICAgIGxlbmd0aCArPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2luc3RhbmNlcywgXCJtXCIsIF9FbmNvZGVyX2dldEZpZWxkSGVhZGVyKS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGlzRmlsZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICA/IHZhbHVlLnNpemVcbiAgICAgICAgICAgICAgICA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfZW5jb2RlciwgXCJmXCIpLmVuY29kZShTdHJpbmcodmFsdWUpKS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgbGVuZ3RoICs9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEgsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoICsgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9mb290ZXIsIFwiZlwiKS5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgICAqdmFsdWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9mb3JtLCBcImZcIikuZW50cmllcygpKSB7XG4gICAgICAgICAgICB5aWVsZCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2luc3RhbmNlcywgXCJtXCIsIF9FbmNvZGVyX2dldEZpZWxkSGVhZGVyKS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHlpZWxkIGlzRmlsZSh2YWx1ZSkgPyB2YWx1ZSA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfZW5jb2RlciwgXCJmXCIpLmVuY29kZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFUywgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfZm9vdGVyLCBcImZcIik7XG4gICAgfVxuICAgIGFzeW5jICplbmNvZGUoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoaXNGaWxlKHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgeWllbGQqIHBhcnQuc3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwYXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFsoX0VuY29kZXJfQ1JMRiA9IG5ldyBXZWFrTWFwKCksIF9FbmNvZGVyX0NSTEZfQllURVMgPSBuZXcgV2Vha01hcCgpLCBfRW5jb2Rlcl9DUkxGX0JZVEVTX0xFTkdUSCA9IG5ldyBXZWFrTWFwKCksIF9FbmNvZGVyX0RBU0hFUyA9IG5ldyBXZWFrTWFwKCksIF9FbmNvZGVyX2VuY29kZXIgPSBuZXcgV2Vha01hcCgpLCBfRW5jb2Rlcl9mb290ZXIgPSBuZXcgV2Vha01hcCgpLCBfRW5jb2Rlcl9mb3JtID0gbmV3IFdlYWtNYXAoKSwgX0VuY29kZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0VuY29kZXJfZ2V0RmllbGRIZWFkZXIgPSBmdW5jdGlvbiBfRW5jb2Rlcl9nZXRGaWVsZEhlYWRlcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBsZXQgaGVhZGVyID0gXCJcIjtcbiAgICAgICAgaGVhZGVyICs9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfREFTSEVTLCBcImZcIil9JHt0aGlzLmJvdW5kYXJ5fSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIil9YDtcbiAgICAgICAgaGVhZGVyICs9IGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCIke2VzY2FwZShuYW1lKX1cImA7XG4gICAgICAgIGlmIChpc0ZpbGUodmFsdWUpKSB7XG4gICAgICAgICAgICBoZWFkZXIgKz0gYDsgZmlsZW5hbWU9XCIke2VzY2FwZSh2YWx1ZS5uYW1lKX1cIiR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIil9YDtcbiAgICAgICAgICAgIGhlYWRlciArPSBgQ29udGVudC1UeXBlOiAke3ZhbHVlLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2VuY29kZXIsIFwiZlwiKS5lbmNvZGUoYCR7aGVhZGVyfSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIikucmVwZWF0KDIpfWApO1xuICAgIH0sIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vRm9ybURhdGFMaWtlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9GaWxlTGlrZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vRW5jb2Rlci5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0ZpbGVMaWtlIH0gZnJvbSBcIi4vdXRpbC9pc0ZpbGUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGb3JtRGF0YUxpa2UgfSBmcm9tIFwiLi91dGlsL2lzRm9ybURhdGEuanNcIjtcbiIsImNvbnN0IGFscGhhYmV0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xuZnVuY3Rpb24gY3JlYXRlQm91bmRhcnkoc2l6ZSkge1xuICAgIGxldCByZXMgPSBcIlwiO1xuICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgcmVzICs9IGFscGhhYmV0WyhNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKSA8PCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvdW5kYXJ5O1xuIiwiY29uc3QgZXNjYXBlTmFtZSA9IChuYW1lKSA9PiBTdHJpbmcobmFtZSlcbiAgICAucmVwbGFjZSgvXFxyL2csIFwiJTBEXCIpXG4gICAgLnJlcGxhY2UoL1xcbi9nLCBcIiUwQVwiKVxuICAgIC5yZXBsYWNlKC9cIi9nLCBcIiUyMlwiKTtcbmV4cG9ydCBkZWZhdWx0IGVzY2FwZU5hbWU7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tIFwiLi9pc0Z1bmN0aW9uLmpzXCI7XG5jb25zdCBWQUxJRF9OQU1FUyA9IFtcIkZpbGVcIiwgXCJCbG9iXCJdO1xuY29uc3QgaXNGaWxlID0gKHZhbHVlKSA9PiBCb29sZWFuKHZhbHVlXG4gICAgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiXG4gICAgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb25zdHJ1Y3RvcilcbiAgICAmJiBWQUxJRF9OQU1FUy5pbmNsdWRlcyh2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddKVxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuc3RyZWFtKVxuICAgICYmIHZhbHVlLm5hbWUgIT0gbnVsbFxuICAgICYmIHZhbHVlLnNpemUgIT0gbnVsbFxuICAgICYmIHZhbHVlLmxhc3RNb2RpZmllZCAhPSBudWxsKTtcbmV4cG9ydCBkZWZhdWx0IGlzRmlsZTtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gXCIuL2lzRnVuY3Rpb24uanNcIjtcbmNvbnN0IGlzRm9ybURhdGEgPSAodmFsdWUpID0+IEJvb2xlYW4odmFsdWVcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbnN0cnVjdG9yKVxuICAgICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09IFwiRm9ybURhdGFcIlxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuYXBwZW5kKVxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuZ2V0QWxsKVxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuZW50cmllcylcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pKTtcbmV4cG9ydCBkZWZhdWx0IGlzRm9ybURhdGE7XG4iLCJjb25zdCBpc0Z1bmN0aW9uID0gKHZhbHVlKSA9PiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpO1xuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge0VuY29kZXJ9IGZyb20gJ2Zvcm0tZGF0YS1lbmNvZGVyJztcbmltcG9ydCB7UmVhZGFibGV9IGZyb20gJ3N0cmVhbSc7XG4vLyB0b2RvIHNlbGYtZG9jdW1lbnRlZCBjb2RlIHdpdGggcG9zc2liaWxpdHkgdG8gY3JlYXRlIGRvY3MgcGFnZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlyT1Mge1xuICAgIGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG4gICAgYmFzZVVSTDtcbiAgICBjb29raWUgPSAnJztcbiAgICBpc1N0b3JlTm9kZUNvb2tpZTtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YxLycsIGlzU3RvcmVOb2RlQ29va2llID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmJhc2VVUkwgPSBiYXNlVVJMO1xuICAgICAgICB0aGlzLmlzU3RvcmVOb2RlQ29va2llID0gaXNTdG9yZU5vZGVDb29raWU7XG4gICAgfVxuXG4gICAgc2V0Tm9kZUNvb2tpZShjb29raWUgPSAnJykge1xuICAgICAgICB0aGlzLmNvb2tpZSA9IGNvb2tpZTtcbiAgICB9XG5cbiAgICBzZXRJc1N0b3JlTmV3Q29va2llKGlzU3RvcmVOb2RlQ29va2llKSB7XG4gICAgICAgIHRoaXMuaXNTdG9yZU5vZGVDb29raWUgPSBpc1N0b3JlTm9kZUNvb2tpZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb29raWVzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTm9kZSAmJiB0aGlzLmlzU3RvcmVOb2RlQ29va2llKSB7XG4gICAgICAgICAgICBsZXQgcmVjZWl2ZWRDb29raWUgPSByZXNwb25zZS5oZWFkZXJzWydzZXQtY29va2llJ107XG4gICAgICAgICAgICBpZiAocmVjZWl2ZWRDb29raWUgJiYgcmVjZWl2ZWRDb29raWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWRDb29raWUgPSByZWNlaXZlZENvb2tpZVswXS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgICAgIGlmIChyZWNlaXZlZENvb2tpZSAmJiByZWNlaXZlZENvb2tpZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29raWUgPSByZWNlaXZlZENvb2tpZVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgZ2V0Q29va2llT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc05vZGUgPyB7J0Nvb2tpZSc6IHRoaXMuY29va2llfSA6IHt9O1xuICAgIH1cblxuICAgIGdldChhcGlNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICAgICAgICAgIHVybDogYXBpTWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q29va2llT2JqZWN0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVDb29raWVzKHJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgcG9zdChhcGlNZXRob2QsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxuICAgICAgICAgICAgdXJsOiBhcGlNZXRob2QsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvb2tpZU9iamVjdCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHRoaXMuaGFuZGxlQ29va2llcyhyZXNwb25zZSkpO1xuICAgIH1cblxuICAgIGRvd25sb2FkKGFwaU1ldGhvZCwgZGF0YSA9IHt9LCBvbkRvd25sb2FkUHJvZ3Jlc3MgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICAgICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXG4gICAgICAgICAgICB1cmw6IGFwaU1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvb2tpZU9iamVjdCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVDb29raWVzKHJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGFwaU1ldGhvZCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXG4gICAgICAgICAgICB1cmw6IGFwaU1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb29raWVPYmplY3QoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB0aGlzLmhhbmRsZUNvb2tpZXMocmVzcG9uc2UpKTtcbiAgICB9XG5cbiAgICB1cGxvYWQoYXBpTWV0aG9kLCBmb3JtRGF0YSwgb25VcGxvYWRQcm9ncmVzcyA9IG51bGwpIHtcbiAgICAgICAgLy8gdG9kbyBpZiBub2RlIHRoZW4gYWRkIGhlYWRlcnMsIGlmIG5vdCAtIG5vdCBhZGRcbiAgICAgICAgLy8gdG9kbyBjaGVjayBmb3Igbm9kZSBhbmQgZm9yIGJyb3dzZXJcbiAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBFbmNvZGVyKGZvcm1EYXRhKTtcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICAgICAgICAgIHVybDogYXBpTWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmlzTm9kZSA/IFJlYWRhYmxlLmZyb20oZW5jb2Rlci5lbmNvZGUoKSkgOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvb2tpZU9iamVjdCgpLFxuICAgICAgICAgICAgICAgIC4uLih0aGlzLmlzTm9kZSA/IGVuY29kZXIuaGVhZGVycyA6IHt9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3NcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB0aGlzLmhhbmRsZUNvb2tpZXMocmVzcG9uc2UpKTtcbiAgICB9XG5cbiAgICB1c2VyTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3VzZXIvbG9naW4nLCB7XG4gICAgICAgICAgICB1c2VyX25hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VyU2lnbnVwKHVzZXJuYW1lLCBwYXNzd29yZCwgbW5lbW9uaWMgPSAnJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCd1c2VyL3NpZ251cCcsIHtcbiAgICAgICAgICAgIHVzZXJfbmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIG1uZW1vbmljXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZXJJbXBvcnQodXNlcm5hbWUsIHBhc3N3b3JkLCBtbmVtb25pYyA9ICcnLCBhZGRyZXNzID0gJycpIHtcbiAgICAgICAgaWYgKChtbmVtb25pYyAmJiBhZGRyZXNzKSB8fCAoIW1uZW1vbmljICYmICFhZGRyZXNzKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Bhc3Mgb25seSBtbmVtb25pYyBvciBvbmx5IGFkZHJlc3MnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3VzZXIvaW1wb3J0Jywge1xuICAgICAgICAgICAgdXNlcl9uYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgbW5lbW9uaWMsXG4gICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZXJQcmVzZW50KHVzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgdXNlci9wcmVzZW50P3VzZXJfbmFtZT0ke3VzZXJuYW1lfWApO1xuICAgIH1cblxuICAgIHVzZXJJc0xvZ2dlZEluKHVzZXJuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgdXNlci9pc2xvZ2dlZGluP3VzZXJfbmFtZT0ke3VzZXJuYW1lfWApO1xuICAgIH1cblxuICAgIHVzZXJMb2dvdXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3VzZXIvbG9nb3V0Jyk7XG4gICAgfVxuXG4gICAgdXNlckV4cG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgndXNlci9leHBvcnQnKTtcbiAgICB9XG5cbiAgICB1c2VyU3RhdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VyL3N0YXQnKTtcbiAgICB9XG5cbiAgICB1c2VyRGVsZXRlKHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgndXNlci9kZWxldGUnLCB7XG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb2ROZXcocG9kTmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgncG9kL25ldycsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kT3Blbihwb2ROYW1lLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdwb2Qvb3BlbicsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kU3luYyhwb2ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3BvZC9zeW5jJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kQ2xvc2UocG9kTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdwb2QvY2xvc2UnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb2REZWxldGUocG9kTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoJ3BvZC9kZWxldGUnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb2RMcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdwb2QvbHMnKTtcbiAgICB9XG5cbiAgICBwb2RTdGF0KHBvZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBwb2Qvc3RhdD9wb2RfbmFtZT0ke3BvZE5hbWV9YCk7XG4gICAgfVxuXG4gICAgcG9kU2hhcmUocG9kTmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgncG9kL3NoYXJlJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb2RSZWNlaXZlSW5mbyhzaGFyaW5nUmVmKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgcG9kL3JlY2VpdmVpbmZvP3NoYXJpbmdfcmVmPSR7c2hhcmluZ1JlZn1gKTtcbiAgICB9XG5cbiAgICBwb2RSZWNlaXZlKHNoYXJpbmdSZWYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBwb2QvcmVjZWl2ZT9zaGFyaW5nX3JlZj0ke3NoYXJpbmdSZWZ9YCk7XG4gICAgfVxuXG4gICAgZGlyTWtkaXIocG9kTmFtZSwgZGlyRnVsbFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnZGlyL21rZGlyJywge1xuICAgICAgICAgICAgZGlyX3BhdGg6IGRpckZ1bGxQYXRoLFxuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlyUm1kaXIocG9kTmFtZSwgZGlyRnVsbFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKCdkaXIvcm1kaXInLCB7XG4gICAgICAgICAgICBkaXJfcGF0aDogZGlyRnVsbFBhdGgsXG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXJMcyhwb2ROYW1lLCBkaXJGdWxsUGF0aCA9ICcvJykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGRpci9scz9wb2RfbmFtZT0ke3BvZE5hbWV9JmRpcl9wYXRoPSR7ZGlyRnVsbFBhdGh9YCk7XG4gICAgfVxuXG4gICAgZGlyU3RhdChwb2ROYW1lLCBkaXIsIGRpckZ1bGxQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgZGlyL3N0YXQ/ZGlyPSR7ZGlyfSZwb2RfbmFtZT0ke3BvZE5hbWV9JmRpcl9wYXRoPSR7ZGlyRnVsbFBhdGh9YCk7XG4gICAgfVxuXG4gICAgZmlsZVVwbG9hZChwb2ROYW1lLCBwb2REaXJGdWxsLCBmb3JtRGF0YSwgYmxvY2tTaXplID0gJzFNYicsIG9uVXBsb2FkUHJvZ3Jlc3MgPSBudWxsKSB7XG4gICAgICAgIGlmICghZm9ybURhdGEuaGFzKCdmaWxlcycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkIFwiZmlsZXNcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbyBpbXBsZW1lbnQgLUggXCJmYWlyT1MtZGZzLUNvbXByZXNzaW9uOiBzbmFwcHkvZ3ppcFwiXG4gICAgICAgIGZvcm1EYXRhLnNldCgncG9kX25hbWUnLCBwb2ROYW1lKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KCdibG9ja19zaXplJywgYmxvY2tTaXplKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KCdkaXJfcGF0aCcsIHBvZERpckZ1bGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZCgnZmlsZS91cGxvYWQnLCBmb3JtRGF0YSwgb25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgZmlsZURvd25sb2FkKHBvZE5hbWUsIGZpbGVQYXRoLCBmaWxlLCBvbkRvd25sb2FkUHJvZ3Jlc3MgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvd25sb2FkKGBmaWxlL2Rvd25sb2FkP2ZpbGVfcGF0aD0ke2ZpbGVQYXRofSZmaWxlPSR7ZmlsZX0mcG9kX25hbWU9JHtwb2ROYW1lfWAsIHt9LCBvbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGZpbGVTdGF0KHBvZE5hbWUsIGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBmaWxlL3N0YXQ/cG9kX25hbWU9JHtwb2ROYW1lfSZmaWxlX3BhdGg9JHtmaWxlfWApO1xuICAgIH1cblxuICAgIGZpbGVTaGFyZShwb2ROYW1lLCBmaWxlUGF0aCwgdG9BZGRyZXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2ZpbGUvc2hhcmUnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIGZpbGVfcGF0aDogZmlsZVBhdGgsXG4gICAgICAgICAgICBkZXN0X3VzZXI6IHRvQWRkcmVzc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaWxlUmVjZWl2ZUluZm8ocG9kTmFtZSwgZmlsZVJlZmVyZW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGZpbGUvcmVjZWl2ZWluZm8/cG9kX25hbWU9JHtwb2ROYW1lfSZzaGFyaW5nX3JlZj0ke2ZpbGVSZWZlcmVuY2V9YCk7XG4gICAgfVxuXG4gICAgZmlsZVJlY2VpdmUocG9kTmFtZSwgZmlsZVJlZmVyZW5jZSwgZGlyUGF0aCA9ICcvJykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGZpbGUvcmVjZWl2ZT9wb2RfbmFtZT0ke3BvZE5hbWV9JnNoYXJpbmdfcmVmPSR7ZmlsZVJlZmVyZW5jZX0mZGlyX3BhdGg9JHtkaXJQYXRofWApO1xuICAgIH1cblxuICAgIGZpbGVEZWxldGUocG9kTmFtZSwgZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKCdmaWxlL2RlbGV0ZScsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgZmlsZV9wYXRoOiBmaWxlUGF0aFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrdk5ldyhwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgna3YvbmV3Jywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZPcGVuKHBvZE5hbWUsIHRhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdrdi9vcGVuJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZDb3VudChwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgna3YvY291bnQnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHRhYmxlX25hbWU6IHRhYmxlTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrdkxzKHBvZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBrdi9scz9wb2RfbmFtZT0ke3BvZE5hbWV9YCk7XG4gICAgfVxuXG4gICAga3ZEZWxldGUocG9kTmFtZSwgdGFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgna3YvZGVsZXRlJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZFbnRyeVB1dChwb2ROYW1lLCB0YWJsZU5hbWUsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgna3YvZW50cnkvcHV0Jywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrdkVudHJ5R2V0KHBvZE5hbWUsIHRhYmxlTmFtZSwga2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChga3YvZW50cnkvZ2V0P3BvZF9uYW1lPSR7cG9kTmFtZX0mdGFibGVfbmFtZT0ke3RhYmxlTmFtZX0ma2V5PSR7a2V5fWApO1xuICAgIH1cblxuICAgIGt2RW50cnlEZWxldGUocG9kTmFtZSwgdGFibGVOYW1lLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKCdrdi9lbnRyeS9kZWwnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHRhYmxlX25hbWU6IHRhYmxlTmFtZSxcbiAgICAgICAgICAgIGtleVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrdkxvYWRDc3YocG9kTmFtZSwgdGFibGVOYW1lLCBmb3JtRGF0YSwgbWVtb3J5ID0gdHJ1ZSkge1xuICAgICAgICBpZiAoIWZvcm1EYXRhLmhhcygnY3N2JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmllbGQgXCJjc3ZcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEuc2V0KCdwb2RfbmFtZScsIHBvZE5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhYmxlX25hbWUnLCB0YWJsZU5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ21lbW9yeScsIG1lbW9yeSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkKCdrdi9sb2FkY3N2JywgZm9ybURhdGEpO1xuICAgIH1cblxuICAgIGt2U2Vlayhwb2ROYW1lLCB0YWJsZU5hbWUsIHN0YXJ0UHJlZml4LCBlbmRQcmVmaXgsIGxpbWl0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2t2L3NlZWsnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHRhYmxlX25hbWU6IHRhYmxlTmFtZSxcbiAgICAgICAgICAgIHN0YXJ0X3ByZWZpeDogc3RhcnRQcmVmaXgsXG4gICAgICAgICAgICBlbmRfcHJlZml4OiBlbmRQcmVmaXgsXG4gICAgICAgICAgICBsaW1pdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrdlNlZWtOZXh0KHBvZE5hbWUsIHRhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGt2L3NlZWsvbmV4dD9wb2RfbmFtZT0ke3BvZE5hbWV9JnRhYmxlX25hbWU9JHt0YWJsZU5hbWV9YCk7XG4gICAgfVxuXG4gICAgLypcblBPU1QgLUYgJ25hbWU9XFw8ZG9jdW1lbnQgdGFibGUgbmFtZT4nIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC92MC9kb2MvbmV3XG5QT1NUIC1GICduYW1lPVxcPGRvY3VtZW50IHRhYmxlIG5hbWU+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL29wZW5cblBPU1QgLUYgJ25hbWU9XFw8dGRvY3VtZW50IGFibGUgbmFtZT4nIC1GICdleHByPVxcPGV4cHJlc3Npb24+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL2NvdW50XG5QT1NUIC1GICduYW1lPVxcPGRvY3VtZW50IHRhYmxlIG5hbWU+JyAtRiAnZXhwcj1cXDxleHByZXNzaW9uPicgLUYgJ2xpbWl0PVxcPG5vIG9mIHJlY29yZHM+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL2ZpbmRcblBPU1QgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9sc1xuREVMRVRFIC1GICduYW1lPVxcPHRkb2N1bWVudCBhYmxlIG5hbWU+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL2RlbGV0ZVxuUE9TVCAtRiAnbmFtZT1cXDx0ZG9jdW1lbnQgYWJsZSBuYW1lPicgLUYgJ2RvYz1cXDxqc29uIGRvY3VtZW50IGluIGJ5dGVzPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9lbnRyeS9wdXRcbkdFVCAtRiAnbmFtZT1cXDxkb2N1bWVudCB0YWJsZSBuYW1lPicgLUYgJ2lkPVxcPGRvY3VtZW50IGlkPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9lbnRyeS9nZXRcbkRFTEVURSAtRiAnbmFtZT1cXDxkb2N1bWVudCB0YWJsZSBuYW1lPicgLUYgJ2lkPVxcPGRvY3VtZW50IGlkPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9lbnRyeS9kZWxcblBPU1QgLUYgJ25hbWU9XFw8ZG9jdW1lbnQgdGFibGUgbmFtZT4nIC1GICdqc29uPUBcXDxqc29uX2ZpbGU+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL2xvYWRqc29uXG5QT1NUIC1GICduYW1lPVxcPGRvY3VtZW50IHRhYmxlIG5hbWU+JyAtRiAnZmlsZT1cXDxwb2QgZmlsZT4nIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC92MC9kb2MvaW5kZXhqc29uXG4gKi9cblxuICAgIGRvY05ldyhwb2ROYW1lLCB0YWJsZU5hbWUsIHNpbXBsZUluZGV4LCBtdXRhYmxlID0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdkb2MvbmV3Jywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBzaTogc2ltcGxlSW5kZXgsXG4gICAgICAgICAgICBtdXRhYmxlOiBtdXRhYmxlLnRvU3RyaW5nKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jT3Blbihwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnZG9jL29wZW4nLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHRhYmxlX25hbWU6IHRhYmxlTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2NDb3VudChwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnZG9jL2NvdW50Jywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jRmluZChwb2ROYW1lLCB0YWJsZU5hbWUsIGV4cHIsIGxpbWl0ID0gMTApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBkb2MvZmluZD9wb2RfbmFtZT0ke3BvZE5hbWV9JnRhYmxlX25hbWU9JHt0YWJsZU5hbWV9JmV4cHI9JHtleHByfSZsaW1pdD0ke2xpbWl0fWApO1xuICAgIH1cblxuICAgIGRvY0xzKHBvZE5hbWUpIHtcbiAgICAgICAgLy8gdG9kbyBmaXggaXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhaXJEYXRhU29jaWV0eS9mYWlyT1MtZGZzL2lzc3Vlcy85N1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5nZXQoYGRvYy9sc2ApO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGRvYy9scz9wb2RfbmFtZT0ke3BvZE5hbWV9YCk7XG4gICAgfVxuXG4gICAgZG9jRGVsZXRlKHBvZE5hbWUsIHRhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoJ2RvYy9kZWxldGUnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHRhYmxlX25hbWU6IHRhYmxlTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2NFbnRyeVB1dChwb2ROYW1lLCB0YWJsZU5hbWUsIGRvYykge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdkb2MvZW50cnkvcHV0Jywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBkb2NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jRW50cnlHZXQocG9kTmFtZSwgdGFibGVOYW1lLCBpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGRvYy9lbnRyeS9nZXQ/cG9kX25hbWU9JHtwb2ROYW1lfSZ0YWJsZV9uYW1lPSR7dGFibGVOYW1lfSZpZD0ke2lkfWApO1xuICAgIH1cblxuICAgIGRvY0VudHJ5RGVsZXRlKHBvZE5hbWUsIHRhYmxlTmFtZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKCdkb2MvZW50cnkvZGVsJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBpZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb2NMb2FkSnNvbihwb2ROYW1lLCB0YWJsZU5hbWUsIGZvcm1EYXRhKSB7XG4gICAgICAgIGlmICghZm9ybURhdGEuaGFzKCdqc29uJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmllbGQgXCJqc29uXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1EYXRhLnNldCgncG9kX25hbWUnLCBwb2ROYW1lKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWJsZV9uYW1lJywgdGFibGVOYW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWQoJ2RvYy9sb2FkanNvbicsIGZvcm1EYXRhKTtcbiAgICB9XG5cbiAgICBkb2NJbmRleEpzb24ocG9kTmFtZSwgdGFibGVOYW1lLCBmb3JtRGF0YSkge1xuICAgICAgICBpZiAoIWZvcm1EYXRhLmhhcygnanNvbicpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkIFwianNvblwiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3BvZF9uYW1lJywgcG9kTmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFibGVfbmFtZScsIHRhYmxlTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkKCdkb2MvaW5kZXhqc29uJywgZm9ybURhdGEpO1xuICAgIH1cblxuICAgIHRlc3QoKSB7XG4gICAgICAgIHJldHVybiAnRmFpck9TIHRlc3QgT0snO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9zdHJlYW1fXzsiXSwic291cmNlUm9vdCI6IiJ9