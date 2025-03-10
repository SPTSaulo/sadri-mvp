"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[441],{

/***/ 441:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-modal.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_modal: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-5cc724f3.js */ 909);
/* harmony import */ var _framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework-delegate-63d1a679.js */ 8621);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _lock_controller_316928be_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock-controller-316928be.js */ 7838);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 4929);
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 8438);
/* harmony import */ var _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overlays-e7b9d6d9.js */ 3617);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _index_3ad7f18b_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-3ad7f18b.js */ 3604);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/* harmony import */ var _keyboard_52278bd7_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keyboard-52278bd7.js */ 1622);
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 9986);
/* harmony import */ var _cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cubic-bezier-fe2083dc.js */ 3351);
/* harmony import */ var _index_39782642_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index-39782642.js */ 8607);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index-a5d50daf.js */ 8476);
/* harmony import */ var _hardware_back_button_06ef3c3e_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hardware-back-button-06ef3c3e.js */ 7192);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 1970);
/* harmony import */ var _keyboard_73175e24_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./keyboard-73175e24.js */ 4379);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



















var Style;
(function (Style) {
  Style["Dark"] = "DARK";
  Style["Light"] = "LIGHT";
  Style["Default"] = "DEFAULT";
})(Style || (Style = {}));
const StatusBar = {
  getEngine() {
    const capacitor = (0,_capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_7__.g)();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('StatusBar')) {
      return capacitor.Plugins.StatusBar;
    }
    return undefined;
  },
  setStyle(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.setStyle(options);
  },
  getStyle: function () {
    var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const engine = this.getEngine();
      if (!engine) {
        return Style.Default;
      }
      const {
        style
      } = yield engine.getInfo();
      return style;
    });
    return function getStyle() {
      return _ref.apply(this, arguments);
    };
  }()
};

/**
 * Use y = mx + b to
 * figure out the backdrop value
 * at a particular x coordinate. This
 * is useful when the backdrop does
 * not begin to fade in until after
 * the 0 breakpoint.
 */
const getBackdropValueForSheet = (x, backdropBreakpoint) => {
  /**
   * We will use these points:
   * (backdropBreakpoint, 0)
   * (maxBreakpoint, 1)
   * We know that at the beginning breakpoint,
   * the backdrop will be hidden. We also
   * know that at the maxBreakpoint, the backdrop
   * must be fully visible. maxBreakpoint should
   * always be 1 even if the maximum value
   * of the breakpoints array is not 1 since
   * the animation runs from a progress of 0
   * to a progress of 1.
   * m = (y2 - y1) / (x2 - x1)
   *
   * This is simplified from:
   * m = (1 - 0) / (maxBreakpoint - backdropBreakpoint)
   *
   * If the backdropBreakpoint is 1, we return 0 as the
   * backdrop is completely hidden.
   *
   */
  if (backdropBreakpoint === 1) {
    return 0;
  }
  const slope = 1 / (1 - backdropBreakpoint);
  /**
   * From here, compute b which is
   * the backdrop opacity if the offset
   * is 0. If the backdrop does not
   * begin to fade in until after the
   * 0 breakpoint, this b value will be
   * negative. This is fine as we never pass
   * b directly into the animation keyframes.
   * b = y - mx
   * Use a known point: (backdropBreakpoint, 0)
   * This is simplified from:
   * b = 0 - (backdropBreakpoint * slope)
   */
  const b = -(backdropBreakpoint * slope);
  /**
   * Finally, we can now determine the
   * backdrop offset given an arbitrary
   * gesture offset.
   */
  return x * slope + b;
};
/**
 * The tablet/desktop card modal activates
 * when the window width is >= 768.
 * At that point, the presenting element
 * is not transformed, so we do not need to
 * adjust the status bar color.
 *
 */
