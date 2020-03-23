(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myprojects-myprojects-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/myprojects/myprojects.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/myprojects/myprojects.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appMyprojectsMyprojectsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\n    \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\">\n        <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n</ion-refresher>\n\n<div class=\"cs-main-container\">\n    <div class=\"custome-head\">\n        <div class=\"cs-ion-header\">\n            <div class=\"cs-left\">\n                <ion-title class=\"pl0\">My Project's</ion-title>\n            </div>\n            \n            <div class=\"cs-right\">\n                <ion-button (click)=\"onSearchClickHandler()\"><ion-icon name=\"search\"></ion-icon></ion-button>\n            </div>\n            \n            <div [ngClass]=\"isSearchOptionActive ? 'active' : ''\" class=\"search-filetr\">\n                \n                <ion-searchbar [(ngModel)]=\"data.searchData\" (ngModelChange)=\"onUpdateCurrentPageHandler(); onGetProjectListHandler(false, '')\" id=\"searchData\"></ion-searchbar>\n                \n                <a (click) = \"data.searchData = ''; isSearchOptionActive = false; onUpdateCurrentPageHandler(); onGetProjectListHandler(false, '')\"  class=\"cancel\">Cancel</a>\n                \n            </div>\n        </div>\n        <div class=\"cs-ion-hf\"></div>\n    </div>\n    \n    <div class=\"cs-ion-content pt0\" padding>\n        \n        <div  (click)=\"GoToDetail(row.id)\" *ngFor=\"let row of projectList\" class=\"complaints product-list mt20\">\n            \n            <div class=\"figure\">\n                \n                <div class=\"cnt-info\">\n                    <div class=\"cs-left\">\n                        <div class=\"f-alpha\">{{row.project_name[0]}}</div>\n                        <div class=\"names\">\n                            <h1>{{row.project_name}}</h1>\n                            <ion-text>{{row.street}} {{row.state_name}}, {{row.district_name}}, {{row.city}}, {{row.pincode}}</ion-text>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"one-two-one three\">\n                    <div class=\"cs-box\">\n                        <div>\n                            <ion-text>Contact Person</ion-text>\n                            <ion-text>{{row.contactData ? row.contactData.length : 0}}</ion-text>\n                        </div>\n                    </div>\n                    <div class=\"cs-box\">\n                        <div>\n                            <ion-text>Total Products</ion-text>\n                            <ion-text>{{row.productData.length}}</ion-text>\n                        </div>\n                    </div>\n                    <div class=\"cs-box\">\n                        <div>\n                            <ion-text>Service Request</ion-text>\n                            <ion-text>{{row.totalServiceRequest}} </ion-text>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div *ngIf=\"!isRequestInProcess && projectList.length == 0\" class=\"no-data\">\n            <img src=\"assets/icon/no_found.svg\">\n            <p>Data Not Found!</p>\n        </div>\n        \n    </div>\n</div>\n\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"doCheckForMoreData\" (ionInfinite)=\"onGetProjectListHandler(false, $event)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n</ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/customer_app/myprojects/myprojects-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/customer_app/myprojects/myprojects-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: MyprojectsPageRoutingModule */

  /***/
  function srcAppCustomer_appMyprojectsMyprojectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyprojectsPageRoutingModule", function () {
      return MyprojectsPageRoutingModule;
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


    var _myprojects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./myprojects.page */
    "./src/app/customer_app/myprojects/myprojects.page.ts");

    const routes = [{
      path: '',
      component: _myprojects_page__WEBPACK_IMPORTED_MODULE_3__["MyprojectsPage"]
    }];
    let MyprojectsPageRoutingModule = class MyprojectsPageRoutingModule {};
    MyprojectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyprojectsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/myprojects/myprojects.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/customer_app/myprojects/myprojects.module.ts ***!
    \**************************************************************/

  /*! exports provided: MyprojectsPageModule */

  /***/
  function srcAppCustomer_appMyprojectsMyprojectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyprojectsPageModule", function () {
      return MyprojectsPageModule;
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


    var _myprojects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./myprojects-routing.module */
    "./src/app/customer_app/myprojects/myprojects-routing.module.ts");
    /* harmony import */


    var _myprojects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myprojects.page */
    "./src/app/customer_app/myprojects/myprojects.page.ts");

    let MyprojectsPageModule = class MyprojectsPageModule {};
    MyprojectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myprojects_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyprojectsPageRoutingModule"]],
      declarations: [_myprojects_page__WEBPACK_IMPORTED_MODULE_6__["MyprojectsPage"]]
    })], MyprojectsPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/myprojects/myprojects.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/customer_app/myprojects/myprojects.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appMyprojectsMyprojectsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9teXByb2plY3RzL215cHJvamVjdHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer_app/myprojects/myprojects.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/customer_app/myprojects/myprojects.page.ts ***!
    \************************************************************/

  /*! exports provided: MyprojectsPage */

  /***/
  function srcAppCustomer_appMyprojectsMyprojectsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyprojectsPage", function () {
      return MyprojectsPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);

    let MyprojectsPage = class MyprojectsPage {
      constructor(router, formBuilder, alertCtrl, dbService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.projectList = [];
        this.isSearchOptionActive = false;
        this.searchData = {};
        this.data = {};
        this.doCheckForMoreData = true;
        this.isRequestInProcess = true;
        this.currentPage = 1;
        this.pageSize = 2;
      }

      ngOnInit() {
        this.onGetProjectListHandler(true, '');
      }

      onSearchClickHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.isSearchOptionActive = true;
          setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_6__('#searchData').focus();
          }, 2000);
        });
      }

      onGetProjectListHandler(showLoading, infiniteScroll) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('hello');
          const inputData = {
            start: this.currentPage,
            pageLimit: this.pageSize
          };
          inputData["searchData"] = this.data.searchData;

          if (showLoading) {
            this.dbService.presentLoader();
          }

          this.isRequestInProcess = true;
          this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe(result => {
            console.log(result);

            if (showLoading) {
              setTimeout(() => {
                this.dbService.dismissLoader();
              }, 2000);
            }

            let resultData = result["projectData"];
            console.log(resultData);

            if (!resultData || resultData == null || resultData.length == 0) {
              resultData = [];
              this.doCheckForMoreData = false;
            }

            if (this.currentPage == 1) {
              this.projectList = resultData;
            } else {
              for (let index = 0; index < resultData.length; index++) {
                const isIndex = this.projectList.findIndex(row => row.id == resultData[index].id);

                if (isIndex === -1) {
                  this.projectList.push(resultData[index]);
                }
              }
            }

            this.currentPage += 1;

            if (infiniteScroll) {
              infiniteScroll.target.complete();
            }

            setTimeout(() => {
              this.isRequestInProcess = false;
            }, 1000);
          });
        });
      }

      ionRefresh(event) {
        console.log('Pull Event Triggered!');
        setTimeout(() => {
          console.log('Async operation has ended');
          this.data.searchData = '';
          this.searchData = {};
          this.onUpdateCurrentPageHandler();
          this.onGetProjectListHandler(true, '');
          event.target.complete();
        }, 2000);
      }

      onUpdateCurrentPageHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          setTimeout(() => {
            this.doCheckForMoreData = true;
          }, 1000);
          this.currentPage = 1;
        });
      }

      GoToDetail(projectId) {
        this.router.navigateByUrl('/customer/projects/detail/' + projectId);
      }

    };

    MyprojectsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
    }];

    MyprojectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myprojects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myprojects.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/myprojects/myprojects.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myprojects.page.scss */
      "./src/app/customer_app/myprojects/myprojects.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], MyprojectsPage);
    /***/
  }
}]);
//# sourceMappingURL=myprojects-myprojects-module-es5.js.map