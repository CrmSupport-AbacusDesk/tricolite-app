import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

import * as moment from 'moment';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  data: any = {};
  loginData: any = {};

  storedOTPCode: any = '';
  isOTPWrong: any = false;
  isPasswordWrong: any = false;


  activeStage: any = 1;
  isMobileSubmitted: any = false;
  isOTPSubmitted: any = false;
  isPasswordSubmitted: any = false;

  isUserLoggedIn: any = false;
  userLoggedInType: any = '';

  registerForm1: FormGroup;
  registerForm2: FormGroup;
  registerForm3: FormGroup;

  constructor(private route: Router,
              public routeParams: ActivatedRoute,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public modalController: ModalController,
              public dbService: DbServiceService) {

       const loginData = JSON.parse(localStorage.getItem('loginData'));

       if (loginData && loginData[`loginId`]) {

              this.isUserLoggedIn = true;
              this.userLoggedInType = loginData[`loginType`];
              this.activeStage = 3;
       }

       console.log(this.userLoggedInType);
  }

  ngOnInit() {

        this.onSetValidationHandler();
  }

  onSetValidationHandler() {

      this.registerForm1 = this.formBuilder.group({
            mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      });

      this.registerForm2 = this.formBuilder.group({
            otpCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      });

      this.registerForm3 = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      });
  }

  onMobileSubmitHandler() {

        this.isMobileSubmitted = true;
        console.log(this.registerForm1);

        if (this.registerForm1.invalid) {

            console.log('Invalid!');

            this.registerForm1.get('mobile').markAsTouched();
            return false;

        } else {

            this.dbService.presentLoader();

            const inputData = {
               mobileNo: this.data.mobile
            };

            this.dbService.onPostRequestHandler(inputData, 'login/onValidateMobileExistance').subscribe((result) => {

                  console.log(result);
                  this.dbService.dismissLoader();

                  if (result[`status`] == 'error') {

                        this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

                  } else {

                        this.activeStage = 2;
                        this.storedOTPCode = result[`otpCode`];
                  }
            });
        }
  }

  onOTPSubmitHandler() {

        this.isOTPSubmitted = true;

        if (this.registerForm2.invalid) {

            this.registerForm2.get('otpCode').markAsTouched();
            return false;


        } else {

            if (this.data.otpCode == this.storedOTPCode) {

                    this.activeStage = 3;

            } else {

                   this.isOTPWrong = true;
            }

        }
  }

  async onPasswordSubmitHandler() {

       this.isPasswordSubmitted = true;

       if (this.registerForm3.invalid || (this.data.password != this.data.confirmPassword)) {

            this.registerForm3.get('password').markAsTouched();
            this.registerForm3.get('confirmPassword').markAsTouched();

            if (this.data.password != this.data.confirmPassword) {
                   this.isPasswordWrong = true;
            }

            return false;

       } else {


            const alert = await this.alertCtrl.create({
                  header: 'Confirm',
                  message: 'Are You Sure, You Want To Save Password ?',
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

                              this.dbService.presentLoader();

                              const inputData = {
                                 password: this.data.password
                              };

                              this.dbService.onPostRequestHandler(inputData, 'login/onUpdateLoginPassword').subscribe((result) => {

                                    console.log(result);
                                    this.dbService.dismissLoader();

                                    this.dbService.onShowAlertMessage('Success', 'Password Updated');

                                    const loginData = JSON.parse(localStorage.getItem('loginData'));
                                    if (loginData && loginData[`loginType`] == 'Technician') {

                                          this.route.navigateByUrl('/technicians/home');
                                    }

                                    if (loginData && loginData[`loginType`] == 'Customer') {

                                        this.route.navigateByUrl('/customer/home');
                                    }
                              });

                          }
                        }
                    ]
            });

            await alert.present();
       }
  }

  onGoToNextStageHandler() {

        if (!this.data.isShowOTP) {

              console.log(this.data.mobile);
              console.log(this.data.mobile.length);

              if (!this.data.mobile || ((this.data.mobile).toString()).length < 10 || ((this.data.mobile).toString()).length > 10) {

                  return false;

              } else {

                   
              }

        } else if (this.data.isShowOTP && !this.data.isShowPassword) {

              if (this.storedOTPCode == this.data.otp) {


              } else {


              }

              this.data.isShowPassword = true;
        }
  }

  get f1() { return this.registerForm1.controls; }
  get f2() { return this.registerForm2.controls; }
  get f3() { return this.registerForm3.controls; }

}
