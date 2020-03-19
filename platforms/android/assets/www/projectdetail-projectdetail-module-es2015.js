(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projectdetail-projectdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/projectdetail.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/projectdetail.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n    <div class=\"cs-main-container\">\n        <div class=\"custome-head\">\n            <div class=\"cs-ion-header\">\n                <div class=\"cs-left\">\n                    <ion-button [routerLink]=\"['/customer/projects']\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n                    <ion-title>{{projectData.project_name}} - Detail</ion-title>\n                </div>\n            </div>\n            <div class=\"cs-ion-hf\"></div>\n        </div>\n        \n        <div *ngIf=\"projectData && projectData.project_name\" class=\"cs-ion-content pt0\" padding>\n            \n            <div class=\"complaints\">\n                <div class=\"figure\">\n                    <div class=\"cnt-info pt0 pl0 pr0\">\n                        <div class=\"cs-left\" >\n                            <div *ngIf=\"projectData && projectData.project_name\" class=\"f-alpha\">{{projectData.project_name[0]}}</div>\n                            <div class=\"names\">\n                                <h1>{{projectData.project_name}}</h1>\n                                <ion-text>{{projectData.street}} {{projectData.state_name}}, {{projectData.district_name}}, {{projectData.city}}, {{projectData.pincode}}</ion-text>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"one-two-one three\">\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Contact Person</ion-text>\n                                <ion-text>{{projectData.contactData ? projectData.contactData.length : 0}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Total Products</ion-text>\n                                <ion-text>{{projectData.productData.length}}</ion-text>\n                            </div>\n                        </div>\n                        <div class=\"cs-box\">\n                            <div>\n                                <ion-text>Service Request</ion-text>\n                                <ion-text>{{projectData.totalServiceRequest}} </ion-text>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"complaints product-list mt20\">\n                <div class=\"cs-tabs\">\n                    <ion-button (click)=\"activeTab=1\" [ngClass]=\"activeTab==1 ? 'active' : ''\">Products</ion-button>\n                    <ion-button (click) = \"activeTab=2\" [ngClass]=\"activeTab==2  || activeTab == 3 ? 'active' : ''\">Contact Persons</ion-button>\n                </div>\n                \n                <div *ngIf=\"activeTab == 1\" class=\"project_FG_data\">\n                    \n                    <div *ngFor=\"let row of projectData.productData\" class=\"figure\">\n                        <div class=\"cnt-info\">\n                            <div class=\"cs-left\">\n                                <div class=\"names\">\n                                    <h1>{{row.fg_no}}  | <span>{{row.warranty_type}}</span></h1>\n                                    <ion-text>{{row.service_center_name}}</ion-text>\n                                </div>\n                            </div>\n                            <div class=\"cs-right\">\n                                <ion-text class=\"font10\"><span class=\"font8\">Warranty (Valid Upto)</span><br>{{row.warranty}} ({{row.warantyValidUpToInFormat}})</ion-text>\n                            </div>\n                        </div>\n\n                        \n                        <div class=\"cnt-info pt0\">\n                            <div class=\"cs-left\">\n                                <div class=\"names\"> \n                                    <h1><ion-text>Next Service :</ion-text> &nbsp; </h1>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        \n                        <div class=\"one-two-one merge\">\n                            <div class=\"cs-box\">\n                                <div>\n                                    <ion-text>Brand / Model / Sub Model</ion-text>\n                                    <ion-text>{{row.brand}} / {{row.model}} / {{row.sub_model}}</ion-text>\n                                </div>\n                            </div>\n                            <div class=\"cs-box\">\n                                <div>\n                                    <ion-text>So / Si No.</ion-text>\n                                    <ion-text>{{row.so_no}} / {{row.si_no}}</ion-text>\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\"one-two-one three mt10\">\n                            <div class=\"cs-box\">\n                                <div>\n                                    <ion-text>Date Of Supply</ion-text>\n                                    <ion-text>{{row.dateSupplyInFormat}}</ion-text>\n                                </div>\n                            </div>\n                            <div class=\"cs-box\">\n                                <div>\n                                    <ion-text>Installation Date</ion-text>\n                                    <ion-text>{{row.dateInstallationInFormat}}</ion-text>\n                                </div>\n                            </div>\n                            <div class=\"cs-box\">\n                                <div>\n                                    <ion-text>Service Request</ion-text>\n                                    <ion-text>{{row.productServiceRquestCount}}</ion-text>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--  -->\n                \n                <div *ngIf=\"activeTab == 2\" class=\"my_contact_persons\">\n                    \n                    <div *ngFor= \"let row of projectData.contactData\" class=\"figure pb0\">\n                        <div class=\"cnt-info\">\n                            <div class=\"cs-left\">\n                                <div class=\"f-alpha bg1\">g</div>\n                                <div class=\"names\">\n                                    <h1>{{row.name}} ({{row.designation}})</h1>\n                                    <a>{{row.email}}</a>\n                                </div>\n                            </div>\n                            <div class=\"cs-right\">\n                                <a href=\"tel: {{row.mobile}}\" class=\"call\"><i class=\"material-icons\">call</i></a>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <!-- <div (click)=\"activeTab = 3\" class=\"cs-btn ion-padding\" text-right>\n                        <ion-button class=\"w45 h45 round font16\" ><ion-icon name=\"add\"></ion-icon></ion-button>\n                    </div> -->\n                    \n                </div>\n                \n                <div *ngIf=\"activeTab == 3\" class=\"add_new_contact_person\">\n                    <div class=\"cnt-person\">\n                        <div class=\"css-heading\"><h1>Add New Contact Person</h1></div>\n                        \n                        <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onSaveContactDetailHandler()\">\n                            \n                            <div class=\"common_form inner_page\">\n                                \n                                <ion-item [ngClass]=\"submitted && f1.contactName.errors && f1.contactName.errors.required ? 'has-error' : (f1.contactName.errors && !f1.contactName.errors.required ? 'has-text' : '')\">\n                                    \n                                    <ion-label position=\"floating\">Contact Person Name</ion-label>\n                                    <ion-input formControlName=\"contactName\" [(ngModel)]=\"data.contactName\"></ion-input>\n                                    \n                                    <ion-text *ngIf=\"submitted && f1.contactName.errors\" class=\"cs-error\">\n                                        \n                                        <span *ngIf=\"f1.contactName.errors.minlength\">Minimum 4 Letter Required</span>\n\n                                        <span *ngIf=\"f1.contactName.errors.maxlength\">Minimum 50 Letter Required</span>\n                                        \n                                    </ion-text>\n                                    \n                                </ion-item>\n                                \n                                <ion-item [ngClass]=\"submitted && f1.contactMobile.errors && f1.contactMobile.errors.required ? 'has-error' : (f1.contactMobile.errors && !f1.contactMobile.errors.required ? 'has-text' : '')\">\n                                    \n                                    <ion-label position=\"floating\">Mobile No.</ion-label>\n                                    <ion-input type=\"tel\" formControlName=\"contactMobile\" [(ngModel)]=\"data.contactMobile\" (keypress) = \"dbService.numberOnly($event)\"></ion-input>\n                                    \n                                    <ion-text *ngIf=\"submitted && f1.contactMobile.errors\" class=\"cs-error\">\n                                        \n                                        <span *ngIf=\"f1.contactMobile.errors.minlength\">Minimum 10 Digit Required</span>\n                                        \n                                        <span *ngIf=\"f1.contactMobile.errors.maxlength\">Maximum 10 Digit Required</span>\n                                        \n                                    </ion-text>\n                                    \n                                </ion-item>\n                                \n                                <ion-item [ngClass]=\"submitted && f1.contactEmail.errors && f1.contactEmail.errors.required ? 'has-error' : (f1.contactEmail.errors && !f1.contactEmail.errors.required ? 'has-text' : '')\">\n                                    \n                                    <ion-label position=\"floating\">Email ID</ion-label>\n                                    <ion-input formControlName=\"contactEmail\" [(ngModel)]=\"data.contactEmail\"></ion-input>\n                                    \n                                    <ion-text *ngIf=\"submitted && f1.contactEmail.errors\" class=\"cs-error\">\n                                        \n                                        <span *ngIf=\"!f1.contactEmail.errors.required\">Email Invalid</span>\n                                        \n                                    </ion-text>\n                                    \n                                </ion-item>\n                                \n                                <ion-item [ngClass]=\"submitted && f1.designation.errors && f1.designation.errors.required ? 'has-error' : (f1.designation.errors && !f1.designation.errors.required ? 'has-text' : '')\">\n\n                                    <ion-label position=\"floating\">Designation</ion-label>\n                                    <ion-input formControlName=\"designation\" [(ngModel)]=\"data.designation\"></ion-input>\n                                    \n                                    <ion-text *ngIf=\"submitted && f1.designation.errors\" class=\"cs-error\">\n                                        \n                                        <span *ngIf=\"f1.designation.errors.minlength\">Minimum 3 Letter Required</span>\n\n                                        <span *ngIf=\"f1.designation.errors.minlength\">Maximum 50 Letter Allowed!</span>\n                                        \n                                    </ion-text>\n                                </ion-item>\n                                \n                            </div>\n                            \n                            <div class=\"cs-btn mt30 pb10 lr\">\n                                \n                                <ion-button (click)=\"activeTab=2\" class=\"dark min w100 clear border\" fill=\"clear\">CANCEL</ion-button>\n                                \n                                <ion-button type=\"submit\" class=\"success min w100\">SAVE</ion-button>\n                                \n                            </div>\n                            \n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/customer_app/projectdetail/projectdetail-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customer_app/projectdetail/projectdetail-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailPageRoutingModule", function() { return ProjectdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectdetail.page */ "./src/app/customer_app/projectdetail/projectdetail.page.ts");




const routes = [
    {
        path: '',
        component: _projectdetail_page__WEBPACK_IMPORTED_MODULE_3__["ProjectdetailPage"]
    }
];
let ProjectdetailPageRoutingModule = class ProjectdetailPageRoutingModule {
};
ProjectdetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProjectdetailPageRoutingModule);



