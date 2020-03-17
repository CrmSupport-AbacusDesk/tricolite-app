(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-addrequest-addrequest-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/service_request/addrequest/addrequest.page.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Add Service Request</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveRequestHandler()\">\r\n            \r\n            <div class=\"cs-ion-content pt0\" padding>\r\n                <div class=\"custome-filter dlform\">\r\n                    <div class=\"fiter-data\">\r\n                        \r\n                        <div class=\"cs-right\">\r\n                            <div class=\"common_form inner_page\">\r\n                                <div class=\"heading\"><h1>Request Information</h1></div>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.requestType.errors && f1.requestType.errors.required ? 'has-error' : (f1.requestType.errors && !f1.requestType.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Request Type</ion-label>\r\n                                    \r\n                                    <ion-select formControlName=\"requestType\" [(ngModel)]=\"data.requestType\" placeholder=\"Select Type\">\r\n                                        <ion-select-option value=\"service_request\">Complaint</ion-select-option>\r\n                                        <ion-select-option value=\"commissioning\">Commissioning</ion-select-option>\r\n                                    </ion-select>\r\n                                    \r\n                                </ion-item>\r\n\r\n                                <ion-item [ngClass]=\"submitted && f1.complaintTitle.errors && f1.complaintTitle.errors.required ? 'has-error' : (f1.complaintTitle.errors && !f1.complaintTitle.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Complaint Title</ion-label>\r\n\r\n                                    <ion-select formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\"  *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\">\r\n                                        <ion-select-option *ngFor=\"let row of complaintTypeList\" [value]=\"row.title\">{{row.title}}</ion-select-option>\r\n                                      \r\n                                    </ion-select>\r\n\r\n                                    <ion-select formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\"  *ngIf = \"registerForm1.value['requestType']  != 'service_request'\">\r\n                                        <ion-select-option  [value]=\"commissioning\">Commissioning</ion-select-option>\r\n                                      \r\n                                    </ion-select>\r\n                                    \r\n                                    \r\n                                </ion-item>\r\n\r\n                                <ion-item  class=\"cs-select\" *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\">\r\n                            \r\n                                    <ion-label>Nature Problem</ion-label>\r\n                                    <ionic-selectable\r\n                                    [(ngModel)]=\"data.natureProblem\"\r\n                                    [items]=\"natureList\"\r\n                                    itemValueField=\"nature\"\r\n                                    itemTextField=\"nature\"\r\n                                    formControlName=\"natureProblem\"\r\n                                    [canSearch]=\"true\">\r\n                                    \r\n                                </ionic-selectable>\r\n                                \r\n                                </ion-item>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.description.errors && f1.description.errors.required ? 'has-error' : (f1.description.errors && !f1.description.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                    <ion-textarea formControlName=\"description\" [(ngModel)]=\"data.description\" placeholder=\"Description\"></ion-textarea>\r\n                                </ion-item>\r\n                                \r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.project.errors && f1.project.errors.required ? 'has-error' : (f1.project.errors && !f1.project.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Project</ion-label>\r\n                                    \r\n                                    <ionic-selectable\r\n                                    [(ngModel)]=\"data.project\"\r\n                                    [items]=\"projectList\"\r\n                                    itemValueField=\"id\"\r\n                                    itemTextField=\"project_name\"\r\n                                    formControlName=\"project\"\r\n                                    [canSearch]=\"true\"\r\n                                    (onChange)=\"onGetProjectFGListHandler()\">\r\n                                    \r\n                                </ionic-selectable>\r\n                            </ion-item>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div *ngIf=\"data.project && data.project['project_name']\" class=\"cs-right mt20\">\r\n                        <div class=\"common_form inner_page\">\r\n                            <div class=\"heading\"><h1>Add Product Information</h1></div>\r\n                            \r\n                            <ion-item [ngClass]=\"submitted && f1.fgNo.errors  ? 'has-error' : (f1.fgNo.errors ? 'has-text' : '')\" class=\"cs-select\">\r\n                                \r\n                                <ion-label>FG No</ion-label>\r\n                                <ionic-selectable\r\n                                [(ngModel)]=\"data.fgNo\"\r\n                                [items]=\"fgList\"\r\n                                itemValueField=\"fg_no\"\r\n                                itemTextField=\"fg_no\"\r\n                                formControlName=\"fgNo\"\r\n                                [canSearch]=\"true\">\r\n                                \r\n                            </ionic-selectable>\r\n                            \r\n                        </ion-item>\r\n                       \r\n                    \r\n                    <div class=\"cs-btn mt16\" text-right>\r\n                        <ion-button (click)=\"onAddProductToListHandler()\" class=\"success min w100\">Add to List</ion-button>\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"complaints list mt20\">\r\n                    \r\n                    <div *ngFor=\"let row of productData; let index = index\" class=\"figure\">\r\n                        <div class=\"cnt-info\">\r\n                            <div class=\"cs-left\">\r\n                                <div class=\"f-alpha\">{{row.fgNo[0]}}</div>\r\n                                <div class=\"names\">\r\n                                    <h1>{{row.fgNo}}</h1>\r\n                                </div>\r\n                            </div>\r\n                            <div (click)=\"onDeleteProductHandler(index)\" class=\"cm-right\">\r\n                                <a class=\"delete\"><i class=\"material-icons\">delete_sweep</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div> \r\n            </div>\r\n\r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Service Type</h1></div>\r\n                        <div class=\"dflex\">\r\n\r\n                            <ion-item  class=\"cs-select\">\r\n                                            \r\n                                <ion-label>Service Type</ion-label>\r\n                                <ionic-selectable\r\n                                [(ngModel)]=\"data.transaction_type\"\r\n                                [items]=\"transactionTypeList\"\r\n                                itemValueField=\"transaction_type\"\r\n                                itemTextField=\"transaction_type\"\r\n                                formControlName=\"transaction_type\"\r\n                                [canSearch]=\"true\">\r\n                                \r\n                                </ionic-selectable>\r\n            \r\n                            </ion-item>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>   \r\n\r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Engineer Visiting Date & Time</h1></div>\r\n                    <div class=\"dflex\">\r\n                        <ion-item [ngClass]=\"submitted && f1.visitDate.errors && f1.visitDate.errors.required ? 'has-error' : (f1.visitDate.errors && !f1.visitDate.errors.required ? 'has-text' : '')\" class=\"date-time mb0 mr10\">\r\n                            <ion-label>Date</ion-label>\r\n                            <ion-datetime formControlName=\"visitDate\" [(ngModel)]=\"data.visitDate\" displayFormat=\"DD-MMM-YYYY\" min=\"{{minDate}}\"></ion-datetime>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f1.visitDate.errors\" class=\"cs-error\">\r\n                                \r\n                            </ion-text>\r\n                            \r\n                        </ion-item>\r\n                        \r\n                        <ion-item [ngClass]=\"submitted && f1.visitTime.errors && f1.visitTime.errors.required ? 'has-error' : (f1.visitTime.errors && !f1.visitTime.errors.required ? 'has-text' : '')\" class=\"date-time\">\r\n                            <ion-label>Time</ion-label>\r\n                            <ion-datetime formControlName=\"visitTime\" [(ngModel)]=\"data.visitTime\" displayFormat=\"h:mm A\"></ion-datetime>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f1.visitTime.errors\" class=\"cs-error\">\r\n                                \r\n                            </ion-text>\r\n                            \r\n                        </ion-item>\r\n                        \r\n                        \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n              \r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Contact Person Information</h1></div>\r\n                </div>\r\n                <div class=\"cs-checkbox\">\r\n                    <ion-list>\r\n                        <ion-item *ngFor=\"let row of contactList\">\r\n                            <ion-label>{{row.name}} ({{row.designation}})</ion-label>\r\n                            <ion-checkbox [(ngModel)]=\"row.checked\" formControlName=\"contactName\" slot=\"start\" color=\"success\"></ion-checkbox>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"cs-btn mt20\">\r\n                <ion-button type=\"submit\" class=\"success large\" expand=\"full\">SUBMIT</ion-button>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    \r\n</div>\r\n\r\n</form>\r\n</div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AddrequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrequestPageRoutingModule", function() { return AddrequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addrequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addrequest.page */ "./src/app/customer_app/service_request/addrequest/addrequest.page.ts");




var routes = [
    {
        path: '',
        component: _addrequest_page__WEBPACK_IMPORTED_MODULE_3__["AddrequestPage"]
    }
];
var AddrequestPageRoutingModule = /** @class */ (function () {
    function AddrequestPageRoutingModule() {
    }
    AddrequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddrequestPageRoutingModule);
    return AddrequestPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/service_request/addrequest/addrequest.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addrequest/addrequest.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddrequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrequestPageModule", function() { return AddrequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addrequest-routing.module */ "./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts");
/* harmony import */ var _addrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addrequest.page */ "./src/app/customer_app/service_request/addrequest/addrequest.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var AddrequestPageModule = /** @class */ (function () {
    function AddrequestPageModule() {
    }
    AddrequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _addrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddrequestPageRoutingModule"]
            ],
            declarations: [_addrequest_page__WEBPACK_IMPORTED_MODULE_6__["AddrequestPage"]]
        })
    ], AddrequestPageModule);
    return AddrequestPageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/service_request/addrequest/addrequest.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addrequest/addrequest.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvYWRkcmVxdWVzdC9hZGRyZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer_app/service_request/addrequest/addrequest.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addrequest/addrequest.page.ts ***!
  \****************************************************************************/
