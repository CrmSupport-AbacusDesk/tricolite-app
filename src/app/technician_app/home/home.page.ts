import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dashboardData: any = {};
  profileData: any = {};

  constructor(private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public dbService: DbServiceService,
              public push : Push
              ) {

  }

  ngOnInit() {

       this.onGetDashboardDataHandler();
       this.notification();
  }


  async onDashboardCountClickHandler(targetType) {

          const dashboardCountFilterData = {};
          dashboardCountFilterData[`countFilter`] = targetType;
          localStorage.setItem('dashboardCountFilterData', JSON.stringify(dashboardCountFilterData));
  }


  async onGetDashboardDataHandler() {

         console.log('hello');

         this.dbService.onPostRequestHandler({}, 'dashboard/onGetDashboardData').subscribe((result) => {
                console.log(result);
                
                this.dashboardData = result;


         });
  }

  onGetProfileDataHandler() {

    const inputData = {};

    this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe((result) => {

          console.log(result);

          this.profileData = result[`loginData`];
          console.log(this.profileData.login_blocked);
            
          if ( this.profileData.login_blocked == '1') {
            localStorage.removeItem('loginData');

            const routeURL = '/loginType';
            this.route.navigate([routeURL]);

            this.dbService.presentToast('Your account has been deactivated!');

                    }
    });
 }


 ionViewWillEnter() {

    this.onGetProfileDataHandler();
    this.notification();
 }

 notification()
    {
      // alert("test");
      console.log("bhanu 12345");
      
      const loginData = JSON.parse(localStorage.getItem('loginData'));

        console.log(loginData);
      
      this.push.hasPermission()
      .then((res: any) => {
        
        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }
      });
      
      
      const options: PushOptions = {
        android: {
          senderID:'590596859248'
        },
        ios: {
          
          alert: 'true',
          badge: true,
          sound: true
        },
        windows: {},
        browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
      };
      
      const pushObject: PushObject = this.push.init(options);
      pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
      pushObject.on('registration').subscribe((registration: any) => {
        console.log('Device registered', registration) 
        this.dbService.onPostRequestHandler({'id':loginData.loginId,'registration_id':registration.registrationId},'task/update_token').subscribe(r=>
          {
            console.log(r);
          });
        }
        );
        
        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
      }



      // const pushObject1: PushObject= this.push.init(options1);
      // pushobject1.on('notification').subscribe((notification: any)=>console.log('Reject a notification', notification));





}
