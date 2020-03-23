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


    __webpack_exports__["default"] = "<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            \n            <div class=\"profile-big\"><img *ngIf=\"profileData.image_url\" src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\"></div>\n            \n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button [routerLink]=\"['/customer/home']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>My Profile</ion-title>\n                </div>\n                \n                \n                <div (click)=\"presentActionSheet()\" class=\"cs-right\">\n                    <ion-button><ion-icon name=\"camera\"></ion-icon></ion-button>\n                </div>\n                \n            </div>\n            \n            <div class=\"profile-segment detail\">\n                \n                <div class=\"pr-icon\">\n                    \n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\n                    \n                    <div (click)=\"onViewImageHandler()\" *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\n                        <img  src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\">\n                    </div>\n                    \n                </div>\n                \n                <div class=\"info\">\n                    <ion-text color=\"light\">{{profileData.company_name}}<br><span>{{profileData.cust_code}}</span></ion-text>\n                </div>\n            </div>\n            \n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <div class=\"cs-ion-content pt0\" padding>\n            <div class=\"my_profile\" padding>\n                \n                <div class=\"information\">\n                    <div class=\"figure\">\n                        <img src=\"assets/icon/pr_call.svg\" alt=\"\">\n                        <h1>+91 {{profileData.landline_no}}</h1>\n                    </div>\n                    <div class=\"figure\">\n                        <img src=\"assets/icon/pr_email.svg\" alt=\"\">\n                        <a>{{profileData.email}}</a>\n                    </div>\n                    <div class=\"figure\">\n                        <img src=\"assets/icon/pr_address.svg\" alt=\"\">\n                        <h1>{{profileData.project_street}} {{profileData.project_state}}, {{profileData.project_district}}, {{profileData.project_city}}, {{profileData.project_pincode}}</h1>\n                    </div>\n                </div>\n\n\n                <div class=\"dashboard_container pr0 pb0 pl0\">\n                    <div class=\"customer-dash\">\n                        <div class=\"cs-left pr0\">\n                            <button class=\"change-pass\" [routerLink]=\"['/changepassword']\">\n                               <div class=\"figure\">\n                                   <div class=\"top\">\n                                       <i class=\"material-icons\">arrow_right_alt</i>\n                                       <img src=\"assets/icon/change_password.svg\" alt=\"\">\n                                   </div>\n                                   <h1>Change Password</h1>\n                               </div>\n                           </button>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"complaints product-list mt32 pb10\" style=\"border-radius: 6px;\">\n                    <div class=\"cnt-person\">\n                        <div class=\"css-heading\"><h1>Contact Person(S)</h1></div>\n                        \n                        <div *ngFor = \"let row of contactData\" class=\"p-info mt10\">\n                            <div class=\"cs-left\">\n                                <h1><i class=\"material-icons\">person</i>{{row.name}} ({{row.designation}})</h1>\n                                <ion-text><i class=\"material-icons\">mail</i>{{row.email}}</ion-text>\n                            </div>\n                            <div class=\"cs-right\">\n                                <a href=\"tel: {{row.mobile}}\"><i class=\"material-icons\">call</i></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n";
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

    const routes = [{
      path: '',
      component: _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__["CustomerprofilePage"]
    }];
    let CustomerprofilePageRoutingModule = class CustomerprofilePageRoutingModule {};
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

    let CustomerprofilePageModule = class CustomerprofilePageModule {};
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

    let CustomerprofilePage = class CustomerprofilePage {
      constructor(actionCtrl, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, photoViewer, dbService) {
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

      ngOnInit() {}

      onSaveImageDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let uploadData;

          for (let j = 0; j < this.imageData.length; j++) {
            const binaryDataSplit = this.imageData[j].image.split('base64,');
            uploadData = binaryDataSplit[1];
            console.log(uploadData);
          }

          const inputData = {
            uploadData: uploadData
          };
          console.log(inputData);
          this.dbService.presentLoader();
          this.dbService.onPostRequestHandler(inputData, 'login/onSaveProfileImagesData').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.dbService.presentToast('Profile Updated Successfully!');
            this.onGetProfileDataHandler();
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
            maximumImagesCount: 1,
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

      onGetProfileDataHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const inputData = {};
          this.dbService.presentLoader();
          this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(result => {
            console.log(result);
            this.dbService.dismissLoader();
            this.profileData = result["loginData"];
            console.log(this.profileData);
            this.contactData = result["contactData"];
          });
        });
      }

      onViewImageHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const imagePath = this.dbService.customerDocURL + this.profileData.image_url;
          console.log(imagePath);
          this.photoViewer.show(imagePath);
        });
      }

    };

    CustomerprofilePage.ctorParameters = () => [{
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

    CustomerprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customerprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customerprofile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/customerprofile/customerprofile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customerprofile.page.scss */
      "./src/app/customer_app/customerprofile/customerprofile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"], _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"]])], CustomerprofilePage);
    /***/
  }
}]);
//# sourceMappingURL=customerprofile-customerprofile-module-es5.js.map