import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController ,AlertController, Platform,Nav} from 'ionic-angular';
import { LoginserviceProvider } from '../../providers/loginservice/loginservice';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { OtpverifyPage } from '../otpverify/otpverify';
import { SelectRegistrationTypePage } from '../select-registration-type/select-registration-type';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    
    @ViewChild(Nav) nav: Nav;
    
    registerType:any='';
    validations_form: FormGroup;
    register_type:any = {};
    rootPage:any;
    
    form ={ phone:'', otp:0,type:'',registerType:'' };

    constructor(public navCtrl: NavController,public navParams: NavParams,public service:LoginserviceProvider,public FormBuilder: FormBuilder,public LoadingCtrl:LoadingController,public toastCtrl: ToastController,public alertCtrl: AlertController,public platform: Platform, public loadingCtrl: LoadingController) 
    {
        this.register_type = this.navParams.get('registerType1');
        this.registerType = this.navParams.get('registerType');
        console.log(this.registerType);
        
        this.validations_form = FormBuilder.group({
            phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
        })
    }
    
    loading:any = "0";
    loading1:any;
    lodingPersent()
    {
        this.loading1 = this.loadingCtrl.create({
            spinner: 'hide',
            content: `<img src="./assets/imgs/gif.svg" class="h55" />`,
        });
        this.loading1.present();
    }
    
    login_submit()
    {
        // if(this.register_type == undefined)
        // {
            this.lodingPersent();
            if(this.validations_form.invalid)
            {
                this.validations_form.get('phone').markAsTouched();
                return;
            }
            
            // if(this.form.phone == '9667686942'  )
            // {
                this.form.otp = 123456;
            // }
            // else
            // {
            //     this.form.otp = Math.floor(100000 + Math.random() * 900000);
            // }
            
            this.form.registerType = this.registerType;
            console.log(this.form);
            
            this.service.otp_send(this.form)
            .then((response:any)=>{
                if(response['msg'] == 'exist')
                {
                    this.loading1.dismiss();
                    this.navCtrl.push(OtpverifyPage,{data:this.form, otp_data:response['data']});
                }
                else
                {
                    if(response['user_data']!=null)
                    {
                        var msg = 'Mobile Registered as '+response['user_data']['login_type'];
                    }
                    else
                    {
                        var msg = 'Mobile Not Registered';
                    }

                    let alert = this.alertCtrl.create({
                        subTitle: msg,
                        buttons: ['OK']
                    });
                    alert.present();
                    this.loading1.dismiss();
                }
            },err=>
            {
                this.loading1.dismiss();
                
            });
            
            this.loading = "0";
        // }
        
        
        // if(this.register_type != undefined)
        // {
        //     if(this.validations_form.invalid) {
                
        //         this.validations_form.get('phone').markAsTouched();
        //         return;
        //     }
        //     this.form.type = this.register_type.id;
        //     this.service.product_cataloue_app(this.form).then((response:any)=>{
        //         if(response['msg'] == 'exist')
        //         {
        //             this.navCtrl.push(SfaTabsPage);
        //         }
        //         else
        //         {
        //             let alert = this.alertCtrl.create({
        //                 subTitle: 'Mobile Not Registered',
        //                 buttons: ['OK']
        //             });
        //             alert.present();
        //             this.loading1.dismiss();
        //         }
        //     });
        //     this.loading = "0";
        // }
    }
    bck()
    {
        this.navCtrl.push(SelectRegistrationTypePage);
    }
    showError()
    {
        let alert = this.alertCtrl.create({
            title: 'Error!',
            subTitle: 'Please enter correct Mobile!',
            buttons: ['OK']
        });
        alert.present();
    }
    
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    
    homePage()
    {
        this.navCtrl.push(SelectRegistrationTypePage);
    }
    
    register()
    {
        // this.navCtrl.push(SignupPage,{'registerType':this.register_type});
    }
}
