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


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/request']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>Request Detail</ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentcutomerPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"complaints\">\r\n                <div class=\"figure\">\r\n                    <div class=\"top\">\r\n                        <div class=\"cs-left\">\r\n                            <h1>#SR-{{taskDataDetail.task_no}} <ion-text>({{taskDataDetail.days}})</ion-text></h1>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{taskDataDetail.dateCreated}} | {{taskDataDetail.timeCreated}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one three mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Created By</ion-text>\r\n                                <ion-text>{{taskDataDetail.created_by_name}} </ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Service Type</ion-text>\r\n                                <ion-text *ngIf=\"taskDataDetail.task_type == 'commissioning'\">Under Warranty</ion-text>\r\n                                <ion-text *ngIf=\"taskDataDetail.task_type != 'commissioning'\">{{(taskDataDetail.transaction_type == 'FOC' || taskDataDetail.transaction_type == 'Sale/Warranty' || taskDataDetail.transaction_type?.toLowerCase() == 'commissioning') ? 'Under Warranty' : 'Out of Warranty'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n\r\n                            <!-- class=\"cs-box close\" -->\r\n                            <div>\r\n                                <ion-text>Priority</ion-text>\r\n                                <ion-text>{{taskDataDetail.priority? taskDataDetail.priority : 'N/A'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Request Type & Request Title</ion-text>\r\n                                <ion-text>{{taskDataDetail.task_type | titlecase}} / {{taskDataDetail.compaint_title}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"taskDataDetail.nature_problem\" class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Nature Problem</ion-text>\r\n                                <ion-text>{{taskDataDetail.nature_problem}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Description : <strong>{{taskDataDetail.task_description}}</strong></ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one two mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Eng. Work Status</ion-text>\r\n                                <ion-text>{{taskDataDetail.workStatus? taskDataDetail.workStatus : 'N/A'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Request Status</ion-text>\r\n                                <ion-text>{{taskDataDetail.status? taskDataDetail.status : 'N/A'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Engineer Visiting Date & Time : <strong>{{taskDataDetail.visit_date_time| date : 'dd MMM yyyy hh:mm a'}}</strong></ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Product Information</h1></div>\r\n                <div class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\" >\r\n                            <div class=\"f-alpha\">{{taskDataDetail.customer_name?taskDataDetail.customer_name.substring(0,1).toUpperCase():''}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{taskDataDetail.customer_name?.toUpperCase()}}</h1>\r\n                                <ion-text>({{taskDataDetail.project_name}})</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one three\" *ngFor = \"let fgData of taskDataFgDetail\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>So No.</ion-text>\r\n                                <ion-text>{{fgData.so_no}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Si No.</ion-text>\r\n                                <ion-text>{{fgData.si_no}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>FG No.</ion-text>\r\n                                <ion-text>{{fgData.fg_no}} </ion-text>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"fgData.nature_problem\" class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Nature</ion-text>\r\n                                <ion-text>{{fgData.nature_problem}} </ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <!-- {{assignData.image_url != '' ? dbService.userDocURL+assignData.image_url : assignData.user_name.substring(0,1).toUpperCase()}} -->\r\n            \r\n            <div *ngIf=\"taskAssignData.length != 0\" class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Assign Engineer</h1></div>\r\n                <div class=\"figure\" *ngFor=\"let assignData of taskAssignData\">\r\n                    <div class=\"cnt-info\" [hidden] = \"assignData.type!='Primary' && assignData.type!=''\">\r\n                        <div class=\"cs-left\" >\r\n                            \r\n                            <div class=\"f-alpha\" *ngIf=\"assignData.image_url != ''\">\r\n                                <img  [src]=\"dbService.userDocURL+assignData.image_url\" (click)=\"onViewImageHandler(assignData.image_url)\">\r\n                            </div>\r\n\r\n                            <div class=\"f-alpha\" *ngIf=\"assignData.image_url == ''\">\r\n                                {{assignData.user_name ? assignData.user_name.substring(0,1).toUpperCase() : ''}}\r\n                            </div>\r\n                            <div class=\"names\">\r\n                                <h1>{{assignData.name}} ({{assignData.designation}})</h1>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <a class=\"call\" href=\"tel: {{assignData.mobile}}\"><i class=\"material-icons\">call</i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"h70\"></div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
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
            taskStatus: this.taskDataDetail.status,
            taskType: this.taskDataDetail.task_type
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

      onViewImageHandler(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const imagePath = this.dbService.userDocURL + image;
          window.open(imagePath, '_blank');
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