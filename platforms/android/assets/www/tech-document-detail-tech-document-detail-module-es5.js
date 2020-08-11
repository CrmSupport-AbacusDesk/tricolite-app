(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tech-document-detail-tech-document-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/tech-document-detail/tech-document-detail.page.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/tech-document-detail/tech-document-detail.page.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appTechDocumentDetailTechDocumentDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/technicians/menu/documents']\" ><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>{{documentTitle}}</ion-title>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"gallery-container\">\r\n                <div class=\"img-gallery aab\">\r\n                    <div (click) = \"onViewImageHandler(index)\" *ngFor=\"let row of documentImageData; let index = index\"  class=\"figure white-bg\">\r\n                        <img *ngIf=\"row.document_type != 'application/pdf' && row.document_type != 'application/vnd.ms-excel'\"  src=\"{{dbService.masterDocURL}}{{row.document_url}}\" alt=\"\">\r\n\r\n                        <img *ngIf=\"row.document_type == 'application/pdf'\" src=\"assets/img/pdf.svg\" alt=\"\">\r\n\r\n                        <img *ngIf=\"row.document_type == 'application/vnd.ms-excel'\" src=\"assets/img/excel.svg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/tech-document-detail/tech-document-detail-routing.module.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/technician_app/tech-document-detail/tech-document-detail-routing.module.ts ***!
    \********************************************************************************************/

  /*! exports provided: TechDocumentDetailPageRoutingModule */

  /***/
  function srcAppTechnician_appTechDocumentDetailTechDocumentDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechDocumentDetailPageRoutingModule", function () {
      return TechDocumentDetailPageRoutingModule;
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


    var _tech_document_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tech-document-detail.page */
    "./src/app/technician_app/tech-document-detail/tech-document-detail.page.ts");

    const routes = [{
      path: '',
      component: _tech_document_detail_page__WEBPACK_IMPORTED_MODULE_3__["TechDocumentDetailPage"]
    }];
    let TechDocumentDetailPageRoutingModule = class TechDocumentDetailPageRoutingModule {};
    TechDocumentDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TechDocumentDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/tech-document-detail/tech-document-detail.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/technician_app/tech-document-detail/tech-document-detail.module.ts ***!
    \************************************************************************************/

  /*! exports provided: TechDocumentDetailModule */

  /***/
  function srcAppTechnician_appTechDocumentDetailTechDocumentDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechDocumentDetailModule", function () {
      return TechDocumentDetailModule;
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


    var _tech_document_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tech-document-detail-routing.module */
    "./src/app/technician_app/tech-document-detail/tech-document-detail-routing.module.ts");
    /* harmony import */


    var _tech_document_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tech-document-detail.page */
    "./src/app/technician_app/tech-document-detail/tech-document-detail.page.ts");

    let TechDocumentDetailModule = class TechDocumentDetailModule {};
    TechDocumentDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tech_document_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TechDocumentDetailPageRoutingModule"]],
      declarations: [_tech_document_detail_page__WEBPACK_IMPORTED_MODULE_6__["TechDocumentDetailPage"]]
    })], TechDocumentDetailModule);
    /***/
  },

  /***/
  "./src/app/technician_app/tech-document-detail/tech-document-detail.page.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/technician_app/tech-document-detail/tech-document-detail.page.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appTechDocumentDetailTechDocumentDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL3RlY2gtZG9jdW1lbnQtZGV0YWlsL3RlY2gtZG9jdW1lbnQtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/technician_app/tech-document-detail/tech-document-detail.page.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/technician_app/tech-document-detail/tech-document-detail.page.ts ***!
    \**********************************************************************************/

  /*! exports provided: TechDocumentDetailPage */

  /***/
  function srcAppTechnician_appTechDocumentDetailTechDocumentDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TechDocumentDetailPage", function () {
      return TechDocumentDetailPage;
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


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/ngx/index.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");

    let TechDocumentDetailPage = class TechDocumentDetailPage {
      constructor(popoverController, actionCtrl, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, dbService, photoViewer) {
        this.popoverController = popoverController;
        this.actionCtrl = actionCtrl;
        this.router = router;
        this.routeParams = routeParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.diagnostic = diagnostic;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.dbService = dbService;
        this.photoViewer = photoViewer;
        this.documentId = '';
        this.documentTitle = '';
        this.documentImageData = [];
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.documentId = params.documentId;
          this.documentTitle = params.documentTitle;
          console.log(this.documentId);
          this.onGetImageDataHandler();
        });
      }

      ngOnInit() {}

      onGetImageDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const inputData = {
            documentId: this.documentId
          };
          this.dbService.presentLoader();
          this.dbService.onPostRequestHandler(inputData, 'task/getDocumentAllList').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.documentImageData = result["documentImageData"];
          });
        });
      }

      onViewImageHandler(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('heloaasa');
          const imagePath = this.dbService.masterDocURL + this.documentImageData[index].document_url;
          console.log(imagePath);
          window.open(imagePath, '_blank'); //  this.photoViewer.show(imagePath);
        });
      }

    };

    TechDocumentDetailPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"]
    }, {
      type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
    }, {
      type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"]
    }, {
      type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"]
    }, {
      type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"]
    }];

    TechDocumentDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tech-document-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tech-document-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/tech-document-detail/tech-document-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tech-document-detail.page.scss */
      "./src/app/technician_app/tech-document-detail/tech-document-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"]])], TechDocumentDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=tech-document-detail-tech-document-detail-module-es5.js.map