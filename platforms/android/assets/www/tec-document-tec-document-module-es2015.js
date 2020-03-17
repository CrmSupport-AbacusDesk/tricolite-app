(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tec-document-tec-document-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/tec-document/tec-document.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/tec-document/tec-document.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/technicians/menu']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Documents</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"m_documents\" padding>\r\n                <div *ngFor=\"let row of documentList\" routerLink=\"/technicians/menu/documents/detail/{{row.id}}/{{row.subject}}\" class=\"figure\">\r\n                    <div class=\"thumb\"><img src=\"{{dbService.masterDocURL + row.document_url}}\" alt=\"\"></div>\r\n                    <h1><ion-text>{{row.subject}}</ion-text> <i class=\"material-icons\">arrow_right_alt</i></h1>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/tec-document/tec-document-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/technician_app/tec-document/tec-document-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TecDocumentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecDocumentPageRoutingModule", function() { return TecDocumentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tec_document_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tec-document.page */ "./src/app/technician_app/tec-document/tec-document.page.ts");




const routes = [
    {
        path: '',
        component: _tec_document_page__WEBPACK_IMPORTED_MODULE_3__["TecDocumentPage"]
    }
];
let TecDocumentPageRoutingModule = class TecDocumentPageRoutingModule {
};
TecDocumentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecDocumentPageRoutingModule);



/***/ }),

/***/ "./src/app/technician_app/tec-document/tec-document.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/technician_app/tec-document/tec-document.module.ts ***!
  \********************************************************************/
/*! exports provided: TecDocumentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecDocumentPageModule", function() { return TecDocumentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_document_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tec-document-routing.module */ "./src/app/technician_app/tec-document/tec-document-routing.module.ts");
/* harmony import */ var _tec_document_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tec-document.page */ "./src/app/technician_app/tec-document/tec-document.page.ts");







let TecDocumentPageModule = class TecDocumentPageModule {
};
TecDocumentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tec_document_routing_module__WEBPACK_IMPORTED_MODULE_5__["TecDocumentPageRoutingModule"]
        ],
        declarations: [_tec_document_page__WEBPACK_IMPORTED_MODULE_6__["TecDocumentPage"]]
    })
], TecDocumentPageModule);



/***/ }),

/***/ "./src/app/technician_app/tec-document/tec-document.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/technician_app/tec-document/tec-document.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL3RlYy1kb2N1bWVudC90ZWMtZG9jdW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/technician_app/tec-document/tec-document.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/technician_app/tec-document/tec-document.page.ts ***!
  \******************************************************************/
/*! exports provided: TecDocumentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecDocumentPage", function() { return TecDocumentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






let TecDocumentPage = class TecDocumentPage {
    constructor(route, formBuilder, alertCtrl, dbService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.documentList = [];
    }
    ngOnInit() {
        this.onGetDocumentList();
    }
    onGetDocumentList() {
        this.dbService.presentLoader();
        const inputData = {};
        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
            console.log(result);
            this.dbService.dismissLoader();
            if (result[`status`] == 'error') {
                this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);
            }
            else {
                this.documentList = result[`documentList`];
            }
        });
    }
};
TecDocumentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
TecDocumentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tec-document',
        template: __webpack_require__(/*! raw-loader!./tec-document.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/tec-document/tec-document.page.html"),
        styles: [__webpack_require__(/*! ./tec-document.page.scss */ "./src/app/technician_app/tec-document/tec-document.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], TecDocumentPage);



/***/ })

}]);
//# sourceMappingURL=tec-document-tec-document-module-es2015.js.map