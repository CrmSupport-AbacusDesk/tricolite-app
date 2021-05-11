function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Give Your Feedback</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div *ngIf=\"taskData && taskData.task_no\" class=\"complaints\">\r\n                <div class=\"figure\">\r\n                    <div class=\"top\">\r\n                        <div class=\"cs-left\">\r\n                            <h1>#SR-{{taskData.task_no}} <ion-text>({{taskData.days}} Days)</ion-text></h1>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{taskData.dateCreated}}  |  {{taskData.timeCreated}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"gfeedback ion-padding\">\r\n                <div *ngIf=\"userData && userData.name\" class=\"cnt-info\">\r\n                    <div class=\"cs-left\">\r\n                        <div class=\"f-alpha\">{{userData.name[0]}}</div>\r\n                        <div class=\"names\">\r\n                            <h1>{{userData.name}}</h1>\r\n                            <ion-text>+91 {{userData.mobile}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"stars\">\r\n                        <ion-button  [ngClass]=\"selectedRating >= 1 ? 'fillColor' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(1)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button [ngClass]=\"selectedRating >= 2 ? 'fillColor' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(2)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating >= 3 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(3)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating >= 4 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(4)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n\r\n                        <ion-button fill=\"clear\" [ngClass]=\"selectedRating == 5 ? 'fillColor' : ''\" (click)=\"onStarClickHandler(5)\" color=\"dark\"><ion-icon name=\"star-outline\"></ion-icon></ion-button>\r\n                    </div>\r\n                    \r\n                    <ion-item class=\"h70\">\r\n                        <ion-textarea [(ngModel)]=\"data.description\" placeholder=\"Description\"></ion-textarea>\r\n                    </ion-item>\r\n                    \r\n                    <div class=\"cs-btn mt32\" text-right>\r\n                        <ion-button (click)=\"onSaveFeedbackHandler()\" class=\"success min w90\">SAVE</ion-button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
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

    var routes = [{
      path: '',
      component: _addfeedback_page__WEBPACK_IMPORTED_MODULE_3__["AddfeedbackPage"]
    }];

    var AddfeedbackPageRoutingModule = function AddfeedbackPageRoutingModule() {
      _classCallCheck(this, AddfeedbackPageRoutingModule);
    };

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

    var AddfeedbackPageModule = function AddfeedbackPageModule() {
      _classCallCheck(this, AddfeedbackPageModule);
    };

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

    var AddfeedbackPage = /*#__PURE__*/function () {
      function AddfeedbackPage(popoverController, route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        var _this = this;

        _classCallCheck(this, AddfeedbackPage);

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
        this.routeParams.params.subscribe(function (params) {
          console.log(params);
          _this.taskId = params.taskId;
          _this.userId = params.userId;

          _this.onGetUserDetailHandler();

          _this.onGetTaskDetailHandler();

          console.log(_this.taskId);
          console.log(_this.userId);
        });
      }

      _createClass(AddfeedbackPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onGetUserDetailHandler",
        value: function onGetUserDetailHandler() {
          var _this2 = this;

          this.dbService.presentLoader();
          var inputData = {
            userId: this.userId
          };
          this.dbService.onPostRequestHandler(inputData, 'login/onGetTechnicianDetail').subscribe(function (result) {
            console.log(result);

            _this2.dbService.dismissLoader();

            _this2.userData = result["userData"];
          });
        }
      }, {
        key: "onStarClickHandler",
        value: function onStarClickHandler(rating) {
          this.selectedRating = rating;
        }
      }, {
        key: "onSaveFeedbackHandler",
        value: function onSaveFeedbackHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.selectedRating) {
                      _context.next = 3;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Rating Required!');
                    return _context.abrupt("return");

                  case 3:
                    if (this.data.description) {
                      _context.next = 6;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Description Required!');
                    return _context.abrupt("return");

                  case 6:
                    console.log('hello');
                    console.log(this.data);
                    _context.next = 10;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Save Feedback ?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('No clicked');
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          console.log('Yes clicked');
                          var inputData = {
                            taskId: _this3.taskId
                          };
                          inputData["rating"] = _this3.selectedRating;
                          inputData["description"] = _this3.data.description;

                          _this3.dbService.presentLoader();

                          _this3.dbService.onPostRequestHandler(inputData, 'customer/saveFeedbackData').subscribe(function (result) {
                            console.log(result);

                            _this3.dbService.dismissLoader();

                            _this3.data.status = '';

                            _this3.route.navigate(['/customer/request']);

                            _this3.dbService.presentToast('Feedback Saved Successfully!');
                          });
                        }
                      }]
                    });

                  case 10:
                    alert = _context.sent;
                    _context.next = 13;
                    return alert.present();

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onGetTaskDetailHandler",
        value: function onGetTaskDetailHandler() {
          var _this4 = this;

          var inputData = {
            taskId: this.taskId
          };
          this.dbService.onPostRequestHandler(inputData, 'task/onGetFeedbackTaskData').subscribe(function (result) {
            console.log(result);
            _this4.taskData = result["taskData"];
          });
        }
      }]);

      return AddfeedbackPage;
    }();

    AddfeedbackPage.ctorParameters = function () {
      return [{
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
    };

    AddfeedbackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addfeedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addfeedback.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addfeedback/addfeedback.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addfeedback.page.scss */
      "./src/app/customer_app/service_request/addfeedback/addfeedback.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], AddfeedbackPage);
    /***/
  }
}]);
//# sourceMappingURL=service_request-addfeedback-addfeedback-module-es5.js.map