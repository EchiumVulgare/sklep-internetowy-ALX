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
exports.id = "pages/products/[slug]";
exports.ids = ["pages/products/[slug]"];
exports.modules = {

/***/ "./lib/graphql/index.js":
/*!******************************!*\
  !*** ./lib/graphql/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GRAPHCMS_ENDPOINT = process.env.GRAPHCMS_ENDPOINT;\nconst GRAPHCMS_API_KEY = process.env.GRAPHCMS_API_KEY;\nconst autorization = `Bearer ${GRAPHCMS_API_KEY}`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(GRAPHCMS_ENDPOINT, {\n    headers: {\n        ...GRAPHCMS_API_KEY && {\n            autorization\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3JhcGhxbC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFFL0MsS0FBSyxDQUFDQyxpQkFBaUIsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGlCQUFpQjtBQUN2RCxLQUFLLENBQUNHLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0FBRXJELEtBQUssQ0FBQ0MsWUFBWSxJQUFJLE9BQU8sRUFBRUQsZ0JBQWdCO0FBRS9DLGlFQUFlLEdBQUcsQ0FBQ0osMERBQWEsQ0FBQ0MsaUJBQWlCLEVBQUUsQ0FBQztJQUNqREssT0FBTyxFQUFFLENBQUM7V0FDRkYsZ0JBQWdCLElBQUksQ0FBQ0M7WUFBQUEsWUFBWTtRQUFBLENBQUM7SUFDMUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1jdXN0b20tYXV0aC8uL2xpYi9ncmFwaHFsL2luZGV4LmpzPzkzYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTENsaWVudCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcclxuXHJcbmNvbnN0IEdSQVBIQ01TX0VORFBPSU5UID0gcHJvY2Vzcy5lbnYuR1JBUEhDTVNfRU5EUE9JTlQ7XHJcbmNvbnN0IEdSQVBIQ01TX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5HUkFQSENNU19BUElfS0VZO1xyXG5cclxuY29uc3QgYXV0b3JpemF0aW9uID0gYEJlYXJlciAke0dSQVBIQ01TX0FQSV9LRVl9YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBHcmFwaFFMQ2xpZW50KEdSQVBIQ01TX0VORFBPSU5ULCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uKEdSQVBIQ01TX0FQSV9LRVkgJiYge2F1dG9yaXphdGlvbn0pLFxyXG4gICAgfSxcclxufSk7Il0sIm5hbWVzIjpbIkdyYXBoUUxDbGllbnQiLCJHUkFQSENNU19FTkRQT0lOVCIsInByb2Nlc3MiLCJlbnYiLCJHUkFQSENNU19BUElfS0VZIiwiYXV0b3JpemF0aW9uIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/graphql/index.js\n");

/***/ }),

/***/ "./lib/graphql/queries/getAllProducts.js":
/*!***********************************************!*\
  !*** ./lib/graphql/queries/getAllProducts.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery GetAllProducts {\n    products {\n      id\n      name\n      slug\n      price\n      images {\n        id\n        url\n      }\n    }\n  }\n  `);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFByb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyxpRUFBZUEsZ0RBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtY3VzdG9tLWF1dGgvLi9saWIvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFByb2R1Y3RzLmpzPzhjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncWxgXHJcbnF1ZXJ5IEdldEFsbFByb2R1Y3RzIHtcclxuICAgIHByb2R1Y3RzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBzbHVnXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGltYWdlcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICB1cmxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBgOyJdLCJuYW1lcyI6WyJncWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/graphql/queries/getAllProducts.js\n");

/***/ }),

