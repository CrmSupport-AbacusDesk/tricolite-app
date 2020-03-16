(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["technician_app-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/technician_app/tabs/tabs.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technician_app/tabs/tabs.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs #mainTabs>\r\n    \r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button (click)=\"tabChanged('home')\" tab=\"home\">\r\n            <ion-icon name=\"home\"></ion-icon>\r\n            <ion-label>HOME</ion-label>\r\n        </ion-tab-button>\r\n        \r\n        <ion-tab-button (click)=\"tabChanged('complaint')\" tab=\"complaints\">\r\n            <ion-icon name=\"alert\"></ion-icon>\r\n            <ion-label>COMPLAINTS</ion-label>\r\n        </ion-tab-button>\r\n        \r\n        <ion-tab-button (click)=\"tabChanged('commissioning')\" tab=\"commissioning\">\r\n            <ion-icon name=\"flower\"></ion-icon>\r\n            <ion-label>COMMISSIONING</ion-label>\r\n        </ion-tab-button>\r\n        \r\n        <ion-tab-button (click)=\"tabChanged('menu')\" tab=\"menu\">\r\n            <ion-icon name=\"menu\"></ion-icon>\r\n            <ion-label>MENU</ion-label>\r\n        </ion-tab-button>\r\n    </ion-tab-bar>\r\n    \r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/technician_app/tabs/tabs-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/technician_app/tabs/tabs-routing.module.ts ***!
  \************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/technician_app/tabs/tabs.page.ts");




var routes = [
    {
        path: '',
        redirectTo: '/technicians/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: function () { return __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/technician_app/home/home.module.ts")).then(function (m) { return m.HomePageModule; }); }
            },
            // ============= +++++++
            // ============= +++++++
            // ============= +++++++ Menus Inner Page Routing Start..........
            // ============= +++++++
            // ============= +++++++
            {
                path: 'menu',
                loadChildren: function () { return __webpack_require__.e(/*! import() | menu-menu-module */ "menu-menu-module").then(__webpack_require__.bind(null, /*! ../menu/menu.module */ "./src/app/technician_app/menu/menu.module.ts")).then(function (m) { return m.MenuPageModule; }); }
            },
            {
                path: 'menu/profile',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tec-profile-tec-profile-module */ "tec-profile-tec-profile-module").then(__webpack_require__.bind(null, /*! ../tec-profile/tec-profile.module */ "./src/app/technician_app/tec-profile/tec-profile.module.ts")).then(function (m) { return m.TecProfilePageModule; }); }
            },
            {
                path: 'menu/documents',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tec-document-tec-document-module */ "tec-document-tec-document-module").then(__webpack_require__.bind(null, /*! ../tec-document/tec-document.module */ "./src/app/technician_app/tec-document/tec-document.module.ts")).then(function (m) { return m.TecDocumentPageModule; }); }
            },
            {
                path: 'menu/documents/detail/:documentId/:documentTitle',
                loadChildren: function () { return __webpack_require__.e(/*! import() | tech-document-detail-tech-document-detail-module */ "tech-document-detail-tech-document-detail-module").then(__webpack_require__.bind(null, /*! ..//tech-document-detail/tech-document-detail.module */ "./src/app/technician_app/tech-document-detail/tech-document-detail.module.ts")).then(function (m) { return m.TechDocumentDetailModule; }); }
            },
            // ============= +++++++
            // ============= +++++++
            // ============= +++++++ Menus Inner Page Routing End............
            // ============= +++++++
            // ============= +++++++
            // ============= +++++++
            // ============= +++++++
            // ============= +++++++ Complaint Inner Page Routing Start.....
            // ============= +++++++
            // ============= +++++++
            {
                path: 'complaints',
                loadChildren: function () { return Promise.all(/*! import() | complaints-complaintlist-complaintlist-module */[__webpack_require__.e("default~complaints-complaintlist-complaintlist-module~myprojects-myprojects-module~service_request-r~738493b2"), __webpack_require__.e("complaints-complaintlist-complaintlist-module")]).then(__webpack_require__.bind(null, /*! ../complaints/complaintlist/complaintlist.module */ "./src/app/technician_app/complaints/complaintlist/complaintlist.module.ts")).then(function (m) { return m.ComplaintlistPageModule; }); }
            },
            {
                path: 'commissioning',
                loadChildren: function () { return Promise.all(/*! import() | complaints-complaintlist-complaintlist-module */[__webpack_require__.e("default~complaints-complaintlist-complaintlist-module~myprojects-myprojects-module~service_request-r~738493b2"), __webpack_require__.e("complaints-complaintlist-complaintlist-module")]).then(__webpack_require__.bind(null, /*! ../complaints/complaintlist/complaintlist.module */ "./src/app/technician_app/complaints/complaintlist/complaintlist.module.ts")).then(function (m) { return m.ComplaintlistPageModule; }); }
            },
            {
                path: 'complaints/details/:taskId',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-complaintdetail-complaintdetail-module */ "complaints-complaintdetail-complaintdetail-module").then(__webpack_require__.bind(null, /*! ../complaints/complaintdetail/complaintdetail.module */ "./src/app/technician_app/complaints/complaintdetail/complaintdetail.module.ts")).then(function (m) { return m.ComplaintdetailPageModule; }); }
            },
            {
                path: 'commissioning/details/:taskId',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-complaintdetail-complaintdetail-module */ "complaints-complaintdetail-complaintdetail-module").then(__webpack_require__.bind(null, /*! ../complaints/complaintdetail/complaintdetail.module */ "./src/app/technician_app/complaints/complaintdetail/complaintdetail.module.ts")).then(function (m) { return m.ComplaintdetailPageModule; }); }
            },
            {
                path: 'complaints/details/remarks/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-remarks-com-remarks-module */ "complaints-com-remarks-com-remarks-module").then(__webpack_require__.bind(null, /*! ../complaints/com-remarks/com-remarks.module */ "./src/app/technician_app/complaints/com-remarks/com-remarks.module.ts")).then(function (m) { return m.ComRemarksPageModule; }); }
            },
            {
                path: 'commissioning/details/remarks/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-remarks-com-remarks-module */ "complaints-com-remarks-com-remarks-module").then(__webpack_require__.bind(null, /*! ../complaints/com-remarks/com-remarks.module */ "./src/app/technician_app/complaints/com-remarks/com-remarks.module.ts")).then(function (m) { return m.ComRemarksPageModule; }); }
            },
            {
                path: 'complaints/details/status/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-changestatus-com-changestatus-module */ "complaints-com-changestatus-com-changestatus-module").then(__webpack_require__.bind(null, /*! ../complaints/com-changestatus/com-changestatus.module */ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.module.ts")).then(function (m) { return m.ComChangestatusPageModule; }); }
            },
            {
                path: 'commissioning/details/status/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-changestatus-com-changestatus-module */ "complaints-com-changestatus-com-changestatus-module").then(__webpack_require__.bind(null, /*! ../complaints/com-changestatus/com-changestatus.module */ "./src/app/technician_app/complaints/com-changestatus/com-changestatus.module.ts")).then(function (m) { return m.ComChangestatusPageModule; }); }
            },
            {
                path: 'complaints/details/spareparts/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-spareparts-com-spareparts-module */ "complaints-com-spareparts-com-spareparts-module").then(__webpack_require__.bind(null, /*! ../complaints/com-spareparts/com-spareparts.module */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.module.ts")).then(function (m) { return m.ComSparepartsPageModule; }); }
            },
            {
                path: 'commissioning/details/spareparts/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-spareparts-com-spareparts-module */ "complaints-com-spareparts-com-spareparts-module").then(__webpack_require__.bind(null, /*! ../complaints/com-spareparts/com-spareparts.module */ "./src/app/technician_app/complaints/com-spareparts/com-spareparts.module.ts")).then(function (m) { return m.ComSparepartsPageModule; }); }
            },
            {
                path: 'complaints/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
                // tslint:disable-next-line: max-line-length
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-installspareparts-com-installspareparts-module */ "complaints-com-installspareparts-com-installspareparts-module").then(__webpack_require__.bind(null, /*! ../complaints/com-installspareparts/com-installspareparts.module */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts")).then(function (m) { return m.ComInstallsparepartsPageModule; }); }
            },
            {
                path: 'commissioning/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
                // tslint:disable-next-line: max-line-length
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-installspareparts-com-installspareparts-module */ "complaints-com-installspareparts-com-installspareparts-module").then(__webpack_require__.bind(null, /*! ../complaints/com-installspareparts/com-installspareparts.module */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts")).then(function (m) { return m.ComInstallsparepartsPageModule; }); }
            },
            {
                path: 'complaints/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
                // tslint:disable-next-line: max-line-length
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-installspareparts-com-installspareparts-module */ "complaints-com-installspareparts-com-installspareparts-module").then(__webpack_require__.bind(null, /*! ../complaints/com-installspareparts/com-installspareparts.module */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts")).then(function (m) { return m.ComInstallsparepartsPageModule; }); }
            },
            {
                path: 'commissioning/details/spareparts/installspareparts/:taskId/:taskNo/:taskStatus',
                // tslint:disable-next-line: max-line-length
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-installspareparts-com-installspareparts-module */ "complaints-com-installspareparts-com-installspareparts-module").then(__webpack_require__.bind(null, /*! ../complaints/com-installspareparts/com-installspareparts.module */ "./src/app/technician_app/complaints/com-installspareparts/com-installspareparts.module.ts")).then(function (m) { return m.ComInstallsparepartsPageModule; }); }
            },
            {
                path: 'complaints/details/images/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-images-com-images-module */ "complaints-com-images-com-images-module").then(__webpack_require__.bind(null, /*! ../complaints/com-images/com-images.module */ "./src/app/technician_app/complaints/com-images/com-images.module.ts")).then(function (m) { return m.ComImagesPageModule; }); }
            },
            {
                path: 'commissioning/details/images/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-images-com-images-module */ "complaints-com-images-com-images-module").then(__webpack_require__.bind(null, /*! ../complaints/com-images/com-images.module */ "./src/app/technician_app/complaints/com-images/com-images.module.ts")).then(function (m) { return m.ComImagesPageModule; }); }
            },
            {
                path: 'complaints/details/dailyreport/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-dailyreport-com-dailyreport-module */ "complaints-com-dailyreport-com-dailyreport-module").then(__webpack_require__.bind(null, /*! ../complaints/com-dailyreport/com-dailyreport.module */ "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.module.ts")).then(function (m) { return m.ComDailyreportPageModule; }); }
            },
            {
                path: 'commissioning/details/dailyreport/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-com-dailyreport-com-dailyreport-module */ "complaints-com-dailyreport-com-dailyreport-module").then(__webpack_require__.bind(null, /*! ../complaints/com-dailyreport/com-dailyreport.module */ "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.module.ts")).then(function (m) { return m.ComDailyreportPageModule; }); }
            },
            {
                path: 'complaints/details/image-list/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-image-list-image-list-module */ "complaints-image-list-image-list-module").then(__webpack_require__.bind(null, /*! ../complaints/image-list/image-list.module */ "./src/app/technician_app/complaints/image-list/image-list.module.ts")).then(function (m) { return m.ImageListPageModule; }); }
            },
            {
                path: 'commissioning/details/image-list/:taskId/:taskNo/:taskStatus',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-image-list-image-list-module */ "complaints-image-list-image-list-module").then(__webpack_require__.bind(null, /*! ../complaints/image-list/image-list.module */ "./src/app/technician_app/complaints/image-list/image-list.module.ts")).then(function (m) { return m.ImageListPageModule; }); }
            },
            {
                path: 'image-gallery',
                loadChildren: function () { return __webpack_require__.e(/*! import() | complaints-image-gallery-image-gallery-module */ "complaints-image-gallery-image-gallery-module").then(__webpack_require__.bind(null, /*! ../complaints/image-gallery/image-gallery.module */ "./src/app/technician_app/complaints/image-gallery/image-gallery.module.ts")).then(function (m) { return m.ImageGalleryPageModule; }); }
            },
            // ============= +++++++
            // ============= +++++++
            // ============= +++++++ Complaint Inner Page Routing End.......
            // ============= +++++++
            // ============= +++++++
            // {
            //   path: 'spareparts',
            //   loadChildren: () => import('../spareparts/spareparts.module').then(m => m.SparepartsPageModule)
            // },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/technician_app/tabs/tabs.module.ts":
/*!****************************************************!*\
  !*** ./src/app/technician_app/tabs/tabs.module.ts ***!
  \****************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/technician_app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/technician_app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/technician_app/tabs/tabs.page.scss":
/*!****************************************************!*\
  !*** ./src/app/technician_app/tabs/tabs.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/technician_app/tabs/tabs.page.ts":
/*!**************************************************!*\
  !*** ./src/app/technician_app/tabs/tabs.page.ts ***!
  \**************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabsPage = /** @class */ (function () {
    function TabsPage(route) {
        this.route = route;
    }
    TabsPage.prototype.tabChanged = function (targetType) {
        console.log('helloooo');
        if (targetType == 'complaint') {
            this.route.navigateByUrl('/technicians/complaints');
        }
        else if (targetType == 'commissioning') {
            this.route.navigateByUrl('/technicians/commissioning');
        }
        else if (targetType == 'menu') {
            this.route.navigateByUrl('/technicians/menu');
        }
        else if (targetType == 'home') {
            this.route.navigateByUrl('/technicians/home');
        }
    };
    TabsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/technician_app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/technician_app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=technician_app-tabs-tabs-module-es5.js.map