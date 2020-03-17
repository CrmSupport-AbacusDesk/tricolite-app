(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-installspareparts-com-installspareparts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button  (click)=\"GoToSpareParts()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Install Spare Parts</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n\r\n                <ion-item class=\"cs-select\">\r\n                    <ion-label>Select Part Name</ion-label>\r\n                    <ionic-selectable\r\n                        [(ngModel)]=\"data.part\"\r\n                        [items]=\"partList\"\r\n                        itemValueField=\"part_id\"\r\n                        itemTextField=\"partNameWithNo\"\r\n                        [canSearch]=\"true\"\r\n                        (onChange)=\"onItemSelectedHandler($event)\">\r\n                    </ionic-selectable>\r\n                </ion-item>\r\n                \r\n                <div class=\"dflex\">\r\n                    \r\n                    <ion-item class=\"mw95 ml10 mr10\">\r\n                        <ion-label position=\"floating\">QTY</ion-label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"data.qty\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n                    </ion-item>\r\n                    \r\n                    <div class=\"plus-icon\">\r\n                        <ion-button (click)=\"onAddToCartHandler()\" color=\"success\"><ion-icon name=\"add\"></ion-icon></ion-button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n            \r\n            <div *ngIf=\"partCartData && partCartData.length > 0\" class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Spare Parts</h1></div>\r\n\r\n                <div *ngFor=\"let row of partCartData; let index = index\" class=\"figure pb0\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"names\">\r\n                                <h1>{{row.part_name}}</h1>\r\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <div class=\"count-delete\">\r\n                                <div class=\"count\">{{row.qty}}</div>\r\n                                <ion-button (click)=\"onItemDeleteHandler(index)\" fill=\"clear\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"partCartData && partCartData.length > 0\" class=\"cs-btn mt50\" text-right>\r\n                <ion-button (click) = \"onSaveInstalledPartHandler()\" class=\"success round large w150\" >SAVE</ion-button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ComInstallsparepartsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComInstallsparepartsPageRoutingModule", function() { return ComInstallsparepartsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_installspareparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-installspareparts.page */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts");




var routes = [
    {
        path: '',
        component: _com_installspareparts_page__WEBPACK_IMPORTED_MODULE_3__["ComInstallsparepartsPage"]
    }
];
var ComInstallsparepartsPageRoutingModule = /** @class */ (function () {
    function ComInstallsparepartsPageRoutingModule() {
    }
    ComInstallsparepartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComInstallsparepartsPageRoutingModule);
    return ComInstallsparepartsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComInstallsparepartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComInstallsparepartsPageModule", function() { return ComInstallsparepartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_installspareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-installspareparts-routing.module */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts-routing.module.ts");
/* harmony import */ var _com_installspareparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-installspareparts.page */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var ComInstallsparepartsPageModule = /** @class */ (function () {
    function ComInstallsparepartsPageModule() {
    }
    ComInstallsparepartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _com_installspareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComInstallsparepartsPageRoutingModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]
            ],
            declarations: [_com_installspareparts_page__WEBPACK_IMPORTED_MODULE_6__["ComInstallsparepartsPage"]]
        })
    ], ComInstallsparepartsPageModule);
    return ComInstallsparepartsPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWluc3RhbGxzcGFyZXBhcnRzL2NvbS1pbnN0YWxsc3BhcmVwYXJ0cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: ComInstallsparepartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComInstallsparepartsPage", function() { return ComInstallsparepartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ComInstallsparepartsPage = /** @class */ (function () {
    function ComInstallsparepartsPage(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
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
        this.partList = [];
        this.partCartData = [];
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
    ComInstallsparepartsPage.prototype.ngOnInit = function () {
    };
    ComInstallsparepartsPage.prototype.onGetTaskSparePartDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {
                    taskId: this.taskId
                };
                this.dbService.onPostRequestHandler(inputData, 'task/getTaskSparePartData').subscribe(function (result) {
                    console.log(result);
                    _this.partList = result["taskAssignedPartData"];
                });
                return [2 /*return*/];
            });
        });
    };
    ComInstallsparepartsPage.prototype.onItemSelectedHandler = function (event) {
        console.log(event);
    };
    ComInstallsparepartsPage.prototype.onSaveInstalledPartHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.partCartData || this.partCartData.length == 0)) return [3 /*break*/, 1];
                        this.dbService.onShowAlertMessage('Error', 'Part Required!');
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Save Part ?',
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
                                            installedPartData: _this.partCartData
                                        };
                                        _this.dbService.presentLoader();
                                        _this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskPartData').subscribe(function (result) {
                                            console.log(result);
                                            _this.dbService.dismissLoader();
                                            _this.data.status = '';
                                            // tslint:disable-next-line: max-line-length
                                            _this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/' + _this.taskId + '/' + _this.taskNo + '/' + _this.taskStatus);
                                            _this.dbService.presentToast('Part Saved Successfully!');
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
    ComInstallsparepartsPage.prototype.onAddToCartHandler = function () {
        var _this = this;
        var isInputEmpty = false;
        var emptyMsg = '';
        if (!this.data.part || this.data.part_id) {
            isInputEmpty = true;
            emptyMsg = 'Part Name Required!';
        }
        else if (!this.data.qty || this.data.qty == 0 || this.data.qty < 0) {
            isInputEmpty = true;
            emptyMsg = 'Qty Required!';
        }
        var totalQtyAfterAddedToCart = 0;
        var isIndex = this.partList.findIndex(function (row) { return row.part_id == _this.data.part["part_id"]; });
        var isQtyMoreThanAssigned = false;
        if (isIndex != -1) {
            console.log(this.data.part);
            var cartPartData = this.partCartData.filter(function (row) { return row.part_id == _this.data.part["part_id"]; });
            console.log(cartPartData);
            if (cartPartData.length == 0) {
                totalQtyAfterAddedToCart = this.data.qty;
            }
            else {
                for (var index = 0; index < cartPartData.length; index++) {
                    totalQtyAfterAddedToCart += cartPartData[index].qty;
                }
                totalQtyAfterAddedToCart += this.data.qty;
            }
            if (totalQtyAfterAddedToCart > this.partList[isIndex].totalQty) {
                isQtyMoreThanAssigned = true;
                emptyMsg = 'Qty Should Not be more than assigned Part Qty';
            }
        }
        console.log(totalQtyAfterAddedToCart);
        if (isInputEmpty || isQtyMoreThanAssigned) {
            this.dbService.onShowAlertMessage('Error', emptyMsg);
        }
        else {
            var cartIndex = this.partCartData.findIndex(function (row) { return row.part_id == _this.data.part["part_id"]; });
            if (cartIndex === -1) {
                var index = this.partList.findIndex(function (row) { return row.part_id == _this.data.part["part_id"]; });
                this.partCartData.push({
                    part_name: this.data.part["part_name"],
                    part_id: this.data.part["part_id"],
                    part_no: this.partList[index].part_no,
                    qty: this.data.qty,
                    lastUpdated: this.partList[index].lastUpdated
                });
            }
            else {
                this.partCartData[cartIndex].qty = totalQtyAfterAddedToCart;
            }
            this.data = {};
            this.dbService.presentToast('Item Updated To Cart Successfully!');
        }
    };
    ComInstallsparepartsPage.prototype.onItemDeleteHandler = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Delete Item ?',
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
                                        _this.partCartData.splice(index, 1);
                                        _this.dbService.presentToast('Item Deleted!');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComInstallsparepartsPage.prototype.presentPopover = function (ev) {
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
                                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
                                event: ev,
                                translucent: true,
                                componentProps: taskData
                            })];
                    case 1:
                        popover = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComInstallsparepartsPage.prototype.GoToSpareParts = function () {
        this.location.back();
    };
    ComInstallsparepartsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    ComInstallsparepartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-com-installspareparts',
            template: __webpack_require__(/*! raw-loader!./com-installspareparts.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.html"),
            styles: [__webpack_require__(/*! ./com-installspareparts.page.scss */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], ComInstallsparepartsPage);
    return ComInstallsparepartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-com-installspareparts-com-installspareparts-module-es5.js.map