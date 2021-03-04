(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-remarks-com-remarks-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Request Remarks</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n                <ion-item class=\"h110\">\r\n                    <ion-textarea [(ngModel)] = \"data.remark\"  placeholder=\"Your Comment\"></ion-textarea>\r\n                </ion-item>\r\n                \r\n                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\r\n                    <ion-button (click)=\"onSaveRemarkDataHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"remarkList && remarkList.length > 0\" class=\"complaints product-list mt20\">\r\n\r\n                <div class=\"cs-heading\"><h1>Remark History</h1></div>\r\n\r\n                <div class=\"feedback pt10 pr10 pb10 pl10\">\r\n\r\n                    <div *ngFor=\"let row of remarkList\" class=\"figure mb10\">\r\n                        <div class=\"cs-head\"><ion-text>{{row.dateCreated}}</ion-text></div>     \r\n                        <div class=\"cs-description\">\r\n                            <h1><ion-text>{{row.description}}</ion-text></h1>\r\n                        </div>               \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ComRemarksPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComRemarksPageRoutingModule", function() { return ComRemarksPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _com_remarks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-remarks.page */ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts");




const routes = [
    {
        path: '',
        component: _com_remarks_page__WEBPACK_IMPORTED_MODULE_3__["ComRemarksPage"]
    }
];
let ComRemarksPageRoutingModule = class ComRemarksPageRoutingModule {
};
ComRemarksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComRemarksPageRoutingModule);



/***/ }),

/***/ "./src/app/technician_app/complaints/com-remarks/com-remarks.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ComRemarksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComRemarksPageModule", function() { return ComRemarksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_remarks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-remarks-routing.module */ "./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts");
/* harmony import */ var _com_remarks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-remarks.page */ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts");







let ComRemarksPageModule = class ComRemarksPageModule {
};
ComRemarksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _com_remarks_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComRemarksPageRoutingModule"]
        ],
        declarations: [_com_remarks_page__WEBPACK_IMPORTED_MODULE_6__["ComRemarksPage"]]
    })
], ComRemarksPageModule);



/***/ }),

/***/ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLXJlbWFya3MvY29tLXJlbWFya3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts ***!
  \***************************************************************************/
/*! exports provided: ComRemarksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComRemarksPage", function() { return ComRemarksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let ComRemarksPage = class ComRemarksPage {
    constructor(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
        this.popoverController = popoverController;
        this.router = router;
        this.location = location;
        this.routeParams = routeParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.remarkList = [];
        this.data = {};
        this.routeParams.params.subscribe(params => {
            console.log(params);
            this.taskId = params.taskId;
            this.taskNo = params.taskNo;
            this.taskStatus = params.taskStatus;
            console.log(this.taskId);
            console.log(this.taskNo);
            console.log(this.taskStatus);
            this.onGetTaskRemarkDataHandler();
        });
    }
    ngOnInit() {
    }
    onSaveRemarkDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.data.remark) {
                this.dbService.onShowAlertMessage('Error', 'Remark Required!');
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirm',
                    message: 'Are You Sure, You Want To Save Remark ?',
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                console.log('No clicked');
                            }
                        },
                        {
                            text: 'Yes',
                            handler: () => {
                                console.log('Yes clicked');
                                const inputData = {
                                    taskId: this.taskId,
                                    remark: this.data.remark
                                };
                                this.dbService.presentLoader();
                                this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskRemarkData').subscribe((result) => {
                                    console.log(result);
                                    this.dbService.dismissLoader();
                                    this.data.remark = '';
                                    this.dbService.presentToast('Remark Saved Successfully!');
                                    this.onGetTaskRemarkDataHandler();
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    onGetTaskRemarkDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.dbService.presentLoader();
            const inputData = {
                taskId: this.taskId
            };
            this.dbService.onPostRequestHandler(inputData, 'task/getTaskRemarkData').subscribe((result) => {
                console.log(result);
                this.dbService.dismissLoader();
                this.remarkList = result[`taskRemarkData`];
            });
        });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const taskData = {
                taskId: this.taskId,
                taskNo: this.taskNo
            };
            const popover = yield this.popoverController.create({
                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
                event: ev,
                translucent: true,
                componentProps: taskData
            });
            return yield popover.present();
        });
    }
    GoComplaintDetail() {
        this.location.back();
    }
};
ComRemarksPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
ComRemarksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-com-remarks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./com-remarks.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./com-remarks.page.scss */ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], ComRemarksPage);



/***/ })

}]);
//# sourceMappingURL=complaints-com-remarks-com-remarks-module-es2015.js.map