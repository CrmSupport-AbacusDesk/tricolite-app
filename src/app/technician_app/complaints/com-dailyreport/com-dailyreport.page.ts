import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

import * as moment from 'moment';
import { Location } from '@angular/common';
import { SignaturemodalPage } from '../signaturemodal/signaturemodal.page';
import { IfStmt, InvokeFunctionExpr } from '@angular/compiler';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
    selector: 'app-com-dailyreport',
    templateUrl: './com-dailyreport.page.html',
    styleUrls: ['./com-dailyreport.page.scss'],
})
export class ComDailyreportPage implements OnInit {
    
    taskId: any = '';
    taskNo: any = '';
    taskStatus: any = '';
    taskType: any = '';
    
    
    activeStage: any = '';
    contactList: any = [];
    
    data: any = {};
    
    signatureData: any = [];
    fgWisecheckList: any = [];
    
    fgWisecheckListCategory: any = [];
    submitted: any = false;
    
    customDatePickerOption = {};
    customTimePickerOption = {};
    
    minDate: any  = '';
    signatureImage : any = '';
    
    reportType: any = '';
    routeTitleForView: any = '';
    
    currentActiveCheckTab: any = 0;
    
    selectedRating: any = '';
    isAllCheckListSubmitted: any = false;
    
    
    registerForm1: FormGroup;
    registerForm2: FormGroup;
    registerForm3: FormGroup;
    registerForm4: FormGroup;
    
