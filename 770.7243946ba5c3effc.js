"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[770],{

/***/ 770:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-select-modal.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ion_select_modal: () => (/* binding */ SelectModal)
/* harmony export */ });
/* harmony import */ var _index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-28849c61.js */ 4261);
/* harmony import */ var _ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-c81d82ab.js */ 9483);
/* harmony import */ var _overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlays-e7b9d6d9.js */ 3617);
/* harmony import */ var _theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-01f3f29c.js */ 333);
/* harmony import */ var _index_a5d50daf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-a5d50daf.js */ 8476);
/* harmony import */ var _helpers_da915de8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-da915de8.js */ 4920);
/* harmony import */ var _hardware_back_button_06ef3c3e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hardware-back-button-06ef3c3e.js */ 7192);
/* harmony import */ var _framework_delegate_63d1a679_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework-delegate-63d1a679.js */ 8621);
/* harmony import */ var _gesture_controller_314a54f6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gesture-controller-314a54f6.js */ 1970);
/* harmony import */ var _index_9b0d46f4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-9b0d46f4.js */ 4929);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */










const ionicSelectModalMdCss = ".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
const IonSelectModalIonicStyle0 = ionicSelectModalMdCss;
const selectModalIosCss = ".sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:\"\"}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}";
const IonSelectModalIosStyle0 = selectModalIosCss;
const selectModalMdCss = ".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}";
const IonSelectModalMdStyle0 = selectModalMdCss;
const SelectModal = class {
  constructor(hostRef) {
    (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.header = undefined;
    this.multiple = undefined;
    this.options = [];
  }
  closeModal() {
    const modal = this.el.closest('ion-modal');
    if (modal) {
      modal.dismiss();
    }
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find(o => o.value === ev.target.value);
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      // this is a modal with checkboxes (multiple value select)
      // return an array of all the checked values
      return options.filter(o => o.checked).map(o => o.value);
    }
    // this is a modal with radio buttons (single value select)
    // return the value that was clicked, otherwise undefined
    const option = ev ? this.findOptionFromEvent(ev) : null;
    return option ? option.value : undefined;
  }
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      (0,_overlays_e7b9d6d9_js__WEBPACK_IMPORTED_MODULE_2__.s)(option.handler, values);
    }
  }
  setChecked(ev) {
    const {
      multiple
    } = this;
    const option = this.findOptionFromEvent(ev);
    // this is a modal with checkboxes (multiple value select)
    // we need to set the checked value for this option
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  renderRadioOptions() {
    const checked = this.options.filter(o => o.checked).map(o => o.value)[0];
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-radio-group", {
      value: checked,
      onIonChange: ev => this.callOptionHandler(ev)
    }, this.options.map(option => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-item", {
      lines: "none",
      class: Object.assign({
        // TODO FW-4784
        'item-radio-checked': option.value === checked
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.g)(option.cssClass))
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      justify: "start",
      labelPlacement: "end",
      onClick: () => this.closeModal(),
      onKeyUp: ev => {
        if (ev.key === ' ') {
          /**
           * Selecting a radio option with keyboard navigation,
           * either through the Enter or Space keys, should
           * dismiss the modal.
           */
          this.closeModal();
        }
      }
    }, option.text))));
  }
  renderCheckboxOptions() {
    return this.options.map(option => (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        'item-checkbox-checked': option.checked
      }, (0,_theme_01f3f29c_js__WEBPACK_IMPORTED_MODULE_3__.g)(option.cssClass))
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-checkbox", {
      value: option.value,
      disabled: option.disabled,
      checked: option.checked,
      justify: "start",
      labelPlacement: "end",
      onIonChange: ev => {
        this.setChecked(ev);
        this.callOptionHandler(ev);
        // TODO FW-4784
        (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.j)(this);
      }
    }, option.text)));
  }
  render() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.f, {
      key: '4df42c447b4026d09d9231f09dc4bdae9a8cfe4a',
      class: (0,_ionic_global_c81d82ab_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-header", {
      key: '211c4e869b858867f3d60637e570aeb01de41de7'
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-toolbar", {
      key: 'dc4b151331aecbaaaafb460802ee9b689493601d'
    }, this.header !== undefined && (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-title", {
      key: 'ba1347a59ae0a5c6770c239b5ec02a536a445bd1'
    }, this.header), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-buttons", {
      key: '43c98fd25d7e7f54b94b24e53535c6d5ba599892',
      slot: "end"
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-button", {
      key: '51b2b3f3eed42637b2cfc213c95d0bcf10e4b89d',
      onClick: () => this.closeModal()
    }, "Close")))), (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-content", {
      key: 'fe721b09f80555856211f7e40dbfc31a533acae1'
    }, (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-list", {
      key: 'd0b932d137136958d896408fb2fa571023775b92'
    }, this.multiple === true ? this.renderCheckboxOptions() : this.renderRadioOptions())));
  }
  get el() {
    return (0,_index_28849c61_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
  }
};
SelectModal.style = {
  ionic: IonSelectModalIonicStyle0,
  ios: IonSelectModalIosStyle0,
  md: IonSelectModalMdStyle0
};


/***/ })

}]);