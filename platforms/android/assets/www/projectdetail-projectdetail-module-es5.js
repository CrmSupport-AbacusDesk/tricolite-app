function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectdetail-projectdetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/projectdetail.page.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/projectdetail.page.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appProjectdetailProjectdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/projects']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>{{projectData.project_name}} - Detail</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div *ngIf=\"projectData && projectData.project_name\" class=\"cs-ion-content pt0\" padding>\r\n            \r\n            <div class=\"complaints\">\r\n                <div class=\"figure\">\r\n                    <div class=\"cnt-info pt0 pl0 pr0\">\r\n                        <div class=\"cs-left\" >\r\n                            <div *ngIf=\"projectData && projectData.project_name\" class=\"f-alpha\">{{projectData.project_name[0]}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{projectData.project_name}}</h1>\r\n                                <ion-text>{{projectData.street}} {{projectData.state_name}}, {{projectData.district_name}}, {{projectData.city}}, {{projectData.pincode}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one three\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Contact Person</ion-text>\r\n                                <ion-text>{{projectData.contactData ? projectData.contactData.length : 0}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Total Products</ion-text>\r\n                                <ion-text>{{projectData.productData.length}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Service Request</ion-text>\r\n                                <ion-text>{{projectData.totalServiceRequest}} </ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"cs-tabs mt16\">\r\n                <ion-button (click)=\"activeTab=1\" [ngClass]=\"activeTab==1 ? 'active' : ''\">Products</ion-button>\r\n                <ion-button (click) = \"activeTab=2\" [ngClass]=\"activeTab==2  || activeTab == 3 ? 'active' : ''\">Contact Persons\r\n                    <i class=\"material-icons\" (click)=\"contactPerson()\" style=\"font-size: 19px; margin-left: 15px;\">add_circle</i>\r\n                </ion-button>\r\n            </div>\r\n\r\n            <div class=\"complaints product-list mt16\">\r\n                <div *ngIf=\"activeTab == 1\" class=\"project_FG_data\">\r\n                    <div *ngFor=\"let row of projectData.productData\" class=\"figure\">\r\n                        <div class=\"cnt-info\">\r\n                            <div class=\"cs-left\">\r\n                                <div class=\"names\">\r\n                                    <h1>{{row.fg_no}}  | <span>{{row.warranty_type}}</span></h1>\r\n                                    <ion-text>{{row.service_center_name}}</ion-text>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"cs-right\">\r\n                                <ion-text class=\"font10\"><span class=\"font8\">Warranty (Valid Upto)</span><br>{{row.warranty}} ({{row.warantyValidUpToInFormat}})</ion-text>\r\n                            </div>\r\n                        </div>\r\n\r\n                        \r\n                        <div class=\"cnt-info pt0\">\r\n                            <div class=\"cs-left\">\r\n                                <div class=\"names\"> \r\n                                    <h1><ion-text>Next Service :</ion-text> &nbsp; </h1>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        \r\n                        <div class=\"one-two-one merge\">\r\n                            <div class=\"cs-box\">\r\n                                <div>\r\n                                    <ion-text>Brand / Model / Sub Model</ion-text>\r\n                                    <ion-text>{{row.brand}} / {{row.model}} / {{row.sub_model}}</ion-text>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"cs-box\">\r\n                                <div>\r\n                                    <ion-text>So / Si No.</ion-text>\r\n                                    <ion-text>{{row.so_no}} / {{row.si_no}}</ion-text>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"one-two-one three mt10\">\r\n                            <div class=\"cs-box\">\r\n                                <div>\r\n                                    <ion-text>Date Of Supply</ion-text>\r\n                                    <ion-text>{{row.dateSupplyInFormat}}</ion-text>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"cs-box\">\r\n                                <div>\r\n                                    <ion-text>Installation Date</ion-text>\r\n                                    <ion-text>{{row.dateInstallationInFormat}}</ion-text>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"cs-box\">\r\n                                <div>\r\n                                    <ion-text>Service Request</ion-text>\r\n                                    <ion-text>{{row.productServiceRquestCount}}</ion-text>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--  -->\r\n                \r\n                <div *ngIf=\"activeTab == 2\" class=\"my_contact_persons\">\r\n                    \r\n                    <div *ngFor= \"let row of projectData.contactData; let index = index\" class=\"figure pb0\">\r\n                        <div class=\"cnt-info\">\r\n                            <div class=\"cs-left\">\r\n                                <div class=\"f-alpha bg1\">g</div>\r\n                                <div class=\"names\">\r\n                                    <h1>{{row.name}} ({{row.designation}})</h1>\r\n                                    <a>{{row.email}}</a>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"cs-right two-icons\">\r\n                                <a href=\"tel: {{row.mobile}}\" class=\"call\"><i class=\"material-icons\">call</i></a>\r\n                                <a class=\"call red-color\" (click)=\"deleteContactPerson(row.id, index)\"><i class=\"material-icons\">delete_sweep</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <!-- <div (click)=\"activeTab = 3\" class=\"cs-btn ion-padding\" text-right>\r\n                        <ion-button class=\"w45 h45 round font16\" ><ion-icon name=\"add\"></ion-icon></ion-button>\r\n                    </div> -->\r\n                    \r\n                </div>\r\n                \r\n                <div *ngIf=\"activeTab == 3\" class=\"add_new_contact_person\">\r\n                    <div class=\"cnt-person\">\r\n                        <div class=\"css-heading\"><h1>Add New Contact Person</h1></div>\r\n                        \r\n                        <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveContactDetailHandler()\">\r\n                            \r\n                            <div class=\"common_form inner_page\">\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.contactName.errors && f1.contactName.errors.required ? 'has-error' : (f1.contactName.errors && !f1.contactName.errors.required ? 'has-text' : '')\">\r\n                                    \r\n                                    <ion-label position=\"floating\">Contact Person Name</ion-label>\r\n                                    <ion-input formControlName=\"contactName\" [(ngModel)]=\"data.contactName\"></ion-input>\r\n                                    \r\n                                    <ion-text *ngIf=\"submitted && f1.contactName.errors\" class=\"cs-error\">\r\n                                        \r\n                                        <span *ngIf=\"f1.contactName.errors.minlength\">Minimum 4 Letter Required</span>\r\n\r\n                                        <span *ngIf=\"f1.contactName.errors.maxlength\">Minimum 50 Letter Required</span>\r\n                                        \r\n                                    </ion-text>\r\n                                    \r\n                                </ion-item>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.contactMobile.errors && f1.contactMobile.errors.required ? 'has-error' : (f1.contactMobile.errors && !f1.contactMobile.errors.required ? 'has-text' : '')\">\r\n                                    \r\n                                    <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                    <ion-input type=\"tel\" formControlName=\"contactMobile\" [(ngModel)]=\"data.contactMobile\" (keypress) = \"dbService.numberOnly($event)\"></ion-input>\r\n                                    \r\n                                    <ion-text *ngIf=\"submitted && f1.contactMobile.errors\" class=\"cs-error\">\r\n                                        \r\n                                        <span *ngIf=\"f1.contactMobile.errors.minlength\">Minimum 10 Digit Required</span>\r\n                                        \r\n                                        <span *ngIf=\"f1.contactMobile.errors.maxlength\">Maximum 10 Digit Required</span>\r\n                                        \r\n                                    </ion-text>\r\n                                    \r\n                                </ion-item>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.contactEmail.errors && f1.contactEmail.errors.required ? 'has-error' : (f1.contactEmail.errors && !f1.contactEmail.errors.required ? 'has-text' : '')\">\r\n                                    \r\n                                    <ion-label position=\"floating\">Email ID</ion-label>\r\n                                    <ion-input formControlName=\"contactEmail\" [(ngModel)]=\"data.contactEmail\"></ion-input>\r\n                                    \r\n                                    <ion-text *ngIf=\"submitted && f1.contactEmail.errors\" class=\"cs-error\">\r\n                                        \r\n                                        <span *ngIf=\"!f1.contactEmail.errors.required\">Email Invalid</span>\r\n                                        \r\n                                    </ion-text>\r\n                                    \r\n                                </ion-item>\r\n                                \r\n                                <ion-item [ngClass]=\"submitted && f1.designation.errors && f1.designation.errors.required ? 'has-error' : (f1.designation.errors && !f1.designation.errors.required ? 'has-text' : '')\">\r\n\r\n                                    <ion-label position=\"floating\">Designation</ion-label>\r\n                                    <ion-input formControlName=\"designation\" [(ngModel)]=\"data.designation\"></ion-input>\r\n                                    \r\n                                    <ion-text *ngIf=\"submitted && f1.designation.errors\" class=\"cs-error\">\r\n                                        \r\n                                        <span *ngIf=\"f1.designation.errors.minlength\">Minimum 3 Letter Required</span>\r\n\r\n                                        <span *ngIf=\"f1.designation.errors.minlength\">Maximum 50 Letter Allowed!</span>\r\n                                        \r\n                                    </ion-text>\r\n                                </ion-item>\r\n                                \r\n                            </div>\r\n                            \r\n                            <div class=\"cs-btn mt30 pb10 lr\">\r\n                                \r\n                                <ion-button (click)=\"activeTab=2\" class=\"dark min w100 clear border\" fill=\"clear\">CANCEL</ion-button>\r\n                                \r\n                                <ion-button type=\"submit\" class=\"success min w100\">SAVE</ion-button>\r\n                                \r\n                            </div>\r\n                            \r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/projectdetail-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/projectdetail-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ProjectdetailPageRoutingModule */

  /***/
  function srcAppCustomer_appProjectdetailProjectdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectdetailPageRoutingModule", function () {
      return ProjectdetailPageRoutingModule;
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


    var _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projectdetail.page */
    "./src/app/customer_app/projectdetail/projectdetail.page.ts");

    var routes = [{
      path: '',
      component: _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__["ProjectdetailPage"]
    }];

    var ProjectdetailPageRoutingModule = function ProjectdetailPageRoutingModule() {
      _classCallCheck(this, ProjectdetailPageRoutingModule);
    };

    ProjectdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/projectdetail.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/projectdetail.module.ts ***!
    \********************************************************************/

  /*! exports provided: ProjectdetailPageModule */

  /***/
  function srcAppCustomer_appProjectdetailProjectdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectdetailPageModule", function () {
      return ProjectdetailPageModule;
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


    var _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projectdetail-routing.module */
    "./src/app/customer_app/projectdetail/projectdetail-routing.module.ts");
    /* harmony import */


    var _projectdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projectdetail.page */
    "./src/app/customer_app/projectdetail/projectdetail.page.ts");

    var ProjectdetailPageModule = function ProjectdetailPageModule() {
      _classCallCheck(this, ProjectdetailPageModule);
    };

    ProjectdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectdetailPageRoutingModule"]],
      declarations: [_projectdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectdetailPage"]]
    })], ProjectdetailPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/projectdetail.page.scss":
  /*!********************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/projectdetail.page.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appProjectdetailProjectdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9wcm9qZWN0ZGV0YWlsL3Byb2plY3RkZXRhaWwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/customer_app/projectdetail/projectdetail.page.ts":
  /*!******************************************************************!*\
    !*** ./src/app/customer_app/projectdetail/projectdetail.page.ts ***!
    \******************************************************************/

  /*! exports provided: ProjectdetailPage */

  /***/
  function srcAppCustomer_appProjectdetailProjectdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectdetailPage", function () {
      return ProjectdetailPage;
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


    var _contactpersonmodel_contactpersonmodel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contactpersonmodel/contactpersonmodel.page */
    "./src/app/customer_app/projectdetail/contactpersonmodel/contactpersonmodel.page.ts");

    var ProjectdetailPage = /*#__PURE__*/function () {
      function ProjectdetailPage(modalController, popoverController, route, routeParams, formBuilder, alertCtrl, dbService) {
        _classCallCheck(this, ProjectdetailPage);

        this.modalController = modalController;
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.projectId = '';
        this.projectData = {};
        this.data = {};
        this.submitted = false;
        this.activeTab = 1;
        this.registerForm1 = this.formBuilder.group({
          contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
          contactMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
          contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
          designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]]
        });
      }

      _createClass(ProjectdetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.routeParams.params.subscribe(function (params) {
            console.log(params);
            _this.projectId = params.projectId;
            console.log(_this.projectId);

            _this.onGetProjectDetail();
          });
        }
      }, {
        key: "onGetProjectDetail",
        value: function onGetProjectDetail() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('hello');
                    this.dbService.presentLoader();
                    inputData = {
                      projectId: this.projectId
                    };
                    this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe(function (result) {
                      console.log(result);

                      _this2.dbService.dismissLoader();

                      _this2.projectData = result["projectData"][0];
                      console.log(_this2.projectData);
                    });

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSaveContactDetailHandler",
        value: function onSaveContactDetailHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.submitted = true;

                    if (!this.registerForm1.invalid) {
                      _context2.next = 8;
                      break;
                    }

                    this.registerForm1.get('contactName').markAsTouched();
                    this.registerForm1.get('contactMobile').markAsTouched();
                    this.registerForm1.get('contactEmail').markAsTouched();
                    this.registerForm1.get('designation').markAsTouched();
                    _context2.next = 13;
                    break;

                  case 8:
                    _context2.next = 10;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Save Contact ?',
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
                          var contactTempData = JSON.parse(JSON.stringify(_this3.data));
                          var inputData = {};
                          inputData["projectId"] = _this3.projectId;
                          inputData["contactData"] = [];
                          inputData["contactData"].push(contactTempData);

                          _this3.dbService.presentLoader();

                          _this3.dbService.onPostRequestHandler(inputData, 'customer/saveProjectContact').subscribe(function (result) {
                            console.log(result);

                            _this3.dbService.dismissLoader();

                            if (result["status"] == 'error') {
                              _this3.dbService.onShowAlertMessage('Error', result["statusMessage"]);
                            } else {
                              _this3.data = {};
                              _this3.activeTab = 2;

                              _this3.onGetProjectDetail();

                              _this3.dbService.presentToast('Contact Saved Successfully!');
                            }
                          });
                        }
                      }]
                    });

                  case 10:
                    alert = _context2.sent;
                    _context2.next = 13;
                    return alert.present();

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "contactPerson",
        value: function contactPerson() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _contactpersonmodel_contactpersonmodel_page__WEBPACK_IMPORTED_MODULE_6__["ContactpersonmodelPage"],
                      componentProps: {
                        projectId: this.projectId
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    this.onGetProjectDetail();
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "deleteContactPerson",
        value: function deleteContactPerson(cpId, index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var inputData, alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log(cpId);
                    console.log(index);
                    inputData = {};
                    inputData["cpId"] = cpId;
                    _context4.next = 6;
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

                          _this4.dbService.presentLoader();

                          _this4.dbService.onPostRequestHandler(inputData, 'customer/deleteContactPerson').subscribe(function (result) {
                            console.log(result);

                            _this4.dbService.dismissLoader();

                            if (result["status"] == 'error') {
                              _this4.dbService.onShowAlertMessage('Error', result["statusMessage"]);
                            } else {
                              _this4.data = {};
                              _this4.activeTab = 2;

                              _this4.onGetProjectDetail();

                              _this4.dbService.presentToast('Contact Delete Successfully!');
                            }
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context4.sent;
                    _context4.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "f1",
        get: function get() {
          return this.registerForm1.controls;
        }
      }]);

      return ProjectdetailPage;
    }();

    ProjectdetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
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
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
      }];
    };

    ProjectdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projectdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projectdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/projectdetail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projectdetail.page.scss */
      "./src/app/customer_app/projectdetail/projectdetail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ProjectdetailPage);
    /***/
  }
}]);
//# sourceMappingURL=projectdetail-projectdetail-module-es5.js.map