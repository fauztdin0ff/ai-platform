/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*------------------------------
      Brands carousel   
      ---------------------------*/
const brandsSlider = document.querySelector(".marquee__slider");

if (brandsSlider) {
   const brandsSwiper = new Swiper(brandsSlider, {
      slidesPerView: "auto",
      loop: true,
      freeMode: true,
      simulateTouch: false,
      slideToClickedSlide: false,
      speed: 4000,
      autoplay: {
         delay: 0,
         disableOnInteraction: false,
      },
      breakpoints: {
         320: {
            spaceBetween: 16,
         },
         768: {
            spaceBetween: 30,
         },
         981: {
            spaceBetween: 90,
         }
      }
   });
}


/*------------------------------
faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqQuestions = document.querySelectorAll(".faq__question");

   if (faqQuestions.length > 0) {
      faqQuestions.forEach((question) => {
         question.addEventListener("click", () => {
            const faqItem = question.parentElement;
            if (!faqItem) return;

            const faqAnswer = faqItem.querySelector(".faq__answer");
            if (!faqAnswer) return;

            const allItems = document.querySelectorAll(".faq__item");
            allItems.forEach((item) => {
               if (item !== faqItem) {
                  item.classList.remove("active");

                  const answer = item.querySelector(".faq__answer");
                  if (answer) {
                     answer.style.maxHeight = null;
                  }
               }
            });

            const isActive = faqItem.classList.contains("active");
            faqItem.classList.toggle("active");

            if (isActive) {
               faqAnswer.style.maxHeight = null;
            } else {
               faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 30 + "px";
            }
         });
      });
   }
});



/* ------------------------------Popups---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const openButtons = document.querySelectorAll(".open-popup");
   const closeButtons = document.querySelectorAll(".popup-close");
   const popups = document.querySelectorAll(".popup");

   openButtons.forEach(button => {
      button.addEventListener("click", () => {
         const popupName = button.getAttribute("data-popup");
         const targetPopup = document.querySelector(`.popup[data-popup="${popupName}"]`);

         if (targetPopup) {
            targetPopup.classList.add("opened");
            document.body.classList.add("popup-open");
         }
      });
   });

   closeButtons.forEach(button => {
      button.addEventListener("click", (e) => {
         const popup = button.closest(".popup");
         if (popup) {
            popup.classList.remove("opened");
            document.body.classList.remove("popup-open");
         }
      });
   });

   popups.forEach(popup => {
      popup.addEventListener("click", (e) => {
         if (e.target === popup) {
            popup.classList.remove("opened");
            document.body.classList.remove("popup-open");
         }
      });
   });
});

/*------------------------------
Open password
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const areas = document.querySelectorAll(".popup__body-form-area");

   if (areas.length > 0) {
      areas.forEach(area => {
         const input = area.querySelector(".password-input");
         const toggle = area.querySelector(".password-eye");
         const openEye = toggle?.querySelector(".password-eye-open");
         const closeEye = toggle?.querySelector(".password-eye-close");

         if (input && toggle && openEye && closeEye) {
            toggle.addEventListener("click", () => {
               const isVisible = input.type === "text";
               input.type = isVisible ? "password" : "text";
               openEye.style.display = isVisible ? "flex" : "none";
               closeEye.style.display = isVisible ? "none" : "flex";
            });
         }
      });
   }
});


/*------------------------------
textarea chat
---------------------------*/
const textarea = document.getElementById('autoResize');
const sendButton = document.querySelector('.app__main-control-send');

if (textarea && sendButton) {
   textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      const maxHeight = 172;
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';

      if (textarea.value.trim() !== '') {
         sendButton.style.display = 'flex';
      } else {
         sendButton.style.display = 'none';
      }
   });
}


/*------------------------------
Tips
---------------------------*/
function handleTips() {
   document.querySelectorAll('.with-tips').forEach(item => {
      const tip = item.querySelector('.tips-item');

      if (window.innerWidth < 1023) {
         // Удаляем предыдущие события
         item.onmouseenter = null;
         item.onmouseleave = null;

         item.addEventListener('click', () => {
            tip.classList.add('show');

            setTimeout(() => {
               tip.classList.remove('show');
            }, 2000);
         });
      } else {
         item.onclick = null;

         item.addEventListener('mouseenter', () => {
            tip.classList.add('show');
         });

         item.addEventListener('mouseleave', () => {
            tip.classList.remove('show');
         });
      }
   });
}

handleTips();

window.addEventListener('resize', () => {
   handleTips();
});


/*------------------------------
Open body
---------------------------*/
document.addEventListener('DOMContentLoaded', () => {
   const toggleBtn = document.querySelector('.app__aside-toggle');
   const asideBody = document.querySelector('.app__aside-body');
   const closeBtn = document.querySelector('.app__aside-body-close');
   const body = document.body;

   // Проверка, есть ли нужные элементы
   if (!toggleBtn || !asideBody || !body) return;

   // Открыть меню
   toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      asideBody.classList.add('opened');
      body.classList.add('blocked');
   });

   // Закрыть меню (по кнопке), если кнопка есть
   if (closeBtn) {
      closeBtn.addEventListener('click', () => {
         asideBody.classList.remove('opened');
         body.classList.remove('blocked');
      });
   }

   // Закрыть меню (по клику вне блока)
   document.addEventListener('click', (e) => {
      const isOpened = asideBody.classList.contains('opened');
      const clickedOutside = !asideBody.contains(e.target) && !toggleBtn.contains(e.target);

      if (isOpened && clickedOutside) {
         asideBody.classList.remove('opened');
         body.classList.remove('blocked');
      }
   });
});


})();

/******/ })()
;