/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.imgSwiper = undefined;

var _app = __webpack_require__(2);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var imgSwiper = exports.imgSwiper = null;

$(document).ready(function () {
    // initialize swiper when document ready
    var mySwiper = new Swiper('.js-swiper', {
        slidesPerView: 3,
        spaceBetween: 100,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 100
            }
        }
    });

    exports.imgSwiper = imgSwiper = new Swiper('.js-img-swiper', {
        slidesPerView: 3,
        spaceBetween: 11,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 11
            }
        }
    });

    imgSwiper.on('slideChange', function () {
        var activeSlide = imgSwiper.slides[imgSwiper.realIndex];
        var srcImg = $(activeSlide).find('img').attr('src');

        _app2.default.setSrcImgPreview(srcImg);
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _swiper = __webpack_require__(1);

var _animation = __webpack_require__(7);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP = {
    slideChanged: false,
    currPrice: 0,
    $priceContainer: null,
    $titleContainer: null,
    $imgPreview: null,
    priceParams: {
        priceFirst: 0,
        priceSecond: 0,
        priceThird: 0,
        total: function total() {
            return this.priceFirst + this.priceSecond + this.priceThird;
        }
    },

    domReady: function domReady() {
        $(document).ready(function () {
            $('#preloader').fadeOut(500, function () {
                _animation2.default.introAnimation();
            });
        });
    },

    initVars: function initVars() {
        this.domReady();
        this.$priceContainer = $('.js-price');
        this.$titleContainer = $('.js-title');
        this.$imgPreview = $('.js-img-preview');

        // set price
        var price = $('.nav-link.active').data('price');
        this.currPrice = parseInt(price);
        this.$priceContainer.text(this.formatNumber(price));
    },
    videoInit: function videoInit() {
        $('.js-video-btn').click(function () {
            var $parent = $(this).closest('.js-video-preview');
            var videoLink = $(this).data('video');

            $parent.fadeOut(400, function () {
                $('#' + videoLink)[0].play();
            });
        });
    },
    formMask: function formMask() {
        $('.js-phone').mask('+7 (000) 000-00-00');
        // примеры '+7 (000) 000-00-00' // '+7 (___) ___-__-__' // 00.00.0000 // __.__.____
    },
    formValidate: function formValidate() {
        $(".js-form-validate").validate({
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                phone: {
                    minlength: 18,
                    required: true
                }
            },
            messages: {
                phone: "Данное поле заполнено не верно",
                name: "Данное поле не заполнено"
            }
        });
    },

    mapInit: function mapInit() {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map-container', {
                center: [56.12711, 47.3594129],
                zoom: 15,
                controls: ['zoomControl', 'geolocationControl']
            }),
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),
                myPlacemark = new ymaps.Placemark([56.12718, 47.3434529], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icons/marker.png',
                iconImageSize: [50, 50]
            });

            myMap.geoObjects.add(myPlacemark);
        });
    },

    selectInit: function selectInit() {
        $(document).ready(function () {
            $('.js-select').each(function () {
                var $this = $(this),
                    plh = $this.data('plh');

                $this.select2({
                    width: '100%',
                    placeholder: plh,
                    allowClear: false,
                    minimumResultsForSearch: Infinity
                });
            });
        });
    },

    tabChanged: function tabChanged() {
        var _this = this;

        $('*[data-toggle="pill"]').on('shown.bs.tab', function (e) {
            var $this = $(e.target);
            var imgs = $this.data('imgs').split(',');
            var targetPrice = parseInt($this.data('price'));
            var previosPrice = parseInt($(e.relatedTarget).data('price'));

            var srcImg = $this.find('img').attr('src');

            _this.$imgPreview.attr('src', srcImg);

            _this.$titleContainer.text($this.data('title'));

            _this.currPrice = _this.currPrice - previosPrice + targetPrice;
            _this.$priceContainer.text(_this.formatNumber(_this.currPrice));

            // remove slides and add new
            _this.replaceSlides(imgs);
        });
    },

    selectChanged: function selectChanged() {
        var _this = this;

        $('.js-select').on('select2:select', function (e) {
            var currValue = parseInt(e.target.value);
            var priceType = $(e.target).data('type');

            _this.currPrice = _this.currPrice - _this.priceParams.total();
            _this.priceParams[priceType] = currValue;
            _this.currPrice = _this.currPrice + _this.priceParams.total();

            _this.$priceContainer.text(_this.formatNumber(_this.currPrice));
        });
    },

    setSrcImgPreview: function setSrcImgPreview(src) {
        if (!APP.slideChanged) {
            APP.slideChanged = true;
            return;
        }
        console.log('not if');
        this.$imgPreview.attr('src', src);
    },

    replaceSlides: function replaceSlides(imgs) {
        _swiper.imgSwiper.removeAllSlides();
        APP.slideChanged = false;

        for (var i = 0; i < imgs.length; i++) {
            _swiper.imgSwiper.appendSlide('<div class="swiper-slide"><img src="' + imgs[i] + '" alt="" class="img-responsive"></div>');
        }
    },

    formatNumber: function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
};

