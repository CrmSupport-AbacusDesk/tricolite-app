(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-remarks-com-remarks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Complaint Remarks</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n                <ion-item class=\"h110\">\r\n                    <ion-textarea [(ngModel)] = \"data.remark\"  placeholder=\"Your Comment\"></ion-textarea>\r\n                </ion-item>\r\n                \r\n                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\r\n                    <ion-button (click)=\"onSaveRemarkDataHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"remarkList && remarkList.length > 0\" class=\"complaints product-list mt20\">\r\n\r\n                <div class=\"cs-heading\"><h1>Remark History</h1></div>\r\n\r\n                <div class=\"feedback pt10 pr10 pb10 pl10\">\r\n\r\n                    <div *ngFor=\"let row of remarkList\" class=\"figure mb10\">\r\n                        <div class=\"cs-head\"><ion-text>{{row.dateCreated}}</ion-text></div>     \r\n                        <div class=\"cs-description\">\r\n                            <h1><ion-text>{{row.description}}</ion-text></h1>\r\n                        </div>               \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_remarks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-remarks.page */ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts");




var routes = [
    {
        path: '',
        component: _com_remarks_page__WEBPACK_IMPORTED_MODULE_3__["ComRemarksPage"]
    }
];
var ComRemarksPageRoutingModule = /** @class */ (function () {
    function ComRemarksPageRoutingModule() {
    }
    ComRemarksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComRemarksPageRoutingModule);
    return ComRemarksPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_remarks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-remarks-routing.module */ "./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts");
/* harmony import */ var _com_remarks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-remarks.page */ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts");







var ComRemarksPageModule = /** @class */ (function () {
    function ComRemarksPageModule() {
    }
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
    return ComRemarksPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLXJlbWFya3MvY29tLXJlbWFya3MucGFnZS5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ComRemarksPage = /** @class */ (function () {
    function ComRemarksPage(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
        var _this = this;
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
        this.routeParams.params.subscribe(function (params) {
            console.log(params);
            _this.taskId = params.taskId;
            _this.taskNo = params.taskNo;
            _this.taskStatus = params.taskStatus;
            console.log(_this.taskId);
            console.log(_this.taskNo);
            console.log(_this.taskStatus);
            _this.onGetTaskRemarkDataHandler();
        });
    }
    ComRemarksPage.prototype.ngOnInit = function () {
    };
    ComRemarksPage.prototype.onSaveRemarkDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.data.remark) return [3 /*break*/, 1];
                        this.dbService.onShowAlertMessage('Error', 'Remark Required!');
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Save Remark ?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('No clicked');
                                    }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Yes clicked');
                                        var inputData = {
                                            taskId: _this.taskId,
                                            remark: _this.data.remark
                                        };
                                        _this.dbService.presentLoader();
                                        _this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskRemarkData').subscribe(function (result) {
                                            console.log(result);
                                            _this.dbService.dismissLoader();
                                            _this.data.remark = '';
                                            _this.dbService.presentToast('Remark Saved Successfully!');
                                            _this.onGetTaskRemarkDataHandler();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ComRemarksPage.prototype.onGetTaskRemarkDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dbService.presentLoader();
                inputData = {
                    taskId: this.taskId
                };
                this.dbService.onPostRequestHandler(inputData, 'task/getTaskRemarkData').subscribe(function (result) {
                    console.log(result);
                    _this.dbService.dismissLoader();
                    _this.remarkList = result["taskRemarkData"];
                });
                return [2 /*return*/];
            });
        });
    };
    ComRemarksPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskData, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskData = {
                            taskId: this.taskId,
                            taskNo: this.taskNo
                        };
                        return [4 /*yield*/, this.popoverController.create({
                                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
                                event: ev,
                                translucent: true,
                                componentProps: taskData
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ComRemarksPage.prototype.GoComplaintDetail = function () {
        this.location.back();
    };
    ComRemarksPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    ComRemarksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-com-remarks',
            template: __webpack_require__(/*! raw-loader!./com-remarks.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html"),
            styles: [__webpack_require__(/*! ./com-remarks.page.scss */ "./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], ComRemarksPage);
    return ComRemarksPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-com-remarks-com-remarks-module-es5.js.map