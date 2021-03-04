(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaints-com-dailyreport-com-dailyreport-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTechnician_appComplaintsComDailyreportComDailyreportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content >\r\n    <div class=\"cs-main-container\">\r\n        <div class=\"custome-head\">\r\n            <div class=\"cs-ion-header\">\r\n                <div class=\"cs-left\">\r\n                    <ion-button (click)=\"GoComplaintDetail()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\r\n                    <ion-title class=\"pl0\">#COM-{{taskNo}} - <ion-text>Daily Report</ion-text></ion-title>\r\n                </div>\r\n                <div class=\"cs-right\">\r\n                    <ion-button (click)=\"presentPopover($event)\"><ion-icon name=\"more\"></ion-icon></ion-button>\r\n                </div>\r\n            </div>\r\n            <div class=\"cs-ion-hf\"></div>\r\n        </div>\r\n        \r\n        <div class=\"cs-ion-content pt0\" padding>\r\n            <div class=\"custome-filter dlform\">\r\n                <div class=\"fiter-data\">\r\n                    <div class=\"cs-left\">\r\n\r\n                        <ion-button *ngIf=\"reportType == 'dailyReport'\"  [ngClass]=\"activeStage==1 ? 'active' : ''\" fill=\"clear\" color=\"dark\">\r\n                            <div class=\"figure\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.999\" height=\"20\" viewBox=\"0 0 19.999 20\">\r\n                                    <g id=\"work_info\" transform=\"translate(-0.5 0.001)\">\r\n                                        <path id=\"Path_1015\" data-name=\"Path 1015\" d=\"M337.731,155.148a.391.391,0,1,0,.391.39A.39.39,0,0,0,337.731,155.148Zm0,0\" transform=\"translate(-323.682 -149.088)\" fill=\"#002341\"/>\r\n                                        <path id=\"Path_1016\" data-name=\"Path 1016\" d=\"M156.036,336.84a.391.391,0,1,0,.391.391A.39.39,0,0,0,156.036,336.84Zm0,0\" transform=\"translate(-149.085 -323.683)\" fill=\"#002341\"/>\r\n                                        <path id=\"Path_1017\" data-name=\"Path 1017\" d=\"M20.014,2.4a.39.39,0,0,0-.366.105L18.029,4.14h-.776L16.4,3.254V2.467l1.6-1.62A.391.391,0,0,0,17.841.2a3.909,3.909,0,0,0-5.021,4.715L9.942,7.795,5.148,2.99V2.047a.391.391,0,0,0-.19-.335L2.2.055a.39.39,0,0,0-.477.059l-1.1,1.1A.391.391,0,0,0,.556,1.7L2.213,4.457a.391.391,0,0,0,.335.19H3.49l4.794,4.8L5.418,12.319A3.909,3.909,0,0,0,.7,17.34a.391.391,0,0,0,.647.15L2.97,15.858h.781l.889.889v.781L3.008,19.148a.391.391,0,0,0,.15.647,3.907,3.907,0,0,0,4.418-1.423,3.863,3.863,0,0,0,.6-3.292l2.3-2.3.527.573-.242.242a.391.391,0,0,0,.553.553l.219-.219L16.487,19.3l.011.012A2.344,2.344,0,0,0,19.813,16l-.012-.012-5.383-4.938.217-.217a.391.391,0,1,0-.553-.552l-.24.24-.574-.527,2.313-2.313A3.908,3.908,0,0,0,20.3,2.658a.39.39,0,0,0-.282-.256ZM3.929,3.981a.387.387,0,0,0-.276-.111H2.769L1.383,1.555,2.056.882,4.367,2.268v.883a.391.391,0,0,0,.114.276l4.908,4.92L8.837,8.9Zm9.936,7.62,5.4,4.955a1.563,1.563,0,0,1-2.21,2.21l-4.964-5.392Zm-.576-.529L11.562,12.8l-.527-.573,1.68-1.68Zm3.3-4.042a3.122,3.122,0,0,1-1-.163.391.391,0,0,0-.4.094L7.462,14.693a.391.391,0,0,0-.094.4,3.128,3.128,0,0,1-2.962,4.123,3.2,3.2,0,0,1-.341-.018l1.241-1.231a.391.391,0,0,0,.116-.277V16.586a.391.391,0,0,0-.114-.276L4.189,15.191a.391.391,0,0,0-.276-.114H2.808a.391.391,0,0,0-.277.116L1.3,16.433a3.16,3.16,0,0,1-.018-.341A3.128,3.128,0,0,1,5.4,13.13a.39.39,0,0,0,.4-.094L13.537,5.3a.391.391,0,0,0,.094-.4A3.128,3.128,0,0,1,16.593.78,3.192,3.192,0,0,1,16.944.8L15.729,2.033a.39.39,0,0,0-.112.274V3.412a.39.39,0,0,0,.11.271L16.805,4.8a.39.39,0,0,0,.281.119h1.105a.39.39,0,0,0,.277-.116L19.7,3.565a3.16,3.16,0,0,1,.018.341A3.128,3.128,0,0,1,16.593,7.03Zm0,0\" transform=\"translate(0 0)\" fill=\"#002341\"/>\r\n                                        <path id=\"Path_1018\" data-name=\"Path 1018\" d=\"M188.927,183.54l-4.888,4.888a.391.391,0,0,0,.553.552l4.888-4.888a.391.391,0,0,0-.553-.552Zm0,0\" transform=\"translate(-176.259 -176.261)\" fill=\"#002341\"/>\r\n                                        <path id=\"Path_1019\" data-name=\"Path 1019\" d=\"M348.915,349.249a.391.391,0,1,0,.552-.553l-3.521-3.51a.391.391,0,0,0-.552.553Zm0,0\" transform=\"translate(-331.311 -331.593)\" fill=\"#002341\"/>\r\n                                    </g>\r\n                                </svg>                                  \r\n                                <ion-text>Work Info</ion-text>\r\n                            </div>\r\n                        </ion-button>                     \r\n                        \r\n                        \r\n                        <ion-button  *ngIf=\"reportType == 'dailyReport'\"  [ngClass]=\"activeStage==2 ? 'active' : ''\" fill=\"clear\" color=\"dark\">\r\n                            <div class=\"figure\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\">\r\n                                    <g id=\"user_icon\" transform=\"translate(0)\">\r\n                                        <g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(0)\">\r\n                                            <path id=\"Path_1\" data-name=\"Path 1\" d=\"M17.071,12.929a9.962,9.962,0,0,0-3.8-2.384,5.781,5.781,0,1,0-6.542,0A10.016,10.016,0,0,0,0,20H1.562a8.437,8.437,0,1,1,16.875,0H20A9.935,9.935,0,0,0,17.071,12.929ZM10,10a4.219,4.219,0,1,1,4.219-4.219A4.224,4.224,0,0,1,10,10Z\" transform=\"translate(0)\" fill=\"rgba(0,0,0,0.3)\"/>\r\n                                        </g>\r\n                                    </g>\r\n                                </svg>                                  \r\n                                <ion-text>Auth Sign Info</ion-text>\r\n                            </div>\r\n                        </ion-button>\r\n                        \r\n                        <ion-button  *ngIf=\"reportType == 'dailyReport'\"  [ngClass]=\"activeStage==3 ? 'active' : ''\" fill=\"clear\" color=\"dark\">\r\n                            <div class=\"figure\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20.927\" height=\"20\" viewBox=\"0 0 20.927 20\">\r\n                                    <g id=\"customer_sign\" transform=\"translate(0 -0.567)\">\r\n                                        <path id=\"Path_1073\" data-name=\"Path 1073\" d=\"M15.314,8.2l3.153,1.158L15.845,16.5c-.245.671-1.576,2.773-2.5,3.2l-.225.613a.386.386,0,0,1-.361.253.4.4,0,0,1-.132-.024.385.385,0,0,1-.228-.494l.213-.58c-.47-.914-.119-3.567.087-4.128ZM19.877.649A1.833,1.833,0,0,0,17.7,1.78l-1.9,5.174L18.957,8.11l1.9-5.173A2.011,2.011,0,0,0,19.877.649Zm-5.7,7.286a.768.768,0,0,0,.989-.454l2-5.4a.769.769,0,0,0-1.443-.534l-2,5.4A.768.768,0,0,0,14.172,7.935ZM10.946,18.069a2.99,2.99,0,0,0-.882-.625,2.3,2.3,0,0,0-.923-.166l-.084,0a1.2,1.2,0,0,0-.928-.785,1.878,1.878,0,0,0-1.448.384c.03-.172.08-.376.117-.523a3.373,3.373,0,0,0,.149-1.425.82.82,0,0,0-.748-.659,3.97,3.97,0,0,0-2.418.923c-.721.487-1.183.777-1.642.613-.561-.2-.617-1.718-.348-3.071.241-1.219.69-3.487,1.841-4.518.388-.347.949-.722,1.41-.54a2.606,2.606,0,0,1,1.09,2.17.818.818,0,1,0,1.628-.153A4.02,4.02,0,0,0,5.641,6.152,2.9,2.9,0,0,0,2.541,7C1.1,8.285.571,10.47.186,12.415c-.193.972-.663,4.2,1.4,4.931a3.367,3.367,0,0,0,3.1-.8c.15-.1.3-.2.442-.29a2.186,2.186,0,0,0,.137,1.763c.534.8,1.289.891,2.243.263.037-.024.079-.052.119-.079a1.11,1.11,0,0,0,.528.528,2.162,2.162,0,0,0,.937.183,1.3,1.3,0,0,1,.3.025,1.42,1.42,0,0,1,.421.318,5.2,5.2,0,0,0,.45.389.818.818,0,0,0,.98-1.309A3.864,3.864,0,0,1,10.946,18.069Z\" fill=\"#030104\"/>\r\n                                    </g>\r\n                                </svg>                                                                                                \r\n                                <ion-text>Customer Sign</ion-text>\r\n                            </div>\r\n                        </ion-button>\r\n                        \r\n                        <ion-button  *ngIf=\"reportType == 'dailyReport'\"  [ngClass]=\"activeStage==4 ? 'active' : ''\" fill=\"clear\" color=\"dark\">\r\n                            <div class=\"figure\">\r\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19.998\" height=\"20\" viewBox=\"0 0 19.998 20\">\r\n                                    <g id=\"expenses\" transform=\"translate(-0.019 0)\">\r\n                                        <g id=\"Group_3549\" data-name=\"Group 3549\" transform=\"translate(0.019 0)\">\r\n                                            <g id=\"Group_3548\" data-name=\"Group 3548\" transform=\"translate(0 0)\">\r\n                                                <path id=\"Path_1020\" data-name=\"Path 1020\" d=\"M63.006,313.186a5.835,5.835,0,0,1-1.534-1.106,5.723,5.723,0,0,1-.864-1.1.37.37,0,1,0-.642.37l.007.011a6.465,6.465,0,0,0,.975,1.242,6.568,6.568,0,0,0,1.729,1.246.37.37,0,0,0,.329-.664Z\" transform=\"translate(-57.144 -296.408)\" fill=\"#002341\"/>\r\n                                                <path id=\"Path_1021\" data-name=\"Path 1021\" d=\"M138.239,152.187a1.481,1.481,0,0,1-1.481-1.481h-.741a2.224,2.224,0,0,0,1.852,2.189v.774h.741v-.774a2.222,2.222,0,0,0-.37-4.411A1.481,1.481,0,1,1,139.72,147h.741a2.224,2.224,0,0,0-1.852-2.189v-.774h-.741v.774a2.222,2.222,0,0,0,.37,4.411,1.481,1.481,0,1,1,0,2.963Z\" transform=\"translate(-129.721 -137.372)\" fill=\"#002341\"/>\r\n                                                <path id=\"Path_1022\" data-name=\"Path 1022\" d=\"M320.557,72.313a.371.371,0,1,0-.472.573,7.865,7.865,0,0,1,1.07,1.071.37.37,0,1,0,.573-.47A8.618,8.618,0,0,0,320.557,72.313Z\" transform=\"translate(-305.139 -68.885)\" fill=\"#002341\"/>\r\n                                                <path id=\"Path_1023\" data-name=\"Path 1023\" d=\"M41.995,105.951a6.666,6.666,0,0,0-1.7,6.555.37.37,0,0,0,.713-.2,5.923,5.923,0,0,1,9.881-5.821q.211.211.4.436a5.9,5.9,0,0,1-.2,7.735l-.017.017-.007.007-.013.013c-.05.057-.1.114-.162.172a5.925,5.925,0,0,1-5.337,1.621.37.37,0,1,0-.144.727,6.666,6.666,0,0,0,6.007-1.823c.058-.058.111-.116.165-.174l.027-.027a6.666,6.666,0,0,0-9.613-9.234Z\" transform=\"translate(-38.184 -99.189)\" fill=\"#002341\"/>\r\n                                                <path id=\"Path_1024\" data-name=\"Path 1024\" d=\"M285.841,146.224Z\" transform=\"translate(-272.61 -139.455)\" fill=\"#002341\"/>\r\n                                                <path id=\"Path_1025\" data-name=\"Path 1025\" d=\"M11.5,0A8.518,8.518,0,0,0,4.777,3.288,8.321,8.321,0,0,0,3.3,4.764,8.518,8.518,0,1,0,15.256,16.718a8.494,8.494,0,0,0,1.481-1.485A8.516,8.516,0,0,0,11.5,0Zm3.767,15.384A7.78,7.78,0,1,1,3.791,5.32a7.934,7.934,0,0,1,.844-.568A7.783,7.783,0,0,1,15.269,15.384Zm2.125-9.647a.37.37,0,0,0-.656.343l.016.027a7.769,7.769,0,0,1-.095,7.934A8.51,8.51,0,0,0,5.974,3.362a7.688,7.688,0,0,1,4.044-1.138,7.766,7.766,0,0,1,3.923,1.06.37.37,0,0,0,.373-.639A8.522,8.522,0,0,0,7.44,1.883a7.777,7.777,0,0,1,10.7,10.682A8.516,8.516,0,0,0,17.394,5.738Z\" transform=\"translate(-0.019 0)\" fill=\"#002341\"/>\r\n                                            </g>\r\n                                        </g>\r\n                                    </g>\r\n                                </svg>                                \r\n                                <ion-text>Expenses</ion-text>\r\n                            </div>\r\n                        </ion-button>\r\n                        \r\n                        <ion-button (click)=\"onClickOnFgWiseCategoryHandler(index)\" *ngFor = \"let row of fgWisecheckList; let index = index\" [hidden]=\"reportType != 'checkListReport'\"  [ngClass]=\"activeStage==5 && currentActiveCheckTab==index ? 'active' : ''\" fill=\"clear\" color=\"dark\">\r\n                            <div class=\"figure\">\r\n                                <img src=\"assets/img/check-list.svg\" alt=\"\">\r\n                                <ion-text>Check List - {{row.fg_no}}</ion-text>\r\n                            </div>\r\n                        </ion-button> \r\n                    </div>\r\n\r\n\r\n                    <div class=\"cs-right\">\r\n\r\n                        <div class=\"work-info\" [hidden]=\"activeStage != 1 \">\r\n                            <form [formGroup]=\"registerForm1\" (ngSubmit)=\"onNextStageHandler(1)\">\r\n                                <div class=\"common_form inner_page\">\r\n                                    <ion-item [ngClass]=\"submitted && f1.workDetail.errors && f1.workDetail.errors.required ? 'has-error' : (f1.workDetail.errors && !f1.workDetail.errors.required ? 'has-text' : '')\" style=\"min-height: 110px;\">\r\n                                        <ion-label position=\"floating\">Work Detail</ion-label>\r\n                                        <ion-textarea formControlName=\"workDetail\" [(ngModel)]=\"data.workDetail\" class=\"textarea-height\"></ion-textarea>\r\n                                        <ion-text *ngIf=\"submitted && f1.workDetail.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f1.workDetail.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    <ion-item [ngClass]=\"submitted && f1.causeFailure.errors && f1.causeFailure.errors.required ? 'has-error' : (f1.causeFailure.errors && !f1.causeFailure.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        <ion-label position=\"floating\">Cause Of Failure</ion-label>\r\n                                        <ion-textarea formControlName=\"causeFailure\" [(ngModel)]=\"data.causeFailure\">\r\n                                            <ion-text *ngIf=\"submitted && f1.causeFailure.errors\" class=\"cs-error\">\r\n                                                <span *ngIf=\"f1.causeFailure.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                            </ion-text>\r\n                                        </ion-textarea>\r\n                                    </ion-item>\r\n                                    <ion-item [ngClass]=\"submitted && f1.suggestion.errors && f1.suggestion.errors.required ? 'has-error' : (f1.suggestion.errors && !f1.suggestion.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        <ion-label position=\"floating\">Suggestion</ion-label>\r\n                                        <ion-textarea formControlName=\"suggestion\" [(ngModel)]=\"data.suggestion\"></ion-textarea>\r\n                                        <ion-text *ngIf=\"submitted && f1.suggestion.errors\" class=\"cs-error\">time\r\n                                            <span *ngIf=\"f1.suggestion.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                </div>\r\n                                \r\n                                <div class=\"common_form inner_page mt20\">\r\n\r\n                                    <div class=\"heading\"><h1>Work Status</h1></div>\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f1.workStatus.errors && f1.workStatus.errors.required ? 'has-error' : (f1.workStatus.errors && !f1.workStatus.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                        <ion-label>Select Status</ion-label>\r\n                                        <ion-select formControlName=\"workStatus\" [(ngModel)]=\"data.workStatus\" (ngModelChange)=\"onChangeWorkStatusHandler()\" placeholder=\"Select One\">\r\n                                            <ion-select-option value=\"Running\">Work in-Process</ion-select-option>\r\n                                            <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n                                            <ion-select-option value=\"Close\">Close</ion-select-option>\r\n                                        </ion-select>\r\n                                    </ion-item>\r\n\r\n                                    <ion-item [ngClass]=\"submitted && f1.nextFollowUpDate.errors && f1.nextFollowUpDate.errors.required ? 'has-error' : (f1.nextFollowUpDate.errors && !f1.nextFollowUpDate.errors.required ? 'has-text' : '')\" class=\"date-time\"  *ngIf = \"registerForm1.value['workStatus']  != 'Close'\">\r\n                                        <ion-label>Next Follow up Date</ion-label>\r\n                                        <ion-datetime formControlName=\"nextFollowUpDate\" [(ngModel)]=\"data.nextFollowUpDate\" displayFormat=\"DD-MMM-YYYY\" min=\"{{minDate}}\"></ion-datetime>\r\n                                        <ion-text *ngIf=\"submitted && f1.nextFollowUpDate.errors\" class=\"cs-error\">\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    <ion-item [ngClass]=\"submitted && f1.nextFollowUpTime.errors && f1.nextFollowUpTime.errors.required ? 'has-error' : (f1.nextFollowUpTime.errors && !f1.nextFollowUpTime.errors.required ? 'has-text' : '')\" class=\"date-time\"  *ngIf = \"registerForm1.value['workStatus']  != 'Close'\">\r\n                                        <ion-label>Next Follow up Time</ion-label>\r\n                                        <ion-datetime formControlName=\"nextFollowUpTime\" [(ngModel)]=\"data.nextFollowUpTime\" displayFormat=\"h:mm A\"></ion-datetime>\r\n                                        <ion-text *ngIf=\"submitted && f1.nextFollowUpTime.errors\" class=\"cs-error\">\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f1.reasonNotCloser.errors && f1.reasonNotCloser.errors.required ? 'has-error' : (f1.reasonNotCloser.errors && !f1.reasonNotCloser.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        <ion-textarea formControlName=\"reasonNotCloser\" [(ngModel)]=\"data.reasonNotCloser\" placeholder=\"Reason For Not Closer\" *ngIf = \"registerForm1.value['workStatus']  != 'Close'\"></ion-textarea>\r\n                                        <ion-textarea formControlName=\"reasonNotCloser\" [(ngModel)]=\"data.reasonNotCloser\" placeholder=\"Remark\" *ngIf = \"registerForm1.value['workStatus']  == 'Close'\"></ion-textarea>\r\n                                        <ion-text *ngIf=\"submitted && f1.reasonNotCloser.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f1.reasonNotCloser.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                </div>\r\n                                \r\n                                <div class=\"cs-btn mt16\" text-right *ngIf = \"taskStatus != 'Close'\">\r\n                                    <ion-button type=\"submit\" class=\"success min w100\">NEXT</ion-button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        \r\n                        <div class=\"auth_sign_info\" *ngIf=\"activeStage == 2\" >\r\n                            \r\n                            <form [formGroup]=\"registerForm3\"  (ngSubmit)=\"onNextStageHandler(3)\">\r\n                                \r\n                                <div class=\"common_form inner_page\">\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f3.actionPlanned.errors && f3.actionPlanned.errors.required ? 'has-error' : (f3.actionPlanned.errors && !f3.actionPlanned.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        \r\n                                        <ion-textarea formControlName=\"actionPlanned\" [(ngModel)]=\"data.actionPlanned\" placeholder=\"Action Planned\"></ion-textarea>\r\n                                        \r\n                                        <ion-text *ngIf=\"submitted && f3.actionPlanned.errors\" class=\"cs-error\">\r\n                                            \r\n                                            <span *ngIf=\"f3.actionPlanned.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                            \r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f3.contactName.errors && f3.contactName.errors.required ? 'has-error' : (f3.contactName.errors && !f3.contactName.errors.required ? 'has-text' : '')\" class=\"cs-select\">\r\n                                        \r\n                                        <ion-label>Contact Person Name</ion-label>\r\n                                        \r\n                                        <ion-select formControlName=\"contactName\"  [(ngModel)]=\"data.contactName\" (ngModelChange) = \"onContactChangeHandler('dailyReport')\"  placeholder=\"Select\">\r\n                                            <ion-select-option *ngFor=\"let row of contactList\" [value]=\"row.name\">{{row.name}}</ion-select-option>\r\n                                        </ion-select>\r\n\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item *ngIf=\"data.contactName=='Other'\" [ngClass]=\"submitted && f3.otherContactName.errors && f3.otherContactName.errors.required ? 'has-error' : (f3.otherContactName.errors && !f3.otherContactName.errors.required ? 'has-text' : '')\">\r\n\r\n                                        <ion-label position=\"floating\">Name</ion-label>\r\n                                        <ion-input formControlName=\"otherContactName\" [(ngModel)]=\"data.otherContactName\"></ion-input>\r\n\r\n                                        <ion-text *ngIf=\"submitted && f3.otherContactName.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f3.otherContactName.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                        </ion-text>\r\n\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item *ngIf=\"data.contactName\" [ngClass]=\"submitted && f3.mobile.errors && f3.mobile.errors.required ? 'has-error' : (f3.mobile.errors && !f3.mobile.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"mobile\" [(ngModel)]=\"data.mobile\" (keypress) = \"dbService.numberOnly($event)\" [readonly]=\"data.contactName != 'Other'\"></ion-input>\r\n                                        <ion-text *ngIf=\"submitted && f3.mobile.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f3.mobile.errors.minlength\">Minimum 10 Digit Required</span>\r\n                                            <span *ngIf=\"f3.mobile.errors.maxlength\">Maximum 10 Digit Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n\r\n                                    \r\n                                    <ion-item *ngIf=\"data.contactName\" [ngClass]=\"submitted && f3.email.errors && f3.email.errors.required ? 'has-error' : (f3.email.errors && !f3.email.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Email ID</ion-label>\r\n                                        <ion-input formControlName=\"email\" [(ngModel)]=\"data.email\" [readonly]=\"data.contactName != 'Other'\"></ion-input>\r\n                                        <ion-text *ngIf=\"submitted && f3.email.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"!f3.email.errors.required\">Email Invalid</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                </div>\r\n                                \r\n                                <div class=\"cs-btn mt16 lr\">\r\n                                    <ion-button (click)=\"onBackClickHandler(2)\" class=\"dark min w100 clear border\" fill=\"clear\">BACK</ion-button>\r\n                                    <ion-button type=\"submit\" class=\"success min w100\">NEXT</ion-button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        \r\n                        <div class=\"auth_sign_info\"  *ngIf=\"activeStage == 3\" >\r\n                            \r\n                            <form [formGroup]=\"registerForm4\"  (ngSubmit)=\"onNextStageHandler(4)\">\r\n                                <div class=\"common_form inner_page \">\r\n                                    <ion-item [ngClass]=\"submitted && f4.remark.errors && f4.remark.errors.required ? 'has-error' : (f4.remark.errors && !f4.remark.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        <ion-textarea formControlName=\"remark\" [(ngModel)]=\"data.remark\" placeholder=\"Customer Remark\"></ion-textarea>\r\n                                        <ion-text *ngIf=\"submitted && f4.remark.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f4.remark.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    \r\n                                    <div class=\"common_form inner_page dflex mt20 mb20\">\r\n                                        <label class=\"font12 mr32 mt5\">Rating</label>\r\n                                        <div class=\"stars\">\r\n                                            <ion-button class=\"font16px mr7\" [ngClass]=\"selectedRating >= 1 ? 'active' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(1)\" color=\"dark\"><ion-icon name=\"{{selectedRating ? 'star' : 'star-outline'}}\"></ion-icon></ion-button>\r\n                                            \r\n                                            <ion-button class=\"font16px mr7\" [ngClass]=\"selectedRating >= 2 ? 'active' : ''\" fill=\"clear\" (click)=\"onStarClickHandler(2)\" color=\"dark\"><ion-icon name=\"{{selectedRating ? 'star' : 'star-outline'}}\"></ion-icon></ion-button>\r\n                                            \r\n                                            <ion-button class=\"font16px mr7\" fill=\"clear\" [ngClass]=\"selectedRating >= 3 ? 'active' : ''\" (click)=\"onStarClickHandler(3)\" color=\"dark\"><ion-icon name=\"{{selectedRating ? 'star' : 'star-outline'}}\"></ion-icon></ion-button>\r\n                                            \r\n                                            <ion-button class=\"font16px mr7\" fill=\"clear\" [ngClass]=\"selectedRating >= 4 ? 'active' : ''\" (click)=\"onStarClickHandler(4)\" color=\"dark\"><ion-icon name=\"{{selectedRating ? 'star' : 'star-outline'}}\"></ion-icon></ion-button>\r\n                                            \r\n                                            <ion-button class=\"font16px mr7\" fill=\"clear\" [ngClass]=\"selectedRating == 5 ? 'active' : ''\" (click)=\"onStarClickHandler(5)\" color=\"dark\"><ion-icon name=\"{{selectedRating ? 'star' : 'star-outline'}}\"></ion-icon></ion-button>\r\n                                        </div>\r\n                                    </div>\r\n                                    \r\n                                    <ion-item>\r\n                                        <ion-label position=\"floating\">Add Signature</ion-label>\r\n                                        <ion-input (click)=\"presentModal()\"></ion-input>\r\n                                        <div (click)=\"presentModal()\"><img [src]=\"signatureImage\" *ngIf=\"signatureImage\" /></div>\r\n                                    </ion-item> \r\n                                </div>\r\n                                \r\n                                <div class=\"cs-btn mt16 lr\">\r\n                                    <ion-button (click)=\"onBackClickHandler(3)\" class=\"dark min w100 clear border\" fill=\"clear\">BACK</ion-button>\r\n                                    <ion-button type=\"submit\" class=\"success min w100\">NEXT</ion-button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        \r\n                        <div class=\"expenses\" *ngIf=\"activeStage == 4\" >\r\n                            \r\n                            <form [formGroup]=\"registerForm2\" (ngSubmit)=\"onSaveDailyReportHandler()\">\r\n                                <div class=\"common_form inner_page\">\r\n                                    <ion-item [ngClass]=\"submitted && f2.travelExpense.errors && f2.travelExpense.errors.required ? 'has-error' : (f2.travelExpense.errors && !f2.travelExpense.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Engineer Travel Expense</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"travelExpense\" [(ngModel)]=\"data.travelExpense\" (keypress)=\"dbService.numberOnly($event)\" ></ion-input>\r\n                                        <ion-text *ngIf=\"submitted && f2.travelExpense.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f2.travelExpense.errors.minlength\">Minimum 2 Digit Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.otherExpense.errors && f2.otherExpense.errors.required ? 'has-error' : (f2.otherExpense.errors && !f2.otherExpense.errors.required ? 'has-text' : '')\">\r\n                                        <ion-label position=\"floating\">Engineer Other Expense</ion-label>\r\n                                        <ion-input type=\"tel\" formControlName=\"otherExpense\" [(ngModel)]=\"data.otherExpense\" (keypress)=\"dbService.numberOnly($event)\"></ion-input>\r\n                                        <ion-text *ngIf=\"submitted && f2.otherExpense.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f2.otherExpense.errors.minlength\">Minimum 2 Digit Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    \r\n                                    <ion-item [ngClass]=\"submitted && f2.expenseDetail.errors && f2.expenseDetail.errors.required ? 'has-error' : (f2.expenseDetail.errors && !f2.expenseDetail.errors.required ? 'has-text' : '')\" class=\"h70\">\r\n                                        \r\n                                        <ion-textarea formControlName=\"expenseDetail\" [(ngModel)]=\"data.expenseDetail\" placeholder=\"Engineer Expense Detail\"></ion-textarea>\r\n                                        <ion-text *ngIf=\"submitted && f2.expenseDetail.errors\" class=\"cs-error\">\r\n                                            <span *ngIf=\"f2.expenseDetail.errors.minlength\">Minimum 3 Letter Required</span>\r\n                                        </ion-text>\r\n                                    </ion-item>\r\n                                    \r\n                                </div>\r\n                                <div class=\"cs-btn mt16 lr\">\r\n                                    \r\n                                    <ion-button (click)=\"onBackClickHandler(4)\" class=\"dark min w100 clear border\" fill=\"clear\">BACK</ion-button>\r\n                                    <ion-button type=\"submit\" class=\"success min w100\">SAVE</ion-button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        \r\n\r\n\r\n                        <div class=\"custome-filter dlform mt15\" *ngIf=\"activeStage == 5\">\r\n                            <div class=\"fiter-data\">\r\n                                <div class=\"cs-right\">\r\n                                    <div [hidden]=\"!(activeStage==5 && currentActiveCheckTab == index)\" *ngFor = \"let row of fgWisecheckList; let index = index\" class=\"check_list\">\r\n                                        <div class=\"cs-checkbox\">\r\n                                            <ion-list>\r\n                                                <div class=\"checklist ion-label-normal\" *ngFor = \"let categoryList of fgWisecheckListCategory;let index = index\">\r\n                                                    <p>{{categoryList.category}}</p>\r\n                                                    <div *ngFor = \"let categoryListPoint of categoryList.checkListData;\">\r\n                                                        <ion-item>\r\n                                                            <ion-label>{{categoryListPoint.check_list_point}}</ion-label>\r\n                                                            <ion-checkbox *ngIf=\"categoryList.category != 'Observations If Any'\" [(ngModel)]=\"categoryListPoint.checked\" slot=\"start\" color=\"success\" (click)=\"select_checklist(categoryListPoint)\"></ion-checkbox>\r\n                                                        </ion-item>\r\n                                                        <div class=\"common_form\" *ngIf=\"categoryListPoint.checked\">\r\n                                                            <ion-item>\r\n                                                                <ion-textarea  [(ngModel)]=\"categoryListPoint.remark\" placeholder=\"Remark\"></ion-textarea>\r\n                                                            </ion-item>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-list>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"custome-filter dlform mt15\" *ngIf=\"activeStage == 5\">\r\n                            <div class=\"fiter-data\">\r\n                                <div class=\"cs-right\">\r\n\r\n                                    <div [hidden]=\"!(activeStage==5 && currentActiveCheckTab == index)\" *ngFor = \"let row of fgWisecheckList; let index = index\" class=\"check_list\">\r\n\r\n                                        <div class=\"common_form inner_page\">\r\n                                            <ion-item class=\"cs-select\">\r\n                                                <ion-label>Contact Person Name</ion-label>\r\n\r\n                                           \r\n                                                <ion-select id=\"checkContactName\" name=\"checkContactName\" disabled=\"{{row.check_list_created}}\" [(ngModel)]=\"row.checkContactName\" (ngModelChange) = \"onContactChangeHandler('checkReport')\"  placeholder=\"Select\" required>\r\n                                                    <ion-select-option *ngFor=\"let row of contactList\" [value]=\"row.name\" id=\"checkContactName\" name=\"checkContactName\" required>{{row.name}}</ion-select-option>\r\n                                                </ion-select>\r\n                                            </ion-item>\r\n                                            <ion-item *ngIf=\"row.checkContactName=='Other'\">\r\n                                                <ion-label position=\"floating\">Name</ion-label>\r\n                                                <ion-input [(ngModel)]=\"row.checkOtherContactName\"></ion-input>\r\n                                            </ion-item>\r\n                                            <ion-item *ngIf=\"row.checkContactName\">\r\n                                                <ion-label position=\"floating\">Mobile No.</ion-label>\r\n                                                <ion-input type=\"tel\" readonly=\"{{row.check_list_created}}\" [(ngModel)]=\"row.checkMobile\" (keypress) = \"dbService.numberOnly($event)\"></ion-input>\r\n                                                <ion-text class=\"cs-error\">\r\n                                                    <span *ngIf=\"!row.checkMobile  || (row.checkMobile.length < 10) || row.checkMobile.length > 10\">Mobile Must be 10 Digit!</span>\r\n                                                </ion-text>\r\n                                            </ion-item>\r\n                                            \r\n                                            <ion-item (click)=\"!row.check_list_created ? presentModal() : ''\">\r\n\r\n                                                <div><img [src]=\"row.signatureImage\" *ngIf=\"row.signatureImage!=''\" /></div>\r\n\r\n                                                <ion-label position=\"floating\">Add Signature</ion-label>\r\n                                                \r\n                                                <ion-input ></ion-input>\r\n                                            </ion-item> \r\n                                        </div>\r\n                                        <div class=\"cs-btn mt16 lr\" *ngIf=\"!row.check_list_created\">\r\n                                            <ion-button (click)=\"onSaveCheckListHandler()\" class=\"success min w100\">SAVE</ion-button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-dailyreport/com-dailyreport-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ComDailyreportPageRoutingModule */

  /***/
  function srcAppTechnician_appComplaintsComDailyreportComDailyreportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComDailyreportPageRoutingModule", function () {
      return ComDailyreportPageRoutingModule;
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


    var _com_dailyreport_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./com-dailyreport.page */
    "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.ts");

    const routes = [{
      path: '',
      component: _com_dailyreport_page__WEBPACK_IMPORTED_MODULE_3__["ComDailyreportPage"]
    }];
    let ComDailyreportPageRoutingModule = class ComDailyreportPageRoutingModule {};
    ComDailyreportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ComDailyreportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ComDailyreportPageModule */

  /***/
  function srcAppTechnician_appComplaintsComDailyreportComDailyreportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComDailyreportPageModule", function () {
      return ComDailyreportPageModule;
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


    var _com_dailyreport_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./com-dailyreport-routing.module */
    "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport-routing.module.ts");
    /* harmony import */


    var _com_dailyreport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./com-dailyreport.page */
    "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.ts");

    let ComDailyreportPageModule = class ComDailyreportPageModule {};
    ComDailyreportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _com_dailyreport_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComDailyreportPageRoutingModule"]],
      declarations: [_com_dailyreport_page__WEBPACK_IMPORTED_MODULE_6__["ComDailyreportPage"]]
    })], ComDailyreportPageModule);
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTechnician_appComplaintsComDailyreportComDailyreportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2huaWNpYW5fYXBwL2NvbXBsYWludHMvY29tLWRhaWx5cmVwb3J0L2NvbS1kYWlseXJlcG9ydC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: ComDailyreportPage */

  /***/
  function srcAppTechnician_appComplaintsComDailyreportComDailyreportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComDailyreportPage", function () {
      return ComDailyreportPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_db_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/db-service.service */
    "./src/app/db-service.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _signaturemodal_signaturemodal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../signaturemodal/signaturemodal.page */
    "./src/app/technician_app/complaints/signaturemodal/signaturemodal.page.ts"); // import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


    let ComDailyreportPage = class ComDailyreportPage {
      constructor(popoverController, route, routeParams, formBuilder, alertCtrl, location, modalController, dbService) {
        this.popoverController = popoverController;
        this.route = route;
        this.routeParams = routeParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.modalController = modalController;
        this.dbService = dbService;
        this.taskId = '';
        this.taskNo = '';
        this.taskStatus = '';
        this.taskType = '';
        this.activeStage = '';
        this.contactList = [];
        this.data = {};
        this.signatureData = [];
        this.fgWisecheckList = [];
        this.fgWisecheckListCategory = [];
        this.submitted = false;
        this.customDatePickerOption = {};
        this.customTimePickerOption = {};
        this.minDate = '';
        this.signatureImage = '';
        this.reportType = '';
        this.routeTitleForView = '';
        this.currentActiveCheckTab = 0;
        this.selectedRating = '';
        this.isAllCheckListSubmitted = false;
        this.reportType = localStorage.getItem('reportType');
        this.routeTitleForView = localStorage.getItem('routeTitleForView');
        this.taskType = localStorage.getItem('taskType');
        console.log(this.taskType);

        if (this.reportType == 'dailyReport') {
          this.activeStage = 1;
        }

        console.log(this.reportType);

        if (this.reportType == 'checkListReport') {
          this.activeStage = 5;
          console.log(this.reportType);
        }

        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          this.taskNo = params.taskNo;
          this.taskStatus = params.taskStatus;
          this.onGetCheckListHandler();
          console.log(this.taskId);
          console.log(this.taskNo);
          console.log(this.taskStatus);
        });
        this.registerForm1 = this.formBuilder.group({
          workDetail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
          suggestion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
          causeFailure: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
          workStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          nextFollowUpDate: [''],
          nextFollowUpTime: [''],
          reasonNotCloser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]]
        });
        this.registerForm2 = this.formBuilder.group({
          travelExpense: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
          otherExpense: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
          expenseDetail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]]
        });
        this.registerForm3 = this.formBuilder.group({
          actionPlanned: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
          contactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
          otherContactName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
          mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]]
        });
        this.registerForm4 = this.formBuilder.group({
          remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]]
        });
        this.data = {
          workDetail: '',
          suggestion: '',
          causeFailure: '',
          workStatus: '',
          reasonNotCloser: '',
          travelExpense: '',
          otherExpense: '',
          expenseDetail: '',
          actionPlanned: '',
          contactName: '',
          otherContactName: '',
          mobile: '',
          email: '',
          remark: ''
        };
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
      }

      ngOnInit() {
        this.onGetProjectContactHandler();
        this.onSetDateTimeOptionHandler(); // alert(this.reportType);
      }

      onStarClickHandler(rating) {
        this.selectedRating = rating;
      }

      onClickOnFgWiseCategoryHandler(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log(this.data);
          this.currentActiveCheckTab = index;
          console.log(this.fgWisecheckList);
          this.fgWisecheckListCategory = this.fgWisecheckList[index].newCheckListCategory;
          console.log(this.data);
        });
      }

      select_checklist(row) {
        console.log(row.checked);
      }

      onSaveCheckListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.submitted = true;
          console.log(this.fgWisecheckListCategory[0].checkListData);
          let count = 0;

          for (let i = 0; i < this.fgWisecheckList.length; i++) {
            let isFgAnyCategoryChecked = false;

            for (let j = 0; j < this.fgWisecheckList[i].newCheckListCategory.length; j++) {
              for (let k = 0; k < this.fgWisecheckList[i]["newCheckListCategory"][j]["checkListData"].length; k++) {
                if (this.fgWisecheckList[i]["newCheckListCategory"][j]["checkListData"][k].checked) {
                  console.log(this.fgWisecheckList[i]['newCheckListCategory'][j]['checkListData'].length);
                  isFgAnyCategoryChecked = true;
                }
              }
            }

            if (isFgAnyCategoryChecked === true) {
              count++;
            }
          }

          console.log(count);
          console.log(this.fgWisecheckList);

          if (count == 0) {
            this.dbService.onShowAlertMessage('Error', 'No Check List Selected!');
            return false;
          }

          let isContactError = false;
          let errorMsg = '';

          if (!this.fgWisecheckList[this.currentActiveCheckTab].checkContactName) {
            isContactError = true;
            errorMsg = 'Contact Name Required!';
          } else if (this.fgWisecheckList[this.currentActiveCheckTab].checkContactName == 'Other' && (!this.fgWisecheckList[this.currentActiveCheckTab].checkOtherContactName || !this.fgWisecheckList[this.currentActiveCheckTab].checkMobile || this.fgWisecheckList[this.currentActiveCheckTab].checkMobile.length < 10 || this.fgWisecheckList[this.currentActiveCheckTab].checkMobile.length > 10)) {
            isContactError = true;
            errorMsg = 'Contact Information Required!';
          } else if (!this.fgWisecheckList[this.currentActiveCheckTab].signatureImage) {
            isContactError = true;
            errorMsg = 'Signature Required!';
          }

          if (isContactError) {
            this.dbService.onShowAlertMessage('Error', errorMsg);
            return false;
          }

          const alert = yield this.alertCtrl.create({
            header: 'Confirm',
            message: 'Are You Sure, You Want To Save Check List ?',
            buttons: [{
              text: 'No',
              role: 'cancel',
              handler: () => {
                console.log('No clicked');
              }
            }, {
              text: 'Yes',
              handler: () => {
                console.log('Yes clicked');
                const inputData = JSON.parse(JSON.stringify(this.data));
                inputData["taskId"] = this.taskId;
                inputData["taskNo"] = this.taskNo;
                inputData["fgWisecheckList"] = this.fgWisecheckList;
                inputData["contactName"] = this.fgWisecheckList[this.currentActiveCheckTab].checkContactName;
                inputData["otherContactName"] = this.fgWisecheckList[this.currentActiveCheckTab].checkOtherContactName;
                inputData["contactMobile"] = this.fgWisecheckList[this.currentActiveCheckTab].checkMobile;
                inputData["fgSelectedIndex"] = this.currentActiveCheckTab;
                const binaryDataSplit = this.fgWisecheckList[this.currentActiveCheckTab].signatureImage.split('base64,');
                inputData["signatureData"] = binaryDataSplit[1];
                this.dbService.presentLoader();
                this.dbService.onPostRequestHandler(inputData, 'report/onSaveTaskCheckList').subscribe(result => {
                  console.log(result);
                  this.dbService.dismissLoader();
                  this.location.back();
                  this.dbService.presentToast('CheckList Saved Successfully!');
                });
              }
            }]
          });
          yield alert.present();
        });
      }

      onSaveDailyReportHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log(this.data);
          this.submitted = true;

          if (!this.selectedRating) {
            this.dbService.onShowAlertMessage('Error', 'Rating Required!');
            return;
          }

          if (!this.data.travelExpense || !this.data.otherExpense) {
            if (!this.data.travelExpense) {
              this.dbService.onShowAlertMessage('Error', 'Travel Expense Required!');
            }

            if (!this.data.otherExpense) {
              this.dbService.onShowAlertMessage('Error', 'Other Expense Required!');
            }

            return;
          } else {
            console.log('hello');
            console.log(this.data);
            const alert = yield this.alertCtrl.create({
              header: 'Confirm',
              message: 'Are You Sure, You Want To Save Report ?',
              buttons: [{
                text: 'No',
                role: 'cancel',
                handler: () => {
                  console.log('No clicked');
                }
              }, {
                text: 'Yes',
                handler: () => {
                  console.log('Yes clicked');
                  const inputData = JSON.parse(JSON.stringify(this.data));
                  inputData["taskId"] = this.taskId;
                  inputData["taskNo"] = this.taskNo;

                  if (inputData["nextFollowUpDate"]) {
                    inputData["nextFollowUpDate"] = moment__WEBPACK_IMPORTED_MODULE_7__(inputData["nextFollowUpDate"]).format('YYYY-MM-DD');
                    inputData["nextFollowUpTime"] = moment__WEBPACK_IMPORTED_MODULE_7__(inputData["nextFollowUpTime"], 'H:mm A').format('H:mm');
                  } else {
                    inputData["nextFollowUpDate"] = '';
                    inputData["nextFollowUpTime"] = '';
                  }

                  const binaryDataSplit = this.signatureImage.split('base64,');
                  inputData["signatureData"] = binaryDataSplit[1];
                  inputData["rating"] = this.selectedRating;
                  this.dbService.presentLoader();
                  this.dbService.onPostRequestHandler(inputData, 'report/onSaveDailyReportData').subscribe(result => {
                    console.log(result);
                    this.dbService.dismissLoader();
                    this.data.status = '';
                    this.location.back();
                    this.dbService.presentToast('Report Saved Successfully!');
                  });
                }
              }]
            });
            yield alert.present();
          }
        });
      }

      onSetDateTimeOptionHandler() {
        this.customDatePickerOption = {
          buttons: [{
            text: 'Clear',
            handler: () => this.registerForm1.controls["nextFollowUpDate"].setValue(null)
          }, {
            text: 'Cancel'
          }, {
            text: 'Save',
            // tslint:disable-next-line:max-line-length
            handler: () => this.registerForm1.controls["nextFollowUpDate"].setValue(moment__WEBPACK_IMPORTED_MODULE_7__(this.data.nextFollowUpDate).format('DD-MMM-YYYY'))
          }]
        };
        this.customTimePickerOption = {
          buttons: [{
            text: 'Clear',
            handler: () => this.registerForm1.controls["nextFollowUpTime"].setValue('')
          }, {
            text: 'Save',
            handler: () => this.registerForm1.controls["nextFollowUpTime"].setValue(moment__WEBPACK_IMPORTED_MODULE_7__(this.data.nextFollowUpTime).format('h:mm A'))
          }]
        };
      }

      onGetProjectContactHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const inputData = {
            taskId: this.taskId
          };
          this.dbService.onPostRequestHandler(inputData, 'task/onGetTaskProjectAllContactList').subscribe(result => {
            console.log(result);
            this.contactList = result["contactList"];
            this.contactList.push({
              name: 'Other',
              mobile: '',
              email: ''
            });
          });
        });
      }

      onContactChangeHandler(target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          console.log('hellosda');
          console.log(this.data.contactName, this.data.checkContactName);

          if (this.data.contactName == 'Other') {
            this.data.mobile = 0;
            this.data.email = '';
            this.data.checkMobile = 0;
          }

          if (this.data.contactName || this.data.checkContactName) {
            console.log('hello111');
            console.log(target);
            let isIndex;

            if (target == 'dailyReport') {
              isIndex = this.contactList.findIndex(row => row.name == this.data.contactName);
            }

            if (target == 'checkReport') {
              isIndex = this.contactList.findIndex(row => row.name == this.data.checkContactName);
            }

            if (isIndex !== -1) {
              if (target == 'dailyReport') {
                if (this.contactList[isIndex].mobile) {
                  this.data.mobile = this.contactList[isIndex].mobile;
                  this.data.email = this.contactList[isIndex].email;
                  this.data.designation = this.contactList[isIndex].designation;
                }
              }

              if (target == 'checkReport') {
                console.log(this.contactList[isIndex].mobile);

                if (this.contactList[isIndex].mobile) {
                  this.data.checkMobile = this.contactList[isIndex].mobile;
                  this.data.checkdesignation = this.contactList[isIndex].designation;
                }
              }
            }
          } else {
            console.log('hello123');
            this.data.mobile = 0;
            this.data.email = '';
            this.data.checkMobile = 0;
          }
        });
      }

      onGetCheckListHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const inputData = {
            taskId: this.taskId
          };
          this.dbService.onPostRequestHandler(inputData, 'task/onGetCheckList').subscribe(result => {
            console.log(result);
            this.fgWisecheckList = result["taskFGCheckList"];
            this.fgWisecheckListCategory = result["taskFGCheckList"][0].newCheckListCategory;
            this.data = result["customer_data"];
            this.isAllCheckListSubmitted = result["isAllCheckListSubmitted"];
            console.log(this.isAllCheckListSubmitted);
            console.log(this.fgWisecheckListCategory);

            for (let index = 0; index < this.fgWisecheckList.length; index++) {
              if (this.fgWisecheckList[index].signatureImage) {
                if (this.fgWisecheckList[index].signature_type == 'Other') {
                  this.fgWisecheckList[index].checkContactName = 'Other';
                  this.fgWisecheckList[index].checkOtherContactName = this.fgWisecheckList[index].contactName;
                } else {
                  this.fgWisecheckList[index].checkContactName = this.fgWisecheckList[index].contactName;
                }

                this.fgWisecheckList[index].signatureImage = this.dbService.uploadURL + this.fgWisecheckList[index].signatureImage;
              }
            }
          });
        });
      }

      onChangeWorkStatusHandler() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const reasonNotCloserControl = this.registerForm1.get('reasonNotCloser');

          if (this.data.workStatus == 'Complete') {
            reasonNotCloserControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]);
          } else {
            reasonNotCloserControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]);
          }

          reasonNotCloserControl.updateValueAndValidity();
        });
      }

      onNextStageHandler(stage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.submitted = true;

          if (this['registerForm' + stage + ''].invalid) {
            if (stage == 1) {
              this['registerForm' + stage + ''].get('workDetail').markAsTouched();
              this['registerForm' + stage + ''].get('suggestion').markAsTouched();
              this['registerForm' + stage + ''].get('causeFailure').markAsTouched();
              this['registerForm' + stage + ''].get('workStatus').markAsTouched();
              this['registerForm' + stage + ''].get('nextFollowUpDate').markAsTouched();
              this['registerForm' + stage + ''].get('nextFollowUpTime').markAsTouched();
              this['registerForm' + stage + ''].get('reasonNotCloser').markAsTouched();
            } else if (stage == 2) {
              this['registerForm' + stage + ''].get('actionPlanned').markAsTouched();
              this['registerForm' + stage + ''].get('contactName').markAsTouched();
              this['registerForm' + stage + ''].get('otherContactName').markAsTouched();
              this['registerForm' + stage + ''].get('mobile').markAsTouched();
              this['registerForm' + stage + ''].get('email').markAsTouched();
            } else if (stage == 3) {
              this['registerForm' + stage + ''].get('remark').markAsTouched();
            } else if (stage == 4) {
              this['registerForm' + stage + ''].get('travelExpense').markAsTouched();
              this['registerForm' + stage + ''].get('otherExpense').markAsTouched();
              this['registerForm' + stage + ''].get('expenseDetail').markAsTouched();
            }

            return;
          } else {
            var ckeckListCount = 0;
            const taskData = {
              taskId: this.taskId,
              taskNo: this.taskNo
            };
            this.dbService.onPostRequestHandler(taskData, 'report/checkTaskCheckList').subscribe(result => {
              console.log(result);
              ckeckListCount = result['ckeckListCount'];
            });
            console.log(this.data);
            console.log(ckeckListCount); // tslint:disable-next-line: max-line-length
            // tslint:disable-next-line: max-line-length

            if (stage == 1 && this.taskType == 'commissioning' && this.data.workStatus == "Close" && this.isAllCheckListSubmitted == false) {
              this.dbService.onShowAlertMessage('Error', 'Fill FG Check List First!');
              return; // tslint:disable-next-line:max-line-length
            }

            if (stage == 1 && (this.data.nextFollowUpDate && !this.data.nextFollowUpTime || !this.data.nextFollowUpDate && this.data.nextFollowUpTime)) {
              this.dbService.onShowAlertMessage('Error', 'Fill FollowUp Details!');
              return; // tslint:disable-next-line:max-line-length
            } else if (stage == 3 && this.data.contactName == 'Other' && (!this.data.otherContactName || !this.data.mobile || !this.data.email)) {
              this.dbService.onShowAlertMessage('Error', 'Fill Contact Details!');
              return;
            }

            this.activeStage += 1;
          }
        });
      }

      onBackClickHandler(stage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.activeStage = stage - 1;
        });
      }

      presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const taskData = {
            taskId: this.taskId,
            taskNo: this.taskNo,
            taskStatus: this.taskStatus
          };
          const popover = yield this.popoverController.create({
            component: _tec_compliant_popover_tec_compliant_popover_component__WEBPACK_IMPORTED_MODULE_4__["TecCompliantPopoverComponent"],
            event: ev,
            translucent: true,
            componentProps: taskData
          });
          return yield popover.present();
        });
      }

      presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _signaturemodal_signaturemodal_page__WEBPACK_IMPORTED_MODULE_9__["SignaturemodalPage"],
            componentProps: {
              'sigImage': this.signatureImage
            }
          });
          modal.onDidDismiss().then(data => {
            console.log(data);

            if (data["data"] && data["data"]["signatureImage"]) {
              if (this.fgWisecheckList && this.fgWisecheckList[this.currentActiveCheckTab]) {
                this.fgWisecheckList[this.currentActiveCheckTab].signatureImage = data["data"]["signatureImage"];
              }

              this.signatureImage = data["data"]["signatureImage"];
            }

            console.log(this.signatureImage);
          });
          return yield modal.present();
        });
      }

      GoComplaintDetail() {
        this.location.back();
      }

      ionViewWillEnter() {
        this.reportType = localStorage.getItem('reportType');
        this.routeTitleForView = localStorage.getItem('routeTitleForView');
        console.log(this.reportType);

        if (this.reportType == 'dailyReport') {
          this.activeStage = 1;
        }

        console.log(this.reportType);

        if (this.reportType == 'checkListReport') {
          this.activeStage = 5;
          console.log(this.reportType);
        }

        this.routeParams.params.subscribe(params => {
          console.log(params);
          this.taskId = params.taskId;
          this.taskNo = params.taskNo;
          this.taskStatus = params.taskStatus;

          if (this.reportType == 'checkListReport') {
            this.onGetCheckListHandler();
          }

          console.log(this.taskId);
          console.log(this.taskNo);
          console.log(this.taskStatus);
        });
      }

      get f1() {
        return this.registerForm1.controls;
      }

      get f3() {
        return this.registerForm3.controls;
      }

      get f4() {
        return this.registerForm4.controls;
      }

      get f2() {
        return this.registerForm2.controls;
      }

    };

    ComDailyreportPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: src_app_db_service_service__WEBPACK_IMPORTED_MODULE_6__["DbServiceService"]
    }];

    ComDailyreportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-com-dailyreport',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./com-dailyreport.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./com-dailyreport.page.scss */
      "./src/app/technician_app/complaints/com-dailyreport/com-dailyreport.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_db_service_service__WEBPACK_IMPORTED_MODULE_6__["DbServiceService"]])], ComDailyreportPage);
    /***/
  }
}]);
//# sourceMappingURL=complaints-com-dailyreport-com-dailyreport-module-es5.js.map