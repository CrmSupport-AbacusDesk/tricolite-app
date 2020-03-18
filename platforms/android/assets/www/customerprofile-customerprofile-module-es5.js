(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customerprofile-customerprofile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer_app/customerprofile/customerprofile.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer_app/customerprofile/customerprofile.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            \r\n            <div class=\"profile-big\"><img *ngIf=\"profileData.image_url\" src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\"></div>\r\n            \r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/customer/home']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>My Profile</ion-title>\r\n                </div>\r\n                \r\n                \r\n                <div (click)=\"presentActionSheet()\" class=\"cs-right\">\r\n                    <ion-button><ion-icon name=\"camera\"></ion-icon></ion-button>\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n            <div class=\"profile-segment detail\">\r\n                \r\n                <div class=\"pr-icon\">\r\n                    \r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n                    \r\n                    <div (click)=\"onViewImageHandler()\" *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.customerDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n                    \r\n                </div>\r\n                \r\n                <div class=\"info\">\r\n                    <ion-text color=\"light\">{{profileData.company_name}}<br><span>{{profileData.cust_code}}</span></ion-text>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"my_profile\" padding>\r\n                \r\n                <div class=\"information\">\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_call.svg\" alt=\"\">\r\n                        <h1>+91 {{profileData.landline_no}}</h1>\r\n                    </div>\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_email.svg\" alt=\"\">\r\n                        <a>{{profileData.email}}</a>\r\n                    </div>\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_address.svg\" alt=\"\">\r\n                        <h1>{{profileData.project_street}} {{profileData.project_state}}, {{profileData.project_district}}, {{profileData.project_city}}, {{profileData.project_pincode}}</h1>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"dashboard_container pr0 pb0 pl0\">\r\n                    <div class=\"customer-dash\">\r\n                        <div class=\"cs-left pr0\">\r\n                            <button class=\"change-pass\" [routerLink]=\"['/changepassword']\">\r\n                               <div class=\"figure\">\r\n                                   <div class=\"top\">\r\n                                       <i class=\"material-icons\">arrow_right_alt</i>\r\n                                       <img src=\"assets/icon/change_password.svg\" alt=\"\">\r\n                                   </div>\r\n                                   <h1>Change Password</h1>\r\n                               </div>\r\n                           </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"complaints product-list mt32 pb10\" style=\"border-radius: 6px;\">\r\n                    <div class=\"cnt-person\">\r\n                        <div class=\"css-heading\"><h1>Contact Person(S)</h1></div>\r\n                        \r\n                        <div *ngFor = \"let row of contactData\" class=\"p-info mt10\">\r\n                            <div class=\"cs-left\">\r\n                                <h1><i class=\"material-icons\">person</i>{{row.name}} ({{row.designation}})</h1>\r\n                                <ion-text><i class=\"material-icons\">mail</i>{{row.email}}</ion-text>\r\n                            </div>\r\n                            <div class=\"cs-right\">\r\n                                <a href=\"tel: {{row.mobile}}\"><i class=\"material-icons\">call</i></a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/customer_app/customerprofile/customerprofile-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/customer_app/customerprofile/customerprofile-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofilePageRoutingModule", function() { return CustomerprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerprofile.page */ "./src/app/customer_app/customerprofile/customerprofile.page.ts");




var routes = [
    {
        path: '',
        component: _customerprofile_page__WEBPACK_IMPORTED_MODULE_3__["CustomerprofilePage"]
    }
];
var CustomerprofilePageRoutingModule = /** @class */ (function () {
    function CustomerprofilePageRoutingModule() {
    }
    CustomerprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CustomerprofilePageRoutingModule);
    return CustomerprofilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer_app/customerprofile/customerprofile.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/customer_app/customerprofile/customerprofile.module.ts ***!
  \************************************************************************/
/*! exports provided: CustomerprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofilePageModule", function() { return CustomerprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerprofile-routing.module */ "./src/app/customer_app/customerprofile/customerprofile-routing.module.ts");
/* harmony import */ var _customerprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerprofile.page */ "./src/app/customer_app/customerprofile/customerprofile.page.ts");