/***/ }),

/***/ "./src/app/customer_app/projectdetail/projectdetail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/customer_app/projectdetail/projectdetail.module.ts ***!
  \********************************************************************/
/*! exports provided: ProjectdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailPageModule", function() { return ProjectdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectdetail-routing.module */ "./src/app/customer_app/projectdetail/projectdetail-routing.module.ts");
/* harmony import */ var _projectdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectdetail.page */ "./src/app/customer_app/projectdetail/projectdetail.page.ts");







let ProjectdetailPageModule = class ProjectdetailPageModule {
};
ProjectdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _projectdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectdetailPageRoutingModule"]
        ],
        declarations: [_projectdetail_page__WEBPACK_IMPORTED_MODULE_6__["ProjectdetailPage"]]
    })
], ProjectdetailPageModule);



/***/ }),

/***/ "./src/app/customer_app/projectdetail/projectdetail.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/customer_app/projectdetail/projectdetail.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyX2FwcC9wcm9qZWN0ZGV0YWlsL3Byb2plY3RkZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customer_app/projectdetail/projectdetail.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/customer_app/projectdetail/projectdetail.page.ts ***!
  \******************************************************************/
/*! exports provided: ProjectdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectdetailPage", function() { return ProjectdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/db-service.service */ "./src/app/db-service.service.ts");







