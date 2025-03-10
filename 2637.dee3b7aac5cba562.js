"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2637],{

/***/ 4888:
/*!******************************************!*\
  !*** ./src/app/services/film.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilmService: () => (/* binding */ FilmService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 3026);
var _FilmService;



class FilmService {
  constructor() {
    this.firestore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore);
    this.COLLECTION_NAME = 'films';
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
_FilmService = FilmService;
_FilmService.ɵfac = function FilmService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FilmService)();
};
_FilmService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _FilmService,
  factory: _FilmService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2396:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab1PageRoutingModule: () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab1PageRoutingModule;




const routes = [{
  path: '',
  component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
}];
class Tab1PageRoutingModule {}
_Tab1PageRoutingModule = Tab1PageRoutingModule;
_Tab1PageRoutingModule.ɵfac = function Tab1PageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1PageRoutingModule)();
};
_Tab1PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _Tab1PageRoutingModule
});
_Tab1PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab1PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2637:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab1PageModule: () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 710);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1-routing.module */ 2396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
var _Tab1PageModule;






class Tab1PageModule {}
_Tab1PageModule = Tab1PageModule;
_Tab1PageModule.ɵfac = function Tab1PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1PageModule)();
};
_Tab1PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _Tab1PageModule
});
_Tab1PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Tab1PageModule, {
    declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule]
  });
})();

/***/ }),

/***/ 710:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab1Page: () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _services_film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/film.service */ 4888);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 177);

var _Tab1Page;






const _c0 = a0 => ({
  "disabled-card": a0
});
function Tab1Page_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 3)(1, "ion-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab1Page_For_8_Template_ion_card_click_1_listener() {
      const film_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.presentActionSheet(film_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-card-content")(4, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const film_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, film_r3.viewed));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", film_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](film_r3.name);
  }
}
function Tab1Page_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "ion-text")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "La peli random es...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-text")(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab1Page_ng_template_17_Template_ion_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.markFilmAsViewed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab1Page_ng_template_17_Template_ion_button_click_11_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.randomFilm.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.randomFilm.name);
  }
}
class Tab1Page {
  constructor() {
    this.filmService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_film_service__WEBPACK_IMPORTED_MODULE_1__.FilmService);
    this.actionSheetController = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ActionSheetController);
    this.isRandomModalOpen = false;
    this.isToastOpen = false;
    this.isActionSheetOpen = false;
    this.filmService.getAll().subscribe(data => this.films = data);
  }
  getRandomFilm() {
    const filterFilms = this.films.filter(film => !film.viewed);
    const randomIndex = Math.floor(Math.random() * filterFilms.length);
    this.randomFilm = filterFilms[randomIndex];
    this.isRandomModalOpen = true;
  }
  markFilmAsViewed() {
    this.randomFilm.viewed = true;
    this.filmService.update(this.randomFilm);
    this.isRandomModalOpen = false;
    this.isToastOpen = true;
  }
  presentActionSheet(film) {
    var _this = this;
    return (0,C_Users_Saulo_Documents_Proyectos_sadri_mvp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetController.create({
        header: 'Acciones',
        buttons: [{
          text: film.viewed ? 'Marcar como no vista' : 'Marcar como vista',
          data: {
            action: 'share'
          },
          handler: () => _this.filmService.update({
            ...film,
            viewed: !film.viewed
          })
        }, {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete'
          },
          handler: () => _this.filmService.delete(film.id)
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
_Tab1Page = Tab1Page;
_Tab1Page.ɵfac = function Tab1Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1Page)();
};
_Tab1Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _Tab1Page,
  selectors: [["app-tab1"]],
  standalone: false,
  decls: 19,
  vars: 5,
  consts: [["modal", ""], [3, "translucent"], [3, "fullscreen"], ["size", "6"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["name", "ellipsis-vertical-outline"], ["side", "top"], [3, "click"], ["name", "shuffle-outline"], ["id", "randomFilmModal", 3, "ionModalDidDismiss", "isOpen"], ["message", "La peli se marc\u00F3 como vista", "swipeGesture", "vertical", 3, "didDismiss", "duration", "isOpen"], [3, "click", "ngClass"], [3, "src"], [1, "wrapper"], ["fill", "outline", 3, "click"], ["name", "eye-outline", 2, "margin-left", "10px"], ["color", "danger", "fill", "outline", 3, "click"], ["name", "close-outline", 2, "margin-left", "10px"]],
  template: function Tab1Page_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 1)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Pelis ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-content", 2)(5, "ion-grid")(6, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, Tab1Page_For_8_Template, 6, 5, "ion-col", 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-fab", 4)(10, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-fab-list", 6)(13, "ion-fab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Tab1Page_Template_ion_fab_button_click_13_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.getRandomFilm());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-modal", 9, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionModalDidDismiss", function Tab1Page_Template_ion_modal_ionModalDidDismiss_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.isRandomModalOpen = false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, Tab1Page_ng_template_17_Template, 14, 2, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-toast", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("didDismiss", function Tab1Page_Template_ion_toast_didDismiss_18_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.films);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isOpen", ctx.isRandomModalOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("duration", 3000)("isOpen", ctx.isToastOpen);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToast, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonModal, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: ["ion-card[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n\nion-img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  object-fit: cover;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\nion-modal#randomFilmModal[_ngcontent-%COMP%] {\n  --width: fit-content;\n  --min-width: 250px;\n  --height: fit-content;\n  --border-radius: 6px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n}\n\nion-modal#randomFilmModal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n}\n\n.disabled-card[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  filter: grayscale(100%);\n}"]
});

/***/ })

}]);