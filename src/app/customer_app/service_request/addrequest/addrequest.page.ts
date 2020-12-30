import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

import * as moment from 'moment';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.page.html',
  styleUrls: ['./addrequest.page.scss'],
})
export class AddrequestPage implements OnInit {


  data: any = {};
  submitted: any = false;

  contactList: any = [];
  projectList: any = [];
  fgList: any = [];
  natureList : any = [];
  priorityList : any = [];

  transactionTypeList : any = [];

  complaintTypeList: any = [];
  productData: any = [];

  registerForm1: FormGroup;
  minDate: any  = '';

  defaultActiveTitle = 'service_request';
    commissioning: any;

  constructor(public popoverController: PopoverController, 
              private route: Router,
              public routeParams: ActivatedRoute,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalController: ModalController,
              public dbService: DbServiceService) {

            this.data = {};
            this.registerForm1 = this.formBuilder.group({

                requestType: ['', [Validators.required]],
                complaintTitle: ['', [Validators.required]],
                description: ['', [Validators.required]],
                project: ['', [Validators.required]],
                fgNo: [''],
                natureProblem: [''],
                visitDate: ['', [Validators.required]],
                visitTime: ['', [Validators.required]],
                contactName: [''],
                transaction_type:[''],
            });

    
            this.data = {
                requestType: '',
                complaintTitle: '',
                description: '',
                project: '',
                fgNo: '',
                natureProblem: '',
                visitDate: '',
                visitTime: '',
                contactName: '',
                transaction_type : '',
            };

            this.minDate = moment().format('YYYY-MM-DD');
  }


  ngOnInit() {

      this.getComplaintTitleListHandler();
      this.onGetMyProjectListHandler();
      this.getNatureProbelmListHandler();
      this.getPriorityListHandler();
      this.getTransactionTypeListHandler();

      // this.defaultActiveTitle = 'service_request';
  }

  async onRequestTypeChangeHandler(){


        if (this.data.requestType == 'commissioning') {

             this.data.transaction_type = {
                transaction_type: 'commissioning'
             };

        } else {
            this.data.transaction_type = '';
        }

        console.log(this.data.transaction_type);

        this.data.complaintTitle = '';
  }


  async onAddProductToListHandler() {    

       if (!this.data.fgNo || !this.data.fgNo[`fg_no`]) {

            if(!this.data.fgNo || !this.data.fgNo[`fg_no`]) {

                this.dbService.onShowAlertMessage('Error', 'FG No Reuired');
            }

            console.log(this.data.fgNo);

            return;

       } else {

          console.log(this.fgList);
          console.log(this.data.fgNo);

           const isFGExist = this.productData.findIndex(row => row.fgNo == this.data.fgNo.fg_no);

           if (isFGExist === -1) {

              this.productData.push({

                  fgNo: this.data.fgNo[`fg_no`],
              });

           } else {

               this.productData[isFGExist].fgNo = this.data.fgNo[`fg_no`];

           }

           console.log(this.productData);


           this.data.fgNo = {};

           this.dbService.presentToast('Product Update To List!');
       }
  }


