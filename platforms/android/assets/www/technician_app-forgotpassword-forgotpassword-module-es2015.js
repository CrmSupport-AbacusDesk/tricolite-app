(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technician_app-forgotpassword-forgotpassword-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/forgotpassword/forgotpassword.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/forgotpassword/forgotpassword.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"login-container\">\r\n        <div class=\"logo\"><img src=\"../../assets/img/logo.jpg\" alt=\"\"></div>\r\n        \r\n        <div class=\"form-container\">\r\n            \r\n            <div class=\"head\">\r\n                \r\n                <div class=\"heading\">\r\n                    \r\n                    <h1>Change Password</h1>\r\n                    \r\n                    <ion-button fill=\"clear\" routerLink=\"{{isUserLoggedIn ? (userLoggedInType == 'Technician' ? '/technicians/home' : '/customers/home') : '/techlogin'}}\" routerDirection=\"\">\r\n                        <i class=\"material-icons\">arrow_right_alt</i> Back</ion-button>\r\n                        \r\n                    </div>\r\n                    \r\n                    <p *ngIf=\"activeStage==1\">Enter your mobile number, we will send you OTP to verify.</p>\r\n                    \r\n                    <p *ngIf=\"activeStage==2\">Enter 4 Digit OTP Code.</p>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"input-container\">\r\n                    \r\n                    <div class=\"form_x\">\r\n                        <form *ngIf=\"!isUserLoggedIn\" [formGroup]=\"registerForm1\">\r\n                            \r\n                            <ion-item [ngClass]=\"isMobileSubmitted && f1.mobile.errors && f1.mobile.errors.required ? 'has-error' : (f1.mobile.errors && !f1.mobile.errors.required ? 'has-text' : '')\" class=\"icon\">\r\n                                \r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\r\n                                    <g id=\"user_icon\" transform=\"translate(0)\">\r\n                                        <g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(0)\">\r\n                                            <path id=\"Path_1\" data-name=\"Path 1\" d=\"M17.071,12.929a9.962,9.962,0,0,0-3.8-2.384,5.781,5.781,0,1,0-6.542,0A10.016,10.016,0,0,0,0,20H1.562a8.437,8.437,0,1,1,16.875,0H20A9.935,9.935,0,0,0,17.071,12.929ZM10,10a4.219,4.219,0,1,1,4.219-4.219A4.224,4.224,0,0,1,10,10Z\" transform=\"translate(0)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                        </g>\r\n                                    </g>\r\n                                </svg>\r\n                                \r\n                                <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                <ion-input type=\"tel\" formControlName=\"mobile\" [(ngModel)]=\"data.mobile\" (keypress)=\"dbService.numberOnly($event)\" [readonly]=\"activeStage!=1\"></ion-input>\r\n                                \r\n                                <ion-text *ngIf=\"isMobileSubmitted && f1.mobile.errors\" class=\"cs-error\">\r\n                                    \r\n                                    <span *ngIf=\"f1.mobile.errors.minlength\">Minimum 10 Digit Required</span>\r\n                                    <span *ngIf=\"f1.mobile.errors.maxlength\">Maximum 10 Digit Required</span>\r\n                                    \r\n                                </ion-text>\r\n                                \r\n                                \r\n                            </ion-item>\r\n                            \r\n                            \r\n                        </form>\r\n                        \r\n                        <form *ngIf=\"activeStage==2\" [formGroup]=\"registerForm2\">\r\n                            \r\n                            \r\n                            <ion-item [ngClass]=\"isOTPSubmitted && f2.otpCode.errors && f2.otpCode.errors.required ? 'has-error' : (f2.otpCode.errors && !f2.otpCode.errors.required ? 'has-text' : '')\" class=\"icon\">\r\n                                \r\n                                <svg id=\"key_icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20.316\" viewBox=\"0 0 20 20.316\">\r\n                                    \r\n                                    <g id=\"Group_4\" data-name=\"Group 4\">\r\n                                        \r\n                                        <g id=\"Group_3\" data-name=\"Group 3\">\r\n                                            \r\n                                            <path id=\"Path_2\" data-name=\"Path 2\" d=\"M10.844,20.316a6.871,6.871,0,0,0,6.422-9.3l6.565-6.566a.5.5,0,0,0,.147-.354V.5a.5.5,0,0,0-.5-.5H20.517a.5.5,0,0,0-.354.146l-1,1a.5.5,0,0,0-.147.354V2.722H17.8a.5.5,0,0,0-.5.5v.49H16.8a.5.5,0,0,0-.5.5V5.29H15.227a.5.5,0,0,0-.354.147L13.281,7.028a6.867,6.867,0,1,0-2.437,13.287Zm0-12.732a5.821,5.821,0,0,1,2.355.492.5.5,0,0,0,.55-.1l0,0L15.434,6.29H16.8a.5.5,0,0,0,.5-.5V4.713h.49a.5.5,0,0,0,.5-.5v-.49h1.224a.5.5,0,0,0,.5-.5V1.7l.7-.7h2.253v.707L16.861,7.824a.45.45,0,1,0,.637.637l5.479-5.479v.9L16.323,10.54l0,0a.5.5,0,0,0-.1.55,5.867,5.867,0,1,1-5.374-3.511Z\" transform=\"translate(-3.978)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                            \r\n                                        </g>\r\n                                        \r\n                                    </g>\r\n                                    \r\n                                    <g id=\"Group_6\" data-name=\"Group 6\" transform=\"translate(2.902 13.665)\">\r\n                                        <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(0)\">\r\n                                            <path id=\"Path_3\" data-name=\"Path 3\" d=\"M342.275,76.893a1.874,1.874,0,1,0-1.874-1.874A1.876,1.876,0,0,0,342.275,76.893Zm0-2.748a.874.874,0,1,1-.874.874A.875.875,0,0,1,342.275,74.145Z\" transform=\"translate(-340.401 -73.144)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                        </g>\r\n                                    </g>\r\n                                    \r\n                                </svg>\r\n                                \r\n                                <ion-label position=\"floating\">Enter OTP</ion-label>\r\n                                \r\n                                <ion-input type=\"tel\" formControlName=\"otpCode\" [(ngModel)]=\"data.otpCode\" (ngModelChange)=\"isOTPWrong = false\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n                                \r\n                                <ion-text *ngIf=\"isOTPSubmitted && f2.otpCode.errors\" class=\"cs-error\">\r\n                                    \r\n                                    <span *ngIf=\"f2.otpCode.errors.minlength\">OTP Must be 4 Digit!</span>\r\n                                    <span *ngIf=\"f2.otpCode.errors.maxlength\">OTP Must be 4 Digit!</span>\r\n                                    \r\n                                </ion-text>\r\n                                \r\n                                <ion-text *ngIf=\"isOTPWrong\" class=\"cs-error\">\r\n                                    \r\n                                    <span>Enter Correct OTP!</span>\r\n                                    \r\n                                </ion-text>\r\n                                \r\n                            </ion-item>\r\n                            \r\n                            \r\n                        </form>\r\n                        \r\n                        \r\n                    </div>\r\n                    \r\n                    <form *ngIf=\"activeStage==3\" [formGroup]=\"registerForm3\">\r\n                        \r\n                        <div class=\"common_form\">\r\n                            \r\n                            <ion-item [ngClass]=\"isPasswordSubmitted && f3.password.errors && f3.password.errors.required ? 'has-error' : (f3.password.errors && !f3.password.errors.required ? 'has-text' : '')\">\r\n                                \r\n                                <ion-label position=\"floating\">New Password</ion-label>\r\n                                <ion-input formControlName=\"password\" [(ngModel)]=\"data.password\" (ngModelChange)=\"isPasswordWrong=false\"></ion-input>\r\n                                \r\n                                <ion-text *ngIf=\"isPasswordSubmitted && f3.password.errors\" class=\"cs-error\">\r\n                                    \r\n                                    <span *ngIf=\"f3.password.errors.minlength\">Password Must be Minimum  5 Letters!</span>\r\n                                    \r\n                                    <span *ngIf=\"f3.password.errors.maxlength\">Password Must be Atmost  20 Letters!</span>\r\n                                    \r\n                                </ion-text>\r\n                                \r\n                            </ion-item>\r\n                            \r\n                            \r\n                            <ion-item [ngClass]=\"isPasswordSubmitted && f3.confirmPassword.errors && f3.confirmPassword.errors.required ? 'has-error' : (f3.confirmPassword.errors && !f3.confirmPassword.errors.required ? 'has-text' : '')\">\r\n                                \r\n                                <ion-label position=\"floating\">Confirm Password</ion-label>\r\n                                \r\n                                <ion-input formControlName=\"confirmPassword\" [(ngModel)]=\"data.confirmPassword\" (ngModelChange)=\"isPasswordWrong=false\"></ion-input>\r\n                                \r\n                                <ion-text *ngIf=\"isPasswordSubmitted && f3.confirmPassword.errors\" class=\"cs-error\">\r\n                                    \r\n                                    <span *ngIf=\"f3.confirmPassword.errors.minlength\">Password Must be Minimum  5 Letters!</span>\r\n                                    \r\n                                    <span *ngIf=\"f3.confirmPassword.errors.maxlength\">Password Must be Atmost  20 Letters!</span>\r\n                                    \r\n                                </ion-text>\r\n                                \r\n                                <ion-text *ngIf=\"isPasswordWrong && !f3.confirmPassword.errors\" class=\"cs-error\">\r\n                                    \r\n                                    <span>Both Password Do Not Match!</span>\r\n                                    \r\n                                </ion-text>\r\n                                \r\n                            </ion-item>\r\n                            \r\n                        </div>\r\n                        \r\n                    </form>\r\n                    \r\n                    <div class=\"cs-btn mt50\">\r\n                        \r\n                        <ion-button (click)=\"onMobileSubmitHandler()\" *ngIf=\"activeStage==1\" class=\"success large\" shape=\"round\" expand=\"full\">CONTINUE</ion-button>\r\n                        \r\n                        <ion-button  (click)=\"onOTPSubmitHandler()\" *ngIf=\"activeStage==2\" class=\"success large\" shape=\"round\" expand=\"full\">CONTINUE</ion-button>\r\n                        \r\n                        <ion-button  (click)=\"onPasswordSubmitHandler()\" *ngIf=\"activeStage==3\" class=\"success large\" shape=\"round\"  expand=\"full\">UPDATE PASSWORD</ion-button>\r\n                        \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </ion-content>"

/***/ }),

