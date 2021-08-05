(this["webpackJsonphellobuild-react"] = this["webpackJsonphellobuild-react"] || []).push([[3],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-4392cd63.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-4392cd63.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-dd7e4b7b.js");



var attachComponent = function (e, t, n, r, o) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var a;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
      switch (i.label) {
        case 0:
          if (e) {
            return [2, e.attachViewToDom(t, n, o, r)];
          }

          if (typeof n !== "string" && !(n instanceof HTMLElement)) {
            throw new Error("framework delegate is missing");
          }

          a = typeof n === "string" ? t.ownerDocument && t.ownerDocument.createElement(n) : n;

          if (r) {
            r.forEach(function (e) {
              return a.classList.add(e);
            });
          }

          if (o) {
            Object.assign(a, o);
          }

          t.appendChild(a);
          return [4, new Promise(function (e) {
            return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__["c"])(a, e);
          })];

        case 1:
          i.sent();
          return [2, a];
      }
    });
  });
};

var detachComponent = function (e, t) {
  if (t) {
    if (e) {
      var n = t.parentElement;
      return e.removeViewFromDom(n, t);
    }

    t.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-app_8.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-app_8.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_app, ion_buttons, ion_content, ion_footer, ion_header, ion_router_outlet, ion_title, ion_toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_app", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_buttons", function() { return Buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_outlet", function() { return RouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_title", function() { return ToolbarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toolbar", function() { return Toolbar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm-es5/index-7a8b7a1c.js");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-63a97a32.js */ "./node_modules/@ionic/core/dist/esm-es5/ionic-global-63a97a32.js");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-ff3fc52f.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js");
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-dd7e4b7b.js");
/* harmony import */ var _cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cubic-bezier-eea9a7a9.js */ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-eea9a7a9.js");
/* harmony import */ var _framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-4392cd63.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-4392cd63.js");
/* harmony import */ var _index_931440b1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-931440b1.js */ "./node_modules/@ionic/core/dist/esm-es5/index-931440b1.js");








var appCss = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";

var App = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
  }

  t.prototype.componentDidLoad = function () {
    var t = this;
    {
      rIC(function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(t, void 0, void 0, function () {
          var t, o;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
            switch (e.label) {
              case 0:
                t = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["a"])(window, "hybrid");

                if (!_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("_testing")) {
                  __webpack_require__.e(/*! import() */ 51).then(__webpack_require__.bind(null, /*! ./tap-click-cc1ae2b2.js */ "./node_modules/@ionic/core/dist/esm-es5/tap-click-cc1ae2b2.js")).then(function (t) {
                    return t.startTapClick(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"]);
                  });
                }

                if (_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("statusTap", t)) {
                  __webpack_require__.e(/*! import() */ 49).then(__webpack_require__.bind(null, /*! ./status-tap-bdecfebf.js */ "./node_modules/@ionic/core/dist/esm-es5/status-tap-bdecfebf.js")).then(function (t) {
                    return t.startStatusTap();
                  });
                }

                if (_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("inputShims", needInputShims())) {
                  __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./input-shims-73f15161.js */ "./node_modules/@ionic/core/dist/esm-es5/input-shims-73f15161.js")).then(function (t) {
                    return t.startInputShims(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"]);
                  });
                }

                return [4, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./hardware-back-button-4a6b37fb.js */ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-4a6b37fb.js"))];

              case 1:
                o = e.sent();

                if (_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("hardwareBackButton", t)) {
                  o.startHardwareBackButton();
                } else {
                  o.blockHardwareBackButton();
                }

                if (typeof window !== "undefined") {
                  __webpack_require__.e(/*! import() */ 47).then(__webpack_require__.bind(null, /*! ./keyboard-5742b5da.js */ "./node_modules/@ionic/core/dist/esm-es5/keyboard-5742b5da.js")).then(function (t) {
                    return t.startKeyboardAssist(window);
                  });
                }

                __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./focus-visible-f4ad4f1a.js */ "./node_modules/@ionic/core/dist/esm-es5/focus-visible-f4ad4f1a.js")).then(function (t) {
                  return t.startFocusVisible();
                });
                return [2];
            }
          });
        });
      });
    }
  };

  t.prototype.render = function () {
    var t;
    var o = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      class: (t = {}, t[o] = true, t["ion-page"] = true, t["force-statusbar-padding"] = _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("_forceStatusbarPadding"), t)
    });
  };

  Object.defineProperty(t.prototype, "el", {
    get: function () {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return t;
}();

var needInputShims = function () {
  return Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["a"])(window, "ios") && Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["a"])(window, "mobile");
};

