"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ProductCard(props) {\n    var ref;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/products/\".concat(props.slug),\n        passHref: true,\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    src: (ref = props.images[0]) === null || ref === void 0 ? void 0 : ref.url,\n                    alt: props.name,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                    my: 3,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                                lineNumber: 13,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: props.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            textColor: \"gray.700\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                                lineNumber: 14,\n                                columnNumber: 17\n                            },\n                            __self: this,\n                            children: [\n                                props.price / 100,\n                                \" PLN\"\n                            ]\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    bg: \"tomato\",\n                    w: \"100%\",\n                    p: 4,\n                    color: \"white\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\components\\\\ProductCard.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: \"Add info.\"\n                })\n            ]\n        })\n    }));\n};\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzhCO0FBRzNDLFFBQVEsQ0FBQ0ssV0FBVyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUtwQkEsR0FBZTtJQUpuQyxNQUFNLHNFQUNETixrREFBSTtRQUFDTyxJQUFJLEVBQUcsQ0FBVSxZQUFhLE9BQVhELEtBQUssQ0FBQ0UsSUFBSTtRQUFJQyxRQUFROzs7Ozs7O3dGQUM5Q1IsaURBQUc7Ozs7Ozs7O3FGQUVDRSxtREFBSztvQkFBQ08sR0FBRyxHQUFFSixHQUFlLEdBQWZBLEtBQUssQ0FBQ0ssTUFBTSxDQUFDLENBQUMsZUFBZEwsR0FBZSxLQUFmQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxHQUFlLENBQUVNLEdBQUc7b0JBQUVDLEdBQUcsRUFBRVAsS0FBSyxDQUFDUSxJQUFJOzs7Ozs7OztxRkFDaERWLHFEQUFPO29CQUFDVyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7c0ZBQ2JkLGlEQUFHOzs7Ozs7Ozs2RkFDQ0Msa0RBQUk7Ozs7Ozs7c0NBQUVJLEtBQUssQ0FBQ1EsSUFBSTs7OEZBQ2hCWixrREFBSTs0QkFBQ2MsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7O2dDQUFFVixLQUFLLENBQUNXLEtBQUssR0FBQyxHQUFHO2dDQUFDLENBQUk7Ozs7O3FGQUVuRGhCLGlEQUFHO29CQUFDaUIsRUFBRSxFQUFDLENBQVE7b0JBQUNDLENBQUMsRUFBQyxDQUFNO29CQUFDQyxDQUFDLEVBQUUsQ0FBQztvQkFBRUMsS0FBSyxFQUFDLENBQU87Ozs7Ozs7OEJBQUMsQ0FFOUM7Ozs7O0FBTVosQ0FBQztLQW5CdUJoQixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanM/YzlhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0JveCwgVGV4dCwgSW1hZ2UsIERpdmlkZXJ9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb3BzLnNsdWd9YH0gcGFzc0hyZWY+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvcHMuaW1hZ2VzWzBdPy51cmx9IGFsdD17cHJvcHMubmFtZX0gLz5cclxuICAgICAgICAgICAgPERpdmlkZXIgbXk9ezN9Lz5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntwcm9wcy5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRDb2xvcj0nZ3JheS43MDAnPntwcm9wcy5wcmljZS8xMDB9IFBMTjwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggYmc9J3RvbWF0bycgdz0nMTAwJScgcD17NH0gY29sb3I9J3doaXRlJz5cclxuICAgICAgICAgICAgICAgIEFkZCBpbmZvLlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiTGluayIsIkJveCIsIlRleHQiLCJJbWFnZSIsIkRpdmlkZXIiLCJQcm9kdWN0Q2FyZCIsInByb3BzIiwiaHJlZiIsInNsdWciLCJwYXNzSHJlZiIsInNyYyIsImltYWdlcyIsInVybCIsImFsdCIsIm5hbWUiLCJteSIsInRleHRDb2xvciIsInByaWNlIiwiYmciLCJ3IiwicCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n");

/***/ })

});