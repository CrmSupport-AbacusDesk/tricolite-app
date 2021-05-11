function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer_app-registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/registration/registration.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/registration/registration.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <div class=\"login-container\">\r\n        <div class=\"logo\"><img src=\"../../assets/img/logo.jpg\" alt=\"\"></div>\r\n        \r\n        <div class=\"form-container\">\r\n            \r\n            <div class=\"head\">\r\n                <div class=\"heading\">\r\n                    <h1>Sign Up</h1>\r\n                    <ion-button fill=\"clear\" routerLink=\"/customerlogin\"><i class=\"material-icons\">arrow_right_alt</i> Back To Login</ion-button>\r\n                    \r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"input-container mt10\">\r\n                <div class=\"custome-filter dlform\">\r\n                    <div class=\"fiter-data\">\r\n                        <div class=\"cs-right\">\r\n                            <div class=\"heading\">\r\n                                <h2>Basic Info</h2>\r\n                              \r\n                                \r\n                            </div>\r\n                            <div  class=\"basic_info mb16\">\r\n                                <form [formGroup]=\"registerForm1\">\r\n                                    <div class=\"common_form inner_page\">\r\n                                        <!-- <ion-item [ngClass]=\"submitted && f1.companyName.errors && f1.companyName.errors.required ? 'has-error' : (f1.companyName.errors && !f1.companyName.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Company Name</ion-label>\r\n                                            <ion-input formControlName=\"companyName\" [(ngModel)]=\"data.companyName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.companyName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.companyName.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>                                \r\n\r\n                                        </ion-item> -->\r\n                                        <ion-item [ngClass]=\"submitted && f1.name.errors && f1.name.errors.required ? 'has-error' : (f1.name.errors && !f1.name.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\"> Name</ion-label>\r\n                                            <ion-input formControlName=\"name\" [(ngModel)]=\"data.name\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.name.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.name.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>                                \r\n\r\n                                        </ion-item>\r\n\r\n                                        <!-- <ion-item [ngClass]=\"submitted && f1.email.errors && f1.email.errors.required ? 'has-error' : (f1.email.errors && !f1.email.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\"> Corporate Mail</ion-label>\r\n                                            <ion-input formControlName=\"email\" [(ngModel)]=\"data.email\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.email.errors\" class=\"cs-error\">\r\n    \r\n                                                    <span *ngIf=\"!f1.email.errors.required\">Email Invalid</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item> -->\r\n                                        <ion-item [ngClass]=\"submitted && f1.designation.errors && f1.designation.errors.required ? 'has-error' : (f1.designation.errors && !f1.designation.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Designation</ion-label>\r\n                                            <ion-input formControlName=\"designation\" [(ngModel)]=\"data.designation\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.designation.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.designation.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>                                \r\n\r\n                                        </ion-item>\r\n                                        <!-- <ion-item [ngClass]=\"submitted && f1.landlineNo.errors && f1.landlineNo.errors.required ? 'has-error' : (f1.landlineNo.errors && !f1.landlineNo.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Corporate Mobile No.</ion-label>\r\n                                            <ion-input type=\"tel\" formControlName=\"landlineNo\" [(ngModel)]=\"data.landlineNo\"   minlength = \"10\" maxlength=\"10\" (keypress)=\"dbService.numberOnly($event)\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.landlineNo.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.landlineNo.errors.minlength\">Minimum 10 Digit Required</span>\r\n    \r\n                                                <span *ngIf=\"f1.landlineNo.errors.maxlength\">Maximum 10 Digit Required</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item> -->\r\n                                        <ion-item [ngClass]=\"submitted && f1.landlineNo.errors && f1.landlineNo.errors.required ? 'has-error' : (f1.landlineNo.errors && !f1.landlineNo.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                            <ion-input type=\"tel\" formControlName=\"landlineNo\" [(ngModel)]=\"data.landlineNo\"   minlength = \"10\" maxlength=\"10\" (keypress)=\"dbService.numberOnly($event)\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.landlineNo.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.landlineNo.errors.minlength\">Minimum 10 Digit Required</span>\r\n    \r\n                                                <span *ngIf=\"f1.landlineNo.errors.maxlength\">Maximum 10 Digit Required</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item>\r\n                                         <ion-item [ngClass]=\"submitted && f1.email.errors && f1.email.errors.required ? 'has-error' : (f1.email.errors && !f1.email.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Email ID<span style=\"font-size: 10px\">(please enter here only official id)</span></ion-label>\r\n                                            <ion-input formControlName=\"email\" [(ngModel)]=\"data.email\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.email.errors\" class=\"cs-error\">\r\n    \r\n                                                    <span *ngIf=\"!f1.email.errors.required\">Email Invalid</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item> \r\n                                       <ion-item [ngClass]=\"submitted && f1.companyName.errors && f1.companyName.errors.required ? 'has-error' : (f1.companyName.errors && !f1.companyName.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Company Name</ion-label>\r\n                                            <ion-input formControlName=\"companyName\" [(ngModel)]=\"data.companyName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.companyName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.companyName.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>                                \r\n\r\n                                        </ion-item> \r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.username.errors && f1.username.errors.required ? 'has-error' : (f1.username.errors && !f1.username.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Username</ion-label>\r\n                                            <ion-input type=\"text\" formControlName=\"username\" [(ngModel)]=\"data.username\" autocomplete=\"nope\"></ion-input>\r\n                                        </ion-item>\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.password.errors && f1.password.errors.required ? 'has-error' : (f1.password.errors && !f1.password.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Password</ion-label>\r\n                                            <ion-input type=\"password\" formControlName=\"password\" [(ngModel)]=\"data.password\" autocomplete=\"nope\"></ion-input>\r\n                                        </ion-item>\r\n                                        <ion-item [ngClass]=\"submitted && f1.superiorName.errors && f1.superiorName.errors.required ? 'has-error' : (f1.superiorName.errors && !f1.superiorName.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Superior Name</ion-label>\r\n                                            <ion-input formControlName=\"superiorName\" [(ngModel)]=\"data.superiorName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.superiorName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.superiorName.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>                                \r\n\r\n                                        </ion-item> \r\n                                         <ion-item [ngClass]=\"submitted && f1.superioremail.errors && f1.superioremail.errors.required ? 'has-error' : (f1.superioremail.errors && !f1.superioremail.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\"> Superior Email ID</ion-label>\r\n                                            <ion-input formControlName=\"superioremail\" [(ngModel)]=\"data.superioremail\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.superioremail.errors\" class=\"cs-error\">\r\n    \r\n                                                    <span *ngIf=\"!f1.superioremail.errors.required\">Email Invalid</span>\r\n                    \r\n                                            </ion-text>\r\n\r\n                                        </ion-item> \r\n                                        <div class=\"heading\">\r\n                                            <h2>Project Info</h2>\r\n                                        </div>\r\n                                        <ion-item [ngClass]=\"submitted && f1.so_no.errors && f1.so_no.errors.required ? 'has-error' : (f1.so_no.errors && !f1.so_no.errors.required ? 'has-text' : '')\" >\r\n                                            <ion-label position=\"floating\">Sales Order No.(SO No.)</ion-label>\r\n                                            <ion-input formControlName=\"so_no\" [(ngModel)]=\"data.so_no\" (keyup) = \"onSonoHandler()\" autocomplete=\"nope\"></ion-input>\r\n                                            <ion-text *ngIf=\"submitted && f1.so_no.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"!f1.so_no.errors.required\">SO NO Invalid</span>\r\n                \r\n                                        </ion-text>\r\n                                                                      \r\n\r\n                                        </ion-item>  <ion-item  [ngClass]=\"submitted && f1.fg_no.errors && f1.fg_no.errors.required ? 'has-error' : (f1.fg_no.errors && !f1.fg_no.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Fg no.</ion-label>\r\n                                            <ion-input formControlName=\"fg_no\" [(ngModel)]=\"data.fg_no\" (keyup) = \"onfgHandler()\" autocomplete=\"nope\"></ion-input>\r\n                                            <ion-text *ngIf=\"submitted && f1.fg_no.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"!f1.fg_no.errors.fg_no\">Fg NO Invalid</span>\r\n                \r\n                                        </ion-text>\r\n                                                                          \r\n\r\n                                        </ion-item> \r\n                                        <div class=\"head1\">\r\n                                            <div class=\"head\">\r\n                                              \r\n                                                <ion-button fill=\"clear\" style=\"font-size: 8px\" (click)=\"imageModel()\"> *AVAILABLE ON PANEL NAME PLATE & DRAWING</ion-button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"cs-btn mt16 lr\">\r\n                                            <ion-button (click)=\"onSaveRegistrationHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                                        </div>\r\n                                        <!-- <div class=\"heading\">\r\n                                            <h2>Project Info</h2>\r\n                                        </div>\r\n\r\n                                        <ion-item [ngClass]=\"submitted && f1.projectName.errors && f1.projectName.errors.required ? 'has-error' : (f1.projectName.errors && !f1.projectName.errors.required ? 'has-text' : '')\">\r\n                                            <ion-label position=\"floating\">Project Name</ion-label>\r\n                                            <ion-input formControlName=\"projectName\" [(ngModel)]=\"data.projectName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                            <ion-text *ngIf=\"submitted && f1.projectName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f1.projectName.errors.minlength\">Minimum 5 Letter Required</span>\r\n                \r\n                                            </ion-text>\r\n\r\n                                        </ion-item> -->\r\n\r\n\r\n                                    </div>\r\n\r\n                                </form>\r\n                              \r\n                            </div>\r\n\r\n                            <!-- <div class=\"heading\">\r\n                                <h2>Address Info</h2>\r\n                            </div>\r\n                            <div  class=\"address mb16\">\r\n                             <form [formGroup]=\"registerForm2\" (ngSubmit)=\"onNextStageHandler(2)\">\r\n\r\n                                <div class=\"common_form inner_page\">\r\n                                    <ion-item [ngClass]=\"submitted && f2.street.errors && f2.street.errors.required ? 'has-error' : (f2.street.errors && !f2.street.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        <ion-textarea formControlName=\"street\" [(ngModel)]=\"data.street\" placeholder=\"Address\"></ion-textarea>\r\n                                      \r\n                                        <ion-text *ngIf=\"submitted && f2.street.errors\" class=\"cs-error\">\r\n                                                <span *ngIf=\"f2.street.errors.minlength\">Minimum 5 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.state.errors && f2.state.errors.required ? 'has-error' : (f2.state.errors && !f2.state.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n\r\n                                        <ion-label>State</ion-label>\r\n\r\n                                        <ionic-selectable\r\n                                        [(ngModel)]=\"data.state\"\r\n                                        [items]=\"stateList\"\r\n                                        itemValueField=\"state_name\"\r\n                                        itemTextField=\"state_name\"\r\n                                        formControlName=\"state\"\r\n                                        [canSearch]=\"true\"\r\n                                        (onChange)=\"onGetDistrictListHandler($event)\">\r\n\r\n                                        </ionic-selectable>\r\n\r\n                                    </ion-item>\r\n\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.district.errors && f2.district.errors.required ? 'has-error' : (f2.district.errors && !f2.district.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                        <ion-label>District</ion-label>\r\n\r\n                                        <ionic-selectable\r\n                                        [(ngModel)]=\"data.district\"\r\n                                        [items]=\"districtList\"\r\n                                        itemValueField=\"district_name\"\r\n                                        itemTextField=\"district_name\"\r\n                                        formControlName=\"district\"\r\n                                        [canSearch]=\"true\">\r\n\r\n                                        </ionic-selectable>\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.city.errors && f2.city.errors.required ? 'has-error' : (f2.city.errors && !f2.city.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">City</ion-label>\r\n                                        <ion-input formControlName=\"city\" [(ngModel)]=\"data.city\" ></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f2.city.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f2.city.errors.minlength\">Minimum 4 Letter Required</span>\r\n                \r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f2.pincode.errors && f2.pincode.errors.required ? 'has-error' : (f2.pincode.errors && !f2.pincode.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Pin Code</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"pincode\" [(ngModel)]=\"data.pincode\"  minlength =\"6 \"maxlength=\"6\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f2.pincode.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f2.pincode.errors.minlength || f2.pincode.errors.maxlength\">Pincode Must Be 6 Digit!</span>\r\n                \r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n\r\n\r\n                                </div>\r\n                              </form>\r\n\r\n                            </div>\r\n                        \r\n                            <div class=\"heading\">\r\n                                <h2>Site Contact Person Detail</h2>\r\n                            </div>\r\n                            <div class=\"contact_person\">\r\n                            <form [formGroup]=\"registerForm3\" (ngSubmit)=\"onNextStageHandler(3)\">\r\n                        \r\n                                <div class=\"common_form inner_page\">\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.contactName.errors && f3.contactName.errors.required ? 'has-error' : (f3.contactName.errors && !f3.contactName.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Name</ion-label>\r\n                                        <ion-input formControlName=\"contactName\" [(ngModel)]=\"data.contactName\" autocomplete=\"nope\"></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f3.contactName.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f3.contactName.errors.minlength\">Minimum 3 Letter Required</span>\r\n    \r\n                                                <span *ngIf=\"f3.contactName.errors.maxlength\">Maximum 50 Letter Allowed</span>\r\n                \r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.designation.errors && f3.designation.errors.required ? 'has-error' : (f3.designation.errors && !f3.designation.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Designation</ion-label>\r\n                                        <ion-input formControlName=\"designation\" [(ngModel)]=\"data.designation\" autocomplete=\"nope\"></ion-input>\r\n                                            <ion-text *ngIf=\"submitted && f3.designation.errors\" class=\"cs-error\">\r\n        \r\n                                                    <span *ngIf=\"f3.designation.errors.minlength\">Minimum 3 Letter Required</span>\r\n        \r\n                                                    <span *ngIf=\"f3.designation.errors.maxlength\">Maximum 50 Letter Allowed</span>\r\n                    \r\n                                            </ion-text>\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.contactEmail.errors && f3.contactEmail.errors.required ? 'has-error' : (f3.contactEmail.errors && !f3.contactEmail.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Email ID</ion-label>\r\n                                        <ion-input formControlName=\"contactEmail\" [(ngModel)]=\"data.contactEmail\" autocomplete=\"nope\"></ion-input>\r\n                                        <ion-text *ngIf=\"submitted && f3.contactEmail.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"!f3.contactEmail.errors.required\">Email Invalid!</span>\r\n                \r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f3.contactMobile.errors && f3.contactMobile.errors.required ? 'has-error' : (f3.contactMobile.errors && !f3.contactMobile.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"contactMobile\" [(ngModel)]=\"data.contactMobile\" minlength = 10 maxlength=\"10\" (keypress)=\"dbService.numberOnly($event)\" autocomplete=\"nope\"></ion-input>\r\n                                  \r\n                                        <ion-text *ngIf=\"submitted && f3.contactMobile.errors\" class=\"cs-error\">\r\n    \r\n                                                <span *ngIf=\"f3.contactMobile.errors.minlength\">Mobile must be 10 digit!</span>\r\n    \r\n                                                <span *ngIf=\"f3.contactMobile.errors.maxlength\">Mobile Must be 10 Digit</span>\r\n                \r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n\r\n                                </div>\r\n                            </form>\r\n                            \r\n                                <div class=\"cs-btn mt16 lr\">\r\n                                    <ion-button (click)=\"onSaveRegistrationHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                                </div>\r\n                                \r\n                            </div> -->\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/customer_app/registration/registration-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/customer_app/registration/registration-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: RegistrationPageRoutingModule */

  /***/
  function srcAppCustomer_appRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
      return RegistrationPageRoutingModule;
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


    var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/customer_app/registration/registration.page.ts");

    var routes = [{
      path: '',
      component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }];

    var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
      _classCallCheck(this, RegistrationPageRoutingModule);
    };

    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/registration/registration.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/registration/registration.module.ts ***!
    \******************************************************************/

  /*! exports provided: RegistrationPageModule */

  /***/
  function srcAppCustomer_appRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
      return RegistrationPageModule;
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


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/customer_app/registration/registration-routing.module.ts");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/customer_app/registration/registration.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var RegistrationPageModule = function RegistrationPageModule() {
      _classCallCheck(this, RegistrationPageModule);
    };

    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]],
      declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })], RegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/registration/registration.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/registration/registration.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer_app/registration/registration.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/customer_app/registration/registration.page.ts ***!
    \****************************************************************/

  /*! exports provided: RegistrationPage */

  /***/
  function srcAppCustomer_appRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
      return RegistrationPage;
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


    var src_app_imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/imagemodal/imagemodal.page */
    "./src/app/imagemodal/imagemodal.page.ts");

    var RegistrationPage = /*#__PURE__*/function () {
      function RegistrationPage(route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        _classCallCheck(this, RegistrationPage);

        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.activeStage = 1;
        this.fgList = [];
        this.soList = [];
        this.soList2 = [];
        this.districtList = [];
        this.contactData = [];
        this.data = {};
        this.submitted = false;
        this.minDate = '';
        this.currentActiveCheckTab = 0;
        this.soerror = [];
        this.fgerror = [];
        this.registerForm1 = this.formBuilder.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          superiorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          so_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          fg_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.soList)]],
          projectName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          superioremail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          landlineNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]]
        });
        this.registerForm2 = this.formBuilder.group({
          street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
          state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          district: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
          pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6)]]
        });
        this.registerForm3 = this.formBuilder.group({
          contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
          designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]],
          contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          contactMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]]
        });
      }

      _createClass(RegistrationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onGetStateListHandler();
        }
      }, {
        key: "onSaveRegistrationHandler",
        value: function onSaveRegistrationHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(this.data);
                    this.submitted = true;

                    if (!this.registerForm1.invalid) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return");

                  case 4:
                    if (!(!this.data.so_no && !this.data.fg_no)) {
                      _context.next = 9;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Enter SO NO or FGNO !');
                    return _context.abrupt("return");

                  case 9:
                    console.log('hello');
                    console.log(this.data);
                    _context.next = 13;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Register ?',
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
                          var inputData = JSON.parse(JSON.stringify(_this.data));

                          _this.dbService.presentLoader();

                          _this.dbService.onPostRequestHandler(inputData, 'login/onRegisterCustomerAccount').subscribe(function (result) {
                            console.log(result);

                            _this.dbService.dismissLoader();

                            if (result["status"] == 'error') {
                              _this.dbService.onShowAlertMessage('Error', result["statusMessage"]);
                            } else {
                              var loginData = {
                                loginType: result["loginData"]["loginType"],
                                loginId: result["loginData"]["loginId"],
                                loginName: result["loginData"]["loginName"],
                                loginStatus: result["loginData"]["loginStatus"]
                              };
                              localStorage.setItem('loginData', JSON.stringify(loginData));
                              console.log(JSON.parse(localStorage.getItem('loginData')));

                              _this.dbService.onShowAlertMessage('Success', 'Login Request sent, wait till Verification complete.');

                              _this.route.navigate(['/customerlogin']);
                            }
                          });
                        }
                      }]
                    });

                  case 13:
                    alert = _context.sent;
                    _context.next = 16;
                    return alert.present();

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSonoHandler",
        value: function onSonoHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    inputData = {
                      so_no: this.data.so_no
                    };
                    this.dbService.onPostRequestHandler(inputData, 'login/checkSono').subscribe(function (result) {
                      console.log(result);
                      _this2.fgList = result["fg"];
                      console.log(_this2.fgList);
                      _this2.fgerror = result["msg"];
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "imageModel",
        value: function imageModel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: src_app_imagemodal_imagemodal_page__WEBPACK_IMPORTED_MODULE_6__["ImagemodalPage"],
                      componentProps: {}
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onfgHandler",
        value: function onfgHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    inputData = {
                      so_no: this.data.so_no,
                      fg_no: this.data.fg_no
                    };
                    this.dbService.onPostRequestHandler(inputData, 'login/checkFgno').subscribe(function (result) {
                      console.log(result);
                      _this3.soList = result["fg"];
                      console.log(_this3.soList);
                      _this3.data.so_no = _this3.soList.so_no;
                      console.log(_this3.data.so_no);
                      _this3.soerror = result["msg"];
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onGetStateListHandler",
        value: function onGetStateListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var inputData;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    inputData = {};
                    this.dbService.onPostRequestHandler(inputData, 'task/getStateList').subscribe(function (result) {
                      console.log(result); // this.stateList = result[`stateList`];
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onGetDistrictListHandler",
        value: function onGetDistrictListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.data.district = '';
                    this.districtList = [];
                    inputData = {
                      stateName: this.data.state["state_name"]
                    };
                    this.dbService.presentLoader();
                    this.dbService.onPostRequestHandler(inputData, 'task/getDistrictList').subscribe(function (result) {
                      console.log(result);

                      _this4.dbService.dismissLoader();

                      _this4.districtList = result["districtList"];
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "onNextStageHandler",
        value: function onNextStageHandler(stage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.submitted = true;
                    console.log(this.registerForm2);

                    if (!this['registerForm' + stage + ''].invalid) {
                      _context7.next = 7;
                      break;
                    }

                    if (stage == 1) {
                      this['registerForm' + stage + ''].get('name').markAsTouched();
                      this['registerForm' + stage + ''].get('designation').markAsTouched();
                      this['registerForm' + stage + ''].get('companyName').markAsTouched();
                      this['registerForm' + stage + ''].get('email').markAsTouched(); // this['registerForm' + stage + ''].get('mobile').markAsTouched();

                      this['registerForm' + stage + ''].get('landlineNo').markAsTouched();
                      this['registerForm' + stage + ''].get('superiorName').markAsTouched();
                      this['registerForm' + stage + ''].get('superioremail').markAsTouched();
                      this['registerForm' + stage + ''].get('so_no').markAsTouched();
                      this['registerForm' + stage + ''].get('fg_no').markAsTouched();
                    } else if (stage == 2) {
                      this['registerForm' + stage + ''].get('street').markAsTouched();
                      this['registerForm' + stage + ''].get('state').markAsTouched();
                      this['registerForm' + stage + ''].get('district').markAsTouched();
                      this['registerForm' + stage + ''].get('city').markAsTouched();
                      this['registerForm' + stage + ''].get('pincode').markAsTouched();
                    } else if (stage == 3) {
                      this['registerForm' + stage + ''].get('contactName').markAsTouched();
                      this['registerForm' + stage + ''].get('designation').markAsTouched();
                      this['registerForm' + stage + ''].get('contactEmail').markAsTouched();
                      this['registerForm' + stage + ''].get('contactMobile').markAsTouched();
                    }

                    return _context7.abrupt("return");

                  case 7:
                    console.log(this.data); // if (this.activeStage == 3) {

                    if (!(!this.data.contactName || !this.data.designation || !this.data.contactEmail || !this.data.contactMobile)) {
                      _context7.next = 11;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Fill contact complete Detail!');
                    return _context7.abrupt("return", false);

                  case 11:
                    this.contactData.push({
                      contactName: this.data.contactName,
                      designation: this.data.designation,
                      contactEmail: this.data.contactEmail,
                      contactMobile: this.data.contactMobile
                    });
                    this.data.contactName = '';
                    this.data.contactMobile = '';
                    this.data.designation = '';
                    this.data.contactEmail = '';
                    this.submitted = false; // } else {
                    //    this.activeStage += 1;
                    //    this.submitted = false;
                    // }

                  case 17:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onDeleteContactHandler",
        value: function onDeleteContactHandler(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Delete Contact ?',
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

                          _this5.contactData.splice(index, 1);

                          _this5.dbService.presentToast('Contact Deleted Successfully!');
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "onBackClickHandler",
        value: function onBackClickHandler(stage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.activeStage = stage - 1;

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "f1",
        get: function get() {
          return this.registerForm1.controls;
        }
      }, {
        key: "f2",
        get: function get() {
          return this.registerForm2.controls;
        }
      }, {
        key: "f3",
        get: function get() {
          return this.registerForm3.controls;
        }
      }]);

      return RegistrationPage;
    }();

    RegistrationPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
      }];
    };

    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/registration/registration.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.page.scss */
      "./src/app/customer_app/registration/registration.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], RegistrationPage);
    /***/
  }
}]);
//# sourceMappingURL=customer_app-registration-registration-module-es5.js.map