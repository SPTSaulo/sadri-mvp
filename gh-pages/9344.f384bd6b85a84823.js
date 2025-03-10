"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9344],{

/***/ 9344:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-input.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _notch_controller_55b09e11_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notch-controller-55b09e11.js */ 9001);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _input_utils_09c71bc7_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.utils-09c71bc7.js */ 243);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-e2cf2ceb.js */ 3992);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-a5d50daf.js */ 8476);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 4929);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */









const inputIosCss = ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--background:transparent;--color:initial;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;padding:0 !important;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item[slot=start].sc-ion-input-ios-h,ion-item [slot=start].sc-ion-input-ios-h,ion-item[slot=end].sc-ion-input-ios-h,ion-item [slot=end].sc-ion-input-ios-h{width:auto}.ion-color.sc-ion-input-ios-h{--highlight-color-focused:var(--ion-color-base)}.input-label-placement-floating.sc-ion-input-ios-h,.input-label-placement-stacked.sc-ion-input-ios-h{min-height:56px}.native-input.sc-ion-input-ios{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.cloned-input.sc-ion-input-ios{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-input-ios{inset-inline-start:0}.cloned-input.sc-ion-input-ios:disabled{opacity:1}.input-clear-icon.sc-ion-input-ios{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{color:inherit}.input-clear-icon.sc-ion-input-ios:focus{opacity:0.5}.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.input-wrapper.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:stretch;align-items:stretch;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-input-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;width:100%}.ion-touched.ion-invalid.sc-ion-input-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-ios-h{--highlight-color:var(--highlight-color-valid)}.input-bottom.sc-ion-input-ios{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-input-ios-h,.ion-touched.ion-invalid.sc-ion-input-ios-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-ios .error-text.sc-ion-input-ios{display:none;color:var(--highlight-color-invalid)}.input-bottom.sc-ion-input-ios .helper-text.sc-ion-input-ios{display:block;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.ion-touched.ion-invalid.sc-ion-input-ios-h .input-bottom.sc-ion-input-ios .error-text.sc-ion-input-ios{display:block}.ion-touched.ion-invalid.sc-ion-input-ios-h .input-bottom.sc-ion-input-ios .helper-text.sc-ion-input-ios{display:none}.input-bottom.sc-ion-input-ios .counter.sc-ion-input-ios{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{caret-color:var(--highlight-color)}.label-text-wrapper.sc-ion-input-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-input-ios,.sc-ion-input-ios-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-input-ios,.input-outline-notch-hidden.sc-ion-input-ios{display:none}.input-wrapper.sc-ion-input-ios input.sc-ion-input-ios{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.input-label-placement-start.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:row;flex-direction:row}.input-label-placement-start.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-end.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.input-label-placement-end.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-ios-h .label-text.sc-ion-input-ios{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.input-label-placement-stacked.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h .input-wrapper.sc-ion-input-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:left top;transform-origin:left top;max-width:100%;z-index:2}[dir=rtl].sc-ion-input-ios-h -no-combinator.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h -no-combinator.input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .input-label-placement-stacked.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h -no-combinator.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h -no-combinator.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl].input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios,[dir=rtl] .input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-label-placement-stacked.sc-ion-input-ios-h:dir(rtl) .label-text-wrapper.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h:dir(rtl) .label-text-wrapper.sc-ion-input-ios{-webkit-transform-origin:right top;transform-origin:right top}}.input-label-placement-stacked.sc-ion-input-ios-h input.sc-ion-input-ios,.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0}.input-label-placement-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{opacity:0}.has-focus.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios,.has-value.input-label-placement-floating.sc-ion-input-ios-h input.sc-ion-input-ios{opacity:1}.label-floating.sc-ion-input-ios-h .label-text-wrapper.sc-ion-input-ios{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.sc-ion-input-ios-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-input-ios-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-input-ios-h[disabled].sc-ion-input-ios-s>ion-input-password-toggle,.sc-ion-input-ios-h[disabled] .sc-ion-input-ios-s>ion-input-password-toggle,.sc-ion-input-ios-h[readonly].sc-ion-input-ios-s>ion-input-password-toggle,.sc-ion-input-ios-h[readonly] .sc-ion-input-ios-s>ion-input-password-toggle{display:none}.sc-ion-input-ios-h{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--highlight-height:0px;font-size:inherit}.input-clear-icon.sc-ion-input-ios ion-icon.sc-ion-input-ios{width:18px;height:18px}.input-disabled.sc-ion-input-ios-h{opacity:0.3}.sc-ion-input-ios-s>ion-button[slot=start].button-has-icon-only,.sc-ion-input-ios-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";
const IonInputIosStyle0 = inputIosCss;
const inputMdCss = ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--background:transparent;--color:initial;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;padding:0 !important;color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item[slot=start].sc-ion-input-md-h,ion-item [slot=start].sc-ion-input-md-h,ion-item[slot=end].sc-ion-input-md-h,ion-item [slot=end].sc-ion-input-md-h{width:auto}.ion-color.sc-ion-input-md-h{--highlight-color-focused:var(--ion-color-base)}.input-label-placement-floating.sc-ion-input-md-h,.input-label-placement-stacked.sc-ion-input-md-h{min-height:56px}.native-input.sc-ion-input-md{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:1}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.cloned-input.sc-ion-input-md{top:0;bottom:0;position:absolute;pointer-events:none}.cloned-input.sc-ion-input-md{inset-inline-start:0}.cloned-input.sc-ion-input-md:disabled{opacity:1}.input-clear-icon.sc-ion-input-md{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.in-item-color.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{color:inherit}.input-clear-icon.sc-ion-input-md:focus{opacity:0.5}.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.input-wrapper.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:stretch;align-items:stretch;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal}.native-wrapper.sc-ion-input-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;width:100%}.ion-touched.ion-invalid.sc-ion-input-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-md-h{--highlight-color:var(--highlight-color-valid)}.input-bottom.sc-ion-input-md{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem}.has-focus.ion-valid.sc-ion-input-md-h,.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-md .error-text.sc-ion-input-md{display:none;color:var(--highlight-color-invalid)}.input-bottom.sc-ion-input-md .helper-text.sc-ion-input-md{display:block;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.ion-touched.ion-invalid.sc-ion-input-md-h .input-bottom.sc-ion-input-md .error-text.sc-ion-input-md{display:block}.ion-touched.ion-invalid.sc-ion-input-md-h .input-bottom.sc-ion-input-md .helper-text.sc-ion-input-md{display:none}.input-bottom.sc-ion-input-md .counter.sc-ion-input-md{-webkit-margin-start:auto;margin-inline-start:auto;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));white-space:nowrap;-webkit-padding-start:16px;padding-inline-start:16px}.has-focus.sc-ion-input-md-h input.sc-ion-input-md{caret-color:var(--highlight-color)}.label-text-wrapper.sc-ion-input-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text.sc-ion-input-md,.sc-ion-input-md-s>[slot=label]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden.sc-ion-input-md,.input-outline-notch-hidden.sc-ion-input-md{display:none}.input-wrapper.sc-ion-input-md input.sc-ion-input-md{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.input-label-placement-start.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:row;flex-direction:row}.input-label-placement-start.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-end.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.input-label-placement-end.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}.input-label-placement-fixed.sc-ion-input-md-h .label-text.sc-ion-input-md{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.input-label-placement-stacked.sc-ion-input-md-h .input-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:left top;transform-origin:left top;max-width:100%;z-index:2}[dir=rtl].sc-ion-input-md-h -no-combinator.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h -no-combinator.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-label-placement-stacked.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}}.input-label-placement-stacked.sc-ion-input-md-h input.sc-ion-input-md,.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0}.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{opacity:0}.has-focus.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md,.has-value.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{opacity:1}.label-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}.sc-ion-input-md-s>[slot=start]:last-of-type{-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}.sc-ion-input-md-s>[slot=end]:first-of-type{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}.sc-ion-input-md-h[disabled].sc-ion-input-md-s>ion-input-password-toggle,.sc-ion-input-md-h[disabled] .sc-ion-input-md-s>ion-input-password-toggle,.sc-ion-input-md-h[readonly].sc-ion-input-md-s>ion-input-password-toggle,.sc-ion-input-md-h[readonly] .sc-ion-input-md-s>ion-input-password-toggle{display:none}.input-fill-solid.sc-ion-input-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-bottom:var(--border-width) var(--border-style) var(--border-color)}.has-focus.input-fill-solid.ion-valid.sc-ion-input-md-h,.input-fill-solid.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-fill-solid.sc-ion-input-md-h .input-bottom.sc-ion-input-md{border-top:none}@media (any-hover: hover){.input-fill-solid.sc-ion-input-md-h:hover{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.input-fill-solid.has-focus.sc-ion-input-md-h{--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}.input-fill-solid.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}.label-floating.input-fill-solid.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{max-width:calc(100% / 0.75)}.input-fill-outline.sc-ion-input-md-h{--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}.input-fill-outline.input-shape-round.sc-ion-input-md-h{--border-radius:28px;--padding-start:32px;--padding-end:32px}.has-focus.input-fill-outline.ion-valid.sc-ion-input-md-h,.input-fill-outline.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}@media (any-hover: hover){.input-fill-outline.sc-ion-input-md-h:hover{--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}.input-fill-outline.has-focus.sc-ion-input-md-h{--border-width:var(--highlight-height);--border-color:var(--highlight-color)}.input-fill-outline.sc-ion-input-md-h .input-bottom.sc-ion-input-md{border-top:none}.input-fill-outline.sc-ion-input-md-h .input-wrapper.sc-ion-input-md{border-bottom:none}.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:left top;transform-origin:left top;position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h -no-combinator.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl].input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,[dir=rtl] .input-fill-outline.input-label-placement-floating.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h:dir(rtl) .label-text-wrapper.sc-ion-input-md{-webkit-transform-origin:right top;transform-origin:right top}}.input-fill-outline.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{position:relative}.label-floating.input-fill-outline.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}.input-fill-outline.input-label-placement-stacked.sc-ion-input-md-h input.sc-ion-input-md,.input-fill-outline.input-label-placement-floating.sc-ion-input-md-h input.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}.input-fill-outline.sc-ion-input-md-h .input-outline-container.sc-ion-input-md{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{pointer-events:none}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md,.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color)}.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md{max-width:calc(100% - var(--padding-start) - var(--padding-end))}.input-fill-outline.sc-ion-input-md-h .notch-spacer.sc-ion-input-md{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none;-webkit-box-sizing:content-box;box-sizing:content-box}.input-fill-outline.sc-ion-input-md-h .input-outline-start.sc-ion-input-md{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius);-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color);width:calc(var(--padding-start) - 4px)}.input-fill-outline.sc-ion-input-md-h .input-outline-end.sc-ion-input-md{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color);border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px;-ms-flex-positive:1;flex-grow:1}.label-floating.input-fill-outline.sc-ion-input-md-h .input-outline-notch.sc-ion-input-md{border-top:none}.sc-ion-input-md-h{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px;font-size:inherit}.input-clear-icon.sc-ion-input-md ion-icon.sc-ion-input-md{width:22px;height:22px}.input-disabled.sc-ion-input-md-h{opacity:0.38}.has-focus.ion-valid.sc-ion-input-md-h,.ion-touched.ion-invalid.sc-ion-input-md-h{--border-color:var(--highlight-color)}.input-bottom.sc-ion-input-md .counter.sc-ion-input-md{letter-spacing:0.0333333333em}.input-label-placement-floating.has-focus.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-stacked.has-focus.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{color:var(--highlight-color)}.has-focus.input-label-placement-floating.ion-valid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-floating.ion-touched.ion-invalid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.has-focus.input-label-placement-stacked.ion-valid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md,.input-label-placement-stacked.ion-touched.ion-invalid.sc-ion-input-md-h .label-text-wrapper.sc-ion-input-md{color:var(--highlight-color)}.input-highlight.sc-ion-input-md{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.input-highlight.sc-ion-input-md{inset-inline-start:0}.has-focus.sc-ion-input-md-h .input-highlight.sc-ion-input-md{-webkit-transform:scale(1);transform:scale(1)}.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{bottom:0}.in-item.sc-ion-input-md-h .input-highlight.sc-ion-input-md{inset-inline-start:0}.input-shape-round.sc-ion-input-md-h{--border-radius:16px}.sc-ion-input-md-s>ion-button[slot=start].button-has-icon-only,.sc-ion-input-md-s>ion-button[slot=end].button-has-icon-only{--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";
const IonInputMdStyle0 = inputMdCss;
const Input = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInput = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionInput", 7);
    this.ionChange = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionChange", 7);
    this.ionBlur = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionBlur", 7);
    this.ionFocus = (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.d)(this, "ionFocus", 7);
    this.inputId = `ion-input-${inputIds++}`;
    this.helperTextId = `${this.inputId}-helper-text`;
    this.errorTextId = `${this.inputId}-error-text`;
    this.inheritedAttributes = {};
    this.isComposing = false;
    /**
     * `true` if the input was cleared as a result of the user typing
     * with `clearOnEdit` enabled.
     *
     * Resets when the input loses focus.
     */
    this.didInputClearOnEdit = false;
    this.onInput = ev => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.emitInputChange(ev);
    };
    this.onChange = ev => {
      this.emitValueChange(ev);
    };
    this.onBlur = ev => {
      this.hasFocus = false;
      if (this.focusedValue !== this.value) {
        /**
         * Emits the `ionChange` event when the input value
         * is different than the value when the input was focused.
         */
        this.emitValueChange(ev);
      }
      this.didInputClearOnEdit = false;
      this.ionBlur.emit(ev);
    };
    this.onFocus = ev => {
      this.hasFocus = true;
      this.focusedValue = this.value;
      this.ionFocus.emit(ev);
    };
    this.onKeydown = ev => {
      this.checkClearOnEdit(ev);
    };
    this.onCompositionStart = () => {
      this.isComposing = true;
    };
    this.onCompositionEnd = () => {
      this.isComposing = false;
    };
    this.clearTextInput = ev => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      this.emitInputChange(ev);
    };
    this.hasFocus = false;
    this.color = undefined;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.autofocus = false;
    this.clearInput = false;
    this.clearInputIcon = undefined;
    this.clearOnEdit = undefined;
    this.counter = false;
    this.counterFormatter = undefined;
    this.debounce = undefined;
    this.disabled = false;
    this.enterkeyhint = undefined;
    this.errorText = undefined;
    this.fill = undefined;
    this.inputmode = undefined;
    this.helperText = undefined;
    this.label = undefined;
    this.labelPlacement = 'start';
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.multiple = undefined;
    this.name = this.inputId;
    this.pattern = undefined;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.shape = undefined;
    this.spellcheck = false;
    this.step = undefined;
    this.type = 'text';
    this.value = '';
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    /**
     * If debounce is undefined, we have to manually revert the ionInput emitter in case
     * debounce used to be set to a number. Otherwise, the event would stay debounced.
     */
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.e)(ionInput, debounce);
  }
  /**
   * Whenever the type on the input changes we need
   * to update the internal type prop on the password
   * toggle so that that correct icon is shown.
   */
  onTypeChange() {
    const passwordToggle = this.el.querySelector('ion-input-password-toggle');
    if (passwordToggle) {
      passwordToggle.type = this.type;
    }
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value && !this.isComposing) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `ionInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      nativeInput.value = value;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el)), (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.h)(this.el, ['tabindex', 'title', 'data-form-type']));
  }
  connectedCallback() {
    const {
      el
    } = this;
    this.slotMutationController = (0,_input_utils_09c71bc7_js__WEBPACK_IMPORTED_MODULE_4__.c)(el, ['label', 'start', 'end'], () => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.j)(this));
    this.notchController = (0,_notch_controller_55b09e11_js__WEBPACK_IMPORTED_MODULE_2__.c)(el, () => this.notchSpacerEl, () => this.labelSlot);
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el
      }));
    }
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    /**
     * Set the type on the password toggle in the event that this input's
     * type was set async and does not match the default type for the password toggle.
     * This can happen when the type is bound using a JS framework binding syntax
     * such as [type] in Angular.
     */
    this.onTypeChange();
    this.debounceChanged();
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el
      }));
    }
    if (this.slotMutationController) {
      this.slotMutationController.destroy();
      this.slotMutationController = undefined;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = undefined;
    }
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   *
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   *
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   *
   * See [managing focus](/docs/developing/managing-focus) for more information.
   */
  setFocus() {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.nativeInput) {
        _this.nativeInput.focus();
      }
    })();
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    var _this2 = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * If this gets called in certain early lifecycle hooks (ex: Vue onMounted),
       * nativeInput won't be defined yet with the custom elements build, so wait for it to load in.
       */
      if (!_this2.nativeInput) {
        yield new Promise(resolve => (0,_helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_3__.c)(_this2.el, resolve));
      }
      return Promise.resolve(_this2.nativeInput);
    })();
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    // Emitting a value change should update the internal state for tracking the focused value
    this.focusedValue = newValue;
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const {
      value
    } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    this.ionInput.emit({
      value: newValue,
      event
    });
  }
  shouldClearOnEdit() {
    const {
      type,
      clearOnEdit
    } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  checkClearOnEdit(ev) {
    if (!this.shouldClearOnEdit()) {
      return;
    }
    /**
     * The following keys do not modify the
     * contents of the input. As a result, pressing
     * them should not edit the input.
     *
     * We can't check to see if the value of the input
     * was changed because we call checkClearOnEdit
     * in a keydown listener, and the key has not yet
     * been added to the input.
     */
    const IGNORED_KEYS = ['Enter', 'Tab', 'Shift', 'Meta', 'Alt', 'Control'];
    const pressedIgnoredKey = IGNORED_KEYS.includes(ev.key);
    /**
     * Clear the input if the control has not been previously cleared during focus.
     * Do not clear if the user hitting enter to submit a form.
     */
    if (!this.didInputClearOnEdit && this.hasValue() && !pressedIgnoredKey) {
      this.value = '';
      this.emitInputChange(ev);
    }
    /**
     * Pressing an IGNORED_KEYS first and
     * then an allowed key will cause the input to not
     * be cleared.
     */
    if (!pressedIgnoredKey) {
      this.didInputClearOnEdit = true;
    }
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Renders the helper text or error text values
   */
  renderHintText() {
    const {
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    return [(0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: helperTextId,
      class: "helper-text"
    }, helperText), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: errorTextId,
      class: "error-text"
    }, errorText)];
  }
  getHintTextID() {
    const {
      el,
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    if (el.classList.contains('ion-touched') && el.classList.contains('ion-invalid') && errorText) {
      return errorTextId;
    }
    if (helperText) {
      return helperTextId;
    }
    return undefined;
  }
  renderCounter() {
    const {
      counter,
      maxlength,
      counterFormatter,
      value
    } = this;
    if (counter !== true || maxlength === undefined) {
      return;
    }
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "counter"
    }, (0,_input_utils_09c71bc7_js__WEBPACK_IMPORTED_MODULE_4__.g)(value, maxlength, counterFormatter));
  }
  /**
   * Responsible for rendering helper text,
   * error text, and counter. This element should only
   * be rendered if hint text is set or counter is enabled.
   */
  renderBottomContent() {
    const {
      counter,
      helperText,
      errorText,
      maxlength
    } = this;
    /**
     * undefined and empty string values should
     * be treated as not having helper/error text.
     */
    const hasHintText = !!helperText || !!errorText;
    const hasCounter = counter === true && maxlength !== undefined;
    if (!hasHintText && !hasCounter) {
      return;
    }
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "input-bottom"
    }, this.renderHintText(), this.renderCounter());
  }
  renderLabel() {
    const {
      label
    } = this;
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel
      }
    }, label === undefined ? (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "label"
    }) : (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "label-text"
    }, label));
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== undefined || this.labelSlot !== null;
  }
  /**
   * Renders the border container
   * when fill="outline".
   */
  renderLabelContainer() {
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_7__.b)(this);
    const hasOutlineFill = mode === 'md' && this.fill === 'outline';
    if (hasOutlineFill) {
      /**
       * The outline fill has a special outline
       * that appears around the input and the label.
       * Certain stacked and floating label placements cause the
       * label to translate up and create a "cut out"
       * inside of that border by using the notch-spacer element.
       */
      return [(0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "input-outline-container"
      }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "input-outline-start"
      }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: {
          'input-outline-notch': true,
          'input-outline-notch-hidden': !this.hasLabel
        }
      }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "notch-spacer",
        "aria-hidden": "true",
        ref: el => this.notchSpacerEl = el
      }, this.label)), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "input-outline-end"
      })), this.renderLabel()];
    }
    /**
     * If not using the outline style,
     * we can render just the label.
     */
    return this.renderLabel();
  }
  render() {
    const {
      disabled,
      fill,
      readonly,
      shape,
      inputId,
      labelPlacement,
      el,
      hasFocus,
      clearInputIcon
    } = this;
    const mode = (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_7__.b)(this);
    const value = this.getValue();
    const inItem = (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__.h)('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    const defaultClearIcon = mode === 'ios' ? _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_6__.b : _index_e2cf2ceb_js__WEBPACK_IMPORTED_MODULE_6__.d;
    const clearIconData = clearInputIcon !== null && clearInputIcon !== void 0 ? clearInputIcon : defaultClearIcon;
    const hasValue = this.hasValue();
    const hasStartEndSlots = el.querySelector('[slot="start"], [slot="end"]') !== null;
    /**
     * If the label is stacked, it should always sit above the input.
     * For floating labels, the label should move above the input if
     * the input has a value, is focused, or has anything in either
     * the start or end slot.
     *
     * If there is content in the start slot, the label would overlap
     * it if not forced to float. This is also applied to the end slot
     * because with the default or solid fills, the input is not
     * vertically centered in the container, but the label is. This
     * causes the slots and label to appear vertically offset from each
     * other when the label isn't floating above the input. This doesn't
     * apply to the outline fill, but this was not accounted for to keep
     * things consistent.
     *
     * TODO(FW-5592): Remove hasStartEndSlots condition
     */
    const labelShouldFloat = labelPlacement === 'stacked' || labelPlacement === 'floating' && (hasValue || hasFocus || hasStartEndSlots);
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.f, {
      key: '54b5662d9a7f011a85e4119650c92b9af275bf96',
      class: (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.color, {
        [mode]: true,
        'has-value': hasValue,
        'has-focus': hasFocus,
        'label-floating': labelShouldFloat,
        [`input-fill-${fill}`]: fill !== undefined,
        [`input-shape-${shape}`]: shape !== undefined,
        [`input-label-placement-${labelPlacement}`]: true,
        'in-item': inItem,
        'in-item-color': (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_5__.h)('ion-item.ion-color', this.el),
        'input-disabled': disabled
      })
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      key: '551cf8a932af3275689ecf32988b84355404e8f1',
      class: "input-wrapper",
      htmlFor: inputId
    }, this.renderLabelContainer(), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'b3601dca7e0f23517748f6e7feb899c953355bc4',
      class: "native-wrapper"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'd687a9bb4c5778cfee35ce1b8d6d16ddc8eca768',
      name: "start"
    }), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", Object.assign({
      key: 'ab927e84e43bedf8b7827bb743888a1778292deb',
      class: "native-input",
      ref: input => this.nativeInput = input,
      id: inputId,
      disabled: disabled,
      autoCapitalize: this.autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      min: this.min,
      max: this.max,
      minLength: this.minlength,
      maxLength: this.maxlength,
      multiple: this.multiple,
      name: this.name,
      pattern: this.pattern,
      placeholder: this.placeholder || '',
      readOnly: readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      step: this.step,
      type: this.type,
      value: value,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.onKeydown,
      onCompositionstart: this.onCompositionStart,
      onCompositionend: this.onCompositionEnd,
      "aria-describedby": this.getHintTextID(),
      "aria-invalid": this.getHintTextID() === this.errorTextId
    }, this.inheritedAttributes)), this.clearInput && !readonly && !disabled && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      key: '0d2ee3f7e69cee75f071f37b2e9bc174572c5a01',
      "aria-label": "reset",
      type: "button",
      class: "input-clear-icon",
      onPointerDown: ev => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      },
      onFocusin: ev => {
        /**
         * Prevent the focusin event from bubbling otherwise it will cause the focusin
         * event listener in scroll assist to fire. When this fires, focus will be moved
         * back to the input even if the clear button was never tapped. This poses issues
         * for screen readers as it means users would be unable to swipe past the clear button.
         */
        ev.stopPropagation();
      },
      onClick: this.clearTextInput
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      key: 'c7715111897f43839c10d38662616edb662cd49b',
      "aria-hidden": "true",
      icon: clearIconData
    })), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      key: 'afc44cbe1ad50f17942d5297a12509abecbd6ecd',
      name: "end"
    })), shouldRenderHighlight && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      key: 'ee3af32cd9003d497f33e352e56313d43295f3a9',
      class: "input-highlight"
    })), this.renderBottomContent());
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "type": ["onTypeChange"],
      "value": ["valueChanged"]
    };
  }
};
let inputIds = 0;
Input.style = {
  ios: IonInputIosStyle0,
  md: IonInputMdStyle0
};


/***/ })

}]);