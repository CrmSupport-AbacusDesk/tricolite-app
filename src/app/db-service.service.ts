import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

    private loading: HTMLIonLoadingElement;
    private isShowing = false;
    private user = JSON.parse(localStorage.getItem('loginData')) || [];
    
    // public serverURL: any = 'http://localhost/tricolite/api/index.php/app/';
    // public uploadURL: any = 'http://localhost/tricolite/api/uploads/Task_Doc/';
    // public masterDocURL: any = 'http://localhost/tricolite/api/uploads/Master_Doc/';
    // public customerDocURL: any = 'http://localhost/tricolite/api/uploads/Customer_Doc/';
    // public userDocURL: any = 'http://localhost/tricolite/api/uploads/User_Doc/';
    
    public serverURL: any = 'http://tricolite.abacusdesk.com/api/index.php/app/';
    public uploadURL: any = 'http://tricolite.abacusdesk.com/uploads/Task_Doc/';
    public masterDocURL: any = 'http://tricolite.abacusdesk.com/uploads/Master_Doc/';
    public customerDocURL: any = 'http://tricolite.abacusdesk.com/uploads/Customer_Doc/';
    public userDocURL: any = 'http://tricolite.abacusdesk.com/uploads/User_Doc/';
    public ReportDocURL: any = 'http://tricolite.abacusdesk.com/uploads/Report_Doc/';

    public backButton = 0;

    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController) { }


    public async presentLoader(): Promise<void> {

          if (!this.isShowing) {

              this.loading = await this.loadingCtrl.create({
                  message: `Please Wait....`
              });

              this.isShowing = true;
              console.log(this.loading);
              return await this.loading.present();

          } else {

              this.isShowing = true;
              this.loading.message = 'sasas';
          }
    }

    public async dismissLoader(): Promise<void> {

        console.log(this.loading);

        if (this.loading && this.isShowing) {
            this.isShowing = false;
            await this.loading.dismiss();
        }
    }


    async onShowAlertMessage(title, message) {

          const alert = await this.alertCtrl.create({
              header: title,
              message: message,
              backdropDismiss: false,
              buttons: [
                {
                  text: 'Ok',
                  handler: () => {
                    console.log('Ok Button Clicked!');
                  }
                }
              ]
          });

          await alert.present();
    }

    async presentToast(message) {

          const toast = await this.toastCtrl.create({
              message: message,
              duration: 2000
          });
          
          toast.present();
    }


    numberOnly(event): boolean {

        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        return true;
    }


    onPostRequestHandler(requestData, fn) {

          const headers = new HttpHeaders();
          headers.append('Accept', 'application/json');
          headers.append('Content-Type', 'application/json' );

          const loginData = JSON.parse(localStorage.getItem('loginData'));

          console.log(loginData);
          if (loginData) {
            
              requestData[`loginId`] = loginData[`loginId`];
              requestData[`loginName`] = loginData[`loginName`];
              requestData[`loginType`] = loginData[`loginType`];
          }

          console.log(requestData);

          return this.http.post(this.serverURL + fn, JSON.stringify(requestData), {headers: headers});
    }

}
