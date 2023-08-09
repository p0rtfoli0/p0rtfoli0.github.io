/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordeon.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordeon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordeon(topSection, bottomSection, button, activeClassTop) {
  document.querySelectorAll(button).forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest(topSection).classList.contains(activeClassTop)) {
        e.target.closest(topSection).classList.remove(activeClassTop);
        e.target.closest(topSection).nextSibling.style.maxHeight = '0px';
      } else {
        document.querySelectorAll(topSection).forEach(item => {
          item.classList.remove(activeClassTop);
        });
        document.querySelectorAll(bottomSection).forEach(item => {
          item.style.maxHeight = '0px';
        });
        const height = e.target.closest(topSection).nextSibling.children[0].clientHeight;
        e.target.closest(topSection).classList.add(activeClassTop);
        e.target.closest(topSection).nextSibling.style.maxHeight = `${height}px`;
      }
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menu(menuContainer, itemMenu, hamburgerElement, menuClassActive, hamburgerClassActive) {
  const menu = document.querySelector(menuContainer),
    menuItem = document.querySelectorAll(itemMenu),
    hamburger = document.querySelector(hamburgerElement);
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle(hamburgerClassActive);
    menu.classList.toggle(menuClassActive);
  });
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle(hamburgerClassActive);
      menu.classList.toggle(menuClassActive);
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider(_ref) {
  let {
    container,
    slide,
    nextArrow,
    prevArrow,
    wrapper,
    field
  } = _ref;
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    btnSlidePrev = document.querySelector(prevArrow),
    btnSlideNext = document.querySelector(nextArrow),
    slidesWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slides[0]).width,
    widthWrapper = window.getComputedStyle(slidesWrapper).width;
  let kfSlide = Math.floor(parseInt(widthWrapper) / parseInt(width)),
    offset = 0;
  if (slides.length < 5 && slides.length > 1) {
    if (slides.length - 1 < kfSlide) {
      kfSlide = slides.length - 1;
    }
  } else if (slides.length == 1) {
    kfSlide = slides.length;
  }
  slidesField.style.width = parseInt(width) * slides.length + 'px';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';
  slidesWrapper.style.overflow = 'hidden';
  btnSlideNext.addEventListener('click', () => {
    if (offset == parseInt(width) * (slides.length - kfSlide)) {
      offset = 0;
    } else {
      offset += parseInt(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
  });
  btnSlidePrev.addEventListener('click', () => {
    if (offset == 0) {
      offset = parseInt(width) * (slides.length - kfSlide);
    } else {
      offset -= parseInt(width);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordeon */ "./src/js/modules/accordeon.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");





document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: '.slider__main',
    nextArrow: '.slider__next',
    prevArrow: '.slider__prev',
    slide: '.slider__item',
    wrapper: '.slider__wrapper',
    field: '.slider__inner'
  });
  (0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_1__["default"])('.questions__top-section', '.questions__bottom-section', '.questions__open', 'questions__top-section_active');
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__menu', '.header__menu-item', '.header__hamburger', 'header__menu_active', 'header__hamburger_active');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map