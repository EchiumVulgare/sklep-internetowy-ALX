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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ ProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nfunction selectQuantity(props) {\n    var _this = this, _this1 = this;\n    var quantity = _toConsumableArray(Array.from({\n        length: 10\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {\n        placeholder: \"Quantity\",\n        onChange: function(event) {\n            return props.onChange(event.target.value);\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 34,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            quantity.map(function(_, index) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Option, {\n                    value: index + 1,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 14\n                    },\n                    __self: _this,\n                    children: index + 1\n                }, index);\n            }),\n            quantity.map(function(_, index) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Option, {\n                    value: index - 1,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                        lineNumber: 42,\n                        columnNumber: 14\n                    },\n                    __self: _this1,\n                    children: index + 1\n                }, index);\n            })\n        ]\n    }));\n}\nvar __N_SSG = true;\nfunction ProductPage(param) {\n    var product = param.product;\n    var addToCart = // const [items, setItems] = useContext(CartContext);\n    function addToCart() {\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), quantity = ref[0], setQuantity = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 56,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: product.images[0].url,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: product.name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.price / 100,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 62,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.description,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {\n                        my: 3,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        gridTemplateColumns: \"repeat(2,fr)\",\n                        gap: 5,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"selectQuantity\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: addToCart,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Add to cart\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(ProductPage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ProductPage;\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRzhGO0FBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMEJuQ1csY0FBYyxDQUFDQyxLQUFLLEVBQUMsQ0FBQzs7SUFDM0IsR0FBSyxDQUFDQyxRQUFRLHNCQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDQztRQUFBQSxNQUFNLEVBQUUsRUFBRTtJQUFBLENBQUM7SUFDNUMsTUFBTSx1RUFDRFYsb0RBQU07UUFBQ1csV0FBVyxFQUFDLENBQVU7UUFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsS0FBSztZQUMvQ1AsTUFBTU0sQ0FBTk4sS0FBSyxDQUFDTSxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7WUFDN0JSLFFBQVEsQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxLQUFLOzhCQUNyQixNQUFNLHdEQUFMQyxNQUFNO29CQUFhSixLQUFLLEVBQUVHLEtBQUssR0FBRyxDQUFDOzs7Ozs7OzhCQUNoQ0EsS0FBSyxHQUFHLENBQUM7bUJBREFBLEtBQUs7O1lBSWpCWCxRQUFRLENBQUNTLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsS0FBSzs4QkFDdkIsTUFBTSx3REFBTEMsTUFBTTtvQkFBYUosS0FBSyxFQUFFRyxLQUFLLEdBQUcsQ0FBQzs7Ozs7Ozs4QkFDaENBLEtBQUssR0FBRyxDQUFDO21CQURBQSxLQUFLOzs7O0FBTS9CLENBQUM7O0FBRWMsUUFBUSxDQUFDRSxXQUFXLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBWEMsT0FBTyxHQUFSLEtBQVMsQ0FBUkEsT0FBTztRQUkvQkMsU0FBUyxHQUZsQixFQUFxRDtJQUVyRCxRQUFRLENBQUNBLFNBQVMsR0FBRyxDQUFDO0lBQUEsQ0FBQzs7SUFIdkIsR0FBSyxDQUEyQm5CLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQW5DSSxRQUFRLEdBQWlCSixHQUFXLEtBQTFCb0IsV0FBVyxHQUFJcEIsR0FBVztJQUl2QyxNQUFNLHVFQUNESixrREFBSTs7Ozs7Ozs7aUZBQ0FILG1EQUFLO2dCQUFDNEIsR0FBRyxFQUFFSCxPQUFPLENBQUNJLE1BQU0sQ0FBQyxDQUFDLEVBQUVDLEdBQUc7Ozs7Ozs7O2tGQUNoQy9CLGlEQUFHOzs7Ozs7Ozt5RkFFQ0Usa0RBQUk7Ozs7Ozs7a0NBQUV3QixPQUFPLENBQUNNLElBQUk7OzBGQUNsQjlCLGtEQUFJO3dCQUFDK0IsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OzRCQUFFUCxPQUFPLENBQUNRLEtBQUssR0FBRyxHQUFHOzRCQUFDLENBQUk7OzswRkFDbkRoQyxrREFBSTt3QkFBQytCLFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozs0QkFBRVAsT0FBTyxDQUFDUyxXQUFXOzRCQUFDLENBQUk7Ozt5RkFDbkQ3QixxREFBTzt3QkFBQzhCLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzswRkFDYnJDLGtEQUFJO3dCQUFDc0MsbUJBQW1CLEVBQUMsQ0FBYzt3QkFBQ0MsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7O2lHQUMxQzVCLENBQWM7Ozs7Ozs7O2lHQUNkUCxvREFBTTtnQ0FBQ29DLE9BQU8sRUFBRVosU0FBUzs7Ozs7OzswQ0FBRSxDQUFXOzs7Ozs7OztBQUszRCxDQUFDO0dBckJtQkYsV0FBVztLQUFYQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcz83MTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmFwaHFsIGZyb20gXCIuLi8uLi9saWIvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgZ2V0QWxsUHJvZHVjdHMgZnJvbSAnLi4vLi4vbGliL2dyYXBocWwvcXVlcmllcy9nZXRBbGxQcm9kdWN0cyc7XHJcbmltcG9ydCBnZXRQcm9kdWN0QnlTbHVnIGZyb20gJy4uLy4uL2xpYi9ncmFwaHFsL3F1ZXJpZXMvZ2V0UHJvZHVjdEJ5U2x1Zyc7XHJcbmltcG9ydCB7R3JpZCwgQm94LCBJbWFnZSwgVGV4dCwgQnV0dG9uLCBGbGV4LCBTZWxlY3QsIERpdmlkZXIsIFNwYWNlcn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgZ3JhcGhxbC5yZXF1ZXN0KGdldFByb2R1Y3RCeVNsdWcsIHtzbHVnOiBwYXJhbXMuc2x1Z30pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHByb2R1Y3RzWzBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG59XHJcblxyXG4gICAgXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBncmFwaHFsLnJlcXVlc3QoZ2V0QWxsUHJvZHVjdHMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICBwYXRoczogcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcsXHJcbiAgICAgICAgfSxcclxuICAgICB9KSksXHJcbiAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RRdWFudGl0eShwcm9wcyl7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IFsuLi5BcnJheS5mcm9tKHtsZW5ndGg6IDEwfSldO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiUXVhbnRpdHlcIiBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgIHtxdWFudGl0eS5tYXAoKF8sIGluZGV4KSA9PihcclxuICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4ICsgMX0+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgIHtxdWFudGl0eS5tYXAoKF8sIGluZGV4KSA9PihcclxuICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2luZGV4IC0gMX0+XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcclxuICAgIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvLyBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQ2FydCAoKXt9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlc1swXS51cmx9Lz5cclxuICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD57cHJvZHVjdC5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0Q29sb3I9J2dyYXkuNzAwJz57cHJvZHVjdC5wcmljZSAvIDEwMH0gUExOPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHRDb2xvcj0nZ3JheS43MDAnPntwcm9kdWN0LmRlc2NyaXB0aW9ufSBQTE48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbXk9ezN9IC8+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgZ3JpZFRlbXBsYXRlQ29sdW1ucz0ncmVwZWF0KDIsZnIpJyBnYXA9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0UXVhbnRpdHkvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZFRvQ2FydH0+QWRkIHRvIGNhcnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkdyaWQiLCJCb3giLCJJbWFnZSIsIlRleHQiLCJCdXR0b24iLCJGbGV4IiwiU2VsZWN0IiwiRGl2aWRlciIsIlNwYWNlciIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInNlbGVjdFF1YW50aXR5IiwicHJvcHMiLCJxdWFudGl0eSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwibWFwIiwiXyIsImluZGV4IiwiT3B0aW9uIiwiUHJvZHVjdFBhZ2UiLCJwcm9kdWN0IiwiYWRkVG9DYXJ0Iiwic2V0UXVhbnRpdHkiLCJzcmMiLCJpbWFnZXMiLCJ1cmwiLCJuYW1lIiwidGV4dENvbG9yIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsIm15IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ })

});