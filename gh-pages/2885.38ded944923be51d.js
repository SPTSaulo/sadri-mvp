"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2885],{

/***/ 2885:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_datetime: () => (/* binding */ Datetime),
/* harmony export */   ion_picker_legacy: () => (/* binding */ Picker),
/* harmony export */   ion_picker_legacy_column: () => (/* binding */ PickerColumnCmp)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _focus_visible_dd40d69f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focus-visible-dd40d69f.js */ 3126);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 4929);
/* harmony import */ var _dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dir-babeabeb.js */ 5083);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 3992);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/* harmony import */ var _data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-ae11fd43.js */ 3761);
/* harmony import */ var _lock_controller_316928be_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lock-controller-316928be.js */ 7838);
/* harmony import */ var _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlays-e7b9d6d9.js */ 3617);
/* harmony import */ var _animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animation-eab5a4ca.js */ 9986);
/* harmony import */ var _haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./haptic-ac164e4c.js */ 1086);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index-a5d50daf.js */ 8476);
/* harmony import */ var _hardware_back_button_06ef3c3e_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hardware-back-button-06ef3c3e.js */ 7192);
/* harmony import */ var _framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./framework-delegate-63d1a679.js */ 8621);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 1970);
/* harmony import */ var _capacitor_59395cbd_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./capacitor-59395cbd.js */ 8438);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


















const isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
/**
 * Returns true if a given day should
 * not be interactive according to its value,
 * or the max/min dates.
 */
const isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  /**
   * If this is a filler date (i.e. padding)
   * then the date is disabled.
   */
  if (refParts.day === null) {
    return true;
  }
  /**
   * If user passed in a list of acceptable day values
   * check to make sure that the date we are looking
   * at is in this array.
   */
  if (dayValues !== undefined && !dayValues.includes(refParts.day)) {
    return true;
  }
  /**
   * Given a min date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year < the min allowed year?
   * 2. Is the current year === min allowed year,
   * but the current month < the min allowed month?
   * 3. Is the current year === min allowed year, the
   * current month === min allow month, but the current
   * day < the min allowed day?
   */
  if (minParts && (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.i)(refParts, minParts)) {
    return true;
  }
  /**
   * Given a max date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year > the max allowed year?
   * 2. Is the current year === max allowed year,
   * but the current month > the max allowed month?
   * 3. Is the current year === max allowed year, the
   * current month === max allow month, but the current
   * day > the max allowed day?
   */
  if (maxParts && (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.b)(refParts, maxParts)) {
    return true;
  }
  /**
   * If none of these checks
   * passed then the date should
   * be interactive.
   */
  return false;
};
/**
 * Given a locale, a date, the selected date(s), and today's date,
 * generate the state for a given calendar day button.
 */
const getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  /**
   * activeParts signals what day(s) are currently selected in the datetime.
   * If multiple="true", this will be an array, but the logic in this util
   * is the same whether we have one selected day or many because we're only
   * calculating the state for one button. So, we treat a single activeParts value
   * the same as an array of length one.
   */
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  /**
   * The day button is active if it is selected, or in other words, if refParts
   * matches at least one selected date.
   */
  const isActive = activePartsArray.find(parts => (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.c)(refParts, parts)) !== undefined;
  const isToday = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.c)(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  /**
   * Note that we always return one object regardless of whether activeParts
   * was an array, since we pare down to one value for isActive.
   */
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? 'true' : null,
    ariaLabel: (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.g)(locale, isToday, refParts),
    text: refParts.day != null ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.a)(locale, refParts) : null
  };
};
/**
 * Returns `true` if the month is disabled given the
 * current date value and min/max date constraints.
 */
const isMonthDisabled = (refParts, {
  minParts,
  maxParts
}) => {
  // If the year is disabled then the month is disabled.
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  // If the date value is before the min date, then the month is disabled.
  // If the date value is after the max date, then the month is disabled.
  if (minParts && (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.i)(refParts, minParts) || maxParts && (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.b)(refParts, maxParts)) {
    return true;
  }
  return false;
};
/**
 * Given a working date, an optional minimum date range,
 * and an optional maximum date range; determine if the
 * previous navigation button is disabled.
 */
const isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.d)(refParts)), {
    day: null
  });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts
  });
};
/**
 * Given a working date and a maximum date range,
 * determine if the next navigation button is disabled.
 */
const isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.e)(refParts)), {
    day: null
  });
  return isMonthDisabled(nextMonth, {
    maxParts
  });
};
/**
 * Given the value of the highlightedDates property
 * and an ISO string, return the styles to use for
 * that date, or undefined if none are found.
 */
const getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split('T')[0];
    const matchingHighlight = highlightedDates.find(hd => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor
      };
    }
  } else {
    /**
     * Wrap in a try-catch to prevent exceptions in the user's function
     * from interrupting the calendar's rendering.
     */
    try {
      return highlightedDates(dateIsoString);
    } catch (e) {
      (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.a)('Exception thrown from provided `highlightedDates` callback. Please check your function and try again.', el, e);
    }
  }
  return undefined;
};

/**
 * If a time zone is provided in the format options, the rendered text could
 * differ from what was selected in the Datetime, which could cause
 * confusion.
 */
