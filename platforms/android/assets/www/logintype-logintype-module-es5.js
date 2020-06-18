(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logintype-logintype-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logintype/logintype.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logintype/logintype.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogintypeLogintypePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"login-container\">\r\n        <div class=\"logo\"><img src=\"../../assets/img/logo.jpg\" alt=\"\"></div>\r\n        \r\n        <div class=\"form-container\">\r\n            <div class=\"head\">\r\n                <div class=\"heading\">\r\n                    <h1>Select User Type</h1>\r\n                </div>\r\n                <p>Please Select Login Type <ion-text> Service Engineer </ion-text> OR <ion-text>Customer</ion-text>.</p>\r\n            </div>\r\n            \r\n            <div class=\"input-container\">\r\n                <div class=\"lgtype\">\r\n                    \r\n                    <ion-radio-group>\r\n                        \r\n                        <ion-item (click)=\"onGoToLoginPageHandler('Technician')\">\r\n                            <div class=\"figure\">\r\n                                <ion-radio slot=\"start\" value=\"Technician\"></ion-radio>\r\n                                <div class=\"lg-icon\"><img src=\"assets/icon/service_eng.svg\" alt=\"\"></div>\r\n                                <h1>Service Engineer</h1>\r\n                            </div>\r\n                        </ion-item>\r\n                        <ion-item (click) = \"onGoToLoginPageHandler('Customer')\" >\r\n                            <div class=\"figure\">\r\n                                <ion-radio slot=\"start\" value=\"Customer\"></ion-radio>\r\n                                <div class=\"lg-icon\"><img src=\"assets/icon/customer.svg\" alt=\"\"></div>\r\n                                <h1>Customer</h1>\r\n                            </div>\r\n                        </ion-item>\r\n                    </ion-radio-group>\r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        \r\n    </div>\r\n    \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/logintype/logintype-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/logintype/logintype-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: LogintypePageRoutingModule */

  /***/
  function srcAppLogintypeLogintypeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogintypePageRoutingModule", function () {
      return LogintypePageRoutingModule;
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


    var _logintype_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logintype.page */
    "./src/app/logintype/logintype.page.ts");

    const routes = [{
      path: '',
      component: _logintype_page__WEBPACK_IMPORTED_MODULE_3__["LogintypePage"]
    }];
    let LogintypePageRoutingModule = class LogintypePageRoutingModule {};
    LogintypePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LogintypePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/logintype/logintype.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/logintype/logintype.module.ts ***!
    \***********************************************/

  /*! exports provided: LogintypePageModule */

  /***/
  function srcAppLogintypeLogintypeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogintypePageModule", function () {
      return LogintypePageModule;
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


    var _logintype_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logintype-routing.module */
    "./src/app/logintype/logintype-routing.module.ts");
    /* harmony import */


    var _logintype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./logintype.page */
    "./src/app/logintype/logintype.page.ts");

    let LogintypePageModule = class LogintypePageModule {};
    LogintypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logintype_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogintypePageRoutingModule"]],
      declarations: [_logintype_page__WEBPACK_IMPORTED_MODULE_6__["LogintypePage"]]
    })], LogintypePageModule);
    /***/
  },

  /***/
  "./src/app/logintype/logintype.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/logintype/logintype.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogintypeLogintypePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ludHlwZS9sb2dpbnR5cGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/logintype/logintype.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/logintype/logintype.page.ts ***!
    \*********************************************/

  /*! exports provided: LogintypePage */

  /***/
  function srcAppLogintypeLogintypePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogintypePage", function () {
      return LogintypePage;
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

    let LogintypePage = class LogintypePage {
      constructor(route) {
        this.route = route;
        this.data = {};
      }

      ngOnInit() {}

      onGoToLoginPageHandler(targetedPage = '') {
        console.log('**** DATA ****');
        console.log(this.data);
        console.log(targetedPage);
        const loginData = {
          loginType: targetedPage,
          loginId: '',
          loginName: ''
        };
        localStorage.setItem('loginData', JSON.stringify(loginData));
        console.log(JSON.parse(localStorage.getItem('loginData')));

        if (targetedPage == 'Technician') {
          this.route.navigate(['/techlogin']);
        }

        if (targetedPage == 'Customer') {
          this.route.navigate(['/customerlogin']);
        }
      }

      ionViewDidEnter() {
        console.log(this.data);
        this.data.loginType = false;
      }

      test(event) {
        console.log(event);
      }

    };

    LogintypePage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    LogintypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logintype',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logintype.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logintype/logintype.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logintype.page.scss */
      "./src/app/logintype/logintype.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LogintypePage);
    /***/
  }
}]);
//# sourceMappingURL=logintype-logintype-module-es5.js.map