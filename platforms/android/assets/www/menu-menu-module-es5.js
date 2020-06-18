(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/menu/menu.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/menu/menu.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"dashboard_cnt\">\r\n        <div class=\"cs-header\" padding>            \r\n            <div class=\"profile-segment mt66\">\r\n                \r\n                <div class=\"pr-icon\">\r\n                    \r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.userDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"info\">\r\n                    <ion-text color=\"light\">{{profileData.name}}<br><span>{{profileData.mobile}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"cs-navigations mt32\">\r\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"GoToProfile()\">\r\n            <div class=\"figure\">\r\n                <ion-text><img src=\"assets/icon/my_profile.svg\" alt=\"\">My Profile</ion-text>\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n            </div>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"GoToDocuments()\">\r\n            <div class=\"figure\">\r\n                <ion-text><img src=\"assets/icon/user_manual.svg\" alt=\"\">Documents</ion-text>\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n            </div>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" color=\"dark\" [routerLink]=\"['/forgotpassword']\">\r\n            <div class=\"figure\">\r\n                <ion-text><img src=\"assets/icon/change_password.svg\" alt=\"\">Change Password</ion-text>\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>\r\n            </div>\r\n        </ion-button>\r\n        <ion-button (click)=\"onLogoutHandler()\" fill=\"clear\" color=\"danger\">\r\n            <div class=\"figure\">\r\n                <ion-text><img src=\"assets/icon/logout.svg\" alt=\"\">LOG OUT</ion-text>\r\n                <i class=\"material-icons\">keyboard_arrow_right</i>  \r\n            </div>\r\n        </ion-button>\r\n    </div>\r\n    \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/menu/menu-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/technician_app/menu/menu-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppTechnician_appMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/technician_app/menu/menu.page.ts");

    const routes = [{
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }];
    let MenuPageRoutingModule = class MenuPageRoutingModule {};
    MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/menu/menu.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/technician_app/menu/menu.module.ts ***!
    \****************************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppTechnician_appMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/technician_app/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/technician_app/menu/menu.page.ts");

    let MenuPageModule = class MenuPageModule {};
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/menu/menu.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/technician_app/menu/menu.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/technician_app/menu/menu.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/technician_app/menu/menu.page.ts ***!
    \**************************************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppTechnician_appMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");

    let MenuPage = class MenuPage {
      constructor(router, alertCtrl, dbService) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.profileData = {};
      }

      ngOnInit() {}

      onGetProfileDataHandler(showLaoding) {
        const inputData = {};

        if (showLaoding) {
          this.dbService.presentLoader();
        }

        this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(result => {
          console.log(result);

          if (showLaoding) {
            this.dbService.dismissLoader();
          }

          this.profileData = result["loginData"];
        });
      }

      ionViewWillEnter() {
        this.onGetProfileDataHandler(false);
      }

      GoToProfile() {
        this.router.navigateByUrl('/technicians/menu/profile');
      }

      GoToDocuments() {
        this.router.navigateByUrl('/technicians/menu/documents');
      }

      onLogoutHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertCtrl.create({
            header: 'Confirm',
            message: 'Are You Sure, You Want To Logout ?',
            buttons: [{
              text: 'No',
              role: 'cancel',
              handler: () => {
                console.log('No clicked');
              }
            }, {
              text: 'Yes',
              handler: () => {
                console.log('Yes clicked');
                localStorage.removeItem('loginData');
                const routeURL = '/loginType';
                this.router.navigate([routeURL]);
                this.dbService.presentToast('Logout Successful!');
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    MenuPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]
    }];

    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/menu/menu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/technician_app/menu/menu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]])], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map