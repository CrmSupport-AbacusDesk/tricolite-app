(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-image-gallery-image-gallery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/image-gallery/image-gallery.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/complaints/image-gallery/image-gallery.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\r\n  <div class=\"cs-main-container\">\r\n      <div class=\"custome-head\">\r\n          <div class=\"cs-ion-header\">\r\n              <div class=\"cs-left\">\r\n                  <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                  <ion-title>Documents</ion-title>\r\n              </div>\r\n          </div>\r\n          <div class=\"cs-ion-hf\"></div>\r\n      </div>\r\n      \r\n      <div class=\"cs-ion-content pt0\" padding>\r\n        <div class=\"cs-title\">Image Title</div>\r\n        <div class=\"gallery\">\r\n            <a><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></a>\r\n            <a><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></a>\r\n            <a><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></a>\r\n            <a><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></a>\r\n            <a><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></a>\r\n            <a><img src=\"assets/img/spare_parts.jpg\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/technician_app/complaints/image-gallery/image-gallery-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/technician_app/complaints/image-gallery/image-gallery-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ImageGalleryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPageRoutingModule", function() { return ImageGalleryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-gallery.page */ "./src/app/technician_app/complaints/image-gallery/image-gallery.page.ts");




var routes = [
    {
        path: '',
        component: _image_gallery_page__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryPage"]
    }
];
var ImageGalleryPageRoutingModule = /** @class */ (function () {
    function ImageGalleryPageRoutingModule() {
    }
    ImageGalleryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ImageGalleryPageRoutingModule);
    return ImageGalleryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/image-gallery/image-gallery.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/image-gallery/image-gallery.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPageModule", function() { return ImageGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-gallery-routing.module */ "./src/app/technician_app/complaints/image-gallery/image-gallery-routing.module.ts");
/* harmony import */ var _image_gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-gallery.page */ "./src/app/technician_app/complaints/image-gallery/image-gallery.page.ts");







var ImageGalleryPageModule = /** @class */ (function () {
    function ImageGalleryPageModule() {
    }
    ImageGalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _image_gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageGalleryPageRoutingModule"]
            ],
            declarations: [_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryPage"]]
        })
    ], ImageGalleryPageModule);
    return ImageGalleryPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/complaints/image-gallery/image-gallery.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/technician_app/complaints/image-gallery/image-gallery.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/technician_app/complaints/image-gallery/image-gallery.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/technician_app/complaints/image-gallery/image-gallery.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPage", function() { return ImageGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ImageGalleryPage = /** @class */ (function () {
    function ImageGalleryPage(location) {
        this.location = location;
    }
    ImageGalleryPage.prototype.ngOnInit = function () {
    };
    ImageGalleryPage.prototype.GoComplaintDetail = function () {
        this.location.back();
    };
    ImageGalleryPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
    ]; };
    ImageGalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-gallery',
            template: __webpack_require__(/*! raw-loader!./image-gallery.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/complaints/image-gallery/image-gallery.page.html"),
            styles: [__webpack_require__(/*! ./image-gallery.page.scss */ "./src/app/technician_app/complaints/image-gallery/image-gallery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ImageGalleryPage);
    return ImageGalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=complaints-image-gallery-image-gallery-module-es5.js.map