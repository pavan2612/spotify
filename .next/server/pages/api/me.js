"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/me";
exports.ids = ["pages/api/me"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "./lib/auth.ts?979c":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prisma */ \"./lib/prisma.ts?0769\");\n\n\nconst validateRoute = handler => {\n  return async (req, res) => {\n    const token = req.cookies.access_token;\n\n    if (token) {\n      let user;\n\n      try {\n        const {\n          id\n        } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, 'hello');\n        user = await _prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n          where: {\n            id\n          }\n        });\n\n        if (!user) {\n          throw new Error('Not a valid user');\n        }\n      } catch (error) {\n        res.status(401);\n        res.json({\n          error: 'Not Authorized'\n        });\n        return;\n      }\n\n      return handler(req, res, user);\n    }\n\n    res.status(401);\n    res.json({\n      error: 'Not Authorized'\n    });\n  };\n};\nconst validateToken = token => {\n  const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, 'hello');\n  return user;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cz85NzljLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLE1BQU1FLGFBQWEsR0FBSUMsT0FBRCxJQUFhO0FBQ3hDLFNBQU8sT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDMUQsVUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQUosQ0FBWUMsWUFBMUI7O0FBRUEsUUFBSUYsS0FBSixFQUFXO0FBQ1QsVUFBSUcsSUFBSjs7QUFFQSxVQUFJO0FBQ0YsY0FBTTtBQUFFQyxVQUFBQTtBQUFGLFlBQVNWLDBEQUFBLENBQVdNLEtBQVgsRUFBa0IsT0FBbEIsQ0FBZjtBQUNBRyxRQUFBQSxJQUFJLEdBQUcsTUFBTVIsK0RBQUEsQ0FBdUI7QUFDbENZLFVBQUFBLEtBQUssRUFBRTtBQUFFSCxZQUFBQTtBQUFGO0FBRDJCLFNBQXZCLENBQWI7O0FBSUEsWUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDVCxnQkFBTSxJQUFJSyxLQUFKLENBQVUsa0JBQVYsQ0FBTjtBQUNEO0FBQ0YsT0FURCxDQVNFLE9BQU9DLEtBQVAsRUFBYztBQUNkVixRQUFBQSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYO0FBQ0FYLFFBQUFBLEdBQUcsQ0FBQ1ksSUFBSixDQUFTO0FBQUVGLFVBQUFBLEtBQUssRUFBRTtBQUFULFNBQVQ7QUFDQTtBQUNEOztBQUVELGFBQU9aLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdJLElBQVgsQ0FBZDtBQUNEOztBQUVESixJQUFBQSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ1ksSUFBSixDQUFTO0FBQUVGLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQVQ7QUFDRCxHQTFCRDtBQTJCRCxDQTVCTTtBQThCQSxNQUFNRyxhQUFhLEdBQUlaLEtBQUQsSUFBVztBQUN0QyxRQUFNRyxJQUFJLEdBQUdULDBEQUFBLENBQVdNLEtBQVgsRUFBa0IsT0FBbEIsQ0FBYjtBQUNBLFNBQU9HLElBQVA7QUFDRCxDQUhNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3BvdGlmeV9jbG9uZS8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi9wcmlzbWEnXG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVJvdXRlID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMuYWNjZXNzX3Rva2VuXG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGxldCB1c2VyXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IGp3dC52ZXJpZnkodG9rZW4sICdoZWxsbycpXG4gICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgdXNlcicpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKVxuICAgICAgICByZXMuanNvbih7IGVycm9yOiAnTm90IEF1dGhvcml6ZWQnIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcywgdXNlcilcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDQwMSlcbiAgICByZXMuanNvbih7IGVycm9yOiAnTm90IEF1dGhvcml6ZWQnIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVG9rZW4gPSAodG9rZW4pID0+IHtcbiAgY29uc3QgdXNlciA9IGp3dC52ZXJpZnkodG9rZW4sICdoZWxsbycpXG4gIHJldHVybiB1c2VyXG59XG4iXSwibmFtZXMiOlsiand0IiwicHJpc21hIiwidmFsaWRhdGVSb3V0ZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImNvb2tpZXMiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VyIiwiaWQiLCJ2ZXJpZnkiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJFcnJvciIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInZhbGlkYXRlVG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/auth.ts?979c\n");

/***/ }),

/***/ "./lib/prisma.ts?0769":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzPzA3NjkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxpRUFBZSxJQUFJQSx3REFBSixFQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3BvdGlmeV9jbG9uZS8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts?0769\n");

/***/ }),

/***/ "./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/auth */ \"./lib/auth.ts?979c\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts?0769\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.validateRoute)(async (req, res, user) => {\n  const playlistsCount = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playlist.count({\n    where: {\n      userId: user.id\n    }\n  });\n  console.log(playlistsCount);\n  res.json(_objectSpread(_objectSpread({}, user), {}, {\n    playlistsCount\n  }));\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQSx3REFBYSxDQUFDLE9BQU9FLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDckQsUUFBTUMsY0FBYyxHQUFHLE1BQU1KLGtFQUFBLENBQXNCO0FBQ2pETyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFTCxJQUFJLENBQUNNO0FBRFI7QUFEMEMsR0FBdEIsQ0FBN0I7QUFNQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLGNBQVo7QUFDQUYsRUFBQUEsR0FBRyxDQUFDVSxJQUFKLGlDQUFjVCxJQUFkO0FBQW9CQyxJQUFBQTtBQUFwQjtBQUNELENBVDJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3BvdGlmeV9jbG9uZS8uL3BhZ2VzL2FwaS9tZS50cz83YzI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlUm91dGUgfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVSb3V0ZShhc3luYyAocmVxLCByZXMsIHVzZXIpID0+IHtcbiAgY29uc3QgcGxheWxpc3RzQ291bnQgPSBhd2FpdCBwcmlzbWEucGxheWxpc3QuY291bnQoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgfSxcbiAgfSlcblxuICBjb25zb2xlLmxvZyhwbGF5bGlzdHNDb3VudClcbiAgcmVzLmpzb24oeyAuLi51c2VyLCBwbGF5bGlzdHNDb3VudCB9KVxufSlcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZVJvdXRlIiwicHJpc21hIiwicmVxIiwicmVzIiwidXNlciIsInBsYXlsaXN0c0NvdW50IiwicGxheWxpc3QiLCJjb3VudCIsIndoZXJlIiwidXNlcklkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/me.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/me.ts"));
module.exports = __webpack_exports__;

})();