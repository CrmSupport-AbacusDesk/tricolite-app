import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController, Loading, LoadingController, Events } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import * as jwt_decode from "jwt-decode";
import { TabsPage } from './../../../pages/tabs/tabs';
import {AboutusModalPage} from '../../aboutus-modal/aboutus-modal'
import { Storage } from '@ionic/storage';
import { HomePage } from '../../home/home';
import { MobileLoginPage } from '../mobile-login/mobile-login';
import {Observable} from 'rxjs/Rx';


@IonicPage()
@Component({
    selector: 'page-otp',
    templateUrl: 'otp.html',
})
export class OtpPage {
    karigar_detail:any={};
    resendActiveClass:any=false;
    prv_otp:any=0;
    otp_value:boolean=false;
    data:any={};
    mobile_no:any=0;
    tokan_value:any='';
    tokenInfo:any='';
    loading:Loading;
    loginType:any;
    form:any={};
    constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public alertCtrl:AlertController,public modalCtrl: ModalController, private storage:Storage,public loadingCtrl:LoadingController,public event:Events) {
        
    }
    
    ionViewDidLoad()
    {
        console.log('ionViewDidLoad OtpPage');
        this.mobile_no = this.navParams.get('mobile_no');
        this.prv_otp = this.navParams.get('otp');
        this.loginType = this.navParams.get('loginType');
        console.log(this.prv_otp);
        this.time_counter();
    }
    
    countDown;
    counter = 30*60;
    tick = 1000;
    time_counter()
    {
        this.countDown = Observable.timer(0, this.tick)
        .take(this.counter)
        .map(() => {--this.counter;
            // console.log(this.counter)
            if(this.counter == 0)
            {
                this.prv_otp = Math.floor(100000 + Math.random() * 900000);
            }
        })
    }
    
    
    maxtime:any=30;
    maxTime:any = 0;
    hidevalue:boolean = false;
    timer:any;
    StartTimer()
    {
        this.timer = setTimeout((x) => 
        {
            if(this.maxtime <= 0) { }
            this.maxTime -= 1;
            
            if(this.maxTime>0){
                this.hidevalue = true;
                this.StartTimer();
            }
            else{
                this.maxtime = 30;
                this.hidevalue = false;
            }
        }, 1000);
    }
    
    otpvalidation() 
    {
        if(this.data.otp==this.prv_otp)
        {
            this.otp_value=true
        }
        else
        {
            this.otp_value=false;
        }
    }
    bck()
    {
        this.navCtrl.push(MobileLoginPage);        
    }
    
    submit()
    {
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        this.service.post_rqst({'mobile_no': this.mobile_no ,'mode' :'App'},'auth/login')
        .subscribe( (r) =>
        {
            console.log(r);
            this.loading.dismiss();
            if(r['status'] == 'NOT FOUND'){
                
                this.navCtrl.push(RegistrationPage,{'mobile_no':this.mobile_no,'loginType':this.loginType})
                return;
            } else if(r['status'] == 'ACCOUNT SUSPENDED'){
                
                this.showAlert("Your account has been suspended");
                this.navCtrl.push(MobileLoginPage);
                return;
            } 
            else if(r['status'] == 'SUCCESS')
            {
                this.storage.set('loginType','CMS'); 
                
                this.storage.set('token',r['token']); 
                this.storage.set('karigar_info',r['user']); 
                this.service.karigar_id=r['user'].id;
                this.service.karigar_status=r['user'].status;
                this.service.karigar_info=r['user'];
                console.log("hello");
                this.event.publish("login");
                this.navCtrl.push(TabsPage);
                
                console.log(this.service);
                console.log("after");
                
                if( r['user'].status !='Verified')
                {
                    let contactModal = this.modalCtrl.create(AboutusModalPage);
                    contactModal.present();
                    
                }
            }
        });
    }
    
    resendOtp()
    {
        this.presentLoading();
        this.maxTime=30;
        this.StartTimer();
        if(this.counter == 0)
        {
            this.counter = 30*60;;
            this.time_counter();
        }
        this.form.mobile_no = this.mobile_no;
        this.form.otp = this.prv_otp;
        
        this.service.post_rqst({'login_data': this.form},'app_karigar/karigarLoginOtp_new')
        .subscribe((r)=>
        {
            console.log(r);
            if(r['status'] == "SUCCESS")
            {
                this.showSuccess("OTP has been send.")
                this.prv_otp=r['otp'];
            }
            this.loading.dismiss();
        },err=>
        {
            this.loading.dismiss();
            this.showSuccess("Error..!!!")
            
        });
        this.resendActiveClass=true;
        setTimeout(()=>{
            this.resendActiveClass=false;
        },30000);
    }
    
    getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
    }
    
    showAlert(text)
    {
        let alert = this.alertCtrl.create({
            title:'Alert!',
            cssClass:'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
    showSuccess(text)
    {
        let alert = this.alertCtrl.create({
            title:'Success!',
            cssClass:'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
    presentLoading() 
    {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: true
        });
        this.loading.present();
    }
    
    MobileNumber(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