var rIC = function (t) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(t);
  } else {
    setTimeout(t, 32);
  }
};

App.style = appCss;
var buttonsIosCss = ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:24px;line-height:0.67}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}";
var buttonsMdCss = ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--box-shadow:none;margin-left:2px;margin-right:2px;height:32px;font-size:14px;font-weight:500}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:0.3em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=start]{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:0.4em;font-size:1.4em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:unset;-webkit-margin-start:0.4em;margin-inline-start:0.4em}}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";

var Buttons = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.collapse = false;
  }

  t.prototype.render = function () {
    var t;
    var o = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      class: (t = {}, t[o] = true, t["buttons-collapse"] = this.collapse, t)
    });
  };

  return t;
}();

Buttons.style = {
  ios: buttonsIosCss,
  md: buttonsMdCss
};
var contentCss = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';

var Content = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.ionScrollStart = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionScrollStart", 7);
    this.ionScroll = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionScroll", 7);
    this.ionScrollEnd = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionScrollEnd", 7);
    this.isScrolling = false;
    this.lastScroll = 0;
    this.queued = false;
    this.cTop = -1;
    this.cBottom = -1;
    this.isMainContent = true;
    this.detail = {
      scrollTop: 0,
      scrollLeft: 0,
      type: "scroll",
      event: undefined,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      velocityX: 0,
      velocityY: 0,
      deltaX: 0,
      deltaY: 0,
      currentTime: 0,
      data: undefined,
      isScrolling: true
    };
    this.fullscreen = false;
    this.scrollX = false;
    this.scrollY = true;
    this.scrollEvents = false;
  }

  t.prototype.connectedCallback = function () {
    this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null;
  };

  t.prototype.disconnectedCallback = function () {
    this.onScrollEnd();
  };

  t.prototype.onAppLoad = function () {
    this.resize();
  };

  t.prototype.onClick = function (t) {
    if (this.isScrolling) {
      t.preventDefault();
      t.stopPropagation();
    }
  };

  t.prototype.shouldForceOverscroll = function () {
    var t = this.forceOverscroll;
    var o = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    return t === undefined ? o === "ios" && Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["a"])("ios") : t;
  };

  t.prototype.resize = function () {
    var t = this;

    if (this.fullscreen) {
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
        return t.readDimensions();
      });
    } else if (this.cTop !== 0 || this.cBottom !== 0) {
      this.cTop = this.cBottom = 0;
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["j"])(this);
    }
  };

  t.prototype.readDimensions = function () {
    var t = getPageElement(this.el);
    var o = Math.max(this.el.offsetTop, 0);
    var e = Math.max(t.offsetHeight - o - this.el.offsetHeight, 0);
    var n = o !== this.cTop || e !== this.cBottom;

    if (n) {
      this.cTop = o;
      this.cBottom = e;
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["j"])(this);
    }
  };

  t.prototype.onScroll = function (t) {
    var o = this;
    var e = Date.now();
    var n = !this.isScrolling;
    this.lastScroll = e;

    if (n) {
      this.onScrollStart();
    }

    if (!this.queued && this.scrollEvents) {
      this.queued = true;
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function (e) {
        o.queued = false;
        o.detail.event = t;
        updateScrollDetail(o.detail, o.scrollEl, e, n);
        o.ionScroll.emit(o.detail);
      });
    }
  };

  t.prototype.getScrollElement = function () {
    return Promise.resolve(this.scrollEl);
  };

  t.prototype.scrollToTop = function (t) {
    if (t === void 0) {
      t = 0;
    }

    return this.scrollToPoint(undefined, 0, t);
  };

  t.prototype.scrollToBottom = function (t) {
    if (t === void 0) {
      t = 0;
    }

    var o = this.scrollEl.scrollHeight - this.scrollEl.clientHeight;
    return this.scrollToPoint(undefined, o, t);
  };

  t.prototype.scrollByPoint = function (t, o, e) {
    return this.scrollToPoint(t + this.scrollEl.scrollLeft, o + this.scrollEl.scrollTop, e);
  };

  t.prototype.scrollToPoint = function (t, o, e) {
    if (e === void 0) {
      e = 0;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var n, r, i, a, s, l, d, c, u;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (p) {
        n = this.scrollEl;

        if (e < 32) {
          if (o != null) {
            n.scrollTop = o;
          }

          if (t != null) {
            n.scrollLeft = t;
          }

          return [2];
        }

        i = 0;
        a = new Promise(function (t) {
          return r = t;
        });
        s = n.scrollTop;
        l = n.scrollLeft;
        d = o != null ? o - s : 0;
        c = t != null ? t - l : 0;

        u = function (t) {
          var o = Math.min(1, (t - i) / e) - 1;
          var a = Math.pow(o, 3) + 1;

          if (d !== 0) {
            n.scrollTop = Math.floor(a * d + s);
          }

          if (c !== 0) {
            n.scrollLeft = Math.floor(a * c + l);
          }

          if (a < 1) {
            requestAnimationFrame(u);
          } else {
            r();
          }
        };

        requestAnimationFrame(function (t) {
          i = t;
          u(t);
        });
        return [2, a];
      });
    });
  };

  t.prototype.onScrollStart = function () {
    var t = this;
    this.isScrolling = true;
    this.ionScrollStart.emit({
      isScrolling: true
    });

    if (this.watchDog) {
      clearInterval(this.watchDog);
    }

    this.watchDog = setInterval(function () {
      if (t.lastScroll < Date.now() - 120) {
        t.onScrollEnd();
      }
    }, 100);
  };

  t.prototype.onScrollEnd = function () {
    clearInterval(this.watchDog);
    this.watchDog = null;

    if (this.isScrolling) {
      this.isScrolling = false;
      this.ionScrollEnd.emit({
        isScrolling: false
      });
    }
  };

  t.prototype.render = function () {
    var t;
    var o = this;
    var e = this,
        n = e.isMainContent,
        r = e.scrollX,
        i = e.scrollY;
    var a = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    var s = this.shouldForceOverscroll();
    var l = n ? "main" : "div";
    var d = a === "ios" && _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("experimentalTransitionShadow", true);
    this.resize();
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, (t = {}, t[a] = true, t["content-sizing"] = Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["h"])("ion-popover", this.el), t["overscroll"] = s, t)),
      style: {
        "--offset-top": this.cTop + "px",
        "--offset-bottom": this.cBottom + "px"
      }
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      id: "background-content",
      part: "background"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(l, {
      class: {
        "inner-scroll": true,
        "scroll-x": r,
        "scroll-y": i,
        overscroll: (r || i) && s
      },
      ref: function (t) {
        return o.scrollEl = t;
      },
      onScroll: this.scrollEvents ? function (t) {
        return o.onScroll(t);
      } : undefined,
      part: "scroll"
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), d ? Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "transition-effect"
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "transition-cover"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "transition-shadow"
    })) : null, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", {
      name: "fixed"
    }));
  };

  Object.defineProperty(t.prototype, "el", {
    get: function () {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return t;
}();

var getParentElement = function (t) {
  if (t.parentElement) {
    return t.parentElement;
  }

  if (t.parentNode && t.parentNode.host) {
    return t.parentNode.host;
  }

  return null;
};

var getPageElement = function (t) {
  var o = t.closest("ion-tabs");

  if (o) {
    return o;
  }

  var e = t.closest("ion-app,ion-page,.ion-page,page-inner");

  if (e) {
    return e;
  }

  return getParentElement(t);
};

var updateScrollDetail = function (t, o, e, n) {
  var r = t.currentX;
  var i = t.currentY;
  var a = t.currentTime;
  var s = o.scrollLeft;
  var l = o.scrollTop;
  var d = e - a;

  if (n) {
    t.startTime = e;
    t.startX = s;
    t.startY = l;
    t.velocityX = t.velocityY = 0;
  }

  t.currentTime = e;
  t.currentX = t.scrollLeft = s;
  t.currentY = t.scrollTop = l;
  t.deltaX = s - t.startX;
  t.deltaY = l - t.startY;

  if (d > 0 && d < 100) {
    var c = (s - r) / d;
    var u = (l - i) / d;
    t.velocityX = c * .7 + t.velocityX * .3;
    t.velocityY = u * .7 + t.velocityY * .3;
  }
};

Content.style = contentCss;
var footerIosCss = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}";
var footerMdCss = 'ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md::before{left:0;top:-2px;bottom:auto;background-position:left 0 top 0;position:absolute;width:100%;height:2px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==");background-repeat:repeat-x;content:""}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{left:unset;right:unset;right:0}[dir=rtl] .footer-md::before,:host-context([dir=rtl]) .footer-md::before{background-position:right 0 top 0}.footer-md.ion-no-border::before{display:none}';

var Footer = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.translucent = false;
  }

  t.prototype.render = function () {
    var t;
    var o = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    var e = this.translucent;
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      role: "contentinfo",
      class: (t = {}, t[o] = true, t["footer-" + o] = true, t["footer-translucent"] = e, t["footer-translucent-" + o] = e, t)
    }, o === "ios" && e && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "footer-background"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null));
  };

  return t;
}();

