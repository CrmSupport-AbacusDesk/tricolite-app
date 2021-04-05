import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { GiftDetailPage } from '../gift-gallery/gift-detail/gift-detail';


@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  offer_id:any='';
  offer_detail:any={};
  gift_list:any='';
  balance_point:any='';
  loading:Loading;
  offer_balance:any='';


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController ,private app : App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
    this.presentLoading();
    this.offer_id=this.navParams.get('id')
    this.getofferDetail(this.offer_id);
  }

  doRefresh(refresher) 
  {
    console.log('Begin async operation', refresher);
    this.getofferDetail(this.offer_id); 
    refresher.complete();
  }

  goOntermsPage(id){
    this.navCtrl.push(TermsPage, {'id':id});
  }

  goOnGiftDetail(id){
    console.log(id);
  	this.navCtrl.push(GiftDetailPage,{'id':id})
  }

  goOnGiftDetail1(){
    // console.log(id);
  	this.navCtrl.push(GiftDetailPage)
  }

  toInt(i){
    console.log(i);
    
    return parseInt(i);
  }
  
  getofferDetail(offer_id)
  {
   console.log(offer_id);
   this.service.post_rqst({'offer_id':offer_id,'karigar_id':this.service.karigar_id},'app_karigar/offerDetail').subscribe(r=>
    {
      console.log(r);
      this.loading.dismiss();
      this.offer_detail=r['offer'];
      this.offer_balance=parseInt(r['gift'][0].offer_balance);
      this.gift_list=r['gift'];
      this.balance_point=parseInt(r['karigar'].balance_point);
      // for gift active class
      for (let i = 0; i < this.gift_list.length; i++) 
      {
        this.gift_list[i].coupon_points = parseInt( this.gift_list[i].coupon_points);
      }
      // end
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
