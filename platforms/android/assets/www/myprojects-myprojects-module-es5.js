(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myprojects-myprojects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/myprojects/myprojects.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/myprojects/myprojects.page.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    \r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\">\r\n        <ion-refresher-content\r\n        pullingIcon=\"arrow-dropdown\"\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"Refreshing...\">\r\n    </ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<div class=\"cs-main-container\">\r\n    <div class=\"custome-head\">\r\n        <div class=\"cs-ion-header\">\r\n            <div class=\"cs-left\">\r\n                <ion-title class=\"pl0\">My Project's</ion-title>\r\n            </div>\r\n            \r\n            <div class=\"cs-right\">\r\n                <ion-button (click)=\"onSearchClickHandler()\"><ion-icon name=\"search\"></ion-icon></ion-button>\r\n            </div>\r\n            \r\n            <div [ngClass]=\"isSearchOptionActive ? 'active' : ''\" class=\"search-filetr\">\r\n                \r\n                <ion-searchbar [(ngModel)]=\"data.searchData\" (ngModelChange)=\"onUpdateCurrentPageHandler(); onGetProjectListHandler(false, '')\" id=\"searchData\"></ion-searchbar>\r\n                \r\n                <a (click) = \"data.searchData = ''; isSearchOptionActive = false; onUpdateCurrentPageHandler(); onGetProjectListHandler(false, '')\"  class=\"cancel\">Cancel</a>\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"cs-ion-hf\"></div>\r\n    </div>\r\n    \r\n    <div class=\"cs-ion-content pt0\" padding>\r\n        \r\n        <div  (click)=\"GoToDetail(row.id)\" *ngFor=\"let row of projectContactList\" class=\"complaints product-list mt20\">\r\n            \r\n            <div class=\"figure\">\r\n                \r\n                <div class=\"cnt-info\">\r\n                    <div class=\"cs-left\">\r\n                        <div class=\"f-alpha\">{{row.project_name[0]}}</div>\r\n                        <div class=\"names\">\r\n                            <h1>{{row.project_name}}</h1>\r\n                            <ion-text>{{row.street}} {{row.state_name}}, {{row.district_name}}, {{row.city}}, {{row.pincode}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"one-two-one three\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Contact Person</ion-text>\r\n                            <ion-text>{{totalProjectCount}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Total Products</ion-text>\r\n                            <ion-text>{{row.productData.length}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Service Request</ion-text>\r\n                            <ion-text>{{row.totalServiceRequest}} </ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div *ngIf=\"!isRequestInProcess && projectContactList.length == 0\" class=\"no-data\">\r\n            <img src=\"assets/icon/no_found.svg\">\r\n            <p>Data Not Found!</p>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"doCheckForMoreData\" (ionInfinite)=\"onGetProjectListHandler(false, $event)\">\r\n    <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n</ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/myprojects/myprojects-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customer_app/myprojects/myprojects-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MyprojectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprojectsPageRoutingModule", function() { return MyprojectsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _myprojects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myprojects.page */ "./src/app/customer_app/myprojects/myprojects.page.ts");




var routes = [
    {
        path: '',
        component: _myprojects_page__WEBPACK_IMPORTED_MODULE_3__["MyprojectsPage"]
    }
];
var MyprojectsPageRoutingModule = /** @class */ (function () {
    function MyprojectsPageRoutingModule() {
    }
    MyprojectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MyprojectsPageRoutingModule);
    return MyprojectsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/myprojects/myprojects.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/customer_app/myprojects/myprojects.module.ts ***!
  \**************************************************************/
/*! exports provided: MyprojectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprojectsPageModule", function() { return MyprojectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myprojects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myprojects-routing.module */ "./src/app/customer_app/myprojects/myprojects-routing.module.ts");
/* harmony import */ var _myprojects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myprojects.page */ "./src/app/customer_app/myprojects/myprojects.page.ts");







var MyprojectsPageModule = /** @class */ (function () {
    function MyprojectsPageModule() {
    }
    MyprojectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _myprojects_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyprojectsPageRoutingModule"]
            ],
            declarations: [_myprojects_page__WEBPACK_IMPORTED_MODULE_6__["MyprojectsPage"]]
        })
    ], MyprojectsPageModule);
    return MyprojectsPageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/myprojects/myprojects.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/customer_app/myprojects/myprojects.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9teXByb2plY3RzL215cHJvamVjdHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer_app/myprojects/myprojects.page.ts":
