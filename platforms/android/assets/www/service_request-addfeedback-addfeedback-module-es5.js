(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-addfeedback-addfeedback-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Give Your Feedback</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div *ngIf=\"taskData && taskData.task_no\" class=\"complaints\">\r\n                <div class=\"figure\">\r\n                    <div class=\"top\">\r\n                        <div class=\"cs-left\">\r\n                            <h1>#COM-{{taskData.task_no}} <ion-text>({{taskData.days}} Days)</ion-text></h1>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{taskData.dateCreated}}  |  {{taskData.timeCreated}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"gfeedback ion-padding\">\r\n                <div *ngIf=\"userData && userData.name\" class=\"cnt-info\">\r\n                    <div class=\"cs-left\">\r\n                        <div class=\"f-alpha\">{{userData.name[0]}}</div>\r\n                        <div class=\"names\">\r\n                            <h1>{{userData.name}}</h1>\r\n                            <ion-text>+91 {{userData.mobile}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"stars\">\r\n                        <ion-button  [ngClass]=\"selectedRating >= 1 ? 'fillColor' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(1)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button [ngClass]=\"selectedRating >= 2 ? 'fillColor' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(2)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating >= 3 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(3)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating >= 4 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(4)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating == 5 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(5)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n                    </div>\r\n                    \r\n                    <ion-item class=\"h70\">\r\n                        <ion-textarea [(ngModel)]=\"data.description\" placeholder=\"Description\"></ion-textarea>\r\n                    </ion-item>\r\n                    \r\n                    <div class=\"cs-btn mt32\" text-right>\r\n                        <ion-button (click)=\"onSaveFeedbackHandler()\" class=\"success min w90\">SAVE</ion-button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/service_request/addfeedback/addfeedback-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addfeedback/addfeedback-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AddfeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfeedbackPageRoutingModule", function() { return AddfeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addfeedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addfeedback.page */ "./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts");




var routes = [
    {
        path: '',
        component: _addfeedback_page__WEBPACK_IMPORTED_MODULE_3__["AddfeedbackPage"]
    }
];
var AddfeedbackPageRoutingModule = /** @class */ (function () {
    function AddfeedbackPageRoutingModule() {
    }
    AddfeedbackPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddfeedbackPageRoutingModule);
    return AddfeedbackPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/service_request/addfeedback/addfeedback.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addfeedback/addfeedback.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddfeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfeedbackPageModule", function() { return AddfeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addfeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addfeedback-routing.module */ "./src/app/customer_app/service_request/addfeedback/addfeedback-routing.module.ts");
/* harmony import */ var _addfeedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addfeedback.page */ "./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts");







var AddfeedbackPageModule = /** @class */ (function () {
    function AddfeedbackPageModule() {
    }
    AddfeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _addfeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddfeedbackPageRoutingModule"]
            ],
            declarations: [_addfeedback_page__WEBPACK_IMPORTED_MODULE_6__["AddfeedbackPage"]]
        })
    ], AddfeedbackPageModule);
    return AddfeedbackPageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvYWRkZmVlZGJhY2svYWRkZmVlZGJhY2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts ***!
  \******************************************************************************/
/*! exports provided: AddfeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddfeedbackPage", function() { return AddfeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");







var AddfeedbackPage = /** @class */ (function () {
    function AddfeedbackPage(popoverController, route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        var _this = this;
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.taskId = '';
        this.userId = '';
        this.data = {};
        this.userData = {};
        this.taskData = {};
        this.selectedRating = '';
        this.routeParams.params.subscribe(function (params) {
            console.log(params);
            _this.taskId = params.taskId;
            _this.userId = params.userId;
            _this.onGetUserDetailHandler();
            _this.onGetTaskDetailHandler();
            console.log(_this.taskId);
            console.log(_this.userId);
        });
    }
    AddfeedbackPage.prototype.ngOnInit = function () {
    };
    AddfeedbackPage.prototype.onGetUserDetailHandler = function () {
        var _this = this;
        this.dbService.presentLoader();
        var inputData = {
            userId: this.userId
        };
        this.dbService.onPostRequestHandler(inputData, 'login/onGetTechnicianDetail').subscribe(function (result) {
            console.log(result);
            _this.dbService.dismissLoader();
            _this.userData = result["userData"];
        });
    };
    AddfeedbackPage.prototype.onStarClickHandler = function (rating) {
        this.selectedRating = rating;
    };
    AddfeedbackPage.prototype.onSaveFeedbackHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.selectedRating) {
                            this.dbService.onShowAlertMessage('Error', 'Rating Required!');
                            return [2 /*return*/];
                        }
                        if (!this.data.description) {
                            this.dbService.onShowAlertMessage('Error', 'Description Required!');
                            return [2 /*return*/];
                        }
                        console.log('hello');
                        console.log(this.data);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Confirm',
                                message: 'Are You Sure, You Want To Save Feedback ?',
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
                                                taskId: _this.taskId
                                            };
                                            inputData["rating"] = _this.selectedRating;
                                            inputData["description"] = _this.data.description;
                                            _this.dbService.presentLoader();
                                            _this.dbService.onPostRequestHandler(inputData, 'customer/saveFeedbackData').subscribe(function (result) {
                                                console.log(result);
                                                _this.dbService.dismissLoader();
                                                _this.data.status = '';
                                                _this.route.navigate(['/customer/request']);
                                                _this.dbService.presentToast('Feedback Saved Successfully!');
                                            });
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
    AddfeedbackPage.prototype.onGetTaskDetailHandler = function () {
        var _this = this;
        var inputData = {
            taskId: this.taskId
        };
        this.dbService.onPostRequestHandler(inputData, 'task/onGetFeedbackTaskData').subscribe(function (result) {
            console.log(result);
            _this.taskData = result["taskData"];
        });
    };
    AddfeedbackPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    AddfeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addfeedback',
            template: __webpack_require__(/*! raw-loader!./addfeedback.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html"),
            styles: [__webpack_require__(/*! ./addfeedback.page.scss */ "./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], AddfeedbackPage);
    return AddfeedbackPage;
}());



/***/ })

}]);
//# sourceMappingURL=service_request-addfeedback-addfeedback-module-es5.js.map