/***/ "./src/app/technician_app/forgotpassword/forgotpassword-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/technician_app/forgotpassword/forgotpassword-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/technician_app/forgotpassword/forgotpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/technician_app/forgotpassword/forgotpassword.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/technician_app/forgotpassword/forgotpassword.module.ts ***!
  \************************************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/technician_app/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/technician_app/forgotpassword/forgotpassword.page.ts");







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "./src/app/technician_app/forgotpassword/forgotpassword.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/technician_app/forgotpassword/forgotpassword.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/technician_app/forgotpassword/forgotpassword.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/technician_app/forgotpassword/forgotpassword.page.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.data = {};
        this.loginData = {};
        this.storedOTPCode = '';
        this.isOTPWrong = false;
        this.isPasswordWrong = false;
        this.activeStage = 1;
        this.isMobileSubmitted = false;
        this.isOTPSubmitted = false;
        this.isPasswordSubmitted = false;
        this.isUserLoggedIn = false;
        this.userLoggedInType = '';
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        if (loginData && loginData[`loginId`]) {
            this.isUserLoggedIn = true;
            this.userLoggedInType = loginData[`loginType`];
            this.activeStage = 3;
        }
        console.log(this.userLoggedInType);
    }
    ngOnInit() {
        this.onSetValidationHandler();
    }
    onSetValidationHandler() {
        this.registerForm1 = this.formBuilder.group({
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
        });
        this.registerForm2 = this.formBuilder.group({
            otpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]],
        });
        this.registerForm3 = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]],
        });
    }
    onMobileSubmitHandler() {
        this.isMobileSubmitted = true;
        console.log(this.registerForm1);
        if (this.registerForm1.invalid) {
            console.log('Invalid!');
            this.registerForm1.get('mobile').markAsTouched();
            return false;
        }
        else {
            this.dbService.presentLoader();
            const inputData = {
                mobileNo: this.data.mobile
            };
            this.dbService.onPostRequestHandler(inputData, 'login/onValidateMobileExistance').subscribe((result) => {
                console.log(result);
                this.dbService.dismissLoader();
                if (result[`status`] == 'error') {
                    this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);
                }
                else {
                    this.activeStage = 2;
                    this.storedOTPCode = result[`otpCode`];
                }
            });
        }
    }
    onOTPSubmitHandler() {
        this.isOTPSubmitted = true;
        if (this.registerForm2.invalid) {
            this.registerForm2.get('otpCode').markAsTouched();
            return false;
        }
        else {
            if (this.data.otpCode == this.storedOTPCode) {
                this.activeStage = 3;
            }
            else {
                this.isOTPWrong = true;
            }
        }
    }
    onPasswordSubmitHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isPasswordSubmitted = true;
            if (this.registerForm3.invalid || (this.data.password != this.data.confirmPassword)) {
                this.registerForm3.get('password').markAsTouched();
                this.registerForm3.get('confirmPassword').markAsTouched();
                if (this.data.password != this.data.confirmPassword) {
                    this.isPasswordWrong = true;
                }
                return false;
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirm',
                    message: 'Are You Sure, You Want To Save Password ?',
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
                                this.dbService.presentLoader();
                                const inputData = {
                                    password: this.data.password
                                };
                                this.dbService.onPostRequestHandler(inputData, 'login/onUpdateLoginPassword').subscribe((result) => {
                                    console.log(result);
                                    this.dbService.dismissLoader();
                                    this.dbService.onShowAlertMessage('Success', 'Password Updated');
                                    const loginData = JSON.parse(localStorage.getItem('loginData'));
                                    if (loginData && loginData[`loginType`] == 'Technician') {
                                        this.route.navigateByUrl('/technicians/home');
                                    }
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    onGoToNextStageHandler() {
        if (!this.data.isShowOTP) {
            console.log(this.data.mobile);
            console.log(this.data.mobile.length);
            if (!this.data.mobile || ((this.data.mobile).toString()).length < 10 || ((this.data.mobile).toString()).length > 10) {
                return false;
            }
            else {
            }
        }
        else if (this.data.isShowOTP && !this.data.isShowPassword) {
            if (this.storedOTPCode == this.data.otp) {
            }
            else {
            }
            this.data.isShowPassword = true;
        }
    }
    get f1() { return this.registerForm1.controls; }
    get f2() { return this.registerForm2.controls; }
    get f3() { return this.registerForm3.controls; }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
ForgotpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/forgotpassword/forgotpassword.page.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/technician_app/forgotpassword/forgotpassword.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], ForgotpasswordPage);



/***/ })

}]);
//# sourceMappingURL=technician_app-forgotpassword-forgotpassword-module-es2015.js.map