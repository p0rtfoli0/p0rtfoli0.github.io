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

/***/ "./src/js/modules/check.js":
/*!*********************************!*\
  !*** ./src/js/modules/check.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function check() {
  // const exampleContainer = document.querySelector(selectorExampleContainer),
  //       resultValue = document.querySelector(selectorResultValue);

  const numberOne = Math.floor((Math.random() * (0.25 - 0.05) + 0.05) * 100);
  const numberTwo = Math.floor((Math.random() * (0.25 - 0.05) + 0.05) * 100);

  // exampleContainer.textContent = `Укажите ответ на пример: ${numberOne} + ${numberTwo}`;

  return {
    result: numberOne + numberTwo,
    example: `Укажите ответ на пример: ${numberOne} + ${numberTwo}`
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);

/***/ }),

/***/ "./src/js/modules/hide.js":
/*!********************************!*\
  !*** ./src/js/modules/hide.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hide(buttonSelector, formContainerSelector, formSelector, activeClass) {
  const btn = document.querySelector(buttonSelector),
    formContainer = document.querySelector(formContainerSelector),
    form = document.querySelector(formSelector);
  btn.addEventListener('click', () => {
    if (formContainer.classList.contains(activeClass)) {
      formContainer.classList.remove(activeClass);
      form.style.display = 'none';
      btn.textContent = 'Заполнить анкету';
    } else {
      formContainer.classList.add(activeClass);
      form.style.display = 'flex';
      btn.textContent = 'Скрыть';
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hide);

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

/***/ "./src/js/modules/sendForm.js":
/*!************************************!*\
  !*** ./src/js/modules/sendForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check */ "./src/js/modules/check.js");

function sendForm(formSelector, exampleSelector, resultValueSelector, btnSubmit, loaderSelector, classActiveLoader) {
  const form = document.querySelector(formSelector),
    checkResult = document.querySelector(resultValueSelector),
    buttonSubmit = document.querySelector(btnSubmit),
    checkExample = document.querySelector(exampleSelector);
  const checkObj = (0,_check__WEBPACK_IMPORTED_MODULE_0__["default"])();
  checkExample.textContent = checkObj.example;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (+checkResult.value == checkObj.result) {
      buttonSubmit.innerHTML = `<span class="${loaderSelector} ${classActiveLoader}"></span>`;

      // reCaptcha Google ----start-----
      let formData;
      grecaptcha.enterprise.ready(async () => {
        await grecaptcha.enterprise.execute('6LcsdqInAAAAAI5DYzusvEJqCZ78Tvc4Z9URqn5X', {
          action: 'homepage'
        }).then(function (token) {
          document.getElementById('token').value = token;
          const data = new URLSearchParams();
          // for (const pair of new FormData(form)) {
          //     console.log(pair[0]);
          //     console.log(pair[1]);
          //     data.append(pair[0], pair[1]);
          // }
          // console.log(data);
          // console.log(form);
          formData = new FormData(form);
          fetch('../mailer/send.php', {
            method: 'POST',
            body: formData
          }).then(response => response.json()).then(result => {
            if (result["on_score"] >= 0.5) {
              console.log('Вы человек, проверка пройдена');
              console.log(result);
              // Отправка данных на почту
              send();
            } else {
              console.log('Проверка не пройдена!');
              console.log(result);
            }
          });

          // reCaptcha Google ----end-----
        });
      });

      async function send() {
        let response = await fetch('../mailer/smart.php', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          console.log(result.message);
          form.reset();
          buttonSubmit.innerHTML = `Отправить анкету`;
        } else {
          console.log("Ошибка");
          buttonSubmit.innerHTML = `Отправить анкету`;
        }
      }
    } else {
      checkResult.value = "Значение указано неверно!";
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);

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

/***/ }),

/***/ "./src/js/modules/up.js":
/*!******************************!*\
  !*** ./src/js/modules/up.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function up(button) {
  // считываем кнопку
  const goTopBtn = document.querySelector(button);

  // обработчик на скролл окна
  window.addEventListener("scroll", trackScroll);
  // обработчик на нажатии
  goTopBtn.addEventListener("click", goTop);
  function trackScroll() {
    // вычисляем положение от верхушки страницы
    const scrolled = window.pageYOffset;
    // считаем высоту окна браузера
    const coords = document.documentElement.clientHeight;
    // если вышли за пределы первого окна
    if (scrolled > coords) {
      // кнопка появляется
      goTopBtn.style.display = 'block';
      // goTopBtn.classList.add("go-top--show");
    } else {
      // иначе исчезает
      goTopBtn.style.display = 'none';
      // goTopBtn.classList.remove("go-top--show");
    }
  }

  function goTop() {
    // пока не вернулись в начало страницы
    if (window.pageYOffset > 0) {
      // скроллим наверх
      window.scrollBy(0, -80); // второй аргумент - скорость
      setTimeout(goTop, 0); // входим в рекурсию
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (up);

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
/* harmony import */ var _modules_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hide */ "./src/js/modules/hide.js");
/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sendForm */ "./src/js/modules/sendForm.js");
/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/up */ "./src/js/modules/up.js");





// import check from './modules/check';



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
  (0,_modules_hide__WEBPACK_IMPORTED_MODULE_3__["default"])('.vacancy__button', '.vacancy__field-form', '.vacancy__form', 'vacancy__field-form_active');
  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__["default"])('.vacancy__form', '.vacancy__example', '#answer', '.vacancy__submit', 'vacancy__loader', 'vacancy__loader_active');
  (0,_modules_up__WEBPACK_IMPORTED_MODULE_5__["default"])('.pageup');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map