const warnIfTimeZoneProvided = (el, formatOptions) => {
  var _a, _b, _c, _d;
  if (((_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _a === void 0 ? void 0 : _a.timeZone) || ((_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _b === void 0 ? void 0 : _b.timeZoneName) || ((_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _c === void 0 ? void 0 : _c.timeZone) || ((_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _d === void 0 ? void 0 : _d.timeZoneName)) {
    (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)('Datetime: "timeZone" and "timeZoneName" are not supported in "formatOptions".', el);
  }
};
const checkForPresentationFormatMismatch = (el, presentation, formatOptions) => {
  // formatOptions is not required
  if (!formatOptions) return;
  // If formatOptions is provided, the date and/or time objects are required, depending on the presentation
  switch (presentation) {
    case 'date':
    case 'month-year':
    case 'month':
    case 'year':
      if (formatOptions.date === undefined) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)(`Datetime: The '${presentation}' presentation requires a date object in formatOptions.`, el);
      }
      break;
    case 'time':
      if (formatOptions.time === undefined) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)(`Datetime: The 'time' presentation requires a time object in formatOptions.`, el);
      }
      break;
    case 'date-time':
    case 'time-date':
      if (formatOptions.date === undefined && formatOptions.time === undefined) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)(`Datetime: The '${presentation}' presentation requires either a date or time object (or both) in formatOptions.`, el);
      }
      break;
  }
};
const datetimeIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-light, #f4f5f8);--background-rgb:var(--ion-color-light-rgb, 244, 245, 248);--title-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc));font-size:min(0.875rem, 22.4px)}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}.calendar-month-year-toggle{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-height:44px;font-size:min(1rem, 25.6px);font-weight:600}.calendar-month-year-toggle.ion-focused::after{opacity:0.15}.calendar-month-year-toggle #toggle-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host .calendar-action-buttons .calendar-month-year-toggle ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, var(--ion-text-color-step-700, #b3b3b3));font-size:min(0.75rem, 19.2px);font-weight:600;line-height:24px;text-transform:uppercase}@supports (border-radius: mod(1px, 1px)){.calendar-days-of-week .day-of-week{width:clamp(20px, calc(mod(min(1rem, 24px), 24px) * 10), 100%);height:24px;overflow:hidden}.calendar-day{border-radius:max(8px, mod(min(1rem, 24px), 24px) * 10)}}@supports ((border-radius: mod(1px, 1px)) and (background: -webkit-named-image(apple-pay-logo-black)) and (not (contain-intrinsic-size: none))) or (not (border-radius: mod(1px, 1px))){.calendar-days-of-week .day-of-week{width:auto;height:auto;overflow:initial}.calendar-day{border-radius:32px}}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-ms-flex-align:center;align-items:center;height:calc(100% - 16px)}:host .calendar-day-wrapper{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;height:0;min-height:1rem}:host .calendar-day{width:40px;min-width:40px;height:40px;font-size:min(1.25rem, 32px)}.calendar-day.calendar-day-active{background:rgba(var(--ion-color-base-rgb), 0.2);font-size:min(1.375rem, 35.2px)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:min(1rem, 25.6px)}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc))}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}";
const IonDatetimeIosStyle0 = datetimeIosCss;
const datetimeMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #ffffff));--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:0.75rem;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:2.125rem}:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}.calendar-month-year-toggle{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;min-height:48px;background:transparent;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959));z-index:1}.calendar-month-year-toggle.ion-focused::after{opacity:0.04}.calendar-month-year-toggle ion-ripple-effect{color:currentColor}@media (any-hover: hover){.calendar-month-year-toggle.ion-activatable:not(.ion-focused):hover::after{background:currentColor;opacity:0.04}}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray));font-size:0.875rem;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{width:42px;min-width:42px;height:42px;font-size:0.875rem}:host .calendar-day.calendar-day-today{border:1px solid var(--ion-color-base);color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}";
const IonDatetimeMdStyle0 = datetimeMdCss;
const Datetime = class {
  constructor(hostRef) {
    var _this = this;
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionCancel = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionCancel", 7);
    this.ionChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionValueChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionValueChange", 7);
    this.ionFocus = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionStyle = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionStyle", 7);
    this.ionRender = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    this.warnIfIncorrectValueUsage = () => {
      const {
        multiple,
        value
      } = this;
      if (!multiple && Array.isArray(value)) {
        /**
         * We do some processing on the `value` array so
         * that it looks more like an array when logged to
         * the console.
         * Example given ['a', 'b']
         * Default toString() behavior: a,b
         * Custom behavior: ['a', 'b']
         */
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map(v => `'${v}'`).join(', ')}]
`, this.el);
      }
    };
    this.setValue = value => {
      this.value = value;
      this.ionChange.emit({
        value
      });
    };
    /**
     * Returns the DatetimePart interface
     * to use when rendering an initial set of
     * data. This should be used when rendering an
     * interface in an environment where the `value`
     * may not be set. This function works
     * by returning the first selected date and then
     * falling back to defaultParts if no active date
     * is selected.
     */
    this.getActivePartsWithFallback = () => {
      var _a;
      const {
        defaultParts
      } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const {
        activeParts
      } = this;
      return Array.isArray(activeParts) ? activeParts[0] : activeParts;
    };
    this.closeParentOverlay = role => {
      const popoverOrModal = this.el.closest('ion-modal, ion-popover');
      if (popoverOrModal) {
        popoverOrModal.dismiss(undefined, role);
      }
    };
    this.setWorkingParts = parts => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      /** if the datetime component is in readonly mode,
       * allow browsing of the calendar without changing
       * the set value
       */
      if (this.readonly) {
        return;
      }
      const {
        multiple,
        minParts,
        maxParts,
        activeParts
      } = this;
      /**
       * When setting the active parts, it is possible
       * to set invalid data. For example,
       * when updating January 31 to February,
       * February 31 does not exist. As a result
       * we need to validate the active parts and
       * ensure that we are only setting valid dates.
       * Additionally, we need to update the working parts
       * too in the event that the validated parts are different.
       */
      const validatedParts = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.v)(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
        if (removeDate) {
          this.activeParts = activePartsArray.filter(p => !(0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.c)(p, validatedParts));
        } else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      } else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      /**
       * Get a reference to the month
       * element we are currently viewing.
       */
      const currentMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(2)');
      /**
       * When focusing the calendar body, we want to pass focus
       * to the working day, but other days should
       * only be accessible using the arrow keys. Pressing
       * Tab should jump between bodies of selectable content.
       */
      const checkCalendarBodyFocus = ev => {
        var _a;
        const record = ev[0];
        /**
         * If calendar body was already focused
         * when this fired or if the calendar body
         * if not currently focused, we should not re-focus
         * the inner day.
         */
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes('ion-focused')) || !calendarBodyRef.classList.contains('ion-focused')) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, {
        attributeFilter: ['class'],
        attributeOldValue: true
      });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      /**
       * We must use keydown not keyup as we want
       * to prevent scrolling when using the arrow keys.
       */
      calendarBodyRef.addEventListener('keydown', ev => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains('calendar-day')) {
          return;
        }
        const parts = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.f)(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case 'ArrowDown':
            ev.preventDefault();
            partsToFocus = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.p)(parts);
            break;
          case 'ArrowUp':
            ev.preventDefault();
            partsToFocus = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.o)(parts);
            break;
          case 'ArrowRight':
            ev.preventDefault();
            partsToFocus = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.n)(parts);
            break;
          case 'ArrowLeft':
            ev.preventDefault();
            partsToFocus = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.m)(parts);
            break;
          case 'Home':
            ev.preventDefault();
            partsToFocus = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.l)(parts);
            break;
          case 'End':
            ev.preventDefault();
            partsToFocus = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.k)(parts);
            break;
          case 'PageUp':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.j)(parts) : (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.d)(parts);
            break;
          case 'PageDown':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.h)(parts) : (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.e)(parts);
            break;
          /**
           * Do not preventDefault here
           * as we do not want to override other
           * browser defaults such as pressing Enter/Space
           * to select a day.
           */
          default:
            return;
        }
        /**
         * If the day we want to move focus to is
         * disabled, do not do anything.
         */
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        /**
         * Give view a chance to re-render
         * then move focus to the new working day
         */
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = currentMonth => {
      /**
       * Get the number of padding days so
       * we know how much to offset our next selector by
       * to grab the correct calendar-day element.
       */
      const padding = currentMonth.querySelectorAll('.calendar-day-padding');
      const {
        day
      } = this.workingParts;
      if (day === null) {
        return;
      }
      /**
       * Get the calendar day element
       * and focus it.
       */
      const dayEl = currentMonth.querySelector(`.calendar-day-wrapper:nth-of-type(${padding.length + day}) .calendar-day`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const {
        min,
        defaultParts
      } = this;
      if (min === undefined) {
        this.minParts = undefined;
        return;
      }
      this.minParts = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.q)(min, defaultParts);
    };
    this.processMaxParts = () => {
      const {
        max,
        defaultParts
      } = this;
      if (max === undefined) {
        this.maxParts = undefined;
        return;
      }
      this.maxParts = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.r)(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      /**
       * For performance reasons, we only render 3
       * months at a time: The current month, the previous
       * month, and the next month. We have a scroll listener
       * on the calendar body to append/prepend new months.
       *
       * We can do this because Stencil is smart enough to not
       * re-create the .calendar-month containers, but rather
       * update the content within those containers.
       *
       * As an added bonus, WebKit has some troubles with
       * scroll-snap-stop: always, so not rendering all of
       * the months in a row allows us to mostly sidestep
       * that issue.
       */
      const months = calendarBodyRef.querySelectorAll('.calendar-month');
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
      const needsiOSRubberBandFix = mode === 'ios' && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1;
      /**
       * Before setting up the scroll listener,
       * scroll the middle month into view.
       * scrollIntoView() will scroll entire page
       * if element is not in viewport. Use scrollLeft instead.
       */
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * ((0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el) ? -1 : 1);
        const getChangedMonth = parts => {
          const box = calendarBodyRef.getBoundingClientRect();
          /**
           * If the current scroll position is all the way to the left
           * then we have scrolled to the previous month.
           * Otherwise, assume that we have scrolled to the next
           * month. We have a tolerance of 2px to account for
           * sub pixel rendering.
           *
           * Check below the next line ensures that we did not
           * swipe and abort (i.e. we swiped but we are still on the current month).
           */
          const condition = (0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el) ? calendarBodyRef.scrollLeft >= -2 : calendarBodyRef.scrollLeft <= 2;
          const month = condition ? startMonth : endMonth;
          /**
           * The edge of the month must be lined up with
           * the edge of the calendar body in order for
           * the component to update. Otherwise, it
           * may be the case that the user has paused their
           * swipe or the browser has not finished snapping yet.
           * Rather than check if the x values are equal,
           * we give it a tolerance of 2px to account for
           * sub pixel rendering.
           */
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2) return;
          /**
           * If we're force-rendering a month, assume we've
           * scrolled to that and return it.
           *
           * If forceRenderDate is ever used in a context where the
           * forced month is not immediately auto-scrolled to, this
           * should be updated to also check whether `month` has the
           * same month and year as the forced date.
           */
          const {
            forceRenderDate
          } = this;
          if (forceRenderDate !== undefined) {
            return {
              month: forceRenderDate.month,
              year: forceRenderDate.year,
              day: forceRenderDate.day
            };
          }
          /**
           * From here, we can determine if the start
           * month or the end month was scrolled into view.
           * If no month was changed, then we can return from
           * the scroll callback early.
           */
          if (month === startMonth) {
            return (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.d)(parts);
          } else if (month === endMonth) {
            return (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.e)(parts);
          } else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty('pointer-events');
            appliediOSRubberBandFix = false;
          }
          /**
           * If the month did not change
           * then we can return early.
           */
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate) return;
          const {
            month,
            day,
            year
          } = newDate;
          if (isMonthDisabled({
            month,
            year,
            day: null
          }, {
            minParts: Object.assign(Object.assign({}, this.minParts), {
              day: null
            }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), {
              day: null
            })
          })) {
            return;
          }
          /**
           * Prevent scrolling for other browsers
           * to give the DOM time to update and the container
           * time to properly snap.
           */
          calendarBodyRef.style.setProperty('overflow', 'hidden');
          /**
           * Use a writeTask here to ensure
           * that the state is updated and the
           * correct month is scrolled into view
           * in the same frame. This is not
           * typically a problem on newer devices
           * but older/slower device may have a flicker
           * if we did not do this.
           */
          (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
              month,
              day: day,
              year
            }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * ((0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty('overflow');
            if (this.resolveForceDateScrolling) {
              this.resolveForceDateScrolling();
            }
          });
        };
        /**
         * When the container finishes scrolling we
         * need to update the DOM with the selected month.
         */
        let scrollTimeout;
        /**
         * We do not want to attempt to set pointer-events
         * multiple times within a single swipe gesture as
         * that adds unnecessary work to the main thread.
         */
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          /**
           * On iOS it is possible to quickly rubber band
           * the scroll area before the scroll timeout has fired.
           * This results in users reaching the end of the scrollable
           * container before the DOM has updated.
           * By setting `pointer-events: none` we can ensure that
           * subsequent swipes do not happen while the container
           * is snapping.
           */
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty('pointer-events', 'none');
            appliediOSRubberBandFix = true;
          }
          // Wait ~3 frames
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener('scroll', scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener('scroll', scrollCallback);
        };
      });
    };
    /**
     * Clean up all listeners except for the overlay
     * listener. This is so that we can re-create the listeners
     * if the datetime has been hidden/presented by a modal or popover.
     */
    this.destroyInteractionListeners = () => {
      const {
        destroyCalendarListener,
        destroyKeyboardMO
      } = this;
      if (destroyCalendarListener !== undefined) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== undefined) {
        destroyKeyboardMO();
      }
    };
    this.processValue = value => {
      const hasValue = value !== null && value !== undefined && value !== '' && (!Array.isArray(value) || value.length > 0);
      const valueToProcess = hasValue ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.s)(value) : this.defaultParts;
      const {
        minParts,
        maxParts,
        workingParts,
        el
      } = this;
      this.warnIfIncorrectValueUsage();
      /**
       * Return early if the value wasn't parsed correctly, such as
       * if an improperly formatted date string was provided.
       */
      if (!valueToProcess) {
        return;
      }
      /**
       * Datetime should only warn of out of bounds values
       * if set by the user. If the `value` is undefined,
       * we will default to today's date which may be out
       * of bounds. In this case, the warning makes it look
       * like the developer did something wrong which is
       * not true.
       */
      if (hasValue) {
        (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.w)(valueToProcess, minParts, maxParts);
      }
      /**
       * If there are multiple values, pick an arbitrary one to clamp to. This way,
       * if the values are across months, we always show at least one of them. Note
       * that the values don't necessarily have to be in order.
       */
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const targetValue = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.P)(singleValue, minParts, maxParts);
      const {
        month,
        day,
        year,
        hour,
        minute
      } = targetValue;
      const ampm = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.Q)(hour);
      /**
       * Since `activeParts` indicates a value that
       * been explicitly selected either by the
       * user or the app, only update `activeParts`
       * if the `value` property is set.
       */
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        } else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm
          };
        }
      } else {
        /**
         * Reset the active parts if the value is not set.
         * This will clear the selected calendar day when
         * performing a clear action or using the reset() method.
         */
        this.activeParts = [];
      }
      /**
       * Only animate if:
       * 1. We're using grid style (wheel style pickers should just jump to new value)
       * 2. The month and/or year actually changed, and both are defined (otherwise there's nothing to animate to)
       * 3. The calendar body is visible (prevents animation when in collapsed datetime-button, for example)
       * 4. The month/year picker is not open (since you wouldn't see the animation anyway)
       */
      const didChangeMonth = month !== undefined && month !== workingParts.month || year !== undefined && year !== workingParts.year;
      const bodyIsVisible = el.classList.contains('datetime-ready');
      const {
        isGridStyle,
        showMonthAndYear
      } = this;
      let areAllSelectedDatesInSameMonth = true;
      if (Array.isArray(valueToProcess)) {
        const firstMonth = valueToProcess[0].month;
        for (const date of valueToProcess) {
          if (date.month !== firstMonth) {
            areAllSelectedDatesInSameMonth = false;
            break;
          }
        }
      }
      /**
       * If there is more than one date selected
       * and the dates aren't all in the same month,
       * then we should neither animate to the date
       * nor update the working parts because we do
       * not know which date the user wants to view.
       */
      if (areAllSelectedDatesInSameMonth) {
        if (isGridStyle && didChangeMonth && bodyIsVisible && !showMonthAndYear) {
          this.animateToDate(targetValue);
        } else {
          /**
           * We only need to do this if we didn't just animate to a new month,
           * since that calls prevMonth/nextMonth which calls setWorkingParts for us.
           */
          this.setWorkingParts({
            month,
            day,
            year,
            hour,
            minute,
            ampm
          });
        }
      }
    };
    this.animateToDate = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (targetValue) {
        const {
          workingParts
        } = _this;
        /**
         * Tell other render functions that we need to force the
         * target month to appear in place of the actual next/prev month.
         * Because this is a State variable, a rerender will be triggered
         * automatically, updating the rendered months.
         */
        _this.forceRenderDate = targetValue;
        /**
         * Flag that we've started scrolling to the forced date.
         * The resolve function will be called by the datetime's
         * scroll listener when it's done updating everything.
         * This is a replacement for making prev/nextMonth async,
         * since the logic we're waiting on is in a listener.
         */
        const forceDateScrollingPromise = new Promise(resolve => {
          _this.resolveForceDateScrolling = resolve;
        });
        /**
         * Animate smoothly to the forced month. This will also update
         * workingParts and correct the surrounding months for us.
         */
        const targetMonthIsBefore = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.i)(targetValue, workingParts);
        targetMonthIsBefore ? _this.prevMonth() : _this.nextMonth();
        yield forceDateScrollingPromise;
        _this.resolveForceDateScrolling = undefined;
        _this.forceRenderDate = undefined;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector('.calendar-month:last-of-type');
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * ((0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el) ? -1 : 1),
        behavior: 'smooth'
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector('.calendar-month:first-of-type');
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: 'pm'
    };
    this.isTimePopoverOpen = false;
    this.forceRenderDate = undefined;
    this.color = 'primary';
    this.name = this.inputId;
    this.disabled = false;
    this.formatOptions = undefined;
    this.readonly = false;
    this.isDateEnabled = undefined;
    this.min = undefined;
    this.max = undefined;
    this.presentation = 'date-time';
    this.cancelText = 'Cancel';
    this.doneText = 'Done';
    this.clearText = 'Clear';
    this.yearValues = undefined;
    this.monthValues = undefined;
    this.dayValues = undefined;
    this.hourValues = undefined;
    this.minuteValues = undefined;
    this.locale = 'default';
    this.firstDayOfWeek = 0;
    this.titleSelectedDatesFormatter = undefined;
    this.multiple = false;
    this.highlightedDates = undefined;
    this.value = undefined;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.hourCycle = undefined;
    this.size = 'fixed';
    this.preferWheel = false;
  }
  formatOptionsChanged() {
    const {
      el,
      formatOptions,
      presentation
    } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
    warnIfTimeZoneProvided(el, formatOptions);
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  presentationChanged() {
    const {
      el,
      formatOptions,
      presentation
    } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
  }
  get isGridStyle() {
    const {
      presentation,
      preferWheel
    } = this;
    const hasDatePresentation = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    return hasDatePresentation && !preferWheel;
  }
  yearValuesChanged() {
    this.parsedYearValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.minuteValues);
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = _this2;
      if (_this2.hasValue()) {
        _this2.processValue(value);
      }
      _this2.emitStyle();
      _this2.ionValueChange.emit({
        value
      });
    })();
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  confirm(closeOverlay = false) {
    var _this3 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        isCalendarPicker,
        activeParts,
        preferWheel,
        workingParts
      } = _this3;
      /**
       * We only update the value if the presentation is not a calendar picker.
       */
      if (activeParts !== undefined || !isCalendarPicker) {
        const activePartsIsArray = Array.isArray(activeParts);
        if (activePartsIsArray && activeParts.length === 0) {
          if (preferWheel) {
            /**
             * If the datetime is using a wheel picker, but the
             * active parts are empty, then the user has confirmed the
             * initial value (working parts) presented to them.
             */
            _this3.setValue((0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.u)(workingParts));
          } else {
            _this3.setValue(undefined);
          }
        } else {
          _this3.setValue((0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.u)(activeParts));
        }
      }
      if (closeOverlay) {
        _this3.closeParentOverlay(CONFIRM_ROLE);
      }
    })();
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   */
  reset(startDate) {
    var _this4 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.processValue(startDate);
    })();
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  cancel(closeOverlay = false) {
    var _this5 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.ionCancel.emit();
      if (closeOverlay) {
        _this5.closeParentOverlay(CANCEL_ROLE);
      }
    })();
  }
  get isCalendarPicker() {
    const {
      presentation
    } = this;
    return presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
  }
  connectedCallback() {
    this.clearFocusVisible = (0,_focus_visible_dd40d69f_js__WEBPACK_IMPORTED_MODULE_2__.startFocusVisible)(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = undefined;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    const {
      el,
      intersectionTrackerRef
    } = this;
    /**
     * If a scrollable element is hidden using `display: none`,
     * it will not have a scroll height meaning we cannot scroll elements
     * into view. As a result, we will need to wait for the datetime to become
     * visible if used inside of a modal or a popover otherwise the scrollable
     * areas will not have the correct values snapped into place.
     */
    const visibleCallback = entries => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      /**
       * TODO FW-2793: Datetime needs a frame to ensure that it
       * can properly scroll contents into view. As a result
       * we hide the scrollable content until after that frame
       * so users do not see the content quickly shifting. The downside
       * is that the content will pop into view a frame after. Maybe there
       * is a better way to handle this?
       */
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        this.el.classList.add('datetime-ready');
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, {
      threshold: 0.01,
      root: el
    });
    /**
     * Use raf to avoid a race condition between the component loading and
     * its display animation starting (such as when shown in a modal). This
     * could cause the datetime to start at a visibility of 0, erroneously
     * triggering the `hiddenIO` observer below.
     */
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(intersectionTrackerRef));
    /**
     * We need to clean up listeners when the datetime is hidden
     * in a popover/modal so that we can properly scroll containers
     * back into view if they are re-presented. When the datetime is hidden
     * the scroll areas have scroll widths/heights of 0px, so any snapping
     * we did originally has been lost.
     */
    const hiddenCallback = entries => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      /**
       * When datetime is hidden, we need to make sure that
       * the month/year picker is closed. Otherwise,
       * it will be open when the datetime re-appears
       * and the scroll area of the calendar grid will be 0.
       * As a result, the wrong month will be shown.
       */
      this.showMonthAndYear = false;
      (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.w)(() => {
        this.el.classList.remove('datetime-ready');
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, {
      threshold: 0,
      root: el
    });
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(intersectionTrackerRef));
    /**
     * Datetime uses Ionic components that emit
     * ionFocus and ionBlur. These events are
     * composed meaning they will cross
     * the shadow dom boundary. We need to
     * stop propagation on these events otherwise
     * developers will see 2 ionFocus or 2 ionBlur
     * events at a time.
     */
    const root = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.g)(this.el);
    root.addEventListener('ionFocus', ev => ev.stopPropagation());
    root.addEventListener('ionBlur', ev => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const {
      presentation,
      prevPresentation,
      calendarBodyRef,
      minParts,
      preferWheel,
      forceRenderDate
    } = this;
    /**
     * TODO(FW-2165)
     * Remove this when https://bugs.webkit.org/show_bug.cgi?id=235960 is fixed.
     * When using `min`, we add `scroll-snap-align: none`
     * to the disabled month so that users cannot scroll to it.
     * This triggers a bug in WebKit where the scroll position is reset.
     * Since the month change logic is handled by a scroll listener,
     * this causes the month to change leading to `scroll-snap-align`
     * changing again, thus changing the scroll position again and causing
     * an infinite loop.
     * This issue only applies to the calendar grid, so we can disable
     * it if the calendar grid is not being used.
     */
    const hasCalendarGrid = !preferWheel && ['date-time', 'time-date', 'date'].includes(presentation);
    if (minParts !== undefined && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(1)');
      /**
       * We need to make sure the datetime is not in the process
       * of scrolling to a new datetime value if the value
       * is updated programmatically.
       * Otherwise, the datetime will appear to not scroll at all because
       * we are resetting the scroll position to the center of the view.
       * Prior to the datetime's value being updated programmatically,
       * the calendarBodyRef is scrolled such that the middle month is centered
       * in the view. The below code updates the scroll position so the middle
       * month is also centered in the view. Since the scroll position did not change,
       * the scroll callback in this file does not fire,
       * and the resolveForceDateScrolling promise never resolves.
       */
      if (workingMonth && forceRenderDate === undefined) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * ((0,_dir_babeabeb_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    /**
     * The month/year picker from the date interface
     * should be closed as it is not available in non-date
     * interfaces.
     */
    this.showMonthAndYear = false;
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const {
      el,
      formatOptions,
      highlightedDates,
      multiple,
      presentation,
      preferWheel
    } = this;
    if (multiple) {
      if (presentation !== 'date') {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== undefined) {
      if (presentation !== 'date' && presentation !== 'date-time' && presentation !== 'time-date') {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)('The highlightedDates property is only supported with the date, date-time, and time-date presentations.', el);
      }
      if (preferWheel) {
        (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)('The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    if (formatOptions) {
      checkForPresentationFormatMismatch(el, presentation, formatOptions);
      warnIfTimeZoneProvided(el, formatOptions);
    }
    const hourValues = this.parsedHourValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.hourValues);
    const minuteValues = this.parsedMinuteValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.minuteValues);
    const monthValues = this.parsedMonthValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.monthValues);
    const yearValues = this.parsedYearValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.yearValues);
    const dayValues = this.parsedDayValues = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.t)(this.dayValues);
    const todayParts = this.todayParts = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.s)((0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.x)());
    this.processMinParts();
    this.processMaxParts();
    this.defaultParts = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.y)({
      refParts: todayParts,
      monthValues,
      dayValues,
      yearValues,
      hourValues,
      minuteValues,
      minParts: this.minParts,
      maxParts: this.maxParts
    });
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      'interactive-disabled': this.disabled
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const {
      disabled,
      readonly,
      showDefaultButtons,
      showClearButton
    } = this;
    /**
     * The cancel, clear, and confirm buttons
     * should not be interactive if the datetime
     * is disabled or readonly.
     */
    const isButtonDisabled = disabled || readonly;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(undefined);
    };
    /**
     * By default we render two buttons:
     * Cancel - Dismisses the datetime and
     * does not update the `value` prop.
     * OK - Dismisses the datetime and
     * updates the `value` prop.
     */
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-footer"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-buttons"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        ['datetime-action-buttons']: true,
        ['has-clear-button']: this.showClearButton
      }
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "buttons"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-buttons", null, showDefaultButtons && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      id: "cancel-button",
      color: this.color,
      onClick: () => this.cancel(true),
      disabled: isButtonDisabled
    }, this.cancelText), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-action-buttons-container"
    }, showClearButton && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      id: "clear-button",
      color: this.color,
      onClick: () => clearButtonClick(),
      disabled: isButtonDisabled
    }, this.clearText), showDefaultButtons && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      id: "confirm-button",
      color: this.color,
      onClick: () => this.confirm(true),
      disabled: isButtonDisabled
    }, this.doneText)))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    /**
     * If presentation="time-date" we switch the
     * order of the render array here instead of
     * manually reordering each date/time picker
     * column with CSS. This allows for additional
     * flexibility if we need to render subsets
     * of the date/time data or do additional ordering
     * within the child render functions.
     */
    const renderArray = forcePresentation === 'time-date' ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)] : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === 'date-time' || forcePresentation === 'time-date' ? this.renderCombinedDatePickerColumn() : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const {
      defaultParts,
      disabled,
      workingParts,
      locale,
      minParts,
      maxParts,
      todayParts,
      isDateEnabled
    } = this;
    const activePart = this.getActivePartsWithFallback();
    /**
     * By default, generate a range of 3 months:
     * Previous month, current month, and next month
     */
    const monthsToRender = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.z)(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    /**
     * Ensure that users can select the entire window of dates.
     */
    monthsToRender[0].day = 1;
    lastMonth.day = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.A)(lastMonth.month, lastMonth.year);
    /**
     * Narrow the dates rendered based on min/max dates (if any).
     * The `min` date is used if the min is after the generated min month.
     * The `max` date is used if the max is before the generated max month.
     * This ensures that the sliding window always stays at 3 months
     * but still allows future dates to be lazily rendered based on any min/max
     * constraints.
     */
    const min = minParts !== undefined && (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.b)(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== undefined && (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.i)(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.B)(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled((0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.u)(referenceParts));
        } catch (e) {
          (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.a)('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, itemObject), {
          disabled
        });
      });
    }
    /**
     * If we have selected a day already, then default the column
     * to that value. Otherwise, set it to the default date.
     */
    const todayString = workingParts.day !== null ? `${workingParts.year}-${workingParts.month}-${workingParts.day}` : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select a date",
      class: "date-column",
      color: this.color,
      disabled: disabled,
      value: todayString,
      onIonChange: ev => {
        const {
          value
        } = ev.detail;
        const findPart = parts.find(({
          month,
          day,
          year
        }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        ev.stopPropagation();
      }
    }, items.map(item => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: item.value === todayString ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: item.value,
      disabled: item.disabled,
      value: item.value
    }, item.text)));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const {
      workingParts,
      isDateEnabled
    } = this;
    const shouldRenderMonths = forcePresentation !== 'year' && forcePresentation !== 'time';
    const months = shouldRenderMonths ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.C)(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues) : [];
    const shouldRenderDays = forcePresentation === 'date';
    let days = shouldRenderDays ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.D)(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues) : [];
    if (isDateEnabled) {
      days = days.map(dayObject => {
        const {
          value
        } = dayObject;
        const valueNum = typeof value === 'string' ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year
        };
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled((0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.u)(referenceParts));
        } catch (e) {
          (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.a)('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, dayObject), {
          disabled
        });
      });
    }
    const shouldRenderYears = forcePresentation !== 'month' && forcePresentation !== 'time';
    const years = shouldRenderYears ? (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.E)(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues) : [];
    /**
     * Certain locales show the day before the month.
     */
    const showMonthFirst = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.F)(this.locale, {
      month: 'numeric',
      day: 'numeric'
    });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [this.renderMonthPickerColumn(months), this.renderDayPickerColumn(days), this.renderYearPickerColumn(years)];
    } else {
      renderArray = [this.renderDayPickerColumn(days), this.renderMonthPickerColumn(months), this.renderYearPickerColumn(years)];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    const pickerColumnValue = (_a = workingParts.day !== null ? workingParts.day : this.defaultParts.day) !== null && _a !== void 0 ? _a : undefined;
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select a day",
      class: "day-column",
      color: this.color,
      disabled: disabled,
      value: pickerColumnValue,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          day: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          day: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, days.map(day => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: day.value === pickerColumnValue ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: day.value,
      disabled: day.disabled,
      value: day.value
    }, day.text)));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select a month",
      class: "month-column",
      color: this.color,
      disabled: disabled,
      value: workingParts.month,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          month: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          month: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, months.map(month => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: month.value === workingParts.month ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: month.value,
      disabled: month.disabled,
      value: month.value
    }, month.text)));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select a year",
      class: "year-column",
      color: this.color,
      disabled: disabled,
      value: workingParts.year,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          year: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          year: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, years.map(year => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: year.value === workingParts.year ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: year.value,
      disabled: year.disabled,
      value: year.value
    }, year.text)));
  }
  renderTimePickerColumns(forcePresentation) {
    if (['date', 'month', 'month-year', 'year'].includes(forcePresentation)) {
      return [];
    }
    /**
     * If a user has not selected a date,
     * then we should show all times. If the
     * user has selected a date (even if it has
     * not been confirmed yet), we should apply
     * the max and min restrictions so that the
     * time picker shows values that are
     * appropriate for the selected date.
     */
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== undefined;
    const {
      hoursData,
      minutesData,
      dayPeriodData
    } = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.G)(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : undefined, userHasSelectedDate ? this.maxParts : undefined, this.parsedHourValues, this.parsedMinuteValues);
    return [this.renderHourPickerColumn(hoursData), this.renderMinutePickerColumn(minutesData), this.renderDayPeriodPickerColumn(dayPeriodData)];
  }
  renderHourPickerColumn(hoursData) {
    const {
      disabled,
      workingParts
    } = this;
    if (hoursData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select an hour",
      color: this.color,
      disabled: disabled,
      value: activePart.hour,
      numericInput: true,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          hour: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          hour: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, hoursData.map(hour => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: hour.value === activePart.hour ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: hour.value,
      disabled: hour.disabled,
      value: hour.value
    }, hour.text)));
  }
  renderMinutePickerColumn(minutesData) {
    const {
      disabled,
      workingParts
    } = this;
    if (minutesData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select a minute",
      color: this.color,
      disabled: disabled,
      value: activePart.minute,
      numericInput: true,
      onIonChange: ev => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          minute: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          minute: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, minutesData.map(minute => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: minute.value === activePart.minute ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: minute.value,
      disabled: minute.disabled,
      value: minute.value
    }, minute.text)));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const {
      disabled,
      workingParts
    } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.H)(this.locale);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column", {
      "aria-label": "Select a day period",
      style: isDayPeriodRTL ? {
        order: '-1'
      } : {},
      color: this.color,
      disabled: disabled,
      value: activePart.ampm,
      onIonChange: ev => {
        const hour = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.R)(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          ampm: ev.detail.value,
          hour
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          ampm: ev.detail.value,
          hour
        }));
        ev.stopPropagation();
      }
    }, dayPeriodData.map(dayPeriod => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-column-option", {
      part: dayPeriod.value === activePart.ampm ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: dayPeriod.value,
      disabled: dayPeriod.disabled,
      value: dayPeriod.value
    }, dayPeriod.text)));
  }
  renderWheelView(forcePresentation) {
    const {
      locale
    } = this;
    const showMonthFirst = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.F)(locale);
    const columnOrder = showMonthFirst ? 'month-first' : 'year-first';
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        [`wheel-order-${columnOrder}`]: true
      }
    }, this.renderWheelPicker(forcePresentation));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const {
      disabled
    } = this;
    const expandedIcon = mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__.l : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__.p;
    const collapsedIcon = mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__.o : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__.q;
    const prevMonthDisabled = disabled || isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = disabled || isNextMonthDisabled(this.workingParts, this.maxParts);
    // don't use the inheritAttributes util because it removes dir from the host, and we still need that
    const hostDir = this.el.getAttribute('dir') || undefined;
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-header"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-action-buttons"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-month-year"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      class: {
        'calendar-month-year-toggle': true,
        'ion-activatable': true,
        'ion-focusable': true
      },
      part: "month-year-button",
      disabled: disabled,
      "aria-label": this.showMonthAndYear ? 'Hide year picker' : 'Show year picker',
      onClick: () => this.toggleMonthAndYearView()
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      id: "toggle-wrapper"
    }, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.J)(this.locale, this.workingParts), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      "aria-hidden": "true",
      icon: this.showMonthAndYear ? expandedIcon : collapsedIcon,
      lazy: false,
      flipRtl: true
    })), mode === 'md' && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null))), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-next-prev"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-buttons", null, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      "aria-label": "Previous month",
      disabled: prevMonthDisabled,
      onClick: () => this.prevMonth()
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__.c,
      lazy: false,
      flipRtl: true
    })), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-button", {
      "aria-label": "Next month",
      disabled: nextMonthDisabled,
      onClick: () => this.nextMonth()
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_7__.o,
      lazy: false,
      flipRtl: true
    }))))), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-days-of-week",
      "aria-hidden": "true"
    }, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.I)(this.locale, mode, this.firstDayOfWeek % 7).map(d => {
      return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "day-of-week"
      }, d);
    })));
  }
  renderMonth(month, year) {
    const {
      disabled,
      readonly
    } = this;
    const yearAllowed = this.parsedYearValues === undefined || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === undefined || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const isDatetimeDisabled = disabled || readonly;
    const swipeDisabled = disabled || isMonthDisabled({
      month,
      year,
      day: null
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), {
        day: null
      }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), {
        day: null
      })
    });
    // The working month should never have swipe disabled.
    // Otherwise the CSS scroll snap will not work and the user
    // can free-scroll the calendar.
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      "aria-hidden": !isWorkingMonth ? 'true' : null,
      class: {
        'calendar-month': true,
        // Prevents scroll snap swipe gestures for months outside of the min/max bounds
        'calendar-month-disabled': !isWorkingMonth && swipeDisabled
      }
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-month-grid"
    }, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.K)(month, year, this.firstDayOfWeek % 7).map((dateObject, index) => {
      const {
        day,
        dayOfWeek
      } = dateObject;
      const {
        el,
        highlightedDates,
        isDateEnabled,
        multiple
      } = this;
      const referenceParts = {
        month,
        day,
        year
      };
      const isCalendarPadding = day === null;
      const {
        isActive,
        isToday,
        ariaLabel,
        ariaSelected,
        disabled: isDayDisabled,
        text
      } = getCalendarDayState(this.locale, referenceParts, this.activeParts, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.u)(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || isDayDisabled;
      if (!isCalDayDisabled && isDateEnabled !== undefined) {
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        } catch (e) {
          (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.a)('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', el, e);
        }
      }
      /**
       * Some days are constrained through max & min or allowed dates
       * and also disabled because the component is readonly or disabled.
       * These need to be displayed differently.
       */
      const isCalDayConstrained = isCalDayDisabled && isDatetimeDisabled;
      const isButtonDisabled = isCalDayDisabled || isDatetimeDisabled;
      let dateStyle = undefined;
      /**
       * Custom highlight styles should not override the style for selected dates,
       * nor apply to "filler days" at the start of the grid.
       */
      if (highlightedDates !== undefined && !isActive && day !== null) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      let dateParts = undefined;
      // "Filler days" at the beginning of the grid should not get the calendar day
      // CSS parts added to them
      if (!isCalendarPadding) {
        dateParts = `calendar-day${isActive ? ' active' : ''}${isToday ? ' today' : ''}${isCalDayDisabled ? ' disabled' : ''}`;
      }
      return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "calendar-day-wrapper"
      }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
        // We need to use !important for the inline styles here because
        // otherwise the CSS shadow parts will override these styles.
        // See https://github.com/WICG/webcomponents/issues/847
        // Both the CSS shadow parts and highlightedDates styles are
        // provided by the developer, but highlightedDates styles should
        // always take priority.
        ref: el => {
          if (el) {
            el.style.setProperty('color', `${dateStyle ? dateStyle.textColor : ''}`, 'important');
            el.style.setProperty('background-color', `${dateStyle ? dateStyle.backgroundColor : ''}`, 'important');
          }
        },
        tabindex: "-1",
        "data-day": day,
        "data-month": month,
        "data-year": year,
        "data-index": index,
        "data-day-of-week": dayOfWeek,
        disabled: isButtonDisabled,
        class: {
          'calendar-day-padding': isCalendarPadding,
          'calendar-day': true,
          'calendar-day-active': isActive,
          'calendar-day-constrained': isCalDayConstrained,
          'calendar-day-today': isToday
        },
        part: dateParts,
        "aria-hidden": isCalendarPadding ? 'true' : null,
        "aria-selected": ariaSelected,
        "aria-label": ariaLabel,
        onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
            month,
            day,
            year
          }));
          // multiple only needs date info, so we can wipe out other fields like time
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year
            }, isActive);
          } else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), {
              month,
              day,
              year
            }));
          }
        }
      }, text));
    })));
  }
  renderCalendarBody() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "calendar-body ion-focusable",
      ref: el => this.calendarBodyRef = el,
      tabindex: "0"
    }, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.z)(this.workingParts, this.forceRenderDate).map(({
      month,
      year
    }) => {
      return this.renderMonth(month, year);
    }));
  }
  renderCalendar(mode) {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-calendar",
      key: "datetime-calendar"
    }, this.renderCalendarHeader(mode), this.renderCalendarBody());
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "time-label"
    }, "Time");
  }
  renderTimeOverlay() {
    var _this6 = this;
    const {
      disabled,
      hourCycle,
      isTimePopoverOpen,
      locale,
      formatOptions
    } = this;
    const computedHourCycle = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.L)(locale, hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [(0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "time-header"
    }, this.renderTimeLabel()), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      class: {
        'time-body': true,
        'time-body-active': isTimePopoverOpen
      },
      part: `time-button${isTimePopoverOpen ? ' active' : ''}`,
      "aria-expanded": "false",
      "aria-haspopup": "true",
      disabled: disabled,
      onClick: function () {
        var _ref2 = (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
          const {
            popoverRef
          } = _this6;
          if (popoverRef) {
            _this6.isTimePopoverOpen = true;
            popoverRef.present(new CustomEvent('ionShadowTarget', {
              detail: {
                ionShadowTarget: ev.target
              }
            }));
            yield popoverRef.onWillDismiss();
            _this6.isTimePopoverOpen = false;
          }
        });
        return function onClick(_x2) {
          return _ref2.apply(this, arguments);
        };
      }()
    }, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.M)(locale, activePart, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time)), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-popover", {
      alignment: "center",
      translucent: true,
      overlayIndex: 1,
      arrow: false,
      onWillPresent: ev => {
        /**
         * Intersection Observers do not consistently fire between Blink and Webkit
         * when toggling the visibility of the popover and trying to scroll the picker
         * column to the correct time value.
         *
         * This will correctly scroll the element position to the correct time value,
         * before the popover is fully presented.
         */
        const cols = ev.target.querySelectorAll('ion-picker-column');
        // TODO (FW-615): Potentially remove this when intersection observers are fixed in picker column
        cols.forEach(col => col.scrollActiveItemIntoView());
      },
      style: {
        '--offset-y': '-10px',
        '--min-width': 'fit-content'
      },
      // Allow native browser keyboard events to support up/down/home/end key
      // navigation within the time picker.
      keyboardEvents: true,
      ref: el => this.popoverRef = el
    }, this.renderWheelPicker('time'))];
  }
  getHeaderSelectedDateText() {
    var _a;
    const {
      activeParts,
      formatOptions,
      multiple,
      titleSelectedDatesFormatter
    } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`; // default/fallback for multiple selection
      if (titleSelectedDatesFormatter !== undefined) {
        try {
          headerText = titleSelectedDatesFormatter((0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.u)(activeParts));
        } catch (e) {
          (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.a)('Exception in provided `titleSelectedDatesFormatter`: ', e);
        }
      }
    } else {
      // for exactly 1 day selected (multiple set or not), show a formatted version of that
      headerText = (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.N)(this.locale, this.getActivePartsWithFallback(), (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-header"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-title"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "title"
    }, "Select Date")), showExpandedHeader && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-selected-date"
    }, this.getHeaderSelectedDateText()));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const {
      presentation
    } = this;
    const timeOnlyPresentation = presentation === 'time';
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-time"
    }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay());
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "datetime-year"
    }, this.renderWheelView('month-year'));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const {
      presentation,
      preferWheel
    } = this;
    /**
     * Certain presentation types have separate grid and wheel displays.
     * If preferWheel is true then we should show a wheel picker instead.
     */
    const hasWheelVariant = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case 'date-time':
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderTime(), this.renderFooter()];
      case 'time-date':
        return [this.renderHeader(), this.renderTime(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
      case 'time':
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case 'month':
      case 'month-year':
      case 'year':
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
    }
  }
  render() {
    const {
      name,
      value,
      disabled,
      el,
      color,
      readonly,
      showMonthAndYear,
      preferWheel,
      presentation,
      size,
      isGridStyle
    } = this;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
    const isMonthAndYearPresentation = presentation === 'year' || presentation === 'month' || presentation === 'month-year';
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    const hasWheelVariant = hasDatePresentation && preferWheel;
    (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.d)(true, el, name, (0,_data_ae11fd43_js__WEBPACK_IMPORTED_MODULE_9__.O)(value), disabled);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '7afbb1a7e6c78389b4588999779e5c90e010e85d',
      "aria-disabled": disabled ? 'true' : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      class: Object.assign({}, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__.c)(color, {
        [mode]: true,
        ['datetime-readonly']: readonly,
        ['datetime-disabled']: disabled,
        'show-month-and-year': shouldShowMonthAndYear,
        'month-year-picker-open': monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: isGridStyle
      }))
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '297c458d4d17154cb297e2ef5926505bcb2d1fce',
      class: "intersection-tracker",
      ref: el => this.intersectionTrackerRef = el
    }), this.renderDatetime(mode));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "formatOptions": ["formatOptionsChanged"],
      "disabled": ["disabledChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "presentation": ["presentationChanged"],
      "yearValues": ["yearValuesChanged"],
      "monthValues": ["monthValuesChanged"],
      "dayValues": ["dayValuesChanged"],
      "hourValues": ["hourValuesChanged"],
      "minuteValues": ["minuteValuesChanged"],
      "value": ["valueChanged"]
    };
  }
};
let datetimeIds = 0;
const CANCEL_ROLE = 'datetime-cancel';
const CONFIRM_ROLE = 'datetime-confirm';
const WHEEL_ITEM_PART = 'wheel-item';
const WHEEL_ITEM_ACTIVE_PART = `active`;
Datetime.style = {
  ios: IonDatetimeIosStyle0,
  md: IonDatetimeMdStyle0
};

