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
exports.id = "pages/api/playlist";
exports.ids = ["pages/api/playlist"];
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

/***/ "./pages/api/playlist.ts":
/*!*******************************!*\
  !*** ./pages/api/playlist.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"./lib/prisma.ts?0769\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/auth */ \"./lib/auth.ts?979c\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.validateRoute)(async (req, res, user) => {\n  const playlists = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].playlist.findMany({\n    where: {\n      userId: user.id\n    },\n    orderBy: {\n      name: 'asc'\n    }\n  });\n  res.json(playlists);\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGxheWxpc3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLGlFQUFlQyx3REFBYSxDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFpQkMsSUFBakIsS0FBMEI7QUFDckQsUUFBTUMsU0FBUyxHQUFHLE1BQU1MLHFFQUFBLENBQXlCO0FBQy9DUSxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFTCxJQUFJLENBQUNNO0FBRFIsS0FEd0M7QUFJL0NDLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUU7QUFEQztBQUpzQyxHQUF6QixDQUF4QjtBQVNBVCxFQUFBQSxHQUFHLENBQUNVLElBQUosQ0FBU1IsU0FBVDtBQUNELENBWDJCLENBQTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU3BvdGlmeV9jbG9uZS8uL3BhZ2VzL2FwaS9wbGF5bGlzdC50cz8xODhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcbmltcG9ydCB7IHZhbGlkYXRlUm91dGUgfSBmcm9tICcuLi8uLi9saWIvYXV0aCdcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVSb3V0ZShhc3luYyAocmVxLCByZXMsIHVzZXIpID0+IHtcbiAgY29uc3QgcGxheWxpc3RzID0gYXdhaXQgcHJpc21hLnBsYXlsaXN0LmZpbmRNYW55KHtcbiAgICB3aGVyZToge1xuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgIH0sXG4gICAgb3JkZXJCeToge1xuICAgICAgbmFtZTogJ2FzYycsXG4gICAgfSxcbiAgfSlcblxuICByZXMuanNvbihwbGF5bGlzdHMpXG59KVxuIl0sIm5hbWVzIjpbInByaXNtYSIsInZhbGlkYXRlUm91dGUiLCJyZXEiLCJyZXMiLCJ1c2VyIiwicGxheWxpc3RzIiwicGxheWxpc3QiLCJmaW5kTWFueSIsIndoZXJlIiwidXNlcklkIiwiaWQiLCJvcmRlckJ5IiwibmFtZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/playlist.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/playlist.ts"));
module.exports = __webpack_exports__;

})();