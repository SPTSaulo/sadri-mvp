"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[637],{

/***/ 9885:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 3026);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4412);
var _UserService;




class UserService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore);
    this.COLLECTION_NAME = 'users';
    this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
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
  update(item) {
    const itemDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, this.COLLECTION_NAME, item.id);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(itemDocRef, item);
  }
}
_UserService = UserService;
_UserService.ɵfac = function UserService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserService)();
};
_UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _UserService,
  factory: _UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 60:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
var _TabsPageRoutingModule;




const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'tab1',
    loadChildren: () => __webpack_require__.e(/*! import() */ 2637).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2637)).then(m => m.Tab1PageModule)
  }, {
    path: 'tab2',
    loadChildren: () => __webpack_require__.e(/*! import() */ 8363).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 8363)).then(m => m.Tab2PageModule)
  }, {
    path: 'tab3',
    loadChildren: () => __webpack_require__.e(/*! import() */ 5837).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 5837)).then(m => m.Tab3PageModule)
  }, {
    path: 'tab4',
    loadChildren: () => __webpack_require__.e(/*! import() */ 5063).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 5063)).then(m => m.Tab4PageModule)
  }, {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}];
class TabsPageRoutingModule {}
_TabsPageRoutingModule = TabsPageRoutingModule;
_TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPageRoutingModule)();
};
_TabsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _TabsPageRoutingModule
});
_TabsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 637:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageModule: () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 60);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
var _TabsPageModule;






class TabsPageModule {}
_TabsPageModule = TabsPageModule;
_TabsPageModule.ɵfac = function TabsPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPageModule)();
};
_TabsPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _TabsPageModule
});
_TabsPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 54:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 9885);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4474);
var _TabsPage;




function TabsPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Pelis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-tab-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Series");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-tab-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Planes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-tab-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Minipuntos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function TabsPage_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-picker-column-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r3.name);
  }
}
function TabsPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-picker")(1, "ion-picker-column", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function TabsPage_Conditional_1_Template_ion_picker_column_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.changeUserSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](2, TabsPage_Conditional_1_For_3_Template, 2, 2, "ion-picker-column-option", 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TabsPage_Conditional_1_Template_ion_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.updateCurrentUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.users[0].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx_r1.users);
  }
}
class TabsPage {
  constructor() {
    this.userService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService);
    this.userService.getAll().subscribe(data => {
      this.users = data;
      this.preventUser = this.users[0];
    });
    this.currentUser = this.userService.currentUser.getValue();
  }
  updateCurrentUser() {
    this.currentUser = this.preventUser;
    this.userService.currentUser.next(this.currentUser);
  }
  changeUserSelection(event) {
    this.preventUser = this.users.find(user => user.id === event.detail.value);
  }
}
_TabsPage = TabsPage;
_TabsPage.ɵfac = function TabsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TabsPage)();
};
_TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _TabsPage,
  selectors: [["app-tabs"]],
  standalone: false,
  decls: 2,
  vars: 1,
  consts: [["slot", "bottom"], ["tab", "tab1", "href", "/tabs/tab1"], ["aria-hidden", "true", "name", "film-outline"], ["tab", "tab2", "href", "/tabs/tab2"], ["aria-hidden", "true", "name", "tv-outline"], ["tab", "tab4", "href", "/tabs/tab4"], ["name", "heart-outline"], ["tab", "tab3", "href", "/tabs/tab3"], ["aria-hidden", "true", "name", "cash-outline"], [3, "ionChange", "value"], [3, "value"], ["expand", "block", 2, "width", "100%", 3, "click"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TabsPage_Conditional_0_Template, 18, 0, "ion-tabs")(1, TabsPage_Conditional_1_Template, 6, 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.currentUser ? 0 : ctx.users ? 1 : -1);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonPicker, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonPickerColumn, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonPickerColumnOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTabs],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}"]
});

/***/ })

}]);