exports.default = APP;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(6);

__webpack_require__(1);

var _app = __webpack_require__(2);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs
_app2.default.initVars();

//--------------------------------

_app2.default.videoInit();
_app2.default.formMask();
_app2.default.formValidate();
_app2.default.mapInit();
_app2.default.selectInit();
_app2.default.tabChanged();

// document.getElementById('btn').onclick = function () {
//    require.ensure([], function () {
//        require('./components/component-2');
//    });
// };
_app2.default.selectChanged();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(5);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($) {
	/**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

	var NAME = 'tab';
	var VERSION = '4.0.0';
	var DATA_KEY = 'bs.tab';
	var EVENT_KEY = '.' + DATA_KEY;
	var DATA_API_KEY = '.data-api';
	var JQUERY_NO_CONFLICT = $.fn[NAME];

	var Event = {
		HIDE: 'hide' + EVENT_KEY,
		HIDDEN: 'hidden' + EVENT_KEY,
		SHOW: 'show' + EVENT_KEY,
		SHOWN: 'shown' + EVENT_KEY,
		CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	};

	var ClassName = {
		DROPDOWN_MENU: 'dropdown-menu',
		ACTIVE: 'active',
		DISABLED: 'disabled',
		FADE: 'fade',
		SHOW: 'show'
	};

	var Selector = {
		DROPDOWN: '.dropdown',
		NAV_LIST_GROUP: '.nav, .list-group',
		ACTIVE: '.active',
		ACTIVE_UL: '> li > .active',
		DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
		DROPDOWN_TOGGLE: '.dropdown-toggle',
		DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

		/**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

	};
	var Tab = function () {
		function Tab(element) {
			_classCallCheck(this, Tab);

			this._element = element;
		}

		// Getters

		_createClass(Tab, [{
			key: 'show',


			// Public

			value: function show() {
				var _this = this;

				if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
					return;
				}

				var target = void 0;
				var previous = void 0;
				var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
				var selector = _util2.default.getSelectorFromElement(this._element);

				if (listElement) {
					var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
					previous = $.makeArray($(listElement).find(itemSelector));
					previous = previous[previous.length - 1];
				}

				var hideEvent = $.Event(Event.HIDE, {
					relatedTarget: this._element
				});

				var showEvent = $.Event(Event.SHOW, {
					relatedTarget: previous
				});

				if (previous) {
					$(previous).trigger(hideEvent);
				}

				$(this._element).trigger(showEvent);

				if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
					return;
				}

				if (selector) {
					target = $(selector)[0];
				}

				this._activate(this._element, listElement);

				var complete = function complete() {
					var hiddenEvent = $.Event(Event.HIDDEN, {
						relatedTarget: _this._element
					});

					var shownEvent = $.Event(Event.SHOWN, {
						relatedTarget: previous
					});

					$(previous).trigger(hiddenEvent);
					$(_this._element).trigger(shownEvent);
				};

				if (target) {
					this._activate(target, target.parentNode, complete);
				} else {
					complete();
				}
			}
		}, {
			key: 'dispose',
			value: function dispose() {
				$.removeData(this._element, DATA_KEY);
				this._element = null;
			}

			// Private

		}, {
			key: '_activate',
			value: function _activate(element, container, callback) {
				var _this2 = this;

				var activeElements = void 0;
				if (container.nodeName === 'UL') {
					activeElements = $(container).find(Selector.ACTIVE_UL);
				} else {
					activeElements = $(container).children(Selector.ACTIVE);
				}

				var active = activeElements[0];
				var isTransitioning = callback && active && $(active).hasClass(ClassName.FADE);

				var complete = function complete() {
					return _this2._transitionComplete(element, active, callback);
				};

				if (active && isTransitioning) {
					var transitionDuration = _util2.default.getTransitionDurationFromElement(active);

					$(active).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
				} else {
					complete();
				}
			}
		}, {
			key: '_transitionComplete',
			value: function _transitionComplete(element, active, callback) {
				if (active) {
					$(active).removeClass(ClassName.SHOW + ' ' + ClassName.ACTIVE);

					var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

					if (dropdownChild) {
						$(dropdownChild).removeClass(ClassName.ACTIVE);
					}

					if (active.getAttribute('role') === 'tab') {
						active.setAttribute('aria-selected', false);
					}
				}

				$(element).addClass(ClassName.ACTIVE);
				if (element.getAttribute('role') === 'tab') {
					element.setAttribute('aria-selected', true);
				}

				_util2.default.reflow(element);
				$(element).addClass(ClassName.SHOW);

				if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
					var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
					if (dropdownElement) {
						$(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
					}

					element.setAttribute('aria-expanded', true);
				}

				if (callback) {
					callback();
				}
			}

			// Static

		}], [{
			key: '_jQueryInterface',
			value: function _jQueryInterface(config) {
				return this.each(function () {
					var $this = $(this);
					var data = $this.data(DATA_KEY);

					if (!data) {
						data = new Tab(this);
						$this.data(DATA_KEY, data);
					}

					if (typeof config === 'string') {
						if (typeof data[config] === 'undefined') {
							throw new TypeError('No method named "' + config + '"');
						}
						data[config]();
					}
				});
			}
		}, {
			key: 'VERSION',
			get: function get() {
				return VERSION;
			}
		}]);

		return Tab;
	}();

	/**
  * ------------------------------------------------------------------------
  * Data Api implementation
  * ------------------------------------------------------------------------
  */

	$(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
		event.preventDefault();
		Tab._jQueryInterface.call($(this), 'show');
	});

	/**
  * ------------------------------------------------------------------------
  * jQuery
  * ------------------------------------------------------------------------
  */

	$.fn[NAME] = Tab._jQueryInterface;
	$.fn[NAME].Constructor = Tab;
	$.fn[NAME].noConflict = function () {
		$.fn[NAME] = JQUERY_NO_CONFLICT;
		return Tab._jQueryInterface;
	};

	return Tab;
}($);

