(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer_app-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/login/login.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/login/login.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"login-container\">\r\n        <div class=\"logo\"><img src=\"../../assets/img/logo.jpg\" alt=\"\"></div>\r\n        \r\n        <div class=\"form-container\">\r\n            <div class=\"head\">\r\n                <div class=\"heading\">\r\n                    <h1>Login</h1>\r\n                    <!-- <ion-button fill=\"clear\"><i class=\"material-icons\">arrow_right_alt</i> Back To Login</ion-button> -->\r\n                </div>\r\n                <p>Please Sign in to Continue.</p>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"input-container\">\r\n                \r\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmitLoginHandler()\">\r\n                    \r\n                    <div class=\"form_x\">\r\n                        <ion-item [ngClass]=\"submitted && f.userName.errors && f.userName.errors.required ? 'has-error' : (f.userName.errors && !f.userName.errors.required ? 'has-text' : '')\" class=\"icon\">\r\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\r\n                                <g id=\"user_icon\" transform=\"translate(0)\">\r\n                                    <g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(0)\">\r\n                                        <path id=\"Path_1\" data-name=\"Path 1\" d=\"M17.071,12.929a9.962,9.962,0,0,0-3.8-2.384,5.781,5.781,0,1,0-6.542,0A10.016,10.016,0,0,0,0,20H1.562a8.437,8.437,0,1,1,16.875,0H20A9.935,9.935,0,0,0,17.071,12.929ZM10,10a4.219,4.219,0,1,1,4.219-4.219A4.224,4.224,0,0,1,10,10Z\" transform=\"translate(0)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                    </g>\r\n                                </g>\r\n                            </svg>  \r\n                            <ion-label position=\"floating\">User Name</ion-label>                            \r\n                            <ion-input formControlName = \"userName\" [(ngModel)] = \"data.userName\" ></ion-input>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f.userName.errors\" class=\"cs-error\">\r\n                                \r\n                                <span *ngIf=\"f.userName.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                \r\n                                <span *ngIf=\"f.userName.errors.maxlength\">Maximum 30 Letter Required</span>\r\n                                \r\n                            </ion-text>\r\n                        </ion-item>\r\n                        \r\n                        <ion-item [ngClass]=\"submitted && f.password.errors && f.password.errors.required ? 'has-error' : (f.password.errors && !f.password.errors.required ? 'has-text' : '')\"  class=\"icon\">\r\n                            <svg id=\"key_icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20.316\" viewBox=\"0 0 20 20.316\">\r\n                                <g id=\"Group_4\" data-name=\"Group 4\">\r\n                                    <g id=\"Group_3\" data-name=\"Group 3\">\r\n                                        <path id=\"Path_2\" data-name=\"Path 2\" d=\"M10.844,20.316a6.871,6.871,0,0,0,6.422-9.3l6.565-6.566a.5.5,0,0,0,.147-.354V.5a.5.5,0,0,0-.5-.5H20.517a.5.5,0,0,0-.354.146l-1,1a.5.5,0,0,0-.147.354V2.722H17.8a.5.5,0,0,0-.5.5v.49H16.8a.5.5,0,0,0-.5.5V5.29H15.227a.5.5,0,0,0-.354.147L13.281,7.028a6.867,6.867,0,1,0-2.437,13.287Zm0-12.732a5.821,5.821,0,0,1,2.355.492.5.5,0,0,0,.55-.1l0,0L15.434,6.29H16.8a.5.5,0,0,0,.5-.5V4.713h.49a.5.5,0,0,0,.5-.5v-.49h1.224a.5.5,0,0,0,.5-.5V1.7l.7-.7h2.253v.707L16.861,7.824a.45.45,0,1,0,.637.637l5.479-5.479v.9L16.323,10.54l0,0a.5.5,0,0,0-.1.55,5.867,5.867,0,1,1-5.374-3.511Z\" transform=\"translate(-3.978)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                    </g>\r\n                                </g>\r\n                                <g id=\"Group_6\" data-name=\"Group 6\" transform=\"translate(2.902 13.665)\">\r\n                                    <g id=\"Group_5\" data-name=\"Group 5\" transform=\"translate(0)\">\r\n                                        <path id=\"Path_3\" data-name=\"Path 3\" d=\"M342.275,76.893a1.874,1.874,0,1,0-1.874-1.874A1.876,1.876,0,0,0,342.275,76.893Zm0-2.748a.874.874,0,1,1-.874.874A.875.875,0,0,1,342.275,74.145Z\" transform=\"translate(-340.401 -73.144)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                    </g>\r\n                                </g>\r\n                            </svg>\r\n                            \r\n                            <ion-label position=\"floating\">password</ion-label>\r\n                            \r\n                            <ion-input formControlName=\"password\" [(ngModel)] = \"data.password\">\r\n                                \r\n                            </ion-input>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f.password.errors\" class=\"cs-error\">\r\n                                \r\n                                <span *ngIf=\"f.password.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                \r\n                                <span *ngIf=\"f.password.errors.maxlength\">Maximum 30 Letter Required</span>\r\n                                \r\n                            </ion-text>\r\n                        </ion-item>\r\n                    </div>\r\n                    <a class=\"fg\" [routerLink]=\"['/customer_forgotpassword']\">Forgot Password ?</a>\r\n                    \r\n                    <div class=\"cs-btn mt50\">\r\n                        <ion-button type = \"submit\" class=\"success large\" shape=\"round\"  expand=\"full\">LOGIN</ion-button>\r\n                    </div>\r\n                    \r\n                </form>\r\n                \r\n                \r\n                \r\n                <div class=\"or-cnt\">\r\n                    <div>OR</div>\r\n                </div>\r\n                \r\n                <div class=\"cs-btn\">\r\n                    <ion-button class=\"success large\" shape=\"round\" disabled=\"false\" expand=\"full\" [routerLink]=\"['/registration']\">REGISTER NOW</ion-button>\r\n                </div>\r\n                \r\n                \r\n            </div>\r\n        </div>\r\n        \r\n        \r\n    </div>\r\n    \r\n</ion-content>"

/***/ }),

