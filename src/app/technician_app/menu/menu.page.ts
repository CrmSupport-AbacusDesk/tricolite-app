import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  profileData: any = {};

  constructor(private router: Router,
              private alertCtrl: AlertController,
              public dbService: DbServiceService) { }

  ngOnInit() {

  }


  onGetProfileDataHandler(showLaoding) {

      const inputData = {};

      if (showLaoding) {
        this.dbService.presentLoader();
      }

      this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe((result) => {

            console.log(result);

            if (showLaoding) {
              this.dbService.dismissLoader();
            }

            this.profileData = result[`loginData`];
      });
  }

  ionViewWillEnter() {

        this.onGetProfileDataHandler(false);
  }

  GoToProfile(){
    this.router.navigateByUrl('/technicians/menu/profile');
  }

  GoToDocuments(){
    this.router.navigateByUrl('/technicians/menu/documents')
  }

  async onLogoutHandler() {

    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Are You Sure, You Want To Logout ?',
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

                    localStorage.removeItem('loginData');

                    const routeURL = '/loginType';
                    this.router.navigate([routeURL]);

                    this.dbService.presentToast('Logout Successful!');

              }
            }
        ]
    });

    await alert.present();

  }
  
}
