"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[slug]",{

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nfunction selectQuantity(props) {\n    var quantity = _toConsumableArray(Array.from({\n        length: 10\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n        placeholder: \"Quantity\",\n        onChange: function(event) {\n            return props.onChange(event.target.value);\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 34,\n            columnNumber: 9\n        },\n        __self: this,\n        children: quantity.map(_)\n    }));\n}\nvar __N_SSG = true;\nfunction ProductPage(param) {\n    var product = param.product;\n    var addToCart = // const [items, setItems] = useContext(CartContext);\n    function addToCart() {\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), quantity = ref[0], setQuantity = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 47,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: product.images[0].url,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: product.name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.price / 100,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.description,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                        my: 3,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        gridTemplateColumns: \"repeat(2,fr)\",\n                        gap: 5,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                placeholder: \"Select quantity\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: addToCart,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Add to cart\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(ProductPage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ProductPage;\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRzhGO0FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMEJuQ1csY0FBYyxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUMzQixHQUFLLENBQUNDLFFBQVEsc0JBQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNDO1FBQUFBLE1BQU0sRUFBRSxFQUFFO0lBQUEsQ0FBQztJQUM1QyxNQUFNLHNFQUNEVixvREFBTTtRQUFDVyxXQUFXLEVBQUMsQ0FBVTtRQUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLO1lBQy9DUCxNQUFNTSxDQUFOTixLQUFLLENBQUNNLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7O2tCQUM3QlIsUUFBUSxDQUFDUyxHQUFHLENBQUVDLENBQUM7O0FBRzNCLENBQUM7O0FBRWMsUUFBUSxDQUFDQyxXQUFXLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBWEMsT0FBTyxHQUFSLEtBQVMsQ0FBUkEsT0FBTztRQUkvQkMsU0FBUyxHQUZsQixFQUFxRDtJQUVyRCxRQUFRLENBQUNBLFNBQVMsR0FBRyxDQUFDO0lBQUEsQ0FBQzs7SUFIdkIsR0FBSyxDQUEyQmpCLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQW5DSSxRQUFRLEdBQWlCSixHQUFXLEtBQTFCa0IsV0FBVyxHQUFJbEIsR0FBVztJQUl2QyxNQUFNLHVFQUNESixrREFBSTs7Ozs7Ozs7aUZBQ0FILG1EQUFLO2dCQUFDMEIsR0FBRyxFQUFFSCxPQUFPLENBQUNJLE1BQU0sQ0FBQyxDQUFDLEVBQUVDLEdBQUc7Ozs7Ozs7O2tGQUNoQzdCLGlEQUFHOzs7Ozs7Ozt5RkFFQ0Usa0RBQUk7Ozs7Ozs7a0NBQUVzQixPQUFPLENBQUNNLElBQUk7OzBGQUNsQjVCLGtEQUFJO3dCQUFDNkIsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OzRCQUFFUCxPQUFPLENBQUNRLEtBQUssR0FBRyxHQUFHOzRCQUFDLENBQUk7OzswRkFDbkQ5QixrREFBSTt3QkFBQzZCLFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs0QkFBRVAsT0FBTyxDQUFDUyxXQUFXOzRCQUFDLENBQUk7Ozt5RkFDbkQzQixxREFBTzt3QkFBQzRCLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzswRkFDYm5DLGtEQUFJO3dCQUFDb0MsbUJBQW1CLEVBQUMsQ0FBYzt3QkFBQ0MsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7O2lHQUMxQy9CLG9EQUFNO2dDQUFDVyxXQUFXLEVBQUMsQ0FBaUI7Ozs7Ozs7O2lHQUNwQ2Isb0RBQU07Z0NBQUNrQyxPQUFPLEVBQUVaLFNBQVM7Ozs7Ozs7MENBQUUsQ0FBVzs7Ozs7Ozs7QUFLM0QsQ0FBQztHQXJCbUJGLFdBQVc7S0FBWEEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanM/NzEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhcGhxbCBmcm9tIFwiLi4vLi4vbGliL2dyYXBocWxcIjtcclxuaW1wb3J0IGdldEFsbFByb2R1Y3RzIGZyb20gJy4uLy4uL2xpYi9ncmFwaHFsL3F1ZXJpZXMvZ2V0QWxsUHJvZHVjdHMnO1xyXG5pbXBvcnQgZ2V0UHJvZHVjdEJ5U2x1ZyBmcm9tICcuLi8uLi9saWIvZ3JhcGhxbC9xdWVyaWVzL2dldFByb2R1Y3RCeVNsdWcnO1xyXG5pbXBvcnQge0dyaWQsIEJveCwgSW1hZ2UsIFRleHQsIEJ1dHRvbiwgRmxleCwgU2VsZWN0LCBEaXZpZGVyLCBTcGFjZXJ9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGdyYXBocWwucmVxdWVzdChnZXRQcm9kdWN0QnlTbHVnLCB7c2x1ZzogcGFyYW1zLnNsdWd9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0c1swXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxufVxyXG5cclxuICAgIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgZ3JhcGhxbC5yZXF1ZXN0KGdldEFsbFByb2R1Y3RzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgcGF0aHM6IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgfSkpLFxyXG4gICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0UXVhbnRpdHkocHJvcHMpe1xyXG4gICAgY29uc3QgcXVhbnRpdHkgPSBbLi4uQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMH0pXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlF1YW50aXR5XCIgb25DaGFuZ2U9eyhldmVudCkgPT5cclxuICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfT5cclxuICAgICAgICAgICB7cXVhbnRpdHkubWFwKChfKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RQYWdlKHtwcm9kdWN0fSkge1xyXG4gICAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIC8vIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0ICgpe31cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnVybH0vPlxyXG4gICAgICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Pntwcm9kdWN0Lm5hbWV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHRDb2xvcj0nZ3JheS43MDAnPntwcm9kdWN0LnByaWNlIC8gMTAwfSBQTE48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dENvbG9yPSdncmF5LjcwMCc+e3Byb2R1Y3QuZGVzY3JpcHRpb259IFBMTjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBteT17M30gLz4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBncmlkVGVtcGxhdGVDb2x1bW5zPSdyZXBlYXQoMixmciknIGdhcD17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlY3QgcXVhbnRpdHlcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YWRkVG9DYXJ0fT5BZGQgdG8gY2FydDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiR3JpZCIsIkJveCIsIkltYWdlIiwiVGV4dCIsIkJ1dHRvbiIsIkZsZXgiLCJTZWxlY3QiLCJEaXZpZGVyIiwiU3BhY2VyIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0Iiwic2VsZWN0UXVhbnRpdHkiLCJwcm9wcyIsInF1YW50aXR5IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJfIiwiUHJvZHVjdFBhZ2UiLCJwcm9kdWN0IiwiYWRkVG9DYXJ0Iiwic2V0UXVhbnRpdHkiLCJzcmMiLCJpbWFnZXMiLCJ1cmwiLCJuYW1lIiwidGV4dENvbG9yIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsIm15IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ })

});