/*! exports provided: AddrequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrequestPage", function() { return AddrequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);








var AddrequestPage = /** @class */ (function () {
    function AddrequestPage(popoverController, route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.data = {};
        this.submitted = false;
        this.contactList = [];
        this.projectList = [];
        this.fgList = [];
        this.natureList = [];
        this.priorityList = [];
        this.transactionTypeList = [];
        this.complaintTypeList = [];
        this.productData = [];
        this.minDate = '';
        this.defaultActiveTitle = 'service_request';
        this.registerForm1 = this.formBuilder.group({
            requestType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            complaintTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]],
            project: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            fgNo: [''],
            natureProblem: [''],
            visitDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            visitTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            contactName: [''],
            transaction_type: [''],
        });
        this.data = {
            requestType: '',
            complaintTitle: '',
            description: '',
            project: '',
            fgNo: '',
            natureProblem: '',
            visitDate: '',
            visitTime: '',
            contactName: '',
            transaction_type: '',
        };
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
    }
    AddrequestPage.prototype.ngOnInit = function () {
        this.getComplaintTitleListHandler();
        this.onGetMyProjectListHandler();
        this.getNatureProbelmListHandler();
        this.getPriorityListHandler();
        this.getTransactionTypeListHandler();
        // this.defaultActiveTitle = 'service_request';
    };
    AddrequestPage.prototype.onAddProductToListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isFGExist;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.data.fgNo || !this.data.fgNo["fg_no"]) {
                    if (!this.data.fgNo || !this.data.fgNo["fg_no"]) {
                        this.dbService.onShowAlertMessage('Error', 'FG No Reuired');
                    }
                    console.log(this.data.fg_no);
                    return [2 /*return*/];
                }
                else {
                    isFGExist = this.fgList.findIndex(function (row) { return row.fgNo == _this.data.fgNo.fg_no; });
                    if (isFGExist === -1) {
                        this.productData.push({
                            fgNo: this.data.fgNo["fg_no"],
                        });
                    }
                    else {
                        this.productData[isFGExist].fgNo = this.data.fgNo["fg_no"];
                    }
                    console.log(this.productData);
                    this.data.fgNo = {};
                    this.dbService.presentToast('Product Update To List!');
                }
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.onSaveRequestHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isCheckListSelected, isContactSelected, index, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        isCheckListSelected = false;
                        isContactSelected = false;
                        for (index = 0; index < this.contactList.length; index++) {
                            if (this.contactList[index].checked) {
                                isContactSelected = true;
                            }
                        }
                        if (!this.registerForm1.invalid) return [3 /*break*/, 1];
                        this.registerForm1.get('requestType').markAsTouched();
                        this.registerForm1.get('complaintTitle').markAsTouched();
                        this.registerForm1.get('description').markAsTouched();
                        this.registerForm1.get('project').markAsTouched();
                        this.registerForm1.get('fgNo').markAsTouched();
                        this.registerForm1.get('natureProblem').markAsTouched();
                        this.registerForm1.get('visitDate').markAsTouched();
                        this.registerForm1.get('visitTime').markAsTouched();
                        this.registerForm1.get('contactName').markAsTouched();
                        this.registerForm1.get('transaction_type').markAsTouched();
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Save Request ?',
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
                                        var inputData = JSON.parse(JSON.stringify(_this.data));
                                        inputData["projectId"] = _this.data.project["id"];
                                        inputData["projectName"] = _this.data.project["project_name"];
                                        inputData["fgData"] = _this.productData;
                                        inputData["contactList"] = _this.contactList;
                                        inputData["visitDate"] = moment__WEBPACK_IMPORTED_MODULE_6__(_this.data.visitDate).format('YYYY-MM-DD');
                                        inputData["visitTime"] = moment__WEBPACK_IMPORTED_MODULE_6__(_this.data.visitTime).format('hh:mm');
                                        inputData["visitDateTime"] = inputData["visitDate"] + ' ' + inputData["visitTime"];
                                        inputData["transactionType"] = _this.data.transaction_type;
                                        _this.dbService.presentLoader();
                                        console.log(inputData);
                                        _this.dbService.onPostRequestHandler(inputData, 'customer/onSubmitTaskData').subscribe(function (result) {
                                            console.log(result);
                                            _this.dbService.dismissLoader();
                                            var routeURL = '/customer/request';
                                            _this.route.navigate([routeURL]);
                                            _this.dbService.presentToast('Request Saved Successfully!');
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
    AddrequestPage.prototype.getComplaintTitleListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.onPostRequestHandler(inputData, 'task/getComplaintTypeList').subscribe(function (result) {
                    console.log(result);
                    _this.complaintTypeList = result["complaintTypeList"];
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.getNatureProbelmListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.onPostRequestHandler(inputData, 'task/getNatureProbelmList').subscribe(function (result) {
                    console.log(result);
                    _this.natureList = result["natureProbelmList"];
                    console.log(_this.natureList);
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.getTransactionTypeListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.onPostRequestHandler(inputData, 'task/getTransactionTypeList').subscribe(function (result) {
                    console.log(result);
                    _this.transactionTypeList = result["transactionTypeList"];
                    console.log(_this.transactionTypeList);
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.getPriorityListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.onPostRequestHandler(inputData, 'task/getPriorityList').subscribe(function (result) {
                    console.log(result);
                    _this.priorityList = result["priorityList"];
                    console.log(_this.priorityList);
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.onGetMyProjectListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe(function (result) {
                    console.log(result);
                    _this.projectList = result["projectContactList"];
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.onGetProjectFGListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.fgList = [];
                this.data.fgNo = {};
                this.data.natureProblem = '';
                this.productData = [];
                inputData = {};
                inputData["projectId"] = this.data.project["id"];
                this.dbService.presentLoader();
                this.dbService.onPostRequestHandler(inputData, 'customer/getProjectFGList').subscribe(function (result) {
                    console.log(result);
                    _this.fgList = result["fgList"];
                    _this.dbService.dismissLoader();
                    _this.onGetProjectContactHandler();
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.onGetProjectContactHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {
                    projectId: this.data.project["id"]
                };
                this.dbService.onPostRequestHandler(inputData, 'task/onGetTaskProjectAllContactList').subscribe(function (result) {
                    console.log(result);
                    _this.contactList = result["contactList"];
                });
                return [2 /*return*/];
            });
        });
    };
    AddrequestPage.prototype.onDeleteProductHandler = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Delete Product ?',
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
                                        _this.productData.splice(index, 1);
                                        _this.dbService.presentToast('Product Deleted Successfully!');
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
    Object.defineProperty(AddrequestPage.prototype, "f1", {
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    AddrequestPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    AddrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addrequest',
            template: __webpack_require__(/*! raw-loader!./addrequest.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html"),
            styles: [__webpack_require__(/*! ./addrequest.page.scss */ "./src/app/customer_app/service_request/addrequest/addrequest.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], AddrequestPage);
    return AddrequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=service_request-addrequest-addrequest-module-es5.js.map