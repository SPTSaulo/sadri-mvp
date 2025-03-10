"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5100],{

/***/ 5100:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_col: () => (/* binding */ Col),
/* harmony export */   ion_grid: () => (/* binding */ Grid),
/* harmony export */   ion_row: () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const SIZE_TO_MEDIA = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)'
};
// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
const matchBreakpoint = breakpoint => {
  if (breakpoint === undefined || breakpoint === '') {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
const colCss = ":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}";
const IonColStyle0 = colCss;
const win = typeof window !== 'undefined' ? window : undefined;
// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
const SUPPORTS_VARS = win && !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];
const Col = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.offset = undefined;
    this.offsetXs = undefined;
    this.offsetSm = undefined;
    this.offsetMd = undefined;
    this.offsetLg = undefined;
    this.offsetXl = undefined;
    this.pull = undefined;
    this.pullXs = undefined;
    this.pullSm = undefined;
    this.pullMd = undefined;
    this.pullLg = undefined;
    this.pullXl = undefined;
    this.push = undefined;
    this.pushXs = undefined;
    this.pushSm = undefined;
    this.pushMd = undefined;
    this.pushLg = undefined;
    this.pushXl = undefined;
    this.size = undefined;
    this.sizeXs = undefined;
    this.sizeSm = undefined;
    this.sizeMd = undefined;
    this.sizeLg = undefined;
    this.sizeXl = undefined;
  }
  onResize() {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.j)(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== undefined) {
        matched = columns;
      }
    }
    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns('size');
    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <ion-col size-md>
    if (!columns || columns === '') {
      return;
    }
    // If the size is set to auto then don't calculate a size
    const colSize = columns === 'auto' ? 'auto' :
    // If CSS supports variables we should use the grid columns var
    SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)` :
    // Convert the columns to a percentage by dividing by the total number
    // of columns (12) and then multiplying by 100
    columns / 12 * 100 + '%';
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      'max-width': `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    // If the number of columns passed are greater than 0 and less than
    // 12 we can position the column, else default to auto
    const amount = SUPPORTS_VARS ?
    // If CSS supports variables we should use the grid columns var
    `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)` :
    // Convert the columns to a percentage by dividing by the total number
    // of columns (12) and then multiplying by 100
    columns > 0 && columns < 12 ? columns / 12 * 100 + '%' : 'auto';
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
  }
  calculatePull(isRTL) {
    return this.calculatePosition('pull', isRTL ? 'left' : 'right');
  }
  calculatePush(isRTL) {
    return this.calculatePosition('push', isRTL ? 'right' : 'left');
  }
  render() {
    const isRTL = document.dir === 'rtl';
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: '32ed75d81dd09d9bc8999f6d42e5b3cb99c84d91',
      class: {
        [mode]: true
      },
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize())
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '38f8d0440c20cc6d1b1d6a654d07f16de61d8134'
    }));
  }
};
Col.style = IonColStyle0;
const gridCss = ":host{-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;display:block;-ms-flex:1;flex:1}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";
const IonGridStyle0 = gridCss;
const Grid = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.fixed = false;
  }
  render() {
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: '617127ecfabf9bf615bef1dda1be3fed5a065949',
      class: {
        [mode]: true,
        'grid-fixed': this.fixed
      }
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: 'c781fff853b093d8f44bdb7943bbc4f17c903803'
    }));
  }
};
Grid.style = IonGridStyle0;
const rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
const IonRowStyle0 = rowCss;
const Row = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: 'aea072a5005e3f1f309f0d1ae5be5ee19869b035',
      class: (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      key: '2a481c2126ac6ca65f0a1bbd07c2d3365409cb78'
    }));
  }
};
Row.style = IonRowStyle0;


/***/ })

}]);