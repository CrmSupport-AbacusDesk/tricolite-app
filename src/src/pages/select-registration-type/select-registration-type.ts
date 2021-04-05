import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { MobileLoginPage } from '../login-section/mobile-login/mobile-login';
import { LoginPage } from '../login/login';
// import { EnquiryserviceProvider } from '../../providers/enquiryservice/enquiryservice';
// import { SignupPage } from '../signup/signup';
// import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { RegistrationPage } from '../login-section/registration/registration';
import { CatalogueHomePage } from '../catalogue-home/catalogue-home';


/**
* Generated class for the SelectRegistrationTypePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
    selector: 'page-select-registration-type',
    templateUrl: 'select-registration-type.html',
})
export class SelectRegistrationTypePage {
    
    registerTypeList: any = [];
    data: any = [];
    tokenName:any='';
    loginType:any='';
    token:any='';
    
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public storage: Storage) 
        {
            this.data.registerType = '';
        }
        
        ionViewDidLoad() {
            console.log('ionViewDidLoad SelectRegistrationTypePage');
        }
        
        goToRegisterPage()
        {
            console.log(this.data);
            if(this.data.registerType == 'Employee' || this.data.registerType == 'DrLogin') 
            {
                this.navCtrl.push(LoginPage,{'registerType':this.data.registerType});
            } 
            else if(this.data.registerType == 'registration')
            {
                this.navCtrl.push(RegistrationPage);
            }
            else 
            {
                this.navCtrl.push(MobileLoginPage,{'registerType':this.data.registerType});
            }
            
        }

        goToHome() {
            // go to the MyPage component
            this.navCtrl.push(CatalogueHomePage);
          }
        
    }
    // catalogue-home