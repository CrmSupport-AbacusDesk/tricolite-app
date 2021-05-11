function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button  (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#SR-{{taskNo}} - <ion-text>Images</ion-text></ion-title>\r\n                </div>\r\n                <div *ngIf=\"loginData.loginType != 'Customer'\" class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"gallery-container\">\r\n                <div class=\"img-gallery\">\r\n                    <div (click)=\"presentActionSheet()\" class=\"figure upload\"><i class=\"material-icons\">add</i></div>\r\n                    <div *ngFor=\"let row of taskImageData; let index = index\"  class=\"figure\">\r\n                        <img (click) = \"onViewImageHandler(index)\" [src]=\"dbService.uploadURL+row.image_url\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
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

    var routes = [{
      path: '',
      component: _com_images_page__WEBPACK_IMPORTED_MODULE_3__["ComImagesPage"]
    }];

    var ComImagesPageRoutingModule = function ComImagesPageRoutingModule() {
      _classCallCheck(this, ComImagesPageRoutingModule);
    };

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

    var ComImagesPageModule = function ComImagesPageModule() {
      _classCallCheck(this, ComImagesPageModule);
    };

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

    var ComImagesPage = /*#__PURE__*/function () {
      function ComImagesPage(popoverController, actionCtrl, location, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, dbService, photoViewer) {
        var _this = this;

        _classCallCheck(this, ComImagesPage);

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
        this.routeParams.params.subscribe(function (params) {
          console.log(params);
          _this.taskId = params.taskId;
          _this.taskNo = params.taskNo;
          console.log(_this.taskId);
          console.log(_this.taskNo);

          _this.onGetTaskImageDataHandler();
        });
      }

      _createClass(ComImagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginData = JSON.parse(localStorage.getItem('loginData'));
        }
      }, {
        key: "onGetTaskImageDataHandler",
        value: function onGetTaskImageDataHandler() {
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
                    this.dbService.presentLoader();
                    this.dbService.onPostRequestHandler(inputData, 'task/getTaskImageData').subscribe(function (result) {
                      console.log(result);

                      _this2.dbService.dismissLoader();

                      _this2.taskImageData = result["taskImageData"];
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSaveImageDataHandler",
        value: function onSaveImageDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var uploadData, documentData, j, binaryDataSplit, randomName, inputData;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    uploadData = [];
                    documentData = {};
                    console.log(this.imageData);

                    for (j = 0; j < this.imageData.length; j++) {
                      documentData = new FormData();
                      binaryDataSplit = this.imageData[j].image.split('base64,');
                      randomName = Math.random().toString(36).substring(7);
                      documentData["binaryData"] = binaryDataSplit[1];
                      documentData["taskId"] = this.taskId;
                      uploadData.push(documentData);
                    }

                    inputData = {
                      taskId: this.taskId,
                      uploadData: uploadData
                    };
                    console.log(inputData);
                    this.dbService.presentLoader();
                    this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskImagesData').subscribe(function (result) {
                      console.log(result);

                      _this3.dbService.dismissLoader();

                      _this3.dbService.presentToast('Image Saved Successfully!');

                      setTimeout(function () {
                        _this3.onGetTaskImageDataHandler();
                      }, 1000);
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "takePhotograph",
        value: function takePhotograph() {
          var _this4 = this;

          var successCallback = function successCallback(isAvailable) {
            _this4.camera.getPicture({
              quality: 40,
              targetWidth: 600,
              targetHeight: 600,
              destinationType: _this4.camera.DestinationType.DATA_URL
            }).then(function (data) {
              _this4.imageData = [];

              _this4.imageData.push({
                image: 'data:image/jpeg;base64,' + data
              });

              console.log(_this4.imageData);

              _this4.onSaveImageDataHandler();
            });
          };

          var errorCallback = function errorCallback(e) {
            console.log(e);
          };

          this.diagnostic.requestCameraAuthorization().then(successCallback)["catch"](errorCallback);
        }
      }, {
        key: "selectImageFromGallery",
        value: function selectImageFromGallery() {
          var _this5 = this;

          var successCallback = function successCallback(isAvailable) {
            console.log(isAvailable);
            var options = {
              maximumImagesCount: 10,
              DATA_URI: 1,
              quality: 40
            };
            _this5.imageData = [];

            _this5.imagePicker.getPictures(options).then(function (results) {
              var imageCount = 1;

              for (var i = 0; i < results.length; i++) {
                _this5.base64.encodeFile(results[i]).then(function (base64File) {
                  console.log(base64File);

                  _this5.imageData.push({
                    image: base64File
                  });

                  console.log(_this5.imageData);

                  if (imageCount == results.length) {
                    _this5.onSaveImageDataHandler();
                  }

                  imageCount++;
                }, function (err) {
                  console.log(err);
                });
              }
            }, function (err) {});
          };

          var errorCallback = function errorCallback(e) {
            console.log(e);
          };

          this.diagnostic.requestCameraAuthorization().then(successCallback)["catch"](errorCallback);
        }
      }, {
        key: "onViewImageHandler",
        value: function onViewImageHandler(index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var imagePath;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    imagePath = this.dbService.uploadURL + this.taskImageData[index].image_url;
                    console.log(imagePath);
                    this.photoViewer.show(imagePath);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.actionCtrl.create({
                      header: 'Select image from',
                      buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: function handler() {
                          console.log('Camera Clicked');

                          _this6.takePhotograph();
                        }
                      }, {
                        text: 'Gallery',
                        icon: 'image',
                        handler: function handler() {
                          console.log('Gallery Clicked');

                          _this6.selectImageFromGallery();
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context4.sent;
                    _context4.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onRemoveImageHandler",
        value: function onRemoveImageHandler(index) {
          this.imageData.splice(index, 1);
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var taskData, popover;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    taskData = {
                      taskId: this.taskId,
                      taskNo: this.taskNo
                    };
                    _context5.next = 3;
                    return this.popoverController.create({
                      component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
                      event: ev,
                      translucent: true,
                      componentProps: taskData
                    });

                  case 3:
                    popover = _context5.sent;
                    _context5.next = 6;
                    return popover.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "GoComplaintDetail",
        value: function GoComplaintDetail() {
          this.location.back();
        }
      }]);

      return ComImagesPage;
    }();

    ComImagesPage.ctorParameters = function () {
      return [{
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
    };

    ComImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-images',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-images.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-images/com-images.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-images.page.scss */
      "./src/app/technician_app/complaints/com-images/com-images.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__["DbServiceService"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"]])], ComImagesPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-images-com-images-module-es5.js.map