exports.default = Tab;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($) {
	/**
  * ------------------------------------------------------------------------
  * Private TransitionEnd Helpers
  * ------------------------------------------------------------------------
  */

	var TRANSITION_END = 'transitionend';
	var MAX_UID = 1000000;
	var MILLISECONDS_MULTIPLIER = 1000;

	// Shoutout AngusCroll (https://goo.gl/pxwQGp)
	function toType(obj) {
		return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
	}

	function getSpecialTransitionEndEvent() {
		return {
			bindType: TRANSITION_END,
			delegateType: TRANSITION_END,
			handle: function handle(event) {
				if ($(event.target).is(this)) {
					return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
				}
				return undefined; // eslint-disable-line no-undefined
			}
		};
	}

	function transitionEndEmulator(duration) {
		var _this = this;

		var called = false;

		$(this).one(Util.TRANSITION_END, function () {
			called = true;
		});

		setTimeout(function () {
			if (!called) {
				Util.triggerTransitionEnd(_this);
			}
		}, duration);

		return this;
	}

	function setTransitionEndSupport() {
		$.fn.emulateTransitionEnd = transitionEndEmulator;
		$.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	}

	/**
  * --------------------------------------------------------------------------
  * Public Util Api
  * --------------------------------------------------------------------------
  */

	var Util = {

		TRANSITION_END: 'bsTransitionEnd',

		getUID: function getUID(prefix) {
			do {
				// eslint-disable-next-line no-bitwise
				prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
			} while (document.getElementById(prefix));
			return prefix;
		},
		getSelectorFromElement: function getSelectorFromElement(element) {
			var selector = element.getAttribute('data-target');
			if (!selector || selector === '#') {
				selector = element.getAttribute('href') || '';
			}

			try {
				var $selector = $(document).find(selector);
				return $selector.length > 0 ? selector : null;
			} catch (err) {
				return null;
			}
		},
		getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
			if (!element) {
				return 0;
			}

			// Get transition-duration of the element
			var transitionDuration = $(element).css('transition-duration');
			var floatTransitionDuration = parseFloat(transitionDuration);

			// Return 0 if element or transition duration is not found
			if (!floatTransitionDuration) {
				return 0;
			}

			// If multiple durations are defined, take the first
			transitionDuration = transitionDuration.split(',')[0];

			return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
		},
		reflow: function reflow(element) {
			return element.offsetHeight;
		},
		triggerTransitionEnd: function triggerTransitionEnd(element) {
			$(element).trigger(TRANSITION_END);
		},


		// TODO: Remove in v5
		supportsTransitionEnd: function supportsTransitionEnd() {
			return Boolean(TRANSITION_END);
		},
		isElement: function isElement(obj) {
			return (obj[0] || obj).nodeType;
		},
		typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
			for (var property in configTypes) {
				if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
					var expectedTypes = configTypes[property];
					var value = config[property];
					var valueType = value && Util.isElement(value) ? 'element' : toType(value);

					if (!new RegExp(expectedTypes).test(valueType)) {
						throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
					}
				}
			}
		}
	};

	setTransitionEndSupport();

	return Util;
}($);

