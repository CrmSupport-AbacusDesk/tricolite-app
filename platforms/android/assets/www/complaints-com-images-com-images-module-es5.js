(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-images-com-images-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-images/com-images.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/com-images/com-images.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button  (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title>#COM-{{taskNo}} - <ion-text>Images</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"gallery-container\">\r\n                <div class=\"img-gallery\">\r\n                    <div (click)=\"presentActionSheet()\" class=\"figure upload\"><i class=\"material-icons\">add</i></div>\r\n                    <div *ngFor=\"let row of taskImageData; let index = index\"  class=\"figure\">\r\n                        <img (click) = \"onViewImageHandler(index)\" src=\"{{dbService.uploadURL}}{{row.image_url}}\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-images/com-images-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-images/com-images-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ComImagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComImagesPageRoutingModule", function() { return ComImagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_images_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com-images.page */ "./src/app/technician_app/complaints/com-images/com-images.page.ts");




var routes = [
    {
        path: '',
        component: _com_images_page__WEBPACK_IMPORTED_MODULE_3__["ComImagesPage"]
    }
];
var ComImagesPageRoutingModule = /** @class */ (function () {
    function ComImagesPageRoutingModule() {
    }
    ComImagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ComImagesPageRoutingModule);
    return ComImagesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-images/com-images.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-images/com-images.module.ts ***!
  \***************************************************************************/
/*! exports provided: ComImagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComImagesPageModule", function() { return ComImagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_images_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-images-routing.module */ "./src/app/technician_app/complaints/com-images/com-images-routing.module.ts");
/* harmony import */ var _com_images_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com-images.page */ "./src/app/technician_app/complaints/com-images/com-images.page.ts");







var ComImagesPageModule = /** @class */ (function () {
    function ComImagesPageModule() {
    }
    ComImagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _com_images_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComImagesPageRoutingModule"]
            ],
            declarations: [_com_images_page__WEBPACK_IMPORTED_MODULE_6__["ComImagesPage"]]
        })
    ], ComImagesPageModule);
    return ComImagesPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/com-images/com-images.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-images/com-images.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWltYWdlcy9jb20taW1hZ2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/technician_app/complaints/com-images/com-images.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/technician_app/complaints/com-images/com-images.page.ts ***!
  \*************************************************************************/
/*! exports provided: ComImagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComImagesPage", function() { return ComImagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tec-compliant-popover/tec-compliant-popover.component */ "./src/app/technician_app/complaints/tec-compliant-popover/tec-compliant-popover.component.ts");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












var ComImagesPage = /** @class */ (function () {
    function ComImagesPage(popoverController, actionCtrl, location, router, routeParams, alertCtrl, toastCtrl, diagnostic, camera, imagePicker, base64, dbService, photoViewer) {
        var _this = this;
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
    ComImagesPage.prototype.ngOnInit = function () {
    };
    ComImagesPage.prototype.onGetTaskImageDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                inputData = {
                    taskId: this.taskId
                };
                this.dbService.presentLoader();
                this.dbService.onPostRequestHandler(inputData, 'task/getTaskImageData').subscribe(function (result) {
                    console.log(result);
                    _this.dbService.dismissLoader();
                    _this.taskImageData = result["taskImageData"];
                });
                return [2 /*return*/];
            });
        });
    };
    ComImagesPage.prototype.onSaveImageDataHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uploadData, documentData, j, binaryDataSplit, randomName, inputData;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                uploadData = [];
                documentData = {};
                console.log(this.imageData);
                for (j = 0; j < this.imageData.length; j++) {
                    documentData = new FormData;
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
                    _this.dbService.dismissLoader();
                    _this.dbService.presentToast('Image Saved Successfully!');
                    setTimeout(function () {
                        _this.onGetTaskImageDataHandler();
                    }, 1000);
                });
                return [2 /*return*/];
            });
        });
    };
    ComImagesPage.prototype.takePhotograph = function () {
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
    ComImagesPage.prototype.selectImageFromGallery = function () {
        var _this = this;
        var successCallback = function (isAvailable) {
            console.log(isAvailable);
            var options = {
                maximumImagesCount: 10,
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
    ComImagesPage.prototype.onViewImageHandler = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imagePath;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                imagePath = this.dbService.uploadURL + this.taskImageData[index].image_url;
                console.log(imagePath);
                this.photoViewer.show(imagePath);
                return [2 /*return*/];
            });
        });
    };
    ComImagesPage.prototype.presentActionSheet = function () {
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
    ComImagesPage.prototype.onRemoveImageHandler = function (index) {
        this.imageData.splice(index, 1);
    };
    ComImagesPage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskData, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        taskData = {
                            taskId: this.taskId,
                            taskNo: this.taskNo
                        };
                        return [4 /*yield*/, this.popoverController.create({
                                component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
                                event: ev,
                                translucent: true,
                                componentProps: taskData
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ComImagesPage.prototype.GoComplaintDetail = function () {
        this.location.back();
    };
    ComImagesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__["Diagnostic"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"] },
        { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"] },
        { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__["DbServiceService"] },
        { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"] }
    ]; };
    ComImagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-com-images',
            template: __webpack_require__(/*! raw-loader!./com-images.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/com-images/com-images.page.html"),
            styles: [__webpack_require__(/*! ./com-images.page.scss */ "./src/app/technician_app/complaints/com-images/com-images.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_5__["Diagnostic"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_8__["Base64"],
            src_app_db_service_service__WEBPACK_IMPORTED_MODULE_9__["DbServiceService"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"]])
    ], ComImagesPage);
    return ComImagesPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-com-images-com-images-module-es5.js.map