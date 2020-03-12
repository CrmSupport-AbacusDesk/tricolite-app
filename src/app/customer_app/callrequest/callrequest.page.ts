import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-callrequest',
  templateUrl: './callrequest.page.html',
  styleUrls: ['./callrequest.page.scss'],
})
export class CallrequestPage implements OnInit {

  data: any = {};
  contactData: any = [];

  minDate: any  = '';

  submitted: any = false;
  registerForm1: FormGroup;

  constructor(private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalController: ModalController,
              public dbService: DbServiceService) {

              this.minDate = moment().format('YYYY-MM-DD');

              this.registerForm1 = this.formBuilder.group({

                  contactName: ['', [Validators.required]],
                  mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
                  suitableDate: ['', [Validators.required]],
                  suitableTime: ['', [Validators.required]]
              });
  }

  ngOnInit() {

      this.onGetAllContactListHandler();
  }


  async onChangeContactHandler() {

         const contactIndex = this.contactData.findIndex(row => row.name == this.data.contactName);

         if (contactIndex !== -1) {
            this.data.mobile = this.contactData[contactIndex].mobile;
         }
  }


  async onSaveCallRequestHandler() {

      console.log(this.data);

      this.submitted = true;

      if (this.registerForm1.invalid) {

          this.registerForm1.get('contactName').markAsTouched();
          this.registerForm1.get('mobile').markAsTouched();
          this.registerForm1.get('suitableDate').markAsTouched();
          this.registerForm1.get('suitableTime').markAsTouched();

          return;

      } else {

          console.log('hello');

          console.log(this.data);

          const alert = await this.alertCtrl.create({
            header: 'Confirm',
            message: 'Are You Sure, You Want To Save Call Request ?',
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

                          inputData[`suitableDate`] = moment(inputData[`suitableDate`]).format('YYYY-MM-DD');

                          inputData[`suitableTime`] = moment(inputData[`suitableTime`], 'H:mm A').format('H:mm');

                          inputData[`suitableDateTime`] = inputData[`suitableDate`] + ' ' + inputData[`suitableTime`];

                          this.dbService.presentLoader();

                          this.dbService.onPostRequestHandler(inputData, 'customer/onSaveCallRequestData').subscribe((result) => {

                                console.log(result);
                                this.dbService.dismissLoader();

                                this.data.status = '';
                                this.route.navigate(['/customer/home']);

                                this.dbService.presentToast('Call Request Saved Successfully!');
                          });
                    }
                  }
              ]
          });

          await alert.present();

      }
  }


  onGetAllContactListHandler() {

      const inputData = {};

      this.dbService.presentLoader();

      this.dbService.onPostRequestHandler(inputData, 'customer/getCustomerContactHandler').subscribe((result) => {
            console.log(result);

            this.dbService.dismissLoader();
            this.contactData = result[`contactData`];
      });
  }

  get f1() { return this.registerForm1.controls; }

}
