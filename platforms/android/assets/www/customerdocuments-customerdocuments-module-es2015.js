(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerdocuments-customerdocuments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerdocuments/customerdocuments.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerdocuments/customerdocuments.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/home']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Documents</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        \r\n        <div class=\"ion-padding-horizontal\">\r\n            <div class=\"cs-tabs\">\r\n                <ion-button (click)=\"currentActiveTab = 1; onGetDocumentList()\" [ngClass]=\"currentActiveTab==1 ? 'active' : ''\">Personal Document</ion-button>\r\n                <ion-button (click)=\"currentActiveTab = 2; onGetDocumentList()\" [ngClass]=\"currentActiveTab==2 ? 'active' : ''\">Common Document</ion-button>\r\n            </div>\r\n        </div>\r\n        \r\n        <div *ngIf=\"currentActiveTab==1\" class=\"cs-ion-content pt0\" padding>\r\n            \r\n            <ion-list class=\"list-item\">\r\n                <ion-item *ngFor=\"let row of documentList\" (click)=\"onGetImageDataHandler(row.id, row.subject)\" >\r\n                    <ion-label>{{row.subject}}</ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n            <!-- <div class=\"m_documents\" padding>\r\n                <div *ngFor=\"let row of documentList\" (click)=\"onGetImageDataHandler(row.id, row.subject)\" class=\"figure\">\r\n                    <div class=\"thumb\"><img src=\"{{dbService.customerDocURL + row.document_url}}\" alt=\"\"></div>\r\n                    <h1><ion-text>{{row.subject}}</ion-text> <i class=\"material-icons\">arrow_right_alt</i></h1>\r\n                </div>\r\n            </div> -->\r\n            \r\n            <div *ngIf=\"!isRequestInProcess && documentList.length == 0\" class=\"no-data\">\r\n                <img src=\"assets/icon/no_found.svg\">\r\n                <p>No Data Available!</p>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        \r\n        \r\n        <div *ngIf=\"currentActiveTab==2\" class=\"cs-ion-content pt0\" padding>\r\n            <ion-list class=\"list-item\">\r\n                <ion-item *ngFor=\"let row of masterDocList\" (click)=\"onGetImageDataHandler(row.id, row.subject)\" >\r\n                    <ion-label>{{row.subject}}</ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n            \r\n            <div *ngIf=\"!isRequestInProcess && masterDocList.length == 0\" class=\"no-data\">\r\n                <img src=\"assets/icon/no_found.svg\">\r\n                <p>No Data Available!</p>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/customer_app/customerdocuments/customerdocuments-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/customer_app/customerdocuments/customerdocuments-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerdocumentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdocumentsPageRoutingModule", function() { return CustomerdocumentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerdocuments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerdocuments.page */ "./src/app/customer_app/customerdocuments/customerdocuments.page.ts");




const routes = [
    {
        path: '',
        component: _customerdocuments_page__WEBPACK_IMPORTED_MODULE_3__["CustomerdocumentsPage"]
    }
];
let CustomerdocumentsPageRoutingModule = class CustomerdocumentsPageRoutingModule {
};
CustomerdocumentsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerdocumentsPageRoutingModule);



/***/ }),

/***/ "./src/app/customer_app/customerdocuments/customerdocuments.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customer_app/customerdocuments/customerdocuments.module.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerdocumentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdocumentsPageModule", function() { return CustomerdocumentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customerdocuments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerdocuments-routing.module */ "./src/app/customer_app/customerdocuments/customerdocuments-routing.module.ts");
/* harmony import */ var _customerdocuments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerdocuments.page */ "./src/app/customer_app/customerdocuments/customerdocuments.page.ts");







let CustomerdocumentsPageModule = class CustomerdocumentsPageModule {
};
CustomerdocumentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerdocuments_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerdocumentsPageRoutingModule"]
        ],
        declarations: [_customerdocuments_page__WEBPACK_IMPORTED_MODULE_6__["CustomerdocumentsPage"]]
    })
], CustomerdocumentsPageModule);



/***/ }),

/***/ "./src/app/customer_app/customerdocuments/customerdocuments.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/customer_app/customerdocuments/customerdocuments.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9jdXN0b21lcmRvY3VtZW50cy9jdXN0b21lcmRvY3VtZW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/customer_app/customerdocuments/customerdocuments.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer_app/customerdocuments/customerdocuments.page.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerdocumentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerdocumentsPage", function() { return CustomerdocumentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






let CustomerdocumentsPage = class CustomerdocumentsPage {
    constructor(route, formBuilder, alertCtrl, dbService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.documentList = [];
        this.masterDocList = [];
        this.isRequestInProcess = false;
        this.documentImageData = [];
        this.currentActiveTab = 1;
    }
    ngOnInit() {
        this.onGetDocumentList();
    }
    onGetDocumentList() {
        this.dbService.presentLoader();
        const inputData = {};
        this.isRequestInProcess = true;
        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
            console.log(result);
            this.dbService.dismissLoader();
            if (result[`status`] == 'error') {
                this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);
            }
            else {
                this.documentList = result[`documentList`];
                this.masterDocList = result[`masterDocList`];
            }
            this.isRequestInProcess = false;
        });
    }
    onGetImageDataHandler(documentId, documentTitle) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {
                documentId: documentId,
                documentTitle: documentTitle
            };
            this.dbService.presentLoader();
            this.dbService.onPostRequestHandler(inputData, 'task/getDocumentAllList').subscribe((result) => {
                console.log(result);
                this.dbService.dismissLoader();
                this.documentImageData = result[`documentImageData`];
                this.onViewImageHandler(0);
            });
        });
    }
    onViewImageHandler(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let imagePath;
            if (this.documentImageData[index].uploadFolderName && this.documentImageData[index].uploadFolderName == 'master') {
                imagePath = this.dbService.masterDocURL + this.documentImageData[index].document_url;
                console.log(imagePath);
            }
            else {
                imagePath = this.dbService.customerDocURL + this.documentImageData[index].document_url;
                console.log(imagePath);
            }
            window.open(imagePath, '_blank');
            //  this.photoViewer.show(imagePath);
        });
    }
};
CustomerdocumentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
CustomerdocumentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerdocuments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customerdocuments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerdocuments/customerdocuments.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customerdocuments.page.scss */ "./src/app/customer_app/customerdocuments/customerdocuments.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], CustomerdocumentsPage);



/***/ })

}]);
//# sourceMappingURL=customerdocuments-customerdocuments-module-es2015.js.map