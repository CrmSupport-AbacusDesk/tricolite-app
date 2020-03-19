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


    __webpack_exports__["default"] = "<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Change Status</ion-text></ion-title>\n                </div>\n                <div class=\"cs-right\">\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\n                </div>\n            </div>\n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <div class=\"cs-ion-content pt0\" padding>\n            \n            <div class=\"common_form inner_page\">\n                <ion-item class=\"cs-select\">\n                    <ion-label>Select Status</ion-label>\n                    \n                    <ion-select [(ngModel)] = \"data.status\" placeholder=\"Select One\">\n\n                        <ion-select-option *ngFor=\"let row of statusOptionList\" [value]=\"row.status\">{{row.status}}</ion-select-option>\n\n                    </ion-select>\n\n                </ion-item>\n                \n                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\n                    <ion-button (click) = \"onSaveStatusDataHandler()\" class=\"success min w100\">SAVE</ion-button>\n                </div>\n            </div>\n            \n            <div *ngIf=\"taskStatusList && taskStatusList.length > 0\" class=\"complaints product-list part-list mt20\">\n                <div class=\"cs-heading\"><h1>Status History</h1></div>\n\n                <div *ngFor=\"let row of taskStatusList\" class=\"figure nicon\">\n                    <div class=\"cnt-info\">\n                        <div class=\"cs-left\">\n                            <div class=\"names\">\n                                <h1>{{row.status}}</h1>\n                            </div>\n                        </div>\n                        <div class=\"cs-right\">\n                            <ion-text><span>{{row.dateCreated}}</span> | {{row.timeCreated}}</ion-text>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
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

    const routes = [{
      path: '',
      component: _com_changestatus_page__WEBPACK_IMPORTED_MODULE_3__["ComChangestatusPage"]
    }];
    let ComChangestatusPageRoutingModule = class ComChangestatusPageRoutingModule {};
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

    let ComChangestatusPageModule = class ComChangestatusPageModule {};
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

    let ComChangestatusPage = class ComChangestatusPage {
      constructor(popoverController, router, location, routeParams, alertCtrl, toastCtrl, dbService) {
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
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          this.taskNo = params.taskNo;
          this.taskStatus = params.taskStatus;
          console.log(this.taskId);
          console.log(this.taskNo);
          console.log(this.taskStatus);
          this.onGetTaskStatusDataHandler();
          this.onGetTaskOptionDataHandler();
        });
      }

      ngOnInit() {}

      onSaveStatusDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (!this.data.status) {
            this.dbService.onShowAlertMessage('Error', 'Status Required!');
          } else {
            const isStatusAlreadyExist = this.taskStatusList.findIndex(row => row.status == this.data.status);

            if (isStatusAlreadyExist != -1) {
              this.dbService.onShowAlertMessage('Error', 'Status Already Added!');
              return false;
            }

            const alert = yield this.alertCtrl.create({
              header: 'Confirm',
              message: 'Are You Sure, You Want To Save Status ?',
              buttons: [{
                text: 'No',
                role: 'cancel',
                handler: () => {
                  console.log('No clicked');
                }
              }, {
                text: 'Yes',
                handler: () => {
                  console.log('Yes clicked');
                  const inputData = {
                    taskId: this.taskId,
                    status: this.data.status
                  };
                  this.dbService.presentLoader();
                  this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskStatusData').subscribe(result => {
                    console.log(result);
                    this.dbService.dismissLoader();
                    this.data.status = '';
                    this.dbService.presentToast('Status Saved Successfully!');
                    this.onGetTaskStatusDataHandler();
                  });
                }
              }]
            });
            yield alert.present();
          }
        });
      }

      onGetTaskStatusDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const inputData = {
            taskId: this.taskId
          };
          this.dbService.onPostRequestHandler(inputData, 'task/getTaskStatusData').subscribe(result => {
            console.log(result);
            this.taskStatusList = result["taskStatusData"];
          });
        });
      }

      onGetTaskOptionDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.dbService.presentLoader();
          const inputData = {
            taskId: this.taskId
          };
          this.dbService.onPostRequestHandler(inputData, 'task/onGetStatusOptionList').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.statusOptionList = result["statusOptionList"];
          });
        });
      }

      presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const taskData = {
            taskId: this.taskId,
            taskNo: this.taskNo,
            taskStatus: this.taskStatus
          };
          const popover = yield this.popoverController.create({
            component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_3__["TecCompliantPopoverComponent"],
            event: ev,
            translucent: true,
            componentProps: taskData
          });
          return yield popover.present();
        });
      }

      GoComplaintDetail() {
        this.location.back();
      }

    };

    ComChangestatusPage.ctorParameters = () => [{
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

    ComChangestatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-changestatus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-changestatus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-changestatus.page.scss */
      "./src/app/technician_app/complaints/com-changestatus/com-changestatus.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])], ComChangestatusPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-changestatus-com-changestatus-module-es5.js.map