const setCardStatusBarDark = () => {
  if (!_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_16__.w || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_16__.w.innerWidth >= 768) {
    return;
  }
  StatusBar.setStyle({
    style: Style.Dark
  });
};
const setCardStatusBarDefault = (defaultStyle = Style.Default) => {
  if (!_index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_16__.w || _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_16__.w.innerWidth >= 768) {
    return;
  }
  StatusBar.setStyle({
    style: defaultStyle
  });
};
const handleCanDismiss = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el, animation) {
    /**
     * If canDismiss is not a function
     * then we can return early. If canDismiss is `true`,
     * then canDismissBlocksGesture is `false` as canDismiss
     * will never interrupt the gesture. As a result,
     * this code block is never reached. If canDismiss is `false`,
     * then we never dismiss.
     */
    if (typeof el.canDismiss !== 'function') {
      return;
    }
    /**
     * Run the canDismiss callback.
     * If the function returns `true`,
     * then we can proceed with dismiss.
     */
    const shouldDismiss = yield el.canDismiss(undefined, _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.G);
    if (!shouldDismiss) {
      return;
    }
    /**
     * If canDismiss resolved after the snap
     * back animation finished, we can
     * dismiss immediately.
     *
     * If canDismiss resolved before the snap
     * back animation finished, we need to
     * wait until the snap back animation is
     * done before dismissing.
     */
    if (animation.isRunning()) {
      animation.onFinish(() => {
        el.dismiss(undefined, 'handler');
      }, {
        oneTimeCallback: true
      });
    } else {
      el.dismiss(undefined, 'handler');
    }
  });
  return function handleCanDismiss(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * This function lets us simulate a realistic spring-like animation
 * when swiping down on the modal.
 * There are two forces that we need to use to compute the spring physics:
 *
 * 1. Stiffness, k: This is a measure of resistance applied a spring.
 * 2. Dampening, c: This value has the effect of reducing or preventing oscillation.
 *
 * Using these two values, we can calculate the Spring Force and the Dampening Force
 * to compute the total force applied to a spring.
 *
 * Spring Force: This force pulls a spring back into its equilibrium position.
 * Hooke's Law tells us that that spring force (FS) = kX.
 * k is the stiffness of a spring, and X is the displacement of the spring from its
 * equilibrium position. In this case, it is the amount by which the free end
 * of a spring was displaced (stretched/pushed) from its "relaxed" position.
 *
 * Dampening Force: This force slows down motion. Without it, a spring would oscillate forever.
 * The dampening force, FD, can be found via this formula: FD = -cv
 * where c the dampening value and v is velocity.
 *
 * Therefore, the resulting force that is exerted on the block is:
 * F = FS + FD = -kX - cv
 *
 * Newton's 2nd Law tells us that F = ma:
 * ma = -kX - cv.
 *
 * For Ionic's purposes, we can assume that m = 1:
 * a = -kX - cv
 *
 * Imagine a block attached to the end of a spring. At equilibrium
 * the block is at position x = 1.
 * Pressing on the block moves it to position x = 0;
 * So, to calculate the displacement, we need to take the
 * current position and subtract the previous position from it.
 * X = x - x0 = 0 - 1 = -1.
 *
 * For Ionic's purposes, we are only pushing on the spring modal
 * so we have a max position of 1.
 * As a result, we can expand displacement to this formula:
 * X = x - 1
 *
 * a = -k(x - 1) - cv
 *
 * We can represent the motion of something as a function of time: f(t) = x.
 * The derivative of position gives us the velocity: f'(t)
 * The derivative of the velocity gives us the acceleration: f''(t)
 *
 * We can substitute the formula above with these values:
 *
 * f"(t) = -k * (f(t) - 1) - c * f'(t)
 *
 * This is called a differential equation.
 *
 * We know that at t = 0, we are at x = 0 because the modal does not move: f(0) = 0
 * This means our velocity is also zero: f'(0) = 0.
 *
 * We can cheat a bit and plug the formula into Wolfram Alpha.
 * However, we need to pick stiffness and dampening values:
 * k = 0.57
 * c = 15
 *
 * I picked these as they are fairly close to native iOS's spring effect
 * with the modal.
 *
 * What we plug in is this: f(0) = 0; f'(0) = 0; f''(t) = -0.57(f(t) - 1) - 15f'(t)
 *
 * The result is a formula that lets us calculate the acceleration
 * for a given time t.
 * Note: This is the approximate form of the solution. Wolfram Alpha will
 * give you a complex differential equation too.
 */
const calculateSpringStep = t => {
  return 0.00255275 * 2.71828 ** (-14.9619 * t) - 1.00255 * 2.71828 ** (-0.0380968 * t) + 1;
};

// Defaults for the card swipe animation
const SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.915
};
const createSwipeToCloseGesture = (el, animation, statusBarStyle, onDismiss) => {
  /**
   * The step value at which a card modal
   * is eligible for dismissing via gesture.
   */
  const DISMISS_THRESHOLD = 0.5;
  const height = el.offsetHeight;
  let isOpen = false;
  let canDismissBlocksGesture = false;
  let contentEl = null;
  let scrollEl = null;
  const canDismissMaxStep = 0.2;
  let initialScrollY = true;
  let lastStep = 0;
  const getScrollY = () => {
    if (contentEl && (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.i)(contentEl)) {
      return contentEl.scrollY;
      /**
       * Custom scroll containers are intended to be
       * used with virtual scrolling, so we assume
       * there is scrolling in this case.
       */
    } else {
      return true;
    }
  };
  const canStart = detail => {
    const target = detail.event.target;
    if (target === null || !target.closest) {
      return true;
    }
    /**
     * If we are swiping on the content,
     * swiping should only be possible if
     * the content is scrolled all the way
     * to the top so that we do not interfere
     * with scrolling.
     *
     * We cannot assume that the `ion-content`
     * target will remain consistent between
     * swipes. For example, when using
     * ion-nav within a card modal it is
     * possible to swipe, push a view, and then
     * swipe again. The target content will not
     * be the same between swipes.
     */
    contentEl = (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.f)(target);
    if (contentEl) {
      /**
       * The card should never swipe to close
       * on the content with a refresher.
       * Note: We cannot solve this by making the
       * swipeToClose gesture have a higher priority
       * than the refresher gesture as the iOS native
       * refresh gesture uses a scroll listener in
       * addition to a gesture.
       *
       * Note: Do not use getScrollElement here
       * because we need this to be a synchronous
       * operation, and getScrollElement is
       * asynchronous.
       */
      if ((0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.i)(contentEl)) {
        const root = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(contentEl);
        scrollEl = root.querySelector('.inner-scroll');
      } else {
        scrollEl = contentEl;
      }
      const hasRefresherInContent = !!contentEl.querySelector('ion-refresher');
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    /**
     * Card should be swipeable on all
     * parts of the modal except for the footer.
     */
    const footer = target.closest('ion-footer');
    if (footer === null) {
      return true;
    }
    return false;
  };
  const onStart = detail => {
    const {
      deltaY
    } = detail;
    /**
     * Get the initial scrollY value so
     * that we can correctly reset the scrollY
     * prop when the gesture ends.
     */
    initialScrollY = getScrollY();
    /**
     * If canDismiss is anything other than `true`
     * then users should be able to swipe down
     * until a threshold is hit. At that point,
     * the card modal should not proceed any further.
     * TODO (FW-937)
     * Remove undefined check
     */
    canDismissBlocksGesture = el.canDismiss !== undefined && el.canDismiss !== true;
    /**
     * If we are pulling down, then
     * it is possible we are pulling on the
     * content. We do not want scrolling to
     * happen at the same time as the gesture.
     */
    if (deltaY > 0 && contentEl) {
      (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.d)(contentEl);
    }
    animation.progressStart(true, isOpen ? 1 : 0);
  };
  const onMove = detail => {
    const {
      deltaY
    } = detail;
    /**
     * If we are pulling down, then
     * it is possible we are pulling on the
     * content. We do not want scrolling to
     * happen at the same time as the gesture.
     */
    if (deltaY > 0 && contentEl) {
      (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.d)(contentEl);
    }
    /**
     * If we are swiping on the content
     * then the swipe gesture should only
     * happen if we are pulling down.
     *
     * However, if we pull up and
     * then down such that the scroll position
     * returns to 0, we should be able to swipe
     * the card.
     */
    const step = detail.deltaY / height;
    /**
     * Check if user is swiping down and
     * if we have a canDismiss value that
     * should block the gesture from
     * proceeding,
     */
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    /**
     * If we are blocking the gesture from dismissing,
     * set the max step value so that the sheet cannot be
     * completely hidden.
     */
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    /**
     * If we are blocking the gesture from
     * dismissing, calculate the spring modifier value
     * this will be added to the starting breakpoint
     * value to give the gesture a spring-like feeling.
     * Note that the starting breakpoint is always 0,
     * so we omit adding 0 to the result.
     */
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.j)(0.0001, processedStep, maxStep);
    animation.progressStep(clampedStep);
    /**
     * When swiping down half way, the status bar style
     * should be reset to its default value.
     *
     * We track lastStep so that we do not fire these
     * functions on every onMove, only when the user has
     * crossed a certain threshold.
     */
    if (clampedStep >= DISMISS_THRESHOLD && lastStep < DISMISS_THRESHOLD) {
      setCardStatusBarDefault(statusBarStyle);
      /**
       * However, if we swipe back up, then the
       * status bar style should be set to have light
       * text on a dark background.
       */
    } else if (clampedStep < DISMISS_THRESHOLD && lastStep >= DISMISS_THRESHOLD) {
      setCardStatusBarDark();
    }
    lastStep = clampedStep;
  };
  const onEnd = detail => {
    const velocity = detail.velocityY;
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.j)(0.0001, processedStep, maxStep);
    const threshold = (detail.deltaY + velocity * 1000) / height;
    /**
     * If canDismiss blocks
     * the swipe gesture, then the
     * animation can never complete until
     * canDismiss is checked.
     */
    const shouldComplete = !isAttemptingDismissWithCanDismiss && threshold >= DISMISS_THRESHOLD;
    let newStepValue = shouldComplete ? -0.001 : 0.001;
    if (!shouldComplete) {
      animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
      newStepValue += (0,_cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_14__.g)([0, 0], [1, 0], [0.68, 0.28], [1, 1], clampedStep)[0];
    } else {
      animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
      newStepValue += (0,_cubic_bezier_fe2083dc_js__WEBPACK_IMPORTED_MODULE_14__.g)([0, 0], [0.32, 0.72], [0, 1], [1, 1], clampedStep)[0];
    }
    const duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - clampedStep) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    if (contentEl) {
      (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.r)(contentEl, initialScrollY);
    }
    animation.onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);
    /**
     * If the canDismiss value blocked the gesture
     * from proceeding, then we should ignore whatever
     * shouldComplete is. Whether or not the modal
     * animation should complete is now determined by
     * canDismiss.
     *
     * If the user swiped >25% of the way
     * to the max step, then we should
     * check canDismiss. 25% was chosen
     * to avoid accidental swipes.
     */
    if (isAttemptingDismissWithCanDismiss && clampedStep > maxStep / 4) {
      handleCanDismiss(el, animation);
    } else if (shouldComplete) {
      onDismiss();
    }
  };
  const gesture = (0,_index_39782642_js__WEBPACK_IMPORTED_MODULE_15__.createGesture)({
    el,
    gestureName: 'modalSwipeToClose',
    gesturePriority: _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.O,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};
const computeDuration = (remaining, velocity) => {
  return (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.j)(400, remaining / Math.abs(velocity * 1.1), 500);
};
const createSheetEnterAnimation = opts => {
  const {
    currentBreakpoint,
    backdropBreakpoint
  } = opts;
  /**
   * If the backdropBreakpoint is undefined, then the backdrop
   * should always fade in. If the backdropBreakpoint came before the
   * current breakpoint, then the backdrop should be fading in.
   */
  const shouldShowBackdrop = backdropBreakpoint === undefined || backdropBreakpoint < currentBreakpoint;
  const initialBackdrop = shouldShowBackdrop ? `calc(var(--backdrop-opacity) * ${currentBreakpoint})` : '0';
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)('backdropAnimation').fromTo('opacity', 0, initialBackdrop);
  if (shouldShowBackdrop) {
    backdropAnimation.beforeStyles({
      'pointer-events': 'none'
    }).afterClearStyles(['pointer-events']);
  }
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)('wrapperAnimation').keyframes([{
    offset: 0,
    opacity: 1,
    transform: 'translateY(100%)'
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }]);
  return {
    wrapperAnimation,
    backdropAnimation
  };
};
const createSheetLeaveAnimation = opts => {
  const {
    currentBreakpoint,
    backdropBreakpoint
  } = opts;
  /**
   * Backdrop does not always fade in from 0 to 1 if backdropBreakpoint
   * is defined, so we need to account for that offset by figuring out
   * what the current backdrop value should be.
   */
  const backdropValue = `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(currentBreakpoint, backdropBreakpoint)})`;
  const defaultBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: 1,
    opacity: 0
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)('backdropAnimation').keyframes(backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop);
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)('wrapperAnimation').keyframes([{
    offset: 0,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(100%)`
  }]);
  return {
    wrapperAnimation,
    backdropAnimation
  };
};
const createEnterAnimation$1 = () => {
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().fromTo('transform', 'translateY(100vh)', 'translateY(0vh)');
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * iOS Modal Enter Animation for the Card presentation style
 */
const iosEnterAnimation = (baseEl, opts) => {
  const {
    presentingEl,
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation$1();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
    opacity: 1
  });
  const baseAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)('entering-base').addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(500).addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
    const presentingElRoot = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(presentingEl);
    const presentingAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().beforeStyles({
      transform: 'translateY(0)',
      'transform-origin': 'top center',
      overflow: 'hidden'
    });
    const bodyEl = document.body;
    if (isMobile) {
      /**
       * Fallback for browsers that does not support `max()` (ex: Firefox)
       * No need to worry about statusbar padding since engines like Gecko
       * are not used as the engine for standalone Cordova/Capacitor apps
       */
      const transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.afterStyles({
        transform: finalTransform
      }).beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black')).addElement(presentingEl).keyframes([{
        offset: 0,
        filter: 'contrast(1)',
        transform: 'translateY(0px) scale(1)',
        borderRadius: '0px'
      }, {
        offset: 1,
        filter: 'contrast(0.85)',
        transform: finalTransform,
        borderRadius: '10px 10px 0 0'
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '0', '1');
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector('.modal-wrapper')).keyframes([{
          offset: 0,
          filter: 'contrast(1)',
          transform: 'translateY(0) scale(1)'
        }, {
          offset: 1,
          filter: 'contrast(0.85)',
          transform: finalTransform
        }]);
        const shadowAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector('.modal-shadow')).keyframes([{
          offset: 0,
          opacity: '1',
          transform: 'translateY(0) scale(1)'
        }, {
          offset: 1,
          opacity: '0',
          transform: finalTransform
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
const createLeaveAnimation$1 = () => {
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0);
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().fromTo('transform', 'translateY(0vh)', 'translateY(100vh)');
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * iOS Modal Leave Animation
 */
const iosLeaveAnimation = (baseEl, opts, duration = 500) => {
  const {
    presentingEl,
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetLeaveAnimation(opts) : createLeaveAnimation$1();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelectorAll('.modal-wrapper, .modal-shadow')).beforeStyles({
    opacity: 1
  });
  const baseAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)('leaving-base').addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(duration).addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isMobile = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined;
    const presentingElRoot = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(presentingEl);
    const presentingAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().beforeClearStyles(['transform']).afterClearStyles(['transform']).onFinish(currentStep => {
      // only reset background color if this is the last card-style modal
      if (currentStep !== 1) {
        return;
      }
      presentingEl.style.setProperty('overflow', '');
      const numModals = Array.from(bodyEl.querySelectorAll('ion-modal:not(.overlay-hidden)')).filter(m => m.presentingElement !== undefined).length;
      if (numModals <= 1) {
        bodyEl.style.setProperty('background-color', '');
      }
    });
    const bodyEl = document.body;
    if (isMobile) {
      const transformOffset = !CSS.supports('width', 'max(0px, 1px)') ? '30px' : 'max(30px, var(--ion-safe-area-top))';
      const modalTransform = hasCardModal ? '-10px' : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.addElement(presentingEl).keyframes([{
        offset: 0,
        filter: 'contrast(0.85)',
        transform: finalTransform,
        borderRadius: '10px 10px 0 0'
      }, {
        offset: 1,
        filter: 'contrast(1)',
        transform: 'translateY(0px) scale(1)',
        borderRadius: '0px'
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo('opacity', '1', '0');
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.addElement(presentingElRoot.querySelector('.modal-wrapper')).afterStyles({
          transform: 'translate3d(0, 0, 0)'
        }).keyframes([{
          offset: 0,
          filter: 'contrast(0.85)',
          transform: finalTransform
        }, {
          offset: 1,
          filter: 'contrast(1)',
          transform: 'translateY(0) scale(1)'
        }]);
        const shadowAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().addElement(presentingElRoot.querySelector('.modal-shadow')).afterStyles({
          transform: 'translateY(0) scale(1)'
        }).keyframes([{
          offset: 0,
          opacity: '0',
          transform: finalTransform
        }, {
          offset: 1,
          opacity: '1',
          transform: 'translateY(0) scale(1)'
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
const createEnterAnimation = () => {
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'translateY(40px)'
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(0px)`
  }]);
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * Md Modal Enter Animation
 */
const mdEnterAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetEnterAnimation(opts) : createEnterAnimation();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
  return (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).addAnimation([backdropAnimation, wrapperAnimation]);
};
const createLeaveAnimation = () => {
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().fromTo('opacity', 'var(--backdrop-opacity)', 0);
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: `translateY(0px)`
  }, {
    offset: 1,
    opacity: 0,
    transform: 'translateY(40px)'
  }]);
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
/**
 * Md Modal Leave Animation
 */
const mdLeaveAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint
  } = opts;
  const root = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== undefined ? createSheetLeaveAnimation(opts) : createLeaveAnimation();
  backdropAnimation.addElement(root.querySelector('ion-backdrop'));
  wrapperAnimation.addElement(root.querySelector('.modal-wrapper'));
  return (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_13__.c)().easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
const createSheetGesture = (baseEl, backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, animation, breakpoints = [], getCurrentBreakpoint, onDismiss, onBreakpointChange) => {
  // Defaults for the sheet swipe animation
  const defaultBackdrop = [{
    offset: 0,
    opacity: 'var(--backdrop-opacity)'
  }, {
    offset: 1,
    opacity: 0.01
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: 'var(--backdrop-opacity)'
  }, {
    offset: 1 - backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const SheetDefaults = {
    WRAPPER_KEYFRAMES: [{
      offset: 0,
      transform: 'translateY(0%)'
    }, {
      offset: 1,
      transform: 'translateY(100%)'
    }],
    BACKDROP_KEYFRAMES: backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop
  };
  const contentEl = baseEl.querySelector('ion-content');
  const height = wrapperEl.clientHeight;
  let currentBreakpoint = initialBreakpoint;
  let offset = 0;
  let canDismissBlocksGesture = false;
  const canDismissMaxStep = 0.95;
  const wrapperAnimation = animation.childAnimations.find(ani => ani.id === 'wrapperAnimation');
  const backdropAnimation = animation.childAnimations.find(ani => ani.id === 'backdropAnimation');
  const maxBreakpoint = breakpoints[breakpoints.length - 1];
  const minBreakpoint = breakpoints[0];
  const enableBackdrop = () => {
    baseEl.style.setProperty('pointer-events', 'auto');
    backdropEl.style.setProperty('pointer-events', 'auto');
    /**
     * When the backdrop is enabled, elements such
     * as inputs should not be focusable outside
     * the sheet.
     */
    baseEl.classList.remove(_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.F);
  };
  const disableBackdrop = () => {
    baseEl.style.setProperty('pointer-events', 'none');
    backdropEl.style.setProperty('pointer-events', 'none');
    /**
     * When the backdrop is enabled, elements such
     * as inputs should not be focusable outside
     * the sheet.
     * Adding this class disables focus trapping
     * for the sheet temporarily.
     */
    baseEl.classList.add(_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.F);
  };
  /**
   * After the entering animation completes,
   * we need to set the animation to go from
   * offset 0 to offset 1 so that users can
   * swipe in any direction. We then set the
   * animation offset to the current breakpoint
   * so there is no flickering.
   */
  if (wrapperAnimation && backdropAnimation) {
    wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
    backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
    animation.progressStart(true, 1 - currentBreakpoint);
    /**
     * If backdrop is not enabled, then content
     * behind modal should be clickable. To do this, we need
     * to remove pointer-events from ion-modal as a whole.
     * ion-backdrop and .modal-wrapper always have pointer-events: auto
     * applied, so the modal content can still be interacted with.
     */
    const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
    if (shouldEnableBackdrop) {
      enableBackdrop();
    } else {
      disableBackdrop();
    }
  }
  if (contentEl && currentBreakpoint !== maxBreakpoint) {
    contentEl.scrollY = false;
  }
  const canStart = detail => {
    /**
     * If we are swiping on the content, swiping should only be possible if the content
     * is scrolled all the way to the top so that we do not interfere with scrolling.
     *
     * We cannot assume that the `ion-content` target will remain consistent between swipes.
     * For example, when using ion-nav within a modal it is possible to swipe, push a view,
     * and then swipe again. The target content will not be the same between swipes.
     */
    const contentEl = (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.f)(detail.event.target);
    currentBreakpoint = getCurrentBreakpoint();
    if (currentBreakpoint === 1 && contentEl) {
      /**
       * The modal should never swipe to close on the content with a refresher.
       * Note 1: We cannot solve this by making this gesture have a higher priority than
       * the refresher gesture as the iOS native refresh gesture uses a scroll listener in
       * addition to a gesture.
       *
       * Note 2: Do not use getScrollElement here because we need this to be a synchronous
       * operation, and getScrollElement is asynchronous.
       */
      const scrollEl = (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.i)(contentEl) ? (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.g)(contentEl).querySelector('.inner-scroll') : contentEl;
      const hasRefresherInContent = !!contentEl.querySelector('ion-refresher');
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    return true;
  };
  const onStart = detail => {
    /**
     * If canDismiss is anything other than `true`
     * then users should be able to swipe down
     * until a threshold is hit. At that point,
     * the card modal should not proceed any further.
     *
     * canDismiss is never fired via gesture if there is
     * no 0 breakpoint. However, it can be fired if the user
     * presses Esc or the hardware back button.
     * TODO (FW-937)
     * Remove undefined check
     */
    canDismissBlocksGesture = baseEl.canDismiss !== undefined && baseEl.canDismiss !== true && minBreakpoint === 0;
    /**
     * If we are pulling down, then it is possible we are pulling on the content.
     * We do not want scrolling to happen at the same time as the gesture.
     */
    if (detail.deltaY > 0 && contentEl) {
      contentEl.scrollY = false;
    }
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
      /**
       * Dismisses the open keyboard when the sheet drag gesture is started.
       * Sets the focus onto the modal element.
       */
      baseEl.focus();
    });
    animation.progressStart(true, 1 - currentBreakpoint);
  };
  const onMove = detail => {
    /**
     * If we are pulling down, then it is possible we are pulling on the content.
     * We do not want scrolling to happen at the same time as the gesture.
     * This accounts for when the user scrolls down, scrolls all the way up, and then
     * pulls down again such that the modal should start to move.
     */
    if (detail.deltaY > 0 && contentEl) {
      contentEl.scrollY = false;
    }
    /**
     * Given the change in gesture position on the Y axis,
     * compute where the offset of the animation should be
     * relative to where the user dragged.
     */
    const initialStep = 1 - currentBreakpoint;
    const secondToLastBreakpoint = breakpoints.length > 1 ? 1 - breakpoints[1] : undefined;
    const step = initialStep + detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = secondToLastBreakpoint !== undefined && step >= secondToLastBreakpoint && canDismissBlocksGesture;
    /**
     * If we are blocking the gesture from dismissing,
     * set the max step value so that the sheet cannot be
     * completely hidden.
     */
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    /**
     * If we are blocking the gesture from
     * dismissing, calculate the spring modifier value
     * this will be added to the starting breakpoint
     * value to give the gesture a spring-like feeling.
     * Note that when isAttemptingDismissWithCanDismiss is true,
     * the modifier is always added to the breakpoint that
     * appears right after the 0 breakpoint.
     *
     * Note that this modifier is essentially the progression
     * between secondToLastBreakpoint and maxStep which is
     * why we subtract secondToLastBreakpoint. This lets us get
     * the result as a value from 0 to 1.
     */
    const processedStep = isAttemptingDismissWithCanDismiss && secondToLastBreakpoint !== undefined ? secondToLastBreakpoint + calculateSpringStep((step - secondToLastBreakpoint) / (maxStep - secondToLastBreakpoint)) : step;
    offset = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.j)(0.0001, processedStep, maxStep);
    animation.progressStep(offset);
  };
  const onEnd = detail => {
    /**
     * When the gesture releases, we need to determine
     * the closest breakpoint to snap to.
     */
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 350) / height;
    const diff = currentBreakpoint - threshold;
    const closest = breakpoints.reduce((a, b) => {
      return Math.abs(b - diff) < Math.abs(a - diff) ? b : a;
    });
    moveSheetToBreakpoint({
      breakpoint: closest,
      breakpointOffset: offset,
      canDismiss: canDismissBlocksGesture,
      /**
       * The swipe is user-driven, so we should
       * always animate when the gesture ends.
       */
      animated: true
    });
  };
  const moveSheetToBreakpoint = options => {
    const {
      breakpoint,
      canDismiss,
      breakpointOffset,
      animated
    } = options;
    /**
     * canDismiss should only prevent snapping
     * when users are trying to dismiss. If canDismiss
     * is present but the user is trying to swipe upwards,
     * we should allow that to happen,
     */
    const shouldPreventDismiss = canDismiss && breakpoint === 0;
    const snapToBreakpoint = shouldPreventDismiss ? currentBreakpoint : breakpoint;
    const shouldRemainOpen = snapToBreakpoint !== 0;
    currentBreakpoint = 0;
    /**
     * Update the animation so that it plays from
     * the last offset to the closest snap point.
     */
    if (wrapperAnimation && backdropAnimation) {
      wrapperAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${breakpointOffset * 100}%)`
      }, {
        offset: 1,
        transform: `translateY(${(1 - snapToBreakpoint) * 100}%)`
      }]);
      backdropAnimation.keyframes([{
        offset: 0,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(1 - breakpointOffset, backdropBreakpoint)})`
      }, {
        offset: 1,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(snapToBreakpoint, backdropBreakpoint)})`
      }]);
      animation.progressStep(0);
    }
    /**
     * Gesture should remain disabled until the
     * snapping animation completes.
     */
    gesture.enable(false);
    if (shouldPreventDismiss) {
      handleCanDismiss(baseEl, animation);
    } else if (!shouldRemainOpen) {
      onDismiss();
    }
    /**
     * If the sheet is going to be fully expanded then we should enable
     * scrolling immediately. The sheet modal animation takes ~500ms to finish
     * so if we wait until then there is a visible delay for when scrolling is
     * re-enabled. Native iOS allows for scrolling on the sheet modal as soon
     * as the gesture is released, so we align with that.
     */
    if (contentEl && snapToBreakpoint === breakpoints[breakpoints.length - 1]) {
      contentEl.scrollY = true;
    }
    return new Promise(resolve => {
      animation.onFinish(() => {
        if (shouldRemainOpen) {
          /**
           * Once the snapping animation completes,
           * we need to reset the animation to go
           * from 0 to 1 so users can swipe in any direction.
           * We then set the animation offset to the current
           * breakpoint so that it starts at the snapped position.
           */
          if (wrapperAnimation && backdropAnimation) {
            (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
              wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
              backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
              animation.progressStart(true, 1 - snapToBreakpoint);
              currentBreakpoint = snapToBreakpoint;
              onBreakpointChange(currentBreakpoint);
              /**
               * Backdrop should become enabled
               * after the backdropBreakpoint value
               */
              const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
              if (shouldEnableBackdrop) {
                enableBackdrop();
              } else {
                disableBackdrop();
              }
              gesture.enable(true);
              resolve();
            });
          } else {
            gesture.enable(true);
            resolve();
          }
        } else {
          resolve();
        }
        /**
         * This must be a one time callback
         * otherwise a new callback will
         * be added every time onEnd runs.
         */
      }, {
        oneTimeCallback: true
      }).progressEnd(1, 0, animated ? 500 : 0);
    });
  };
  const gesture = (0,_index_39782642_js__WEBPACK_IMPORTED_MODULE_15__.createGesture)({
    el: wrapperEl,
    gestureName: 'modalSheet',
    gesturePriority: 40,
    direction: 'y',
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return {
    gesture,
    moveSheetToBreakpoint
  };
};
const modalIosCss = ":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:\"\"}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}";
const IonModalIosStyle0 = modalIosCss;
const modalMdCss = ":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:\"\"}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";
const IonModalMdStyle0 = modalMdCss;
const Modal = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionModalDidPresent", 7);
    this.willPresent = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionModalWillPresent", 7);
    this.willDismiss = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionModalWillDismiss", 7);
    this.didDismiss = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionModalDidDismiss", 7);
    this.ionBreakpointDidChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBreakpointDidChange", 7);
    this.didPresentShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.ionMount = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionMount", 7);
    this.lockController = (0,_lock_controller_316928be_js__WEBPACK_IMPORTED_MODULE_5__.c)();
    this.triggerController = (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.e)();
    this.coreDelegate = (0,_framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_3__.C)();
    this.isSheetModal = false;
    this.inheritedAttributes = {};
    this.inline = false;
    // Whether or not modal is being dismissed via gesture
    this.gestureAnimationDismissing = false;
    this.onHandleClick = () => {
      const {
        sheetTransition,
        handleBehavior
      } = this;
      if (handleBehavior !== 'cycle' || sheetTransition !== undefined) {
        /**
         * The sheet modal should not advance to the next breakpoint
         * if the handle behavior is not `cycle` or if the handle
         * is clicked while the sheet is moving to a breakpoint.
         */
        return;
      }
      this.moveToNextBreakpoint();
    };
    this.onBackdropTap = () => {
      const {
        sheetTransition
      } = this;
      if (sheetTransition !== undefined) {
        /**
         * When the handle is double clicked at the largest breakpoint,
         * it will start to move to the first breakpoint. While transitioning,
         * the backdrop will often receive the second click. We prevent the
         * backdrop from dismissing the modal while moving between breakpoints.
         */
        return;
      }
      this.dismiss(undefined, _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.B);
    };
    this.onLifecycle = modalEvent => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
    this.presented = false;
    this.hasController = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.breakpoints = undefined;
    this.initialBreakpoint = undefined;
    this.backdropBreakpoint = 0;
    this.handle = undefined;
    this.handleBehavior = 'none';
    this.component = undefined;
    this.componentProps = undefined;
    this.cssClass = undefined;
    this.backdropDismiss = true;
    this.showBackdrop = true;
    this.animated = true;
    this.presentingElement = undefined;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
    this.keepContentsMounted = false;
    this.focusTrap = true;
    this.canDismiss = true;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  breakpointsChanged(breakpoints) {
    if (breakpoints !== undefined) {
      this.sortedBreakpoints = breakpoints.sort((a, b) => a - b);
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.j)(el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    const {
      breakpoints,
      initialBreakpoint,
      el,
      htmlAttributes
    } = this;
    const isSheetModal = this.isSheetModal = breakpoints !== undefined && initialBreakpoint !== undefined;
    const attributesToInherit = ['aria-label', 'role'];
    this.inheritedAttributes = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.h)(el, attributesToInherit);
    /**
     * When using a controller modal you can set attributes
     * using the htmlAttributes property. Since the above attributes
     * need to be inherited inside of the modal, we need to look
     * and see if these attributes are being set via htmlAttributes.
     *
     * We could alternatively move this to componentDidLoad to simplify the work
     * here, but we'd then need to make inheritedAttributes a State variable,
     * thus causing another render to always happen after the first render.
     */
    if (htmlAttributes !== undefined) {
      attributesToInherit.forEach(attribute => {
        const attributeValue = htmlAttributes[attribute];
        if (attributeValue) {
          /**
           * If an attribute we need to inherit was
           * set using htmlAttributes then add it to
           * inheritedAttributes and remove it from htmlAttributes.
           * This ensures the attribute is inherited and not
           * set on the host.
           *
           * In this case, if an inherited attribute is set
           * on the host element and using htmlAttributes then
           * htmlAttributes wins, but that's not a pattern that we recommend.
           * The only time you'd need htmlAttributes is when using modalController.
           */
          this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
            [attribute]: htmlAttributes[attribute]
          });
          delete htmlAttributes[attribute];
        }
      });
    }
    if (isSheetModal) {
      this.currentBreakpoint = this.initialBreakpoint;
    }
    if (breakpoints !== undefined && initialBreakpoint !== undefined && !breakpoints.includes(initialBreakpoint)) {
      (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_6__.p)('Your breakpoints array must include the initialBreakpoint value.');
    }
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.k)(this.el);
    }
  }
  componentDidLoad() {
    /**
     * If modal was rendered with isOpen="true"
     * then we should open modal immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => this.present());
    }
    this.breakpointsChanged(this.breakpoints);
    /**
     * When binding values in frameworks such as Angular
     * it is possible for the value to be set after the Web Component
     * initializes but before the value watcher is set up in Stencil.
     * As a result, the watcher callback may not be fired.
     * We work around this by manually calling the watcher
     * callback when the component has loaded and the watcher
     * is configured.
     */
    this.triggerChanged();
  }
  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */
  getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    }
    /**
     * If using overlay inline
     * we potentially need to use the coreDelegate
     * so that this works in vanilla JS apps.
     * If a developer has presented this component
     * via a controller, then we can assume
     * the component is already in the
     * correct place.
     */
    const parentEl = this.el.parentNode;
    const inline = this.inline = parentEl !== null && !this.hasController;
    const delegate = this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate;
    return {
      inline,
      delegate
    };
  }
  /**
   * Determines whether or not the
   * modal is allowed to dismiss based
   * on the state of the canDismiss prop.
   */
  checkCanDismiss(data, role) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        canDismiss
      } = _this;
      if (typeof canDismiss === 'function') {
        return canDismiss(data, role);
      }
      return canDismiss;
    })();
  }
  /**
   * Present the modal overlay after it has been created.
   */
  present() {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this2.lockController.lock();
      if (_this2.presented) {
        unlock();
        return;
      }
      const {
        presentingElement,
        el
      } = _this2;
      /**
       * If the modal is presented multiple times (inline modals), we
       * need to reset the current breakpoint to the initial breakpoint.
       */
      _this2.currentBreakpoint = _this2.initialBreakpoint;
      const {
        inline,
        delegate
      } = _this2.getDelegate(true);
      /**
       * Emit ionMount so JS Frameworks have an opportunity
       * to add the child component to the DOM. The child
       * component will be assigned to this.usersElement below.
       */
      _this2.ionMount.emit();
      _this2.usersElement = yield (0,_framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_3__.a)(delegate, el, _this2.component, ['ion-page'], _this2.componentProps, inline);
      /**
       * When using the lazy loaded build of Stencil, we need to wait
       * for every Stencil component instance to be ready before presenting
       * otherwise there can be a flash of unstyled content. With the
       * custom elements bundle we need to wait for the JS framework
       * mount the inner contents of the overlay otherwise WebKit may
       * get the transition incorrect.
       */
      if ((0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.k)(el)) {
        yield (0,_index_3ad7f18b_js__WEBPACK_IMPORTED_MODULE_10__.e)(_this2.usersElement);
        /**
         * If keepContentsMounted="true" then the
         * JS Framework has already mounted the inner
         * contents so there is no need to wait.
         * Otherwise, we need to wait for the JS
         * Framework to mount the inner contents
         * of this component.
         */
      } else if (!_this2.keepContentsMounted) {
        yield (0,_index_3ad7f18b_js__WEBPACK_IMPORTED_MODULE_10__.w)();
      }
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => _this2.el.classList.add('show-modal'));
      const hasCardModal = presentingElement !== undefined;
      /**
       * We need to change the status bar at the
       * start of the animation so that it completes
       * by the time the card animation is done.
       */
      if (hasCardModal && (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__.b)(_this2) === 'ios') {
        // Cache the original status bar color before the modal is presented
        _this2.statusBarStyle = yield StatusBar.getStyle();
        setCardStatusBarDark();
      }
      yield (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.f)(_this2, 'modalEnter', iosEnterAnimation, mdEnterAnimation, {
        presentingEl: presentingElement,
        currentBreakpoint: _this2.initialBreakpoint,
        backdropBreakpoint: _this2.backdropBreakpoint
      });
      /* tslint:disable-next-line */
      if (typeof window !== 'undefined') {
        /**
         * This needs to be setup before any
         * non-transition async work so it can be dereferenced
         * in the dismiss method. The dismiss method
         * only waits for the entering transition
         * to finish. It does not wait for all of the `present`
         * method to resolve.
         */
        _this2.keyboardOpenCallback = () => {
          if (_this2.gesture) {
            /**
             * When the native keyboard is opened and the webview
             * is resized, the gesture implementation will become unresponsive
             * and enter a free-scroll mode.
             *
             * When the keyboard is opened, we disable the gesture for
             * a single frame and re-enable once the contents have repositioned
             * from the keyboard placement.
             */
            _this2.gesture.enable(false);
            (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
              if (_this2.gesture) {
                _this2.gesture.enable(true);
              }
            });
          }
        };
        window.addEventListener(_keyboard_52278bd7_js__WEBPACK_IMPORTED_MODULE_12__.KEYBOARD_DID_OPEN, _this2.keyboardOpenCallback);
      }
      if (_this2.isSheetModal) {
        _this2.initSheetGesture();
      } else if (hasCardModal) {
        _this2.initSwipeToClose();
      }
      unlock();
    })();
  }
  initSwipeToClose() {
    var _this3 = this;
    var _a;
    if ((0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__.b)(this) !== 'ios') {
      return;
    }
    const {
      el
    } = this;
    // All of the elements needed for the swipe gesture
    // should be in the DOM and referenced by now, except
    // for the presenting el
    const animationBuilder = this.leaveAnimation || _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__.c.get('modalLeave', iosLeaveAnimation);
    const ani = this.animation = animationBuilder(el, {
      presentingEl: this.presentingElement
    });
    const contentEl = (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.a)(el);
    if (!contentEl) {
      (0,_index_5cc724f3_js__WEBPACK_IMPORTED_MODULE_2__.p)(el);
      return;
    }
    const statusBarStyle = (_a = this.statusBarStyle) !== null && _a !== void 0 ? _a : Style.Default;
    this.gesture = createSwipeToCloseGesture(el, ani, statusBarStyle, () => {
      /**
       * While the gesture animation is finishing
       * it is possible for a user to tap the backdrop.
       * This would result in the dismiss animation
       * being played again. Typically this is avoided
       * by setting `presented = false` on the overlay
       * component; however, we cannot do that here as
       * that would prevent the element from being
       * removed from the DOM.
       */
      this.gestureAnimationDismissing = true;
      /**
       * Reset the status bar style as the dismiss animation
       * starts otherwise the status bar will be the wrong
       * color for the duration of the dismiss animation.
       * The dismiss method does this as well, but
       * in this case it's only called once the animation
       * has finished.
       */
      setCardStatusBarDefault(this.statusBarStyle);
      this.animation.onFinish(/*#__PURE__*/(0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this3.dismiss(undefined, _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.G);
        _this3.gestureAnimationDismissing = false;
      }));
    });
    this.gesture.enable(true);
  }
  initSheetGesture() {
    const {
      wrapperEl,
      initialBreakpoint,
      backdropBreakpoint
    } = this;
    if (!wrapperEl || initialBreakpoint === undefined) {
      return;
    }
    const animationBuilder = this.enterAnimation || _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__.c.get('modalEnter', iosEnterAnimation);
    const ani = this.animation = animationBuilder(this.el, {
      presentingEl: this.presentingElement,
      currentBreakpoint: initialBreakpoint,
      backdropBreakpoint
    });
    ani.progressStart(true, 1);
    const {
      gesture,
      moveSheetToBreakpoint
    } = createSheetGesture(this.el, this.backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, ani, this.sortedBreakpoints, () => {
      var _a;
      return (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : 0;
    }, () => this.sheetOnDismiss(), breakpoint => {
      if (this.currentBreakpoint !== breakpoint) {
        this.currentBreakpoint = breakpoint;
        this.ionBreakpointDidChange.emit({
          breakpoint
        });
      }
    });
    this.gesture = gesture;
    this.moveSheetToBreakpoint = moveSheetToBreakpoint;
    this.gesture.enable(true);
  }
  sheetOnDismiss() {
    var _this4 = this;
    /**
     * While the gesture animation is finishing
     * it is possible for a user to tap the backdrop.
     * This would result in the dismiss animation
     * being played again. Typically this is avoided
     * by setting `presented = false` on the overlay
     * component; however, we cannot do that here as
     * that would prevent the element from being
     * removed from the DOM.
     */
    this.gestureAnimationDismissing = true;
    this.animation.onFinish(/*#__PURE__*/(0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.currentBreakpoint = 0;
      _this4.ionBreakpointDidChange.emit({
        breakpoint: _this4.currentBreakpoint
      });
      yield _this4.dismiss(undefined, _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.G);
      _this4.gestureAnimationDismissing = false;
    }));
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
   *
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   */
  dismiss(data, role) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      if (_this5.gestureAnimationDismissing && role !== _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.G) {
        return false;
      }
      /**
       * Because the canDismiss check below is async,
       * we need to claim a lock before the check happens,
       * in case the dismiss transition does run.
       */
      const unlock = yield _this5.lockController.lock();
      /**
       * If a canDismiss handler is responsible
       * for calling the dismiss method, we should
       * not run the canDismiss check again.
       */
      if (role !== 'handler' && !(yield _this5.checkCanDismiss(data, role))) {
        unlock();
        return false;
      }
      const {
        presentingElement
      } = _this5;
      /**
       * We need to start the status bar change
       * before the animation so that the change
       * finishes when the dismiss animation does.
       */
      const hasCardModal = presentingElement !== undefined;
      if (hasCardModal && (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__.b)(_this5) === 'ios') {
        setCardStatusBarDefault(_this5.statusBarStyle);
      }
      /* tslint:disable-next-line */
      if (typeof window !== 'undefined' && _this5.keyboardOpenCallback) {
        window.removeEventListener(_keyboard_52278bd7_js__WEBPACK_IMPORTED_MODULE_12__.KEYBOARD_DID_OPEN, _this5.keyboardOpenCallback);
        _this5.keyboardOpenCallback = undefined;
      }
      const dismissed = yield (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.g)(_this5, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, {
        presentingEl: presentingElement,
        currentBreakpoint: (_a = _this5.currentBreakpoint) !== null && _a !== void 0 ? _a : _this5.initialBreakpoint,
        backdropBreakpoint: _this5.backdropBreakpoint
      });
      if (dismissed) {
        const {
          delegate
        } = _this5.getDelegate();
        yield (0,_framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_3__.d)(delegate, _this5.usersElement);
        (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => _this5.el.classList.remove('show-modal'));
        if (_this5.animation) {
          _this5.animation.destroy();
        }
        if (_this5.gesture) {
          _this5.gesture.destroy();
        }
      }
      _this5.currentBreakpoint = undefined;
      _this5.animation = undefined;
      unlock();
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.h)(this.el, 'ionModalDidDismiss');
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.h)(this.el, 'ionModalWillDismiss');
  }
  /**
   * Move a sheet style modal to a specific breakpoint. The breakpoint value must
   * be a value defined in your `breakpoints` array.
   */
  setCurrentBreakpoint(breakpoint) {
    var _this6 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.isSheetModal) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_6__.p)('setCurrentBreakpoint is only supported on sheet modals.');
        return;
      }
      if (!_this6.breakpoints.includes(breakpoint)) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_6__.p)(`Attempted to set invalid breakpoint value ${breakpoint}. Please double check that the breakpoint value is part of your defined breakpoints.`);
        return;
      }
      const {
        currentBreakpoint,
        moveSheetToBreakpoint,
        canDismiss,
        breakpoints,
        animated
      } = _this6;
      if (currentBreakpoint === breakpoint) {
        return;
      }
      if (moveSheetToBreakpoint) {
        _this6.sheetTransition = moveSheetToBreakpoint({
          breakpoint,
          breakpointOffset: 1 - currentBreakpoint,
          canDismiss: canDismiss !== undefined && canDismiss !== true && breakpoints[0] === 0,
          animated
        });
        yield _this6.sheetTransition;
        _this6.sheetTransition = undefined;
      }
    })();
  }
  /**
   * Returns the current breakpoint of a sheet style modal
   */
  getCurrentBreakpoint() {
    var _this7 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.currentBreakpoint;
    })();
  }
  moveToNextBreakpoint() {
    var _this8 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        breakpoints,
        currentBreakpoint
      } = _this8;
      if (!breakpoints || currentBreakpoint == null) {
        /**
         * If the modal does not have breakpoints and/or the current
         * breakpoint is not set, we can't move to the next breakpoint.
         */
        return false;
      }
      const allowedBreakpoints = breakpoints.filter(b => b !== 0);
      const currentBreakpointIndex = allowedBreakpoints.indexOf(currentBreakpoint);
      const nextBreakpointIndex = (currentBreakpointIndex + 1) % allowedBreakpoints.length;
      const nextBreakpoint = allowedBreakpoints[nextBreakpointIndex];
      /**
       * Sets the current breakpoint to the next available breakpoint.
       * If the current breakpoint is the last breakpoint, we set the current
       * breakpoint to the first non-zero breakpoint to avoid dismissing the sheet.
       */
      yield _this8.setCurrentBreakpoint(nextBreakpoint);
      return true;
    })();
  }
  render() {
    const {
      handle,
      isSheetModal,
      presentingElement,
      htmlAttributes,
      handleBehavior,
      inheritedAttributes,
      focusTrap
    } = this;
    const showHandle = handle !== false && isSheetModal;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_11__.b)(this);
    const isCardModal = presentingElement !== undefined && mode === 'ios';
    const isHandleCycle = handleBehavior === 'cycle';
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, Object.assign({
      key: 'b4da5111fe4719fa450c39b2d4bd884a302a7924',
      "no-router": true,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        ['modal-default']: !isCardModal && !isSheetModal,
        [`modal-card`]: isCardModal,
        [`modal-sheet`]: isSheetModal,
        'overlay-hidden': true,
        [_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_8__.F]: focusTrap === false
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_9__.g)(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonModalDidPresent: this.onLifecycle,
      onIonModalWillPresent: this.onLifecycle,
      onIonModalWillDismiss: this.onLifecycle,
      onIonModalDidDismiss: this.onLifecycle
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      key: 'c12dbf747e0eb914eaf1331798548ffc7e147763',
      ref: el => this.backdropEl = el,
      visible: this.showBackdrop,
      tappable: this.backdropDismiss,
      part: "backdrop"
    }), mode === 'ios' && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'da546ee80c6576b5acc66e959fd5009e0b9a8160',
      class: "modal-shadow"
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", Object.assign({
      key: '306ebe6427440ad5f7ed36d590e562d15a503b75',
      /*
        role and aria-modal must be used on the
        same element. They must also be set inside the
        shadow DOM otherwise ion-button will not be highlighted
        when using VoiceOver: https://bugs.webkit.org/show_bug.cgi?id=247134
      */
      role: "dialog"
    }, inheritedAttributes, {
      "aria-modal": "true",
      class: "modal-wrapper ion-overlay-wrapper",
      part: "content",
      ref: el => this.wrapperEl = el
    }), showHandle && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: 'c5d17e346fe255a7c0cacbbf15c0083f2d09c488',
      class: "modal-handle",
      // Prevents the handle from receiving keyboard focus when it does not cycle
      tabIndex: !isHandleCycle ? -1 : 0,
      "aria-label": "Activate to adjust the size of the dialog overlaying the screen",
      onClick: isHandleCycle ? this.onHandleClick : undefined,
      part: "handle"
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: '5cc714170a00b67f3eda0cd1d6f37c1489a99c83'
    })));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
const LIFECYCLE_MAP = {
  ionModalDidPresent: 'ionViewDidEnter',
  ionModalWillPresent: 'ionViewWillEnter',
  ionModalWillDismiss: 'ionViewWillLeave',
  ionModalDidDismiss: 'ionViewDidLeave'
};
Modal.style = {
  ios: IonModalIosStyle0,
  md: IonModalMdStyle0
};


/***/ })

}]);