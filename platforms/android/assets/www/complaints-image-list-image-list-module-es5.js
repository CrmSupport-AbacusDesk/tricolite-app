(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-image-list-image-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/image-list/image-list.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/image-list/image-list.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsImageListImageListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n  <div class=\"cs-main-container\">\r\n      <div class=\"custome-head\">\r\n          <div class=\"cs-ion-header\">\r\n              <div class=\"cs-left\">\r\n                  <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                  <ion-title>Documents</ion-title>\r\n              </div>\r\n          </div>\r\n          <div class=\"cs-ion-hf\"></div>\r\n      </div>\r\n      \r\n      <div class=\"cs-ion-content\">\r\n          <div class=\"m_documents\" padding>\r\n              <div class=\"figure\" (click)=\"GoToImageGalley()\">\r\n                  <div class=\"thumb\"><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></div>\r\n                  <h1><ion-text>Subject #1</ion-text> <i class=\"material-icons\">arrow_right_alt</i></h1>\r\n                  <span class=\"imagse-count\">20</span>\r\n              </div>\r\n              <div class=\"figure\">\r\n                  <div class=\"thumb\"><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></div>\r\n                  <h1><ion-text>Subject #1</ion-text> <i class=\"material-icons\">arrow_right_alt</i></h1>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"h50\"></div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\" style=\"bottom: 10px\">\r\n    <ion-fab-button (click)=\"GoToImages()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/image-list/image-list-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/image-list/image-list-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ImageListPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsImageListImageListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageListPageRoutingModule", function () {
      return ImageListPageRoutingModule;
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


    var _image_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-list.page */
    "./src/app/technician_app/complaints/image-list/image-list.page.ts");

    const routes = [{
      path: '',
      component: _image_list_page__WEBPACK_IMPORTED_MODULE_3__["ImageListPage"]
    }];
    let ImageListPageRoutingModule = class ImageListPageRoutingModule {};
    ImageListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImageListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/image-list/image-list.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/technician_app/complaints/image-list/image-list.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ImageListPageModule */

  /***/
  function srcAppTechnician_appComplaintsImageListImageListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageListPageModule", function () {
      return ImageListPageModule;
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


    var _image_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-list-routing.module */
    "./src/app/technician_app/complaints/image-list/image-list-routing.module.ts");
    /* harmony import */


    var _image_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-list.page */
    "./src/app/technician_app/complaints/image-list/image-list.page.ts");

    let ImageListPageModule = class ImageListPageModule {};
    ImageListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageListPageRoutingModule"]],
      declarations: [_image_list_page__WEBPACK_IMPORTED_MODULE_6__["ImageListPage"]]
    })], ImageListPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/image-list/image-list.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/technician_app/complaints/image-list/image-list.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsImageListImageListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/image-list/image-list.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/technician_app/complaints/image-list/image-list.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ImageListPage */

  /***/
  function srcAppTechnician_appComplaintsImageListImageListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageListPage", function () {
      return ImageListPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let ImageListPage = class ImageListPage {
      constructor(router, location, routeParams) {
        this.router = router;
        this.location = location;
        this.routeParams = routeParams;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          this.taskNo = params.taskNo;
          this.taskStatus = params.taskStatus;
          console.log(this.taskId);
          console.log(this.taskNo);
          console.log(this.taskStatus);
        });
      }

      ngOnInit() {}

      GoToImageGalley() {
        this.router.navigateByUrl('/technicians/image-gallery');
      }

      GoToImages() {
        this.router.navigateByUrl('/technicians/' + localStorage.getItem('routeType') + '/details/images/' + this.taskId + '/' + this.taskNo + '/' + this.taskStatus + '');
      }

      GoComplaintDetail() {
        this.location.back();
      }

    };

    ImageListPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    ImageListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/image-list/image-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-list.page.scss */
      "./src/app/technician_app/complaints/image-list/image-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ImageListPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-image-list-image-list-module-es5.js.map