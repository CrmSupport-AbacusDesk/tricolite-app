(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-addrequest-addrequest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Add Service Request</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveRequestHandler()\">\r\n            \r\n            <div class=\"cs-ion-content pt0\" padding>\r\n                <div class=\"custome-filter dlform\">\r\n                    <div class=\"fiter-data\">\r\n                        \r\n                        <div class=\"cs-right\">\r\n                            <div class=\"common_form inner_page\">\r\n                                <div class=\"heading\"><h1>Request Information</h1></div>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.requestType.errors && f1.requestType.errors.required ? 'has-error' : (f1.requestType.errors && !f1.requestType.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Request Type</ion-label>\r\n                                    \r\n                                    <ion-select formControlName=\"requestType\" [(ngModel)]=\"data.requestType\" (ngModelChange)=\"onRequestTypeChangeHandler()\" placeholder=\"Select Type\">\r\n                                        <ion-select-option value=\"service_request\">Complaint</ion-select-option>\r\n                                        <ion-select-option value=\"commissioning\">Commissioning</ion-select-option>\r\n                                    </ion-select>\r\n                                    \r\n                                </ion-item>\r\n\r\n                                <ion-item  *ngIf = \"registerForm1.value['requestType']\"[ngClass]=\"submitted && f1.complaintTitle.errors && f1.complaintTitle.errors.required ? 'has-error' : (f1.complaintTitle.errors && !f1.complaintTitle.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Complaint Title</ion-label>\r\n\r\n                                    <ion-select  *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\" formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\">\r\n                                            <ion-select-option *ngFor=\"let row of complaintTypeList\" [value]=\"row.title\">{{row.title}}</ion-select-option>\r\n                                            \r\n                                    </ion-select>\r\n\r\n                                    <ion-select *ngIf = \"registerForm1.value['requestType']  != 'service_request'\" formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\">\r\n                                \r\n                                            <ion-select-option  [value]=\"commissioning\">Commissioning</ion-select-option>\r\n                                            \r\n                                    </ion-select>\r\n                                               \r\n                                    \r\n                                </ion-item>\r\n\r\n                                <ion-item  class=\"cs-select\" *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\">\r\n                            \r\n                                    <ion-label>Nature of Problem</ion-label>\r\n                                    <ionic-selectable\r\n                                    [(ngModel)]=\"data.natureProblem\"\r\n                                    [items]=\"natureList\"\r\n                                    itemValueField=\"nature\"\r\n                                    itemTextField=\"nature\"\r\n                                    formControlName=\"natureProblem\"\r\n                                    [canSearch]=\"true\">\r\n                                    \r\n                                </ionic-selectable>\r\n                                \r\n                                </ion-item>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.description.errors && f1.description.errors.required ? 'has-error' : (f1.description.errors && !f1.description.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                    <ion-label position=\"floating\"><strong>Description</strong></ion-label>\r\n\r\n                                    <ion-textarea formControlName=\"description\" [(ngModel)]=\"data.description\"></ion-textarea>\r\n                                </ion-item>\r\n                                \r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.project.errors && f1.project.errors.required ? 'has-error' : (f1.project.errors && !f1.project.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Project</ion-label>\r\n                                    \r\n                                    <ionic-selectable\r\n                                    [(ngModel)]=\"data.project\"\r\n                                    [items]=\"projectList\"\r\n                                    itemValueField=\"id\"\r\n                                    itemTextField=\"project_name\"\r\n                                    formControlName=\"project\"\r\n                                    [canSearch]=\"true\"\r\n                                    (onChange)=\"onGetProjectFGListHandler()\">\r\n                                    \r\n                                </ionic-selectable>\r\n                            </ion-item>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div *ngIf=\"data.project && data.project['project_name']\" class=\"cs-right mt20\">\r\n                        <div class=\"common_form inner_page\">\r\n                            <div class=\"heading\"><h1>Add Product Information</h1></div>\r\n                            \r\n                            <ion-item [ngClass]=\"submitted && f1.fgNo.errors  ? 'has-error' : (f1.fgNo.errors ? 'has-text' : '')\" class=\"cs-select\">\r\n                                \r\n                                <ion-label>FG No</ion-label>\r\n                                <ionic-selectable\r\n                                [(ngModel)]=\"data.fgNo\"\r\n                                [items]=\"fgList\"\r\n                                itemValueField=\"fg_no\"\r\n                                itemTextField=\"fg_no\"\r\n                                formControlName=\"fgNo\"\r\n                                [canSearch]=\"true\">\r\n                                \r\n                            </ionic-selectable>\r\n                            \r\n                        </ion-item>\r\n                       \r\n                    \r\n                    <div [hidden]=\"data.requestType == 'service_request' && productData.length > 0\" class=\"cs-btn mt16\" text-right>\r\n                        <ion-button (click)=\"onAddProductToListHandler()\" class=\"success min w100\">Add to List</ion-button>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"complaints list mt20\">\r\n                    \r\n                    <div *ngFor=\"let row of productData; let index = index\" class=\"figure\">\r\n                        <div class=\"cnt-info\">\r\n                            <div class=\"cs-left\">\r\n                                <div class=\"f-alpha\">{{row.fgNo[0]}}</div>\r\n                                <div class=\"names\">\r\n                                    <h1>{{row.fgNo}}</h1>\r\n                                </div>\r\n                            </div>\r\n                            <div (click)=\"onDeleteProductHandler(index)\" class=\"cm-right\">\r\n                                <a class=\"delete\"><i class=\"material-icons\">delete_sweep</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div> \r\n            </div>\r\n\r\n            <div [hidden] = \"data.requestType == 'commissioning'\" class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Service Type</h1></div>\r\n                        <div class=\"dflex\">\r\n\r\n                            <ion-item  class=\"cs-select\">\r\n                                            \r\n                                <ion-label>Service Type</ion-label>\r\n                                <ionic-selectable\r\n                                [(ngModel)]=\"data.transaction_type\"\r\n                                [items]=\"transactionTypeList\"\r\n                                itemValueField=\"transaction_type\"\r\n                                itemTextField=\"transaction_type\"\r\n                                formControlName=\"transaction_type\"\r\n                                [canSearch]=\"true\">\r\n                                \r\n                                </ionic-selectable>\r\n            \r\n                            </ion-item>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>   \r\n\r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Engineer Visiting Date & Time</h1></div>\r\n                    <div class=\"dflex\">\r\n                        <ion-item [ngClass]=\"submitted && f1.visitDate.errors && f1.visitDate.errors.required ? 'has-error' : (f1.visitDate.errors && !f1.visitDate.errors.required ? 'has-text' : '')\" class=\"date-time mb0 mr10\">\r\n                            <ion-label>Date</ion-label>\r\n                            <ion-datetime formControlName=\"visitDate\" [(ngModel)]=\"data.visitDate\" displayFormat=\"DD-MMM-YYYY\" min=\"{{minDate}}\"></ion-datetime>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f1.visitDate.errors\" class=\"cs-error\">\r\n                                \r\n                            </ion-text>\r\n                            \r\n                        </ion-item>\r\n                        \r\n                        <ion-item [ngClass]=\"submitted && f1.visitTime.errors && f1.visitTime.errors.required ? 'has-error' : (f1.visitTime.errors && !f1.visitTime.errors.required ? 'has-text' : '')\" class=\"date-time\">\r\n                            <ion-label>Time</ion-label>\r\n                            <ion-datetime formControlName=\"visitTime\" [(ngModel)]=\"data.visitTime\" displayFormat=\"h:mm A\"></ion-datetime>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f1.visitTime.errors\" class=\"cs-error\">\r\n                                \r\n                            </ion-text>\r\n                            \r\n                        </ion-item>\r\n                        \r\n                        \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n              \r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Contact Person Information</h1></div>\r\n                </div>\r\n                <div class=\"cs-checkbox\">\r\n                    <ion-list>\r\n                        <ion-item *ngFor=\"let row of contactList\">\r\n                            <ion-label>{{row.name}} ({{row.designation}})</ion-label>\r\n                            <ion-checkbox [(ngModel)]=\"row.checked\" formControlName=\"contactName\" slot=\"start\" color=\"success\"></ion-checkbox>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"cs-btn mt20\">\r\n                <ion-button type=\"submit\" class=\"success large\" expand=\"full\">SUBMIT</ion-button>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    \r\n</div>\r\n\r\n</form>\r\n</div>\r\n</ion-content>\r\n");

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
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
            this.data.complaintTitle = '';
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
            if (this.productData.length == 0) {
                this.dbService.onShowAlertMessage('Error', 'No Product Information Added!');
                return;
            }
            if (this.data.requestType == 'service_request' && (!this.data.transaction_type || !this.data.transaction_type[`transaction_type`])) {
                this.dbService.onShowAlertMessage('Error', 'Service Type Required!');
                return;
            }
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