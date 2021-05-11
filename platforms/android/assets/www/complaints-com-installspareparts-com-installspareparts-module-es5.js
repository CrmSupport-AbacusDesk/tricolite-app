function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-installspareparts-com-installspareparts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComInstallsparepartsComInstallsparepartsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button  (click)=\"GoToSpareParts()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#SR-{{taskNo}} - <ion-text>Install Spare Parts</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"common_form inner_page\">\r\n\r\n                <ion-item class=\"cs-select\">\r\n                    <ion-label>Select Part Name</ion-label>\r\n                    <ionic-selectable\r\n                        [(ngModel)]=\"data.part\"\r\n                        [items]=\"partList\"\r\n                        itemValueField=\"part_id\"\r\n                        itemTextField=\"partNameWithNo\"\r\n                        [canSearch]=\"true\"\r\n                        (onChange)=\"onItemSelectedHandler($event)\">\r\n                    </ionic-selectable>\r\n                </ion-item>\r\n                \r\n                <div class=\"dflex\">\r\n                    \r\n                    <ion-item class=\"mw95 ml10 mr10\">\r\n                        <ion-label position=\"floating\">QTY</ion-label>\r\n                        <ion-input type=\"number\" [(ngModel)]=\"data.qty\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n                    </ion-item>\r\n                    \r\n                    <div class=\"plus-icon\">\r\n                        <ion-button (click)=\"onAddToCartHandler()\" color=\"success\"><ion-icon name=\"add\"></ion-icon></ion-button>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n            \r\n            <div *ngIf=\"partCartData && partCartData.length > 0\" class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Spare Parts</h1></div>\r\n\r\n                <div *ngFor=\"let row of partCartData; let index = index\" class=\"figure pb0\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"names\">\r\n                                <h1>{{row.part_name}}</h1>\r\n                                <ion-text>Last Update : {{row.lastUpdated}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <div class=\"count-delete\">\r\n                                <div class=\"count\">{{row.qty}}</div>\r\n                                <ion-button (click)=\"onItemDeleteHandler(index)\" fill=\"clear\" color=\"danger\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"partCartData && partCartData.length > 0\" class=\"cs-btn mt50\" text-right>\r\n                <ion-button (click) = \"onSaveInstalledPartHandler()\" class=\"success round large w150\" >SAVE</ion-button>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ComInstallsparepartsPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComInstallsparepartsComInstallsparepartsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComInstallsparepartsPageRoutingModule", function () {
      return ComInstallsparepartsPageRoutingModule;
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


    var _com_installspareparts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./com-installspareparts.page */
    "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts");

    var routes = [{
      path: '',
      component: _com_installspareparts_page__WEBPACK_IMPORTED_MODULE_3__["ComInstallsparepartsPage"]
    }];

    var ComInstallsparepartsPageRoutingModule = function ComInstallsparepartsPageRoutingModule() {
      _classCallCheck(this, ComInstallsparepartsPageRoutingModule);
    };

    ComInstallsparepartsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComInstallsparepartsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ComInstallsparepartsPageModule */

  /***/
  function srcAppTechnician_appComplaintsComInstallsparepartsComInstallsparepartsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComInstallsparepartsPageModule", function () {
      return ComInstallsparepartsPageModule;
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


    var _com_installspareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./com-installspareparts-routing.module */
    "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts-routing.module.ts");
    /* harmony import */


    var _com_installspareparts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./com-installspareparts.page */
    "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts");
    /* harmony import */


    var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic-selectable */
    "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");

    var ComInstallsparepartsPageModule = function ComInstallsparepartsPageModule() {
      _classCallCheck(this, ComInstallsparepartsPageModule);
    };

    ComInstallsparepartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _com_installspareparts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComInstallsparepartsPageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]],
      declarations: [_com_installspareparts_page__WEBPACK_IMPORTED_MODULE_6__["ComInstallsparepartsPage"]]
    })], ComInstallsparepartsPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComInstallsparepartsComInstallsparepartsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWluc3RhbGxzcGFyZXBhcnRzL2NvbS1pbnN0YWxsc3BhcmVwYXJ0cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ComInstallsparepartsPage */

  /***/
  function srcAppTechnician_appComplaintsComInstallsparepartsComInstallsparepartsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComInstallsparepartsPage", function () {
      return ComInstallsparepartsPage;
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

    var ComInstallsparepartsPage = /*#__PURE__*/function () {
      function ComInstallsparepartsPage(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
        var _this = this;

        _classCallCheck(this, ComInstallsparepartsPage);

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
        this.partList = [];
        this.partCartData = [];
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

      _createClass(ComInstallsparepartsPage, [{
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
                      _this2.partList = result["taskAssignedPartData"];
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
        key: "onItemSelectedHandler",
        value: function onItemSelectedHandler(event) {
          console.log(event);
        }
      }, {
        key: "onSaveInstalledPartHandler",
        value: function onSaveInstalledPartHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(!this.partCartData || this.partCartData.length == 0)) {
                      _context2.next = 4;
                      break;
                    }

                    this.dbService.onShowAlertMessage('Error', 'Part Required!');
                    _context2.next = 9;
                    break;

                  case 4:
                    _context2.next = 6;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Save Part ?',
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
                            taskId: _this3.taskId,
                            installedPartData: _this3.partCartData
                          };

                          _this3.dbService.presentLoader();

                          _this3.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskPartData').subscribe(function (result) {
                            console.log(result);

                            _this3.dbService.dismissLoader();

                            _this3.data.status = ''; // tslint:disable-next-line: max-line-length

                            // tslint:disable-next-line: max-line-length
                            _this3.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/spareparts/' + _this3.taskId + '/' + _this3.taskNo + '/' + _this3.taskStatus);

                            _this3.dbService.presentToast('Part Saved Successfully!');
                          });
                        }
                      }]
                    });

                  case 6:
                    alert = _context2.sent;
                    _context2.next = 9;
                    return alert.present();

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onAddToCartHandler",
        value: function onAddToCartHandler() {
          var _this4 = this;

          var isInputEmpty = false;
          var emptyMsg = '';

          if (!this.data.part || this.data.part_id) {
            isInputEmpty = true;
            emptyMsg = 'Part Name Required!';
          } else if (!this.data.qty || this.data.qty == 0 || this.data.qty < 0) {
            isInputEmpty = true;
            emptyMsg = 'Qty Required!';
          }

          var totalQtyAfterAddedToCart = 0;
          var isIndex = this.partList.findIndex(function (row) {
            return row.part_id == _this4.data.part["part_id"];
          });
          var isQtyMoreThanAssigned = false;

          if (isIndex != -1) {
            console.log(this.data.part);
            var cartPartData = this.partCartData.filter(function (row) {
              return row.part_id == _this4.data.part["part_id"];
            });
            console.log(cartPartData);

            if (cartPartData.length == 0) {
              totalQtyAfterAddedToCart = this.data.qty;
            } else {
              for (var index = 0; index < cartPartData.length; index++) {
                totalQtyAfterAddedToCart += cartPartData[index].qty;
              }

              totalQtyAfterAddedToCart += this.data.qty;
            }

            if (totalQtyAfterAddedToCart > this.partList[isIndex].totalQty) {
              isQtyMoreThanAssigned = true;
              emptyMsg = 'Qty Should Not be more than assigned Part Qty';
            }
          }

          console.log(totalQtyAfterAddedToCart);

          if (isInputEmpty || isQtyMoreThanAssigned) {
            this.dbService.onShowAlertMessage('Error', emptyMsg);
          } else {
            var cartIndex = this.partCartData.findIndex(function (row) {
              return row.part_id == _this4.data.part["part_id"];
            });

            if (cartIndex === -1) {
              var _index = this.partList.findIndex(function (row) {
                return row.part_id == _this4.data.part["part_id"];
              });

              this.partCartData.push({
                part_name: this.data.part["part_name"],
                part_id: this.data.part["part_id"],
                part_no: this.partList[_index].part_no,
                qty: this.data.qty,
                lastUpdated: this.partList[_index].lastUpdated
              });
            } else {
              this.partCartData[cartIndex].qty = totalQtyAfterAddedToCart;
            }

            this.data = {};
            this.dbService.presentToast('Item Updated To Cart Successfully!');
          }
        }
      }, {
        key: "onItemDeleteHandler",
        value: function onItemDeleteHandler(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: 'Are You Sure, You Want To Delete Item ?',
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

                          _this5.partCartData.splice(index, 1);

                          _this5.dbService.presentToast('Item Deleted!');
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
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
                      taskNo: this.taskNo
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

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "GoToSpareParts",
        value: function GoToSpareParts() {
          this.location.back();
        }
      }]);

      return ComInstallsparepartsPage;
    }();

    ComInstallsparepartsPage.ctorParameters = function () {
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

    ComInstallsparepartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-installspareparts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-installspareparts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-installspareparts.page.scss */
      "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ComInstallsparepartsPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-installspareparts-com-installspareparts-module-es5.js.map