"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5063],{

/***/ 4609:
/*!******************************************!*\
  !*** ./src/app/services/plan.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlanService: () => (/* binding */ PlanService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 3026);
var _PlanService;



class PlanService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore);
    this.COLLECTION_NAME = 'plans';
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
_PlanService = PlanService;
_PlanService.ɵfac = function PlanService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlanService)();
};
_PlanService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _PlanService,
  factory: _PlanService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3646:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab4PageRoutingModule: () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab4PageRoutingModule;




const routes = [{
  path: '',
  component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
}];
class Tab4PageRoutingModule {}
_Tab4PageRoutingModule = Tab4PageRoutingModule;
_Tab4PageRoutingModule.ɵfac = function Tab4PageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab4PageRoutingModule)();
};
_Tab4PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _Tab4PageRoutingModule
});
_Tab4PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab4PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5063:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab4PageModule: () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3040);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4-routing.module */ 3646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab4PageModule;






class Tab4PageModule {}
_Tab4PageModule = Tab4PageModule;
_Tab4PageModule.ɵfac = function Tab4PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab4PageModule)();
};
_Tab4PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _Tab4PageModule
});
_Tab4PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab4PageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab4PageModule, {
    declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tab4_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab4PageRoutingModule]
  });
})();

/***/ }),

/***/ 3040:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab4Page: () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _services_plan_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/plan.service */ 4609);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 9885);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
var _Tab4Page;





function Tab4Page_For_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 6)(1, "ion-card")(2, "ion-card-content")(3, "div", 14)(4, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const plan_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](plan_r2.name);
  }
}
function Tab4Page_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "ion-text")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "El plan random es...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-text")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_ng_template_21_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.isRandomModalOpen = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.randomPlan.name);
  }
}
function Tab4Page_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "ion-text")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Le toca a...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-text")(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_ng_template_24_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      const randomPersonModal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](randomPersonModal_r6.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.randomPerson.name);
  }
}
class Tab4Page {
  constructor() {
    this.planService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_plan_service__WEBPACK_IMPORTED_MODULE_0__.PlanService);
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService);
    this.isRandomModalOpen = false;
    this.isToastOpen = false;
    this.isActionSheetOpen = false;
    this.planService.getAll().subscribe(data => this.plans = data);
    this.userService.getAll().subscribe(data => this.users = data);
  }
  getRandomPlan() {
    const filterPlans = this.plans.filter(plan => !plan.viewed);
    const randomIndex = Math.floor(Math.random() * filterPlans.length);
    this.randomPlan = filterPlans[randomIndex];
    this.isRandomModalOpen = true;
  }
  getRandomPerson() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    this.randomPerson = this.users[randomIndex];
  }
}
_Tab4Page = Tab4Page;
_Tab4Page.ɵfac = function Tab4Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab4Page)();
};
_Tab4Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _Tab4Page,
  selectors: [["app-tab4"]],
  standalone: false,
  decls: 25,
  vars: 3,
  consts: [["modal", ""], ["randomPersonModal", ""], [3, "translucent"], [3, "fullscreen"], [1, "user-random"], ["shape", "round", "id", "open-modal", "expand", "block", 3, "click"], ["size", "6"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["name", "ellipsis-vertical-outline"], ["side", "top"], [3, "click"], ["name", "shuffle-outline"], ["id", "randomPlanModal", 3, "ionModalDidDismiss", "isOpen"], ["trigger", "open-modal", "id", "randomPersonModal", 2, "padding", "20px"], [1, "card-content"], [2, "display", "flex", "align-items", "center", "gap", "5px"], ["name", "people-outline"], [1, "wrapper"], ["color", "danger", "fill", "outline", 3, "click"], ["name", "close-outline", 2, "margin-left", "10px"]],
  template: function Tab4Page_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 2)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Planes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 3)(5, "ion-card")(6, "ion-card-content", 4)(7, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_Template_ion_button_click_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.getRandomPerson());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00BFQui\u00E9n decide?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-grid")(10, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](11, Tab4Page_For_12_Template, 8, 1, "ion-col", 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-fab", 7)(14, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-fab-list", 9)(17, "ion-fab-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab4Page_Template_ion_fab_button_click_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.getRandomPlan());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-modal", 12, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionModalDidDismiss", function Tab4Page_Template_ion_modal_ionModalDidDismiss_19_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.isRandomModalOpen = false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, Tab4Page_ng_template_21_Template, 10, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-modal", 13, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, Tab4Page_ng_template_24_Template, 9, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.plans);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isOpen", ctx.isRandomModalOpen);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal],
  styles: ["ion-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-modal#randomPlanModal[_ngcontent-%COMP%], \nion-modal#randomPersonModal[_ngcontent-%COMP%] {\n  --width: fit-content;\n  --min-width: 250px;\n  --height: fit-content;\n  --border-radius: 6px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n}\n\nion-modal#randomPersonModal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nion-modal#randomPlanModal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], \nion-modal#randomPlanModal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.user-random[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"]
});

/***/ })

}]);