Footer.style = {
  ios: footerIosCss,
  md: footerMdCss
};
var TRANSITION = "all 0.2s ease-in-out";

var cloneElement = function (t) {
  var o = document.querySelector(t + ".ion-cloned-element");

  if (o !== null) {
    return o;
  }

  var e = document.createElement(t);
  e.classList.add("ion-cloned-element");
  e.style.setProperty("display", "none");
  document.body.appendChild(e);
  return e;
};

var createHeaderIndex = function (t) {
  if (!t) {
    return;
  }

  var o = t.querySelectorAll("ion-toolbar");
  return {
    el: t,
    toolbars: Array.from(o).map(function (t) {
      var o = t.querySelector("ion-title");
      return {
        el: t,
        background: t.shadowRoot.querySelector(".toolbar-background"),
        ionTitleEl: o,
        innerTitleEl: o ? o.shadowRoot.querySelector(".toolbar-title") : null,
        ionButtonsEl: Array.from(t.querySelectorAll("ion-buttons")) || []
      };
    }) || []
  };
};

var handleContentScroll = function (t, o, e) {
  Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["f"])(function () {
    var n = t.scrollTop;
    var r = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_4__["j"])(1, 1 + -n / 500, 1.1);
    var i = e.querySelector("ion-refresher.refresher-native");

    if (i === null) {
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])(function () {
        scaleLargeTitles(o.toolbars, r);
      });
    }
  });
};