  async onSaveRequestHandler() {
     
      this.submitted = true;

      if (this.productData.length == 0) {

          this.dbService.onShowAlertMessage('Error', 'No Product Information Added!');
          return;
      }

      if (this.data.requestType == 'service_request' && (!this.data.transaction_type || !this.data.transaction_type[`transaction_type`])) {

          this.dbService.onShowAlertMessage('Error', 'Service Type Required!');
          return;
      }

      let isContactSelected = false;

      for (let index = 0; index < this.contactList.length; index++) {
       
            if(this.contactList[index].checked) {

                 isContactSelected = true;
            }
      }

      if (!isContactSelected) {

          this.dbService.onShowAlertMessage('Error', 'No Contact Information Selected!');
          return;
      }

      if (this.registerForm1.invalid) {

          this.registerForm1.get('requestType').markAsTouched();
          this.registerForm1.get('complaintTitle').markAsTouched();
          this.registerForm1.get('description').markAsTouched();
          this.registerForm1.get('project').markAsTouched();
          this.registerForm1.get('fgNo').markAsTouched();
          this.registerForm1.get('natureProblem').markAsTouched();
          this.registerForm1.get('visitDate').markAsTouched();
          this.registerForm1.get('visitTime').markAsTouched();
          this.registerForm1.get('contactName').markAsTouched();
          this.registerForm1.get('transaction_type').markAsTouched();


      } else {

          const alert = await this.alertCtrl.create({
            header: 'Confirm',
            message: 'Are You Sure, You Want To Save Request ?',
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
                          inputData[`projectId`] = this.data.project[`id`];
                          inputData[`projectName`] = this.data.project[`project_name`];

                          inputData[`fgData`] = this.productData;
                          inputData[`contactList`] = this.contactList;

                          inputData[`visitDate`] = moment(this.data.visitDate).format('YYYY-MM-DD');
                          inputData[`visitTime`] = moment(this.data.visitTime).format('hh:mm');

                          inputData[`visitDateTime`] = inputData[`visitDate`] + ' ' + inputData[`visitTime`];

                          inputData[`transactionType`] = this.data.transaction_type;

                          this.dbService.presentLoader();

                          console.log(inputData);

                          this.dbService.onPostRequestHandler(inputData, 'customer/onSubmitTaskData').subscribe((result) => {

                                console.log(result);
                                this.dbService.dismissLoader();

                                const routeURL = '/customer/request';
                                this.route.navigate([routeURL]);

                                this.dbService.presentToast('Request Saved Successfully!');
                          });
                    }
                  }
              ]
          });

          await alert.present();
      }
  }


  async getComplaintTitleListHandler() {
          
      const inputData = {};

      this.dbService.onPostRequestHandler(inputData, 'task/getComplaintTypeList').subscribe((result) => {
            console.log(result);
            this.complaintTypeList = result[`complaintTypeList`];
      });
       
  }

  async getNatureProbelmListHandler(){
    
    const inputData = {};

    this.dbService.onPostRequestHandler(inputData, 'task/getNatureProbelmList').subscribe((result) => {
        console.log(result);
        this.natureList = result[`natureProbelmList`];
        console.log(this.natureList);
        
    });

  }
  async getTransactionTypeListHandler(){

    const inputData = {};

    this.dbService.onPostRequestHandler(inputData, 'task/getTransactionTypeList').subscribe((result) => {
        console.log(result);
        this.transactionTypeList = result[`transactionTypeList`];


        console.log(this.transactionTypeList);
        
    });


  }

  async getPriorityListHandler(){

    const inputData = {};

    this.dbService.onPostRequestHandler(inputData, 'task/getPriorityList').subscribe((result) => {
        console.log(result);
        this.priorityList = result[`priorityList`];
        console.log(this.priorityList);
    });
  }


  async onGetMyProjectListHandler() {

      const inputData = {};

      this.dbService.onPostRequestHandler(inputData, 'customer/getProjectList').subscribe((result) => {
            console.log(result);
            this.projectList = result[`projectContactList`];
      });
  }


  async onGetProjectFGListHandler() {

    this.fgList = [];
    this.data.fgNo = {};
    this.productData = [];

    const inputData = {};
    inputData[`projectId`] = this.data.project[`id`];

    this.dbService.presentLoader();
    this.dbService.onPostRequestHandler(inputData, 'customer/getProjectFGList').subscribe((result) => {
          console.log(result);
          this.fgList = result[`fgList`];

          this.dbService.dismissLoader();

          this.onGetProjectContactHandler();
    });
  }



  async onGetProjectContactHandler() {

    const inputData = {
         projectId: this.data.project[`id`]
    };

    this.dbService.onPostRequestHandler(inputData, 'task/onGetTaskProjectAllContactList').subscribe((result) => {

          console.log(result);
          this.contactList = result[`contactList`];

    });
  }

  async onDeleteProductHandler(index) {

    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are You Sure, You Want To Delete Product ?',
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

                    this.productData.splice(index, 1);
                    this.dbService.presentToast('Product Deleted Successfully!');
              }
            }
        ]
    });

    await alert.present();
  }

  ionViewWillEnter() {

      this.data = {};
  }





  get f1() { return this.registerForm1.controls; }

}
