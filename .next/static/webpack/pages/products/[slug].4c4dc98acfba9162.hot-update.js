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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nfunction selectQuantity(props) {\n    var quantity = _toConsumableArray(Array.from({\n        length: 10\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n        placeholder: \"Quantity\",\n        onChange: function(event) {\n            return props.onChange(event.target.value);\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 34,\n            columnNumber: 9\n        },\n        __self: this,\n        children: quantity\n    }));\n}\nvar __N_SSG = true;\nfunction ProductPage(param) {\n    var product = param.product;\n    var addToCart = // const [items, setItems] = useContext(CartContext);\n    function addToCart() {\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), quantity = ref[0], setQuantity = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 47,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: product.images[0].url,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: product.name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.price / 100,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.description,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                        my: 3,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        gridTemplateColumns: \"repeat(2,fr)\",\n                        gap: 5,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                                placeholder: \"Select quantity\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: addToCart,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Add to cart\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(ProductPage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ProductPage;\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRzhGO0FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMEJuQ1csY0FBYyxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUMzQixHQUFLLENBQUNDLFFBQVEsc0JBQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUNDO1FBQUFBLE1BQU0sRUFBRSxFQUFFO0lBQUEsQ0FBQztJQUM1QyxNQUFNLHNFQUNEVixvREFBTTtRQUFDVyxXQUFXLEVBQUMsQ0FBVTtRQUFDQyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxLQUFLO1lBQy9DUCxNQUFNTSxDQUFOTixLQUFLLENBQUNNLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7O2tCQUM3QlIsUUFBUTs7QUFHcEIsQ0FBQzs7QUFFYyxRQUFRLENBQUNTLFdBQVcsQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFYQyxPQUFPLEdBQVIsS0FBUyxDQUFSQSxPQUFPO1FBSS9CQyxTQUFTLEdBRmxCLEVBQXFEO0lBRXJELFFBQVEsQ0FBQ0EsU0FBUyxHQUFHLENBQUM7SUFBQSxDQUFDOztJQUh2QixHQUFLLENBQTJCZixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUFuQ0ksUUFBUSxHQUFpQkosR0FBVyxLQUExQmdCLFdBQVcsR0FBSWhCLEdBQVc7SUFJdkMsTUFBTSx1RUFDREosa0RBQUk7Ozs7Ozs7O2lGQUNBSCxtREFBSztnQkFBQ3dCLEdBQUcsRUFBRUgsT0FBTyxDQUFDSSxNQUFNLENBQUMsQ0FBQyxFQUFFQyxHQUFHOzs7Ozs7OztrRkFDaEMzQixpREFBRzs7Ozs7Ozs7eUZBRUNFLGtEQUFJOzs7Ozs7O2tDQUFFb0IsT0FBTyxDQUFDTSxJQUFJOzswRkFDbEIxQixrREFBSTt3QkFBQzJCLFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs0QkFBRVAsT0FBTyxDQUFDUSxLQUFLLEdBQUcsR0FBRzs0QkFBQyxDQUFJOzs7MEZBQ25ENUIsa0RBQUk7d0JBQUMyQixTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7NEJBQUVQLE9BQU8sQ0FBQ1MsV0FBVzs0QkFBQyxDQUFJOzs7eUZBQ25EekIscURBQU87d0JBQUMwQixFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs7MEZBQ2JqQyxrREFBSTt3QkFBQ2tDLG1CQUFtQixFQUFDLENBQWM7d0JBQUNDLEdBQUcsRUFBRSxDQUFDOzs7Ozs7OztpR0FDMUM3QixvREFBTTtnQ0FBQ1csV0FBVyxFQUFDLENBQWlCOzs7Ozs7OztpR0FDcENiLG9EQUFNO2dDQUFDZ0MsT0FBTyxFQUFFWixTQUFTOzs7Ozs7OzBDQUFFLENBQVc7Ozs7Ozs7O0FBSzNELENBQUM7R0FyQm1CRixXQUFXO0tBQVhBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzPzcxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyYXBocWwgZnJvbSBcIi4uLy4uL2xpYi9ncmFwaHFsXCI7XHJcbmltcG9ydCBnZXRBbGxQcm9kdWN0cyBmcm9tICcuLi8uLi9saWIvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFByb2R1Y3RzJztcclxuaW1wb3J0IGdldFByb2R1Y3RCeVNsdWcgZnJvbSAnLi4vLi4vbGliL2dyYXBocWwvcXVlcmllcy9nZXRQcm9kdWN0QnlTbHVnJztcclxuaW1wb3J0IHtHcmlkLCBCb3gsIEltYWdlLCBUZXh0LCBCdXR0b24sIEZsZXgsIFNlbGVjdCwgRGl2aWRlciwgU3BhY2VyfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBncmFwaHFsLnJlcXVlc3QoZ2V0UHJvZHVjdEJ5U2x1Zywge3NsdWc6IHBhcmFtcy5zbHVnfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbMF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbn1cclxuXHJcbiAgICBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGdyYXBocWwucmVxdWVzdChnZXRBbGxQcm9kdWN0cyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgIHBhdGhzOiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgIH0pKSxcclxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFF1YW50aXR5KHByb3BzKXtcclxuICAgIGNvbnN0IHF1YW50aXR5ID0gWy4uLkFycmF5LmZyb20oe2xlbmd0aDogMTB9KV07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAge3F1YW50aXR5fVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcclxuICAgIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvLyBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQ2FydCAoKXt9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlc1swXS51cmx9Lz5cclxuICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD57cHJvZHVjdC5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0Q29sb3I9J2dyYXkuNzAwJz57cHJvZHVjdC5wcmljZSAvIDEwMH0gUExOPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHRDb2xvcj0nZ3JheS43MDAnPntwcm9kdWN0LmRlc2NyaXB0aW9ufSBQTE48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbXk9ezN9IC8+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgZ3JpZFRlbXBsYXRlQ29sdW1ucz0ncmVwZWF0KDIsZnIpJyBnYXA9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWN0IHF1YW50aXR5XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZFRvQ2FydH0+QWRkIHRvIGNhcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkdyaWQiLCJCb3giLCJJbWFnZSIsIlRleHQiLCJCdXR0b24iLCJGbGV4IiwiU2VsZWN0IiwiRGl2aWRlciIsIlNwYWNlciIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInNlbGVjdFF1YW50aXR5IiwicHJvcHMiLCJxdWFudGl0eSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiUHJvZHVjdFBhZ2UiLCJwcm9kdWN0IiwiYWRkVG9DYXJ0Iiwic2V0UXVhbnRpdHkiLCJzcmMiLCJpbWFnZXMiLCJ1cmwiLCJuYW1lIiwidGV4dENvbG9yIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsIm15IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ })

});