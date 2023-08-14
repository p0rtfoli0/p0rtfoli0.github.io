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

/***/ "./src/js/modules/lang-change.js":
/*!***************************************!*\
  !*** ./src/js/modules/lang-change.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function langChange(langElements, videoSelector) {
  const langEls = document.querySelectorAll(langElements),
    videoSrc = document.querySelector(videoSelector);
  if (sessionStorage.getItem('lang')) {
    if (sessionStorage.getItem('lang') == 'en') {
      en();
      videoSrc.src = "./video/presentation/english_video.mp4";
    } else if (sessionStorage.getItem('lang') == 'uk') {
      uk();
    } else if (sessionStorage.getItem('lang') == 'tg') {
      tg();
    } else if (sessionStorage.getItem('lang') == 'uz') {
      uz();
    } else if (sessionStorage.getItem('lang') == 'ky') {
      ky();
    } else if (sessionStorage.getItem('lang') == 'kk') {
      kk();
    } else if (sessionStorage.getItem('lang') == 'ar') {
      ar();
      videoSrc.src = "./video/presentation/english_video.mp4";
    }
  }
  langEls.forEach(item => {
    item.addEventListener('click', () => {
      item.getAttribute('data-google-lang');
      sessionStorage.setItem('lang', item.getAttribute('data-google-lang'));
    });
  });
  function en() {
    document.querySelector('.advantages__statistics').style.width = '515px';
    document.querySelector('.advantages__title-img').style.cssText = 'width: 375px; left: 105px;';
    document.querySelector('.meet__info-img').style.cssText = 'right: 122px;';
    document.querySelector('.examples__title-img').style.cssText = 'width: 337px;';
    document.querySelector('.questions__title-img').style.cssText = 'display: none;';
    document.querySelector('.vacancy__title-img').style.cssText = 'right: 20%;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelector('.advantages__statistics').style.cssText = 'width: 410px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 22px;';
      });
      document.querySelector('.advantages__title-img').style.cssText = 'width: 270px; left: 70px;';
      document.querySelector('.meet__info-img').style.cssText = 'width: 23%; right: 23%;';
      document.querySelector('.examples__title-img').style.cssText = 'width: 31%; top: 0;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelector('.advantages__statistics').style.cssText = 'width: 316px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 18px;';
      });
      document.querySelector('.advantages__title-img').style.cssText = 'width: 58%; left: 59px;';
      document.querySelector('.stages__img').style.cssText = 'width: 52%; top: -20px;';
      document.querySelector('.meet__info-img').style.cssText = 'top: 7%; right: 21%;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.advantages__statistics').style.cssText = 'width: 275px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 14px;';
      });
      document.querySelector('.advantages__title-img').style.cssText = 'width: 52%; right: 80px;';
      document.querySelector('.stages__img').style.cssText = 'top: -12px;';
      document.querySelector('.slider__border-image').style.cssText = 'width: 47%;';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.advantages__statistics').style.cssText = 'width: 310px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 17px;';
      });
      document.querySelector('.advantages__photo-descr').style.cssText = 'display: flex; flex-direction: column;';
      document.querySelector('.advantages__title-img').style.cssText = 'width: 57%; right: 36px;';
      document.querySelector('.stages__img').style.cssText = 'width: 264px;';
      document.querySelector('.examples__title-img').style.cssText = 'width: 47%; top: 8px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'right: 22%;';
    }
  }
  function uk() {
    document.querySelector('.header__item-link').textContent = document.querySelector('.header__item-link').textContent.replace(/\/w/, i => i.toUpperCase());
    console.log(document.querySelector('.header__item-link').textContent.replace(/\/w/, i => i.toUpperCase()));
    document.querySelector('.advantages__title-img').style.cssText = 'width: 50%; right: 28%;';
    document.querySelector('.stages__img').style.cssText = 'width: 39%; top: 0;';
    document.querySelector('.slider__border-image').style.cssText = 'width: 47%; right: -18px; top: 5px;';
    document.querySelector('.meet__info-img').style.cssText = 'width: 21%; top: 8px; right: 60px;';
    document.querySelector('.questions__title-img').style.cssText = 'right: 27%;';
    document.querySelector('.vacancy__title-img').style.cssText = 'right: 13%;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelector('.stages__img').style.cssText = 'width: 45%; top: -8px;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelector('.stages__img').style.cssText = 'width: 55%; top: 0;';
      document.querySelector('.meet__info-img').style.cssText = 'right: 44px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'width: 44%; right: 21%; top: 5px;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.advantages__title-img').style.cssText = 'width: 41%; right: 18%;';
      document.querySelector('.stages__img').style.cssText = 'width: 47%; top: 10px;';
      document.querySelector('.meet__info-img').style.cssText = 'right: 33px;';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.advantages__title-img').style.cssText = 'width: 54%; right: 24px;';
      document.querySelector('.slider__border-image').style.cssText = 'right: -11px; width: 48%;';
      document.querySelector('.examples__title-img').style.cssText = 'top: -6px;';
      document.querySelector('.questions__title-img').style.cssText = 'left: 49%; width: 154px; top: -9px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 17px;';
      });
      document.querySelector('.vacancy__title-img').style.cssText = 'width: 44%; right: 18%; top: 15px;';
    }
  }
  function tg() {
    document.querySelectorAll('.promo__btn-text').forEach(item => {
      item.style.cssText = 'font-size: 18px;';
    });
    document.querySelector('.advantages__title-img').style.cssText = 'width: 65%; right: 36%;';
    document.querySelector('.tariff__subtitle-text').style.cssText = 'font-size: 42px;';
    document.querySelectorAll('.tariff__btn').forEach(item => {
      item.style.cssText = 'font-size: 25px; margin-top: 12px;';
    });
    document.querySelectorAll('.tariff__price').forEach(item => {
      item.style.cssText = 'margin-top: 10px;';
    });
    document.querySelector('.stages__img').style.cssText = 'width: 34%; top: 10px;';
    document.querySelector('.slider__border-image').style.cssText = 'width: 47%; top: -7px;';
    document.querySelector('.meet__info-text').style.cssText = 'font-size: 29px;';
    document.querySelector('.meet__info-img').style.cssText = 'display: none;';
    document.querySelector('.data__title-img').style.cssText = 'top: -36px; width: 367px;';
    document.querySelector('.questions__title-text').style.cssText = 'font-size: 59px;';
    document.querySelector('.questions__title-img').style.cssText = 'width: 52%;top: -34px; right: -13px;';
    document.querySelector('.vacancy__title-img').style.cssText = 'width: 40%; top: 10px;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 23px;';
      });
      document.querySelector('.advantages__title-img').style.cssText = 'width: 69%; right: 32%;';
      document.querySelector('.tariff__subtitle-text').style.cssText = 'font-size: 29px;';
      document.querySelectorAll('.tariff__btn').forEach(item => {
        item.style.cssText = 'font-size: 24px; margin-top: 39px;';
      });
      document.querySelector('.stages__img').style.cssText = 'width: 39%; top: 2px;';
      document.querySelector('.meet__info-text').style.cssText = 'font-size: 23px;';
      document.querySelector('.examples__title-img').style.cssText = 'width: 35%;';
      document.querySelector('.questions__title-text').style.cssText = 'font-size: 55px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'width: 42%; top: 23px';
      document.querySelector('.vacancy__submit').style.cssText = 'font-size: 23px;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 16px;';
      });
      document.querySelector('.stages__img').style.cssText = 'width: 41%; top: 11px;';
      document.querySelector('.data__title-img').style.cssText = 'width: 285px;';
      document.querySelector('.questions__title-text').style.cssText = 'font-size: 39px;';
      document.querySelector('.questions__title-img').style.cssText = 'top: -20px; width: 52%;';
      document.querySelector('.vacancy__title-img').style.cssText = 'top: 10px; width: 42%;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.advantages__title-img').style.cssText = 'width: 69%; right: 15%;';
      document.querySelector('.questions__title-text').style.cssText = 'font-size: 36px;';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.advantages__title-img').style.cssText = 'width: 89%; right: 6%;';
      document.querySelector('.tariff__subtitle-text').style.cssText = 'font-size: 17px;';
      document.querySelectorAll('.tariff__btn').forEach(item => {
        item.style.cssText = 'font-size: 18px;';
      });
      document.querySelector('.stages__img').style.cssText = 'width: 70%; top: -3px;';
      document.querySelector('.data__title-img').style.cssText = 'width: 217px;';
      document.querySelector('.examples__title-img').style.cssText = 'display: none;';
      document.querySelector('.questions__title-img').style.cssText = 'display: none;';
      document.querySelector('.vacancy__title-img').style.cssText = 'top: 19px; width: 38%;';
      document.querySelector('.vacancy__submit').style.cssText = 'font-size: 21px;';
    }
  }
  function uz() {
    document.querySelector('.stages__img').style.cssText = 'width: 53%; top: -22px;';
    document.querySelector('.meet__info-img').style.cssText = 'display: none;';
    document.querySelector('.questions__title-img').style.cssText = 'width: 33%; right: 67px;';
    document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 83px;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelector('.advantages__title-img').style.cssText = 'width: 66%; right: 3%;';
      document.querySelector('.advantages__title').style.cssText = 'font-size: 37px;';
      document.querySelector('.examples__text').style.cssText = 'font-size: 45px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 56px;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelector('.advantages__title').style.cssText = 'font-size: 27px;';
      document.querySelector('.stages__img').style.cssText = 'width: 65%; top: -33px;';
      document.querySelector('.slider__border-image').style.cssText = 'width: 51%;';
      document.querySelector('.examples__text').style.cssText = 'font-size: 38px;';
      document.querySelector('.questions__title-img').style.cssText = 'width: 31%; right: 63px; top: 0;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 39px;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 34px;';
      document.querySelector('.advantages__title-img').style.cssText = 'width: 37%; right: 21%;';
      document.querySelector('.stages__img').style.cssText = 'width: 64%; top: -23px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 34px;';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 26px;';
      document.querySelector('.advantages__title-img').style.cssText = 'width: 62%; right: 2%;';
      document.querySelector('.stages__text').style.cssText = 'font-size: 29px;';
      document.querySelector('.stages__img').style.cssText = 'display: none;';
      document.querySelector('.examples__text').style.cssText = 'font-size: 24px;';
      document.querySelector('.questions__title-img').style.cssText = 'display: none;';
      document.querySelector('.vacancy__title-img').style.cssText = 'display: none;';
    }
  }
  function ky() {
    document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 43px;';
    document.querySelector('.advantages__title').style.cssText = 'font-size: 51px;';
    document.querySelector('.slider__border-image').style.cssText = 'width: 63%; top: -18px;';
    document.querySelector('.meet__info-img').style.cssText = 'display: none;';
    document.querySelector('.questions__title-img').style.cssText = 'right: 86px;';
    document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 113px;';
    document.querySelector('.vacancy__title-img').style.cssText = 'width: 61%; top: -26px; right: 9px;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 36px;';
      document.querySelector('.advantages__title').style.cssText = 'font-size: 33px;';
      document.querySelector('.stages__text').style.cssText = 'font-size: 43px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 77px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'width: 61%; top: 7px; right: 9px;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelector('.advantages__title').style.cssText = 'font-size: 25px;';
      document.querySelector('.stages__text').style.cssText = 'font-size: 36px;';
      document.querySelector('.questions__title-img').style.cssText = 'right: 66px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 55px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'width: 61%; top: -5px; right: 9px;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 28px;';
      document.querySelector('.advantages__title-img').style.cssText = 'width: 42%; right: 103px;';
      document.querySelector('.stages__text').style.cssText = 'font-size: 32px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 49px;';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 23px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 16px;';
      });
      document.querySelector('.advantages__title-img').style.cssText = 'display: none;';
      document.querySelectorAll('.tariff__block').forEach(item => {
        item.style.cssText = 'min-height: 800px;';
      });
      document.querySelector('.stages__text').style.cssText = 'font-size: 27px;';
      document.querySelector('.stages__img').style.cssText = 'display: none;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 33px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'display: none;';
    }
  }
  function kk() {
    document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 46px;';
    document.querySelector('.advantages__statistics').style.cssText = 'width: 600px;';
    document.querySelectorAll('.advantages__statistics-data').forEach(item => {
      item.style.cssText = 'font-size: 29px;';
    });
    document.querySelector('.advantages__title').style.cssText = 'font-size: 50px;';
    document.querySelectorAll('.tariff__price').forEach(item => {
      item.style.cssText = 'margin-top: 15px;';
    });
    document.querySelectorAll('.tariff__btn').forEach(item => {
      item.style.cssText = 'margin-top: 24px;';
    });
    document.querySelector('.slider__border-image').style.cssText = 'width: 56%; top: -16px;';
    document.querySelector('.meet__info-img').style.cssText = 'display: none;';
    document.querySelector('.questions__title-img').style.cssText = 'width: 36%; right: 69px;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 38px;';
      document.querySelector('.advantages__statistics').style.cssText = 'width: 410px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 17px;';
      });
      document.querySelector('.advantages__title').style.cssText = 'font-size: 32px;';
      document.querySelector('.advantages__title-img').style.cssText = '    width: 75%; right: 6px;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelector('.advantages__statistics').style.cssText = 'width: 311px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 13px;';
      });
      document.querySelector('.advantages__title').style.cssText = 'font-size: 23px;';
      document.querySelector('.questions__title-img').style.cssText = 'right: 66px; width: 34%; top: 0px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 55px;';
      document.querySelector('.vacancy__title-img').style.cssText = 'width: 61%; top: -5px; right: 9px;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.promo__title').style.cssText = 'font-size: 78px;';
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 30px;';
      document.querySelector('.advantages__statistics').style.cssText = 'width: 280px;';
      document.querySelectorAll('.advantages__statistics-data').forEach(item => {
        item.style.cssText = 'font-size: 11px;';
      });
      document.querySelector('.advantages__title').style.cssText = 'font-size: 39px;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 51px;';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.promo__title').style.cssText = 'font-size: 54px;';
      document.querySelector('.promo__subtitle-text').style.cssText = 'font-size: 24px;';
      document.querySelector('.advantages__title').style.cssText = 'font-size: 23px;';
      document.querySelector('.stages__text').style.cssText = 'font-size: 27px;';
      document.querySelector('.stages__img').style.cssText = 'display: none;';
      document.querySelector('.examples__text').style.cssText = 'font-size: 25px;';
      document.querySelector('.questions__title-img').style.cssText = 'display: none;';
      document.querySelector('.vacancy__title-img').style.cssText = 'display: none;';
      document.querySelector('.vacancy__title-text').style.cssText = 'font-size: 29px;';
    }
  }
  function ar() {
    document.querySelector('.advantages__title-img').style.cssText = 'width: 36%; left: 0;';
    document.querySelector('.meet__info-img').style.cssText = 'display: none;';
    document.querySelector('.questions__title-img').style.cssText = 'display: none;';
    document.querySelector('.vacancy__title-img').style.cssText = 'display: none;';
    if (window.matchMedia('(max-width: 1330px)').matches) {
      document.querySelector('.advantages__title-img').style.cssText = 'display: none;';
    }
    if (window.matchMedia('(max-width: 990px)').matches) {
      document.querySelector('.advantages__step-group').style.cssText = 'margin-top: 82px;';
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      document.querySelector('.advantages__step-group').style.cssText = 'margin-top: 25px;';
      document.querySelector('.advantages__title').style.cssText = '    margin-top: 138px';
    }
    if (window.matchMedia('(max-width: 575px)').matches) {
      document.querySelector('.advantages__statistics').style.cssText = 'width: 246px;';
      document.querySelector('.advantages__title').style.cssText = '    margin-top: 25px';
      document.querySelector('.advantages__photo-descr').style.cssText = 'display: flex; flex-direction: column;';
      document.querySelector('.stages__img').style.cssText = 'top:0   ;';
      document.querySelector('.slider__border-image').style.cssText = 'display: none;';
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (langChange);

/***/ }),

