import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

     
  data: any = {};
  submitted: any = false;
  registerForm: FormGroup;

  private alert: HTMLIonAlertControllerElement;

  constructor(private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public dbService: DbServiceService,
              ) {

              this.registerForm = this.formBuilder.group({

                  userName: ['', [Validators.required, Validators.minLength(3)]],
                  password: ['', [Validators.required, Validators.minLength(3)]]
              });
  }

  ngOnInit() {



  }

  async onSubmitLoginHandler() {

      this.submitted = true;

      console.log(this.registerForm);

      if (this.registerForm.invalid) {

          this.registerForm.get('userName').markAsTouched();
          this.registerForm.get('password').markAsTouched();
          return;

      } else {

           console.log('hello');

           this.dbService.presentLoader();

           const inputData = {
               userName: this.data.userName,
               password: this.data.password,
               loginType: 'Customer'
           };

           this.dbService.onPostRequestHandler(inputData, 'login/onValidateLoginByUserNamePassword').subscribe((result) => {
                  console.log(result);
                  this.dbService.dismissLoader();

                  if (result[`status`] == 'error') {

                       this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

                  } else {

                      const loginData = {
                          loginType: result[`loginType`],
                          loginId: result[`loginId`],
                          loginName: result[`loginName`],
                          loginStatus: result[`loginStatus`]
                      };

                      localStorage.setItem('loginData', JSON.stringify(loginData));

                      console.log(JSON.parse(localStorage.getItem('loginData')));

                      this.route.navigate(['/customer']);

                      setTimeout(() => {
                        this.dbService.onShowAlertMessage('Success', 'Login Successful!');

                      }, 1000);
                  }
           });

      }
  }


  get f() { return this.registerForm.controls; }

}
