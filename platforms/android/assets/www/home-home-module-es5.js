(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/home/home.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/home/home.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"dashboard_cnt\">\r\n        <div class=\"cs-header\" padding>\r\n            <div class=\"logo\">\r\n                <img src=\"assets/img/logo.jpg\" alt=\"\">\r\n                <ion-button (click)=\"onLogoutHandler()\" color=\"danger\" fill=\"clear\" class=\"w45 h45 font14 mr5\"><ion-icon name=\"power\"></ion-icon></ion-button>\r\n            </div>\r\n            \r\n            <div class=\"profile-segment mt16\" (click)=\"GoToProfile()\">\r\n                <div class=\"pr-icon\">\r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"dashboardData && dashboardData['loginData']\" class=\"info\">\r\n                    <ion-text color=\"light\">{{dashboardData['loginData']['company_name']}}<br><span>{{dashboardData['loginData']['cust_code']}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"dashboard_container\">\r\n        \r\n        <div class=\"customer-dash\">\r\n            <div class=\"cs-left pr0\">\r\n                <button class=\"serv-req\">\r\n                    <div routerLink = \"/customer/request\" class=\"figure\">\r\n                        <div class=\"top\">\r\n                            <img src=\"assets/icon/request_icon.svg\" alt=\"\">\r\n                            <i class=\"material-icons\">arrow_right_alt</i>\r\n                        </div>\r\n                        <h1>Service Request</h1>\r\n                    </div>\r\n                </button>\r\n                <button class=\"serv-req mt20\" (click)=\"GoToCallRequest()\">\r\n                    <div class=\"figure\">\r\n                        <div class=\"top\">\r\n                            <img src=\"assets/icon/request_call_icon.svg\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"pnrq\">\r\n                            <ion-text>{{dashboardData['typeTotalCount1']}}</ion-text>\r\n                            <h1>Call Request<br>Pending</h1>\r\n                        </div>\r\n                        <h1>Send Call Request</h1>\r\n                    </div>\r\n                </button>\r\n                <!-- <button class=\"change-pass mt20\" [routerLink]=\"['/changepassword']\">\r\n                    <div class=\"figure\">\r\n                        <div class=\"top\">\r\n                            <i class=\"material-icons\">arrow_right_alt</i>\r\n                            <img src=\"assets/icon/change_password.svg\" alt=\"\">\r\n                        </div>\r\n                        <h1>Change Password</h1>\r\n                    </div>\r\n                </button> -->\r\n            </div>\r\n            <!-- <div class=\"cs-right\">\r\n                <button >\r\n                    <div class=\"figure\">\r\n                        <div class=\"top\">\r\n                            <img src=\"assets/icon/request_call_icon.svg\" alt=\"\">\r\n                        </div>\r\n                        <h1>Send<br>Call<br>Request</h1>\r\n                        <div class=\"pnrq\">\r\n                            <ion-text>{{dashboardData['typeTotalCount1']}}</ion-text>\r\n                            <h1>Call<br>Request<br>Pending</h1>\r\n                        </div>\r\n                    </div>\r\n                </button>\r\n            </div> -->\r\n        </div>\r\n        \r\n        <!-- <div class=\"midd-counters mt20\">\r\n            <ion-button fill=\"clear\" class=\"csmp mb20 round\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData['typeTotalCount2']}}</ion-text> Complaint</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1 class=\"font14\">Feedback Pending</h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n        </div> -->\r\n        \r\n        <div class=\"cs-btn view_document mt20\">\r\n            <ion-button class=\"round large\" fill=\"clear\" expand=\"full\" (click)=\"GoToDocuments()\">\r\n                <div class=\"figure\">\r\n                    <h1>View Documents</h1>\r\n                    <i class=\"material-icons\">arrow_right_alt</i>\r\n                </div>\r\n            </ion-button>\r\n        </div>\r\n        \r\n        \r\n        <div class=\"cs-btn sos_contact mt20\">\r\n            <a href=\"tel: {{dashboardData.customerEmergencyNumber}}\">\r\n                <ion-button class=\"round large\" fill=\"clear\" expand=\"full\">\r\n                    <div class=\"figure\">\r\n                        <h1>Call Emergency Contact</h1>\r\n                    </div>\r\n                </ion-button>\r\n            </a>\r\n            \r\n        </div>\r\n    </div>\r\n    \r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/home/home.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/home/home.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n    <div class=\"dashboard_cnt\">\r\n        <div class=\"cs-header\" padding>\r\n            <div class=\"logo\"><img src=\"assets/img/logo.jpg\" alt=\"\"></div>\r\n            \r\n            <div class=\"profile-segment mt16\">\r\n                <div class=\"pr-icon\">\r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.userDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"dashboardData && dashboardData['loginData']\" class=\"info\">\r\n                    <ion-text color=\"light\">{{dashboardData['loginData']['name']}}<br><span>{{dashboardData['loginData']['mobile']}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"dashboardData\" class=\"dashboard_container\">\r\n        <div class=\"top-counters\">\r\n            <div class=\"figure\">\r\n                <div>\r\n                    <h1>{{dashboardData.typeTotalCount1}}</h1>\r\n                    <ion-text>< 5 Day</ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"figure\">\r\n                <div>\r\n                    <h1>{{dashboardData.typeTotalCount2}}</h1>\r\n                    <ion-text>5 - 10 Day</ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"figure\">\r\n                <div>\r\n                    <h1>{{dashboardData.typeTotalCount3}}</h1>\r\n                    <ion-text>> 10 Day</ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        <div class=\"midd-counters\">\r\n            <ion-button routerLink=\"/technicians/complaints\" fill=\"clear\" class=\"free\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.freeServiceTask}}</ion-text> Complaint</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Free <ion-text>Service</ion-text></h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n            <ion-button routerLink=\"/technicians/complaints\" fill=\"clear\" class=\"paid\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.paidServiceTask}}</ion-text> Complaint</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Paid <ion-text>Service</ion-text></h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n            <ion-button routerLink=\"/technicians/commissioning\" fill=\"clear\" class=\"default\">\r\n                <div class=\"figure\">\r\n                    <div class=\"count\"><ion-text>{{dashboardData.commissioningTask}}</ion-text> Task</div>\r\n                    <div class=\"pr-section\">\r\n                        <h1>Commissioning</h1>\r\n                        <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                    </div>\r\n                </div>\r\n            </ion-button>\r\n        </div>\r\n        \r\n        <!-- <div class=\"cs-btn give_feedback mt32\">\r\n            <ion-button class=\"round large\" fill=\"clear\" expand=\"full\">\r\n                <div class=\"figure\">\r\n                    <h1>Give Your Feedback</h1>\r\n                    <i class=\"material-icons\">arrow_right_alt</i>\r\n                </div>\r\n            </ion-button>\r\n        </div> -->\r\n    </div>\r\n    \r\n    \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/home/home-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer_app/home/home-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/customer_app/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/home/home.module.ts":
/*!**************************************************!*\
  !*** ./src/app/customer_app/home/home.module.ts ***!
  \**************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/customer_app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/customer_app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/home/home.page.scss":
/*!**************************************************!*\
  !*** ./src/app/customer_app/home/home.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer_app/home/home.page.ts":
/*!************************************************!*\
  !*** ./src/app/customer_app/home/home.page.ts ***!
  \************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");







var HomePage = /** @class */ (function () {
    function HomePage(router, formBuilder, alertCtrl, dbService, push) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.push = push;
        this.dashboardData = {};
        this.profileData = {};
    }
    HomePage.prototype.ngOnInit = function () {
        this.notification();
        this.onGetDashboardDataHandler();
    };
    HomePage.prototype.onGetDashboardDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('hello');
                this.dbService.onPostRequestHandler({}, 'dashboard/onGetDashboardData').subscribe(function (result) {
                    console.log(result);
                    _this.dashboardData = result;
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.onLogoutHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm',
                            message: 'Are You Sure, You Want To Logout ?',
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
                                        localStorage.removeItem('loginData');
                                        var routeURL = '/loginType';
                                        _this.router.navigate([routeURL]);
                                        _this.dbService.presentToast('Logout Successful!');
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
    HomePage.prototype.onGetProfileDataHandler = function () {
        var _this = this;
        var inputData = {};
        this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(function (result) {
            console.log(result);
            _this.profileData = result["loginData"];
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        console.log('notification');
        this.onGetDashboardDataHandler();
        this.onGetProfileDataHandler();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.notification();
    };
    HomePage.prototype.GoToProfile = function () {
        this.router.navigateByUrl('/customer/home/profile');
    };
    HomePage.prototype.GoToCallRequest = function () {
        this.router.navigateByUrl('/customer/home/callrequest');
    };
    HomePage.prototype.GoToDocuments = function () {
        this.router.navigateByUrl('/customer/home/mydocuments');
    };
    HomePage.prototype.notification = function () {
        var _this = this;
        // alert("test");
        console.log("bhanu 12345");
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        console.log(loginData);
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '590596859248'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: true
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            _this.dbService.onPostRequestHandler({ 'id': loginData.loginId, 'registration_id': registration.registrationId }, 'task/update_token').subscribe(function (r) {
                console.log(r);
            });
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] },
        { type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/customer_app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"],
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/technician_app/home/home-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/technician_app/home/home-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/technician_app/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/home/home.module.ts":
/*!****************************************************!*\
  !*** ./src/app/technician_app/home/home.module.ts ***!
  \****************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/technician_app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/technician_app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/home/home.page.scss":
/*!****************************************************!*\
  !*** ./src/app/technician_app/home/home.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/technician_app/home/home.page.ts":
/*!**************************************************!*\
  !*** ./src/app/technician_app/home/home.page.ts ***!
  \**************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");







var HomePage = /** @class */ (function () {
    function HomePage(route, formBuilder, alertCtrl, dbService, push) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.push = push;
        this.dashboardData = {};
        this.profileData = {};
    }
    HomePage.prototype.ngOnInit = function () {
        this.onGetDashboardDataHandler();
        this.notification();
    };
    HomePage.prototype.onGetDashboardDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('hello');
                this.dbService.onPostRequestHandler({}, 'dashboard/onGetDashboardData').subscribe(function (result) {
                    console.log(result);
                    _this.dashboardData = result;
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.onGetProfileDataHandler = function () {
        var _this = this;
        var inputData = {};
        this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(function (result) {
            console.log(result);
            _this.profileData = result["loginData"];
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.onGetProfileDataHandler();
        this.notification();
    };
    HomePage.prototype.notification = function () {
        var _this = this;
        // alert("test");
        console.log("bhanu 12345");
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        console.log(loginData);
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '590596859248'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: true
            },
            windows: {},
            browser: {
                pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            _this.dbService.onPostRequestHandler({ 'id': loginData.loginId, 'registration_id': registration.registrationId }, 'task/update_token').subscribe(function (r) {
                console.log(r);
            });
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] },
        { type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/technician_app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"],
            _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map