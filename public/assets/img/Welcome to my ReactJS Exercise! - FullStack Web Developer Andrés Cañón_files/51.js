(this["webpackJsonphellobuild-react"] = this["webpackJsonphellobuild-react"] || []).push([[51],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/tap-click-cc1ae2b2.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/tap-click-cc1ae2b2.js ***!
  \*********************************************************************/
/*! exports provided: startTapClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTapClick", function() { return startTapClick; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-dd7e4b7b.js");


var startTapClick = function (e) {
  var t = -MOUSE_WAIT * 10;
  var n = 0;
  var r;
  var a;
  var i;
  var o;
  var u = e.getBoolean("animated", true) && e.getBoolean("rippleEffect", true);
  var s = new WeakMap();

  var f = function () {
    return r !== undefined && r.parentElement !== null;
  };

  var c = function (e) {
    t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e);
    T(e);
  };

  var d = function (e) {
    t = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e);
    A(e);
  };

  var v = function (e) {
    var n = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e) - MOUSE_WAIT;

    if (t < n) {
      T(e);
    }
  };

  var l = function (e) {
    var n = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["o"])(e) - MOUSE_WAIT;

    if (t < n) {
      A(e);
    }
  };

  var E = function () {
    clearTimeout(o);
    o = undefined;

    if (a) {
      m(false);
      a = undefined;
    }
  };

  var T = function (e) {
    if (a || f()) {
      return;
    }

    r = undefined;
    p(getActivatableTarget(e), e);
  };

  var A = function (e) {
    p(undefined, e);
  };

  var p = function (e, t) {
    if (e && e === a) {
      return;
    }

    clearTimeout(o);
    o = undefined;
    var n = Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["p"])(t),
        r = n.x,
        i = n.y;

    if (a) {
      if (s.has(a)) {
        throw new Error("internal error");
      }

      if (!a.classList.contains(ACTIVATED)) {
        D(a, r, i);
      }

      m(true);
    }

    if (e) {
      var u = s.get(e);

      if (u) {
        clearTimeout(u);
        s.delete(e);
      }

      var f = isInstant(e) ? 0 : ADD_ACTIVATED_DEFERS;
      e.classList.remove(ACTIVATED);
      o = setTimeout(function () {
        D(e, r, i);
        o = undefined;
      }, f);
    }

    a = e;
  };

  var D = function (e, t, r) {
    n = Date.now();
    e.classList.add(ACTIVATED);
    var a = u && getRippleEffect(e);

    if (a && a.addRipple) {
      L();
      i = a.addRipple(t, r);
    }
  };

  var L = function () {
    if (i !== undefined) {
      i.then(function (e) {
        return e();
      });
      i = undefined;
    }
  };

  var m = function (e) {
    L();
    var t = a;

    if (!t) {
      return;
    }

    var r = CLEAR_STATE_DEFERS - Date.now() + n;

    if (e && r > 0 && !isInstant(t)) {
      var i = setTimeout(function () {
        t.classList.remove(ACTIVATED);
        s.delete(t);
      }, CLEAR_STATE_DEFERS);
      s.set(t, i);
    } else {
      t.classList.remove(ACTIVATED);
    }
  };

  var S = document;
  S.addEventListener("ionScrollStart", function (e) {
    r = e.target;
    E();
  });
  S.addEventListener("ionScrollEnd", function () {
    r = undefined;
  });
  S.addEventListener("ionGestureCaptured", E);
  S.addEventListener("touchstart", c, true);
  S.addEventListener("touchcancel", d, true);
  S.addEventListener("touchend", d, true);
  S.addEventListener("mousedown", v, true);
  S.addEventListener("mouseup", l, true);
};

var getActivatableTarget = function (e) {
  if (e.composedPath) {
    var t = e.composedPath();

    for (var n = 0; n < t.length - 2; n++) {
      var r = t[n];

      if (r.classList && r.classList.contains("ion-activatable")) {
        return r;
      }
    }
  } else {
    return e.target.closest(".ion-activatable");
  }
};

var isInstant = function (e) {
  return e.classList.contains("ion-activatable-instant");
};

var getRippleEffect = function (e) {
  if (e.shadowRoot) {
    var t = e.shadowRoot.querySelector("ion-ripple-effect");

    if (t) {
      return t;
    }
  }

  return e.querySelector("ion-ripple-effect");
};

var ACTIVATED = "ion-activated";
var ADD_ACTIVATED_DEFERS = 200;
var CLEAR_STATE_DEFERS = 200;
var MOUSE_WAIT = 2500;


/***/ })

}]);
//# sourceMappingURL=51.chunk.js.map