/***/ "./src/js/modules/lang.js":
/*!********************************!*\
  !*** ./src/js/modules/lang.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lang(triggerSelector, langBlock, activeClass, langElement) {
  const button = document.querySelector(triggerSelector),
    langBlck = document.querySelector(langBlock),
    langEl = document.querySelectorAll(langElement);
  button.addEventListener('click', () => {
    if (langBlck.classList.contains(activeClass)) {
      langBlck.classList.remove(activeClass);
      langEl.forEach(item => {
        item.style.display = 'none';
      });
    } else {
      langBlck.classList.add(activeClass);
      langEl.forEach(item => {
        item.style.display = 'block';
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lang);

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
    item.addEventListener('click', e => {
      if (!e.target.classList.contains('header__item-link_drop')) {
        hamburger.classList.toggle(hamburgerClassActive);
        menu.classList.toggle(menuClassActive);
      }
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

function sendForm(formSelector, exampleSelector, resultValueSelector, btnSubmit, loaderSelector, classActiveLoader, buttonClose, overlaySelector, modalInfoSelector, classActiveOverlay) {
  const form = document.querySelector(formSelector),
    checkResult = document.querySelector(resultValueSelector),
    buttonSubmit = document.querySelector(btnSubmit),
    checkExample = document.querySelector(exampleSelector),
    buttonCloseElement = document.querySelector(buttonClose);
  let checkObj = (0,_check__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    messageObj = {
      success: [`Ваша анкета отправлена, ожидайте обратной связи от администратора, чтобы ускорить процесс обработки анкеты, напишите, пожалуйста, администратору в Telegram - <a href="https://t.me/RenatJobs" class="modal__info-link">https://t.me/RenatJobs</a>`, '#aaec1e'],
      error: [`Не удалось отправить Вашу анкету, свяжитесь, пожалуйста, с администратором в Telegram - <a href="https://t.me/RenatJobs" class="modal__info-link">https://t.me/RenatJobs</a>`, '#DB0000']
    };
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
          formData = new FormData(form);
          fetch('../mailer/send.php', {
            method: 'POST',
            body: formData
          }).then(response => response.json()).then(result => {
            if (result["on_score"] >= 0.5) {
              // Отправка данных на почту
              send();
            } else {
              openModal(overlaySelector, modalInfoSelector, messageObj.error);
              checkObj = (0,_check__WEBPACK_IMPORTED_MODULE_0__["default"])();
              checkExample.textContent = checkObj.example;
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
          form.reset();
          buttonSubmit.innerHTML = `Отправить анкету`;
          openModal(overlaySelector, modalInfoSelector, messageObj.success);
          checkObj = (0,_check__WEBPACK_IMPORTED_MODULE_0__["default"])();
          checkExample.textContent = checkObj.example;
        } else {
          buttonSubmit.innerHTML = `Отправить анкету`;
          openModal(overlaySelector, modalInfoSelector, messageObj.error);
          checkObj = (0,_check__WEBPACK_IMPORTED_MODULE_0__["default"])();
          checkExample.textContent = checkObj.example;
        }
      }
      buttonCloseElement.addEventListener('click', () => {
        closeModal(overlaySelector);
      });
      function openModal(modalSelector, modalInfo, messageModal) {
        const modalWindow = document.querySelector(modalSelector),
          modalInfoElement = document.querySelector(modalInfo);
        modalInfoElement.innerHTML = messageModal[0];
        document.querySelector('.modal').style.borderColor = messageModal[1];
        modalWindow.classList.add(classActiveOverlay);
        document.body.style.overflow = 'hidden';
      }
      function closeModal(modalSelector) {
        const modalWindow = document.querySelector(modalSelector);
        modalWindow.classList.remove(classActiveOverlay);
        document.body.style.overflow = '';
      }
      document.addEventListener('keydown', e => {
        const modalWindow = document.querySelector(overlaySelector);
        if (e.code === "Escape" && modalWindow.classList.contains(classActiveOverlay)) {
          closeModal(overlaySelector);
        }
      });
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
/* harmony import */ var _modules_lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/lang */ "./src/js/modules/lang.js");
/* harmony import */ var _modules_lang_change__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/lang-change */ "./src/js/modules/lang-change.js");





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
  (0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_4__["default"])('.vacancy__form', '.vacancy__example', '#answer', '.vacancy__submit', 'vacancy__loader', 'vacancy__loader_active', '.modal__close', '.overlay', '.modal__info', 'overlay_show');
  (0,_modules_up__WEBPACK_IMPORTED_MODULE_5__["default"])('.pageup');
  (0,_modules_lang__WEBPACK_IMPORTED_MODULE_6__["default"])('.header__item-link_drop', '.language', 'language_active', '.language__img');
  (0,_modules_lang_change__WEBPACK_IMPORTED_MODULE_7__["default"])('.language__img', '.video__src');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map