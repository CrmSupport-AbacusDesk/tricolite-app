function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-request-request-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request/request.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request/request.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appService_requestRequestRequestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    \r\n    <ion-refresher slot=\"fixed\" \r\n    (ionRefresh)=\"ionRefresh($event)\">\r\n    <ion-refresher-content\r\n    pullingIcon=\"arrow-dropdown\"\r\n    pullingText=\"Pull to refresh\"\r\n    refreshingSpinner=\"circles\"\r\n    refreshingText=\"Refreshing...\">\r\n</ion-refresher-content>\r\n</ion-refresher>\r\n\r\n<div class=\"cs-main-container\">\r\n    <div class=\"custome-head\">\r\n        <div class=\"cs-ion-header\">\r\n            <div class=\"cs-left\">\r\n                <ion-title class=\"pl0\">Service Request</ion-title>\r\n                \r\n            </div>\r\n            \r\n            <div class=\"cs-right\">\r\n                <ion-button (click)=\"onSearchClickHandler()\"><ion-icon name=\"search\"></ion-icon></ion-button>\r\n                <ion-button (click)=\"presentModal()\" id=\"bt\"><ion-icon name=\"funnel\"></ion-icon></ion-button>\r\n            </div>\r\n            \r\n            <div [ngClass]=\"isSearchOptionActive ? 'active' : ''\" class=\"search-filetr\">\r\n                \r\n                <ion-searchbar [(ngModel)]=\"data.inputSearch\" (ngModelChange)=\"onUpdateCurrentPageHandler(); onGetComplaintListHandler(false, '')\" id=\"inputSearch\"></ion-searchbar>\r\n                \r\n                <a (click) = \"data.inputSearch = ''; isSearchOptionActive = false; onUpdateCurrentPageHandler(); onGetComplaintListHandler(false, '')\"  class=\"cancel\">Cancel</a>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"cs-ion-hf\"></div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <div class=\"cs-ion-content pt0\" padding>\r\n        <div class=\"complaints list\">\r\n            \r\n            <div *ngFor=\"let row of complaintList\" class=\"figure\">\r\n                \r\n                <div (click)=\"GoComplaintDetail(row.id)\" class=\"top\">\r\n                    <div class=\"cs-left\">\r\n                        <h1>#SR - {{row.task_no}} <ion-text>({{row.days}} Days)</ion-text></h1>\r\n                    </div>\r\n                    <div class=\"cs-right\">\r\n                        <ion-text>{{row.dateCreated}}  |  {{row.timeCreated}}</ion-text>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"row.assignUserName\" class=\"cnt-info\">\r\n                    \r\n                    <div (click)=\"GoComplaintDetail(row.id)\" class=\"cs-left\">\r\n                        <div class=\"f-alpha\">{{row.assignUserName[0]}}</div>\r\n                        <div class=\"names\">\r\n                            <ion-text>Enginer info</ion-text>\r\n                            <h1>{{row.assignUserName}}</h1>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"cs-right\">\r\n                        <a href=\"tel: {{row.assignUserMobile}}\" class=\"call\"><i class=\"material-icons\">call</i></a>\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"one-one-one\" (click)=\"GoComplaintDetail(row.id)\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Project </ion-text>\r\n                            <ion-text>{{row.project_name}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div *ngIf=\"row.task_type != 'commissioning'\"  class=\"one-one-one\" (click)=\"GoComplaintDetail(row.id)\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Issue Category </ion-text>\r\n                            <ion-text>{{row.compaint_title}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"one-two-one three\" >\r\n                    \r\n                    <div class=\"cs-box\" (click)=\"GoComplaintDetail(row.id)\">\r\n                        <div>\r\n                            <ion-text>Priority</ion-text>\r\n                            <ion-text>{{row.priority ? row.priority : 'NA'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>FG No.</ion-text>\r\n                            <ion-text *ngFor=\"let fgRow of row.fgData\" class=\"one-two-one three\" (click)=\"GoComplaintDetail(row.id)\">{{fgRow.fg_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"cs-box\" *ngIf=\"row.task_type != 'commissioning'\">\r\n                        <div>\r\n                            <ion-text>Service Type</ion-text>\r\n                            <ion-text>{{(row.transaction_type == 'FOC' || row.transaction_type == 'Sale/Warranty' || row.transaction_type?.toLowerCase() == 'commissioning') ? 'Warranty Service' : 'Paid Service'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"one-one-one\" (click)=\"GoComplaintDetail(row.id)\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Engineer Visiting Date & Time </ion-text>\r\n                            <ion-text>{{row.visit_date_time| date : 'dd MMM yyyy hh:mm a'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div *ngFor=\"let fgRow of row.fgData\" class=\"one-two-one three\" (click)=\"GoComplaintDetail(row.id)\">\r\n                    \r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>FG No.</ion-text>\r\n                            <ion-text>{{fgRow.fg_no}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    \r\n                    <div *ngIf=\"row.task_type != 'commissioning'\" class=\"cs-box\" >\r\n                        <div>\r\n                            <ion-text>Service Type</ion-text>\r\n                            <ion-text>{{(row.transaction_type == 'FOC' || row.transaction_type == 'Sale/Warranty' || row.transaction_type?.toLowerCase() == 'commissioning') ? 'Free Service' : 'Paid Service'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                </div>\r\n                 -->\r\n                <div class=\"one-two-one two\" (click)=\"GoComplaintDetail(row.id)\">\r\n                    <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Eng. Work Status</ion-text>\r\n                            <ion-text>{{row.workStatus ? row.workStatus : '--'}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n             \r\n                    <div [ngClass] = \"(row.status) ? row.status.toLowerCase() : ''\" class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Request Status</ion-text>\r\n                            <ion-text>{{row.status}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n             \r\n                    <!-- <div class=\"cs-box\">\r\n                        <div>\r\n                            <ion-text>Service Request Status</ion-text>\r\n                            <ion-text>{{row.status}}</ion-text>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n               \r\n            </div>\r\n        </div>\r\n        \r\n        \r\n        <div *ngIf=\"!isRequestInProcess && complaintList.length == 0\" class=\"no-data\">\r\n            <img src=\"assets/icon/no_found.svg\">\r\n            <p>Data Not Found!</p>\r\n        </div>\r\n        \r\n    </div>\r\n</div>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" size=\"small\">\r\n    <ion-fab-button (click)=\"AddServiceRequest();\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n</ion-fab>\r\n\r\n\r\n\r\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"doCheckForMoreData\" (ionInfinite)=\"onGetComplaintListHandler(false, $event)\">\r\n    <ion-infinite-scroll-content\r\n    loadingSpinner=\"bubbles\"\r\n    loadingText=\"Loading more data...\">\r\n</ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request/request-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request/request-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: RequestPageRoutingModule */

  /***/
  function srcAppCustomer_appService_requestRequestRequestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestPageRoutingModule", function () {
      return RequestPageRoutingModule;
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


    var _request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./request.page */
    "./src/app/customer_app/service_request/request/request.page.ts");

    var routes = [{
      path: '',
      component: _request_page__WEBPACK_IMPORTED_MODULE_3__["RequestPage"]
    }];

    var RequestPageRoutingModule = function RequestPageRoutingModule() {
      _classCallCheck(this, RequestPageRoutingModule);
    };

    RequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RequestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request/request.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request/request.module.ts ***!
    \************************************************************************/

  /*! exports provided: RequestPageModule */

  /***/
  function srcAppCustomer_appService_requestRequestRequestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestPageModule", function () {
      return RequestPageModule;
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


    var _request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./request-routing.module */
    "./src/app/customer_app/service_request/request/request-routing.module.ts");
    /* harmony import */


    var _request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./request.page */
    "./src/app/customer_app/service_request/request/request.page.ts");

    var RequestPageModule = function RequestPageModule() {
      _classCallCheck(this, RequestPageModule);
    };

    RequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _request_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestPageRoutingModule"]],
      declarations: [_request_page__WEBPACK_IMPORTED_MODULE_6__["RequestPage"]]
    })], RequestPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request/request.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request/request.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appService_requestRequestRequestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvcmVxdWVzdC9yZXF1ZXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request/request.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/customer_app/service_request/request/request.page.ts ***!
    \**********************************************************************/

  /*! exports provided: RequestPage */

  /***/
  function srcAppCustomer_appService_requestRequestRequestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestPage", function () {
      return RequestPage;
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


    var src_app_complaintfiltermodal_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/complaintfiltermodal/complaintfiltermodal.page */
    "./src/app/complaintfiltermodal/complaintfiltermodal.page.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);

    var RequestPage = /*#__PURE__*/function () {
      function RequestPage(route, formBuilder, alertCtrl, modalController, dbService) {
        _classCallCheck(this, RequestPage);

        this.route = route;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.dbService = dbService;
        this.show = false;
        this.buttonName = 'Show';
        this.routeType = '';
        this.routeTitleForView = '';
        this.complaintList = [];
        this.data = {};
        this.searchData = {};
        this.isSearchOptionActive = false;
        this.doCheckForMoreData = true;
        this.isRequestInProcess = true;
        this.currentPage = 1;
        this.pageSize = 5;
      }

      _createClass(RequestPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.onGetComplaintListHandler(true, '');
          }, 1000);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.show = !this.show;

          if (this.show) {
            this.buttonName = 'Hide';
          } else {
            this.buttonName = 'Show';
          }
        }
      }, {
        key: "onGetComplaintListHandler",
        value: function onGetComplaintListHandler(showLoading, infiniteScroll) {
          var _this2 = this;

          console.log('hello');
          console.log(this.route.url);
          var inputData = {
            start: this.currentPage,
            pageLimit: this.pageSize
          };
          var loginData = JSON.parse(localStorage.getItem('loginData'));
          inputData["searchData"] = this.searchData;
          inputData["inputSearch"] = this.data.inputSearch;
          inputData["customerId"] = loginData["loginId"];

          if (showLoading) {
            this.dbService.presentLoader();
          }

          this.dbService.onPostRequestHandler(inputData, 'task/getTaskList').subscribe(function (result) {
            console.log(result);

            if (showLoading) {
              setTimeout(function () {
                _this2.dbService.dismissLoader();
              }, 2000);
            }

            var resultData = result["taskList"];

            if (!resultData || resultData == null || resultData.length == 0) {
              resultData = [];
              _this2.doCheckForMoreData = false;
            }

            if (_this2.currentPage == 1) {
              _this2.complaintList = resultData;
              console.log(_this2.complaintList);
            } else {
              var _loop = function _loop(index) {
                var isIndex = _this2.complaintList.findIndex(function (row) {
                  return row.id == resultData[index].id;
                });

                if (isIndex === -1) {
                  _this2.complaintList.push(resultData[index]);
                }
              };

              for (var index = 0; index < resultData.length; index++) {
                _loop(index);
              }

              console.log(_this2.complaintList);
            }

            _this2.currentPage += 1;

            if (infiniteScroll) {
              infiniteScroll.target.complete();
            }

            setTimeout(function () {
              _this2.isRequestInProcess = false;
            }, 1000);
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.onUpdateCurrentPageHandler();
          this.onGetComplaintListHandler(false, '');
        }
      }, {
        key: "onSearchClickHandler",
        value: function onSearchClickHandler() {
          this.isSearchOptionActive = true;
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#inputSearch').focus();
          }, 2000);
        }
      }, {
        key: "ionRefresh",
        value: function ionRefresh(event) {
          var _this3 = this;

          console.log('Pull Event Triggered!');
          setTimeout(function () {
            console.log('Async operation has ended');
            _this3.data.inputSearch = '';
            _this3.searchData = {};

            _this3.onUpdateCurrentPageHandler();

            _this3.onGetComplaintListHandler(true, '');

            event.target.complete();
          }, 2000);
        }
      }, {
        key: "onUpdateCurrentPageHandler",
        value: function onUpdateCurrentPageHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    setTimeout(function () {
                      _this4.doCheckForMoreData = true;
                    }, 1000);
                    this.currentPage = 1;
                    this.onScrollToTopHandler();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onScrollToTopHandler",
        value: function onScrollToTopHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.content.scrollToTop();

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: src_app_complaintfiltermodal_complaintfiltermodal_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintfiltermodalPage"],
                      componentProps: {
                        searchData: this.searchData
                      }
                    });

                  case 2:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data["data"] && data["data"]["data"]) {
                        console.log(data["data"]);
                        _this5.searchData = data["data"]["data"];

                        _this5.onUpdateCurrentPageHandler();

                        _this5.onGetComplaintListHandler(true, '');
                      }
                    });
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
        key: "GoComplaintDetail",
        value: function GoComplaintDetail(taskId) {
          this.route.navigateByUrl('/customer/request/detail/' + taskId + '');
        }
      }, {
        key: "AddServiceRequest",
        value: function AddServiceRequest() {
          this.route.navigateByUrl('/customer/request/addrequest');
        }
      }, {
        key: "GiveYourFeedBack",
        value: function GiveYourFeedBack(taskId, userId) {
          this.route.navigateByUrl('/customer/request/giveyourfeedback/' + taskId + '/' + userId + '');
        }
      }]);

      return RequestPage;
    }();

    RequestPage.ctorParameters = function () {
      return [{
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
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])], RequestPage.prototype, "content", void 0);
    RequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request/request.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request.page.scss */
      "./src/app/customer_app/service_request/request/request.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], RequestPage);
    /***/
  }
}]);
//# sourceMappingURL=service_request-request-request-module-es5.js.map