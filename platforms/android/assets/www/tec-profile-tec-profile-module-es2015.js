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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tec_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tec-profile.page */ "./src/app/technician_app/tec-profile/tec-profile.page.ts");




const routes = [
    {
        path: '',
        component: _tec_profile_page__WEBPACK_IMPORTED_MODULE_3__["TecProfilePage"]
    }
];
let TecProfilePageRoutingModule = class TecProfilePageRoutingModule {
};
TecProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TecProfilePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tec_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tec-profile-routing.module */ "./src/app/technician_app/tec-profile/tec-profile-routing.module.ts");
/* harmony import */ var _tec_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tec-profile.page */ "./src/app/technician_app/tec-profile/tec-profile.page.ts");







let TecProfilePageModule = class TecProfilePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");










let TecProfilePage = class TecProfilePage {
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
        this.imageData = '';
        this.onGetProfileDataHandler();
    }
    ngOnInit() {
    }
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
            this.dbService.onPostRequestHandler(inputData, 'login/onSaveProfileImagesData').subscribe((result) => {
                console.log(result);
                this.dbService.dismissLoader();
                this.dbService.presentToast('Profile Updated Successfully!');
                this.onGetProfileDataHandler();
            });
        });
    }
    takePhotograph() {
        const successCallback = (isAvailable) => {
            this.camera.getPicture({
                quality: 40,
                targetWidth: 600,
                targetHeight: 600,
                destinationType: this.camera.DestinationType.DATA_URL,
            }).then((data) => {
                this.imageData = [];
                this.imageData.push({
                    image: 'data:image/jpeg;base64,' + data
                });
                console.log(this.imageData);
                this.onSaveImageDataHandler();
            });
        };
        const errorCallback = (e) => {
            console.log(e);
        };
        this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
    }
    selectImageFromGallery() {
        const successCallback = (isAvailable) => {
            console.log(isAvailable);
            const options = {
                maximumImagesCount: 1,
                DATA_URI: 1,
                quality: 40
            };
            this.imageData = [];
            this.imagePicker.getPictures(options).then((results) => {
                let imageCount = 1;
                for (var i = 0; i < results.length; i++) {
                    this.base64.encodeFile(results[i]).then((base64File) => {
                        console.log(base64File);
                        this.imageData.push({ image: base64File });
                        console.log(this.imageData);
                        if (imageCount == results.length) {
                            this.onSaveImageDataHandler();
                        }
                        imageCount++;
                    }, (err) => {
                        console.log(err);
                    });
                }
            }, (err) => { });
        };
        const errorCallback = (e) => {
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
            this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe((result) => {
                console.log(result);
                this.dbService.dismissLoader();
                this.profileData = result[`loginData`];
            });
        });
    }
    onViewImageHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const imagePath = this.dbService.userDocURL + this.profileData.image_url;
            console.log(imagePath);
            this.photoViewer.show(imagePath);
        });
    }
};
TecProfilePage.ctorParameters = () => [
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
];
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



/***/ })

}]);
//# sourceMappingURL=tec-profile-tec-profile-module-es2015.js.map