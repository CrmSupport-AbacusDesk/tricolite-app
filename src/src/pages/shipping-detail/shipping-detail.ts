import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, App } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-shipping-detail',
  templateUrl: 'shipping-detail.html',
})
export class ShippingDetailPage {
  karigar_gift_id:any='';
  shipped_detail:any={};
  gift_detail:any={};
  loading:Loading;
  receive_status:any='';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,public alertCtrl:AlertController,private app: App) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingDetailPage');
    this.karigar_gift_id = this.navParams.get('id');
    this.getShippedDetail();
    this.getGiftDetail();
    this.presentLoading();
    
  }
  getShippedDetail()
  {
    this.service.post_rqst({'karigar_gift_id' :this.karigar_gift_id},'app_karigar/shippedDetail').subscribe( r =>
      {
        console.log(r);
        if(r['shipped'])this.shipped_detail=r['shipped'];
      });
    }
    presentLoading() 
    {
      this.loading = this.loadingCtrl.create({
        content: "Please wait...",
        dismissOnPageChange: true
      });
      this.loading.present();
    }
    getGiftDetail()
    {
      console.log();
      this.service.post_rqst({'gift_id' :this.karigar_gift_id,'karigar_id':this.service.karigar_id},'app_karigar/giftDetail').subscribe( r =>
        {
          console.log(r);
          this.loading.dismiss();
          this.gift_detail=r['gift'];
          if(r['karigar_gift'] != null)
          {
            this.receive_status=r['karigar_gift'].receive_status;
          }
          console.log(this.receive_status);
          console.log(this.gift_detail);
          this.gift_detail.coupon_points = parseInt( this.gift_detail.coupon_points );
        });
      }
      recvConfirmation(gift_id)
      {
        let alert=this.alertCtrl.create({
          title:'Confirmation!',
          subTitle: 'Did you receive this gift?',
          cssClass:'action-close',
          
          buttons: [{
            text: 'No',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text:'Yes',
            cssClass: 'close-action-sheet',
            handler:()=>
            {
              console.log(gift_id);
              this.service.post_rqst({'id':gift_id,'karigar_id':this.service.karigar_id},'app_karigar/redeemReceiveStatus').subscribe(r=>
                {
                  console.log(r);
                  this.showSuccess('You have receive gift successfully')
                  this.navCtrl.setRoot(TabsPage,{index:'3'});
                });
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
        
        ionViewDidLeave() {
          
          let nav = this.app.getActiveNav();
          
          if(nav && nav.getActive()) {
            
            let activeView = nav.getActive().name;
            
            let previuosView = '';
            if(nav.getPrevious() && nav.getPrevious().name) {
              previuosView = nav.getPrevious().name;
            }
            
            console.log(previuosView);
            
            console.log(activeView);
            console.log('its leaving');
            
            if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage')) {
              
              console.log(previuosView);
              this.navCtrl.popToRoot();
            }
          }
          
        }
        
      }
      