var CustomerprofilePageModule = /** @class */ (function () {
    function CustomerprofilePageModule() {
    }
    CustomerprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _customerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerprofilePageRoutingModule"]
            ],
            declarations: [_customerprofile_page__WEBPACK_IMPORTED_MODULE_6__["CustomerprofilePage"]]
        })
    ], CustomerprofilePageModule);
    return CustomerprofilePageModule;
}());



/***/ }),

/***/ "./src/app/customer_app/customerprofile/customerprofile.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/customer_app/customerprofile/customerprofile.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9jdXN0b21lcnByb2ZpbGUvY3VzdG9tZXJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer_app/customerprofile/customerprofile.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customer_app/customerprofile/customerprofile.page.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerprofilePage", function() { return CustomerprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");










var CustomerprofilePage = /** @class */ (function () {
    function CustomerprofilePage(actionCtrl, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, photoViewer, dbService) {
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
    CustomerprofilePage.prototype.ngOnInit = function () {
    };
    CustomerprofilePage.prototype.onSaveImageDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadData, j, binaryDataSplit, inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    CustomerprofilePage.prototype.takePhotograph = function () {
        var _this = this;
        var successCallback = function (isAvailable) {
            _this.camera.getPicture({
                quality: 40,
                targetWidth: 600,
                targetHeight: 600,
                destinationType: _this.camera.DestinationType.DATA_URL,
            }).then(function (data) {
                _this.imageData = [];
                _this.imageData.push({
                    image: 'data:image/jpeg;base64,' + data
                });
                console.log(_this.imageData);
                _this.onSaveImageDataHandler();
            });
        };
        var errorCallback = function (e) {
            console.log(e);
        };
        this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
    };
    CustomerprofilePage.prototype.selectImageFromGallery = function () {
        var _this = this;
        var successCallback = function (isAvailable) {
            console.log(isAvailable);
            var options = {
                maximumImagesCount: 1,
                DATA_URI: 1,
                quality: 40
            };
            _this.imageData = [];
            _this.imagePicker.getPictures(options).then(function (results) {
                var imageCount = 1;
                for (var i = 0; i < results.length; i++) {
                    _this.base64.encodeFile(results[i]).then(function (base64File) {
                        console.log(base64File);
                        _this.imageData.push({ image: base64File });
                        console.log(_this.imageData);
                        if (imageCount == results.length) {
                            _this.onSaveImageDataHandler();
                        }
                        imageCount++;
                    }, function (err) {
                        console.log(err);
                    });
                }
            }, function (err) { });
        };
        var errorCallback = function (e) {
            console.log(e);
        };
        this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
    };
    CustomerprofilePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionCtrl.create({
                            header: 'Select image from',
                            buttons: [{
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('Camera Clicked');
                                        _this.takePhotograph();
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'image',
                                    handler: function () {
                                        console.log('Gallery Clicked');
                                        _this.selectImageFromGallery();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerprofilePage.prototype.onGetProfileDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {};
                this.dbService.presentLoader();
                this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe(function (result) {
                    console.log(result);
                    _this.dbService.dismissLoader();
                    _this.profileData = result["loginData"];
                    console.log(_this.profileData);
                    _this.contactData = result["contactData"];
                });
                return [2 /*return*/];
            });
        });
    };
    CustomerprofilePage.prototype.onViewImageHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imagePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                imagePath = this.dbService.customerDocURL + this.profileData.image_url;
                console.log(imagePath);
                this.photoViewer.show(imagePath);
                return [2 /*return*/];
            });
        });
    };
    CustomerprofilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"] },
        { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"] },
        { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"] }
    ]; };
    CustomerprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customerprofile',
            template: __webpack_require__(/*! raw-loader!./customerprofile.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer_app/customerprofile/customerprofile.page.html"),
            styles: [__webpack_require__(/*! ./customerprofile.page.scss */ "./src/app/customer_app/customerprofile/customerprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__["Base64"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__["DbServiceService"]])
    ], CustomerprofilePage);
    return CustomerprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=customerprofile-customerprofile-module-es5.js.map