/***/ "./src/app/customer_app/login/login-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/customer_app/login/login-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/customer_app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/customer_app/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/customer_app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/customer_app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/login/login.page.scss":
/*!****************************************************!*\
  !*** ./src/app/customer_app/login/login.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customer_app/login/login.page.ts":
/*!**************************************************!*\
  !*** ./src/app/customer_app/login/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(route, formBuilder, alertCtrl, dbService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.data = {};
        this.submitted = false;
        this.registerForm = this.formBuilder.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onSubmitLoginHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                console.log(this.registerForm);
                if (this.registerForm.invalid) {
                    this.registerForm.get('userName').markAsTouched();
                    this.registerForm.get('password').markAsTouched();
                    return [2 /*return*/];
                }
                else {
                    console.log('hello');
                    this.dbService.presentLoader();
                    inputData = {
                        userName: this.data.userName,
                        password: this.data.password,
                        loginType: 'Customer'
                    };
                    this.dbService.onPostRequestHandler(inputData, 'login/onValidateLoginByUserNamePassword').subscribe(function (result) {
                        console.log(result);
                        _this.dbService.dismissLoader();
                        if (result["status"] == 'error') {
                            _this.dbService.onShowAlertMessage('Error', result["statusMessage"]);
                        }
                        else {
                            var loginData = {
                                loginType: result["loginType"],
                                loginId: result["loginId"],
                                loginName: result["loginName"],
                                loginStatus: result["loginStatus"]
                            };
                            localStorage.setItem('loginData', JSON.stringify(loginData));
                            console.log(JSON.parse(localStorage.getItem('loginData')));
                            _this.route.navigate(['/customer/home']);
                            setTimeout(function () {
                                _this.dbService.onShowAlertMessage('Success', 'Login Successful!');
                                _this.route.navigate(['/customer/home']);
                            }, 1000);
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/customer_app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=customer_app-login-login-module-es5.js.map