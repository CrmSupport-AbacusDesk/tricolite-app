(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-sparepart-sparepart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/service_request/sparepart/sparepart.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/service_request/sparepart/sparepart.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoToDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM50421 - <ion-text>Spare Parts</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentcutomerPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            \r\n            <div class=\"complaints product-list part-list\">\r\n                <div class=\"cs-heading\"><h1>install spare parts</h1></div>\r\n                <div class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">52</div>\r\n                            <div class=\"names\">\r\n                                <h1>ACB Fixed Part</h1>\r\n                                <ion-text>Last Update : 12 Dec 2019</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>ACA0077</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">52</div>\r\n                            <div class=\"names\">\r\n                                <h1>ACB Fixed Part</h1>\r\n                                <ion-text>Last Update : 12 Dec 2019</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>ACA0077</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">52</div>\r\n                            <div class=\"names\">\r\n                                <h1>ACB Fixed Part</h1>\r\n                                <ion-text>Last Update : 12 Dec 2019</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>ACA0077</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/service_request/sparepart/sparepart-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/customer_app/service_request/sparepart/sparepart-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: SparepartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparepartPageRoutingModule", function() { return SparepartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sparepart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sparepart.page */ "./src/app/customer_app/service_request/sparepart/sparepart.page.ts");




const routes = [
    {
        path: '',
        component: _sparepart_page__WEBPACK_IMPORTED_MODULE_3__["SparepartPage"]
    }
];
let SparepartPageRoutingModule = class SparepartPageRoutingModule {
};
SparepartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SparepartPageRoutingModule);



/***/ }),

/***/ "./src/app/customer_app/service_request/sparepart/sparepart.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customer_app/service_request/sparepart/sparepart.module.ts ***!
  \****************************************************************************/
/*! exports provided: SparepartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparepartPageModule", function() { return SparepartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sparepart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sparepart-routing.module */ "./src/app/customer_app/service_request/sparepart/sparepart-routing.module.ts");
/* harmony import */ var _sparepart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sparepart.page */ "./src/app/customer_app/service_request/sparepart/sparepart.page.ts");







let SparepartPageModule = class SparepartPageModule {
};
SparepartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sparepart_routing_module__WEBPACK_IMPORTED_MODULE_5__["SparepartPageRoutingModule"]
        ],
        declarations: [_sparepart_page__WEBPACK_IMPORTED_MODULE_6__["SparepartPage"]]
    })
], SparepartPageModule);



/***/ }),

/***/ "./src/app/customer_app/service_request/sparepart/sparepart.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/customer_app/service_request/sparepart/sparepart.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3Qvc3BhcmVwYXJ0L3NwYXJlcGFydC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer_app/service_request/sparepart/sparepart.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer_app/service_request/sparepart/sparepart.page.ts ***!
  \**************************************************************************/
/*! exports provided: SparepartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparepartPage", function() { return SparepartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request-popover/request-popover.component */ "./src/app/customer_app/service_request/request-popover/request-popover.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SparepartPage = class SparepartPage {
    constructor(popoverController, router) {
        this.popoverController = popoverController;
        this.router = router;
    }
    ngOnInit() {
    }
    presentcutomerPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_3__["RequestPopoverComponent"],
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    GoToDetail() {
        this.router.navigateByUrl('/customer/request/detail');
    }
};
SparepartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SparepartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sparepart',
        template: __webpack_require__(/*! raw-loader!./sparepart.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/service_request/sparepart/sparepart.page.html"),
        styles: [__webpack_require__(/*! ./sparepart.page.scss */ "./src/app/customer_app/service_request/sparepart/sparepart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SparepartPage);



/***/ })

}]);
//# sourceMappingURL=service_request-sparepart-sparepart-module-es2015.js.map