function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-spareparts-com-spareparts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComSparepartsComSparepartsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#SR-{{taskNo}} - <ion-text> Assigned Material Details</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n\r\n            <div class=\"complaints product-list part-list\">\r\n                <div class=\"cs-heading\"><h1> Assigned Material Details</h1></div>\r\n\r\n                <div *ngFor=\"let row of sparePartAssignedData\" class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">{{row.assign_qty}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{row.part_name}}</h1>\r\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{row.part_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div *ngIf=\"sparePartInstalledData && sparePartInstalledData.length > 0\" class=\"complaints product-list part-list mt20\">\r\n\r\n                <div class=\"cs-heading\"><h1>install assigned material details</h1></div>\r\n\r\n                <div *ngFor=\"let row of sparePartInstalledData\" class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">{{row.installed_qty}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{row.part_name}}</h1>\r\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{row.part_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" size=\"small\" (click)=\"GoToInstallSpareParts()\" *ngIf = \"taskStatus != 'Close'\">\r\n        <ion-fab-button>\r\n            <ion-icon name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ComSparepartsPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComSparepartsComSparepartsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComSparepartsPageRoutingModule", function () {
      return ComSparepartsPageRoutingModule;
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


    var _com_spareparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./com-spareparts.page */
    "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts");

    var routes = [{
      path: '',
      component: _com_spareparts_page__WEBPACK_IMPORTED_MODULE_3__["ComSparepartsPage"]
    }];

    var ComSparepartsPageRoutingModule = function ComSparepartsPageRoutingModule() {
      _classCallCheck(this, ComSparepartsPageRoutingModule);
    };

    ComSparepartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComSparepartsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-spareparts/com-spareparts.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ComSparepartsPageModule */

  /***/
  function srcAppTechnician_appComplaintsComSparepartsComSparepartsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComSparepartsPageModule", function () {
      return ComSparepartsPageModule;
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


    var _com_spareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./com-spareparts-routing.module */
    "./src/app/technician_app/complaints/com-spareparts/com-spareparts-routing.module.ts");
    /* harmony import */


    var _com_spareparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./com-spareparts.page */
    "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var ComSparepartsPageModule = function ComSparepartsPageModule() {
      _classCallCheck(this, ComSparepartsPageModule);
    };

    ComSparepartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _com_spareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComSparepartsPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]],
      declarations: [_com_spareparts_page__WEBPACK_IMPORTED_MODULE_6__["ComSparepartsPage"]]
    })], ComSparepartsPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComSparepartsComSparepartsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLXNwYXJlcGFydHMvY29tLXNwYXJlcGFydHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ComSparepartsPage */

  /***/
  function srcAppTechnician_appComplaintsComSparepartsComSparepartsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComSparepartsPage", function () {
      return ComSparepartsPage;
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

    var ComSparepartsPage = /*#__PURE__*/function () {
      function ComSparepartsPage(popoverController, router, routeParams, alertCtrl, toastCtrl, dbService) {
        var _this = this;

        _classCallCheck(this, ComSparepartsPage);

        this.popoverController = popoverController;
        this.router = router;
        this.routeParams = routeParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.sparePartAssignedData = [];
        this.sparePartInstalledData = [];
        this.data = {};
        this.routeParams.params.subscribe(function (params) {
          console.log(params);
          _this.taskId = params.taskId;
          _this.taskNo = params.taskNo;
          _this.taskStatus = params.taskStatus;
          console.log(_this.taskId);
          console.log(_this.taskNo);
          console.log(_this.taskStatus);

          _this.onGetTaskSparePartDataHandler();
        });
      }

      _createClass(ComSparepartsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onGetTaskSparePartDataHandler",
        value: function onGetTaskSparePartDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    inputData = {
                      taskId: this.taskId
                    };
                    this.dbService.onPostRequestHandler(inputData, 'task/getTaskSparePartData').subscribe(function (result) {
                      console.log(result);
                      _this2.sparePartAssignedData = result["taskAssignedPartData"];
                      _this2.sparePartInstalledData = result["taskInstalledPartData"];
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var taskData, popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    taskData = {
                      taskId: this.taskId,
                      taskNo: this.taskNo,
                      taskStatus: this.taskStatus
                    };
                    console.log(taskData);
                    _context2.next = 4;
                    return this.popoverController.create({
                      component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
                      event: ev,
                      translucent: true,
                      componentProps: taskData
                    });

                  case 4:
                    popover = _context2.sent;
                    _context2.next = 7;
                    return popover.present();

                  case 7:
                    return _context2.abrupt("return", _context2.sent);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "GoComplaintDetail",
        value: function GoComplaintDetail() {
          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/' + this.taskId);
        }
      }, {
        key: "GoToInstallSpareParts",
        value: function GoToInstallSpareParts() {
          this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/installspareparts/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
        }
      }]);

      return ComSparepartsPage;
    }();

    ComSparepartsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
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

    ComSparepartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-spareparts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-spareparts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-spareparts.page.scss */
      "./src/app/technician_app/complaints/com-spareparts/com-spareparts.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ComSparepartsPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-spareparts-com-spareparts-module-es5.js.map