/**
 * iOS Picker Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__.c)();
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__.c)();
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Picker Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__.c)();
  const backdropAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__.c)();
  const wrapperAnimation = (0,_animation_eab5a4ca_js__WEBPACK_IMPORTED_MODULE_12__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.01);
  wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
const pickerIosCss = ".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}";
const IonPickerLegacyIosStyle0 = pickerIosCss;
const pickerMdCss = ".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}";
const IonPickerLegacyMdStyle0 = pickerMdCss;
const Picker = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerDidPresent", 7);
    this.willPresent = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerWillPresent", 7);
    this.willDismiss = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerWillDismiss", 7);
    this.didDismiss = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerDidDismiss", 7);
    this.didPresentShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "didDismiss", 7);
    this.delegateController = (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
    this.lockController = (0,_lock_controller_316928be_js__WEBPACK_IMPORTED_MODULE_10__.c)();
    this.triggerController = (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.e)();
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.B);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.i)(role)) {
        const cancelButton = this.buttons.find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.presented = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.buttons = [];
    this.columns = [];
    this.cssClass = undefined;
    this.duration = 0;
    this.showBackdrop = true;
    this.backdropDismiss = true;
    this.animated = true;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
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
  connectedCallback() {
    (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.j)(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.k)(this.el);
    }
  }
  componentDidLoad() {
    (0,_index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_4__.p)('ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.', this.el);
    /**
     * If picker was rendered with isOpen="true"
     * then we should open picker immediately.
     */
    if (this.isOpen === true) {
      (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.r)(() => this.present());
    }
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
   * Present the picker overlay after it has been created.
   */
  present() {
    var _this7 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this7.lockController.lock();
      yield _this7.delegateController.attachViewToDom();
      yield (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.f)(_this7, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
      if (_this7.duration > 0) {
        _this7.durationTimeout = setTimeout(() => _this7.dismiss(), _this7.duration);
      }
      unlock();
    })();
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    var _this8 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unlock = yield _this8.lockController.lock();
      if (_this8.durationTimeout) {
        clearTimeout(_this8.durationTimeout);
      }
      const dismissed = yield (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.g)(_this8, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
      if (dismissed) {
        _this8.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    })();
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.h)(this.el, 'ionPickerDidDismiss');
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.h)(this.el, 'ionPickerWillDismiss');
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find(column => column.name === name));
  }
  buttonClick(button) {
    var _this9 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.i)(role)) {
        return _this9.dismiss(undefined, role);
      }
      const shouldDismiss = yield _this9.callButtonHandler(button);
      if (shouldDismiss) {
        return _this9.dismiss(_this9.getSelected(), button.role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    var _this10 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const rtn = yield (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_11__.s)(button.handler, _this10.getSelected());
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      return true;
    })();
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn = col.selectedIndex !== undefined ? col.options[col.selectedIndex] : undefined;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : undefined,
        value: selectedColumn ? selectedColumn.value : undefined,
        columnIndex: index
      };
    });
    return selected;
  }
  render() {
    const {
      htmlAttributes
    } = this;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, Object.assign({
      key: '0712fa8732141848e50ad2e08e2ba66ef2a48991',
      "aria-modal": "true",
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        // Used internally for styling
        [`picker-${mode}`]: true,
        'overlay-hidden': true
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonPickerWillDismiss: this.dispatchCancelHandler
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      key: 'c997632ef0488698739664012de5a6494de438b6',
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '20045054a76cca997b410835fa6b305af22dcb12',
      tabindex: "0",
      "aria-hidden": "true"
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'a73a6ac20b685ed9694d4fa95ea236ce5d63fdbf',
      class: "picker-wrapper ion-overlay-wrapper",
      role: "dialog"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '1221cdcc2ff013deeba12170129c8fe78308330c',
      class: "picker-toolbar"
    }, this.buttons.map(b => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: buttonWrapperClass(b)
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      onClick: () => this.buttonClick(b),
      class: buttonClass(b)
    }, b.text)))), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '45038a58430a4251100797b902e7034243137564',
      class: "picker-columns"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'c579bb69cddd4090912855ffd7f59536280f34b9',
      class: "picker-above-highlight"
    }), this.presented && this.columns.map(c => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-picker-legacy-column", {
      col: c
    })), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '978c6632d82a97d053b729c9de65dd3af4c4cee2',
      class: "picker-below-highlight"
    }))), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'e7e9dc437a3cf6d559e2cb0df71af69047a2ae31',
      tabindex: "0",
      "aria-hidden": "true"
    }));
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
const buttonWrapperClass = button => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== undefined,
    'picker-toolbar-button': true
  };
};
const buttonClass = button => {
  return Object.assign({
    'picker-button': true,
    'ion-activatable': true
  }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__.g)(button.cssClass));
};
Picker.style = {
  ios: IonPickerLegacyIosStyle0,
  md: IonPickerLegacyMdStyle0
};
const pickerColumnIosCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}";
const IonPickerLegacyColumnIosStyle0 = pickerColumnIosCss;
const pickerColumnMdCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #0054e9)}";
const IonPickerLegacyColumnMdStyle0 = pickerColumnMdCss;
const PickerColumnCmp = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionPickerColChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    // `colDidChange` is a flag that gets set when the column is changed
    // dynamically. When this flag is set, the column will refresh
    // after the component re-renders to incorporate the new column data.
    // This is necessary because `this.refresh` queries for the option elements,
    // so it needs to wait for the latest elements to be available in the DOM.
    // Ex: column is created with 3 options. User updates the column data
    // to have 5 options. The column will still think it only has 3 options.
    this.colDidChange = false;
    this.col = undefined;
  }
  colChanged() {
    this.colDidChange = true;
  }
  connectedCallback() {
    var _this11 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let pickerRotateFactor = 0;
      let pickerScaleFactor = 0.81;
      const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_8__.b)(_this11);
      if (mode === 'ios') {
        pickerRotateFactor = -0.46;
        pickerScaleFactor = 1;
      }
      _this11.rotateFactor = pickerRotateFactor;
      _this11.scaleFactor = pickerScaleFactor;
      _this11.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-39782642.js */ 8607))).createGesture({
        el: _this11.el,
        gestureName: 'picker-swipe',
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: ev => _this11.onStart(ev),
        onMove: ev => _this11.onMove(ev),
        onEnd: ev => _this11.onEnd(ev)
      });
      _this11.gesture.enable();
      // Options have not been initialized yet
      // Animation must be disabled through the `noAnimate` flag
      // Otherwise, the options will render
      // at the top of the column and transition down
      _this11.tmrId = setTimeout(() => {
        _this11.noAnimate = false;
        // After initialization, `refresh()` will be called
        // At this point, animation will be enabled. The options will
        // animate as they are being selected.
        _this11.refresh(true);
      }, 250);
    })();
  }
  componentDidLoad() {
    this.onDomChange();
  }
  componentDidUpdate() {
    // Options may have changed since last update.
    if (this.colDidChange) {
      // Animation must be disabled through the `onDomChange` parameter.
      // Otherwise, the recently added options will render
      // at the top of the column and transition down
      this.onDomChange(true, false);
      this.colDidChange = false;
    }
  }
  disconnectedCallback() {
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    if (this.tmrId) clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    // if there is a selected index, then figure out it's y position
    // if there isn't a selected index, then just use the top y position
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    // set what y position we're at
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    // ensure we've got a good round number :)
    let translateY = 0;
    let translateZ = 0;
    const {
      col,
      rotateFactor
    } = this;
    const prevSelected = col.selectedIndex;
    const selectedIndex = col.selectedIndex = this.indexForY(-y);
    const durationStr = duration === 0 ? '' : duration + 'ms';
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = '';
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        } else {
          translateY = -9999;
        }
      } else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      // Update transition duration
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = '';
      } else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      // Update transform
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      /**
       * Ensure that the select column
       * item has the selected class
       */
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      } else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = prevSelected;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      // have not set a last index yet
      (0,_haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_13__.b)();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      // still decelerating
      this.velocity *= DECELERATION_FRICTION;
      // do not let it go slower than a velocity of 1
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        // whoops, it's trying to scroll up farther than the options we have!
        y = this.minY;
        this.velocity = 0;
      } else if (y < this.maxY) {
        // gahh, it's trying to scroll down farther than we can!
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        // isn't locked in yet, keep decelerating until it is
        this.rafId = requestAnimationFrame(() => this.decelerate());
      } else {
        this.velocity = 0;
        this.emitColChange();
        (0,_haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_13__.h)();
      }
    } else if (this.y % this.optHeight !== 0) {
      // needs to still get locked into a position so options line up
      const currentPos = Math.abs(this.y % this.optHeight);
      // create a velocity in the direction it needs to scroll
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    // We have to prevent default in order to block scrolling under the picker
    // but we DO NOT have to stop propagation, since we still want
    // some "click" events to capture
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    (0,_haptic_ac164e4c_js__WEBPACK_IMPORTED_MODULE_13__.a)();
    // reset everything
    if (this.rafId !== undefined) cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    // update the scroll position relative to pointer start position
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      // scrolling up higher than scroll area
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    } else if (y < this.maxY) {
      // scrolling down below scroll area
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    } else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      // bounce back up
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    } else if (this.bounceFrom < 0) {
      // bounce back down
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.j)(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest('.picker-opt');
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute('opt-index')) {
        this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
      }
    } else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = Math.abs(this.y) % this.optHeight / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        } else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh, animated) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    /**
     * Only update selected value if column has a
     * velocity of 0. If it does not, then the
     * column is animating might land on
     * a value different than the value at
     * selectedIndex
     */
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.j)(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      const duration = animated ? TRANSITION_DURATION : 0;
      this.velocity = 0;
      this.update(y, duration, true);
    }
  }
  onDomChange(forceRefresh, animated) {
    const colEl = this.optsEl;
    if (colEl) {
      // DOM READ
      // We perfom a DOM read over a rendered item, this needs to happen after the first render or after the the column has changed
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh(forceRefresh, animated);
  }
  render() {
    const col = this.col;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_8__.b)(this);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: 'c015eb8bc01b3287cbd1d71af0aa311b6be89d36',
      class: Object.assign({
        [mode]: true,
        'picker-col': true,
        'picker-opts-left': this.col.align === 'left',
        'picker-opts-right': this.col.align === 'right'
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_6__.g)(col.cssClass)),
      style: {
        'max-width': this.col.columnWidth
      }
    }, col.prefix && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'f9de3fe2f5c7ad3256d6e5f44b6d03a2b1f96ffb',
      class: "picker-prefix",
      style: {
        width: col.prefixWidth
      }
    }, col.prefix), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '10f9c12aa174f96c7cf9adc30efbb26695c0aa64',
      class: "picker-opts",
      style: {
        maxWidth: col.optionsWidth
      },
      ref: el => this.optsEl = el
    }, col.options.map((o, index) => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      "aria-label": o.ariaLabel,
      class: {
        'picker-opt': true,
        'picker-opt-disabled': !!o.disabled
      },
      "opt-index": index
    }, o.text))), col.suffix && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: '1d9c0892ce56e0da9044c79eb953827166f5190b',
      class: "picker-suffix",
      style: {
        width: col.suffixWidth
      }
    }, col.suffix));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "col": ["colChanged"]
    };
  }
};
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: IonPickerLegacyColumnIosStyle0,
  md: IonPickerLegacyColumnMdStyle0
};


/***/ })

}]);