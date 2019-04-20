(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/client/components/Login.jsx":
/*!*****************************************!*\
  !*** ./src/client/components/Login.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar Login = function Login(_ref) {\n  var login = _ref.login,\n      setLogin = _ref.setLogin,\n      location = _ref.location;\n\n  var _ref2 = location.state || {\n    from: {\n      pathname: '/'\n    }\n  },\n      from = _ref2.from;\n\n  return login ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: from\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"you gotta log in as an admin to see \", from.pathname, \" son \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      setLogin(true);\n    }\n  }, \"log in\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/client/components/Login.jsx?");

/***/ })

}]);