let ProjectdetailPage = class ProjectdetailPage {
    constructor(popoverController, route, routeParams, formBuilder, alertCtrl, dbService) {
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.projectId = '';
        this.projectData = {};
        this.data = {};
        this.submitted = false;
        this.activeTab = 1;
        this.registerForm1 = this.formBuilder.group({
            contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]],
            contactMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]],
            contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50)]]
        });
    }
    ngOnInit() {
        this.routeParams.params.subscribe(params => {
            console.log(params);
            this.projectId = params.projectId;
            console.log(this.projectId);
            this.onGetProjectDetail();
        });
    }
    onGetProjectDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('hello');
            this.dbService.presentLoader();
            const inputData = {
                projectId: this.projectId
            };
            this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe((result) => {
                console.log(result);
                this.dbService.dismissLoader();
                this.projectData = result[`projectData`][0];
                console.log(this.projectData);
            });
        });
    }
    onSaveContactDetailHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.registerForm1.invalid) {
                this.registerForm1.get('contactName').markAsTouched();
                this.registerForm1.get('contactMobile').markAsTouched();
                this.registerForm1.get('contactEmail').markAsTouched();
                this.registerForm1.get('designation').markAsTouched();
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirm',
                    message: 'Are You Sure, You Want To Save Contact ?',
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                console.log('No clicked');
                            }
                        },
                        {
                            text: 'Yes',
                            handler: () => {
                                console.log('Yes clicked');
                                const contactTempData = JSON.parse(JSON.stringify(this.data));
                                const inputData = {};
                                inputData[`projectId`] = this.projectId;
                                inputData[`contactData`] = [];
                                inputData[`contactData`].push(contactTempData);
                                this.dbService.presentLoader();
                                this.dbService.onPostRequestHandler(inputData, 'customer/saveProjectContact').subscribe((result) => {
                                    console.log(result);
                                    this.dbService.dismissLoader();
                                    if (result[`status`] == 'error') {
                                        this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);
                                    }
                                    else {
                                        this.data = {};
                                        this.activeTab = 2;
                                        this.onGetProjectDetail();
                                        this.dbService.presentToast('Contact Saved Successfully!');
                                    }
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    get f1() { return this.registerForm1.controls; }
};
ProjectdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"] }
];
ProjectdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projectdetail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer_app/projectdetail/projectdetail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectdetail.page.scss */ "./src/app/customer_app/projectdetail/projectdetail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_db_service_service__WEBPACK_IMPORTED_MODULE_5__["DbServiceService"]])
], ProjectdetailPage);



/***/ })

}]);
//# sourceMappingURL=projectdetail-projectdetail-module-es2015.js.map