(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-spareparts-com-spareparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Spare Parts</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n\r\n            <div class=\"complaints product-list part-list\">\r\n                <div class=\"cs-heading\"><h1>Assign spare parts</h1></div>\r\n\r\n                <div *ngFor=\"let row of sparePartAssignedData\" class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">{{row.assign_qty}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{row.part_name}}</h1>\r\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{row.part_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div *ngIf=\"sparePartInstalledData && sparePartInstalledData.length > 0\" class=\"complaints product-list part-list mt20\">\r\n\r\n                <div class=\"cs-heading\"><h1>install spare parts</h1></div>\r\n\r\n                <div *ngFor=\"let row of sparePartInstalledData\" class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">{{row.installed_qty}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{row.part_name}}</h1>\r\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{row.part_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" size=\"small\" (click)=\"GoToInstallSpareParts()\" *ngIf = \"taskStatus != 'Close'\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComSparepartsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComSparepartsPageRoutingModule", function() { return ComSparepartsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_spareparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-spareparts.page */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts");




var routes = [
    {
        path: '',
        component: _com_spareparts_page__WEBPACK_IMPORTED_MODULE_3__["ComSparepartsPage"]
    }
];
var ComSparepartsPageRoutingModule = /** @class */ (function () {
    function ComSparepartsPageRoutingModule() {
    }
    ComSparepartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComSparepartsPageRoutingModule);
    return ComSparepartsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ComSparepartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComSparepartsPageModule", function() { return ComSparepartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_spareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-spareparts-routing.module */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts");
/* harmony import */ var _com_spareparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-spareparts.page */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var ComSparepartsPageModule = /** @class */ (function () {
    function ComSparepartsPageModule() {
    }
    ComSparepartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _com_spareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComSparepartsPageRoutingModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]
            ],
            declarations: [_com_spareparts_page__WEBPACK_IMPORTED_MODULE_6__["ComSparepartsPage"]]
        })
    ], ComSparepartsPageModule);
    return ComSparepartsPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLXNwYXJlcGFydHMvY29tLXNwYXJlcGFydHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ComSparepartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComSparepartsPage", function() { return ComSparepartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






var ComSparepartsPage = /** @class */ (function () {
    function ComSparepartsPage(popoverController, router, routeParams, alertCtrl, toastCtrl, dbService) {
        var _this = this;
        this.popoverController = popoverController;
        this.router = router;
        this.routeParams = routeParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.sparePartAssignedData = [];
        this.sparePartInstalledData = [];
        this.data = {};
        this.routeParams.params.subscribe(function (params) {
            console.log(params);
            _this.taskId = params.taskId;
            _this.taskNo = params.taskNo;
            _this.taskStatus = params.taskStatus;
            console.log(_this.taskId);
            console.log(_this.taskNo);
            console.log(_this.taskStatus);
            _this.onGetTaskSparePartDataHandler();
        });
    }
    ComSparepartsPage.prototype.ngOnInit = function () {
    };
    ComSparepartsPage.prototype.onGetTaskSparePartDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {
                    taskId: this.taskId
                };
                this.dbService.onPostRequestHandler(inputData, 'task/getTaskSparePartData').subscribe(function (result) {
                    console.log(result);
                    _this.sparePartAssignedData = result["taskAssignedPartData"];
                    _this.sparePartInstalledData = result["taskInstalledPartData"];
                });
                return [2 /*return*/];
            });
        });
    };
    ComSparepartsPage.prototype.presentPopover = function (ev) {
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
                        console.log(taskData);
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
    ComSparepartsPage.prototype.GoComplaintDetail = function () {
        this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + this.taskId);
    };
    ComSparepartsPage.prototype.GoToInstallSpareParts = function () {
        this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/installspareparts/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
    };
    ComSparepartsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    ComSparepartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-com-spareparts',
            template: __webpack_require__(/*! raw-loader!./com-spareparts.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html"),
            styles: [__webpack_require__(/*! ./com-spareparts.page.scss */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], ComSparepartsPage);
    return ComSparepartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-com-spareparts-com-spareparts-module-es5.js.map