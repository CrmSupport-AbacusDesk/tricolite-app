function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-remarks-com-remarks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComRemarksComRemarksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#SR-{{taskNo}} - <ion-text>Request Remarks</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n                <ion-item class=\"h110\">\r\n                    <ion-textarea [(ngModel)] = \"data.remark\"  placeholder=\"Your Comment\"></ion-textarea>\r\n                </ion-item>\r\n                \r\n                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\r\n                    <ion-button (click)=\"onSaveRemarkDataHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"remarkList && remarkList.length > 0\" class=\"complaints product-list mt20\">\r\n\r\n                <div class=\"cs-heading\"><h1>Remark History</h1></div>\r\n\r\n                <div class=\"feedback pt10 pr10 pb10 pl10\">\r\n\r\n                    <div *ngFor=\"let row of remarkList\" class=\"figure mb10\">\r\n                        <div class=\"cs-head\"><ion-text>{{row.dateCreated}}</ion-text></div>     \r\n                        <div class=\"cs-description\">\r\n                            <h1><ion-text>{{row.description}}</ion-text></h1>\r\n                        </div>               \r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ComRemarksPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComRemarksComRemarksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComRemarksPageRoutingModule", function () {
      return ComRemarksPageRoutingModule;
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


    var _com_remarks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./com-remarks.page */
    "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts");

    var routes = [{
      path: '',
      component: _com_remarks_page__WEBPACK_IMPORTED_MODULE_3__["ComRemarksPage"]
    }];

    var ComRemarksPageRoutingModule = function ComRemarksPageRoutingModule() {
      _classCallCheck(this, ComRemarksPageRoutingModule);
    };

    ComRemarksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComRemarksPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-remarks/com-remarks.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ComRemarksPageModule */

  /***/
  function srcAppTechnician_appComplaintsComRemarksComRemarksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComRemarksPageModule", function () {
      return ComRemarksPageModule;
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


    var _com_remarks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./com-remarks-routing.module */
    "./src/app/technician_app/complaints/com-remarks/com-remarks-routing.module.ts");
    /* harmony import */


    var _com_remarks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./com-remarks.page */
    "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts");

    var ComRemarksPageModule = function ComRemarksPageModule() {
      _classCallCheck(this, ComRemarksPageModule);
    };

    ComRemarksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _com_remarks_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComRemarksPageRoutingModule"]],
      declarations: [_com_remarks_page__WEBPACK_IMPORTED_MODULE_6__["ComRemarksPage"]]
    })], ComRemarksPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComRemarksComRemarksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLXJlbWFya3MvY29tLXJlbWFya3MucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-remarks/com-remarks.page.ts ***!
    \***************************************************************************/

  /*! exports provided: ComRemarksPage */

  /***/
  function srcAppTechnician_appComplaintsComRemarksComRemarksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComRemarksPage", function () {
      return ComRemarksPage;
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


    var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../tec-compliant-popover/tec-compliant-popover.component */
    "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ComRemarksPage = /*#__PURE__*/function () {
      function ComRemarksPage(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
        var _this = this;

        _classCallCheck(this, ComRemarksPage);

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
        this.remarkList = [];
        this.data = {};
        this.routeParams.params.subscribe(function (params) {
          console.log(params);
          _this.taskId = params.taskId;
          _this.taskNo = params.taskNo;
          _this.taskStatus = params.taskStatus;
          console.log(_this.taskId);
          console.log(_this.taskNo);
          console.log(_this.taskStatus);

          _this.onGetTaskRemarkDataHandler();
        });
      }

      _createClass(ComRemarksPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSaveRemarkDataHandler",
        value: function onSaveRemarkDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.data.remark) {
                      _context.next = 4;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Remark Required!');
                    _context.next = 9;
                    break;

                  case 4:
                    _context.next = 6;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Save Remark ?',
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
                            remark: _this2.data.remark
                          };

                          _this2.dbService.presentLoader();

                          _this2.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskRemarkData').subscribe(function (result) {
                            console.log(result);

                            _this2.dbService.dismissLoader();

                            _this2.data.remark = '';

                            _this2.dbService.presentToast('Remark Saved Successfully!');

                            _this2.onGetTaskRemarkDataHandler();
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context.sent;
                    _context.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onGetTaskRemarkDataHandler",
        value: function onGetTaskRemarkDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.dbService.presentLoader();
                    inputData = {
                      taskId: this.taskId
                    };
                    this.dbService.onPostRequestHandler(inputData, 'task/getTaskRemarkData').subscribe(function (result) {
                      console.log(result);

                      _this3.dbService.dismissLoader();

                      _this3.remarkList = result["taskRemarkData"];
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var taskData, popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    taskData = {
                      taskId: this.taskId,
                      taskNo: this.taskNo
                    };
                    _context3.next = 3;
                    return this.popoverController.create({
                      component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
                      event: ev,
                      translucent: true,
                      componentProps: taskData
                    });

                  case 3:
                    popover = _context3.sent;
                    _context3.next = 6;
                    return popover.present();

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
        key: "GoComplaintDetail",
        value: function GoComplaintDetail() {
          this.location.back();
        }
      }]);

      return ComRemarksPage;
    }();

    ComRemarksPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]
      }];
    };

    ComRemarksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-remarks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-remarks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-remarks/com-remarks.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-remarks.page.scss */
      "./src/app/technician_app/complaints/com-remarks/com-remarks.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ComRemarksPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-remarks-com-remarks-module-es5.js.map