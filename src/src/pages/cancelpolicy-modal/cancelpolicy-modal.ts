import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController, Loading,Nav } from 'ionic-angular';
import { CancelationPolicyPage } from '../cancelation-policy/cancelation-policy';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TransactionPage } from '../transaction/transaction';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
    selector: 'page-cancelpolicy-modal',
    templateUrl: 'cancelpolicy-modal.html',
})
export class CancelpolicyModalPage {
    @ViewChild(Nav) nav: Nav;
    data:any={};
    otp_value:any='';
    karigar_id:any=''
    otp:any='';
    karigar_detail:any={};
    gift_id:any='';
    gift_detail:any='';
    loading:Loading;
    
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public service:DbserviceProvider,public alertCtrl:AlertController,public loadingCtrl:LoadingController) {
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad CancelpolicyModalPage');
        this.karigar_id = this.navParams.get('karigar_id');
        console.log(this.karigar_id);
        this.gift_id = this.navParams.get('gift_id');
        console.log(this.gift_id);
        this.getOtpDetail();
        this.presentLoading();
    }
    
    
    dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }
    
    goOnCancelationPolicy(){
        this.navCtrl.push(CancelationPolicyPage)
    }
    
    getOtpDetail()
    {
        console.log('otp');
        this.service.post_rqst({'karigar_id':this.service.karigar_id,'gift_id':this.gift_id},'app_karigar/sendOtp')
        .subscribe((r)=>
        {
            console.log(r);
            this.loading.dismiss();
            this.otp=r['otp'];
            console.log(this.otp);
            this.karigar_detail=r['karigar'];
            this.gift_detail=r['gift'];
        });
    }
    resendOtp()
    {
        this.service.post_rqst({'karigar_id':this.service.karigar_id,'gift_id':this.gift_id},'app_karigar/sendOtp')
        .subscribe((r)=>
        {
            
            console.log(r);
            this.otp=r['otp'];
            console.log(this.otp);
        });
    }
    
    otpvalidation() 
    {
        this.otp_value=false;
        if(this.data.otp==this.otp)
        {
            this.otp_value=true
        }
    }
    
    submit()
    {
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        this.service.post_rqst( {'karigar_id':this.service.karigar_id ,"gift_id": this.gift_id,'offer_id':this.gift_detail.offer_id},'app_karigar/redeemRequest')
        .subscribe( (r) =>
        {
            this.loading.dismiss();
            console.log(r);
            if(r['status']=="SUCCESS")
            {
                this.navCtrl.setRoot(TabsPage,{index:'3'});
                this.showSuccess("Redeemed Request Sent Successfully");
            }
            else if(r['status']=="EXIST")
            {
                this.showAlert(" Already Redeemed!");
            }
        });
    }
    showAlert(text) {
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
                text:'OK',
                cssClass: 'close-action-sheet',
                handler:()=>{
                    // this.navCtrl.push(TransactionPage);
                }
            }]
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
            dismissOnPageChange: false
        });
        this.loading.present();
    }
    ionViewDidLeave()
    {
        console.log('leave');
        this.dismiss()
    }
}
