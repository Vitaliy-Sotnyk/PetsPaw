/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_core_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/core.scss */ \"./css/core.scss\");\n/* harmony import */ var _style_mode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style_mode.js */ \"./js/style_mode.js\");\n/* harmony import */ var _style_mode_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_mode_js__WEBPACK_IMPORTED_MODULE_1__);\n// Your code goes here\r\n\r\n\r\n\n\n//# sourceURL=webpack://dog_sotial_message/./js/index.js?");

/***/ }),

/***/ "./js/style_mode.js":
/*!**************************!*\
  !*** ./js/style_mode.js ***!
  \**************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://dog_sotial_message/./js/style_mode.js?");

/***/ }),

/***/ "./css/core.scss":
/*!***********************!*\
  !*** ./css/core.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dog_sotial_message/./css/core.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;

const changeColor = document.getElementById('change-style');
const typeCheck = document.querySelector('.type-check');

function getChangeColor(){
  let colorStyle = window.matchMedia('(prefers-color-scheme: dark)')
  .matches ? 'dark' : 'light';
  localStorage.getItem('colorStyleOfPetsPaw') ? colorStyle = 
  localStorage.getItem('colorStyleOfPetsPaw') : null;
  return colorStyle;
}

function loadColor(colorStyle){
  const root = document.querySelector(':root');
  if(colorStyle === 'dark'){
    typeCheck.innerHTML = `<svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31286 5.64284C7.59467 8.17819 11.0777 10.647 16.0381 10.647C20.9984 10.647 24.4815 8.17819 26.7633 5.64284C27.9049 4.37433 28.7323 3.10218 29.2735 2.1471C29.5435 1.67063 29.7406 1.27603 29.8687 1.00433C29.9327 0.86856 29.9793 0.763743 30.0091 0.695034C30.024 0.660687 30.0347 0.635391 30.0412 0.61979L30.0478 0.603752L30.0485 0.602048C30.0483 0.602386 30.0482 0.602765 31.0433 1.00082C32.0385 1.39888 32.0383 1.39935 32.0381 1.39985L32.0376 1.40105L32.0363 1.40421L32.0326 1.41343L32.0202 1.44335C32.0099 1.46831 31.9951 1.5032 31.976 1.54735C31.9377 1.63565 31.8818 1.7611 31.8076 1.9184C31.6594 2.23285 31.4379 2.67559 31.1385 3.20393C30.5409 4.25848 29.6265 5.66584 28.3566 7.07684C27.9646 7.51241 27.5374 7.94957 27.0741 8.37745L30.7294 12.0328L29.2136 13.5485L25.4091 9.74398C23.2487 11.3094 20.5022 12.54 17.1099 12.7567L17.1099 17.0779L14.9663 17.0779L14.9663 12.7567C11.5739 12.54 8.82744 11.3094 6.66706 9.744L2.86253 13.5485L1.34678 12.0328L5.00208 8.37747C4.53875 7.94958 4.11155 7.51241 3.71953 7.07683C2.44963 5.66584 1.53527 4.25847 0.937699 3.20393C0.638308 2.67559 0.416762 2.23284 0.268526 1.9184C0.194368 1.76109 0.138436 1.63564 0.100175 1.54735C0.0810419 1.50319 0.0663165 1.4683 0.0559308 1.44335L0.0435939 1.41343L0.0398475 1.4042L0.0385768 1.40105L0.0380916 1.39984C0.0378908 1.39934 0.0377066 1.39888 1.03285 1.00082C2.028 0.60277 2.02784 0.602391 2.02771 0.602053L2.02752 0.601579L2.02841 0.603758L2.03502 0.619795C2.04151 0.635396 2.05217 0.660693 2.06705 0.695039C2.09683 0.763748 2.14347 0.868565 2.20747 1.00433C2.33556 1.27603 2.53268 1.67063 2.80269 2.14711C3.3439 3.10219 4.1712 4.37433 5.31286 5.64284ZM2.02743 0.601352C2.02739 0.601268 2.02742 0.601343 2.02752 0.601579Z" fill="#FF868E"/>
    </svg>`;
  } else {
    typeCheck.innerHTML = `<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.23402 11.8666C2.23456 11.8678 2.23511 11.869 2.23566 11.8701C2.36313 12.1405 2.55931 12.5332 2.82802 13.0074C3.36664 13.9579 4.18998 15.224 5.32617 16.4864C7.59704 19.0096 11.0634 21.4666 16 21.4666C20.9365 21.4666 24.4029 19.0096 26.6738 16.4864C27.81 15.224 28.6334 13.9579 29.172 13.0074C29.4407 12.5332 29.6369 12.1405 29.7643 11.8701C29.7649 11.869 29.7654 11.8678 29.766 11.8666C29.7654 11.8655 29.7649 11.8643 29.7643 11.8631C29.6369 11.5928 29.4407 11.2 29.172 10.7258C28.6334 9.77534 27.81 8.50929 26.6738 7.24686C24.4029 4.72366 20.9365 2.26663 16 2.26663C11.0634 2.26663 7.59704 4.72366 5.32617 7.24686C4.18998 8.50929 3.36664 9.77534 2.82802 10.7258C2.55931 11.2 2.36313 11.5927 2.23566 11.8631C2.23511 11.8643 2.23456 11.8655 2.23402 11.8666ZM30.9333 11.8666C31.9237 11.4705 31.9235 11.47 31.9233 11.4695L31.9228 11.4683L31.9216 11.4652L31.9179 11.456L31.9056 11.4262C31.8952 11.4014 31.8806 11.3667 31.8615 11.3227C31.8235 11.2349 31.7678 11.11 31.694 10.9534C31.5465 10.6405 31.326 10.1999 31.028 9.67408C30.4333 8.62459 29.5233 7.22397 28.2595 5.81974C25.7304 3.00961 21.7301 0.133301 16 0.133301C10.2699 0.133301 6.26958 3.00961 3.74047 5.81974C2.47666 7.22397 1.56668 8.62459 0.97197 9.67409C0.674014 10.1999 0.453529 10.6405 0.306003 10.9535C0.232201 11.11 0.176537 11.2349 0.13846 11.3227C0.119418 11.3667 0.104763 11.4014 0.0944274 11.4262L0.0821496 11.456L0.0784212 11.4652L0.0771565 11.4683L0.0766737 11.4695C0.0764739 11.47 0.0762905 11.4705 1.06667 11.8666L0.0762905 11.4705C-0.0254302 11.7248 -0.0254302 12.0085 0.0762905 12.2628L1.06667 11.8666C0.0762905 12.2628 0.0764739 12.2632 0.0766737 12.2637L0.0771565 12.2649L0.0784212 12.2681L0.0821496 12.2773L0.0944274 12.307C0.104763 12.3319 0.119418 12.3666 0.13846 12.4105C0.176537 12.4984 0.232201 12.6233 0.306003 12.7798C0.453529 13.0927 0.674014 13.5334 0.97197 14.0592C1.56668 15.1087 2.47666 16.5093 3.74047 17.9135C6.26958 20.7237 10.2699 23.6 16 23.6C21.7301 23.6 25.7304 20.7237 28.2595 17.9135C29.5233 16.5093 30.4333 15.1087 31.028 14.0592C31.326 13.5334 31.5465 13.0927 31.694 12.7798C31.7678 12.6233 31.8235 12.4984 31.8615 12.4105C31.8806 12.3666 31.8952 12.3319 31.9056 12.307L31.9179 12.2773L31.9216 12.2681L31.9228 12.2649L31.9233 12.2637C31.9235 12.2632 31.9237 12.2628 30.9333 11.8666ZM30.9333 11.8666L31.9237 12.2628C32.0254 12.0085 32.0254 11.7248 31.9237 11.4705L30.9333 11.8666ZM10.6667 11.8666C10.6667 8.92111 13.0545 6.5333 16 6.5333C18.9455 6.5333 21.3333 8.92111 21.3333 11.8666C21.3333 14.8122 18.9455 17.2 16 17.2C13.0545 17.2 10.6667 14.8122 10.6667 11.8666ZM16 8.66663C14.2327 8.66663 12.8 10.0993 12.8 11.8666C12.8 13.6339 14.2327 15.0666 16 15.0666C17.7673 15.0666 19.2 13.6339 19.2 11.8666C19.2 10.0993 17.7673 8.66663 16 8.66663Z" fill="#FF868E"/>
    </svg>`;
  }
  root.setAttribute('color-scheme', `${colorStyle}`);
}


changeColor.addEventListener('change', function() {
  let colorStatus = getChangeColor();
  if(colorStatus === 'dark'){
    colorStatus = 'light';
  } else {
    colorStatus = 'dark';
  }
  localStorage.setItem('colorStyleOfPetsPaw', `${colorStatus}`)
  loadColor(colorStatus);
});

window.addEventListener('DOMContentLoaded', () =>{
  loadColor(getChangeColor());  
})