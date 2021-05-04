(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-complaintdetail-complaintdetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComplaintdetailComplaintdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click) = \"onGoToListPageHandler()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title *ngIf=\"routeTitleForView\">{{routeTitleForView}} Detail</ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div *ngIf=\"taskDetail && taskDetail.taskData\" class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"complaints\">\r\n                <div class=\"figure\">\r\n                    <div class=\"top\">\r\n                        <div class=\"cs-left\">\r\n                            <h1>#SR- {{taskDetail.taskData.task_no}} <ion-text>({{taskDetail.taskData.days}})</ion-text></h1>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <ion-text>{{taskDetail.taskData.dateCreated}}  |  {{taskDetail.taskData.timeCreated}}</ion-text>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"cnt-info\" *ngIf=\"taskDetail.taskContactData.length >0\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha bg1\">{{taskDetail.taskData.project_name[0]}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{taskDetail.taskData.project_name}}</h1>\r\n                                <ion-text *ngIf=\"taskDetail.taskContactData\">{{taskDetail.taskContactData[0].name}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"cs-right\">\r\n                            <a *ngIf=\"taskDetail.taskContactData\" href=\"tel: {{taskDetail.taskContactData[0].mobile}}\"><i class=\"material-icons\">call</i></a>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one three mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Created By</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.created_by_name}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Service Type</ion-text>\r\n                                <ion-text>{{(taskDetail.taskData.transaction_type == 'FOC' || taskDetail.taskData.transaction_type == 'Sale/Warranty' || taskDetail.taskData.transaction_type == 'Commissioning') ? 'Warranty Service' : 'Paid Service'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Priority</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.priority ? taskDetail.taskData.priority : 'NA'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Request Type & Issue Category</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.task_type}} / {{taskDetail.taskData.compaint_title}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"taskDetail.taskData.nature_problem\" class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Nature of issue</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.nature_problem}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div *ngIf= \"taskDetail.taskData.task_description\" class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Description <strong>{{taskDetail.taskData.task_description}}</strong></ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div  class=\"one-two-one one mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Engineer Visiting Date & Time <strong>{{taskDetail.taskData.visit_date_time| date : 'dd MMM yyyy hh:mm a'}}</strong></ion-text>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    \r\n                    </div>\r\n                    <div class=\"one-two-one two mt10\">\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Eng. Work Status</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.workStatus ? taskDetail.taskData.workStatus : '--'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Complaint Status</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.status}}</ion-text>\r\n                            </div>\r\n                        </div> -->\r\n\r\n\r\n                        <div [ngClass] = \"(taskDetail.taskData.status) ? taskDetail.taskData.status.toLowerCase() : ''\" class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Request Status</ion-text>\r\n                                <ion-text>{{taskDetail.taskData.status}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                 \r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Product Information</h1></div>\r\n                \r\n                <div  class=\"figure\">\r\n                    \r\n                    <div [hidden]=\"index > 0\" *ngFor=\"let fgRow of taskDetail.taskFGData; let index = index\" class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha\">{{fgRow.sub_model ? fgRow.sub_model[0] : 'P'}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{fgRow.sub_model ? fgRow.sub_model : ''}}</h1>\r\n                                <ion-text>{{fgRow.brand ? fgRow.brand : ''}}, {{fgRow.model ? fgRow.model : ''}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-right\">\r\n                            <a class=\"arrow\"><i class=\"material-icons\">keyboard_arrow_right</i></a>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div *ngFor=\"let fgRow of taskDetail.taskFGData\" class=\"one-two-one three\">\r\n                        \r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>FG No.</ion-text>\r\n                                <ion-text>{{fgRow.fg_no}} </ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>So No.</ion-text>\r\n                                <ion-text>{{fgRow.so_no ? fgRow.so_no : ''}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"cs-box\">\r\n                            <div>\r\n                                <ion-text>Si No.</ion-text>\r\n                                <ion-text>{{fgRow.si_no ? fgRow.si_no : '--'}}</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Customer Information</h1></div>\r\n                <div class=\"figure\">\r\n                    <div class=\"cnt-info\">\r\n                        <div class=\"cs-left\">\r\n                            <div class=\"f-alpha bg1\">{{taskDetail.taskData.customer_name[0]}}</div>\r\n                            <div class=\"names\">\r\n                                <h1>{{taskDetail.taskData.customer_name}}</h1>\r\n                                <ion-text>{{taskDetail.taskData.customer_contact_name}} (#{{taskDetail.taskData.customer_code}})</ion-text>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"cnt-person\">\r\n                        <div class=\"css-heading\"><h1>Contact Person(S)</h1></div>\r\n                        \r\n                        <div *ngFor = \"let row of taskDetail.taskContactData\" class=\"p-info\">\r\n                            <div class=\"cs-left\">\r\n                                <h1><i class=\"material-icons\">person</i> {{row.name}} ({{row.designation}})</h1>\r\n                                <ion-text><i class=\"material-icons\">mail</i>{{row.email}}</ion-text>\r\n                            </div>\r\n                            <div class=\"cs-right\">\r\n                                <a href=\"tel: {{row.mobile}}\"><i class=\"material-icons\">call</i></a>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n            <div *ngIf=\"taskDetail.taskAssignData.length > 1\" class=\"complaints product-list mt20\">\r\n                <div class=\"cs-heading\"><h1>Assign Subordinates</h1></div>\r\n                <div class=\"figure\">\r\n                    \r\n                    <div [hidden] = \"row.type == 'Primary'\" *ngFor=\"let row of taskDetail.taskAssignData\" class=\"cnt-person\">\r\n                        <div class=\"p-info\">\r\n                            <div class=\"cs-left\">\r\n                                <h1><i class=\"material-icons\">person</i>{{row.name}} ({{row.designation}})</h1>\r\n                                <ion-text><i class=\"material-icons\">mail</i>{{row.email}}</ion-text>\r\n                            </div>\r\n                            <div class=\"cs-right\">\r\n                                <a href=\"tel: {{row.mobile}}\"><i class=\"material-icons\">call</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/complaintdetail/complaintdetail-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/complaintdetail/complaintdetail-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ComplaintdetailPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComplaintdetailComplaintdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintdetailPageRoutingModule", function () {
      return ComplaintdetailPageRoutingModule;
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


    var _complaintdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./complaintdetail.page */
    "./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.ts");

    const routes = [{
      path: '',
      component: _complaintdetail_page__WEBPACK_IMPORTED_MODULE_3__["ComplaintdetailPage"]
    }];
    let ComplaintdetailPageRoutingModule = class ComplaintdetailPageRoutingModule {};
    ComplaintdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComplaintdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/complaintdetail/complaintdetail.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/complaintdetail/complaintdetail.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ComplaintdetailPageModule */

  /***/
  function srcAppTechnician_appComplaintsComplaintdetailComplaintdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintdetailPageModule", function () {
      return ComplaintdetailPageModule;
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


    var _complaintdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./complaintdetail-routing.module */
    "./src/app/technician_app/complaints/complaintdetail/complaintdetail-routing.module.ts");
    /* harmony import */


    var _complaintdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./complaintdetail.page */
    "./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.ts");

    let ComplaintdetailPageModule = class ComplaintdetailPageModule {};
    ComplaintdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _complaintdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComplaintdetailPageRoutingModule"]],
      declarations: [_complaintdetail_page__WEBPACK_IMPORTED_MODULE_6__["ComplaintdetailPage"]]
    })], ComplaintdetailPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComplaintdetailComplaintdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tcGxhaW50ZGV0YWlsL2NvbXBsYWludGRldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: ComplaintdetailPage */

  /***/
  function srcAppTechnician_appComplaintsComplaintdetailComplaintdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComplaintdetailPage", function () {
      return ComplaintdetailPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");

    let ComplaintdetailPage = class ComplaintdetailPage {
      constructor(popoverController, route, routeParams, formBuilder, alertCtrl, dbService) {
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.taskId = '';
        this.taskDetail = {};
        this.routeTitleForView = '';
        this.routeTitleForView = localStorage.getItem('routeTitleForView');
      }

      ngOnInit() {
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          console.log(this.taskId);
          this.onGetTaskDetail();
        });
      }

      onGetTaskDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('hello');
          this.dbService.presentLoader();
          const inputData = {
            taskId: this.taskId
          };
          this.dbService.onPostRequestHandler(inputData, 'task/onTaskDetail').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.taskDetail = result;
            console.log(this.taskDetail);
            console.log(this.taskDetail.taskData.status);
          });
        });
      }

      presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log(this.taskDetail.taskData);
          const taskPopUpData = {
            taskWorkReport: this.taskDetail.taskWorkReport,
            taskReportCount: this.taskDetail.taskReportCount,
            taskInstalledPartCount: this.taskDetail.taskInstalledPartCount
          };
          localStorage.setItem('taskPopUpData', JSON.stringify(taskPopUpData));
          console.log(this.taskDetail.taskData);
          const taskData = {
            taskId: this.taskId,
            taskNo: this.taskDetail.taskData.task_no,
            taskStatus: this.taskDetail.taskData.status,
            taskType: this.taskDetail.taskData.task_type
          };
          console.log(taskData);
          const popover = yield this.popoverController.create({
            component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
            event: ev,
            translucent: true,
            componentProps: taskData
          });
          return yield popover.present();
        });
      }

      onGoToListPageHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.route.navigateByUrl('/technicians/' + localStorage.getItem('routeType'));
        });
      }

    };

    ComplaintdetailPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_6__["DbServiceService"]
    }];

    ComplaintdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-complaintdetail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./complaintdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./complaintdetail.page.scss */
      "./src/app/technician_app/complaints/complaintdetail/complaintdetail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_6__["DbServiceService"]])], ComplaintdetailPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-complaintdetail-complaintdetail-module-es5.js.map