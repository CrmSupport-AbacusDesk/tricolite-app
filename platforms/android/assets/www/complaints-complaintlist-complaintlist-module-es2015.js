(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-complaintlist-complaintlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/complaintlist/complaintlist.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/complaintlist/complaintlist.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n    \r\n    <ion-refresher slot=\"fixed\" \r\n    (ionRefresh)=\"ionRefresh($event)\">\r\n    <ion-refresher-content\r\n    pullingIcon=\"arrow-dropdown\"\r\n    pullingText=\"Pull to refresh\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"Refreshing...\">\r\n</ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<div class=\"cs-main-container\">\r\n    \r\n    <div class=\"custome-head\">\r\n        <div class=\"cs-ion-header\">\r\n            \r\n            <div class=\"cs-left\">\r\n                <ion-title class=\"pl0\">My {{routeTitleForView}}</ion-title>\r\n            </div>\r\n            \r\n            <div class=\"cs-right\">\r\n                <ion-button (click)=\"onSearchClickHandler()\"><ion-icon name=\"search\"></ion-icon></ion-button>\r\n                <ion-button (click)=\"presentModal()\" id=\"bt\"><ion-icon name=\"funnel\"></ion-icon></ion-button>\r\n            </div>\r\n            \r\n            <div [ngClass]=\"isSearchOptionActive ? 'active' : ''\" class=\"search-filetr\">\r\n                \r\n                <ion-searchbar [(ngModel)]=\"data.inputSearch\" (ngModelChange)=\"onUpdateCurrentPageHandler(); onGetComplaintListHandler(false, '')\" id=\"inputSearch\"></ion-searchbar>\r\n                \r\n                <a (click) = \"data.inputSearch = ''; isSearchOptionActive = false; onUpdateCurrentPageHandler(); onGetComplaintListHandler(false, '')\"  class=\"cancel\">Cancel</a>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"cs-ion-hf\"></div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class=\"cs-ion-content pt0\" padding>\r\n        <div class=\"complaints list\">\r\n            \r\n            <div *ngFor=\"let row of complaintList\" class=\"figure\">\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"top\">\r\n                    <div class=\"cs-left\">\r\n                        <h1>#COM - {{row.task_no}} <ion-text>({{row.days}} Days)</ion-text></h1>\r\n                    </div>\r\n                    <div class=\"cs-right\">\r\n                        <ion-text>{{row.dateCreated}}  |  {{row.timeCreated}}</ion-text>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"cnt-info\">\r\n                    \r\n                    <div (click)=\"GoComplaintDetail(row.id)\" class=\"cs-left\">\r\n                        <div class=\"f-alpha\">{{row.customer_name[0]}}</div>\r\n                        <div class=\"names\">\r\n                            <h1>{{row.customer_name}}</h1>\r\n                            <ion-text>{{row.customer_contact_name}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"cs-right\">\r\n                        <a href=\"tel: {{row.customer_contact_mobile}}\" class=\"call\"><i class=\"material-icons\">call</i></a>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"one-one-one\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Project </ion-text>\r\n                            <ion-text>{{row.project_name}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"row.task_type == 'commissioning'\" class=\"one-one-one\" (click)=\"GoComplaintDetail(row.id)\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Service Type </ion-text>\r\n                            <ion-text>Free Service</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"one-two-one three\" (click)=\"GoComplaintDetail(row.id)\">\r\n\r\n                    <div class=\"cs-box close\" style=\"background: #FFCC00;\">\r\n                            <div>\r\n                                <ion-text>Priority</ion-text>\r\n                                <ion-text>{{row.priority ? row.priority : 'NA'}}</ion-text>\r\n                            </div>\r\n                    </div>\r\n\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" *ngFor=\"let fgRow of row.fgData\"  class=\"one-two-one three\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>FG No.</ion-text>\r\n                            <ion-text>{{fgRow.fg_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n            \r\n                    <div  *ngIf=\"row.task_type != 'commissioning'\" class=\"cs-box close\" style=\"background: #FFA200;\">\r\n                        <div>\r\n                            <ion-text>Service Type</ion-text>\r\n                            <ion-text>{{(row.transaction_type == 'FOC' || row.transaction_type == 'Sale/Warranty' || row.transaction_type == 'Commissioning') ? 'Free Service' : 'Paid Service'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div *ngIf=\"row.task_type != 'commissioning'\" (click)=\"GoComplaintDetail(row.id)\" class=\"one-one-one\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Complaint Title </ion-text>\r\n                            <ion-text>{{row.compaint_title}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"one-two-one two\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Eng. Work Status</ion-text>\r\n                            <ion-text>{{row.workStatus ? row.workStatus : 'NA'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div [ngClass] = \"(row.status) ? row.status.toLowerCase() : ''\" class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Complaint Status</ion-text>\r\n                            <ion-text>{{row.status}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"lf-btns\">\r\n                    <div class=\"cs-left\">\r\n                        \r\n                        <ion-button (click)=\"GoComplaintDetailModulesHandler('statusListPage', row.id, row.task_no,row.status,row.task_type)\" color=\"primary\" fill=\"clear\">Status History</ion-button>\r\n                        \r\n                        <ion-button (click)=\"GoComplaintDetailModulesHandler('dailyWorkReportPage', row.id, row.task_no,row.status,row.task_type)\" color=\"primary\" fill=\"clear\">Daily Report</ion-button>\r\n                        \r\n                    </div>\r\n                    <div (click)=\"presentPopover($event, row.id, row.task_no,row.status)\" class=\"cs-right\">\r\n                        <ion-button color=\"primary\" fill=\"clear\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        \r\n        <div *ngIf=\"!isRequestInProcess && complaintList.length == 0\" class=\"no-data\">\r\n            <img src=\"assets/icon/no_found.svg\">\r\n            <p>Data Not Found!</p>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"doCheckForMoreData\" (ionInfinite)=\"onGetComplaintListHandler(false, $event)\">\r\n    <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n</ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _complaintlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./complaintlist.page */ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.ts");




const routes = [
    {
        path: '',
        component: _complaintlist_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintlistPage"]
    }
];
let ComplaintlistPageRoutingModule = class ComplaintlistPageRoutingModule {
};
ComplaintlistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComplaintlistPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _complaintlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./complaintlist-routing.module */ "./src/app/technician_app/complaints/complaintlist/complaintlist-routing.module.ts");
/* harmony import */ var _complaintlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./complaintlist.page */ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.ts");







let ComplaintlistPageModule = class ComplaintlistPageModule {
};
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



/***/ }),

