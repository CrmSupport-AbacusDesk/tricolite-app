(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-spareparts-com-spareparts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Spare Parts</ion-text></ion-title>\n                </div>\n                <div class=\"cs-right\">\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\n                </div>\n            </div>\n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <div class=\"cs-ion-content pt0\" padding>\n\n            <div class=\"complaints product-list part-list\">\n                <div class=\"cs-heading\"><h1>Assign spare parts</h1></div>\n\n                <div *ngFor=\"let row of sparePartAssignedData\" class=\"figure\">\n                    <div class=\"cnt-info\">\n                        <div class=\"cs-left\">\n                            <div class=\"f-alpha\">{{row.assign_qty}}</div>\n                            <div class=\"names\">\n                                <h1>{{row.part_name}}</h1>\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-right\">\n                            <ion-text>{{row.part_no}}</ion-text>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div *ngIf=\"sparePartInstalledData && sparePartInstalledData.length > 0\" class=\"complaints product-list part-list mt20\">\n\n                <div class=\"cs-heading\"><h1>install spare parts</h1></div>\n\n                <div *ngFor=\"let row of sparePartInstalledData\" class=\"figure\">\n                    <div class=\"cnt-info\">\n                        <div class=\"cs-left\">\n                            <div class=\"f-alpha\">{{row.installed_qty}}</div>\n                            <div class=\"names\">\n                                <h1>{{row.part_name}}</h1>\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-right\">\n                            <ion-text>{{row.part_no}}</ion-text>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" size=\"small\" (click)=\"GoToInstallSpareParts()\" *ngIf = \"taskStatus != 'Close'\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _com_spareparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-spareparts.page */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts");




const routes = [
    {
        path: '',
        component: _com_spareparts_page__WEBPACK_IMPORTED_MODULE_3__["ComSparepartsPage"]
    }
];
let ComSparepartsPageRoutingModule = class ComSparepartsPageRoutingModule {
};
ComSparepartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComSparepartsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_spareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-spareparts-routing.module */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts");
/* harmony import */ var _com_spareparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-spareparts.page */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








let ComSparepartsPageModule = class ComSparepartsPageModule {
};
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



/***/ }),

/***/ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLXNwYXJlcGFydHMvY29tLXNwYXJlcGFydHMucGFnZS5zY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






let ComSparepartsPage = class ComSparepartsPage {
    constructor(popoverController, router, routeParams, alertCtrl, toastCtrl, dbService) {
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
        this.routeParams.params.subscribe(params => {
            console.log(params);
            this.taskId = params.taskId;
            this.taskNo = params.taskNo;
            this.taskStatus = params.taskStatus;
            console.log(this.taskId);
            console.log(this.taskNo);
            console.log(this.taskStatus);
            this.onGetTaskSparePartDataHandler();
        });
    }
    ngOnInit() {
    }
    onGetTaskSparePartDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {
                taskId: this.taskId
            };
            this.dbService.onPostRequestHandler(inputData, 'task/getTaskSparePartData').subscribe((result) => {
                console.log(result);
                this.sparePartAssignedData = result[`taskAssignedPartData`];
                this.sparePartInstalledData = result[`taskInstalledPartData`];
            });
        });
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const taskData = {
                taskId: this.taskId,
                taskNo: this.taskNo,
                taskStatus: this.taskStatus,
            };
            console.log(taskData);
            const popover = yield this.popoverController.create({
                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
                event: ev,
                translucent: true,
                componentProps: taskData
            });
            return yield popover.present();
        });
    }
    GoComplaintDetail() {
        this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + this.taskId);
    }
    GoToInstallSpareParts() {
        this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/installspareparts/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
    }
};
ComSparepartsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
ComSparepartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-com-spareparts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./com-spareparts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./com-spareparts.page.scss */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], ComSparepartsPage);



/***/ })

}]);
//# sourceMappingURL=complaints-com-spareparts-com-spareparts-module-es2015.js.map