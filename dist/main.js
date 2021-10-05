/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.string.trim.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'core-js/modules/es.array.concat.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n/*import _ from 'lodash';\r\nfunction component() {\r\n    const element = document.createElement('div');\r\n  \r\n    // Lodash, currently included via a script, is required for this line to work\r\n    element.innerHTML = _.join(['Hello', 'webpack'], ' ');\r\n  \r\n    return element;\r\n  }\r\n  \r\n  document.body.appendChild(component());\r\n\r\n\r\n  import {suma, saludo} from './operaciones';\r\n  import Swal from 'sweetalert2'\r\n  document.write(`<h1>${suma(1,2)}</h1>`)\r\n  console.log(suma(1,2));\r\n  console.log(saludo);*/\nSwal.fire({\n  title: 'Hugo Bruno',\n  html: \"<input type=\\\"text\\\" id=\\\"login\\\" class=\\\"swal2-input\\\" placeholder=\\\"Username\\\">\\n    <input type=\\\"password\\\" id=\\\"password\\\" class=\\\"swal2-input\\\" placeholder=\\\"Password\\\">\",\n  confirmButtonText: 'Sign in',\n  focusConfirm: false,\n  preConfirm: function preConfirm() {\n    var login = Swal.getPopup().querySelector('#login').value;\n    var password = Swal.getPopup().querySelector('#password').value;\n\n    if (!login || !password) {\n      Swal.showValidationMessage(\"Hola Carlos\");\n    }\n\n    return {\n      login: login,\n      password: password\n    };\n  }\n}).then(function (result) {\n  Swal.fire(\"\\n      Login: \".concat(result.value.login, \"\\n      Password: \").concat(result.value.password, \"\\n    \").trim());\n});\n/*import 'fslightbox';\r\nfsLightboxInstances['first-lightbox'].open(0);\r\nfsLightboxInstances['second-lightbox'].props.onOpen = () => console.log('Lightbox open!');*/\n\n//# sourceURL=webpack://webpack-babel/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;