exports.default = Util;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    $('.media-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            tCounter: '<span class="mfp-counter">%curr% / %total%</span>', // markup of counter
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-link').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function beforeOpen() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    introAnimation: function introAnimation() {
        TweenLite.to(".js-intro-title", 1.2, { opacity: 1, y: "0", force3D: true, ease: Power1.easeIn });
        TweenLite.to(".js-intro-descr", 1.2, { opacity: 1, y: "0", force3D: true, ease: Power1.easeIn });

        TweenLite.to(".js-intro-btn", 1, { opacity: 1, y: "0", delay: 0.4, force3D: true, ease: Power1.easeIn });
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.fadeInContent = function () {
    $('.js-fade-in').each(function () {
        var $jsFadeIn = $(this);

        function fadeIn(jsFadeIn) {
            if (!$jsFadeIn.hasClass('is-ready') && $(window).scrollTop() + window.innerHeight > $jsFadeIn.offset().top + 100) {
                $jsFadeIn.addClass('is-ready');
                setTimeout(function () {
                    $jsFadeIn.removeClass('js-fade-in');
                }, 1000);
            }
        }

        fadeIn();

        $(window).scroll(function () {
            fadeIn();
        });
    });
};

$(window).ready(function () {
    setTimeout(function () {
        fadeInContent();
    }, 1000);
});

/***/ })
/******/ ]);