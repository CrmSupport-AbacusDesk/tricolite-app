(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/aboutus/aboutus.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/aboutus/aboutus.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-title class=\"pl0\">About Tricolite</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n                <div class=\"ion-padding\">\r\n                    <div class=\"cnt-content mb32\">\r\n                        <p class=\"mb32\">A closely held organization, its has its presence across segments and geographies. Its built its brand with great toil and commitment to the values of delivering total quality and customer centric approach. Over 4 decades of experience in manufacturing has guaranteed in-depth knowledge of the products and their varied applications. It has always had a vision to us the best technology and machinery to deliver a premium product. Teams across all functions are continuously being trained on the new trends in the market and how they can add value to our customers.</p>\r\n                        <p class=\"mb32\">What distinguishes Tricolite from its peers is the culture of continuous learning, high responsibility and full freedom that’s given to the empowered employees to achieve their maximum potential and take full ownership of the organization. Its decentralized management style and been the back bone of building one of the best teams available in the industry pan India.</p>\r\n                        <p>Tricolite aims to be the first choice of their customers as mentioned in our vision statement. We work towards customer exultation such that we are always present to fulfill their future requirements. All prestigious brands across segments choose to work with Trciolite given its history of performance and commitment.</p>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/aboutus/aboutus-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer_app/aboutus/aboutus-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AboutusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function() { return AboutusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/customer_app/aboutus/aboutus.page.ts");




var routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }
];
var AboutusPageRoutingModule = /** @class */ (function () {
    function AboutusPageRoutingModule() {
    }
    AboutusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AboutusPageRoutingModule);
    return AboutusPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/aboutus/aboutus.module.ts":
/*!********************************************************!*\
  !*** ./src/app/customer_app/aboutus/aboutus.module.ts ***!
  \********************************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus-routing.module */ "./src/app/customer_app/aboutus/aboutus-routing.module.ts");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/customer_app/aboutus/aboutus.page.ts");







var AboutusPageModule = /** @class */ (function () {
    function AboutusPageModule() {
    }
    AboutusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]
            ],
            declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
        })
    ], AboutusPageModule);
    return AboutusPageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/aboutus/aboutus.page.scss":
/*!********************************************************!*\
  !*** ./src/app/customer_app/aboutus/aboutus.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9hYm91dHVzL2Fib3V0dXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer_app/aboutus/aboutus.page.ts":
/*!******************************************************!*\
  !*** ./src/app/customer_app/aboutus/aboutus.page.ts ***!
  \******************************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmmodal_confirmmodal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmmodal/confirmmodal.page */ "./src/app/customer_app/confirmmodal/confirmmodal.page.ts");




var AboutusPage = /** @class */ (function () {
    function AboutusPage(modalController) {
        this.modalController = modalController;
    }
    AboutusPage.prototype.ngOnInit = function () {
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        console.log(loginData);
        if (loginData && loginData.loginStatus && loginData.loginStatus != 'Approved') {
            this.presentModal();
        }
    };
    AboutusPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _confirmmodal_confirmmodal_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmmodalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AboutusPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AboutusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! raw-loader!./aboutus.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/aboutus/aboutus.page.html"),
            styles: [__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/customer_app/aboutus/aboutus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AboutusPage);
    return AboutusPage;
}());



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module-es5.js.map