"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8363],{

/***/ 8378:
/*!*******************************************!*\
  !*** ./src/app/services/serie.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerieService: () => (/* binding */ SerieService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 3026);
var _SerieService;



class SerieService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore);
    this.COLLECTION_NAME = 'series';
  }
  getAll() {
    const itemsCollection = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, this.COLLECTION_NAME);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(itemsCollection, {
      idField: 'id'
    });
  }
  get(id) {
    const itemDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `${this.COLLECTION_NAME}/${id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(itemDocRef, {
      idField: 'id'
    });
  }
  add(item) {
    const itemsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, this.COLLECTION_NAME);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(itemsRef), item);
  }
  update(item) {
    const itemDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, this.COLLECTION_NAME, item.id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(itemDocRef, item);
  }
  delete(id) {
    const itemDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `${this.COLLECTION_NAME}/${id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(itemDocRef);
  }
}
_SerieService = SerieService;
_SerieService.ɵfac = function SerieService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SerieService)();
};
_SerieService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _SerieService,
  factory: _SerieService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8146:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab2PageRoutingModule: () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab2PageRoutingModule;




const routes = [{
  path: '',
  component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
}];
class Tab2PageRoutingModule {}
_Tab2PageRoutingModule = Tab2PageRoutingModule;
_Tab2PageRoutingModule.ɵfac = function Tab2PageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab2PageRoutingModule)();
};
_Tab2PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _Tab2PageRoutingModule
});
_Tab2PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab2PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8363:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab2PageModule: () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 676);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2-routing.module */ 8146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab2PageModule;






class Tab2PageModule {}
_Tab2PageModule = Tab2PageModule;
_Tab2PageModule.ɵfac = function Tab2PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab2PageModule)();
};
_Tab2PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _Tab2PageModule
});
_Tab2PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab2PageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab2PageModule, {
    declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab2PageRoutingModule]
  });
})();

/***/ }),

/***/ 676:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab2Page: () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _services_serie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/serie.service */ 8378);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);

var _Tab2Page;






const _c0 = a0 => ({
  "disabled-card": a0
});
function Tab2Page_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 3)(1, "ion-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_For_8_Template_ion_card_click_1_listener() {
      const serie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.presentActionSheet(serie_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-card-content")(4, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const serie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, serie_r3.viewed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", serie_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](serie_r3.name);
  }
}
function Tab2Page_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "ion-text")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "La serie random es...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-text")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_ng_template_17_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.markSerieAsViewed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_ng_template_17_Template_ion_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.isRandomModalOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.randomSerie.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.randomSerie.name);
  }
}
class Tab2Page {
  constructor() {
    this.serieService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_serie_service__WEBPACK_IMPORTED_MODULE_1__.SerieService);
    this.actionSheetController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController);
    this.isRandomModalOpen = false;
    this.isToastOpen = false;
    this.isActionSheetOpen = false;
    this.serieService.getAll().subscribe(data => this.series = data);
  }
  getRandomSerie() {
    const filterSeries = this.series.filter(serie => !serie.viewed);
    const randomIndex = Math.floor(Math.random() * filterSeries.length);
    this.randomSerie = filterSeries[randomIndex];
    this.isRandomModalOpen = true;
  }
  markSerieAsViewed() {
    this.randomSerie.viewed = true;
    this.serieService.update(this.randomSerie);
    this.isToastOpen = true;
    this.isRandomModalOpen = false;
  }
  presentActionSheet(serie) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetController.create({
        header: 'Acciones',
        buttons: [{
          text: serie.viewed ? 'Marcar como no vista' : 'Marcar como vista',
          data: {
            action: 'share'
          },
          handler: () => _this.serieService.update({
            ...serie,
            viewed: !serie.viewed
          })
        }, {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete'
          },
          handler: () => _this.serieService.delete(serie.id)
        }, {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }]
      });
      yield actionSheet.present();
    })();
  }
}
_Tab2Page = Tab2Page;
_Tab2Page.ɵfac = function Tab2Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab2Page)();
};
_Tab2Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _Tab2Page,
  selectors: [["app-tab2"]],
  standalone: false,
  decls: 19,
  vars: 5,
  consts: [["modal", ""], [3, "translucent"], [3, "fullscreen"], ["size", "6"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["name", "ellipsis-vertical-outline"], ["side", "top"], [3, "click"], ["name", "shuffle-outline"], ["id", "randomSerieModal", 3, "ionModalDidDismiss", "isOpen"], ["message", "La serie se marc\u00F3 como vista", "swipeGesture", "vertical", 3, "didDismiss", "isOpen", "duration"], [3, "click", "ngClass"], [3, "src"], [1, "wrapper"], ["fill", "outline", 3, "click"], ["name", "eye-outline", 2, "margin-left", "10px"], ["color", "danger", "fill", "outline", 3, "click"], ["name", "close-outline", 2, "margin-left", "10px"]],
  template: function Tab2Page_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Series ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 2)(5, "ion-grid")(6, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, Tab2Page_For_8_Template, 6, 5, "ion-col", 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-fab", 4)(10, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-fab-list", 6)(13, "ion-fab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab2Page_Template_ion_fab_button_click_13_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.getRandomSerie());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-modal", 9, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionModalDidDismiss", function Tab2Page_Template_ion_modal_ionModalDidDismiss_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.isRandomModalOpen = false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, Tab2Page_ng_template_17_Template, 14, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-toast", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("didDismiss", function Tab2Page_Template_ion_toast_didDismiss_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.isToastOpen = false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.series);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isOpen", ctx.isRandomModalOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isOpen", ctx.isToastOpen)("duration", 3000);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToast, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: ["ion-card[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n\nion-img[_ngcontent-%COMP%] {\n  width: 90px;\n  object-fit: cover;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-modal#randomSerieModal[_ngcontent-%COMP%] {\n  --width: fit-content;\n  --min-width: 250px;\n  --height: fit-content;\n  --border-radius: 6px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n}\n\nion-modal#randomSerieModal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.disabled-card[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  filter: grayscale(100%);\n}"]
});

/***/ })

}]);