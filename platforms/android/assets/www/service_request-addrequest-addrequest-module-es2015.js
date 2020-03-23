(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-addrequest-addrequest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>Add Service Request</ion-title>\n                </div>\n            </div>\n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveRequestHandler()\">\n            \n            <div class=\"cs-ion-content pt0\" padding>\n                <div class=\"custome-filter dlform\">\n                    <div class=\"fiter-data\">\n                        \n                        <div class=\"cs-right\">\n                            <div class=\"common_form inner_page\">\n                                <div class=\"heading\"><h1>Request Information</h1></div>\n                                \n                                <ion-item [ngClass]=\"submitted && f1.requestType.errors && f1.requestType.errors.required ? 'has-error' : (f1.requestType.errors && !f1.requestType.errors.required ? 'has-text' : '')\" class=\"cs-select\">\n                                    \n                                    <ion-label>Request Type</ion-label>\n                                    \n                                    <ion-select formControlName=\"requestType\" [(ngModel)]=\"data.requestType\" (ngModelChange)=\"onRequestTypeChangeHandler()\" placeholder=\"Select Type\">\n                                        <ion-select-option value=\"service_request\">Complaint</ion-select-option>\n                                        <ion-select-option value=\"commissioning\">Commissioning</ion-select-option>\n                                    </ion-select>\n                                    \n                                </ion-item>\n\n                                <ion-item  *ngIf = \"registerForm1.value['requestType']\"[ngClass]=\"submitted && f1.complaintTitle.errors && f1.complaintTitle.errors.required ? 'has-error' : (f1.complaintTitle.errors && !f1.complaintTitle.errors.required ? 'has-text' : '')\" class=\"cs-select\">\n                                    \n                                    <ion-label>Complaint Title</ion-label>\n\n                                    <ion-select  *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\" formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\">\n                                            <ion-select-option *ngFor=\"let row of complaintTypeList\" [value]=\"row.title\">{{row.title}}</ion-select-option>\n                                            \n                                    </ion-select>\n\n                                    <ion-select *ngIf = \"registerForm1.value['requestType']  != 'service_request'\" formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\">\n                                \n                                            <ion-select-option  [value]=\"commissioning\">Commissioning</ion-select-option>\n                                            \n                                    </ion-select>\n                                               \n                                    \n                                </ion-item>\n\n                                <ion-item  class=\"cs-select\" *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\">\n                            \n                                    <ion-label>Nature Problem</ion-label>\n                                    <ionic-selectable\n                                    [(ngModel)]=\"data.natureProblem\"\n                                    [items]=\"natureList\"\n                                    itemValueField=\"nature\"\n                                    itemTextField=\"nature\"\n                                    formControlName=\"natureProblem\"\n                                    [canSearch]=\"true\">\n                                    \n                                </ionic-selectable>\n                                \n                                </ion-item>\n                                \n                                <ion-item [ngClass]=\"submitted && f1.description.errors && f1.description.errors.required ? 'has-error' : (f1.description.errors && !f1.description.errors.required ? 'has-text' : '')\" class=\"h70\">\n                                    <ion-textarea formControlName=\"description\" [(ngModel)]=\"data.description\" placeholder=\"Description\"></ion-textarea>\n                                </ion-item>\n                                \n                                \n                                <ion-item [ngClass]=\"submitted && f1.project.errors && f1.project.errors.required ? 'has-error' : (f1.project.errors && !f1.project.errors.required ? 'has-text' : '')\" class=\"cs-select\">\n                                    \n                                    <ion-label>Project</ion-label>\n                                    \n                                    <ionic-selectable\n                                    [(ngModel)]=\"data.project\"\n                                    [items]=\"projectList\"\n                                    itemValueField=\"id\"\n                                    itemTextField=\"project_name\"\n                                    formControlName=\"project\"\n                                    [canSearch]=\"true\"\n                                    (onChange)=\"onGetProjectFGListHandler()\">\n                                    \n                                </ionic-selectable>\n                            </ion-item>\n                        </div>\n                    </div>\n                    \n                    <div *ngIf=\"data.project && data.project['project_name']\" class=\"cs-right mt20\">\n                        <div class=\"common_form inner_page\">\n                            <div class=\"heading\"><h1>Add Product Information</h1></div>\n                            \n                            <ion-item [ngClass]=\"submitted && f1.fgNo.errors  ? 'has-error' : (f1.fgNo.errors ? 'has-text' : '')\" class=\"cs-select\">\n                                \n                                <ion-label>FG No</ion-label>\n                                <ionic-selectable\n                                [(ngModel)]=\"data.fgNo\"\n                                [items]=\"fgList\"\n                                itemValueField=\"fg_no\"\n                                itemTextField=\"fg_no\"\n                                formControlName=\"fgNo\"\n                                [canSearch]=\"true\">\n                                \n                            </ionic-selectable>\n                            \n                        </ion-item>\n                       \n                    \n                    <div [hidden]=\"data.requestType == 'service_request' && productData.length > 0\" class=\"cs-btn mt16\" text-right>\n                        <ion-button (click)=\"onAddProductToListHandler()\" class=\"success min w100\">Add to List</ion-button>\n                    </div>\n                </div>\n                \n                <div class=\"complaints list mt20\">\n                    \n                    <div *ngFor=\"let row of productData; let index = index\" class=\"figure\">\n                        <div class=\"cnt-info\">\n                            <div class=\"cs-left\">\n                                <div class=\"f-alpha\">{{row.fgNo[0]}}</div>\n                                <div class=\"names\">\n                                    <h1>{{row.fgNo}}</h1>\n                                </div>\n                            </div>\n                            <div (click)=\"onDeleteProductHandler(index)\" class=\"cm-right\">\n                                <a class=\"delete\"><i class=\"material-icons\">delete_sweep</i></a>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div> \n            </div>\n\n            <div [hidden] = \"data.requestType == 'commissioning'\" class=\"cs-right mt20\">\n                <div class=\"common_form inner_page\">\n                    <div class=\"heading\"><h1>Service Type</h1></div>\n                        <div class=\"dflex\">\n\n                            <ion-item  class=\"cs-select\">\n                                            \n                                <ion-label>Service Type</ion-label>\n                                <ionic-selectable\n                                [(ngModel)]=\"data.transaction_type\"\n                                [items]=\"transactionTypeList\"\n                                itemValueField=\"transaction_type\"\n                                itemTextField=\"transaction_type\"\n                                formControlName=\"transaction_type\"\n                                [canSearch]=\"true\">\n                                \n                                </ionic-selectable>\n            \n                            </ion-item>\n\n                        </div>\n                    </div>\n                </div>   \n\n            <div class=\"cs-right mt20\">\n                <div class=\"common_form inner_page\">\n                    <div class=\"heading\"><h1>Engineer Visiting Date & Time</h1></div>\n                    <div class=\"dflex\">\n                        <ion-item [ngClass]=\"submitted && f1.visitDate.errors && f1.visitDate.errors.required ? 'has-error' : (f1.visitDate.errors && !f1.visitDate.errors.required ? 'has-text' : '')\" class=\"date-time mb0 mr10\">\n                            <ion-label>Date</ion-label>\n                            <ion-datetime formControlName=\"visitDate\" [(ngModel)]=\"data.visitDate\" displayFormat=\"DD-MMM-YYYY\" min=\"{{minDate}}\"></ion-datetime>\n                            \n                            <ion-text *ngIf=\"submitted && f1.visitDate.errors\" class=\"cs-error\">\n                                \n                            </ion-text>\n                            \n                        </ion-item>\n                        \n                        <ion-item [ngClass]=\"submitted && f1.visitTime.errors && f1.visitTime.errors.required ? 'has-error' : (f1.visitTime.errors && !f1.visitTime.errors.required ? 'has-text' : '')\" class=\"date-time\">\n                            <ion-label>Time</ion-label>\n                            <ion-datetime formControlName=\"visitTime\" [(ngModel)]=\"data.visitTime\" displayFormat=\"h:mm A\"></ion-datetime>\n                            \n                            <ion-text *ngIf=\"submitted && f1.visitTime.errors\" class=\"cs-error\">\n                                \n                            </ion-text>\n                            \n                        </ion-item>\n                        \n                        \n                    </div>\n                    \n                </div>\n            </div>\n              \n            <div class=\"cs-right mt20\">\n                <div class=\"common_form inner_page\">\n                    <div class=\"heading\"><h1>Contact Person Information</h1></div>\n                </div>\n                <div class=\"cs-checkbox\">\n                    <ion-list>\n                        <ion-item *ngFor=\"let row of contactList\">\n                            <ion-label>{{row.name}} ({{row.designation}})</ion-label>\n                            <ion-checkbox [(ngModel)]=\"row.checked\" formControlName=\"contactName\" slot=\"start\" color=\"success\"></ion-checkbox>\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </div>\n            \n            <div class=\"cs-btn mt20\">\n                <ion-button type=\"submit\" class=\"success large\" expand=\"full\">SUBMIT</ion-button>\n            </div>\n        </div>\n        \n    </div>\n    \n</div>\n\n</form>\n</div>\n</ion-content>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addrequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addrequest.page */ "./src/app/customer_app/service_request/addrequest/addrequest.page.ts");




const routes = [
    {
        path: '',
        component: _addrequest_page__WEBPACK_IMPORTED_MODULE_3__["AddrequestPage"]
    }
];
let AddrequestPageRoutingModule = class AddrequestPageRoutingModule {
};
AddrequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddrequestPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addrequest-routing.module */ "./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts");
/* harmony import */ var _addrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addrequest.page */ "./src/app/customer_app/service_request/addrequest/addrequest.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








