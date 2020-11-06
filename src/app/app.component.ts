import { Component, ViewChild, AfterViewInit, Directive, QueryList, ViewChildren } from '@angular/core';

import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlets: IonRouterOutlet;

  navLinksArray = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route: Router,
    private location: Location,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public dbService: DbServiceService,
    public push: Push
  ) {

        this.initializeApp();
        // this.initPushNotification();

  }

  initializeApp() {

    this.platform.ready().then(() => {

        this.statusBar.styleDefault();
        this.splashScreen.hide();

        const loginData = JSON.parse(localStorage.getItem('loginData'));

        console.log(loginData);

        if (loginData && loginData[`loginId`]) {

              const inputData = {};

              this.dbService.presentLoader();

              this.dbService.onPostRequestHandler(inputData, 'login/onValidateLoginById').subscribe((result) => {

                    console.log(result);

                    setTimeout(() => {
                      this.dbService.dismissLoader();
                    }, 3000);

                    if (result[`status`] == 'error') {

                          localStorage.removeItem('loginData');
                          this.route.navigate(['/loginType']);

                    } else {

                          const updatedLoginData = {
                            loginType: result[`loginType`],
                            loginId: result[`loginId`],
                            loginName: result[`loginName`],
                            loginStatus: result[`loginStatus`]
                          };

                          localStorage.setItem('loginData', JSON.stringify(updatedLoginData));

                          if (loginData[`loginType`] == 'Technician') {

                               this.route.navigate(['/technicians']);
                          }

                          if (loginData[`loginType`] == 'Customer') {

                              this.route.navigate(['/customer']);
                          }
                    }


              });

        } else {

             this.route.navigate(['/loginType']);
        }


        this.platform.backButton.subscribeWithPriority(0, () => {

                console.log('hello');
                console.log(this.route.url);

            // tslint:disable-next-line:max-line-length
                if (this.route.url === '/loginType'  || this.route.url === '/technicians/home' || this.route.url === '/customer/home'  || this.route.url == '/customer/aboutus') {

                        if (this.dbService.backButton == 0 )  {

                            console.log('hello2');
                            this.dbService.backButton = 1;

                            this.dbService.presentToast('Press again to exit!');

                            setTimeout(() =>  {

                                this.dbService.backButton = 0;

                            }, 2500);

                        } else {

                            console.log('hello1');
                            navigator[`app`].exitApp();
                        }
                    // tslint:disable-next-line:max-line-length triple-equals
                } else if (this.route.url === '/technicians/complaints' || this.route.url == '/technicians/commissioning' || this.route.url == '/technicians/menu') {

                     this.route.navigateByUrl('/technicians/home');


                    // tslint:disable-next-line:triple-equals
                } else if (this.route.url === '/customer/request' || this.route.url == '/customer/projects') {

                  this.route.navigateByUrl('/customer/home');


                }  else {

                     this.location.back();
                }
        });
    });
  }

  initPushNotification() {
    this.push.hasPermission()
    .then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
      } else {
        console.log('We don\'t have permission to send push notifications');
      }
    });

    // to initialize push notifications
    const options: PushOptions = {
      android: {
        senderID: '590596859248',
        icon: './assets/imgs/logo_small'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification')
    .subscribe((notification) => {
      console.log('Received a notification', notification);

      // Notification Display Section
      let confirmAlert = this.alertCtrl
      .create({
        message: JSON.stringify(notification.message),
        buttons:
        [{
          text: 'Ignore',
          role: 'cancel'
        },
        {
          text: 'View',
          handler: () => {
            // TODO: Your logic here
            console.log('View Notification');

          }
        }]
      });
    });

    pushObject.on('registration')
    .subscribe((registration) =>{
      console.log('Device registered', registration);
      console.log('Device Token', registration.registrationId);
      // this.dbService.onPostRequestHandler({'registration_id':registration.registrationId },'task/update_token_static')
      // .subscribe((r)=>
      // {
      //   console.log(r);
      // });
    });

    pushObject.on('error')
    .subscribe((error) =>
    console.error('Error with Push plugin', error));
  }

}

