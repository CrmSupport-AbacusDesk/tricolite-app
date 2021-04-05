import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController, App } from 'ionic-angular';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';


@IonicPage()
@Component({
  selector: 'page-point-detail',
  templateUrl: 'point-detail.html',
})
export class PointDetailPage {
  coupon_id:any=''
  coupon_detail:any=''
  loading:Loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,private app:App) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PointDetailPage');
    this.coupon_id = this.navParams.get('id');
    this.getCouponDetail(this.coupon_id);
    this.presentLoading();
    
  }
  getCouponDetail(coupon_id)
  {
    this.service.post_rqst({'coupon_id' :coupon_id,'karigar_id':this.service.karigar_id},'app_karigar/couponDetail').subscribe( r =>
      {
        console.log(r);
        this.loading.dismiss();
        this.coupon_detail=r['coupon'];
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
    ionViewDidLeave()
    {
      let nav = this.app.getActiveNav();
      if(nav && nav.getActive()) 
      {
        let activeView = nav.getActive().name;
        let previuosView = '';
        if(nav.getPrevious() && nav.getPrevious().name)
        {
          previuosView = nav.getPrevious().name;
        }  
        console.log(previuosView); 
        console.log(activeView);  
        console.log('its leaving');
        if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' ||activeView =='MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) 
        {
          
          console.log(previuosView);
          this.navCtrl.popToRoot();
        }
      }
    }
  }
  