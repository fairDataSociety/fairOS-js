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
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYWlyT1Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0ZhaXJPUy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS9FbmNvZGVyLmpzIiwid2VicGFjazovL0ZhaXJPUy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEtZW5jb2Rlci9saWIvZXNtL0ZpbGVMaWtlLmpzIiwid2VicGFjazovL0ZhaXJPUy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEtZW5jb2Rlci9saWIvZXNtL0Zvcm1EYXRhTGlrZS5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS91dGlsL2NyZWF0ZUJvdW5kYXJ5LmpzIiwid2VicGFjazovL0ZhaXJPUy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEtZW5jb2Rlci9saWIvZXNtL3V0aWwvZXNjYXBlTmFtZS5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS91dGlsL2lzRmlsZS5qcyIsIndlYnBhY2s6Ly9GYWlyT1MvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhLWVuY29kZXIvbGliL2VzbS91dGlsL2lzRm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vRmFpck9TLy4vbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS1lbmNvZGVyL2xpYi9lc20vdXRpbC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovL0ZhaXJPUy8uL3NyYy9GYWlyT1MuanMiLCJ3ZWJwYWNrOi8vRmFpck9TL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJheGlvc1wiLFwiY29tbW9uanMyXCI6XCJheGlvc1wiLFwiYW1kXCI6XCJheGlvc1wiLFwicm9vdFwiOlwiYXhpb3NcIn0iLCJ3ZWJwYWNrOi8vRmFpck9TL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJzdHJlYW1cIixcImNvbW1vbmpzMlwiOlwic3RyZWFtXCIsXCJhbWRcIjpcInN0cmVhbVwiLFwicm9vdFwiOlwic3RyZWFtXCJ9Il0sIm5hbWVzIjpbIkZhaXJPUyIsImJhc2VVUkwiLCJpc1N0b3JlTm9kZUNvb2tpZSIsIndpbmRvdyIsImNvb2tpZSIsInJlc3BvbnNlIiwiaXNOb2RlIiwicmVjZWl2ZWRDb29raWUiLCJoZWFkZXJzIiwibGVuZ3RoIiwic3BsaXQiLCJhcGlNZXRob2QiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImdldENvb2tpZU9iamVjdCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJoYW5kbGVDb29raWVzIiwiZGF0YSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsInJlc3BvbnNlVHlwZSIsImZvcm1EYXRhIiwib25VcGxvYWRQcm9ncmVzcyIsImVuY29kZXIiLCJFbmNvZGVyIiwiUmVhZGFibGUiLCJmcm9tIiwiZW5jb2RlIiwibWF4Q29udGVudExlbmd0aCIsIkluZmluaXR5IiwibWF4Qm9keUxlbmd0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwb3N0IiwidXNlcl9uYW1lIiwibW5lbW9uaWMiLCJhZGRyZXNzIiwiRXJyb3IiLCJnZXQiLCJwb2ROYW1lIiwicG9kX25hbWUiLCJzaGFyaW5nUmVmIiwiZGlyRnVsbFBhdGgiLCJkaXJfcGF0aCIsImRpciIsInBvZERpckZ1bGwiLCJibG9ja1NpemUiLCJoYXMiLCJzZXQiLCJ1cGxvYWQiLCJmaWxlUGF0aCIsImZpbGUiLCJkb3dubG9hZCIsInRvQWRkcmVzcyIsImZpbGVfcGF0aCIsImRlc3RfdXNlciIsImZpbGVSZWZlcmVuY2UiLCJkaXJQYXRoIiwidGFibGVOYW1lIiwidGFibGVfbmFtZSIsImtleSIsInZhbHVlIiwibWVtb3J5Iiwic3RhcnRQcmVmaXgiLCJlbmRQcmVmaXgiLCJsaW1pdCIsInN0YXJ0X3ByZWZpeCIsImVuZF9wcmVmaXgiLCJzaW1wbGVJbmRleCIsIm11dGFibGUiLCJzaSIsInRvU3RyaW5nIiwiZXhwciIsImRvYyIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBOEIsU0FBSSxJQUFJLFNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFJLElBQUksU0FBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NEO0FBQ1o7QUFDSTtBQUNSO0FBQy9CO0FBQ1AsaUNBQWlDLHVFQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1FQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RCxnREFBZ0QsWUFBWSxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBb0gsbURBQW1ELEVBQUUsY0FBYyxFQUFFLG1EQUFtRCxFQUFFLDJEQUEyRDtBQUN6UztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrREFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0RBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQsRUFBRSxjQUFjLEVBQUUsaURBQWlEO0FBQzNJLGtEQUFrRCxTQUFTLG1FQUFNLE9BQU87QUFDeEUsWUFBWSwrREFBTTtBQUNsQix3QkFBd0IsYUFBYSxtRUFBTSxhQUFhLEdBQUcsaURBQWlEO0FBQzVHLHVDQUF1Qyx5Q0FBeUM7QUFDaEY7QUFDQSw2RUFBNkUsT0FBTyxFQUFFLDJEQUEyRDtBQUNqSixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQVU7Ozs7Ozs7Ozs7Ozs7QUNBVjtBQUFVOzs7Ozs7Ozs7Ozs7O0FDQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ0o7QUFDRDtBQUM0QjtBQUNROzs7Ozs7Ozs7Ozs7O0FDSmpFO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLDZFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSOUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKMUI7QUFBQTtBQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxPQUFPLDhEQUFVO0FBQ2pCO0FBQ0EsT0FBTyw4REFBVTtBQUNqQjtBQUNBO0FBQ0E7QUFDZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVnRCO0FBQUE7QUFBeUM7QUFDekM7QUFDQSxPQUFPLDhEQUFVO0FBQ2pCO0FBQ0EsT0FBTyw4REFBVTtBQUNqQixPQUFPLDhEQUFVO0FBQ2pCLE9BQU8sOERBQVU7QUFDakIsT0FBTyw4REFBVTtBQUNGLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7QUFBQTtBQUNlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDFCO0FBQ0E7Q0FFQTs7SUFFcUJBLE07QUFPakIsb0JBQTZFO0FBQUEsUUFBakVDLE9BQWlFLHVFQUF2RCwyQkFBdUQ7QUFBQSxRQUExQkMsaUJBQTBCLHVFQUFOLElBQU07O0FBQUE7O0FBQUEsb0NBTnBFLE9BQU9DLE1BQVAsS0FBa0IsV0FNa0Q7O0FBQUE7O0FBQUEsb0NBSHBFLEVBR29FOztBQUFBOztBQUN6RSxTQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0g7Ozs7V0FFRCx5QkFBMkI7QUFBQSxVQUFiRSxNQUFhLHVFQUFKLEVBQUk7QUFDdkIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7OztXQUVELDZCQUFvQkYsaUJBQXBCLEVBQXVDO0FBQ25DLFdBQUtBLGlCQUFMLEdBQXlCQSxpQkFBekI7QUFDSDs7O1dBRUQsdUJBQWNHLFFBQWQsRUFBd0I7QUFDcEIsVUFBSSxLQUFLQyxNQUFMLElBQWUsS0FBS0osaUJBQXhCLEVBQTJDO0FBQ3ZDLFlBQUlLLGNBQWMsR0FBR0YsUUFBUSxDQUFDRyxPQUFULENBQWlCLFlBQWpCLENBQXJCOztBQUNBLFlBQUlELGNBQWMsSUFBSUEsY0FBYyxDQUFDRSxNQUFyQyxFQUE2QztBQUN6Q0Ysd0JBQWMsR0FBR0EsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQkcsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FBakI7O0FBQ0EsY0FBSUgsY0FBYyxJQUFJQSxjQUFjLENBQUNFLE1BQXJDLEVBQTZDO0FBQ3pDLGlCQUFLTCxNQUFMLEdBQWNHLGNBQWMsQ0FBQyxDQUFELENBQTVCO0FBQ0g7QUFDSjtBQUNKOztBQUVELGFBQU9GLFFBQVA7QUFDSDs7O1dBRUQsMkJBQWtCO0FBQ2QsYUFBTyxLQUFLQyxNQUFMLEdBQWM7QUFBQyxrQkFBVSxLQUFLRjtBQUFoQixPQUFkLEdBQXdDLEVBQS9DO0FBQ0g7OztXQUVELGFBQUlPLFNBQUosRUFBZTtBQUFBOztBQUNYLGFBQU9DLDRDQUFLLENBQUM7QUFDVFgsZUFBTyxFQUFFLEtBQUtBLE9BREw7QUFFVFksV0FBRyxFQUFFRixTQUZJO0FBR1RHLGNBQU0sRUFBRSxLQUhDO0FBSVROLGVBQU87QUFDSCwwQkFBZ0I7QUFEYixXQUVBLEtBQUtPLGVBQUwsRUFGQSxDQUpFO0FBUVRDLHVCQUFlLEVBQUU7QUFSUixPQUFELENBQUwsQ0FTSkMsSUFUSSxDQVNDLFVBQUFaLFFBQVE7QUFBQSxlQUFJLEtBQUksQ0FBQ2EsYUFBTCxDQUFtQmIsUUFBbkIsQ0FBSjtBQUFBLE9BVFQsQ0FBUDtBQVVIOzs7V0FFRCxjQUFLTSxTQUFMLEVBQTJCO0FBQUE7O0FBQUEsVUFBWFEsSUFBVyx1RUFBSixFQUFJO0FBQ3ZCLGFBQU9QLDRDQUFLLENBQUM7QUFDVFgsZUFBTyxFQUFFLEtBQUtBLE9BREw7QUFFVFksV0FBRyxFQUFFRixTQUZJO0FBR1RHLGNBQU0sRUFBRSxNQUhDO0FBSVRLLFlBQUksRUFBSkEsSUFKUztBQUtUWCxlQUFPO0FBQ0gsMEJBQWdCO0FBRGIsV0FFQSxLQUFLTyxlQUFMLEVBRkEsQ0FMRTtBQVNUQyx1QkFBZSxFQUFFO0FBVFIsT0FBRCxDQUFMLENBVUpDLElBVkksQ0FVQyxVQUFBWixRQUFRO0FBQUEsZUFBSSxNQUFJLENBQUNhLGFBQUwsQ0FBbUJiLFFBQW5CLENBQUo7QUFBQSxPQVZULENBQVA7QUFXSDs7O1dBRUQsa0JBQVNNLFNBQVQsRUFBMEQ7QUFBQTs7QUFBQSxVQUF0Q1EsSUFBc0MsdUVBQS9CLEVBQStCO0FBQUEsVUFBM0JDLGtCQUEyQix1RUFBTixJQUFNO0FBQ3RELGFBQU9SLDRDQUFLLENBQUM7QUFDVFMsb0JBQVksRUFBRSxhQURMO0FBRVRwQixlQUFPLEVBQUUsS0FBS0EsT0FGTDtBQUdUWSxXQUFHLEVBQUVGLFNBSEk7QUFJVEcsY0FBTSxFQUFFLE1BSkM7QUFLVEssWUFBSSxFQUFKQSxJQUxTO0FBTVRYLGVBQU8sb0JBQ0EsS0FBS08sZUFBTCxFQURBLENBTkU7QUFTVEMsdUJBQWUsRUFBRSxJQVRSO0FBVVRJLDBCQUFrQixFQUFsQkE7QUFWUyxPQUFELENBQUwsQ0FXSkgsSUFYSSxDQVdDLFVBQUFaLFFBQVE7QUFBQSxlQUFJLE1BQUksQ0FBQ2EsYUFBTCxDQUFtQmIsUUFBbkIsQ0FBSjtBQUFBLE9BWFQsQ0FBUDtBQVlIOzs7V0FFRCxpQkFBT00sU0FBUCxFQUE2QjtBQUFBOztBQUFBLFVBQVhRLElBQVcsdUVBQUosRUFBSTtBQUN6QixhQUFPUCw0Q0FBSyxDQUFDO0FBQ1RYLGVBQU8sRUFBRSxLQUFLQSxPQURMO0FBRVRZLFdBQUcsRUFBRUYsU0FGSTtBQUdURyxjQUFNLEVBQUUsUUFIQztBQUlUSyxZQUFJLEVBQUpBLElBSlM7QUFLVFgsZUFBTztBQUNILDBCQUFnQjtBQURiLFdBRUEsS0FBS08sZUFBTCxFQUZBLENBTEU7QUFTVEMsdUJBQWUsRUFBRTtBQVRSLE9BQUQsQ0FBTCxDQVVKQyxJQVZJLENBVUMsVUFBQVosUUFBUTtBQUFBLGVBQUksTUFBSSxDQUFDYSxhQUFMLENBQW1CYixRQUFuQixDQUFKO0FBQUEsT0FWVCxDQUFQO0FBV0g7OztXQUVELGdCQUFPTSxTQUFQLEVBQWtCVyxRQUFsQixFQUFxRDtBQUFBOztBQUFBLFVBQXpCQyxnQkFBeUIsdUVBQU4sSUFBTTtBQUNqRDtBQUNBO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLElBQUlDLHlEQUFKLENBQVlILFFBQVosQ0FBaEI7QUFDQSxhQUFPViw0Q0FBSyxDQUFDO0FBQ1RYLGVBQU8sRUFBRSxLQUFLQSxPQURMO0FBRVRZLFdBQUcsRUFBRUYsU0FGSTtBQUdURyxjQUFNLEVBQUUsTUFIQztBQUlUSyxZQUFJLEVBQUUsS0FBS2IsTUFBTCxHQUFjb0IsK0NBQVEsQ0FBQ0MsSUFBVCxDQUFjSCxPQUFPLENBQUNJLE1BQVIsRUFBZCxDQUFkLEdBQWdETixRQUo3QztBQUtUTyx3QkFBZ0IsRUFBRUMsUUFMVDtBQU1UQyxxQkFBYSxFQUFFRCxRQU5OO0FBT1R0QixlQUFPLGtDQUNBLEtBQUtPLGVBQUwsRUFEQSxHQUVDLEtBQUtULE1BQUwsR0FBY2tCLE9BQU8sQ0FBQ2hCLE9BQXRCLEdBQWdDLEVBRmpDLENBUEU7QUFXVFEsdUJBQWUsRUFBRSxJQVhSO0FBWVRPLHdCQUFnQixFQUFoQkE7QUFaUyxPQUFELENBQUwsQ0FhSk4sSUFiSSxDQWFDLFVBQUFaLFFBQVE7QUFBQSxlQUFJLE1BQUksQ0FBQ2EsYUFBTCxDQUFtQmIsUUFBbkIsQ0FBSjtBQUFBLE9BYlQsQ0FBUDtBQWNIOzs7V0FFRCxtQkFBVTJCLFFBQVYsRUFBb0JDLFFBQXBCLEVBQThCO0FBQzFCLGFBQU8sS0FBS0MsSUFBTCxDQUFVLFlBQVYsRUFBd0I7QUFDM0JDLGlCQUFTLEVBQUVILFFBRGdCO0FBRTNCQyxnQkFBUSxFQUFFQTtBQUZpQixPQUF4QixDQUFQO0FBSUg7OztXQUVELG9CQUFXRCxRQUFYLEVBQXFCQyxRQUFyQixFQUE4QztBQUFBLFVBQWZHLFFBQWUsdUVBQUosRUFBSTtBQUMxQyxhQUFPLEtBQUtGLElBQUwsQ0FBVSxhQUFWLEVBQXlCO0FBQzVCQyxpQkFBUyxFQUFFSCxRQURpQjtBQUU1QkMsZ0JBQVEsRUFBUkEsUUFGNEI7QUFHNUJHLGdCQUFRLEVBQVJBO0FBSDRCLE9BQXpCLENBQVA7QUFLSDs7O1dBRUQsb0JBQVdKLFFBQVgsRUFBcUJDLFFBQXJCLEVBQTREO0FBQUEsVUFBN0JHLFFBQTZCLHVFQUFsQixFQUFrQjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDeEQsVUFBS0QsUUFBUSxJQUFJQyxPQUFiLElBQTBCLENBQUNELFFBQUQsSUFBYSxDQUFDQyxPQUE1QyxFQUFzRDtBQUNsRCxjQUFNQyxLQUFLLENBQUMsb0NBQUQsQ0FBWDtBQUNIOztBQUVELGFBQU8sS0FBS0osSUFBTCxDQUFVLGFBQVYsRUFBeUI7QUFDNUJDLGlCQUFTLEVBQUVILFFBRGlCO0FBRTVCQyxnQkFBUSxFQUFSQSxRQUY0QjtBQUc1QkcsZ0JBQVEsRUFBUkEsUUFINEI7QUFJNUJDLGVBQU8sRUFBUEE7QUFKNEIsT0FBekIsQ0FBUDtBQU1IOzs7V0FFRCxxQkFBWUwsUUFBWixFQUFzQjtBQUNsQixhQUFPLEtBQUtPLEdBQUwsa0NBQW1DUCxRQUFuQyxFQUFQO0FBQ0g7OztXQUVELHdCQUFlQSxRQUFmLEVBQXlCO0FBQ3JCLGFBQU8sS0FBS08sR0FBTCxxQ0FBc0NQLFFBQXRDLEVBQVA7QUFDSDs7O1dBRUQsc0JBQWE7QUFDVCxhQUFPLEtBQUtFLElBQUwsQ0FBVSxhQUFWLENBQVA7QUFDSDs7O1dBRUQsc0JBQWE7QUFDVCxhQUFPLEtBQUtBLElBQUwsQ0FBVSxhQUFWLENBQVA7QUFDSDs7O1dBRUQsb0JBQVc7QUFDUCxhQUFPLEtBQUtLLEdBQUwsQ0FBUyxXQUFULENBQVA7QUFDSDs7O1dBRUQsb0JBQVdOLFFBQVgsRUFBcUI7QUFDakIsYUFBTyxlQUFZLGFBQVosRUFBMkI7QUFDOUJBLGdCQUFRLEVBQVJBO0FBRDhCLE9BQTNCLENBQVA7QUFHSDs7O1dBRUQsZ0JBQU9PLE9BQVAsRUFBZ0JQLFFBQWhCLEVBQTBCO0FBQ3RCLGFBQU8sS0FBS0MsSUFBTCxDQUFVLFNBQVYsRUFBcUI7QUFDeEJPLGdCQUFRLEVBQUVELE9BRGM7QUFFeEJQLGdCQUFRLEVBQVJBO0FBRndCLE9BQXJCLENBQVA7QUFJSDs7O1dBRUQsaUJBQVFPLE9BQVIsRUFBaUJQLFFBQWpCLEVBQTJCO0FBQ3ZCLGFBQU8sS0FBS0MsSUFBTCxDQUFVLFVBQVYsRUFBc0I7QUFDekJPLGdCQUFRLEVBQUVELE9BRGU7QUFFekJQLGdCQUFRLEVBQVJBO0FBRnlCLE9BQXRCLENBQVA7QUFJSDs7O1dBRUQsaUJBQVFPLE9BQVIsRUFBaUI7QUFDYixhQUFPLEtBQUtOLElBQUwsQ0FBVSxVQUFWLEVBQXNCO0FBQ3pCTyxnQkFBUSxFQUFFRDtBQURlLE9BQXRCLENBQVA7QUFHSDs7O1dBRUQsa0JBQVNBLE9BQVQsRUFBa0I7QUFDZCxhQUFPLEtBQUtOLElBQUwsQ0FBVSxXQUFWLEVBQXVCO0FBQzFCTyxnQkFBUSxFQUFFRDtBQURnQixPQUF2QixDQUFQO0FBR0g7OztXQUVELG1CQUFVQSxPQUFWLEVBQW1CO0FBQ2YsYUFBTyxlQUFZLFlBQVosRUFBMEI7QUFDN0JDLGdCQUFRLEVBQUVEO0FBRG1CLE9BQTFCLENBQVA7QUFHSDs7O1dBRUQsaUJBQVE7QUFDSixhQUFPLEtBQUtELEdBQUwsQ0FBUyxRQUFULENBQVA7QUFDSDs7O1dBRUQsaUJBQVFDLE9BQVIsRUFBaUI7QUFDYixhQUFPLEtBQUtELEdBQUwsNkJBQThCQyxPQUE5QixFQUFQO0FBQ0g7OztXQUVELGtCQUFTQSxPQUFULEVBQWtCUCxRQUFsQixFQUE0QjtBQUN4QixhQUFPLEtBQUtDLElBQUwsQ0FBVSxXQUFWLEVBQXVCO0FBQzFCTyxnQkFBUSxFQUFFRCxPQURnQjtBQUUxQlAsZ0JBQVEsRUFBUkE7QUFGMEIsT0FBdkIsQ0FBUDtBQUlIOzs7V0FFRCx3QkFBZVMsVUFBZixFQUEyQjtBQUN2QixhQUFPLEtBQUtILEdBQUwsdUNBQXdDRyxVQUF4QyxFQUFQO0FBQ0g7OztXQUVELG9CQUFXQSxVQUFYLEVBQXVCO0FBQ25CLGFBQU8sS0FBS0gsR0FBTCxtQ0FBb0NHLFVBQXBDLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVNGLE9BQVQsRUFBa0JHLFdBQWxCLEVBQStCO0FBQzNCLGFBQU8sS0FBS1QsSUFBTCxDQUFVLFdBQVYsRUFBdUI7QUFDMUJVLGdCQUFRLEVBQUVELFdBRGdCO0FBRTFCRixnQkFBUSxFQUFFRDtBQUZnQixPQUF2QixDQUFQO0FBSUg7OztXQUVELGtCQUFTQSxPQUFULEVBQWtCRyxXQUFsQixFQUErQjtBQUMzQixhQUFPLGVBQVksV0FBWixFQUF5QjtBQUM1QkMsZ0JBQVEsRUFBRUQsV0FEa0I7QUFFNUJGLGdCQUFRLEVBQUVEO0FBRmtCLE9BQXpCLENBQVA7QUFJSDs7O1dBRUQsZUFBTUEsT0FBTixFQUFrQztBQUFBLFVBQW5CRyxXQUFtQix1RUFBTCxHQUFLO0FBQzlCLGFBQU8sS0FBS0osR0FBTCwyQkFBNEJDLE9BQTVCLHVCQUFnREcsV0FBaEQsRUFBUDtBQUNIOzs7V0FFRCxpQkFBUUgsT0FBUixFQUFpQkssR0FBakIsRUFBc0JGLFdBQXRCLEVBQW1DO0FBQy9CLGFBQU8sS0FBS0osR0FBTCx3QkFBeUJNLEdBQXpCLHVCQUF5Q0wsT0FBekMsdUJBQTZERyxXQUE3RCxFQUFQO0FBQ0g7OztXQUVELG9CQUFXSCxPQUFYLEVBQW9CTSxVQUFwQixFQUFnQ3hCLFFBQWhDLEVBQXNGO0FBQUEsVUFBNUN5QixTQUE0Qyx1RUFBaEMsS0FBZ0M7QUFBQSxVQUF6QnhCLGdCQUF5Qix1RUFBTixJQUFNOztBQUNsRixVQUFJLENBQUNELFFBQVEsQ0FBQzBCLEdBQVQsQ0FBYSxPQUFiLENBQUwsRUFBNEI7QUFDeEIsY0FBTSxJQUFJVixLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNILE9BSGlGLENBS2xGOzs7QUFDQWhCLGNBQVEsQ0FBQzJCLEdBQVQsQ0FBYSxVQUFiLEVBQXlCVCxPQUF6QjtBQUNBbEIsY0FBUSxDQUFDMkIsR0FBVCxDQUFhLFlBQWIsRUFBMkJGLFNBQTNCO0FBQ0F6QixjQUFRLENBQUMyQixHQUFULENBQWEsVUFBYixFQUF5QkgsVUFBekI7QUFFQSxhQUFPLEtBQUtJLE1BQUwsQ0FBWSxhQUFaLEVBQTJCNUIsUUFBM0IsRUFBcUNDLGdCQUFyQyxDQUFQO0FBQ0g7OztXQUVELHNCQUFhaUIsT0FBYixFQUFzQlcsUUFBdEIsRUFBZ0NDLElBQWhDLEVBQWlFO0FBQUEsVUFBM0JoQyxrQkFBMkIsdUVBQU4sSUFBTTtBQUM3RCxhQUFPLEtBQUtpQyxRQUFMLG1DQUF5Q0YsUUFBekMsbUJBQTBEQyxJQUExRCx1QkFBMkVaLE9BQTNFLEdBQXNGLEVBQXRGLEVBQTBGcEIsa0JBQTFGLENBQVA7QUFDSDs7O1dBRUQsa0JBQVNvQixPQUFULEVBQWtCWSxJQUFsQixFQUF3QjtBQUNwQixhQUFPLEtBQUtiLEdBQUwsOEJBQStCQyxPQUEvQix3QkFBb0RZLElBQXBELEVBQVA7QUFDSDs7O1dBRUQsbUJBQVVaLE9BQVYsRUFBbUJXLFFBQW5CLEVBQTZCRyxTQUE3QixFQUF3QztBQUNwQyxhQUFPLEtBQUtwQixJQUFMLENBQVUsWUFBVixFQUF3QjtBQUMzQk8sZ0JBQVEsRUFBRUQsT0FEaUI7QUFFM0JlLGlCQUFTLEVBQUVKLFFBRmdCO0FBRzNCSyxpQkFBUyxFQUFFRjtBQUhnQixPQUF4QixDQUFQO0FBS0g7OztXQUVELHlCQUFnQmQsT0FBaEIsRUFBeUJpQixhQUF6QixFQUF3QztBQUNwQyxhQUFPLEtBQUtsQixHQUFMLHFDQUFzQ0MsT0FBdEMsMEJBQTZEaUIsYUFBN0QsRUFBUDtBQUNIOzs7V0FFRCxxQkFBWWpCLE9BQVosRUFBcUJpQixhQUFyQixFQUFtRDtBQUFBLFVBQWZDLE9BQWUsdUVBQUwsR0FBSztBQUMvQyxhQUFPLEtBQUtuQixHQUFMLGlDQUFrQ0MsT0FBbEMsMEJBQXlEaUIsYUFBekQsdUJBQW1GQyxPQUFuRixFQUFQO0FBQ0g7OztXQUVELG9CQUFXbEIsT0FBWCxFQUFvQlcsUUFBcEIsRUFBOEI7QUFDMUIsYUFBTyxlQUFZLGFBQVosRUFBMkI7QUFDOUJWLGdCQUFRLEVBQUVELE9BRG9CO0FBRTlCZSxpQkFBUyxFQUFFSjtBQUZtQixPQUEzQixDQUFQO0FBSUg7OztXQUVELGVBQU1YLE9BQU4sRUFBZW1CLFNBQWYsRUFBMEI7QUFDdEIsYUFBTyxLQUFLekIsSUFBTCxDQUFVLFFBQVYsRUFBb0I7QUFDdkJPLGdCQUFRLEVBQUVELE9BRGE7QUFFdkJvQixrQkFBVSxFQUFFRDtBQUZXLE9BQXBCLENBQVA7QUFJSDs7O1dBRUQsZ0JBQU9uQixPQUFQLEVBQWdCbUIsU0FBaEIsRUFBMkI7QUFDdkIsYUFBTyxLQUFLekIsSUFBTCxDQUFVLFNBQVYsRUFBcUI7QUFDeEJPLGdCQUFRLEVBQUVELE9BRGM7QUFFeEJvQixrQkFBVSxFQUFFRDtBQUZZLE9BQXJCLENBQVA7QUFJSDs7O1dBRUQsaUJBQVFuQixPQUFSLEVBQWlCbUIsU0FBakIsRUFBNEI7QUFDeEIsYUFBTyxLQUFLekIsSUFBTCxDQUFVLFVBQVYsRUFBc0I7QUFDekJPLGdCQUFRLEVBQUVELE9BRGU7QUFFekJvQixrQkFBVSxFQUFFRDtBQUZhLE9BQXRCLENBQVA7QUFJSDs7O1dBRUQsY0FBS25CLE9BQUwsRUFBYztBQUNWLGFBQU8sS0FBS0QsR0FBTCwwQkFBMkJDLE9BQTNCLEVBQVA7QUFDSDs7O1dBRUQsa0JBQVNBLE9BQVQsRUFBa0JtQixTQUFsQixFQUE2QjtBQUN6QixhQUFPLGVBQVksV0FBWixFQUF5QjtBQUM1QmxCLGdCQUFRLEVBQUVELE9BRGtCO0FBRTVCb0Isa0JBQVUsRUFBRUQ7QUFGZ0IsT0FBekIsQ0FBUDtBQUlIOzs7V0FFRCxvQkFBV25CLE9BQVgsRUFBb0JtQixTQUFwQixFQUErQkUsR0FBL0IsRUFBb0NDLEtBQXBDLEVBQTJDO0FBQ3ZDLGFBQU8sS0FBSzVCLElBQUwsQ0FBVSxjQUFWLEVBQTBCO0FBQzdCTyxnQkFBUSxFQUFFRCxPQURtQjtBQUU3Qm9CLGtCQUFVLEVBQUVELFNBRmlCO0FBRzdCRSxXQUFHLEVBQUhBLEdBSDZCO0FBSTdCQyxhQUFLLEVBQUxBO0FBSjZCLE9BQTFCLENBQVA7QUFNSDs7O1dBRUQsb0JBQVd0QixPQUFYLEVBQW9CbUIsU0FBcEIsRUFBK0JFLEdBQS9CLEVBQW9DO0FBQ2hDLGFBQU8sS0FBS3RCLEdBQUwsaUNBQWtDQyxPQUFsQyx5QkFBd0RtQixTQUF4RCxrQkFBeUVFLEdBQXpFLEVBQVA7QUFDSDs7O1dBRUQsdUJBQWNyQixPQUFkLEVBQXVCbUIsU0FBdkIsRUFBa0NFLEdBQWxDLEVBQXVDO0FBQ25DLGFBQU8sZUFBWSxjQUFaLEVBQTRCO0FBQy9CcEIsZ0JBQVEsRUFBRUQsT0FEcUI7QUFFL0JvQixrQkFBVSxFQUFFRCxTQUZtQjtBQUcvQkUsV0FBRyxFQUFIQTtBQUgrQixPQUE1QixDQUFQO0FBS0g7OztXQUVELG1CQUFVckIsT0FBVixFQUFtQm1CLFNBQW5CLEVBQThCckMsUUFBOUIsRUFBdUQ7QUFBQSxVQUFmeUMsTUFBZSx1RUFBTixJQUFNOztBQUNuRCxVQUFJLENBQUN6QyxRQUFRLENBQUMwQixHQUFULENBQWEsS0FBYixDQUFMLEVBQTBCO0FBQ3RCLGNBQU0sSUFBSVYsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDSDs7QUFFRGhCLGNBQVEsQ0FBQzJCLEdBQVQsQ0FBYSxVQUFiLEVBQXlCVCxPQUF6QjtBQUNBbEIsY0FBUSxDQUFDMkIsR0FBVCxDQUFhLFlBQWIsRUFBMkJVLFNBQTNCO0FBQ0FyQyxjQUFRLENBQUMyQixHQUFULENBQWEsUUFBYixFQUF1QmMsTUFBdkI7QUFFQSxhQUFPLEtBQUtiLE1BQUwsQ0FBWSxZQUFaLEVBQTBCNUIsUUFBMUIsQ0FBUDtBQUNIOzs7V0FFRCxnQkFBT2tCLE9BQVAsRUFBZ0JtQixTQUFoQixFQUEyQkssV0FBM0IsRUFBd0NDLFNBQXhDLEVBQW1EQyxLQUFuRCxFQUEwRDtBQUN0RCxhQUFPLEtBQUtoQyxJQUFMLENBQVUsU0FBVixFQUFxQjtBQUN4Qk8sZ0JBQVEsRUFBRUQsT0FEYztBQUV4Qm9CLGtCQUFVLEVBQUVELFNBRlk7QUFHeEJRLG9CQUFZLEVBQUVILFdBSFU7QUFJeEJJLGtCQUFVLEVBQUVILFNBSlk7QUFLeEJDLGFBQUssRUFBTEE7QUFMd0IsT0FBckIsQ0FBUDtBQU9IOzs7V0FFRCxvQkFBVzFCLE9BQVgsRUFBb0JtQixTQUFwQixFQUErQjtBQUMzQixhQUFPLEtBQUtwQixHQUFMLGlDQUFrQ0MsT0FBbEMseUJBQXdEbUIsU0FBeEQsRUFBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FFSSxnQkFBT25CLE9BQVAsRUFBZ0JtQixTQUFoQixFQUEyQlUsV0FBM0IsRUFBd0Q7QUFBQSxVQUFoQkMsT0FBZ0IsdUVBQU4sSUFBTTtBQUNwRCxhQUFPLEtBQUtwQyxJQUFMLENBQVUsU0FBVixFQUFxQjtBQUN4Qk8sZ0JBQVEsRUFBRUQsT0FEYztBQUV4Qm9CLGtCQUFVLEVBQUVELFNBRlk7QUFHeEJZLFVBQUUsRUFBRUYsV0FIb0I7QUFJeEJDLGVBQU8sRUFBRUEsT0FBTyxDQUFDRSxRQUFSO0FBSmUsT0FBckIsQ0FBUDtBQU1IOzs7V0FFRCxpQkFBUWhDLE9BQVIsRUFBaUJtQixTQUFqQixFQUE0QjtBQUN4QixhQUFPLEtBQUt6QixJQUFMLENBQVUsVUFBVixFQUFzQjtBQUN6Qk8sZ0JBQVEsRUFBRUQsT0FEZTtBQUV6Qm9CLGtCQUFVLEVBQUVEO0FBRmEsT0FBdEIsQ0FBUDtBQUlIOzs7V0FFRCxrQkFBU25CLE9BQVQsRUFBa0JtQixTQUFsQixFQUE2QjtBQUN6QixhQUFPLEtBQUt6QixJQUFMLENBQVUsV0FBVixFQUF1QjtBQUMxQk8sZ0JBQVEsRUFBRUQsT0FEZ0I7QUFFMUJvQixrQkFBVSxFQUFFRDtBQUZjLE9BQXZCLENBQVA7QUFJSDs7O1dBRUQsaUJBQVFuQixPQUFSLEVBQWlCbUIsU0FBakIsRUFBNEJjLElBQTVCLEVBQThDO0FBQUEsVUFBWlAsS0FBWSx1RUFBSixFQUFJO0FBQzFDLGFBQU8sS0FBSzNCLEdBQUwsNkJBQThCQyxPQUE5Qix5QkFBb0RtQixTQUFwRCxtQkFBc0VjLElBQXRFLG9CQUFvRlAsS0FBcEYsRUFBUDtBQUNIOzs7V0FFRCxlQUFNMUIsT0FBTixFQUFlO0FBQ1g7QUFDQTtBQUNBLGFBQU8sS0FBS0QsR0FBTCwyQkFBNEJDLE9BQTVCLEVBQVA7QUFDSDs7O1dBRUQsbUJBQVVBLE9BQVYsRUFBbUJtQixTQUFuQixFQUE4QjtBQUMxQixhQUFPLGVBQVksWUFBWixFQUEwQjtBQUM3QmxCLGdCQUFRLEVBQUVELE9BRG1CO0FBRTdCb0Isa0JBQVUsRUFBRUQ7QUFGaUIsT0FBMUIsQ0FBUDtBQUlIOzs7V0FFRCxxQkFBWW5CLE9BQVosRUFBcUJtQixTQUFyQixFQUFnQ2UsR0FBaEMsRUFBcUM7QUFDakMsYUFBTyxLQUFLeEMsSUFBTCxDQUFVLGVBQVYsRUFBMkI7QUFDOUJPLGdCQUFRLEVBQUVELE9BRG9CO0FBRTlCb0Isa0JBQVUsRUFBRUQsU0FGa0I7QUFHOUJlLFdBQUcsRUFBSEE7QUFIOEIsT0FBM0IsQ0FBUDtBQUtIOzs7V0FFRCxxQkFBWWxDLE9BQVosRUFBcUJtQixTQUFyQixFQUFnQ2dCLEVBQWhDLEVBQW9DO0FBQ2hDLGFBQU8sS0FBS3BDLEdBQUwsa0NBQW1DQyxPQUFuQyx5QkFBeURtQixTQUF6RCxpQkFBeUVnQixFQUF6RSxFQUFQO0FBQ0g7OztXQUVELHdCQUFlbkMsT0FBZixFQUF3Qm1CLFNBQXhCLEVBQW1DZ0IsRUFBbkMsRUFBdUM7QUFDbkMsYUFBTyxlQUFZLGVBQVosRUFBNkI7QUFDaENsQyxnQkFBUSxFQUFFRCxPQURzQjtBQUVoQ29CLGtCQUFVLEVBQUVELFNBRm9CO0FBR2hDZ0IsVUFBRSxFQUFGQTtBQUhnQyxPQUE3QixDQUFQO0FBS0g7OztXQUVELHFCQUFZbkMsT0FBWixFQUFxQm1CLFNBQXJCLEVBQWdDckMsUUFBaEMsRUFBMEM7QUFDdEMsVUFBSSxDQUFDQSxRQUFRLENBQUMwQixHQUFULENBQWEsTUFBYixDQUFMLEVBQTJCO0FBQ3ZCLGNBQU0sSUFBSVYsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDSDs7QUFFRGhCLGNBQVEsQ0FBQzJCLEdBQVQsQ0FBYSxVQUFiLEVBQXlCVCxPQUF6QjtBQUNBbEIsY0FBUSxDQUFDMkIsR0FBVCxDQUFhLFlBQWIsRUFBMkJVLFNBQTNCO0FBRUEsYUFBTyxLQUFLVCxNQUFMLENBQVksY0FBWixFQUE0QjVCLFFBQTVCLENBQVA7QUFDSDs7O1dBRUQsc0JBQWFrQixPQUFiLEVBQXNCbUIsU0FBdEIsRUFBaUNyQyxRQUFqQyxFQUEyQztBQUN2QyxVQUFJLENBQUNBLFFBQVEsQ0FBQzBCLEdBQVQsQ0FBYSxNQUFiLENBQUwsRUFBMkI7QUFDdkIsY0FBTSxJQUFJVixLQUFKLENBQVUsNkJBQVYsQ0FBTjtBQUNIOztBQUVEaEIsY0FBUSxDQUFDMkIsR0FBVCxDQUFhLFVBQWIsRUFBeUJULE9BQXpCO0FBQ0FsQixjQUFRLENBQUMyQixHQUFULENBQWEsWUFBYixFQUEyQlUsU0FBM0I7QUFFQSxhQUFPLEtBQUtULE1BQUwsQ0FBWSxlQUFaLEVBQTZCNUIsUUFBN0IsQ0FBUDtBQUNIOzs7V0FFRCxnQkFBTztBQUNILGFBQU8sZ0JBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2ZEwsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiZmFpcm9zLmRldmVsb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSwgcmVxdWlyZShcInN0cmVhbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJheGlvc1wiLCBcInN0cmVhbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGYWlyT1NcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJheGlvc1wiKSwgcmVxdWlyZShcInN0cmVhbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmFpck9TXCJdID0gZmFjdG9yeShyb290W1wiYXhpb3NcIl0sIHJvb3RbXCJzdHJlYW1cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9heGlvc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3N0cmVhbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9FbmNvZGVyX2luc3RhbmNlcywgX0VuY29kZXJfQ1JMRiwgX0VuY29kZXJfQ1JMRl9CWVRFUywgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEgsIF9FbmNvZGVyX0RBU0hFUywgX0VuY29kZXJfZW5jb2RlciwgX0VuY29kZXJfZm9vdGVyLCBfRW5jb2Rlcl9mb3JtLCBfRW5jb2Rlcl9nZXRGaWVsZEhlYWRlcjtcbmltcG9ydCBjcmVhdGVCb3VuZGFyeSBmcm9tIFwiLi91dGlsL2NyZWF0ZUJvdW5kYXJ5LmpzXCI7XG5pbXBvcnQgZXNjYXBlIGZyb20gXCIuL3V0aWwvZXNjYXBlTmFtZS5qc1wiO1xuaW1wb3J0IGlzRm9ybURhdGEgZnJvbSBcIi4vdXRpbC9pc0Zvcm1EYXRhLmpzXCI7XG5pbXBvcnQgaXNGaWxlIGZyb20gXCIuL3V0aWwvaXNGaWxlLmpzXCI7XG5leHBvcnQgY2xhc3MgRW5jb2RlciB7XG4gICAgY29uc3RydWN0b3IoZm9ybSwgYm91bmRhcnkgPSBjcmVhdGVCb3VuZGFyeSgxNikpIHtcbiAgICAgICAgX0VuY29kZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0VuY29kZXJfQ1JMRi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0VuY29kZXJfQ1JMRl9CWVRFUy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEguc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9FbmNvZGVyX0RBU0hFUy5zZXQodGhpcywgXCItXCIucmVwZWF0KDIpKTtcbiAgICAgICAgX0VuY29kZXJfZW5jb2Rlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0VuY29kZXJfZm9vdGVyLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfRW5jb2Rlcl9mb3JtLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBpZiAoIWlzRm9ybURhdGEoZm9ybSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBmaXJzdCBhcmd1bWVudCB0byBiZSBhIEZvcm1EYXRhIGluc3RhbmNlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGJvdW5kYXJ5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYm91bmRhcnkgdG8gYmUgYSBzdHJpbmcuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRhcnkgPSBgZm9ybS1kYXRhLWJvdW5kYXJ5LSR7Ym91bmRhcnl9YDtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke3RoaXMuYm91bmRhcnl9YDtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfRW5jb2Rlcl9lbmNvZGVyLCBuZXcgVGV4dEVuY29kZXIoKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9FbmNvZGVyX0NSTEYsIFwiXFxyXFxuXCIsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfRW5jb2Rlcl9DUkxGX0JZVEVTLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2VuY29kZXIsIFwiZlwiKS5lbmNvZGUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEgsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFUywgXCJmXCIpLmJ5dGVMZW5ndGgsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfRW5jb2Rlcl9mb3JtLCBmb3JtLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0VuY29kZXJfZm9vdGVyLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2VuY29kZXIsIFwiZlwiKS5lbmNvZGUoYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9EQVNIRVMsIFwiZlwiKX0ke3RoaXMuYm91bmRhcnl9JHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX0RBU0hFUywgXCJmXCIpfSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIikucmVwZWF0KDIpfWApLCBcImZcIik7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogdGhpcy5jb250ZW50VHlwZSxcbiAgICAgICAgICAgIFwiQ29udGVudC1MZW5ndGhcIjogdGhpcy5nZXRDb250ZW50TGVuZ3RoKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbnRlbnRMZW5ndGgoKSB7XG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9mb3JtLCBcImZcIikpIHtcbiAgICAgICAgICAgIGxlbmd0aCArPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2luc3RhbmNlcywgXCJtXCIsIF9FbmNvZGVyX2dldEZpZWxkSGVhZGVyKS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgbGVuZ3RoICs9IGlzRmlsZSh2YWx1ZSlcbiAgICAgICAgICAgICAgICA/IHZhbHVlLnNpemVcbiAgICAgICAgICAgICAgICA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfZW5jb2RlciwgXCJmXCIpLmVuY29kZShTdHJpbmcodmFsdWUpKS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgbGVuZ3RoICs9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFU19MRU5HVEgsIFwiZlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoICsgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9mb290ZXIsIFwiZlwiKS5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgICAqdmFsdWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9mb3JtLCBcImZcIikuZW50cmllcygpKSB7XG4gICAgICAgICAgICB5aWVsZCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2luc3RhbmNlcywgXCJtXCIsIF9FbmNvZGVyX2dldEZpZWxkSGVhZGVyKS5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIHlpZWxkIGlzRmlsZSh2YWx1ZSkgPyB2YWx1ZSA6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfZW5jb2RlciwgXCJmXCIpLmVuY29kZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfQ1JMRl9CWVRFUywgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfZm9vdGVyLCBcImZcIik7XG4gICAgfVxuICAgIGFzeW5jICplbmNvZGUoKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiB0aGlzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBpZiAoaXNGaWxlKHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgeWllbGQqIHBhcnQuc3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBwYXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFsoX0VuY29kZXJfQ1JMRiA9IG5ldyBXZWFrTWFwKCksIF9FbmNvZGVyX0NSTEZfQllURVMgPSBuZXcgV2Vha01hcCgpLCBfRW5jb2Rlcl9DUkxGX0JZVEVTX0xFTkdUSCA9IG5ldyBXZWFrTWFwKCksIF9FbmNvZGVyX0RBU0hFUyA9IG5ldyBXZWFrTWFwKCksIF9FbmNvZGVyX2VuY29kZXIgPSBuZXcgV2Vha01hcCgpLCBfRW5jb2Rlcl9mb290ZXIgPSBuZXcgV2Vha01hcCgpLCBfRW5jb2Rlcl9mb3JtID0gbmV3IFdlYWtNYXAoKSwgX0VuY29kZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0VuY29kZXJfZ2V0RmllbGRIZWFkZXIgPSBmdW5jdGlvbiBfRW5jb2Rlcl9nZXRGaWVsZEhlYWRlcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBsZXQgaGVhZGVyID0gXCJcIjtcbiAgICAgICAgaGVhZGVyICs9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0VuY29kZXJfREFTSEVTLCBcImZcIil9JHt0aGlzLmJvdW5kYXJ5fSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIil9YDtcbiAgICAgICAgaGVhZGVyICs9IGBDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCIke2VzY2FwZShuYW1lKX1cImA7XG4gICAgICAgIGlmIChpc0ZpbGUodmFsdWUpKSB7XG4gICAgICAgICAgICBoZWFkZXIgKz0gYDsgZmlsZW5hbWU9XCIke2VzY2FwZSh2YWx1ZS5uYW1lKX1cIiR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIil9YDtcbiAgICAgICAgICAgIGhlYWRlciArPSBgQ29udGVudC1UeXBlOiAke3ZhbHVlLnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9FbmNvZGVyX2VuY29kZXIsIFwiZlwiKS5lbmNvZGUoYCR7aGVhZGVyfSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfRW5jb2Rlcl9DUkxGLCBcImZcIikucmVwZWF0KDIpfWApO1xuICAgIH0sIFN5bWJvbC5pdGVyYXRvcildKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgICB9XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vRm9ybURhdGFMaWtlLmpzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9GaWxlTGlrZS5qc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vRW5jb2Rlci5qc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0ZpbGVMaWtlIH0gZnJvbSBcIi4vdXRpbC9pc0ZpbGUuanNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNGb3JtRGF0YUxpa2UgfSBmcm9tIFwiLi91dGlsL2lzRm9ybURhdGEuanNcIjtcbiIsImNvbnN0IGFscGhhYmV0ID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xuZnVuY3Rpb24gY3JlYXRlQm91bmRhcnkoc2l6ZSkge1xuICAgIGxldCByZXMgPSBcIlwiO1xuICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgcmVzICs9IGFscGhhYmV0WyhNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKSA8PCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvdW5kYXJ5O1xuIiwiY29uc3QgZXNjYXBlTmFtZSA9IChuYW1lKSA9PiBTdHJpbmcobmFtZSlcbiAgICAucmVwbGFjZSgvXFxyL2csIFwiJTBEXCIpXG4gICAgLnJlcGxhY2UoL1xcbi9nLCBcIiUwQVwiKVxuICAgIC5yZXBsYWNlKC9cIi9nLCBcIiUyMlwiKTtcbmV4cG9ydCBkZWZhdWx0IGVzY2FwZU5hbWU7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tIFwiLi9pc0Z1bmN0aW9uLmpzXCI7XG5jb25zdCBWQUxJRF9OQU1FUyA9IFtcIkZpbGVcIiwgXCJCbG9iXCJdO1xuY29uc3QgaXNGaWxlID0gKHZhbHVlKSA9PiBCb29sZWFuKHZhbHVlXG4gICAgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiXG4gICAgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb25zdHJ1Y3RvcilcbiAgICAmJiBWQUxJRF9OQU1FUy5pbmNsdWRlcyh2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddKVxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuc3RyZWFtKVxuICAgICYmIHZhbHVlLm5hbWUgIT0gbnVsbFxuICAgICYmIHZhbHVlLnNpemUgIT0gbnVsbFxuICAgICYmIHZhbHVlLmxhc3RNb2RpZmllZCAhPSBudWxsKTtcbmV4cG9ydCBkZWZhdWx0IGlzRmlsZTtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gXCIuL2lzRnVuY3Rpb24uanNcIjtcbmNvbnN0IGlzRm9ybURhdGEgPSAodmFsdWUpID0+IEJvb2xlYW4odmFsdWVcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbHVlLmNvbnN0cnVjdG9yKVxuICAgICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gPT09IFwiRm9ybURhdGFcIlxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuYXBwZW5kKVxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuZ2V0QWxsKVxuICAgICYmIGlzRnVuY3Rpb24odmFsdWUuZW50cmllcylcbiAgICAmJiBpc0Z1bmN0aW9uKHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pKTtcbmV4cG9ydCBkZWZhdWx0IGlzRm9ybURhdGE7XG4iLCJjb25zdCBpc0Z1bmN0aW9uID0gKHZhbHVlKSA9PiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpO1xuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge0VuY29kZXJ9IGZyb20gJ2Zvcm0tZGF0YS1lbmNvZGVyJztcbmltcG9ydCB7UmVhZGFibGV9IGZyb20gJ3N0cmVhbSc7XG4vLyB0b2RvIHNlbGYtZG9jdW1lbnRlZCBjb2RlIHdpdGggcG9zc2liaWxpdHkgdG8gY3JlYXRlIGRvY3MgcGFnZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWlyT1Mge1xuICAgIGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG4gICAgYmFzZVVSTDtcbiAgICBjb29raWUgPSAnJztcbiAgICBpc1N0b3JlTm9kZUNvb2tpZTtcblxuICAgIGNvbnN0cnVjdG9yKGJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YxLycsIGlzU3RvcmVOb2RlQ29va2llID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmJhc2VVUkwgPSBiYXNlVVJMO1xuICAgICAgICB0aGlzLmlzU3RvcmVOb2RlQ29va2llID0gaXNTdG9yZU5vZGVDb29raWU7XG4gICAgfVxuXG4gICAgc2V0Tm9kZUNvb2tpZShjb29raWUgPSAnJykge1xuICAgICAgICB0aGlzLmNvb2tpZSA9IGNvb2tpZTtcbiAgICB9XG5cbiAgICBzZXRJc1N0b3JlTmV3Q29va2llKGlzU3RvcmVOb2RlQ29va2llKSB7XG4gICAgICAgIHRoaXMuaXNTdG9yZU5vZGVDb29raWUgPSBpc1N0b3JlTm9kZUNvb2tpZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDb29raWVzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTm9kZSAmJiB0aGlzLmlzU3RvcmVOb2RlQ29va2llKSB7XG4gICAgICAgICAgICBsZXQgcmVjZWl2ZWRDb29raWUgPSByZXNwb25zZS5oZWFkZXJzWydzZXQtY29va2llJ107XG4gICAgICAgICAgICBpZiAocmVjZWl2ZWRDb29raWUgJiYgcmVjZWl2ZWRDb29raWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZWRDb29raWUgPSByZWNlaXZlZENvb2tpZVswXS5zcGxpdCgnOycpO1xuICAgICAgICAgICAgICAgIGlmIChyZWNlaXZlZENvb2tpZSAmJiByZWNlaXZlZENvb2tpZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb29raWUgPSByZWNlaXZlZENvb2tpZVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgZ2V0Q29va2llT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc05vZGUgPyB7J0Nvb2tpZSc6IHRoaXMuY29va2llfSA6IHt9O1xuICAgIH1cblxuICAgIGdldChhcGlNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICAgICAgICAgIHVybDogYXBpTWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuZ2V0Q29va2llT2JqZWN0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVDb29raWVzKHJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgcG9zdChhcGlNZXRob2QsIGRhdGEgPSB7fSkge1xuICAgICAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxuICAgICAgICAgICAgdXJsOiBhcGlNZXRob2QsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvb2tpZU9iamVjdCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHRoaXMuaGFuZGxlQ29va2llcyhyZXNwb25zZSkpO1xuICAgIH1cblxuICAgIGRvd25sb2FkKGFwaU1ldGhvZCwgZGF0YSA9IHt9LCBvbkRvd25sb2FkUHJvZ3Jlc3MgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICAgICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXG4gICAgICAgICAgICB1cmw6IGFwaU1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmdldENvb2tpZU9iamVjdCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgb25Eb3dubG9hZFByb2dyZXNzXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVDb29raWVzKHJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGFwaU1ldGhvZCwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgICAgICBiYXNlVVJMOiB0aGlzLmJhc2VVUkwsXG4gICAgICAgICAgICB1cmw6IGFwaU1ldGhvZCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb29raWVPYmplY3QoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB0aGlzLmhhbmRsZUNvb2tpZXMocmVzcG9uc2UpKTtcbiAgICB9XG5cbiAgICB1cGxvYWQoYXBpTWV0aG9kLCBmb3JtRGF0YSwgb25VcGxvYWRQcm9ncmVzcyA9IG51bGwpIHtcbiAgICAgICAgLy8gdG9kbyBpZiBub2RlIHRoZW4gYWRkIGhlYWRlcnMsIGlmIG5vdCAtIG5vdCBhZGRcbiAgICAgICAgLy8gdG9kbyBjaGVjayBmb3Igbm9kZSBhbmQgZm9yIGJyb3dzZXJcbiAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBFbmNvZGVyKGZvcm1EYXRhKTtcbiAgICAgICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICAgICAgICAgIHVybDogYXBpTWV0aG9kLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmlzTm9kZSA/IFJlYWRhYmxlLmZyb20oZW5jb2Rlci5lbmNvZGUoKSkgOiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1heENvbnRlbnRMZW5ndGg6IEluZmluaXR5LFxuICAgICAgICAgICAgbWF4Qm9keUxlbmd0aDogSW5maW5pdHksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5nZXRDb29raWVPYmplY3QoKSxcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5pc05vZGUgPyBlbmNvZGVyLmhlYWRlcnMgOiB7fSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5oYW5kbGVDb29raWVzKHJlc3BvbnNlKSk7XG4gICAgfVxuXG4gICAgdXNlckxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCd1c2VyL2xvZ2luJywge1xuICAgICAgICAgICAgdXNlcl9uYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlclNpZ251cCh1c2VybmFtZSwgcGFzc3dvcmQsIG1uZW1vbmljID0gJycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgndXNlci9zaWdudXAnLCB7XG4gICAgICAgICAgICB1c2VyX25hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBtbmVtb25pY1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VySW1wb3J0KHVzZXJuYW1lLCBwYXNzd29yZCwgbW5lbW9uaWMgPSAnJywgYWRkcmVzcyA9ICcnKSB7XG4gICAgICAgIGlmICgobW5lbW9uaWMgJiYgYWRkcmVzcykgfHwgKCFtbmVtb25pYyAmJiAhYWRkcmVzcykpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQYXNzIG9ubHkgbW5lbW9uaWMgb3Igb25seSBhZGRyZXNzJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCd1c2VyL2ltcG9ydCcsIHtcbiAgICAgICAgICAgIHVzZXJfbmFtZTogdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIG1uZW1vbmljLFxuICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1c2VyUHJlc2VudCh1c2VybmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYHVzZXIvcHJlc2VudD91c2VyX25hbWU9JHt1c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICB1c2VySXNMb2dnZWRJbih1c2VybmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYHVzZXIvaXNsb2dnZWRpbj91c2VyX25hbWU9JHt1c2VybmFtZX1gKTtcbiAgICB9XG5cbiAgICB1c2VyTG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCd1c2VyL2xvZ291dCcpO1xuICAgIH1cblxuICAgIHVzZXJFeHBvcnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3VzZXIvZXhwb3J0Jyk7XG4gICAgfVxuXG4gICAgdXNlclN0YXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlci9zdGF0Jyk7XG4gICAgfVxuXG4gICAgdXNlckRlbGV0ZShwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoJ3VzZXIvZGVsZXRlJywge1xuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kTmV3KHBvZE5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3BvZC9uZXcnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvZE9wZW4ocG9kTmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgncG9kL29wZW4nLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvZFN5bmMocG9kTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdwb2Qvc3luYycsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvZENsb3NlKHBvZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgncG9kL2Nsb3NlJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kRGVsZXRlKHBvZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKCdwb2QvZGVsZXRlJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kTHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgncG9kL2xzJyk7XG4gICAgfVxuXG4gICAgcG9kU3RhdChwb2ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgcG9kL3N0YXQ/cG9kX25hbWU9JHtwb2ROYW1lfWApO1xuICAgIH1cblxuICAgIHBvZFNoYXJlKHBvZE5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ3BvZC9zaGFyZScsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9kUmVjZWl2ZUluZm8oc2hhcmluZ1JlZikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYHBvZC9yZWNlaXZlaW5mbz9zaGFyaW5nX3JlZj0ke3NoYXJpbmdSZWZ9YCk7XG4gICAgfVxuXG4gICAgcG9kUmVjZWl2ZShzaGFyaW5nUmVmKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgcG9kL3JlY2VpdmU/c2hhcmluZ19yZWY9JHtzaGFyaW5nUmVmfWApO1xuICAgIH1cblxuICAgIGRpck1rZGlyKHBvZE5hbWUsIGRpckZ1bGxQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2Rpci9ta2RpcicsIHtcbiAgICAgICAgICAgIGRpcl9wYXRoOiBkaXJGdWxsUGF0aCxcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpclJtZGlyKHBvZE5hbWUsIGRpckZ1bGxQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgnZGlyL3JtZGlyJywge1xuICAgICAgICAgICAgZGlyX3BhdGg6IGRpckZ1bGxQYXRoLFxuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlyTHMocG9kTmFtZSwgZGlyRnVsbFBhdGggPSAnLycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBkaXIvbHM/cG9kX25hbWU9JHtwb2ROYW1lfSZkaXJfcGF0aD0ke2RpckZ1bGxQYXRofWApO1xuICAgIH1cblxuICAgIGRpclN0YXQocG9kTmFtZSwgZGlyLCBkaXJGdWxsUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGRpci9zdGF0P2Rpcj0ke2Rpcn0mcG9kX25hbWU9JHtwb2ROYW1lfSZkaXJfcGF0aD0ke2RpckZ1bGxQYXRofWApO1xuICAgIH1cblxuICAgIGZpbGVVcGxvYWQocG9kTmFtZSwgcG9kRGlyRnVsbCwgZm9ybURhdGEsIGJsb2NrU2l6ZSA9ICcxTWInLCBvblVwbG9hZFByb2dyZXNzID0gbnVsbCkge1xuICAgICAgICBpZiAoIWZvcm1EYXRhLmhhcygnZmlsZXMnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWVsZCBcImZpbGVzXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG8gaW1wbGVtZW50IC1IIFwiZmFpck9TLWRmcy1Db21wcmVzc2lvbjogc25hcHB5L2d6aXBcIlxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3BvZF9uYW1lJywgcG9kTmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgnYmxvY2tfc2l6ZScsIGJsb2NrU2l6ZSk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgnZGlyX3BhdGgnLCBwb2REaXJGdWxsKTtcblxuICAgICAgICByZXR1cm4gdGhpcy51cGxvYWQoJ2ZpbGUvdXBsb2FkJywgZm9ybURhdGEsIG9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGZpbGVEb3dubG9hZChwb2ROYW1lLCBmaWxlUGF0aCwgZmlsZSwgb25Eb3dubG9hZFByb2dyZXNzID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb3dubG9hZChgZmlsZS9kb3dubG9hZD9maWxlX3BhdGg9JHtmaWxlUGF0aH0mZmlsZT0ke2ZpbGV9JnBvZF9uYW1lPSR7cG9kTmFtZX1gLCB7fSwgb25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBmaWxlU3RhdChwb2ROYW1lLCBmaWxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgZmlsZS9zdGF0P3BvZF9uYW1lPSR7cG9kTmFtZX0mZmlsZV9wYXRoPSR7ZmlsZX1gKTtcbiAgICB9XG5cbiAgICBmaWxlU2hhcmUocG9kTmFtZSwgZmlsZVBhdGgsIHRvQWRkcmVzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdmaWxlL3NoYXJlJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICBmaWxlX3BhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgZGVzdF91c2VyOiB0b0FkZHJlc3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZmlsZVJlY2VpdmVJbmZvKHBvZE5hbWUsIGZpbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBmaWxlL3JlY2VpdmVpbmZvP3BvZF9uYW1lPSR7cG9kTmFtZX0mc2hhcmluZ19yZWY9JHtmaWxlUmVmZXJlbmNlfWApO1xuICAgIH1cblxuICAgIGZpbGVSZWNlaXZlKHBvZE5hbWUsIGZpbGVSZWZlcmVuY2UsIGRpclBhdGggPSAnLycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBmaWxlL3JlY2VpdmU/cG9kX25hbWU9JHtwb2ROYW1lfSZzaGFyaW5nX3JlZj0ke2ZpbGVSZWZlcmVuY2V9JmRpcl9wYXRoPSR7ZGlyUGF0aH1gKTtcbiAgICB9XG5cbiAgICBmaWxlRGVsZXRlKHBvZE5hbWUsIGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgnZmlsZS9kZWxldGUnLCB7XG4gICAgICAgICAgICBwb2RfbmFtZTogcG9kTmFtZSxcbiAgICAgICAgICAgIGZpbGVfcGF0aDogZmlsZVBhdGhcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZOZXcocG9kTmFtZSwgdGFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2t2L25ldycsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGt2T3Blbihwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgna3Yvb3BlbicsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGt2Q291bnQocG9kTmFtZSwgdGFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2t2L2NvdW50Jywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZMcyhwb2ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChga3YvbHM/cG9kX25hbWU9JHtwb2ROYW1lfWApO1xuICAgIH1cblxuICAgIGt2RGVsZXRlKHBvZE5hbWUsIHRhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoJ2t2L2RlbGV0ZScsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGt2RW50cnlQdXQocG9kTmFtZSwgdGFibGVOYW1lLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2t2L2VudHJ5L3B1dCcsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZFbnRyeUdldChwb2ROYW1lLCB0YWJsZU5hbWUsIGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoYGt2L2VudHJ5L2dldD9wb2RfbmFtZT0ke3BvZE5hbWV9JnRhYmxlX25hbWU9JHt0YWJsZU5hbWV9JmtleT0ke2tleX1gKTtcbiAgICB9XG5cbiAgICBrdkVudHJ5RGVsZXRlKHBvZE5hbWUsIHRhYmxlTmFtZSwga2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgna3YvZW50cnkvZGVsJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBrZXlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZMb2FkQ3N2KHBvZE5hbWUsIHRhYmxlTmFtZSwgZm9ybURhdGEsIG1lbW9yeSA9IHRydWUpIHtcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5oYXMoJ2NzdicpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkIFwiY3N2XCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1EYXRhLnNldCgncG9kX25hbWUnLCBwb2ROYW1lKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KCd0YWJsZV9uYW1lJywgdGFibGVOYW1lKTtcbiAgICAgICAgZm9ybURhdGEuc2V0KCdtZW1vcnknLCBtZW1vcnkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZCgna3YvbG9hZGNzdicsIGZvcm1EYXRhKTtcbiAgICB9XG5cbiAgICBrdlNlZWsocG9kTmFtZSwgdGFibGVOYW1lLCBzdGFydFByZWZpeCwgZW5kUHJlZml4LCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KCdrdi9zZWVrJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBzdGFydF9wcmVmaXg6IHN0YXJ0UHJlZml4LFxuICAgICAgICAgICAgZW5kX3ByZWZpeDogZW5kUHJlZml4LFxuICAgICAgICAgICAgbGltaXRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga3ZTZWVrTmV4dChwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBrdi9zZWVrL25leHQ/cG9kX25hbWU9JHtwb2ROYW1lfSZ0YWJsZV9uYW1lPSR7dGFibGVOYW1lfWApO1xuICAgIH1cblxuICAgIC8qXG5QT1NUIC1GICduYW1lPVxcPGRvY3VtZW50IHRhYmxlIG5hbWU+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL25ld1xuUE9TVCAtRiAnbmFtZT1cXDxkb2N1bWVudCB0YWJsZSBuYW1lPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9vcGVuXG5QT1NUIC1GICduYW1lPVxcPHRkb2N1bWVudCBhYmxlIG5hbWU+JyAtRiAnZXhwcj1cXDxleHByZXNzaW9uPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9jb3VudFxuUE9TVCAtRiAnbmFtZT1cXDxkb2N1bWVudCB0YWJsZSBuYW1lPicgLUYgJ2V4cHI9XFw8ZXhwcmVzc2lvbj4nIC1GICdsaW1pdD1cXDxubyBvZiByZWNvcmRzPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9maW5kXG5QT1NUIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC92MC9kb2MvbHNcbkRFTEVURSAtRiAnbmFtZT1cXDx0ZG9jdW1lbnQgYWJsZSBuYW1lPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9kZWxldGVcblBPU1QgLUYgJ25hbWU9XFw8dGRvY3VtZW50IGFibGUgbmFtZT4nIC1GICdkb2M9XFw8anNvbiBkb2N1bWVudCBpbiBieXRlcz4nIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC92MC9kb2MvZW50cnkvcHV0XG5HRVQgLUYgJ25hbWU9XFw8ZG9jdW1lbnQgdGFibGUgbmFtZT4nIC1GICdpZD1cXDxkb2N1bWVudCBpZD4nIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC92MC9kb2MvZW50cnkvZ2V0XG5ERUxFVEUgLUYgJ25hbWU9XFw8ZG9jdW1lbnQgdGFibGUgbmFtZT4nIC1GICdpZD1cXDxkb2N1bWVudCBpZD4nIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5MC92MC9kb2MvZW50cnkvZGVsXG5QT1NUIC1GICduYW1lPVxcPGRvY3VtZW50IHRhYmxlIG5hbWU+JyAtRiAnanNvbj1AXFw8anNvbl9maWxlPicgaHR0cDovL2xvY2FsaG9zdDo5MDkwL3YwL2RvYy9sb2FkanNvblxuUE9TVCAtRiAnbmFtZT1cXDxkb2N1bWVudCB0YWJsZSBuYW1lPicgLUYgJ2ZpbGU9XFw8cG9kIGZpbGU+JyBodHRwOi8vbG9jYWxob3N0OjkwOTAvdjAvZG9jL2luZGV4anNvblxuICovXG5cbiAgICBkb2NOZXcocG9kTmFtZSwgdGFibGVOYW1lLCBzaW1wbGVJbmRleCwgbXV0YWJsZSA9IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnZG9jL25ldycsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lLFxuICAgICAgICAgICAgc2k6IHNpbXBsZUluZGV4LFxuICAgICAgICAgICAgbXV0YWJsZTogbXV0YWJsZS50b1N0cmluZygpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY09wZW4ocG9kTmFtZSwgdGFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2RvYy9vcGVuJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jQ291bnQocG9kTmFtZSwgdGFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoJ2RvYy9jb3VudCcsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY0ZpbmQocG9kTmFtZSwgdGFibGVOYW1lLCBleHByLCBsaW1pdCA9IDEwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChgZG9jL2ZpbmQ/cG9kX25hbWU9JHtwb2ROYW1lfSZ0YWJsZV9uYW1lPSR7dGFibGVOYW1lfSZleHByPSR7ZXhwcn0mbGltaXQ9JHtsaW1pdH1gKTtcbiAgICB9XG5cbiAgICBkb2NMcyhwb2ROYW1lKSB7XG4gICAgICAgIC8vIHRvZG8gZml4IGl0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlyRGF0YVNvY2lldHkvZmFpck9TLWRmcy9pc3N1ZXMvOTdcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuZ2V0KGBkb2MvbHNgKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBkb2MvbHM/cG9kX25hbWU9JHtwb2ROYW1lfWApO1xuICAgIH1cblxuICAgIGRvY0RlbGV0ZShwb2ROYW1lLCB0YWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKCdkb2MvZGVsZXRlJywge1xuICAgICAgICAgICAgcG9kX25hbWU6IHBvZE5hbWUsXG4gICAgICAgICAgICB0YWJsZV9uYW1lOiB0YWJsZU5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jRW50cnlQdXQocG9kTmFtZSwgdGFibGVOYW1lLCBkb2MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCgnZG9jL2VudHJ5L3B1dCcsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lLFxuICAgICAgICAgICAgZG9jXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY0VudHJ5R2V0KHBvZE5hbWUsIHRhYmxlTmFtZSwgaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGBkb2MvZW50cnkvZ2V0P3BvZF9uYW1lPSR7cG9kTmFtZX0mdGFibGVfbmFtZT0ke3RhYmxlTmFtZX0maWQ9JHtpZH1gKTtcbiAgICB9XG5cbiAgICBkb2NFbnRyeURlbGV0ZShwb2ROYW1lLCB0YWJsZU5hbWUsIGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSgnZG9jL2VudHJ5L2RlbCcsIHtcbiAgICAgICAgICAgIHBvZF9uYW1lOiBwb2ROYW1lLFxuICAgICAgICAgICAgdGFibGVfbmFtZTogdGFibGVOYW1lLFxuICAgICAgICAgICAgaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jTG9hZEpzb24ocG9kTmFtZSwgdGFibGVOYW1lLCBmb3JtRGF0YSkge1xuICAgICAgICBpZiAoIWZvcm1EYXRhLmhhcygnanNvbicpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpZWxkIFwianNvblwiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtRGF0YS5zZXQoJ3BvZF9uYW1lJywgcG9kTmFtZSk7XG4gICAgICAgIGZvcm1EYXRhLnNldCgndGFibGVfbmFtZScsIHRhYmxlTmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkKCdkb2MvbG9hZGpzb24nLCBmb3JtRGF0YSk7XG4gICAgfVxuXG4gICAgZG9jSW5kZXhKc29uKHBvZE5hbWUsIHRhYmxlTmFtZSwgZm9ybURhdGEpIHtcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5oYXMoJ2pzb24nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWVsZCBcImpzb25cIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybURhdGEuc2V0KCdwb2RfbmFtZScsIHBvZE5hbWUpO1xuICAgICAgICBmb3JtRGF0YS5zZXQoJ3RhYmxlX25hbWUnLCB0YWJsZU5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVwbG9hZCgnZG9jL2luZGV4anNvbicsIGZvcm1EYXRhKTtcbiAgICB9XG5cbiAgICB0ZXN0KCkge1xuICAgICAgICByZXR1cm4gJ0ZhaXJPUyB0ZXN0IE9LJztcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYXhpb3NfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfc3RyZWFtX187Il0sInNvdXJjZVJvb3QiOiIifQ==