(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-addfeedback-addfeedback-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appService_requestAddfeedbackAddfeedbackPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>Give Your Feedback</ion-title>\n                </div>\n            </div>\n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <div class=\"cs-ion-content pt0\" padding>\n            <div *ngIf=\"taskData && taskData.task_no\" class=\"complaints\">\n                <div class=\"figure\">\n                    <div class=\"top\">\n                        <div class=\"cs-left\">\n                            <h1>#COM-{{taskData.task_no}} <ion-text>({{taskData.days}} Days)</ion-text></h1>\n                        </div>\n                        <div class=\"cs-right\">\n                            <ion-text>{{taskData.dateCreated}}  |  {{taskData.timeCreated}}</ion-text>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            \n            <div class=\"gfeedback ion-padding\">\n                <div *ngIf=\"userData && userData.name\" class=\"cnt-info\">\n                    <div class=\"cs-left\">\n                        <div class=\"f-alpha\">{{userData.name[0]}}</div>\n                        <div class=\"names\">\n                            <h1>{{userData.name}}</h1>\n                            <ion-text>+91 {{userData.mobile}}</ion-text>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"common_form inner_page\">\n                    <div class=\"stars\">\n                        <ion-button  [ngClass]=\"selectedRating >= 1 ? 'fillColor' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(1)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\n\n                        <ion-button [ngClass]=\"selectedRating >= 2 ? 'fillColor' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(2)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\n\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating >= 3 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(3)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\n\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating >= 4 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(4)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\n\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating == 5 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(5)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\n                    </div>\n                    \n                    <ion-item class=\"h70\">\n                        <ion-textarea [(ngModel)]=\"data.description\" placeholder=\"Description\"></ion-textarea>\n                    </ion-item>\n                    \n                    <div class=\"cs-btn mt32\" text-right>\n                        <ion-button (click)=\"onSaveFeedbackHandler()\" class=\"success min w90\">SAVE</ion-button>\n                    </div>\n                </div>\n                \n            </div>\n            \n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addfeedback/addfeedback-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addfeedback/addfeedback-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: AddfeedbackPageRoutingModule */

  /***/
  function srcAppCustomer_appService_requestAddfeedbackAddfeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfeedbackPageRoutingModule", function () {
      return AddfeedbackPageRoutingModule;
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


    var _addfeedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addfeedback.page */
    "./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts");

    const routes = [{
      path: '',
      component: _addfeedback_page__WEBPACK_IMPORTED_MODULE_3__["AddfeedbackPage"]
    }];
    let AddfeedbackPageRoutingModule = class AddfeedbackPageRoutingModule {};
    AddfeedbackPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddfeedbackPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addfeedback/addfeedback.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addfeedback/addfeedback.module.ts ***!
    \********************************************************************************/

  /*! exports provided: AddfeedbackPageModule */

  /***/
  function srcAppCustomer_appService_requestAddfeedbackAddfeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfeedbackPageModule", function () {
      return AddfeedbackPageModule;
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


    var _addfeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addfeedback-routing.module */
    "./src/app/customer_app/service_request/addfeedback/addfeedback-routing.module.ts");
    /* harmony import */


    var _addfeedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addfeedback.page */
    "./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts");

    let AddfeedbackPageModule = class AddfeedbackPageModule {};
    AddfeedbackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addfeedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddfeedbackPageRoutingModule"]],
      declarations: [_addfeedback_page__WEBPACK_IMPORTED_MODULE_6__["AddfeedbackPage"]]
    })], AddfeedbackPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appService_requestAddfeedbackAddfeedbackPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvYWRkZmVlZGJhY2svYWRkZmVlZGJhY2sucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addfeedback/addfeedback.page.ts ***!
    \******************************************************************************/

  /*! exports provided: AddfeedbackPage */

  /***/
  function srcAppCustomer_appService_requestAddfeedbackAddfeedbackPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddfeedbackPage", function () {
      return AddfeedbackPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");

    let AddfeedbackPage = class AddfeedbackPage {
      constructor(popoverController, route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.taskId = '';
        this.userId = '';
        this.data = {};
        this.userData = {};
        this.taskData = {};
        this.selectedRating = '';
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          this.userId = params.userId;
          this.onGetUserDetailHandler();
          this.onGetTaskDetailHandler();
          console.log(this.taskId);
          console.log(this.userId);
        });
      }

      ngOnInit() {}

      onGetUserDetailHandler() {
        this.dbService.presentLoader();
        const inputData = {
          userId: this.userId
        };
        this.dbService.onPostRequestHandler(inputData, 'login/onGetTechnicianDetail').subscribe(result => {
          console.log(result);
          this.dbService.dismissLoader();
          this.userData = result["userData"];
        });
      }

      onStarClickHandler(rating) {
        this.selectedRating = rating;
      }

      onSaveFeedbackHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (!this.selectedRating) {
            this.dbService.onShowAlertMessage('Error', 'Rating Required!');
            return;
          }

          if (!this.data.description) {
            this.dbService.onShowAlertMessage('Error', 'Description Required!');
            return;
          }

          console.log('hello');
          console.log(this.data);
          const alert = yield this.alertCtrl.create({
            header: 'Confirm',
            message: 'Are You Sure, You Want To Save Feedback ?',
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
                const inputData = {
                  taskId: this.taskId
                };
                inputData["rating"] = this.selectedRating;
                inputData["description"] = this.data.description;
                this.dbService.presentLoader();
                this.dbService.onPostRequestHandler(inputData, 'customer/saveFeedbackData').subscribe(result => {
                  console.log(result);
                  this.dbService.dismissLoader();
                  this.data.status = '';
                  this.route.navigate(['/customer/request']);
                  this.dbService.presentToast('Feedback Saved Successfully!');
                });
              }
            }]
          });
          yield alert.present();
        });
      }

      onGetTaskDetailHandler() {
        const inputData = {
          taskId: this.taskId
        };
        this.dbService.onPostRequestHandler(inputData, 'task/onGetFeedbackTaskData').subscribe(result => {
          console.log(result);
          this.taskData = result["taskData"];
        });
      }

    };

    AddfeedbackPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
    }];

    AddfeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addfeedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addfeedback.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addfeedback.page.scss */
      "./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], AddfeedbackPage);
    /***/
  }
}]);
//# sourceMappingURL=service_request-addfeedback-addfeedback-module-es5.js.map