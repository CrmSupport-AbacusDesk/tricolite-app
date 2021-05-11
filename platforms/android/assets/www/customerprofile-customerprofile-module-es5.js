function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerprofile-customerprofile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerprofile/customerprofile.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerprofile/customerprofile.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomer_appCustomerprofileCustomerprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            \r\n            <div class=\"profile-big\"><img *ngIf=\"profileData.image_url\" src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\"></div>\r\n            \r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/home']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>My Profile</ion-title>\r\n                </div>\r\n                \r\n                \r\n                <div (click)=\"presentActionSheet()\" class=\"cs-right\">\r\n                    <ion-button><ion-icon name=\"camera\"></ion-icon></ion-button>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n            <div class=\"profile-segment detail\">\r\n                \r\n                <div class=\"pr-icon\">\r\n                    \r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div (click)=\"onViewImageHandler()\" *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"info\">\r\n                    <ion-text color=\"light\">{{profileData.company_name}}<br><span>{{profileData.cust_code}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"my_profile\" padding>\r\n                \r\n                <div class=\"information\">\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_call.svg\" alt=\"\">\r\n                        <h1>+91 {{profileData.landline_no}}</h1>\r\n                    </div>\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_email.svg\" alt=\"\">\r\n                        <a>{{profileData.email}}</a>\r\n                    </div>\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_address.svg\" alt=\"\">\r\n                        <h1>{{profileData.project_street}} {{profileData.project_state}}, {{profileData.project_district}}, {{profileData.project_city}}, {{profileData.project_pincode}}</h1>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"dashboard_container pr0 pb0 pl0\">\r\n                    <div class=\"customer-dash\">\r\n                        <div class=\"cs-left pr0\">\r\n                            <button class=\"change-pass\" [routerLink]=\"['/changepassword']\">\r\n                               <div class=\"figure\">\r\n                                   <div class=\"top\">\r\n                                       <i class=\"material-icons\">arrow_right_alt</i>\r\n                                       <img src=\"assets/icon/change_password.svg\" alt=\"\">\r\n                                   </div>\r\n                                   <h1>Change Password</h1>\r\n                               </div>\r\n                           </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"complaints product-list mt32 pb10\" style=\"border-radius: 6px;\">\r\n                    <div class=\"cnt-person\">\r\n                        <div class=\"css-heading\"><h1>Contact Person(S)</h1></div>\r\n                        \r\n                        <div *ngFor = \"let row of contactData\" class=\"p-info mt10\">\r\n                            <div class=\"cs-left\">\r\n                                <h1><i class=\"material-icons\">person</i>{{row.name}} ({{row.designation}})</h1>\r\n                                <ion-text><i class=\"material-icons\">mail</i>{{row.email}}</ion-text>\r\n                            </div>\r\n                            <div class=\"cs-right\">\r\n                                <a href=\"tel: {{row.mobile}}\"><i class=\"material-icons\">call</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/customer_app/customerprofile/customerprofile-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/customer_app/customerprofile/customerprofile-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: CustomerprofilePageRoutingModule */

  /***/
  function srcAppCustomer_appCustomerprofileCustomerprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerprofilePageRoutingModule", function () {
      return CustomerprofilePageRoutingModule;
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


    var _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customerprofile.page */
    "./src/app/customer_app/customerprofile/customerprofile.page.ts");

    var routes = [{
      path: '',
      component: _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__["CustomerprofilePage"]
    }];

    var CustomerprofilePageRoutingModule = function CustomerprofilePageRoutingModule() {
      _classCallCheck(this, CustomerprofilePageRoutingModule);
    };

    CustomerprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomerprofilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/customer_app/customerprofile/customerprofile.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/customer_app/customerprofile/customerprofile.module.ts ***!
    \************************************************************************/

  /*! exports provided: CustomerprofilePageModule */

  /***/
  function srcAppCustomer_appCustomerprofileCustomerprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerprofilePageModule", function () {
      return CustomerprofilePageModule;
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


    var _customerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customerprofile-routing.module */
    "./src/app/customer_app/customerprofile/customerprofile-routing.module.ts");
    /* harmony import */


    var _customerprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customerprofile.page */
    "./src/app/customer_app/customerprofile/customerprofile.page.ts");

    var CustomerprofilePageModule = function CustomerprofilePageModule() {
      _classCallCheck(this, CustomerprofilePageModule);
    };

    CustomerprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerprofilePageRoutingModule"]],
      declarations: [_customerprofile_page__WEBPACK_IMPORTED_MODULE_6__["CustomerprofilePage"]]
    })], CustomerprofilePageModule);
    /***/
  },

  /***/
  "./src/app/customer_app/customerprofile/customerprofile.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/customer_app/customerprofile/customerprofile.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomer_appCustomerprofileCustomerprofilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9jdXN0b21lcnByb2ZpbGUvY3VzdG9tZXJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/customer_app/customerprofile/customerprofile.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/customer_app/customerprofile/customerprofile.page.ts ***!
    \**********************************************************************/

  /*! exports provided: CustomerprofilePage */

  /***/
  function srcAppCustomer_appCustomerprofileCustomerprofilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerprofilePage", function () {
      return CustomerprofilePage;
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

    var CustomerprofilePage = /*#__PURE__*/function () {
      function CustomerprofilePage(actionCtrl, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, photoViewer, dbService) {
        _classCallCheck(this, CustomerprofilePage);

        this.actionCtrl = actionCtrl;
        this.router = router;
        this.routeParams = routeParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.diagnostic = diagnostic;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.photoViewer = photoViewer;
        this.dbService = dbService;
        this.profileData = {};
        this.contactData = [];
        this.imageData = '';
        this.onGetProfileDataHandler();
      }

      _createClass(CustomerprofilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSaveImageDataHandler",
        value: function onSaveImageDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var uploadData, j, binaryDataSplit, inputData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    for (j = 0; j < this.imageData.length; j++) {
                      binaryDataSplit = this.imageData[j].image.split('base64,');
                      uploadData = binaryDataSplit[1];
                      console.log(uploadData);
                    }

                    inputData = {
                      uploadData: uploadData
                    };
                    console.log(inputData);
                    this.dbService.presentLoader();
                    this.dbService.onPostRequestHandler(inputData, 'login/onSaveProfileImagesData').subscribe(function (result) {
                      console.log(result);

                      _this.dbService.dismissLoader();

                      _this.dbService.presentToast('Profile Updated Successfully!');

                      _this.onGetProfileDataHandler();
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "takePhotograph",
        value: function takePhotograph() {
          var _this2 = this;

          var successCallback = function successCallback(isAvailable) {
            _this2.camera.getPicture({
              quality: 40,
              targetWidth: 600,
              targetHeight: 600,
              destinationType: _this2.camera.DestinationType.DATA_URL
            }).then(function (data) {
              _this2.imageData = [];

              _this2.imageData.push({
                image: 'data:image/jpeg;base64,' + data
              });

              console.log(_this2.imageData);

              _this2.onSaveImageDataHandler();
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
          var _this3 = this;

          var successCallback = function successCallback(isAvailable) {
            console.log(isAvailable);
            var options = {
              maximumImagesCount: 1,
              DATA_URI: 1,
              quality: 40
            };
            _this3.imageData = [];

            _this3.imagePicker.getPictures(options).then(function (results) {
              var imageCount = 1;

              for (var i = 0; i < results.length; i++) {
                _this3.base64.encodeFile(results[i]).then(function (base64File) {
                  console.log(base64File);

                  _this3.imageData.push({
                    image: base64File
                  });

                  console.log(_this3.imageData);

                  if (imageCount == results.length) {
                    _this3.onSaveImageDataHandler();
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
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionCtrl.create({
                      header: 'Select image from',
                      buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: function handler() {
                          console.log('Camera Clicked');

                          _this4.takePhotograph();
                        }
                      }, {
                        text: 'Gallery',
                        icon: 'image',
                        handler: function handler() {
                          console.log('Gallery Clicked');

                          _this4.selectImageFromGallery();
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onGetProfileDataHandler",
        value: function onGetProfileDataHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var inputData;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    inputData = {};
                    this.dbService.presentLoader();
                    this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(function (result) {
                      console.log(result);

                      _this5.dbService.dismissLoader();

                      _this5.profileData = result["loginData"];
                      console.log(_this5.profileData);
                      _this5.contactData = result["contactData"];
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "onViewImageHandler",
        value: function onViewImageHandler() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var imagePath;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    imagePath = this.dbService.customerDocURL + this.profileData.image_url;
                    console.log(imagePath);
                    this.photoViewer.show(imagePath);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CustomerprofilePage;
    }();

    CustomerprofilePage.ctorParameters = function () {
      return [{
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
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"]
      }, {
        type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"]
      }];
    };

    CustomerprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customerprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customerprofile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerprofile/customerprofile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customerprofile.page.scss */
      "./src/app/customer_app/customerprofile/customerprofile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"]])], CustomerprofilePage);
    /***/
  }
}]);
//# sourceMappingURL=customerprofile-customerprofile-module-es5.js.map