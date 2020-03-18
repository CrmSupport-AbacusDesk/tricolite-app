(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-complaintlist-complaintlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/complaintlist/complaintlist.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/complaintlist/complaintlist.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    \r\n    <ion-refresher slot=\"fixed\" \r\n    (ionRefresh)=\"ionRefresh($event)\">\r\n    <ion-refresher-content\r\n    pullingIcon=\"arrow-dropdown\"\r\n    pullingText=\"Pull to refresh\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"Refreshing...\">\r\n</ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<div class=\"cs-main-container\">\r\n    \r\n    <div class=\"custome-head\">\r\n        <div class=\"cs-ion-header\">\r\n            \r\n            <div class=\"cs-left\">\r\n                <ion-title class=\"pl0\">My {{routeTitleForView}}</ion-title>\r\n            </div>\r\n            \r\n            <div class=\"cs-right\">\r\n                <ion-button (click)=\"onSearchClickHandler()\"><ion-icon name=\"search\"></ion-icon></ion-button>\r\n                <ion-button (click)=\"presentModal()\" id=\"bt\"><ion-icon name=\"funnel\"></ion-icon></ion-button>\r\n            </div>\r\n            \r\n            <div [ngClass]=\"isSearchOptionActive ? 'active' : ''\" class=\"search-filetr\">\r\n                \r\n                <ion-searchbar [(ngModel)]=\"data.inputSearch\" (ngModelChange)=\"onUpdateCurrentPageHandler(); onGetComplaintListHandler(false, '')\" id=\"inputSearch\"></ion-searchbar>\r\n                \r\n                <a (click) = \"data.inputSearch = ''; isSearchOptionActive = false; onUpdateCurrentPageHandler(); onGetComplaintListHandler(false, '')\"  class=\"cancel\">Cancel</a>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"cs-ion-hf\"></div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class=\"cs-ion-content pt0\" padding>\r\n        <div class=\"complaints list\">\r\n            \r\n            <div *ngFor=\"let row of complaintList\" class=\"figure\">\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"top\">\r\n                    <div class=\"cs-left\">\r\n                        <h1>#COM - {{row.task_no}} <ion-text>({{row.days}} Days)</ion-text></h1>\r\n                    </div>\r\n                    <div class=\"cs-right\">\r\n                        <ion-text>{{row.dateCreated}}  |  {{row.timeCreated}}</ion-text>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"cnt-info\">\r\n                    \r\n                    <div (click)=\"GoComplaintDetail(row.id)\" class=\"cs-left\">\r\n                        <div class=\"f-alpha\">{{row.customer_name[0]}}</div>\r\n                        <div class=\"names\">\r\n                            <h1>{{row.customer_name}}</h1>\r\n                            <ion-text>{{row.customer_contact_name}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"cs-right\">\r\n                        <a href=\"tel: {{row.customer_contact_mobile}}\" class=\"call\"><i class=\"material-icons\">call</i></a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"one-one-one\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Project </ion-text>\r\n                            <ion-text>{{row.project_name}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" *ngFor=\"let fgRow of row.fgData\"  class=\"one-two-one three\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>FG No.</ion-text>\r\n                            <ion-text>{{fgRow.fg_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Priority</ion-text>\r\n                            <ion-text [style.color]=\"row.priorityColor\">{{row.priority}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cs-box close\" style=\"background: #FFA200;\">\r\n                        <div>\r\n                            <ion-text>Service Type</ion-text>\r\n                            <ion-text>{{fgRow.serviceType ? fgRow.serviceType : 'NA'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"one-one-one\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Complaint Title </ion-text>\r\n                            <ion-text>{{row.compaint_title}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"one-two-one two\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Eng. Work Status</ion-text>\r\n                            <ion-text>{{row.workStatus ? row.workStatus : 'NA'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div [ngClass] = \"(row.status) ? row.status.toLowerCase() : ''\" class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Complaint Status</ion-text>\r\n                            <ion-text>{{row.status}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"lf-btns\">\r\n                    <div class=\"cs-left\">\r\n                        \r\n                        <ion-button (click)=\"GoComplaintDetailModulesHandler('statusListPage', row.id, row.task_no,row.status)\" color=\"primary\" fill=\"clear\">Status History</ion-button>\r\n                        \r\n                        <ion-button (click)=\"GoComplaintDetailModulesHandler('dailyWorkReportPage', row.id, row.task_no,row.status)\" color=\"primary\" fill=\"clear\">Daily Report</ion-button>\r\n                        \r\n                    </div>\r\n                    <div (click)=\"presentPopover($event, row.id, row.task_no,row.status)\" class=\"cs-right\">\r\n                        <ion-button color=\"primary\" fill=\"clear\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        \r\n        <div *ngIf=\"!isRequestInProcess && complaintList.length == 0\" class=\"no-data\">\r\n            <img src=\"assets/icon/no_found.svg\">\r\n            <p>Data Not Found!</p>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"doCheckForMoreData\" (ionInfinite)=\"onGetComplaintListHandler(false, $event)\">\r\n    <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n</ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/technician_app/complaints/complaintlist/complaintlist-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/complaintlist/complaintlist-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComplaintlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintlistPageRoutingModule", function() { return ComplaintlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _complaintlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaintlist.page */ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.ts");




var routes = [
    {
        path: '',
        component: _complaintlist_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintlistPage"]
    }
];
var ComplaintlistPageRoutingModule = /** @class */ (function () {
    function ComplaintlistPageRoutingModule() {
    }
    ComplaintlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComplaintlistPageRoutingModule);
    return ComplaintlistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/complaintlist/complaintlist.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/complaintlist/complaintlist.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ComplaintlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintlistPageModule", function() { return ComplaintlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _complaintlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaintlist-routing.module */ "./src/app/technician_app/complaints/complaintlist/complaintlist-routing.module.ts");
/* harmony import */ var _complaintlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complaintlist.page */ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.ts");







var ComplaintlistPageModule = /** @class */ (function () {
    function ComplaintlistPageModule() {
    }
    ComplaintlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _complaintlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplaintlistPageRoutingModule"]
            ],
            declarations: [_complaintlist_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintlistPage"]]
        })
    ], ComplaintlistPageModule);
    return ComplaintlistPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/complaintlist/complaintlist.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tcGxhaW50bGlzdC9jb21wbGFpbnRsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/technician_app/complaints/complaintlist/complaintlist.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ComplaintlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintlistPage", function() { return ComplaintlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var src_app_complaintfiltermodal_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/complaintfiltermodal/complaintfiltermodal.page */ "./src/app/complaintfiltermodal/complaintfiltermodal.page.ts");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);









var ComplaintlistPage = /** @class */ (function () {
    function ComplaintlistPage(route, popoverController, formBuilder, alertCtrl, modalController, dbService) {
        this.route = route;
        this.popoverController = popoverController;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.show = false;
        this.buttonName = 'Show';
        this.routeTitleForView = '';
        this.complaintList = [];
        this.isSearchOptionActive = false;
        this.searchData = {};
        this.data = {};
        this.doCheckForMoreData = true;
        this.isRequestInProcess = true;
        this.currentPage = 1;
        this.pageSize = 2;
    }
    ComplaintlistPage.prototype.ngOnInit = function () {
        this.onGetComplaintListHandler(true, '');
    };
    ComplaintlistPage.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = 'Hide';
        }
        else {
            this.buttonName = 'Show';
        }
    };
    ComplaintlistPage.prototype.onGetComplaintListHandler = function (showLoading, infiniteScroll) {
        var _this = this;
        console.log('hello');
        console.log(infiniteScroll);
        console.log(this.route.url);
        var inputData = {
            start: this.currentPage,
            pageLimit: this.pageSize
        };
        if (this.route.url == '/technicians/complaints') {
            inputData["type"] = 'service_request';
            this.routeTitleForView = 'Complaints';
            localStorage.setItem('routeType', 'complaints');
        }
        if (this.route.url == '/technicians/commissioning') {
            inputData["type"] = 'commissioning';
            this.routeTitleForView = 'Commissioning';
            localStorage.setItem('routeType', 'commissioning');
        }
        inputData["searchData"] = this.searchData;
        inputData["inputSearch"] = this.data.inputSearch;
        if (showLoading) {
            this.dbService.presentLoader();
        }
        this.isRequestInProcess = true;
        this.dbService.onPostRequestHandler(inputData, 'task/getTaskList').subscribe(function (result) {
            console.log(result);
            if (showLoading) {
                setTimeout(function () {
                    _this.dbService.dismissLoader();
                }, 2000);
            }
            var resultData = result["taskList"];
            if (!resultData || resultData == null || resultData.length == 0) {
                resultData = [];
                _this.doCheckForMoreData = false;
            }
            if (_this.currentPage == 1) {
                _this.complaintList = resultData;
            }
            else {
                var _loop_1 = function (index) {
                    var isIndex = _this.complaintList.findIndex(function (row) { return row.id == resultData[index].id; });
                    if (isIndex === -1) {
                        _this.complaintList.push(resultData[index]);
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
    };
    ComplaintlistPage.prototype.ionViewWillEnter = function () {
        this.onUpdateCurrentPageHandler();
        this.onGetComplaintListHandler(false, '');
    };
    ComplaintlistPage.prototype.onSearchClickHandler = function () {
        this.isSearchOptionActive = true;
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_8__('#inputSearch').focus();
        }, 2000);
    };
    ComplaintlistPage.prototype.ionRefresh = function (event) {
        var _this = this;
        console.log('Pull Event Triggered!');
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.data.inputSearch = '';
            _this.searchData = {};
            _this.onUpdateCurrentPageHandler();
            _this.onGetComplaintListHandler(true, '');
            event.target.complete();
        }, 2000);
    };
    ComplaintlistPage.prototype.onUpdateCurrentPageHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    _this.doCheckForMoreData = true;
                }, 1000);
                this.currentPage = 1;
                this.onScrollToTopHandler();
                return [2 /*return*/];
            });
        });
    };
    ComplaintlistPage.prototype.onScrollToTopHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.content.scrollToTop();
                return [2 /*return*/];
            });
        });
    };
    ComplaintlistPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_complaintfiltermodal_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintfiltermodalPage"],
                            componentProps: {
                                searchData: this.searchData
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            console.log(data);
                            if (data && data["data"] && data["data"]["data"]) {
                                console.log(data["data"]);
                                _this.searchData = data["data"]["data"];
                                _this.onUpdateCurrentPageHandler();
                                _this.onGetComplaintListHandler(true, '');
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ComplaintlistPage.prototype.presentPopover = function (ev, taskId, taskNo, taskStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskData, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskData = {
                            taskId: taskId,
                            taskNo: taskNo,
                            taskStatus: taskStatus,
                        };
                        console.log(taskData);
                        return [4 /*yield*/, this.popoverController.create({
                                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_7__["TecCompliantPopoverComponent"],
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
    ComplaintlistPage.prototype.GoComplaintDetail = function (taskId) {
        localStorage.setItem('routeTitleForView', this.routeTitleForView);
        this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + taskId + '');
    };
    ComplaintlistPage.prototype.GoComplaintDetailModulesHandler = function (targetPage, taskId, taskNo, taskStatus) {
        localStorage.setItem('routeTitleForView', this.routeTitleForView);
        if (targetPage == 'statusListPage') {
            this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/status/' + taskId + '/' + taskNo + '/' + taskStatus);
        }
        if (targetPage == 'dailyWorkReportPage') {
            localStorage.setItem('reportType', 'dailyReport');
            this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/dailyreport/' + taskId + '/' + taskNo + '/' + taskStatus);
        }
    };
    ComplaintlistPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], ComplaintlistPage.prototype, "content", void 0);
    ComplaintlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaintlist',
            template: __webpack_require__(/*! raw-loader!./complaintlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/complaintlist/complaintlist.page.html"),
            styles: [__webpack_require__(/*! ./complaintlist.page.scss */ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], ComplaintlistPage);
    return ComplaintlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-complaintlist-complaintlist-module-es5.js.map