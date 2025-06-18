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
      button.addEventListener("click", (e) => {
         e.preventDefault();
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

   if (!toggleBtn || !asideBody || !body) return;

   toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      asideBody.classList.add('opened');
      body.classList.add('blocked');
   });

   if (closeBtn) {
      closeBtn.addEventListener('click', () => {
         asideBody.classList.remove('opened');
         body.classList.remove('blocked');
      });
   }

   document.addEventListener('click', (e) => {
      const isOpened = asideBody.classList.contains('opened');
      const clickedOutside = !asideBody.contains(e.target) && !toggleBtn.contains(e.target);

      if (isOpened && clickedOutside) {
         asideBody.classList.remove('opened');
         body.classList.remove('blocked');
      }
   });
});

document.addEventListener('DOMContentLoaded', () => {
   /* ------------------------------
      Elements
   ------------------------------ */
   const chatContainer = document.querySelector('.chat');
   const chatInner = document.querySelector('.chat__container');
   const scrollerBtn = document.querySelector('.chat__scroller');
   const appMain = document.querySelector('.app__main');
   const textarea = document.getElementById('autoResize');
   const controlPanel = document.querySelector('.app__main-control-panel');

   /* ------------------------------
      Прокрутка чата вниз по умолчанию
   ------------------------------ */
   if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
   }

   /* ------------------------------
      Кнопка прокрутки вниз
   ------------------------------ */
   if (chatContainer && scrollerBtn) {
      const showScrollerThreshold = 200;

      const updateScrollerVisibility = () => {
         const scrollDiff = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight;
         if (scrollDiff > showScrollerThreshold) {
            scrollerBtn.classList.add('visible');
         } else {
            scrollerBtn.classList.remove('visible');
         }
      };

      scrollerBtn.addEventListener('click', () => {
         chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth',
         });
      });

      chatContainer.addEventListener('scroll', updateScrollerVisibility);

      const scrollObserver = new MutationObserver(updateScrollerVisibility);
      scrollObserver.observe(chatContainer, { childList: true, subtree: true });
   }

   /* ------------------------------
      Проверка наличия сообщений
   ------------------------------ */
   if (appMain && chatInner) {
      const checkMessages = () => {
         const hasMessages = chatInner.querySelector('.chat__client-message, .chat__ai-message');
         appMain.classList.toggle('app__main-with-chat', !!hasMessages);
      };

      checkMessages();

      const messageObserver = new MutationObserver(checkMessages);
      messageObserver.observe(chatInner, { childList: true, subtree: true });
   }

   /* ------------------------------
      Фокус на textarea
   ------------------------------ */
   if (textarea && controlPanel) {
      textarea.addEventListener('focus', () => {
         controlPanel.classList.add('focused');
      });

      textarea.addEventListener('blur', () => {
         if (textarea.value.trim() === '') {
            controlPanel.classList.remove('focused');
         }
      });
   }
});



/*------------------------------
GSAP animations
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   // Проверка существования хотя бы одного элемента по селектору
   const elementExists = (selector) =>
      typeof selector === "string"
         ? document.querySelector(selector) !== null
         : !!selector;

   // Lenis
   const lenis = new Lenis({
      smooth: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
   });

   lenis.on('scroll', ScrollTrigger.update);

   const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
   };
   requestAnimationFrame(raf);

   gsap.registerPlugin(ScrollTrigger);

   // Плавное появление body
   if (elementExists("body")) {
      gsap.to("body", {
         opacity: 1,
         duration: 0.5,
         ease: "linear"
      });
   }

   // Заголовки
   const titles = document.querySelectorAll(".anim-title");
   if (titles.length) {
      titles.forEach((title) => {
         gsap.from(title, {
            opacity: 0,
            y: 40,
            skewX: 10,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
               trigger: title,
               start: "top 85%",
               toggleActions: "play none none none"
            }
         });
      });
   }

   // Подзаголовки
   const subtitles = document.querySelectorAll(".anim-subtitle");
   if (subtitles.length) {
      subtitles.forEach((subtitle) => {
         gsap.from(subtitle, {
            opacity: 0,
            delay: 1,
            duration: 2.5,
            ease: "power1",
            scrollTrigger: {
               trigger: subtitle,
               start: "top 95%",
               toggleActions: "play none none none"
            }
         });
      });
   }

   // .hero анимации
   if (elementExists(".hero")) {
      const heroUserImg = document.querySelectorAll(".hero__user img");
      if (heroUserImg.length) {
         gsap.from(heroUserImg, {
            opacity: 0,
            scale: 0.5,
            x: 50,
            duration: 1,
            stagger: 0.1,
            ease: 'power1',
            scrollTrigger: {
               trigger: ".hero",
               start: "top 80%",
               end: "top 10%",
            }
         });
      }

      if (elementExists(".hero__user-text")) {
         gsap.from(".hero__user-text", {
            opacity: 0,
            scale: 0.5,
            x: 50,
            duration: 1,
            ease: 'power1',
         });
      }

      if (elementExists(".hero__screen")) {
         gsap.from(".hero__screen", {
            x: 150,
            duration: 2,
            ease: 'back.out(1)',
         });
      }
   }

   // interface__card
   if (elementExists(".interface__cards")) {
      gsap.from(".interface__card", {
         xPercent: 20,
         opacity: 0,
         duration: 2,
         ease: "back.out(2)",
         stagger: 0.2,
         scrollTrigger: {
            trigger: ".interface__cards",
            start: "top 85%",
            once: true
         }
      });
   }

   // prices__cell
   if (elementExists(".prices__table")) {
      gsap.from(".prices__cell", {
         opacity: 0,
         duration: 1,
         stagger: 0.1,
         ease: 'power1',
         scrollTrigger: {
            trigger: ".prices__table",
            start: "top 90%",
         }
      });
   }

   if (elementExists(".prices__table")) {
      gsap.to(".prices__cell-sep", {
         y: 140,
         duration: 1,
         ease: 'power1',
         stagger: 0.1,
         scrollTrigger: {
            trigger: ".prices__table",
            start: "top 40%",
            scrub: true,
         }
      });
   }

   if (elementExists(".community__items")) {
      gsap.from(".community__item", {
         y: 40,
         opacity: 0,
         stagger: 0.2,
         duration: 1,
         ease: 'power1',
         scrollTrigger: {
            trigger: ".community__items",
            start: "top 85%",
         }
      });
   }


   // offer__card
   const offerItems = gsap.utils.toArray('.offer__card');

   if (offerItems.length && elementExists('.offer__cards')) {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
         gsap.from(offerItems, {
            xPercent: 20,
            opacity: 0,
            duration: 2,
            ease: "back.out(2)",
            stagger: 0.2,
            scrollTrigger: {
               trigger: ".offer__cards",
               start: "top 85%",
               once: true
            }
         });
      } else {
         gsap.from(offerItems, {
            y: -50,
            ease: "bounce.out",
            stagger: 0.1,
            duration: 2,
            scrollTrigger: {
               trigger: '.offer__cards',
               start: "top 80%",
               end: "bottom 20%",
               toggleActions: "play none none none"
            }
         });
      }
   }


   // request__card
   if (elementExists('.request__body')) {
      gsap.from(".request__card", {
         x: 150,
         duration: 2,
         ease: 'back.out(1)',
         scrollTrigger: {
            trigger: '.request__body',
            start: "top 80%",
            toggleActions: "play none none none"
         }
      });
   }

   // Обновляем ScrollTrigger один раз после загрузки
   window.addEventListener("load", () => {
      ScrollTrigger.refresh();
   });

   // Обновляем при ресайзе
   window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
   });
});

})();

/******/ })()
;