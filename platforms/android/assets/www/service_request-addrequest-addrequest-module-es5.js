function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-addrequest-addrequest-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appService_requestAddrequestAddrequestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Add Service Request</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveRequestHandler()\">\r\n            \r\n            <div class=\"cs-ion-content pt0\" padding>\r\n                <div class=\"custome-filter dlform\">\r\n                    <div class=\"fiter-data\">\r\n                        \r\n                        <div class=\"cs-right\">\r\n                            <div class=\"common_form inner_page\">\r\n                                <div class=\"heading\"><h1>Request Information</h1></div>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.requestType.errors && f1.requestType.errors.required ? 'has-error' : (f1.requestType.errors && !f1.requestType.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Request Type</ion-label>\r\n                                    \r\n                                    <ion-select formControlName=\"requestType\" [(ngModel)]=\"data.requestType\" (ngModelChange)=\"onRequestTypeChangeHandler()\" placeholder=\"Select Type\">\r\n                                        <ion-select-option value=\"service_request\"> Service Request</ion-select-option>\r\n                                        <ion-select-option value=\"commissioning\">Commissioning</ion-select-option>\r\n                                    </ion-select>\r\n                                    \r\n                                </ion-item>\r\n\r\n                                <ion-item  *ngIf = \"registerForm1.value['requestType']\"[ngClass]=\"submitted && f1.complaintTitle.errors && f1.complaintTitle.errors.required ? 'has-error' : (f1.complaintTitle.errors && !f1.complaintTitle.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label> Issue Category</ion-label>\r\n\r\n                                    <ion-select class=\"test\"  *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\" formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\">\r\n                                            <ion-select-option *ngFor=\"let row of complaintTypeList\" [value]=\"row.title\">{{row.title}}</ion-select-option>\r\n                                            \r\n                                    </ion-select>\r\n\r\n                                    <ion-select *ngIf = \"registerForm1.value['requestType']  != 'service_request'\" formControlName=\"complaintTitle\" [(ngModel)]=\"data.complaintTitle\" placeholder=\"Select Type\">\r\n                                \r\n                                            <ion-select-option  [value]=\"commissioning\">Commissioning</ion-select-option>\r\n                                            \r\n                                    </ion-select>\r\n                                               \r\n                                    \r\n                                </ion-item>\r\n\r\n                                <ion-item  class=\"cs-select\" *ngIf = \"registerForm1.value['requestType']  != 'commissioning'\">\r\n                            \r\n                                    <ion-label>Nature of Issue</ion-label>\r\n                                    <ionic-selectable\r\n                                    [(ngModel)]=\"data.natureProblem\"\r\n                                    [items]=\"natureList\"\r\n                                    itemValueField=\"nature\"\r\n                                    itemTextField=\"nature\"\r\n                                    formControlName=\"natureProblem\"\r\n                                    [canSearch]=\"true\">\r\n                                    \r\n                                </ionic-selectable>\r\n                                \r\n                                </ion-item>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.description.errors && f1.description.errors.required ? 'has-error' : (f1.description.errors && !f1.description.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                    <ion-label position=\"floating\"><strong>Description</strong></ion-label>\r\n\r\n                                    <ion-textarea formControlName=\"description\" [(ngModel)]=\"data.description\"></ion-textarea>\r\n                                </ion-item>\r\n                                \r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.project.errors && f1.project.errors.required ? 'has-error' : (f1.project.errors && !f1.project.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                    \r\n                                    <ion-label>Project</ion-label>\r\n                                    \r\n                                    <ionic-selectable\r\n                                    [(ngModel)]=\"data.project\"\r\n                                    [items]=\"projectList\"\r\n                                    itemValueField=\"id\"\r\n                                    itemTextField=\"project_name\"\r\n                                    formControlName=\"project\"\r\n                                    [canSearch]=\"true\"\r\n                                    (onChange)=\"onGetProjectFGListHandler()\">\r\n                                    \r\n                                </ionic-selectable>\r\n                            </ion-item>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div *ngIf=\"data.project && data.project['project_name']\" class=\"cs-right mt20\">\r\n                        <div class=\"common_form inner_page\">\r\n                            <div class=\"heading\"><h1>Add Product Information</h1></div>\r\n                            \r\n                            <ion-item [ngClass]=\"submitted && f1.fgNo.errors  ? 'has-error' : (f1.fgNo.errors ? 'has-text' : '')\" class=\"cs-select\">\r\n                                \r\n                                <ion-label>FG No</ion-label>\r\n                                <ionic-selectable\r\n                                [(ngModel)]=\"data.fgNo\"\r\n                                [items]=\"fgList\"\r\n                                itemValueField=\"fg_no\"\r\n                                itemTextField=\"fg_no\"\r\n                                formControlName=\"fgNo\"\r\n                                [canSearch]=\"true\">\r\n                                \r\n                            </ionic-selectable>\r\n                            \r\n                        </ion-item>\r\n                       \r\n                    \r\n                    <div [hidden]=\"data.requestType == 'service_request' && productData.length > 0\" class=\"cs-btn mt16\" text-right>\r\n                        <ion-button (click)=\"onAddProductToListHandler()\" class=\"success min w100\">Add to List</ion-button>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"complaints list mt20\">\r\n                    \r\n                    <div *ngFor=\"let row of productData; let index = index\" class=\"figure\">\r\n                        <div class=\"cnt-info\">\r\n                            <div class=\"cs-left\">\r\n                                <div class=\"f-alpha\">{{row.fgNo[0]}}</div>\r\n                                <div class=\"names\">\r\n                                    <h1>{{row.fgNo}}</h1>\r\n                                </div>\r\n                            </div>\r\n                            <div (click)=\"onDeleteProductHandler(index)\" class=\"cm-right\">\r\n                                <a class=\"delete\"><i class=\"material-icons\">delete_sweep</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div> \r\n            </div>\r\n\r\n            <div [hidden] = \"data.requestType == 'commissioning'\" class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Service Type</h1></div>\r\n                        <div class=\"dflex\">\r\n\r\n                            <ion-item  class=\"cs-select\">\r\n                                            \r\n                                <ion-label>Service Type</ion-label>\r\n                                <ionic-selectable\r\n                                [(ngModel)]=\"data.transaction_type\"\r\n                                [items]=\"transactionTypeList\"\r\n                                itemValueField=\"transaction_type\"\r\n                                itemTextField=\"transaction_type\"\r\n                                formControlName=\"transaction_type\"\r\n                                [canSearch]=\"true\">\r\n                                \r\n                                </ionic-selectable>\r\n            \r\n                            </ion-item>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>   \r\n\r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Engineer Visiting Date & Time</h1></div>\r\n                    <div class=\"dflex\">\r\n                        <ion-item [ngClass]=\"submitted && f1.visitDate.errors && f1.visitDate.errors.required ? 'has-error' : (f1.visitDate.errors && !f1.visitDate.errors.required ? 'has-text' : '')\" class=\"date-time mb0 mr10\">\r\n                            <ion-label>Date</ion-label>\r\n                            <ion-datetime formControlName=\"visitDate\" [(ngModel)]=\"data.visitDate\" displayFormat=\"DD-MMM-YYYY\" min=\"{{minDate}}\"></ion-datetime>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f1.visitDate.errors\" class=\"cs-error\">\r\n                                \r\n                            </ion-text>\r\n                            \r\n                        </ion-item>\r\n                        \r\n                        <ion-item [ngClass]=\"submitted && f1.visitTime.errors && f1.visitTime.errors.required ? 'has-error' : (f1.visitTime.errors && !f1.visitTime.errors.required ? 'has-text' : '')\" class=\"date-time\">\r\n                            <ion-label>Time</ion-label>\r\n                            <ion-datetime formControlName=\"visitTime\" [(ngModel)]=\"data.visitTime\" displayFormat=\"h:mm A\"></ion-datetime>\r\n                            \r\n                            <ion-text *ngIf=\"submitted && f1.visitTime.errors\" class=\"cs-error\">\r\n                                \r\n                            </ion-text>\r\n                            \r\n                        </ion-item>\r\n                        \r\n                        \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n              \r\n            <div class=\"cs-right mt20\">\r\n                <div class=\"common_form inner_page\">\r\n                    <div class=\"heading\"><h1>Contact Person Information</h1></div>\r\n                </div>\r\n                <div class=\"cs-checkbox\">\r\n                    <ion-list>\r\n                        <ion-item *ngFor=\"let row of contactList\">\r\n                            <ion-label>{{row.name}} ({{row.designation}})</ion-label>\r\n                            <ion-checkbox [(ngModel)]=\"row.checked\" formControlName=\"contactName\" slot=\"start\" color=\"success\"></ion-checkbox>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"cs-btn mt20\">\r\n                <ion-button type=\"submit\" class=\"success large\" expand=\"full\">SUBMIT</ion-button>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n    \r\n</div>\r\n\r\n</form>\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: AddrequestPageRoutingModule */

  /***/
  function srcAppCustomer_appService_requestAddrequestAddrequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddrequestPageRoutingModule", function () {
      return AddrequestPageRoutingModule;
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


    var _addrequest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addrequest.page */
    "./src/app/customer_app/service_request/addrequest/addrequest.page.ts");

    var routes = [{
      path: '',
      component: _addrequest_page__WEBPACK_IMPORTED_MODULE_3__["AddrequestPage"]
    }];

    var AddrequestPageRoutingModule = function AddrequestPageRoutingModule() {
      _classCallCheck(this, AddrequestPageRoutingModule);
    };

    AddrequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddrequestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addrequest/addrequest.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addrequest/addrequest.module.ts ***!
    \******************************************************************************/

  /*! exports provided: AddrequestPageModule */

  /***/
  function srcAppCustomer_appService_requestAddrequestAddrequestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddrequestPageModule", function () {
      return AddrequestPageModule;
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


    var _addrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addrequest-routing.module */
    "./src/app/customer_app/service_request/addrequest/addrequest-routing.module.ts");
    /* harmony import */


    var _addrequest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addrequest.page */
    "./src/app/customer_app/service_request/addrequest/addrequest.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var AddrequestPageModule = function AddrequestPageModule() {
      _classCallCheck(this, AddrequestPageModule);
    };

    AddrequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addrequest_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddrequestPageRoutingModule"]],
      declarations: [_addrequest_page__WEBPACK_IMPORTED_MODULE_6__["AddrequestPage"]]
    })], AddrequestPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addrequest/addrequest.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addrequest/addrequest.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appService_requestAddrequestAddrequestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".alert-wrapper.sc-ion-alert-md {\n  min-width: 98% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJfYXBwL3NlcnZpY2VfcmVxdWVzdC9hZGRyZXF1ZXN0L0U6XFx0cmljb2xpdGUtYXBwL3NyY1xcYXBwXFxjdXN0b21lcl9hcHBcXHNlcnZpY2VfcmVxdWVzdFxcYWRkcmVxdWVzdFxcYWRkcmVxdWVzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvYWRkcmVxdWVzdC9hZGRyZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lcl9hcHAvc2VydmljZV9yZXF1ZXN0L2FkZHJlcXVlc3QvYWRkcmVxdWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgbWluLXdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxufSIsIi5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCB7XG4gIG1pbi13aWR0aDogOTglICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/addrequest/addrequest.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/customer_app/service_request/addrequest/addrequest.page.ts ***!
    \****************************************************************************/

  /*! exports provided: AddrequestPage */

  /***/
  function srcAppCustomer_appService_requestAddrequestAddrequestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddrequestPage", function () {
      return AddrequestPage;
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
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var AddrequestPage = /*#__PURE__*/function () {
      function AddrequestPage(popoverController, route, routeParams, formBuilder, alertCtrl, modalController, dbService) {
        _classCallCheck(this, AddrequestPage);

        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.data = {};
        this.submitted = false;
        this.contactList = [];
        this.projectList = [];
        this.fgList = [];
        this.natureList = [];
        this.priorityList = [];
        this.transactionTypeList = [];
        this.complaintTypeList = [];
        this.productData = [];
        this.minDate = '';
        this.defaultActiveTitle = 'service_request';
        this.data = {};
        this.registerForm1 = this.formBuilder.group({
          requestType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          complaintTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          project: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          fgNo: [''],
          natureProblem: [''],
          visitDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          visitTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          contactName: [''],
          transaction_type: ['']
        });
        this.data = {
          requestType: '',
          complaintTitle: '',
          description: '',
          project: '',
          fgNo: '',
          natureProblem: '',
          visitDate: '',
          visitTime: '',
          contactName: '',
          transaction_type: ''
        };
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD');
      }

      _createClass(AddrequestPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getComplaintTitleListHandler();
          this.onGetMyProjectListHandler();
          this.getNatureProbelmListHandler();
          this.getPriorityListHandler();
          this.getTransactionTypeListHandler(); // this.defaultActiveTitle = 'service_request';
        }
      }, {
        key: "onRequestTypeChangeHandler",
        value: function onRequestTypeChangeHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.data.requestType == 'commissioning') {
                      this.data.transaction_type = {
                        transaction_type: 'commissioning'
                      };
                    } else {
                      this.data.transaction_type = '';
                    }

                    console.log(this.data.transaction_type);
                    this.data.complaintTitle = '';

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onAddProductToListHandler",
        value: function onAddProductToListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var isFGExist;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!this.data.fgNo || !this.data.fgNo["fg_no"])) {
                      _context2.next = 6;
                      break;
                    }

                    if (!this.data.fgNo || !this.data.fgNo["fg_no"]) {
                      this.dbService.onShowAlertMessage('Error', 'FG No Reuired');
                    }

                    console.log(this.data.fgNo);
                    return _context2.abrupt("return");

                  case 6:
                    console.log(this.fgList);
                    console.log(this.data.fgNo);
                    isFGExist = this.productData.findIndex(function (row) {
                      return row.fgNo == _this.data.fgNo.fg_no;
                    });

                    if (isFGExist === -1) {
                      this.productData.push({
                        fgNo: this.data.fgNo["fg_no"]
                      });
                    } else {
                      this.productData[isFGExist].fgNo = this.data.fgNo["fg_no"];
                    }

                    console.log(this.productData);
                    this.data.fgNo = {};
                    this.dbService.presentToast('Product Update To List!');

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onSaveRequestHandler",
        value: function onSaveRequestHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var isContactSelected, index, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.submitted = true;

                    if (!(this.productData.length == 0)) {
                      _context3.next = 4;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'No Product Information Added!');
                    return _context3.abrupt("return");

                  case 4:
                    if (!(this.data.requestType == 'service_request' && (!this.data.transaction_type || !this.data.transaction_type["transaction_type"]))) {
                      _context3.next = 7;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Service Type Required!');
                    return _context3.abrupt("return");

                  case 7:
                    isContactSelected = false;

                    for (index = 0; index < this.contactList.length; index++) {
                      if (this.contactList[index].checked) {
                        isContactSelected = true;
                      }
                    }

                    if (isContactSelected) {
                      _context3.next = 12;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'No Contact Information Selected!');
                    return _context3.abrupt("return");

                  case 12:
                    if (!this.registerForm1.invalid) {
                      _context3.next = 25;
                      break;
                    }

                    this.registerForm1.get('requestType').markAsTouched();
                    this.registerForm1.get('complaintTitle').markAsTouched();
                    this.registerForm1.get('description').markAsTouched();
                    this.registerForm1.get('project').markAsTouched();
                    this.registerForm1.get('fgNo').markAsTouched();
                    this.registerForm1.get('natureProblem').markAsTouched();
                    this.registerForm1.get('visitDate').markAsTouched();
                    this.registerForm1.get('visitTime').markAsTouched();
                    this.registerForm1.get('contactName').markAsTouched();
                    this.registerForm1.get('transaction_type').markAsTouched();
                    _context3.next = 30;
                    break;

                  case 25:
                    _context3.next = 27;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Save Request ?',
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
                          var inputData = JSON.parse(JSON.stringify(_this2.data));
                          inputData["projectId"] = _this2.data.project["id"];
                          inputData["projectName"] = _this2.data.project["project_name"];
                          inputData["fgData"] = _this2.productData;
                          inputData["contactList"] = _this2.contactList;
                          inputData["visitDate"] = moment__WEBPACK_IMPORTED_MODULE_6__(_this2.data.visitDate).format('YYYY-MM-DD');
                          inputData["visitTime"] = moment__WEBPACK_IMPORTED_MODULE_6__(_this2.data.visitTime).format('hh:mm');
                          inputData["visitDateTime"] = inputData["visitDate"] + ' ' + inputData["visitTime"];
                          inputData["transactionType"] = _this2.data.transaction_type;

                          _this2.dbService.presentLoader();

                          console.log(inputData);

                          _this2.dbService.onPostRequestHandler(inputData, 'customer/onSubmitTaskData').subscribe(function (result) {
                            console.log(result);

                            _this2.dbService.dismissLoader();

                            var routeURL = '/customer/request';

                            _this2.route.navigate([routeURL]);

                            _this2.dbService.presentToast('Request Saved Successfully!');
                          });
                        }
                      }]
                    });

                  case 27:
                    alert = _context3.sent;
                    _context3.next = 30;
                    return alert.present();

                  case 30:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getComplaintTitleListHandler",
        value: function getComplaintTitleListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    inputData = {};
                    this.dbService.onPostRequestHandler(inputData, 'task/getComplaintTypeList').subscribe(function (result) {
                      console.log(result);
                      _this3.complaintTypeList = result["complaintTypeList"];
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
        key: "getNatureProbelmListHandler",
        value: function getNatureProbelmListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    inputData = {};
                    this.dbService.onPostRequestHandler(inputData, 'task/getNatureProbelmList').subscribe(function (result) {
                      console.log(result);
                      _this4.natureList = result["natureProbelmList"];
                      console.log(_this4.natureList);
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
        key: "getTransactionTypeListHandler",
        value: function getTransactionTypeListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    inputData = {};
                    this.dbService.onPostRequestHandler(inputData, 'task/getTransactionTypeList').subscribe(function (result) {
                      console.log(result);
                      _this5.transactionTypeList = result["transactionTypeList"];
                      console.log(_this5.transactionTypeList);
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "getPriorityListHandler",
        value: function getPriorityListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    inputData = {};
                    this.dbService.onPostRequestHandler(inputData, 'task/getPriorityList').subscribe(function (result) {
                      console.log(result);
                      _this6.priorityList = result["priorityList"];
                      console.log(_this6.priorityList);
                    });

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onGetMyProjectListHandler",
        value: function onGetMyProjectListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this7 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    inputData = {};
                    this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe(function (result) {
                      console.log(result);
                      _this7.projectList = result["projectContactList"];
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "onGetProjectFGListHandler",
        value: function onGetProjectFGListHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this8 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.fgList = [];
                    this.data.fgNo = {};
                    this.productData = [];
                    inputData = {};
                    inputData["projectId"] = this.data.project["id"];
                    this.dbService.presentLoader();
                    this.dbService.onPostRequestHandler(inputData, 'customer/getProjectFGList').subscribe(function (result) {
                      console.log(result);
                      _this8.fgList = result["fgList"];

                      _this8.dbService.dismissLoader();

                      _this8.onGetProjectContactHandler();
                    });

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "onGetProjectContactHandler",
        value: function onGetProjectContactHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this9 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    inputData = {
                      projectId: this.data.project["id"]
                    };
                    this.dbService.onPostRequestHandler(inputData, 'task/onGetTaskProjectAllContactList').subscribe(function (result) {
                      console.log(result);
                      _this9.contactList = result["contactList"];
                    });

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "onDeleteProductHandler",
        value: function onDeleteProductHandler(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this10 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Delete Product ?',
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

                          _this10.productData.splice(index, 1);

                          _this10.dbService.presentToast('Product Deleted Successfully!');
                        }
                      }]
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.data = {};
        }
      }, {
        key: "f1",
        get: function get() {
          return this.registerForm1.controls;
        }
      }]);

      return AddrequestPage;
    }();

    AddrequestPage.ctorParameters = function () {
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

    AddrequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addrequest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addrequest.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/addrequest/addrequest.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addrequest.page.scss */
      "./src/app/customer_app/service_request/addrequest/addrequest.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], AddrequestPage);
    /***/
  }
}]);
//# sourceMappingURL=service_request-addrequest-addrequest-module-es5.js.map