    constructor(public popoverController: PopoverController,private route: Router,public routeParams: ActivatedRoute,private formBuilder: FormBuilder,public alertCtrl: AlertController,private location: Location,public modalController: ModalController,public dbService:DbServiceService,) {
        
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
        
        this.routeParams.params.subscribe(params =>{
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
            
            workDetail: ['', [Validators.required, Validators.minLength(3)]],
            suggestion: ['', [Validators.minLength(3)]],
            causeFailure: ['', [Validators.minLength(3)]],
            workStatus: ['', [Validators.required]],
            nextFollowUpDate: [''],
            nextFollowUpTime: [''],
            reasonNotCloser: ['', [Validators.minLength(3)]],
        });
        
        this.registerForm2 = this.formBuilder.group({
            
            travelExpense: ['', [Validators.required, Validators.minLength(2)]],
            otherExpense: ['', [Validators.minLength(2)]],
            expenseDetail: ['', [Validators.minLength(3)]],
        });
        
        this.registerForm3 = this.formBuilder.group({
            
            actionPlanned: ['', [Validators.minLength(3)]],
            contactName: ['', [Validators.required]],
            otherContactName: ['', [Validators.minLength(3)]],
            mobile: ['', [Validators.minLength(10), Validators.maxLength(10)]],
            email: ['', [Validators.email]],
        });
        
        this.registerForm4 = this.formBuilder.group({
            
            remark: ['', [Validators.required, Validators.minLength(3)]]
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
            email : '',
            remark: ''
        };

        this.minDate = moment().format('YYYY-MM-DD');
    }
    
    ngOnInit()
    {
        this.onGetProjectContactHandler();
        this.onSetDateTimeOptionHandler();
        // alert(this.reportType);
    }
    
    onStarClickHandler(rating) {
        this.selectedRating = rating;
    }

    async onClickOnFgWiseCategoryHandler(index)
    {
        console.log(this.data);

        this.currentActiveCheckTab = index;
        console.log(this.fgWisecheckList);
        this.fgWisecheckListCategory =  this.fgWisecheckList[index].newCheckListCategory;
       
        console.log(this.data);
    }
    
    select_checklist(row)
    {
        console.log(row.checked);
        
    }
    
    async onSaveCheckListHandler()
    {
        this.submitted = true;
        console.log(this.fgWisecheckListCategory[0].checkListData);
        let count = 0;
        for (let i = 0; i < this.fgWisecheckList.length; i++)
        {
            let isFgAnyCategoryChecked = false;
            
            for (let j = 0; j < this.fgWisecheckList[i].newCheckListCategory.length; j++)
            { 
                for (let k = 0; k < this.fgWisecheckList[i][`newCheckListCategory`][j][`checkListData`].length; k++)
                { 
                    if (this.fgWisecheckList[i][`newCheckListCategory`][j][`checkListData`][k].checked)
                    {
                        console.log(this.fgWisecheckList[i]['newCheckListCategory'][j]['checkListData'].length);
                        isFgAnyCategoryChecked = true;
                    }
                    
                }
            }
            
            if (isFgAnyCategoryChecked===true) {
                count++;
            }
        }
        
        console.log(count);
        console.log(this.fgWisecheckList);
        
        if (count == 0)
        {
            this.dbService.onShowAlertMessage('Error', 'No Check List Selected!');
            return false;
        }
        
        let isContactError = false;
        let errorMsg = '';
        
        if (!this.fgWisecheckList[this.currentActiveCheckTab].checkContactName)
        {
            isContactError = true;
            errorMsg = 'Contact Name Required!';
            
        }
        else if(this.fgWisecheckList[this.currentActiveCheckTab].checkContactName == 'Other' && (!this.fgWisecheckList[this.currentActiveCheckTab].checkOtherContactName || !this.fgWisecheckList[this.currentActiveCheckTab].checkMobile || this.fgWisecheckList[this.currentActiveCheckTab].checkMobile.length < 10 || this.fgWisecheckList[this.currentActiveCheckTab].checkMobile.length > 10))
        {
            isContactError = true;
            errorMsg = 'Contact Information Required!';
        }
        else if (!this.fgWisecheckList[this.currentActiveCheckTab].signatureImage)
        {
            isContactError = true;
            errorMsg = 'Signature Required!';
        }
        
        if (isContactError)
        {
            this.dbService.onShowAlertMessage('Error', errorMsg);
            return false;
        }
        
        const alert = await this.alertCtrl.create({
            header: 'Confirm',
            message: 'Are You Sure, You Want To Save Check List ?',
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
                        const inputData = JSON.parse(JSON.stringify(this.data));
                        inputData[`taskId`] = this.taskId;
                        inputData[`taskNo`] = this.taskNo;

                        inputData[`fgWisecheckList`] = this.fgWisecheckList;

                        inputData[`contactName`] = this.fgWisecheckList[this.currentActiveCheckTab].checkContactName;

                        inputData[`otherContactName`] = this.fgWisecheckList[this.currentActiveCheckTab].checkOtherContactName;

                        inputData[`contactMobile`] = this.fgWisecheckList[this.currentActiveCheckTab].checkMobile;

                        inputData[`fgSelectedIndex`] = this.currentActiveCheckTab;

                        const binaryDataSplit = this.fgWisecheckList[this.currentActiveCheckTab].signatureImage.split('base64,');

                        inputData[`signatureData`] = binaryDataSplit[1];

                        this.dbService.presentLoader();
                        this.dbService.onPostRequestHandler(inputData, 'report/onSaveTaskCheckList')
                        .subscribe((result) => {
                            console.log(result);
                            this.dbService.dismissLoader();
                            this.location.back();
                            this.dbService.presentToast('CheckList Saved Successfully!');
                        });
                    }
                }
            ]
        });
        await alert.present();
    }
    
    async onSaveDailyReportHandler() {
        
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
            
            const alert = await this.alertCtrl.create({
                header: 'Confirm',
                message: 'Are You Sure, You Want To Save Report ?',
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
                            
                            const inputData = JSON.parse(JSON.stringify(this.data));
                            inputData[`taskId`] = this.taskId;
                            inputData[`taskNo`] = this.taskNo;
                            
                            if (inputData[`nextFollowUpDate`]) {
                                
                                inputData[`nextFollowUpDate`] = moment(inputData[`nextFollowUpDate`]).format('YYYY-MM-DD');
                                
                                inputData[`nextFollowUpTime`] = moment(inputData[`nextFollowUpTime`], 'H:mm A').format('H:mm');
                                
                            } else {
                                
                                inputData[`nextFollowUpDate`] = '';
                                inputData[`nextFollowUpTime`] = '';
                                
                            }
                            
                            const binaryDataSplit = this.signatureImage.split('base64,');
                            inputData[`signatureData`] = binaryDataSplit[1];
                            
                            inputData[`rating`] = this.selectedRating;
                        
                            this.dbService.presentLoader();
                            
                            this.dbService.onPostRequestHandler(inputData, 'report/onSaveDailyReportData').subscribe((result) => {
                                
                                console.log(result);
                                this.dbService.dismissLoader();
                                
                                this.data.status = '';
                                this.location.back();
                                console.log("hiiiiii");
                                
                                this.dbService.presentToast('Report Saved Successfully!');
                            });
                        }
                    }
                ]
            });
            
            await alert.present();
            
        }
    }
    
    onSetDateTimeOptionHandler() {
        
        this.customDatePickerOption = {
            
            buttons: [{
                text: 'Clear',
                handler: () => this.registerForm1.controls[`nextFollowUpDate`].setValue(null)
            },  {
                text: 'Cancel'
            }, {
                text: 'Save',
                // tslint:disable-next-line:max-line-length
                handler: () => this.registerForm1.controls[`nextFollowUpDate`].setValue(moment(this.data.nextFollowUpDate).format('DD-MMM-YYYY'))
            }]
        };
        
        this.customTimePickerOption = {
            
            buttons: [{
                text: 'Clear',
                handler: () => this.registerForm1.controls[`nextFollowUpTime`].setValue('')
            }, {
                text: 'Save',
                handler: () => this.registerForm1.controls[`nextFollowUpTime`].setValue(moment(this.data.nextFollowUpTime).format('h:mm A'))
            }]
        };
        
    }
    
    
    async onGetProjectContactHandler() {
        
        const inputData = {
            taskId: this.taskId
        };
        
        this.dbService.onPostRequestHandler(inputData, 'task/onGetTaskProjectAllContactList').subscribe((result) => {
            
            console.log(result);
            this.contactList = result[`contactList`];
            
            this.contactList.push({
                name: 'Other',
                mobile: '',
                email: ''
            });
            
        });
    }
    
    
    async onContactChangeHandler(target)
    {

        console.log('hellosda');
        console.log(this.data.contactName, this.data.checkContactName);

        if (this.data.contactName == 'Other') {

                this.data.mobile = 0;
                this.data.email = '';
                this.data.checkMobile = 0;
        }

        if (this.data.contactName || this.data.checkContactName)  {

            console.log('hello111');
            console.log(target);
            
            let isIndex: any;
            if(target == 'dailyReport') {
                isIndex = this.contactList.findIndex(row => row.name == this.data.contactName);
            }

            if (target == 'checkReport') {
                isIndex = this.contactList.findIndex(row => row.name == this.data.checkContactName);
            }

            if (isIndex !== -1) {
                if (target == 'dailyReport') {

                    if(this.contactList[isIndex].mobile) {

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
    }
    
    async onGetCheckListHandler()
    {
        const inputData = {
            taskId: this.taskId
        };
        this.dbService.onPostRequestHandler(inputData, 'task/onGetCheckList')
        .subscribe((result) => {
            console.log(result);
            this.fgWisecheckList = result[`taskFGCheckList`];
            this.fgWisecheckListCategory = result[`taskFGCheckList`][0].newCheckListCategory;
            this.data = result[`customer_data`];

            this.isAllCheckListSubmitted = result[`isAllCheckListSubmitted`];
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
    }
    
    async onChangeWorkStatusHandler() {
        
        const reasonNotCloserControl = this.registerForm1.get('reasonNotCloser');
        
        if (this.data.workStatus == 'Complete') {
            
            reasonNotCloserControl.setValidators([Validators.minLength(3)]);
            
        } else {
            
            reasonNotCloserControl.setValidators([Validators.required, Validators.minLength(3)]);
        }
        
        reasonNotCloserControl.updateValueAndValidity();
    }
    
    
    async onNextStageHandler(stage) {
        
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
                
                
            }  else if (stage == 2) {
                
                this['registerForm' + stage + ''].get('actionPlanned').markAsTouched();
                this['registerForm' + stage + ''].get('contactName').markAsTouched();
                this['registerForm' + stage + ''].get('otherContactName').markAsTouched();
                this['registerForm' + stage + ''].get('mobile').markAsTouched();
                this['registerForm' + stage + ''].get('email').markAsTouched();
                
            } else if (stage == 3) {
                
                this['registerForm' + stage + ''].get('remark').markAsTouched();
                
            }else if (stage == 4) {
                
                this['registerForm' + stage + ''].get('travelExpense').markAsTouched();
                this['registerForm' + stage + ''].get('otherExpense').markAsTouched();
                this['registerForm' + stage + ''].get('expenseDetail').markAsTouched();
                
                
            }
            
            return;
            
        } else {

            

            var ckeckListCount = 0
                    const taskData = {
                        taskId: this.taskId,
                        taskNo: this.taskNo,
                    };
            this.dbService.onPostRequestHandler(taskData, 'report/checkTaskCheckList').subscribe((result) => {
                            console.log(result);
                            ckeckListCount = result['ckeckListCount']
            });
            
            console.log(this.data);
            console.log(ckeckListCount);

            
            // tslint:disable-next-line: max-line-length

            // tslint:disable-next-line: max-line-length
            if (stage == 1 && this.taskType == 'commissioning' && this.data.workStatus == "Close" && this.isAllCheckListSubmitted == false) {
                
                this.dbService.onShowAlertMessage('Error', 'Fill FG Check List First!');
                return;
                
                // tslint:disable-next-line:max-line-length
            }
           
            if (stage == 1 && ((this.data.nextFollowUpDate && !this.data.nextFollowUpTime) || (!this.data.nextFollowUpDate && this.data.nextFollowUpTime))) {
                
                this.dbService.onShowAlertMessage('Error', 'Fill FollowUp Details!');
                return;
                
                // tslint:disable-next-line:max-line-length
            } else if (stage == 3 && this.data.contactName == 'Other' && (!this.data.otherContactName || !this.data.mobile || !this.data.email)) {
                
                this.dbService.onShowAlertMessage('Error', 'Fill Contact Details!');
                return;
                
            }
            
            this.activeStage += 1;
        }
    }
    
    async onBackClickHandler(stage)  {
        this.activeStage = stage - 1;
    }
    
    async presentPopover(ev: any) {
        
        const taskData = {
            taskId: this.taskId,
            taskNo: this.taskNo,
            taskStatus: this.taskStatus,
        };
        
        const popover = await this.popoverController.create({
            component: TecCompliantPopoverComponent,
            event: ev,
            translucent: true,
            componentProps: taskData
        });
        
        return await popover.present();
    }
    
    
    
    async presentModal() {
        
        const modal = await this.modalController.create({
            component: SignaturemodalPage,
            componentProps:{
                'sigImage':this.signatureImage
            }
        });
        
        modal.onDidDismiss()
        .then((data) => {
            console.log(data);
            if (data[`data`] && data[`data`][`signatureImage`]) {

                if (this.fgWisecheckList && this.fgWisecheckList[this.currentActiveCheckTab]) {

                    this.fgWisecheckList[this.currentActiveCheckTab].signatureImage = data[`data`][`signatureImage`];
                }

                this.signatureImage = data[`data`][`signatureImage`];

            }
            console.log(this.signatureImage);
        });
        return await modal.present();
    }
    
    GoComplaintDetail(){
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
        
        this.routeParams.params.subscribe(params =>{
            console.log(params);
            this.taskId = params.taskId;
            this.taskNo = params.taskNo;
            this.taskStatus = params.taskStatus;

            if(this.reportType == 'checkListReport') {

                this.onGetCheckListHandler();
            }
           
            console.log(this.taskId);
            console.log(this.taskNo);
            console.log(this.taskStatus);
        });
        
    }
    
    
    get f1() { return this.registerForm1.controls; }
    get f3() { return this.registerForm3.controls; }
    get f4() { return this.registerForm4.controls; }
    get f2() { return this.registerForm2.controls; }
    
}
