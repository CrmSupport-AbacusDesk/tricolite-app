(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service_request-request-details-request-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request-details/request-details.page.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request-details/request-details.page.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appService_requestRequestDetailsRequestDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>Request Detail</ion-title>\n                </div>\n                <div class=\"cs-right\">\n                    <ion-button (click)=\"presentcutomerPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\n                </div>\n            </div>\n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <div class=\"cs-ion-content pt0\" padding>\n            <div class=\"complaints\">\n                <div class=\"figure\">\n                    <div class=\"top\">\n                        <div class=\"cs-left\">\n                            <h1>#COM-{{taskDataDetail.task_no}} <ion-text>({{taskDataDetail.days}})</ion-text></h1>\n                        </div>\n                        <div class=\"cs-right\">\n                            <ion-text>{{taskDataDetail.dateCreated}} | {{taskDataDetail.timeCreated}}</ion-text>\n                        </div>\n                    </div>\n                    \n                    <div class=\"one-two-one three mt10\">\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Created By</ion-text>\n                                <ion-text>{{taskDataDetail.created_by_name}} </ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Service Type</ion-text>\n                                <ion-text>{{(taskDataDetail.transaction_type == 'FOC' || taskDataDetail.transaction_type == 'Sale/Warranty' || taskDataDetail.transaction_type == 'Commissioning') ? 'Free Service' : 'Paid Service'}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box close\" style=\"background: #FFCC00;\">\n                            <div>\n                                <ion-text>Priority</ion-text>\n                                <ion-text>{{taskDataDetail.priority? taskDataDetail.priority : 'N/A'}}</ion-text>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"one-two-one one mt10\">\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Request Type & Complaint Title</ion-text>\n                                <ion-text>{{taskDataDetail.task_type | titlecase}} / {{taskDataDetail.compaint_title}}</ion-text>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"one-two-one one mt10\">\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Description : <strong>{{taskDataDetail.task_description}}</strong></ion-text>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"one-two-one two mt10\">\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Eng. Work Status</ion-text>\n                                <ion-text>{{taskDataDetail.workStatus? taskDataDetail.workStatus : 'N/A'}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box\" style=\"background: #FF0000;\">\n                            <div>\n                                <ion-text>Complaint Status</ion-text>\n                                <ion-text>{{taskDataDetail.status? taskDataDetail.status : 'N/A'}}</ion-text>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"complaints product-list mt20\">\n                <div class=\"cs-heading\"><h1>Product Information</h1></div>\n                <div class=\"figure\">\n                    <div class=\"cnt-info\">\n                        <div class=\"cs-left\" *ngFor = \"let fgData of taskDataFgDetail\">\n                            <div class=\"f-alpha\">{{fgData.customer_name.substring(0,1).toUpperCase()}}</div>\n                            <div class=\"names\">\n                                <h1>{{fgData.customer_name.toUpperCase()}}</h1>\n                                <ion-text>({{fgData.project_name}})</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-right\">\n                        </div>\n                    </div>\n                    \n                    <div class=\"one-two-one three\" *ngFor = \"let fgData of taskDataFgDetail\">\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>So No.</ion-text>\n                                <ion-text>{{fgData.so_no}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Si No.</ion-text>\n                                <ion-text>{{fgData.si_no}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>FG No.</ion-text>\n                                <ion-text>{{fgData.fg_no}} </ion-text>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div *ngIf=\"taskAssignData.length != 0\" class=\"complaints product-list mt20\">\n                <div class=\"cs-heading\"><h1>Assign Subordinates</h1></div>\n                <div class=\"figure\" *ngFor=\"let assignData of taskAssignData\">\n                    <div class=\"cnt-person\">\n                        <div class=\"p-info\" >\n                            <div class=\"cs-left\" >\n                                <h1 [hidden] = \"assignData.type=='Primary'\"><i class=\"material-icons\">person</i>{{assignData.name}} ({{assignData.designation}})</h1>\n                            </div>\n                            <div class=\"cs-right\">\n                                <a href=\"tel: {{assignData.mobile}}\"><i class=\"material-icons\">call</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"h70\"></div>\n        </div>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request-details/request-details-routing.module.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request-details/request-details-routing.module.ts ***!
    \************************************************************************************************/

  /*! exports provided: RequestDetailsPageRoutingModule */

  /***/
  function srcAppCustomer_appService_requestRequestDetailsRequestDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsPageRoutingModule", function () {
      return RequestDetailsPageRoutingModule;
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


    var _request_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./request-details.page */
    "./src/app/customer_app/service_request/request-details/request-details.page.ts");

    const routes = [{
      path: '',
      component: _request_details_page__WEBPACK_IMPORTED_MODULE_3__["RequestDetailsPage"]
    }];
    let RequestDetailsPageRoutingModule = class RequestDetailsPageRoutingModule {};
    RequestDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RequestDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request-details/request-details.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request-details/request-details.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: RequestDetailsPageModule */

  /***/
  function srcAppCustomer_appService_requestRequestDetailsRequestDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsPageModule", function () {
      return RequestDetailsPageModule;
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


    var _request_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./request-details-routing.module */
    "./src/app/customer_app/service_request/request-details/request-details-routing.module.ts");
    /* harmony import */


    var _request_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./request-details.page */
    "./src/app/customer_app/service_request/request-details/request-details.page.ts");

    let RequestDetailsPageModule = class RequestDetailsPageModule {};
    RequestDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _request_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestDetailsPageRoutingModule"]],
      declarations: [_request_details_page__WEBPACK_IMPORTED_MODULE_6__["RequestDetailsPage"]]
    })], RequestDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request-details/request-details.page.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request-details/request-details.page.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appService_requestRequestDetailsRequestDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9zZXJ2aWNlX3JlcXVlc3QvcmVxdWVzdC1kZXRhaWxzL3JlcXVlc3QtZGV0YWlscy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/customer_app/service_request/request-details/request-details.page.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/customer_app/service_request/request-details/request-details.page.ts ***!
    \**************************************************************************************/

  /*! exports provided: RequestDetailsPage */

  /***/
  function srcAppCustomer_appService_requestRequestDetailsRequestDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestDetailsPage", function () {
      return RequestDetailsPage;
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


    var _request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../request-popover/request-popover.component */
    "./src/app/customer_app/service_request/request-popover/request-popover.component.ts");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let RequestDetailsPage = class RequestDetailsPage {
      constructor(popoverController, dbService, routeParams) {
        this.popoverController = popoverController;
        this.dbService = dbService;
        this.routeParams = routeParams;
        this.taskId = '';
        this.taskAllData = {};
        this.taskDataDetail = {};
        this.taskDataFgDetail = [];
        this.taskAssignData = [];
      }

      ngOnInit() {
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          console.log(this.taskId);
          this.onGetComplaintDetailHandler();
        });
      }

      presentcutomerPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const taskPopUpData = {
            taskReportCount: this.taskDataDetail.taskReportCount,
            taskInstalledPartCount: this.taskDataDetail.taskInstalledPartCount,
            taskStatus: this.taskDataDetail.status
          };
          localStorage.setItem('taskPopUpData', JSON.stringify(taskPopUpData));
          console.log(this.taskDataDetail.taskData);
          const taskData = {
            taskId: this.taskId,
            taskNo: this.taskDataDetail.task_no,
            taskStatus: this.taskDataDetail.status
          };
          console.log(taskData);
          const popover = yield this.popoverController.create({
            component: _request_popover_request_popover_component__WEBPACK_IMPORTED_MODULE_3__["RequestPopoverComponent"],
            event: ev,
            translucent: true,
            componentProps: taskData
          });
          popover.onDidDismiss().then(result => {
            console.log(result);
            this.onGetComplaintDetailHandler();
          });
          return yield popover.present();
        });
      }

      onGetComplaintDetailHandler() {
        const inputData = {
          taskId: this.taskId
        };
        this.dbService.onPostRequestHandler(inputData, 'task/onTaskDetail').subscribe(result => {
          console.log(result);
          this.taskDataDetail = Object.assign({}, result['taskData']);
          console.log('*** Task Data Detail ***');
          console.log(this.taskDataDetail);
          this.taskDataFgDetail = Object.assign([], result['taskFGData']);
          console.log(this.taskDataFgDetail);
          this.taskAssignData = Object.assign([], result['taskAssignData']);
          console.log(this.taskAssignData);
        });
      }

    };

    RequestDetailsPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
    }];

    RequestDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/service_request/request-details/request-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request-details.page.scss */
      "./src/app/customer_app/service_request/request-details/request-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_4__["DbServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], RequestDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=service_request-request-details-request-details-module-es5.js.map