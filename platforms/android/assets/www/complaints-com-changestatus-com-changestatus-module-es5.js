function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-changestatus-com-changestatus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComChangestatusComChangestatusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#SR-{{taskNo}} - <ion-text>Change Status</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            \r\n            <div class=\"common_form inner_page\">\r\n                <ion-item class=\"cs-select\">\r\n                    <ion-label>Select Status</ion-label>\r\n                    \r\n                    <ion-select [(ngModel)] = \"data.status\" placeholder=\"Select One\">\r\n\r\n                        <ion-select-option *ngFor=\"let row of statusOptionList\" [value]=\"row.status\">{{row.status}}</ion-select-option>\r\n\r\n                    </ion-select>\r\n\r\n                </ion-item>\r\n                \r\n                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\r\n                    <ion-button (click) = \"onSaveStatusDataHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                </div>\r\n            </div>\r\n            \r\n            <div *ngIf=\"taskStatusList && taskStatusList.length > 0\" class=\"complaints product-list part-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Status History</h1></div>\r\n\r\n                <div *ngFor=\"let row of taskStatusList\" class=\"figure nicon\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"names\">\r\n                                <h1>{{row.status}}</h1>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text><span>{{row.dateCreated}}</span> | {{row.timeCreated}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-changestatus/com-changestatus-routing.module.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus-routing.module.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ComChangestatusPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComChangestatusComChangestatusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComChangestatusPageRoutingModule", function () {
      return ComChangestatusPageRoutingModule;
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


    var _com_changestatus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./com-changestatus.page */
    "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts");

    var routes = [{
      path: '',
      component: _com_changestatus_page__WEBPACK_IMPORTED_MODULE_3__["ComChangestatusPage"]
    }];

    var ComChangestatusPageRoutingModule = function ComChangestatusPageRoutingModule() {
      _classCallCheck(this, ComChangestatusPageRoutingModule);
    };

    ComChangestatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComChangestatusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-changestatus/com-changestatus.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ComChangestatusPageModule */

  /***/
  function srcAppTechnician_appComplaintsComChangestatusComChangestatusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComChangestatusPageModule", function () {
      return ComChangestatusPageModule;
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


    var _com_changestatus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./com-changestatus-routing.module */
    "./src/app/technician_app/complaints/com-changestatus/com-changestatus-routing.module.ts");
    /* harmony import */


    var _com_changestatus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./com-changestatus.page */
    "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts");

    var ComChangestatusPageModule = function ComChangestatusPageModule() {
      _classCallCheck(this, ComChangestatusPageModule);
    };

    ComChangestatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _com_changestatus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComChangestatusPageRoutingModule"]],
      declarations: [_com_changestatus_page__WEBPACK_IMPORTED_MODULE_6__["ComChangestatusPage"]]
    })], ComChangestatusPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComChangestatusComChangestatusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWNoYW5nZXN0YXR1cy9jb20tY2hhbmdlc3RhdHVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.ts ***!
    \*************************************************************************************/

  /*! exports provided: ComChangestatusPage */

  /***/
  function srcAppTechnician_appComplaintsComChangestatusComChangestatusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComChangestatusPage", function () {
      return ComChangestatusPage;
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


    var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tec-compliant-popover/tec-compliant-popover.component */
    "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ComChangestatusPage = /*#__PURE__*/function () {
      function ComChangestatusPage(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
        var _this = this;

        _classCallCheck(this, ComChangestatusPage);

        this.popoverController = popoverController;
        this.router = router;
        this.location = location;
        this.routeParams = routeParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.statusOptionList = [];
        this.taskStatusList = [];
        this.routeTitleForView = '';
        this.data = {};
        this.routeTitleForView = localStorage.getItem('routeTitleForView');
        this.routeParams.params.subscribe(function (params) {
          console.log(params);
          _this.taskId = params.taskId;
          _this.taskNo = params.taskNo;
          _this.taskStatus = params.taskStatus;
          console.log(_this.taskId);
          console.log(_this.taskNo);
          console.log(_this.taskStatus);

          _this.onGetTaskStatusDataHandler();

          _this.onGetTaskOptionDataHandler();
        });
      }

      _createClass(ComChangestatusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSaveStatusDataHandler",
        value: function onSaveStatusDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var isStatusAlreadyExist, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.data.status) {
                      _context.next = 4;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Status Required!');
                    _context.next = 13;
                    break;

                  case 4:
                    isStatusAlreadyExist = this.taskStatusList.findIndex(function (row) {
                      return row.status == _this2.data.status;
                    });

                    if (!(isStatusAlreadyExist != -1)) {
                      _context.next = 8;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Status Already Added!');
                    return _context.abrupt("return", false);

                  case 8:
                    _context.next = 10;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Save Status ?',
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
                            taskId: _this2.taskId,
                            status: _this2.data.status
                          };

                          _this2.dbService.presentLoader();

                          _this2.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskStatusData').subscribe(function (result) {
                            console.log(result);

                            _this2.dbService.dismissLoader();

                            _this2.data.status = '';

                            _this2.dbService.presentToast('Status Saved Successfully!');

                            _this2.onGetTaskStatusDataHandler();
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
        key: "onGetTaskStatusDataHandler",
        value: function onGetTaskStatusDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    inputData = {
                      taskId: this.taskId
                    };
                    this.dbService.onPostRequestHandler(inputData, 'task/getTaskStatusData').subscribe(function (result) {
                      console.log(result);
                      _this3.taskStatusList = result["taskStatusData"];
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
        key: "onGetTaskOptionDataHandler",
        value: function onGetTaskOptionDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.dbService.presentLoader();
                    inputData = {
                      taskId: this.taskId
                    };
                    this.dbService.onPostRequestHandler(inputData, 'task/onGetStatusOptionList').subscribe(function (result) {
                      console.log(result);

                      _this4.dbService.dismissLoader();

                      _this4.statusOptionList = result["statusOptionList"];
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var taskData, popover;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    taskData = {
                      taskId: this.taskId,
                      taskNo: this.taskNo,
                      taskStatus: this.taskStatus
                    };
                    _context4.next = 3;
                    return this.popoverController.create({
                      component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
                      event: ev,
                      translucent: true,
                      componentProps: taskData
                    });

                  case 3:
                    popover = _context4.sent;
                    _context4.next = 6;
                    return popover.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "GoComplaintDetail",
        value: function GoComplaintDetail() {
          this.location.back();
        }
      }]);

      return ComChangestatusPage;
    }();

    ComChangestatusPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
      }];
    };

    ComChangestatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-changestatus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-changestatus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-changestatus.page.scss */
      "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ComChangestatusPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-changestatus-com-changestatus-module-es5.js.map