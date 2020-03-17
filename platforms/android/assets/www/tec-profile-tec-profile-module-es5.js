(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tec-profile-tec-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/tec-profile/tec-profile.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/tec-profile/tec-profile.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            \r\n            <div class=\"profile-big\"><img *ngIf=\"profileData.image_url\" src=\"{{dbService.userDocURL + profileData.image_url}}\" alt=\"\"></div>\r\n\r\n            <div class=\"cs-ion-header\">\r\n\r\n                <div class=\"cs-left\">\r\n                    <ion-button [routerLink]=\"['/technicians/menu']\">\r\n                        <ion-icon name=\"arrow-back\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-title>My Profile</ion-title>\r\n                </div>\r\n\r\n                <div (click)=\"presentActionSheet()\" class=\"cs-right\">\r\n                    <ion-button><ion-icon name=\"camera\"></ion-icon></ion-button>\r\n                </div>\r\n\r\n            </div>\r\n            \r\n            <div class=\"profile-segment detail\">\r\n\r\n                <div class=\"pr-icon\">\r\n\r\n                    <div *ngIf=\"!profileData.image_url\" class=\"cs-icon\"></div>\r\n\r\n                    <div (click)=\"onViewImageHandler()\" *ngIf=\"profileData.image_url\" class=\"cs-thumb\">\r\n                        <img  src=\"{{dbService.userDocURL + profileData.image_url}}\" alt=\"\">\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"info\">\r\n\r\n                    <ion-text color=\"light\">{{profileData.name}}<br>\r\n                        <span>{{profileData.mobile}}</span>\r\n                    </ion-text>\r\n\r\n                </div>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"my_profile\" padding>\r\n                \r\n                <div class=\"information\">\r\n\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_call.svg\" alt=\"\">\r\n                        <h1>{{profileData.mobile}}</h1>\r\n                    </div>\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_email.svg\" alt=\"\">\r\n                        <a>{{profileData.email}}</a>\r\n                    </div>\r\n                    <div class=\"figure\">\r\n                        <img src=\"assets/icon/pr_address.svg\" alt=\"\">\r\n                        <h1>{{profileData.street}} {{profileData.state_name}}, {{profileData.district_name}}, {{profileData.city}}, {{profileData.pincode}}</h1>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/tec-profile/tec-profile-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/technician_app/tec-profile/tec-profile-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: TecProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecProfilePageRoutingModule", function() { return TecProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tec_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tec-profile.page */ "./src/app/technician_app/tec-profile/tec-profile.page.ts");




var routes = [
    {
        path: '',
        component: _tec_profile_page__WEBPACK_IMPORTED_MODULE_3__["TecProfilePage"]
    }
];
var TecProfilePageRoutingModule = /** @class */ (function () {
    function TecProfilePageRoutingModule() {
    }
    TecProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TecProfilePageRoutingModule);
    return TecProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/tec-profile/tec-profile.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/technician_app/tec-profile/tec-profile.module.ts ***!
  \******************************************************************/
/*! exports provided: TecProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecProfilePageModule", function() { return TecProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tec-profile-routing.module */ "./src/app/technician_app/tec-profile/tec-profile-routing.module.ts");
/* harmony import */ var _tec_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tec-profile.page */ "./src/app/technician_app/tec-profile/tec-profile.page.ts");







var TecProfilePageModule = /** @class */ (function () {
    function TecProfilePageModule() {
    }
    TecProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _tec_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["TecProfilePageRoutingModule"]
            ],
            declarations: [_tec_profile_page__WEBPACK_IMPORTED_MODULE_6__["TecProfilePage"]]
        })
    ], TecProfilePageModule);
    return TecProfilePageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/tec-profile/tec-profile.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/technician_app/tec-profile/tec-profile.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL3RlYy1wcm9maWxlL3RlYy1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/technician_app/tec-profile/tec-profile.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/technician_app/tec-profile/tec-profile.page.ts ***!
  \****************************************************************/
/*! exports provided: TecProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecProfilePage", function() { return TecProfilePage; });
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










var TecProfilePage = /** @class */ (function () {
    function TecProfilePage(actionCtrl, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, photoViewer, dbService) {
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
        this.imageData = '';
        this.onGetProfileDataHandler();
    }
    TecProfilePage.prototype.ngOnInit = function () {
    };
    TecProfilePage.prototype.onSaveImageDataHandler = function () {
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
    TecProfilePage.prototype.takePhotograph = function () {
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
    TecProfilePage.prototype.selectImageFromGallery = function () {
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
    TecProfilePage.prototype.presentActionSheet = function () {
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
    TecProfilePage.prototype.onGetProfileDataHandler = function () {
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
                });
                return [2 /*return*/];
            });
        });
    };
    TecProfilePage.prototype.onViewImageHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imagePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                imagePath = this.dbService.userDocURL + this.profileData.image_url;
                console.log(imagePath);
                this.photoViewer.show(imagePath);
                return [2 /*return*/];
            });
        });
    };
    TecProfilePage.ctorParameters = function () { return [
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
    TecProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tec-profile',
            template: __webpack_require__(/*! raw-loader!./tec-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/tec-profile/tec-profile.page.html"),
            styles: [__webpack_require__(/*! ./tec-profile.page.scss */ "./src/app/technician_app/tec-profile/tec-profile.page.scss")]
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
    ], TecProfilePage);
    return TecProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=tec-profile-tec-profile-module-es5.js.map