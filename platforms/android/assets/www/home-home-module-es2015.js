(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/home/home.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/home/home.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"dashboard_cnt\">\r\n        <div class=\"cs-header pb0\" padding>\r\n            <div class=\"logo\">\r\n                <img src=\"assets/img/logo.jpg\" alt=\"\">\r\n                <ion-button (click)=\"onLogoutHandler()\" color=\"danger\" fill=\"clear\" class=\"w45 h45 font14 mr5\"><ion-icon name=\"power\"></ion-icon></ion-button>\r\n            </div>\r\n            \r\n            <div class=\"profile-segment mt16\" (click)=\"GoToProfile()\">\r\n                <div class=\"pr-icon\">\r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"dashboardData && dashboardData['loginData']\" class=\"info\">\r\n                    <ion-text color=\"light\">{{dashboardData['loginData']['company_name']}}<br><span>{{dashboardData['loginData']['cust_code']}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"dashboard_container\">\r\n        <div class=\"btn-group\">\r\n            <a class=\"center-btn\" href=\"tel: {{dashboardData.customerEmergencyNumber}}\">\r\n                <img src=\"assets/img/e-call.svg\" alt=\"\">\r\n                Emergency Contact\r\n            </a>\r\n            <div class=\"grid-btn\">\r\n                <button routerLink=\"/customer/request\">\r\n                    <img src=\"assets/img/info.svg\" alt=\"\">\r\n                    Service Request\r\n                </button>\r\n                <button routerLink=\"/customer/request\">\r\n                    <img src=\"assets/img/gear.svg\" alt=\"\">\r\n                    Commissioning Request\r\n                </button>\r\n                <button (click)=\"GoToCallRequest()\">\r\n                    <img src=\"assets/img/call.svg\" alt=\"\">\r\n                    Send Call Request\r\n                </button>\r\n                <button (click)=\"GoToDocuments()\">\r\n                    <img src=\"assets/img/document.svg\" alt=\"\">\r\n                    <ion-text> View Document</ion-text>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"cs-btn\">\r\n        <ion-button class=\"after-img\" fill=\"clear\" routerLink=\"/customer/customer-center\">\r\n            <div class=\"figure\">\r\n                <ion-text>ESCALATION MATRIX</ion-text>\r\n                <!-- <ion-text>Our Products</ion-text> -->\r\n            </div>\r\n            <i class=\"material-icons\">arrow_right_alt</i>\r\n        </ion-button>\r\n    </div>\r\n\r\n    <div class=\"h40\"></div>\r\n</ion-content>\r\n\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" size=\"small\"  (click)=\"GoToEscalation()\" style=\"display: none;\">\r\n    <ion-fab-button class=\"h50 w50 transparent\">\r\n        <!--            routerLink=\"/customer/escalationdetail\"-->\r\n        \r\n        <img  src=\"assets/img/details.svg\">\r\n    </ion-fab-button>\r\n</ion-fab>");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/customer_app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/customer_app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/customer_app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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



/***/ }),

/***/ "./src/app/customer_app/home/home.page.scss":
/*!**************************************************!*\
  !*** ./src/app/customer_app/home/home.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/push/ngx */ "./node_modules/@ionic-native/push/ngx/index.js");







let HomePage = class HomePage {
    constructor(router, formBuilder, alertCtrl, dbService, push) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.push = push;
        this.dashboardData = {};
        this.profileData = {};
    }
    ngOnInit() {
        this.notification();
        this.onGetDashboardDataHandler();
    }
    onGetDashboardDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('hello');
            this.dbService.onPostRequestHandler({}, 'dashboard/onGetDashboardData').subscribe((result) => {
                console.log(result);
                this.dashboardData = result;
                console.log(this.dashboardData);
            });
        });
    }
    onLogoutHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: 'Are You Sure, You Want To Logout ?',
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
                            localStorage.removeItem('loginData');
                            const routeURL = '/loginType';
                            this.router.navigate([routeURL]);
                            this.dbService.presentToast('Logout Successful!');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onGetProfileDataHandler() {
        const inputData = {};
        this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe((result) => {
            console.log(result);
            this.profileData = result[`loginData`];
        });
    }
    ionViewDidEnter() {
        console.log('notification');
        this.onGetDashboardDataHandler();
        this.onGetProfileDataHandler();
    }
    ionViewWillEnter() {
        this.notification();
    }
    GoToProfile() {
        this.router.navigateByUrl('/customer/home/profile');
    }
    GoToCallRequest() {
        this.router.navigateByUrl('/customer/home/callrequest');
    }
    GoToDocuments() {
        this.router.navigateByUrl('/customer/home/mydocuments');
    }
    notification() {
        // alert("test");
        console.log('bhanu 12345');
        const loginData = JSON.parse(localStorage.getItem('loginData'));
        console.log(loginData);
        this.push.hasPermission()
            .then((res) => {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        const options = {
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
        const pushObject = this.push.init(options);
        pushObject.on('notification').subscribe((notification) => console.log('Received a notification', notification));
        pushObject.on('registration').subscribe((registration) => {
            console.log('Device registered', registration);
            // tslint:disable-next-line:max-line-length
            this.dbService.onPostRequestHandler({ id: loginData.loginId, registration_id: registration.registrationId }, 'task/update_token').subscribe(r => {
                console.log(r);
            });
        });
        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
    GoToEscalation() {
        // console.log('hellllllooooooooo');
        this.router.navigateByUrl('/customer/escalationdetail');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] },
    { type: _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/customer_app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"],
        _ionic_native_push_ngx__WEBPACK_IMPORTED_MODULE_6__["Push"]])
], HomePage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/technician_app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/technician_app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/technician_app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
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



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map