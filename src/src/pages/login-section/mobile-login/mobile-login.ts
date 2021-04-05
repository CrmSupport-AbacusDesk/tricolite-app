import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Loading, LoadingController } from 'ionic-angular';
import { OtpPage } from '../otp/otp';
import { RegistrationPage } from '../registration/registration';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
// import { SelectRegistrationTypePageModule } from '../../select-registration-type/select-registration-type.module';
import { SelectRegistrationTypePage } from '../../select-registration-type/select-registration-type';


@IonicPage()
@Component({
    selector: 'page-mobile-login',
    templateUrl: 'mobile-login.html',
})
export class MobileLoginPage {
    data:any={};
    otp:any='';
    loading:Loading;
    loginType:any='';
    
    constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public alertCtrl:AlertController,public loadingCtrl:LoadingController) {
        this.loginType = this.navParams.get('registerType');
        console.log(this.loginType);
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad MobileLoginPage');
    }
    bck()
    {
        this.navCtrl.push(SelectRegistrationTypePage);
    }
    
    
    submit()
    {
        this.presentLoading();
        this.data.otp = Math.floor(100000 + Math.random() * 900000);
        console.log(this.data);
        this.service.post_rqst({'login_data': this.data },'app_karigar/karigarLoginOtp_new')
        .subscribe((r)=>
        {
            console.log(r);
            this.loading.dismiss();
            if(r['status'] == 'REQUIRED MOBILE NO')
            {
                this.RequiredAlert("Please enter Mobile No to continue.");
                return false;
            }
            else if(r['status'] == "SUCCESS")
            {
                this.otp=r['otp'];
                this.navCtrl.push(OtpPage,{'otp':this.data.otp,'mobile_no':this.data.mobile_no,'loginType':this.loginType});
            }
        });
    }
    
    showAlert(text)
    {
        let alert = this.alertCtrl.create({
            title:'Alert!',
            cssClass:'action-close',
            subTitle: text,
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text:'Register',
                cssClass: 'close-action-sheet',
                handler:()=>{
                    this.navCtrl.push(RegistrationPage,{'mobile_no':this.data.mobile_no})
                }
            }]
        });
        alert.present();
    }

    
    RequiredAlert(text)
    {
        let alert = this.alertCtrl.create({
            title:'Alert!',
            cssClass:'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
    
    MobileNumber(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    
    registration()
    {
        this.navCtrl.push(RegistrationPage);
    }
    
    presentLoading() 
    {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    }
}