/*!************************************************************!*\
  !*** ./src/app/customer_app/myprojects/myprojects.page.ts ***!
  \************************************************************/
/*! exports provided: MyprojectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprojectsPage", function() { return MyprojectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var MyprojectsPage = /** @class */ (function () {
    function MyprojectsPage(router, formBuilder, alertCtrl, dbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.projectContactList = [];
        this.totalProjectCount = [];
        this.isSearchOptionActive = false;
        this.searchData = {};
        this.data = {};
        this.doCheckForMoreData = true;
        this.isRequestInProcess = true;
        this.currentPage = 1;
        this.pageSize = 2;
    }
    MyprojectsPage.prototype.ngOnInit = function () {
        this.onGetProjectListHandler(true, '');
    };
    MyprojectsPage.prototype.onSearchClickHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isSearchOptionActive = true;
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_6__('#searchData').focus();
                }, 2000);
                return [2 /*return*/];
            });
        });
    };
    MyprojectsPage.prototype.onGetProjectListHandler = function (showLoading, infiniteScroll) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('hello');
                inputData = {
                    start: this.currentPage,
                    pageLimit: this.pageSize
                };
                inputData["searchData"] = this.data.searchData;
                if (showLoading) {
                    this.dbService.presentLoader();
                }
                this.isRequestInProcess = true;
                this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe(function (result) {
                    console.log(result);
                    if (showLoading) {
                        setTimeout(function () {
                            _this.dbService.dismissLoader();
                        }, 2000);
                    }
                    var resultData = result["projectContactList"];
                    console.log(resultData);
                    _this.totalProjectCount = result["totalProjectCount"];
                    console.log(_this.totalProjectCount);
                    if (!resultData || resultData == null || resultData.length == 0) {
                        resultData = [];
                        _this.doCheckForMoreData = false;
                    }
                    if (_this.currentPage == 1) {
                        _this.projectContactList = resultData;
                    }
                    else {
                        var _loop_1 = function (index) {
                            var isIndex = _this.projectContactList.findIndex(function (row) { return row.id == resultData[index].id; });
                            if (isIndex === -1) {
                                _this.projectContactList.push(resultData[index]);
                            }
                        };
                        for (var index = 0; index < resultData.length; index++) {
                            _loop_1(index);
                        }
                    }
                    _this.currentPage += 1;
                    if (infiniteScroll) {
                        infiniteScroll.target.complete();
                    }
                    setTimeout(function () {
                        _this.isRequestInProcess = false;
                    }, 1000);
                });
                return [2 /*return*/];
            });
        });
    };
    MyprojectsPage.prototype.ionRefresh = function (event) {
        var _this = this;
        console.log('Pull Event Triggered!');
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.data.searchData = '';
            _this.searchData = {};
            _this.onUpdateCurrentPageHandler();
            _this.onGetProjectListHandler(true, '');
            event.target.complete();
        }, 2000);
    };
    MyprojectsPage.prototype.onUpdateCurrentPageHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    _this.doCheckForMoreData = true;
                }, 1000);
                this.currentPage = 1;
                return [2 /*return*/];
            });
        });
    };
    MyprojectsPage.prototype.GoToDetail = function (projectId) {
        this.router.navigateByUrl('/customer/projects/detail/' + projectId);
    };
    MyprojectsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    MyprojectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprojects',
            template: __webpack_require__(/*! raw-loader!./myprojects.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/myprojects/myprojects.page.html"),
            styles: [__webpack_require__(/*! ./myprojects.page.scss */ "./src/app/customer_app/myprojects/myprojects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], MyprojectsPage);
    return MyprojectsPage;
}());



/***/ })

}]);
//# sourceMappingURL=myprojects-myprojects-module-es5.js.map