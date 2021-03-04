(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer_app-customertabs-customertabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customertabs/customertabs.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customertabs/customertabs.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appCustomertabsCustomertabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n    \r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n      <ion-tab-button [hidden]=\"loginData.loginStatus != 'Approved'\" (click)=\"tabChanged('home')\" tab=\"home\">\r\n          <ion-icon name=\"home\"></ion-icon>\r\n          <ion-label>HOME</ion-label>\r\n      </ion-tab-button>\r\n      \r\n      <ion-tab-button [hidden]=\"loginData.loginStatus != 'Approved'\" (click)=\"tabChanged('request')\" tab=\"request\">\r\n          <ion-icon name=\"alert\"></ion-icon>\r\n          <ion-label>REQUEST</ion-label>\r\n      </ion-tab-button>\r\n      \r\n      <ion-tab-button [hidden]=\"loginData.loginStatus != 'Approved'\" (click)=\"tabChanged('project')\" tab=\"projects\">\r\n          <ion-icon name=\"basket\"></ion-icon>\r\n          <ion-label>PROJECT</ion-label>\r\n      </ion-tab-button>\r\n      \r\n      <ion-tab-button (click)=\"tabChanged('aboutUs')\" tab=\"aboutus\">\r\n          <ion-icon name=\"globe\"></ion-icon>\r\n          <ion-label>ABOUT US</ion-label>\r\n      </ion-tab-button>\r\n  </ion-tab-bar>\r\n  \r\n</ion-tabs>\r\n";
    /***/
  },

  /***/
  "./src/app/customer_app/customertabs/customertabs-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/customer_app/customertabs/customertabs-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: CustomertabsPageRoutingModule */

  /***/
  function srcAppCustomer_appCustomertabsCustomertabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomertabsPageRoutingModule", function () {
      return CustomertabsPageRoutingModule;
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


    var _customertabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customertabs.page */
    "./src/app/customer_app/customertabs/customertabs.page.ts");

    const routes = [{
      path: '',
      redirectTo: '/customer/home',
      pathMatch: 'full'
    }, {
      path: '',
      component: _customertabs_page__WEBPACK_IMPORTED_MODULE_3__["CustomertabsPage"],
      children: [{
        path: 'home',
        loadChildren: () => __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ../home/home.module */
        "./src/app/customer_app/home/home.module.ts")).then(m => m.HomePageModule)
      }, {
        path: 'home/profile',
        loadChildren: () => __webpack_require__.e(
        /*! import() | customerprofile-customerprofile-module */
        "customerprofile-customerprofile-module").then(__webpack_require__.bind(null,
        /*! ../customerprofile/customerprofile.module */
        "./src/app/customer_app/customerprofile/customerprofile.module.ts")).then(m => m.CustomerprofilePageModule)
      }, {
        path: 'home/callrequest',
        loadChildren: () => __webpack_require__.e(
        /*! import() | callrequest-callrequest-module */
        "callrequest-callrequest-module").then(__webpack_require__.bind(null,
        /*! ../callrequest/callrequest.module */
        "./src/app/customer_app/callrequest/callrequest.module.ts")).then(m => m.CallrequestPageModule)
      }, {
        path: 'home/mydocuments',
        loadChildren: () => __webpack_require__.e(
        /*! import() | customerdocuments-customerdocuments-module */
        "customerdocuments-customerdocuments-module").then(__webpack_require__.bind(null,
        /*! ..//customerdocuments/customerdocuments.module */
        "./src/app/customer_app/customerdocuments/customerdocuments.module.ts")).then(m => m.CustomerdocumentsPageModule)
      }, {
        path: 'menu/documents/detail/:documentId/:documentTitle',
        loadChildren: () => __webpack_require__.e(
        /*! import() | customer-document-detail-customer-document-detail-module */
        "customer-document-detail-customer-document-detail-module").then(__webpack_require__.bind(null,
        /*! ../customer-document-detail/customer-document-detail.module */
        "./src/app/customer_app/customer-document-detail/customer-document-detail.module.ts")).then(m => m.CustomerDocumentDetailModule)
      }, // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Service Request Inner Page Routing Start..........
      // ============= +++++++
      // ============= +++++++
      {
        path: 'request',
        loadChildren: () => Promise.all(
        /*! import() | service_request-request-request-module */
        [__webpack_require__.e("default~complaints-complaintlist-complaintlist-module~myprojects-myprojects-module~service_request-r~738493b2"), __webpack_require__.e("service_request-request-request-module")]).then(__webpack_require__.bind(null,
        /*! ../service_request/request/request.module */
        "./src/app/customer_app/service_request/request/request.module.ts")).then(m => m.RequestPageModule)
      }, {
        path: 'escalationdetail',
        loadChildren: () => Promise.resolve().then(__webpack_require__.bind(null,
        /*! ../escalationdetail/escalationdetail.module */
        "./src/app/customer_app/escalationdetail/escalationdetail.module.ts")).then(m => m.EscalationdetailPageModule)
      }, {
        path: 'request/detail/:taskId',
        loadChildren: () => __webpack_require__.e(
        /*! import() | service_request-request-details-request-details-module */
        "service_request-request-details-request-details-module").then(__webpack_require__.bind(null,
        /*! ../service_request/request-details/request-details.module */
        "./src/app/customer_app/service_request/request-details/request-details.module.ts")).then(m => m.RequestDetailsPageModule)
      }, {
        path: 'request/spareparts/:taskId/:taskNo/:taskStatus',
        loadChildren: () => __webpack_require__.e(
        /*! import() | service_request-com-spareparts-com-spareparts-module */
        "service_request-com-spareparts-com-spareparts-module").then(__webpack_require__.bind(null,
        /*! ../service_request/com-spareparts/com-spareparts.module */
        "./src/app/customer_app/service_request/com-spareparts/com-spareparts.module.ts")).then(m => m.ComSparepartsPageModule)
      }, {
        path: 'request/addrequest',
        loadChildren: () => __webpack_require__.e(
        /*! import() | service_request-addrequest-addrequest-module */
        "service_request-addrequest-addrequest-module").then(__webpack_require__.bind(null,
        /*! ../service_request/addrequest/addrequest.module */
        "./src/app/customer_app/service_request/addrequest/addrequest.module.ts")).then(m => m.AddrequestPageModule)
      }, {
        path: 'request/giveyourfeedback/:taskId/:userId',
        loadChildren: () => __webpack_require__.e(
        /*! import() | service_request-addfeedback-addfeedback-module */
        "service_request-addfeedback-addfeedback-module").then(__webpack_require__.bind(null,
        /*! ../service_request/addfeedback/addfeedback.module */
        "./src/app/customer_app/service_request/addfeedback/addfeedback.module.ts")).then(m => m.AddfeedbackPageModule)
      }, // ============= +++++++
      // ============= +++++++
      // ============= +++++++ Service Request Inner Page Routing End..........
      // ============= +++++++
      // ============= +++++++
      {
        path: 'projects',
        loadChildren: () => Promise.all(
        /*! import() | myprojects-myprojects-module */
        [__webpack_require__.e("default~complaints-complaintlist-complaintlist-module~myprojects-myprojects-module~service_request-r~738493b2"), __webpack_require__.e("myprojects-myprojects-module")]).then(__webpack_require__.bind(null,
        /*! ../myprojects/myprojects.module */
        "./src/app/customer_app/myprojects/myprojects.module.ts")).then(m => m.MyprojectsPageModule)
      }, {
        path: 'projects/detail/:projectId',
        loadChildren: () => __webpack_require__.e(
        /*! import() | projectdetail-projectdetail-module */
        "projectdetail-projectdetail-module").then(__webpack_require__.bind(null,
        /*! ../projectdetail/projectdetail.module */
        "./src/app/customer_app/projectdetail/projectdetail.module.ts")).then(m => m.ProjectdetailPageModule)
      }, {
        path: 'aboutus',
        loadChildren: () => __webpack_require__.e(
        /*! import() | aboutus-aboutus-module */
        "aboutus-aboutus-module").then(__webpack_require__.bind(null,
        /*! ../aboutus/aboutus.module */
        "./src/app/customer_app/aboutus/aboutus.module.ts")).then(m => m.AboutusPageModule)
      }, {
        path: 'customer-center',
        loadChildren: () => __webpack_require__.e(
        /*! import() | customer-center-customer-center-module */
        "customer-center-customer-center-module").then(__webpack_require__.bind(null,
        /*! ../customer-center/customer-center.module */
        "./src/app/customer_app/customer-center/customer-center.module.ts")).then(m => m.CustomerCenterPageModule)
      }, {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }]
    }];
    let CustomertabsPageRoutingModule = class CustomertabsPageRoutingModule {};
    CustomertabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomertabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/customertabs/customertabs.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/customertabs/customertabs.module.ts ***!
    \******************************************************************/

  /*! exports provided: CustomertabsPageModule */

  /***/
  function srcAppCustomer_appCustomertabsCustomertabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomertabsPageModule", function () {
      return CustomertabsPageModule;
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


    var _customertabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customertabs-routing.module */
    "./src/app/customer_app/customertabs/customertabs-routing.module.ts");
    /* harmony import */


    var _customertabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customertabs.page */
    "./src/app/customer_app/customertabs/customertabs.page.ts");

    let CustomertabsPageModule = class CustomertabsPageModule {};
    CustomertabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customertabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomertabsPageRoutingModule"]],
      declarations: [_customertabs_page__WEBPACK_IMPORTED_MODULE_6__["CustomertabsPage"]]
    })], CustomertabsPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/customertabs/customertabs.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/customertabs/customertabs.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appCustomertabsCustomertabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9jdXN0b21lcnRhYnMvY3VzdG9tZXJ0YWJzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer_app/customertabs/customertabs.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customer_app/customertabs/customertabs.page.ts ***!
    \****************************************************************/

  /*! exports provided: CustomertabsPage */

  /***/
  function srcAppCustomer_appCustomertabsCustomertabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomertabsPage", function () {
      return CustomertabsPage;
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

    let CustomertabsPage = class CustomertabsPage {
      constructor(route) {
        this.route = route;
        this.loginData = {};
      }

      ngOnInit() {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        console.log(this.loginData);

        if (this.loginData.loginStatus && this.loginData.loginStatus != 'Approved') {
          this.route.navigateByUrl('/customer/aboutus');
        }
      }

      tabChanged(targetType) {
        console.log('helloooo');

        if (targetType == 'home') {
          this.route.navigateByUrl('/customer/home');
        } else if (targetType == 'request') {
          this.route.navigateByUrl('/customer/request');
        } else if (targetType == 'project') {
          this.route.navigateByUrl('/customer/projects');
        } else if (targetType == 'aboutUs') {
          this.route.navigateByUrl('/customer/aboutus');
        }
      }

    };

    CustomertabsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    CustomertabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customertabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customertabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customertabs/customertabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customertabs.page.scss */
      "./src/app/customer_app/customertabs/customertabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], CustomertabsPage);
    /***/
  }
}]);
//# sourceMappingURL=customer_app-customertabs-customertabs-module-es5.js.map