let AddrequestPageModule = class AddrequestPageModule {
};
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



/***/ }),

/***/ "./src/app/customer_app/service_request/addrequest/addrequest.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/customer_app/service_request/addrequest/addrequest.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvYWRkcmVxdWVzdC9hZGRyZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);








let AddrequestPage = class AddrequestPage {
    constructor(popoverController, route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
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
        this.data = {};
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
    ngOnInit() {
        this.getComplaintTitleListHandler();
        this.onGetMyProjectListHandler();
        this.getNatureProbelmListHandler();
        this.getPriorityListHandler();
        this.getTransactionTypeListHandler();
        // this.defaultActiveTitle = 'service_request';
    }
    onRequestTypeChangeHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.data.requestType == 'commissioning') {
                this.data.transaction_type = {
                    transaction_type: 'commissioning'
                };
            }
            else {
                this.data.transaction_type = '';
            }
            console.log(this.data.transaction_type);
        });
    }
    onAddProductToListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.data.fgNo || !this.data.fgNo[`fg_no`]) {
                if (!this.data.fgNo || !this.data.fgNo[`fg_no`]) {
                    this.dbService.onShowAlertMessage('Error', 'FG No Reuired');
                }
                console.log(this.data.fgNo);
                return;
            }
            else {
                console.log(this.fgList);
                console.log(this.data.fgNo);
                const isFGExist = this.productData.findIndex(row => row.fgNo == this.data.fgNo.fg_no);
                if (isFGExist === -1) {
                    this.productData.push({
                        fgNo: this.data.fgNo[`fg_no`],
                    });
                }
                else {
                    this.productData[isFGExist].fgNo = this.data.fgNo[`fg_no`];
                }
                console.log(this.productData);
                this.data.fgNo = {};
                this.dbService.presentToast('Product Update To List!');
            }
        });
    }
    onSaveRequestHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            // if (this.productData.length == 0) {
            //     this.dbService.onShowAlertMessage('Error', 'No Product Information Added!');
            //     return;
            // }
            let isContactSelected = false;
            for (let index = 0; index < this.contactList.length; index++) {
                if (this.contactList[index].checked) {
                    isContactSelected = true;
                }
            }
            if (!isContactSelected) {
                this.dbService.onShowAlertMessage('Error', 'No Contact Information Selected!');
                return;
            }
            if (this.registerForm1.invalid) {
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
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirm',
                    message: 'Are You Sure, You Want To Save Request ?',
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                console.log('No clicked');
                            }
                        },
                        {
                            text: 'Yes',
                            handler: () => {
                                console.log('Yes clicked');
                                const inputData = JSON.parse(JSON.stringify(this.data));
                                inputData[`projectId`] = this.data.project[`id`];
                                inputData[`projectName`] = this.data.project[`project_name`];
                                inputData[`fgData`] = this.productData;
                                inputData[`contactList`] = this.contactList;
                                inputData[`visitDate`] = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.visitDate).format('YYYY-MM-DD');
                                inputData[`visitTime`] = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.visitTime).format('hh:mm');
                                inputData[`visitDateTime`] = inputData[`visitDate`] + ' ' + inputData[`visitTime`];
                                inputData[`transactionType`] = this.data.transaction_type;
                                this.dbService.presentLoader();
                                console.log(inputData);
                                this.dbService.onPostRequestHandler(inputData, 'customer/onSubmitTaskData').subscribe((result) => {
                                    console.log(result);
                                    this.dbService.dismissLoader();
                                    const routeURL = '/customer/request';
                                    this.route.navigate([routeURL]);
                                    this.dbService.presentToast('Request Saved Successfully!');
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    getComplaintTitleListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {};
            this.dbService.onPostRequestHandler(inputData, 'task/getComplaintTypeList').subscribe((result) => {
                console.log(result);
                this.complaintTypeList = result[`complaintTypeList`];
            });
        });
    }
    getNatureProbelmListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {};
            this.dbService.onPostRequestHandler(inputData, 'task/getNatureProbelmList').subscribe((result) => {
                console.log(result);
                this.natureList = result[`natureProbelmList`];
                console.log(this.natureList);
            });
        });
    }
    getTransactionTypeListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {};
            this.dbService.onPostRequestHandler(inputData, 'task/getTransactionTypeList').subscribe((result) => {
                console.log(result);
                this.transactionTypeList = result[`transactionTypeList`];
                console.log(this.transactionTypeList);
            });
        });
    }
    getPriorityListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {};
            this.dbService.onPostRequestHandler(inputData, 'task/getPriorityList').subscribe((result) => {
                console.log(result);
                this.priorityList = result[`priorityList`];
                console.log(this.priorityList);
            });
        });
    }
    onGetMyProjectListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {};
            this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe((result) => {
                console.log(result);
                this.projectList = result[`projectContactList`];
            });
        });
    }
    onGetProjectFGListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.fgList = [];
            this.data.fgNo = {};
            this.data.natureProblem = '';
            this.productData = [];
            const inputData = {};
            inputData[`projectId`] = this.data.project[`id`];
            this.dbService.presentLoader();
            this.dbService.onPostRequestHandler(inputData, 'customer/getProjectFGList').subscribe((result) => {
                console.log(result);
                this.fgList = result[`fgList`];
                this.dbService.dismissLoader();
                this.onGetProjectContactHandler();
            });
        });
    }
    onGetProjectContactHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const inputData = {
                projectId: this.data.project[`id`]
            };
            this.dbService.onPostRequestHandler(inputData, 'task/onGetTaskProjectAllContactList').subscribe((result) => {
                console.log(result);
                this.contactList = result[`contactList`];
            });
        });
    }
    onDeleteProductHandler(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: 'Are You Sure, You Want To Delete Product ?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            console.log('No clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log('Yes clicked');
                            this.productData.splice(index, 1);
                            this.dbService.presentToast('Product Deleted Successfully!');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ionViewWillEnter() {
        this.data = {};
    }
    get f1() { return this.registerForm1.controls; }
};
AddrequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
AddrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addrequest',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addrequest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addrequest.page.scss */ "./src/app/customer_app/service_request/addrequest/addrequest.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], AddrequestPage);



/***/ })

}]);
//# sourceMappingURL=service_request-addrequest-addrequest-module-es2015.js.map