/***/ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/complaintlist/complaintlist.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tcGxhaW50bGlzdC9jb21wbGFpbnRsaXN0LnBhZ2Uuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var src_app_complaintfiltermodal_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/complaintfiltermodal/complaintfiltermodal.page */ "./src/app/complaintfiltermodal/complaintfiltermodal.page.ts");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);









let ComplaintlistPage = class ComplaintlistPage {
    constructor(route, popoverController, formBuilder, alertCtrl, modalController, dbService) {
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
    ngOnInit() {
        this.onGetComplaintListHandler(true, '');
    }
    toggle() {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = 'Hide';
        }
        else {
            this.buttonName = 'Show';
        }
    }
    onGetComplaintListHandler(showLoading, infiniteScroll) {
        console.log('hello');
        console.log(infiniteScroll);
        console.log(this.route.url);
        const inputData = {
            start: this.currentPage,
            pageLimit: this.pageSize
        };
        if (this.route.url == '/technicians/complaints') {
            inputData[`type`] = 'service_request';
            this.routeTitleForView = 'Complaints';
            localStorage.setItem('routeType', 'complaints');
        }
        if (this.route.url == '/technicians/commissioning') {
            inputData[`type`] = 'commissioning';
            this.routeTitleForView = 'Commissioning';
            localStorage.setItem('routeType', 'commissioning');
        }
        if (localStorage.getItem('dashboardCountFilterData')) {
            this.dashboardCountFilterData = JSON.parse(localStorage.getItem('dashboardCountFilterData'));
            console.log(this.dashboardCountFilterData);
        }
        else {
            this.dashboardCountFilterData = '';
        }
        this.searchData[`dashboardCountFilterData`] = this.dashboardCountFilterData;
        inputData[`searchData`] = this.searchData;
        inputData[`inputSearch`] = this.data.inputSearch;
        if (showLoading) {
            this.dbService.presentLoader();
        }
        this.isRequestInProcess = true;
        this.dbService.onPostRequestHandler(inputData, 'task/getTaskList').subscribe((result) => {
            console.log(result);
            if (showLoading) {
                setTimeout(() => {
                    this.dbService.dismissLoader();
                }, 1000);
            }
            let resultData = result[`taskList`];
            this.dashboardCountFilterData = '';
            localStorage.setItem('dashboardCountFilterData', '');
            if (!resultData || resultData == null || resultData.length == 0) {
                resultData = [];
                this.doCheckForMoreData = false;
            }
            if (this.currentPage == 1) {
                this.complaintList = resultData;
            }
            else {
                for (let index = 0; index < resultData.length; index++) {
                    const isIndex = this.complaintList.findIndex(row => row.id == resultData[index].id);
                    if (isIndex === -1) {
                        this.complaintList.push(resultData[index]);
                    }
                }
            }
            this.currentPage += 1;
            if (infiniteScroll) {
                infiniteScroll.target.complete();
            }
            setTimeout(() => {
                this.isRequestInProcess = false;
            }, 1000);
        });
    }
    ionViewWillEnter() {
        this.onUpdateCurrentPageHandler();
        this.onGetComplaintListHandler(false, '');
    }
    onSearchClickHandler() {
        this.isSearchOptionActive = true;
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_8__('#inputSearch').focus();
        }, 2000);
    }
    ionRefresh(event) {
        console.log('Pull Event Triggered!');
        setTimeout(() => {
            console.log('Async operation has ended');
            this.data.inputSearch = '';
            this.searchData = {};
            this.onUpdateCurrentPageHandler();
            this.onGetComplaintListHandler(true, '');
            event.target.complete();
        }, 2000);
    }
    onUpdateCurrentPageHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            setTimeout(() => {
                this.doCheckForMoreData = true;
            }, 1000);
            this.currentPage = 1;
            this.onScrollToTopHandler();
        });
    }
    onScrollToTopHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.content.scrollToTop();
        });
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_complaintfiltermodal_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintfiltermodalPage"],
                componentProps: {
                    searchData: this.searchData
                }
            });
            modal.onDidDismiss()
                .then((data) => {
                console.log(data);
                if (data && data[`data`] && data[`data`][`data`]) {
                    console.log(data[`data`]);
                    this.searchData = data[`data`][`data`];
                    this.onUpdateCurrentPageHandler();
                    this.onGetComplaintListHandler(true, '');
                }
            });
            return yield modal.present();
        });
    }
    presentPopover(ev, taskId, taskNo, taskStatus) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const taskIndex = this.complaintList.findIndex(row => row.id == taskId);
            console.log(this.complaintList[taskIndex]);
            const taskPopUpData = {
                taskWorkReport: this.complaintList[taskIndex].taskWorkReport,
                taskReportCount: this.complaintList[taskIndex].taskReportCount,
                taskInstalledPartCount: this.complaintList[taskIndex].taskInstalledPartCount
            };
            //   console.log(taskPopUpData);
            //   console.log(ev);
            localStorage.setItem('taskPopUpData', JSON.stringify(taskPopUpData));
            const taskData = {
                taskId: taskId,
                taskNo: taskNo,
                taskStatus: taskStatus,
                taskType: this.complaintList[taskIndex].task_type
            };
            //   console.log(taskData);
            const popover = yield this.popoverController.create({
                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_7__["TecCompliantPopoverComponent"],
                event: ev,
                translucent: true,
                componentProps: taskData
            });
            //   console.log(popover);
            return yield popover.present();
        });
    }
    GoComplaintDetail(taskId) {
        localStorage.setItem('routeTitleForView', this.routeTitleForView);
        this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + taskId + '');
    }
    GoComplaintDetailModulesHandler(targetPage, taskId, taskNo, taskStatus, taskType) {
        localStorage.setItem('routeTitleForView', this.routeTitleForView);
        localStorage.setItem('taskType', taskType);
        if (targetPage == 'statusListPage') {
            this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/status/' + taskId + '/' + taskNo + '/' + taskStatus);
        }
        if (targetPage == 'dailyWorkReportPage') {
            localStorage.setItem('reportType', 'dailyReport');
            this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/dailyreport/' + taskId + '/' + taskNo + '/' + taskStatus);
        }
    }
};
ComplaintlistPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], ComplaintlistPage.prototype, "content", void 0);
ComplaintlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complaintlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complaintlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/complaintlist/complaintlist.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complaintlist.page.scss */ "./src/app/technician_app/complaints/complaintlist/complaintlist.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], ComplaintlistPage);



/***/ })

}]);
//# sourceMappingURL=complaints-complaintlist-complaintlist-module-es2015.js.map