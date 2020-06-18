(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["callrequest-callrequest-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/callrequest/callrequest.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/callrequest/callrequest.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appCallrequestCallrequestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/home']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Call Request</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n        \r\n            <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveCallRequestHandler()\">\r\n\r\n                <div class=\"ion-padding\">\r\n                    <div class=\"cnt-content mb32\">\r\n                        <p>Please Select A Date & Time For When You Would Like To Discuss Your Enquiry Over The Phone.</p>\r\n                    </div>\r\n                    \r\n                    <ion-item [ngClass]=\"submitted && f1.contactName.errors && f1.contactName.errors.required ? 'has-error' : (f1.contactName.errors && !f1.contactName.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n\r\n                        <ion-label>Select Contact Person</ion-label>\r\n\r\n                        <ion-select formControlName=\"contactName\" [(ngModel)]=\"data.contactName\"  placeholder=\"Select Contact\" (ngModelChange) =\"onChangeContactHandler()\">\r\n                            <ion-select-option *ngFor=\"let row of contactData\" [value]=\"row.name\">{{row.name}}</ion-select-option>\r\n                        </ion-select>\r\n\r\n                    </ion-item>\r\n                    \r\n                    <ion-item [ngClass]=\"submitted && f1.mobile.errors && f1.mobile.errors.required ? 'has-error' : (f1.mobile.errors && !f1.mobile.errors.required ? 'has-text' : '')\">\r\n                        <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                        <ion-input tel=\"10\" formControlName=\"mobile\" [(ngModel)]=\"data.mobile\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n                    </ion-item>\r\n\r\n                    <ion-text *ngIf=\"submitted && f1.mobile.errors\" class=\"cs-error\">\r\n\r\n                            <span *ngIf=\"f1.mobile.errors.minlength\">Minimum 10 Digit Required</span>\r\n                            <span *ngIf=\"f1.mobile.errors.maxlength\">Maximum 10 Digit Required</span>\r\n\r\n                    </ion-text>\r\n                    \r\n                    <ion-item [ngClass]=\"submitted && f1.suitableDate.errors && f1.suitableDate.errors.required ? 'has-error' : (f1.suitableDate.errors && !f1.suitableDate.errors.required ? 'has-text' : '')\">\r\n                        <ion-label position=\"floating\">Suitable Date</ion-label>\r\n\r\n                        <ion-datetime formControlName=\"suitableDate\" [(ngModel)]=\"data.suitableDate\" displayFormat=\"DD-MMM-YYYY\" min=\"{{minDate}}\"></ion-datetime>\r\n\r\n                    </ion-item>\r\n                    \r\n                    <ion-item [ngClass]=\"submitted && f1.suitableTime.errors && f1.suitableTime.errors.required ? 'has-error' : (f1.suitableTime.errors && !f1.suitableTime.errors.required ? 'has-text' : '')\">\r\n\r\n                        <ion-label position=\"floating\">Suitable Time</ion-label>\r\n                        <ion-datetime formControlName=\"suitableTime\" [(ngModel)]=\"data.suitableTime\" displayFormat=\"h:mm A\"></ion-datetime>\r\n\r\n                    </ion-item>\r\n\r\n                    <div class=\"cs-btn mt50\">\r\n                        <ion-button type=\"submit\" class=\"success large wp100\">SAVE</ion-button>\r\n                    </div>\r\n                </div>\r\n\r\n            </form>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/customer_app/callrequest/callrequest-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/customer_app/callrequest/callrequest-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: CallrequestPageRoutingModule */

  /***/
  function srcAppCustomer_appCallrequestCallrequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallrequestPageRoutingModule", function () {
      return CallrequestPageRoutingModule;
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


    var _callrequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./callrequest.page */
    "./src/app/customer_app/callrequest/callrequest.page.ts");

    const routes = [{
      path: '',
      component: _callrequest_page__WEBPACK_IMPORTED_MODULE_3__["CallrequestPage"]
    }];
    let CallrequestPageRoutingModule = class CallrequestPageRoutingModule {};
    CallrequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CallrequestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/callrequest/callrequest.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customer_app/callrequest/callrequest.module.ts ***!
    \****************************************************************/

  /*! exports provided: CallrequestPageModule */

  /***/
  function srcAppCustomer_appCallrequestCallrequestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallrequestPageModule", function () {
      return CallrequestPageModule;
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


    var _callrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./callrequest-routing.module */
    "./src/app/customer_app/callrequest/callrequest-routing.module.ts");
    /* harmony import */


    var _callrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./callrequest.page */
    "./src/app/customer_app/callrequest/callrequest.page.ts");

    let CallrequestPageModule = class CallrequestPageModule {};
    CallrequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _callrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallrequestPageRoutingModule"]],
      declarations: [_callrequest_page__WEBPACK_IMPORTED_MODULE_6__["CallrequestPage"]]
    })], CallrequestPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/callrequest/callrequest.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/customer_app/callrequest/callrequest.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appCallrequestCallrequestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9jYWxscmVxdWVzdC9jYWxscmVxdWVzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/customer_app/callrequest/callrequest.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/customer_app/callrequest/callrequest.page.ts ***!
    \**************************************************************/

  /*! exports provided: CallrequestPage */

  /***/
  function srcAppCustomer_appCallrequestCallrequestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallrequestPage", function () {
      return CallrequestPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    let CallrequestPage = class CallrequestPage {
      constructor(route, formBuilder, alertCtrl, modalController, dbService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.data = {};
        this.contactData = [];
        this.minDate = '';
        this.submitted = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
        this.registerForm1 = this.formBuilder.group({
          contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
          suitableDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          suitableTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      ngOnInit() {
        this.onGetAllContactListHandler();
      }

      onChangeContactHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const contactIndex = this.contactData.findIndex(row => row.name == this.data.contactName);

          if (contactIndex !== -1) {
            this.data.mobile = this.contactData[contactIndex].mobile;
          }
        });
      }

      onSaveCallRequestHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log(this.data);
          this.submitted = true;

          if (this.registerForm1.invalid) {
            this.registerForm1.get('contactName').markAsTouched();
            this.registerForm1.get('mobile').markAsTouched();
            this.registerForm1.get('suitableDate').markAsTouched();
            this.registerForm1.get('suitableTime').markAsTouched();
            return;
          } else {
            console.log('hello');
            console.log(this.data);
            const alert = yield this.alertCtrl.create({
              header: 'Confirm',
              message: 'Are You Sure, You Want To Save Call Request ?',
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
                  const inputData = JSON.parse(JSON.stringify(this.data));
                  inputData["suitableDate"] = moment__WEBPACK_IMPORTED_MODULE_6__(inputData["suitableDate"]).format('YYYY-MM-DD');
                  inputData["suitableTime"] = moment__WEBPACK_IMPORTED_MODULE_6__(inputData["suitableTime"], 'H:mm A').format('H:mm');
                  inputData["suitableDateTime"] = inputData["suitableDate"] + ' ' + inputData["suitableTime"];
                  this.dbService.presentLoader();
                  this.dbService.onPostRequestHandler(inputData, 'customer/onSaveCallRequestData').subscribe(result => {
                    console.log(result);
                    this.dbService.dismissLoader();
                    this.data.status = '';
                    this.route.navigate(['/customer/home']);
                    this.dbService.presentToast('Call Request Saved Successfully!');
                  });
                }
              }]
            });
            yield alert.present();
          }
        });
      }

      onGetAllContactListHandler() {
        const inputData = {};
        this.dbService.presentLoader();
        this.dbService.onPostRequestHandler(inputData, 'customer/getCustomerContactHandler').subscribe(result => {
          console.log(result);
          this.dbService.dismissLoader();
          this.contactData = result["contactData"];
        });
      }

      get f1() {
        return this.registerForm1.controls;
      }

    };

    CallrequestPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
    }];

    CallrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-callrequest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./callrequest.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/callrequest/callrequest.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./callrequest.page.scss */
      "./src/app/customer_app/callrequest/callrequest.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], CallrequestPage);
    /***/
  }
}]);
//# sourceMappingURL=callrequest-callrequest-module-es5.js.map