var setToolbarBackgroundOpacity = function (t, o) {
  if (o === undefined) {
    t.background.style.removeProperty("--opacity");
  } else {
    t.background.style.setProperty("--opacity", o.toString());
  }
};

var handleToolbarBorderIntersection = function (t, o, e) {
  if (!t[0].isIntersecting) {
    return;
  }

  var n = t[0].intersectionRatio > .9 || e <= 0 ? 0 : (1 - t[0].intersectionRatio) * 100 / 75;
  o.toolbars.forEach(function (t) {
    setToolbarBackgroundOpacity(t, n === 1 ? undefined : n);
  });
};

var handleToolbarIntersection = function (t, o, e, n) {
  Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])(function () {
    var r = n.scrollTop;
    handleToolbarBorderIntersection(t, o, r);
    var i = t[0];
    var a = i.intersectionRect;
    var s = a.width * a.height;
    var l = i.rootBounds.width * i.rootBounds.height;
    var d = s === 0 && l === 0;
    var c = Math.abs(a.left - i.boundingClientRect.left);
    var u = Math.abs(a.right - i.boundingClientRect.right);
    var p = s > 0 && (c >= 5 || u >= 5);

    if (d || p) {
      return;
    }

    if (i.isIntersecting) {
      setHeaderActive(o, false);
      setHeaderActive(e);
    } else {
      var g = a.x === 0 && a.y === 0 || a.width !== 0 && a.height !== 0;

      if (g && r > 0) {
        setHeaderActive(o);
        setHeaderActive(e, false);
        setToolbarBackgroundOpacity(o.toolbars[0]);
      }
    }
  });
};

