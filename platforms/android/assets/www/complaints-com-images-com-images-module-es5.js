(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-images-com-images-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-images/com-images.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-images/com-images.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComImagesComImagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button  (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Images</ion-text></ion-title>\r\n                </div>\r\n                <div *ngIf=\"loginData.loginType != 'Customer'\" class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"gallery-container\">\r\n                <div class=\"img-gallery\">\r\n                    <div (click)=\"presentActionSheet()\" class=\"figure upload\"><i class=\"material-icons\">add</i></div>\r\n                    <div *ngFor=\"let row of taskImageData; let index = index\"  class=\"figure\">\r\n                        <img (click) = \"onViewImageHandler(index)\" [src]=\"dbService.uploadURL+row.image_url\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-images/com-images-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-images/com-images-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ComImagesPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComImagesComImagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComImagesPageRoutingModule", function () {
      return ComImagesPageRoutingModule;
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


    var _com_images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./com-images.page */
    "./src/app/technician_app/complaints/com-images/com-images.page.ts");

    const routes = [{
      path: '',
      component: _com_images_page__WEBPACK_IMPORTED_MODULE_3__["ComImagesPage"]
    }];
    let ComImagesPageRoutingModule = class ComImagesPageRoutingModule {};
    ComImagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComImagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-images/com-images.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-images/com-images.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ComImagesPageModule */

  /***/
  function srcAppTechnician_appComplaintsComImagesComImagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComImagesPageModule", function () {
      return ComImagesPageModule;
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


    var _com_images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./com-images-routing.module */
    "./src/app/technician_app/complaints/com-images/com-images-routing.module.ts");
    /* harmony import */


    var _com_images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./com-images.page */
    "./src/app/technician_app/complaints/com-images/com-images.page.ts");

    let ComImagesPageModule = class ComImagesPageModule {};
    ComImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _com_images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComImagesPageRoutingModule"]],
      declarations: [_com_images_page__WEBPACK_IMPORTED_MODULE_6__["ComImagesPage"]]
    })], ComImagesPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-images/com-images.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-images/com-images.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComImagesComImagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWltYWdlcy9jb20taW1hZ2VzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-images/com-images.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-images/com-images.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ComImagesPage */

  /***/
  function srcAppTechnician_appComplaintsComImagesComImagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComImagesPage", function () {
      return ComImagesPage;
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


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/base64/ngx */
    "./node_modules/@ionic-native/base64/ngx/index.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let ComImagesPage = class ComImagesPage {
      constructor(popoverController, actionCtrl, location, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, dbService, photoViewer) {
        this.popoverController = popoverController;
        this.actionCtrl = actionCtrl;
        this.location = location;
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
        this.taskId = '';
        this.taskNo = '';
        this.imageData = [];
        this.loginData = {};
        this.taskImageData = [];
        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          this.taskNo = params.taskNo;
          console.log(this.taskId);
          console.log(this.taskNo);
          this.onGetTaskImageDataHandler();
        });
      }

      ngOnInit() {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
      }

      onGetTaskImageDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const inputData = {
            taskId: this.taskId
          };
          this.dbService.presentLoader();
          this.dbService.onPostRequestHandler(inputData, 'task/getTaskImageData').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.taskImageData = result["taskImageData"];
          });
        });
      }

      onSaveImageDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const uploadData = [];
          let documentData = {};
          console.log(this.imageData);

          for (let j = 0; j < this.imageData.length; j++) {
            documentData = new FormData();
            const binaryDataSplit = this.imageData[j].image.split('base64,');
            const randomName = Math.random().toString(36).substring(7);
            documentData["binaryData"] = binaryDataSplit[1];
            documentData["taskId"] = this.taskId;
            uploadData.push(documentData);
          }

          const inputData = {
            taskId: this.taskId,
            uploadData: uploadData
          };
          console.log(inputData);
          this.dbService.presentLoader();
          this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskImagesData').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.dbService.presentToast('Image Saved Successfully!');
            setTimeout(() => {
              this.onGetTaskImageDataHandler();
            }, 1000);
          });
        });
      }

      takePhotograph() {
        const successCallback = isAvailable => {
          this.camera.getPicture({
            quality: 40,
            targetWidth: 600,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL
          }).then(data => {
            this.imageData = [];
            this.imageData.push({
              image: 'data:image/jpeg;base64,' + data
            });
            console.log(this.imageData);
            this.onSaveImageDataHandler();
          });
        };

        const errorCallback = e => {
          console.log(e);
        };

        this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
      }

      selectImageFromGallery() {
        const successCallback = isAvailable => {
          console.log(isAvailable);
          const options = {
            maximumImagesCount: 10,
            DATA_URI: 1,
            quality: 40
          };
          this.imageData = [];
          this.imagePicker.getPictures(options).then(results => {
            let imageCount = 1;

            for (var i = 0; i < results.length; i++) {
              this.base64.encodeFile(results[i]).then(base64File => {
                console.log(base64File);
                this.imageData.push({
                  image: base64File
                });
                console.log(this.imageData);

                if (imageCount == results.length) {
                  this.onSaveImageDataHandler();
                }

                imageCount++;
              }, err => {
                console.log(err);
              });
            }
          }, err => {});
        };

        const errorCallback = e => {
          console.log(e);
        };

        this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
      }

      onViewImageHandler(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const imagePath = this.dbService.uploadURL + this.taskImageData[index].image_url;
          console.log(imagePath);
          this.photoViewer.show(imagePath);
        });
      }

      presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionCtrl.create({
            header: 'Select image from',
            buttons: [{
              text: 'Camera',
              icon: 'camera',
              handler: () => {
                console.log('Camera Clicked');
                this.takePhotograph();
              }
            }, {
              text: 'Gallery',
              icon: 'image',
              handler: () => {
                console.log('Gallery Clicked');
                this.selectImageFromGallery();
              }
            }]
          });
          yield actionSheet.present();
        });
      }

      onRemoveImageHandler(index) {
        this.imageData.splice(index, 1);
      }

      presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const taskData = {
            taskId: this.taskId,
            taskNo: this.taskNo
          };
          const popover = yield this.popoverController.create({
            component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
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

    ComImagesPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
    }, {
      type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__["Diagnostic"]
    }, {
      type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
    }, {
      type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"]
    }, {
      type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__["DbServiceService"]
    }, {
      type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"]
    }];

    ComImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-images.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-images/com-images.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-images.page.scss */
      "./src/app/technician_app/complaints/com-images/com-images.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__["DbServiceService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"]])], ComImagesPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-images-com-images-module-es5.js.map