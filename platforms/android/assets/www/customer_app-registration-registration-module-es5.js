(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer_app-registration-registration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/registration/registration.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/registration/registration.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"login-container\">\r\n        <div class=\"logo\"><img src=\"../../assets/img/logo.jpg\" alt=\"\"></div>\r\n        \r\n        <div class=\"form-container\">\r\n            <div class=\"head\">\r\n                <div class=\"heading\">\r\n                    <h1>Sign Up</h1>\r\n                    <ion-button fill=\"clear\" routerLink=\"/customerlogin\"><i class=\"material-icons\">arrow_right_alt</i> Back To Login</ion-button>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"input-container mt10\">\r\n                <div class=\"custome-filter dlform\">\r\n                    <div class=\"fiter-data\">\r\n                        <div class=\"cs-right\">\r\n                            <div class=\"heading\">\r\n                                <h2>Basic Info</h2>\r\n                            </div>\r\n                            <div  class=\"basic_info mb16\">\r\n                                <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onNextStageHandler(1)\">\r\n                                    <div class=\"common_form inner_page\">\r\n                                        <ion-item [ngClass]=\"submitted && f1.companyName.errors && f1.companyName.errors.required ? 'has-error' : (f1.companyName.errors && !f1.companyName.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Company Name</ion-label>\r\n                                            <ion-input formControlName=\"companyName\" [(ngModel)]=\"data.companyName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.companyName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.companyName.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>                                \r\n\r\n                                        </ion-item>\r\n\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.email.errors && f1.email.errors.required ? 'has-error' : (f1.email.errors && !f1.email.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Email ID</ion-label>\r\n                                            <ion-input formControlName=\"email\" [(ngModel)]=\"data.email\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.email.errors\" class=\"cs-error\">\r\n    \r\n                                                    <span *ngIf=\"!f1.email.errors.required\">Email Invalid</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item>\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.landlineNo.errors && f1.landlineNo.errors.required ? 'has-error' : (f1.landlineNo.errors && !f1.landlineNo.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Landline No.</ion-label>\r\n                                            <ion-input type=\"tel\" formControlName=\"landlineNo\" [(ngModel)]=\"data.landlineNo\"   minlength = \"6\" maxlength=\"13\" (keypress)=\"dbService.numberOnly($event)\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.landlineNo.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.landlineNo.errors.minlength\">Minimum 5 Digit Required</span>\r\n    \r\n                                                <span *ngIf=\"f1.landlineNo.errors.maxlength\">Maximum 30 Digit Required</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item>\r\n\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.username.errors && f1.username.errors.required ? 'has-error' : (f1.username.errors && !f1.username.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Username</ion-label>\r\n                                            <ion-input type=\"text\" formControlName=\"username\" [(ngModel)]=\"data.username\" autocomplete=\"nope\"></ion-input>\r\n                                        </ion-item>\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.password.errors && f1.password.errors.required ? 'has-error' : (f1.password.errors && !f1.password.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Password</ion-label>\r\n                                            <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"data.password\" autocomplete=\"nope\"></ion-input>\r\n                                        </ion-item>\r\n\r\n                                        <div class=\"heading\">\r\n                                            <h2>Project Info</h2>\r\n                                        </div>\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.projectName.errors && f1.projectName.errors.required ? 'has-error' : (f1.projectName.errors && !f1.projectName.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Project Name</ion-label>\r\n                                            <ion-input formControlName=\"projectName\" [(ngModel)]=\"data.projectName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.projectName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.projectName.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>\r\n\r\n                                        </ion-item>\r\n\r\n\r\n                                    </div>\r\n\r\n                                </form>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"heading\">\r\n                                <h2>Address Info</h2>\r\n                            </div>\r\n                            <div  class=\"address mb16\">\r\n                             <form [formGroup]=\"registerForm2\" (ngSubmit)=\"onNextStageHandler(2)\">\r\n\r\n                                <div class=\"common_form inner_page\">\r\n                                    <ion-item [ngClass]=\"submitted && f2.street.errors && f2.street.errors.required ? 'has-error' : (f2.street.errors && !f2.street.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        <ion-textarea formControlName=\"street\" [(ngModel)]=\"data.street\" placeholder=\"Address\"></ion-textarea>\r\n                                      \r\n                                        <ion-text *ngIf=\"submitted && f2.street.errors\" class=\"cs-error\">\r\n                                                <span *ngIf=\"f2.street.errors.minlength\">Minimum 5 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.state.errors && f2.state.errors.required ? 'has-error' : (f2.state.errors && !f2.state.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n\r\n                                        <ion-label>State</ion-label>\r\n\r\n                                        <ionic-selectable\r\n                                        [(ngModel)]=\"data.state\"\r\n                                        [items]=\"stateList\"\r\n                                        itemValueField=\"state_name\"\r\n                                        itemTextField=\"state_name\"\r\n                                        formControlName=\"state\"\r\n                                        [canSearch]=\"true\"\r\n                                        (onChange)=\"onGetDistrictListHandler($event)\">\r\n\r\n                                        </ionic-selectable>\r\n\r\n                                    </ion-item>\r\n\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.district.errors && f2.district.errors.required ? 'has-error' : (f2.district.errors && !f2.district.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                        <ion-label>District</ion-label>\r\n\r\n                                        <ionic-selectable\r\n                                        [(ngModel)]=\"data.district\"\r\n                                        [items]=\"districtList\"\r\n                                        itemValueField=\"district_name\"\r\n                                        itemTextField=\"district_name\"\r\n                                        formControlName=\"district\"\r\n                                        [canSearch]=\"true\">\r\n\r\n                                        </ionic-selectable>\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.city.errors && f2.city.errors.required ? 'has-error' : (f2.city.errors && !f2.city.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">City</ion-label>\r\n                                        <ion-input formControlName=\"city\" [(ngModel)]=\"data.city\"></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f2.city.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f2.city.errors.minlength\">Minimum 4 Letter Required</span>\r\n                \r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f2.pincode.errors && f2.pincode.errors.required ? 'has-error' : (f2.pincode.errors && !f2.pincode.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Pin Code</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"pincode\" [(ngModel)]=\"data.pincode\"  minlength =\"6 \"maxlength=\"6\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f2.pincode.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f2.pincode.errors.minlength || f2.pincode.errors.maxlength\">Pincode Must Be 6 Digit!</span>\r\n                \r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n\r\n\r\n                                </div>\r\n                              </form>\r\n\r\n                            </div>\r\n                            \r\n\r\n                            <div class=\"heading\">\r\n                                <h2>Contact Person Info</h2>\r\n                            </div>\r\n                            <div class=\"contact_person\">\r\n                            <form [formGroup]=\"registerForm3\" (ngSubmit)=\"onNextStageHandler(3)\">\r\n                        \r\n                                <div class=\"common_form inner_page\">\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.contactName.errors && f3.contactName.errors.required ? 'has-error' : (f3.contactName.errors && !f3.contactName.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Name</ion-label>\r\n                                        <ion-input formControlName=\"contactName\" [(ngModel)]=\"data.contactName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f3.contactName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f3.contactName.errors.minlength\">Minimum 3 Letter Required</span>\r\n    \r\n                                                <span *ngIf=\"f3.contactName.errors.maxlength\">Maximum 50 Letter Allowed</span>\r\n                \r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.designation.errors && f3.designation.errors.required ? 'has-error' : (f3.designation.errors && !f3.designation.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Designation</ion-label>\r\n                                        <ion-input formControlName=\"designation\" [(ngModel)]=\"data.designation\" autocomplete=\"nope\"></ion-input>\r\n                                            <ion-text *ngIf=\"submitted && f3.designation.errors\" class=\"cs-error\">\r\n        \r\n                                                    <span *ngIf=\"f3.designation.errors.minlength\">Minimum 3 Letter Required</span>\r\n        \r\n                                                    <span *ngIf=\"f3.designation.errors.maxlength\">Maximum 50 Letter Allowed</span>\r\n                    \r\n                                            </ion-text>\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.contactEmail.errors && f3.contactEmail.errors.required ? 'has-error' : (f3.contactEmail.errors && !f3.contactEmail.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Email ID</ion-label>\r\n                                        <ion-input formControlName=\"contactEmail\" [(ngModel)]=\"data.contactEmail\" autocomplete=\"nope\"></ion-input>\r\n                                        <ion-text *ngIf=\"submitted && f3.contactEmail.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"!f3.contactEmail.errors.required\">Email Invalid!</span>\r\n                \r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.contactMobile.errors && f3.contactMobile.errors.required ? 'has-error' : (f3.contactMobile.errors && !f3.contactMobile.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"contactMobile\" [(ngModel)]=\"data.contactMobile\" minlength = 10 maxlength=\"10\" (keypress)=\"dbService.numberOnly($event)\" autocomplete=\"nope\"></ion-input>\r\n                                  \r\n                                        <ion-text *ngIf=\"submitted && f3.contactMobile.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f3.contactMobile.errors.minlength\">Mobile must be 10 digit!</span>\r\n    \r\n                                                <span *ngIf=\"f3.contactMobile.errors.maxlength\">Mobile Must be 10 Digit</span>\r\n                \r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n\r\n                                </div>\r\n                            </form>\r\n                            \r\n                                <div class=\"cs-btn mt16 lr\">\r\n                                    <ion-button (click)=\"onSaveRegistrationHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                                </div>\r\n                                \r\n                            </div>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/customer_app/registration/registration-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customer_app/registration/registration-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/customer_app/registration/registration.page.ts");




var routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
var RegistrationPageRoutingModule = /** @class */ (function () {
    function RegistrationPageRoutingModule() {
    }
    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegistrationPageRoutingModule);
    return RegistrationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/registration/registration.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/customer_app/registration/registration.module.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/customer_app/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/customer_app/registration/registration.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]
            ],
            declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/registration/registration.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/customer_app/registration/registration.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer_app/registration/registration.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer_app/registration/registration.page.ts ***!
  \****************************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.activeStage = 1;
        this.stateList = [];
        this.districtList = [];
        this.contactData = [];
        this.data = {};
        this.submitted = false;
        this.minDate = '';
        this.currentActiveCheckTab = 0;
        this.registerForm1 = this.formBuilder.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            projectName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            landlineNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(30)]],
        });
        this.registerForm2 = this.formBuilder.group({
            street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]]
        });
        this.registerForm3 = this.formBuilder.group({
            contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
            contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            contactMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
        });
    }
    RegistrationPage.prototype.ngOnInit = function () {
        this.onGetStateListHandler();
    };
    RegistrationPage.prototype.onSaveRegistrationHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var isContactDataFilled, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.data);
                        this.submitted = true;
                        isContactDataFilled = false;
                        if (!this.data.district || !this.data.district['district_name']) {
                            this.data.district = '';
                        }
                        if (this.data.contactName || this.data.designation || this.data.contactEmail || this.data.contactMobile) {
                            isContactDataFilled = true;
                        }
                        if (isContactDataFilled && (!this.data.contactName || !this.data.designation || !this.data.contactEmail || !this.data.contactMobile)) {
                            this.dbService.onShowAlertMessage('Error', 'Fill Contact Complete Details!');
                            return [2 /*return*/];
                        }
                        if (!(this.registerForm1.invalid || this.registerForm2.invalid || this.registerForm3.invalid)) return [3 /*break*/, 1];
                        return [2 /*return*/];
                    case 1:
                        console.log('hello');
                        if (this.data.contactName && this.data.contactEmail && this.data.designation && this.data.contactMobile) {
                            this.contactData.push({
                                contactName: this.data.contactName,
                                designation: this.data.designation,
                                contactEmail: this.data.contactEmail,
                                contactMobile: this.data.contactMobile
                            });
                            this.data.contactName = '';
                            this.data.designation = '';
                            this.data.contactMobile = '';
                            this.data.contactEmail = '';
                            this.submitted = false;
                        }
                        if (this.contactData.length == 0) {
                            this.dbService.onShowAlertMessage('Error', 'No Contact Added!');
                            return [2 /*return*/];
                        }
                        console.log(this.data);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: 'Confirm',
                                message: 'Are You Sure, You Want To Register ?',
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
                                            inputData["stateName"] = inputData["state"]["state_name"];
                                            inputData["districtName"] = inputData["district"]["district_name"];
                                            inputData["contactData"] = _this.contactData;
                                            _this.dbService.presentLoader();
                                            _this.dbService.onPostRequestHandler(inputData, 'login/onRegisterCustomerAccount').subscribe(function (result) {
                                                console.log(result);
                                                _this.dbService.dismissLoader();
                                                if (result["status"] == 'error') {
                                                    _this.dbService.onShowAlertMessage('Error', result["statusMessage"]);
                                                    _this.route.navigate(['/customerlogin']);
                                                }
                                                else {
                                                    var loginData = {
                                                        // loginType: result[`loginData`][`loginType`],
                                                        loginId: result["loginData"]["loginId"],
                                                        loginName: result["loginData"]["loginName"],
                                                        loginStatus: result["loginData"]["loginStatus"]
                                                    };
                                                    localStorage.setItem('loginData', JSON.stringify(loginData));
                                                    console.log(JSON.parse(localStorage.getItem('loginData')));
                                                    _this.dbService.onShowAlertMessage('Success', 'Login Request sent, wait till Verification complete.');
                                                    _this.route.navigate(['/customerlogin']);
                                                }
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
    RegistrationPage.prototype.onGetStateListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.onPostRequestHandler(inputData, 'task/getStateList').subscribe(function (result) {
                    console.log(result);
                    _this.stateList = result["stateList"];
                });
                return [2 /*return*/];
            });
        });
    };
    RegistrationPage.prototype.onGetDistrictListHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.data.district = '';
                this.districtList = [];
                inputData = {
                    stateName: this.data.state["state_name"]
                };
                this.dbService.presentLoader();
                this.dbService.onPostRequestHandler(inputData, 'task/getDistrictList').subscribe(function (result) {
                    console.log(result);
                    _this.districtList = result["districtList"];
                    _this.dbService.dismissLoader();
                });
                return [2 /*return*/];
            });
        });
    };
    RegistrationPage.prototype.onNextStageHandler = function (stage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                console.log(this.registerForm2);
                if (this['registerForm' + stage + ''].invalid) {
                    if (stage == 1) {
                        this['registerForm' + stage + ''].get('companyName').markAsTouched();
                        this['registerForm' + stage + ''].get('email').markAsTouched();
                        // this['registerForm' + stage + ''].get('mobile').markAsTouched();
                        this['registerForm' + stage + ''].get('landlineNo').markAsTouched();
                    }
                    else if (stage == 2) {
                        this['registerForm' + stage + ''].get('street').markAsTouched();
                        this['registerForm' + stage + ''].get('state').markAsTouched();
                        this['registerForm' + stage + ''].get('district').markAsTouched();
                        this['registerForm' + stage + ''].get('city').markAsTouched();
                        this['registerForm' + stage + ''].get('pincode').markAsTouched();
                    }
                    else if (stage == 3) {
                        this['registerForm' + stage + ''].get('contactName').markAsTouched();
                        this['registerForm' + stage + ''].get('designation').markAsTouched();
                        this['registerForm' + stage + ''].get('contactEmail').markAsTouched();
                        this['registerForm' + stage + ''].get('contactMobile').markAsTouched();
                    }
                    return [2 /*return*/];
                }
                else {
                    console.log(this.data);
                    // if (this.activeStage == 3) {
                    if (!this.data.contactName || !this.data.designation || !this.data.contactEmail || !this.data.contactMobile) {
                        this.dbService.onShowAlertMessage('Error', 'Fill contact complete Detail!');
                        return [2 /*return*/, false];
                    }
                    this.contactData.push({
                        contactName: this.data.contactName,
                        designation: this.data.designation,
                        contactEmail: this.data.contactEmail,
                        contactMobile: this.data.contactMobile
                    });
                    this.data.contactName = '';
                    this.data.contactMobile = '';
                    this.data.designation = '';
                    this.data.contactEmail = '';
                    this.submitted = false;
                    // } else {
                    //    this.activeStage += 1;
                    //    this.submitted = false;
                    // }
                }
                return [2 /*return*/];
            });
        });
    };
    RegistrationPage.prototype.onDeleteContactHandler = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Delete Contact ?',
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
                                        _this.contactData.splice(index, 1);
                                        _this.dbService.presentToast('Contact Deleted Successfully!');
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
    RegistrationPage.prototype.onBackClickHandler = function (stage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.activeStage = stage - 1;
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(RegistrationPage.prototype, "f1", {
        get: function () { return this.registerForm1.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationPage.prototype, "f2", {
        get: function () { return this.registerForm2.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationPage.prototype, "f3", {
        get: function () { return this.registerForm3.controls; },
        enumerable: true,
        configurable: true
    });
    RegistrationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/registration/registration.page.html"),
            styles: [__webpack_require__(/*! ./registration.page.scss */ "./src/app/customer_app/registration/registration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], RegistrationPage);
    return RegistrationPage;
}());



/***/ })

}]);
//# sourceMappingURL=customer_app-registration-registration-module-es5.js.map