var setHeaderActive = function (t, o) {
  if (o === void 0) {
    o = true;
  }

  if (o) {
    t.el.classList.remove("header-collapse-condense-inactive");
  } else {
    t.el.classList.add("header-collapse-condense-inactive");
  }
};

var scaleLargeTitles = function (t, o, e) {
  if (t === void 0) {
    t = [];
  }

  if (o === void 0) {
    o = 1;
  }

  if (e === void 0) {
    e = false;
  }

  t.forEach(function (t) {
    var n = t.ionTitleEl;
    var r = t.innerTitleEl;

    if (!n || n.size !== "large") {
      return;
    }

    r.style.transition = e ? TRANSITION : "";
    r.style.transform = "scale3d(" + o + ", " + o + ", 1)";
  });
};

var headerIosCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}";
var headerMdCss = 'ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:""}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}';

var Header = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.collapsibleHeaderInitialized = false;
    this.translucent = false;
  }

  t.prototype.componentDidLoad = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.checkCollapsibleHeader()];

          case 1:
            t.sent();
            return [2];
        }
      });
    });
  };

  t.prototype.componentDidUpdate = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.checkCollapsibleHeader()];

          case 1:
            t.sent();
            return [2];
        }
      });
    });
  };

  t.prototype.disconnectedCallback = function () {
    this.destroyCollapsibleHeader();
  };

  t.prototype.checkCollapsibleHeader = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var t, o, e, n;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (r) {
        switch (r.label) {
          case 0:
            t = this.collapse === "condense";
            o = t && Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this) === "ios" ? t : false;
            if (!(!o && this.collapsibleHeaderInitialized)) return [3, 1];
            this.destroyCollapsibleHeader();
            return [3, 3];

          case 1:
            if (!(o && !this.collapsibleHeaderInitialized)) return [3, 3];
            e = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
            n = e ? e.querySelector("ion-content") : null;
            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])(function () {
              var t = cloneElement("ion-title");
              t.size = "large";
              cloneElement("ion-back-button");
            });
            return [4, this.setupCollapsibleHeader(n, e)];

          case 2:
            r.sent();
            r.label = 3;

          case 3:
            return [2];
        }
      });
    });
  };

  t.prototype.destroyCollapsibleHeader = function () {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }

    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }

    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove("header-collapse-main");
      this.collapsibleMainHeader = undefined;
    }
  };

  t.prototype.setupCollapsibleHeader = function (t, o) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var e, n, r, i, a;
      var s = this;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (l) {
        switch (l.label) {
          case 0:
            if (!t || !o) {
              console.error("ion-header requires a content to collapse, make sure there is an ion-content.");
              return [2];
            }

            if (typeof IntersectionObserver === "undefined") {
              return [2];
            }

            e = this;
            return [4, t.getScrollElement()];

          case 1:
            e.scrollEl = l.sent();
            n = o.querySelectorAll("ion-header");
            this.collapsibleMainHeader = Array.from(n).find(function (t) {
              return t.collapse !== "condense";
            });

            if (!this.collapsibleMainHeader) {
              return [2];
            }

            r = createHeaderIndex(this.collapsibleMainHeader);
            i = createHeaderIndex(this.el);

            if (!r || !i) {
              return [2];
            }

            setHeaderActive(r, false);
            r.toolbars.forEach(function (t) {
              setToolbarBackgroundOpacity(t, 0);
            });

            a = function (t) {
              handleToolbarIntersection(t, r, i, s.scrollEl);
            };

            this.intersectionObserver = new IntersectionObserver(a, {
              root: t,
              threshold: [.25, .3, .4, .5, .6, .7, .8, .9, 1]
            });
            this.intersectionObserver.observe(i.toolbars[i.toolbars.length - 1].el);

            this.contentScrollCallback = function () {
              handleContentScroll(s.scrollEl, i, t);
            };

            this.scrollEl.addEventListener("scroll", this.contentScrollCallback);
            Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["c"])(function () {
              if (s.collapsibleMainHeader !== undefined) {
                s.collapsibleMainHeader.classList.add("header-collapse-main");
              }
            });
            this.collapsibleHeaderInitialized = true;
            return [2];
        }
      });
    });
  };

  t.prototype.render = function () {
    var t;
    var o = this.translucent;
    var e = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    var n = this.collapse || "none";
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      role: "banner",
      class: (t = {}, t[e] = true, t["header-" + e] = true, t["header-translucent"] = this.translucent, t["header-collapse-" + n] = true, t["header-translucent-" + e] = this.translucent, t)
    }, e === "ios" && o && Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "header-background"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null));
  };

  Object.defineProperty(t.prototype, "el", {
    get: function () {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return t;
}();

Header.style = {
  ios: headerIosCss,
  md: headerMdCss
};
var routeOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";

var RouterOutlet = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.ionNavWillLoad = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionNavWillChange", 3);
    this.ionNavDidChange = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionNavDidChange", 3);
    this.gestureOrAnimationInProgress = false;
    this.mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    this.animated = true;
  }

  t.prototype.swipeHandlerChanged = function () {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== undefined);
    }
  };

  t.prototype.connectedCallback = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var t, o;
      var e = this;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (n) {
        switch (n.label) {
          case 0:
            t = function () {
              e.gestureOrAnimationInProgress = true;

              if (e.swipeHandler) {
                e.swipeHandler.onStart();
              }
            };

            o = this;
            return [4, __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./swipe-back-ee838cf8.js */ "./node_modules/@ionic/core/dist/esm-es5/swipe-back-ee838cf8.js"))];

          case 1:
            o.gesture = n.sent().createSwipeBackGesture(this.el, function () {
              return !e.gestureOrAnimationInProgress && !!e.swipeHandler && e.swipeHandler.canStart();
            }, function () {
              return t();
            }, function (t) {
              return e.ani && e.ani.progressStep(t);
            }, function (t, o, n) {
              if (e.ani) {
                e.ani.onFinish(function () {
                  e.gestureOrAnimationInProgress = false;

                  if (e.swipeHandler) {
                    e.swipeHandler.onEnd(t);
                  }
                }, {
                  oneTimeCallback: true
                });
                var r = t ? -.001 : .001;

                if (!t) {
                  e.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");
                  r += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_5__["g"])([0, 0], [1, 0], [.68, .28], [1, 1], o)[0];
                } else {
                  r += Object(_cubic_bezier_eea9a7a9_js__WEBPACK_IMPORTED_MODULE_5__["g"])([0, 0], [.32, .72], [0, 1], [1, 1], o)[0];
                }

                e.ani.progressEnd(t ? 1 : 0, r, n);
              } else {
                e.gestureOrAnimationInProgress = false;
              }
            });
            this.swipeHandlerChanged();
            return [2];
        }
      });
    });
  };

  t.prototype.componentWillLoad = function () {
    this.ionNavWillLoad.emit();
  };

  t.prototype.disconnectedCallback = function () {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  };

  t.prototype.commit = function (t, o, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var n, r, i;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (a) {
        switch (a.label) {
          case 0:
            return [4, this.lock()];

          case 1:
            n = a.sent();
            r = false;
            a.label = 2;

          case 2:
            a.trys.push([2, 4,, 5]);
            return [4, this.transition(t, o, e)];

          case 3:
            r = a.sent();
            return [3, 5];

          case 4:
            i = a.sent();
            console.error(i);
            return [3, 5];

          case 5:
            n();
            return [2, r];
        }
      });
    });
  };

  t.prototype.setRouteId = function (t, o, e, n) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var r;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, this.setRoot(t, o, {
              duration: e === "root" ? 0 : undefined,
              direction: e === "back" ? "back" : "forward",
              animationBuilder: n
            })];

          case 1:
            r = i.sent();
            return [2, {
              changed: r,
              element: this.activeEl
            }];
        }
      });
    });
  };

  t.prototype.getRouteId = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var t;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (o) {
        t = this.activeEl;
        return [2, t ? {
          id: t.tagName,
          element: t
        } : undefined];
      });
    });
  };

  t.prototype.setRoot = function (t, o, e) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var n, r;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (i) {
        switch (i.label) {
          case 0:
            if (this.activeComponent === t) {
              return [2, false];
            }

            n = this.activeEl;
            return [4, Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.delegate, this.el, t, ["ion-page", "ion-page-invisible"], o)];

          case 1:
            r = i.sent();
            this.activeComponent = t;
            this.activeEl = r;
            return [4, this.commit(r, n, e)];

          case 2:
            i.sent();
            return [4, Object(_framework_delegate_4392cd63_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.delegate, n)];

          case 3:
            i.sent();
            return [2, true];
        }
      });
    });
  };

  t.prototype.transition = function (t, o, e) {
    if (e === void 0) {
      e = {};
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var n, r, i, a, s;
      var l = this;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (d) {
        switch (d.label) {
          case 0:
            if (o === t) {
              return [2, false];
            }

            this.ionNavWillChange.emit();
            n = this, r = n.el, i = n.mode;
            a = this.animated && _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].getBoolean("animated", true);
            s = this.animation || e.animationBuilder || _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["c"].get("navAnimation");
            return [4, Object(_index_931440b1_js__WEBPACK_IMPORTED_MODULE_7__["t"])(Object.assign(Object.assign({
              mode: i,
              animated: a,
              enteringEl: t,
              leavingEl: o,
              baseEl: r,
              progressCallback: e.progressAnimation ? function (t) {
                if (t !== undefined && !l.gestureOrAnimationInProgress) {
                  l.gestureOrAnimationInProgress = true;
                  t.onFinish(function () {
                    l.gestureOrAnimationInProgress = false;

                    if (l.swipeHandler) {
                      l.swipeHandler.onEnd(false);
                    }
                  }, {
                    oneTimeCallback: true
                  });
                  t.progressEnd(0, 0, 0);
                } else {
                  l.ani = t;
                }
              } : undefined
            }, e), {
              animationBuilder: s
            }))];

          case 1:
            d.sent();
            this.ionNavDidChange.emit();
            return [2, true];
        }
      });
    });
  };

  t.prototype.lock = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var t, o;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (e) {
        switch (e.label) {
          case 0:
            t = this.waitPromise;
            this.waitPromise = new Promise(function (t) {
              return o = t;
            });
            if (!(t !== undefined)) return [3, 2];
            return [4, t];

          case 1:
            e.sent();
            e.label = 2;

          case 2:
            return [2, o];
        }
      });
    });
  };

  t.prototype.render = function () {
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null);
  };

  Object.defineProperty(t.prototype, "el", {
    get: function () {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(t, "watchers", {
    get: function () {
      return {
        swipeHandler: ["swipeHandlerChanged"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return t;
}();

RouterOutlet.style = routeOutletCss;
var titleIosCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}";
var titleMdCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}";

var ToolbarTitle = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.ionStyle = Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this, "ionStyle", 7);
  }

  t.prototype.sizeChanged = function () {
    this.emitStyle();
  };

  t.prototype.connectedCallback = function () {
    this.emitStyle();
  };

  t.prototype.emitStyle = function () {
    var t;
    var o = this.getSize();
    this.ionStyle.emit((t = {}, t["title-" + o] = true, t));
  };

  t.prototype.getSize = function () {
    return this.size !== undefined ? this.size : "default";
  };

  t.prototype.render = function () {
    var t;
    var o = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    var e = this.getSize();
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, (t = {}, t[o] = true, t["title-" + e] = true, t["title-rtl"] = document.dir === "rtl", t))
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "toolbar-title"
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
  };

  Object.defineProperty(t.prototype, "el", {
    get: function () {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(t, "watchers", {
    get: function () {
      return {
        size: ["sizeChanged"]
      };
    },
    enumerable: false,
    configurable: true
  });
  return t;
}();

ToolbarTitle.style = {
  ios: titleIosCss,
  md: titleMdCss
};
var toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}";
var toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";

var Toolbar = function () {
  function t(t) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, t);
    this.childrenStyles = new Map();
  }

  t.prototype.componentWillLoad = function () {
    var t = Array.from(this.el.querySelectorAll("ion-buttons"));
    var o = t.find(function (t) {
      return t.slot === "start";
    });

    if (o) {
      o.classList.add("buttons-first-slot");
    }

    var e = t.reverse();
    var n = e.find(function (t) {
      return t.slot === "end";
    }) || e.find(function (t) {
      return t.slot === "primary";
    }) || e.find(function (t) {
      return t.slot === "secondary";
    });

    if (n) {
      n.classList.add("buttons-last-slot");
    }
  };

  t.prototype.childrenStyle = function (t) {
    t.stopPropagation();
    var o = t.target.tagName;
    var e = t.detail;
    var n = {};
    var r = this.childrenStyles.get(o) || {};
    var i = false;
    Object.keys(e).forEach(function (t) {
      var o = "toolbar-" + t;
      var a = e[t];

      if (a !== r[o]) {
        i = true;
      }

      if (a) {
        n[o] = true;
      }
    });

    if (i) {
      this.childrenStyles.set(o, n);
      Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["j"])(this);
    }
  };

  t.prototype.render = function () {
    var t;
    var o = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this);
    var e = {};
    this.childrenStyles.forEach(function (t) {
      Object.assign(e, t);
    });
    return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["H"], {
      class: Object.assign(Object.assign({}, e), Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color, (t = {}, t[o] = true, t["in-toolbar"] = Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_3__["h"])("ion-toolbar", this.el), t)))
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "toolbar-background"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "toolbar-container"
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", {
      name: "start"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", {
      name: "secondary"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", {
      class: "toolbar-content"
    }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", {
      name: "primary"
    }), Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", {
      name: "end"
    })));
  };

  Object.defineProperty(t.prototype, "el", {
    get: function () {
      return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this);
    },
    enumerable: false,
    configurable: true
  });
  return t;
}();

