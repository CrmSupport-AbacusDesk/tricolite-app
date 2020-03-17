(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-changestatus-com-changestatus-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Change Status</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            \r\n            <div class=\"common_form inner_page\">\r\n                <ion-item class=\"cs-select\">\r\n                    <ion-label>Select Status</ion-label>\r\n                    \r\n                    <ion-select [(ngModel)] = \"data.status\" placeholder=\"Select One\">\r\n\r\n                        <ion-select-option *ngFor=\"let row of statusOptionList\" [value]=\"row.status\">{{row.status}}</ion-select-option>\r\n\r\n                    </ion-select>\r\n\r\n                </ion-item>\r\n                \r\n                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\r\n                    <ion-button (click) = \"onSaveStatusDataHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                </div>\r\n            </div>\r\n            \r\n            <div *ngIf=\"taskStatusList && taskStatusList.length > 0\" class=\"complaints product-list part-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Status History</h1></div>\r\n\r\n                <div *ngFor=\"let row of taskStatusList\" class=\"figure nicon\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"names\">\r\n                                <h1>{{row.status}}</h1>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text><span>{{row.dateCreated}}</span> | {{row.timeCreated}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-changestatus/com-changestatus-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComChangestatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComChangestatusPageRoutingModule", function() { return ComChangestatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_changestatus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-changestatus.page */ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts");




var routes = [
    {
        path: '',
        component: _com_changestatus_page__WEBPACK_IMPORTED_MODULE_3__["ComChangestatusPage"]
    }
];
var ComChangestatusPageRoutingModule = /** @class */ (function () {
    function ComChangestatusPageRoutingModule() {
    }
    ComChangestatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComChangestatusPageRoutingModule);
    return ComChangestatusPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ComChangestatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComChangestatusPageModule", function() { return ComChangestatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_changestatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-changestatus-routing.module */ "./src/app/technician_app/complaints/com-changestatus/com-changestatus-routing.module.ts");
/* harmony import */ var _com_changestatus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-changestatus.page */ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts");







var ComChangestatusPageModule = /** @class */ (function () {
    function ComChangestatusPageModule() {
    }
    ComChangestatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _com_changestatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComChangestatusPageRoutingModule"]
            ],
            declarations: [_com_changestatus_page__WEBPACK_IMPORTED_MODULE_6__["ComChangestatusPage"]]
        })
    ], ComChangestatusPageModule);
    return ComChangestatusPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWNoYW5nZXN0YXR1cy9jb20tY2hhbmdlc3RhdHVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts ***!
  \*************************************************************************************/
/*! exports provided: ComChangestatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComChangestatusPage", function() { return ComChangestatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ComChangestatusPage = /** @class */ (function () {
    function ComChangestatusPage(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
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
        this.statusOptionList = [];
        this.taskStatusList = [];
        this.routeTitleForView = '';
        this.data = {};
        this.routeTitleForView = localStorage.getItem('routeTitleForView');
        this.routeParams.params.subscribe(function (params) {
            console.log(params);
            _this.taskId = params.taskId;
            _this.taskNo = params.taskNo;
            _this.taskStatus = params.taskStatus;
            console.log(_this.taskId);
            console.log(_this.taskNo);
            console.log(_this.taskStatus);
            _this.onGetTaskStatusDataHandler();
            _this.onGetTaskOptionDataHandler();
        });
    }
    ComChangestatusPage.prototype.ngOnInit = function () {
    };
    ComChangestatusPage.prototype.onSaveStatusDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isStatusAlreadyExist, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.data.status) return [3 /*break*/, 1];
                        this.dbService.onShowAlertMessage('Error', 'Status Required!');
                        return [3 /*break*/, 4];
                    case 1:
                        isStatusAlreadyExist = this.taskStatusList.findIndex(function (row) { return row.status == _this.data.status; });
                        if (isStatusAlreadyExist != -1) {
                            this.dbService.onShowAlertMessage('Error', 'Status Already Added!');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Confirm',
                                message: 'Are You Sure, You Want To Save Status ?',
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
                                                status: _this.data.status
                                            };
                                            _this.dbService.presentLoader();
                                            _this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskStatusData').subscribe(function (result) {
                                                console.log(result);
                                                _this.dbService.dismissLoader();
                                                _this.data.status = '';
                                                _this.dbService.presentToast('Status Saved Successfully!');
                                                _this.onGetTaskStatusDataHandler();
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
    ComChangestatusPage.prototype.onGetTaskStatusDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {
                    taskId: this.taskId
                };
                this.dbService.onPostRequestHandler(inputData, 'task/getTaskStatusData').subscribe(function (result) {
                    console.log(result);
                    _this.taskStatusList = result["taskStatusData"];
                });
                return [2 /*return*/];
            });
        });
    };
    ComChangestatusPage.prototype.onGetTaskOptionDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dbService.presentLoader();
                inputData = {
                    taskId: this.taskId
                };
                this.dbService.onPostRequestHandler(inputData, 'task/onGetStatusOptionList').subscribe(function (result) {
                    console.log(result);
                    _this.dbService.dismissLoader();
                    _this.statusOptionList = result["statusOptionList"];
                });
                return [2 /*return*/];
            });
        });
    };
    ComChangestatusPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskData, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskData = {
                            taskId: this.taskId,
                            taskNo: this.taskNo,
                            taskStatus: this.taskStatus,
                        };
                        return [4 /*yield*/, this.popoverController.create({
                                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
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
    ComChangestatusPage.prototype.GoComplaintDetail = function () {
        this.location.back();
    };
    ComChangestatusPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    ComChangestatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-com-changestatus',
            template: __webpack_require__(/*! raw-loader!./com-changestatus.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html"),
            styles: [__webpack_require__(/*! ./com-changestatus.page.scss */ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], ComChangestatusPage);
    return ComChangestatusPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-com-changestatus-com-changestatus-module-es5.js.map