/***/ "./lib/graphql/queries/getProductBySlug.js":
/*!*************************************************!*\
  !*** ./lib/graphql/queries/getProductBySlug.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\nquery getProductBySlug($slug:String!){\n    products(where: {slug: $slug}) {\n        id\n        images(first: 1) {\n            id\n            url\n        }\n        name\n        price\n        slug\n        description\n    }\n}\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3JhcGhxbC9xdWVyaWVzL2dldFByb2R1Y3RCeVNsdWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLGlFQUFlQSxnREFBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1jdXN0b20tYXV0aC8uL2xpYi9ncmFwaHFsL3F1ZXJpZXMvZ2V0UHJvZHVjdEJ5U2x1Zy5qcz8wMmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ3FsYFxyXG5xdWVyeSBnZXRQcm9kdWN0QnlTbHVnKCRzbHVnOlN0cmluZyEpe1xyXG4gICAgcHJvZHVjdHMod2hlcmU6IHtzbHVnOiAkc2x1Z30pIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbn1cclxuYFxyXG4iXSwibmFtZXMiOlsiZ3FsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/graphql/queries/getProductBySlug.js\n");

/***/ }),

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/graphql */ \"./lib/graphql/index.js\");\n/* harmony import */ var _lib_graphql_queries_getAllProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/graphql/queries/getAllProducts */ \"./lib/graphql/queries/getAllProducts.js\");\n/* harmony import */ var _lib_graphql_queries_getProductBySlug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/graphql/queries/getProductBySlug */ \"./lib/graphql/queries/getProductBySlug.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function getStaticProps({ params  }) {\n    const { products  } = await _lib_graphql__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(_lib_graphql_queries_getProductBySlug__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        slug: params.slug\n    });\n    return {\n        props: {\n            product: products[0]\n        }\n    };\n}\nasync function getStaticPaths() {\n    const { products  } = await _lib_graphql__WEBPACK_IMPORTED_MODULE_1__[\"default\"].request(_lib_graphql_queries_getAllProducts__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return {\n        paths: products.map((product)=>({\n                params: {\n                    slug: product.slug\n                }\n            })\n        ),\n        fallback: false\n    };\n}\n;\nfunction SelectQuantity(props) {\n    const quantity = [\n        ...Array.from({\n            length: 10\n        })\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Select, {\n        placeholder: \"Quantity\",\n        onChange: (event)=>props.onChange(event.target.value)\n        ,\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 34,\n            columnNumber: 9\n        },\n        __self: this,\n        children: quantity.map((_, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"option\", {\n                value: index + 1,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 37,\n                    columnNumber: 14\n                },\n                __self: this,\n                children: index + 1\n            }, index)\n        )\n    }));\n}\nfunction ProductPage({ product  }) {\n    const { 0: quantity1 , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    // const [items, setItems] = useContext(CartContext);\n    function addToCart() {\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n            lineNumber: 52,\n            columnNumber: 13\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                src: product.images[0].url,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: product.name\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.price / 100,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        textColor: \"gray.700\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            product.description,\n                            \" PLN\"\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Divider, {\n                        my: 3,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        gridTemplateColumns: \"repeat(2,fr)\",\n                        gap: 5,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectQuantity, {\n                                onChange: (quantity)=>setQuantity(parseInt(quantity))\n                                ,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                onClick: addToCart,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\kurs\\\\Desktop\\\\last day\\\\pages\\\\products\\\\[slug].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                },\n                                __self: this,\n                                children: \"Add to cart\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDekIsUUFBUTs7Ozs7Ozs7O2lHQUNwRW5CLG9EQUFNO2dDQUFDNkMsT0FBTyxFQUFFWixTQUFTOzs7Ozs7OzBDQUFFLENBQVc7Ozs7Ozs7O0FBSzNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWN1c3RvbS1hdXRoLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzPzcxMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyYXBocWwgZnJvbSBcIi4uLy4uL2xpYi9ncmFwaHFsXCI7XHJcbmltcG9ydCBnZXRBbGxQcm9kdWN0cyBmcm9tICcuLi8uLi9saWIvZ3JhcGhxbC9xdWVyaWVzL2dldEFsbFByb2R1Y3RzJztcclxuaW1wb3J0IGdldFByb2R1Y3RCeVNsdWcgZnJvbSAnLi4vLi4vbGliL2dyYXBocWwvcXVlcmllcy9nZXRQcm9kdWN0QnlTbHVnJztcclxuaW1wb3J0IHtHcmlkLCBCb3gsIEltYWdlLCBUZXh0LCBCdXR0b24sIEZsZXgsIFNlbGVjdCwgRGl2aWRlciwgU3BhY2VyfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSBhd2FpdCBncmFwaHFsLnJlcXVlc3QoZ2V0UHJvZHVjdEJ5U2x1Zywge3NsdWc6IHBhcmFtcy5zbHVnfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdHNbMF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbn1cclxuXHJcbiAgICBcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IGF3YWl0IGdyYXBocWwucmVxdWVzdChnZXRBbGxQcm9kdWN0cyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgIHBhdGhzOiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHNsdWc6IHByb2R1Y3Quc2x1ZyxcclxuICAgICAgICB9LFxyXG4gICAgIH0pKSxcclxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNlbGVjdFF1YW50aXR5KHByb3BzKXtcclxuICAgIGNvbnN0IHF1YW50aXR5ID0gWy4uLkFycmF5LmZyb20oe2xlbmd0aDogMTB9KV07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcbiAgICAgICAgcHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAge3F1YW50aXR5Lm1hcCgoXywgaW5kZXgpID0+KFxyXG4gICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXggKyAxfT5cclxuICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICkpfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcclxuICAgIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgICAvLyBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvQ2FydCAoKXt9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlc1swXS51cmx9Lz5cclxuICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dD57cHJvZHVjdC5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0Q29sb3I9J2dyYXkuNzAwJz57cHJvZHVjdC5wcmljZSAvIDEwMH0gUExOPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHRDb2xvcj0nZ3JheS43MDAnPntwcm9kdWN0LmRlc2NyaXB0aW9ufSBQTE48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbXk9ezN9IC8+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgZ3JpZFRlbXBsYXRlQ29sdW1ucz0ncmVwZWF0KDIsZnIpJyBnYXA9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0UXVhbnRpdHkgb25DaGFuZ2U9eyhxdWFudGl0eSkgPT4gc2V0UXVhbnRpdHkocGFyc2VJbnQocXVhbnRpdHkpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXthZGRUb0NhcnR9PkFkZCB0byBjYXJ0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJncmFwaHFsIiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRQcm9kdWN0QnlTbHVnIiwiR3JpZCIsIkJveCIsIkltYWdlIiwiVGV4dCIsIkJ1dHRvbiIsIkZsZXgiLCJTZWxlY3QiLCJEaXZpZGVyIiwiU3BhY2VyIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9kdWN0cyIsInJlcXVlc3QiLCJzbHVnIiwicHJvcHMiLCJwcm9kdWN0IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIiwiU2VsZWN0UXVhbnRpdHkiLCJxdWFudGl0eSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiXyIsImluZGV4Iiwib3B0aW9uIiwiUHJvZHVjdFBhZ2UiLCJzZXRRdWFudGl0eSIsImFkZFRvQ2FydCIsInNyYyIsImltYWdlcyIsInVybCIsIm5hbWUiLCJ0ZXh0Q29sb3IiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwibXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwicGFyc2VJbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[slug].js"));
module.exports = __webpack_exports__;

})();