Toolbar.style = {
  ios: toolbarIosCss,
  md: toolbarMdCss
};


/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-ff3fc52f.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var hostContext = function (r, t) {
  return t.closest(r) !== null;
};

var createColorClasses = function (r, t) {
  var e;
  return typeof r === "string" && r.length > 0 ? Object.assign((e = {
    "ion-color": true
  }, e["ion-color-" + r] = true, e), t) : t;
};

var getClassList = function (r) {
  if (r !== undefined) {
    var t = Array.isArray(r) ? r : r.split(" ");
    return t.filter(function (r) {
      return r != null;
    }).map(function (r) {
      return r.trim();
    }).filter(function (r) {
      return r !== "";
    });
  }

  return [];
};

var getClassMap = function (r) {
  var t = {};
  getClassList(r).forEach(function (r) {
    return t[r] = true;
  });
  return t;
};

var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

var openURL = function (r, t, e, n) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var o;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (a) {
      if (r != null && r[0] !== "#" && !SCHEME.test(r)) {
        o = document.querySelector("ion-router");

        if (o) {
          if (t != null) {
            t.preventDefault();
          }

          return [2, o.push(r, e, n)];
        }
      }

      return [2, false];
    });
  });
};



/***/ })

}]);
//# sourceMappingURL=3.chunk.js.map