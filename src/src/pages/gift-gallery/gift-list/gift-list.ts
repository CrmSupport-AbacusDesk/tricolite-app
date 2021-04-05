import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, App } from 'ionic-angular';
import { GiftDetailPage } from '../gift-detail/gift-detail';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';


@IonicPage()
@Component({
  selector: 'page-gift-list',
  templateUrl: 'gift-list.html',
})
export class GiftListPage {
  filter:any={};
  id:any='';
  gift_list:any=[];
  balance_point:any='';
  loading:Loading;
  mode:any='';
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController,private app: App) {
    this.mode = this.navParams.get('mode');
    if(this.mode)
    {
      this.mode= this.mode;
      console.log(this.mode);
    }
    else{
      this.mode= '';
      console.log( this.mode);
      
    }
    
  }
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GiftListPage');
    this.presentLoading();
  }
  ionViewWillEnter()
  {
    this.getGiftList('');
  }
  
  doRefresh(refresher) 
  {
    console.log('Begin async operation', refresher);
    this.getGiftList(''); 
    refresher.complete();
  }
  
  goOnGiftDetail(id){
    this.navCtrl.push(GiftDetailPage,{'id':id})
  }
  
  getGiftList(search)
  {
    this.filter.limit=0;
    this.filter.search=search;
    this.filter.redeemable = this.mode;
    console.log(this.filter.search);
    this.service.post_rqst({'filter' : this.filter,'karigar_id':this.service.karigar_id},'app_karigar/giftList').subscribe( r =>
      {
        console.log(r);
        this.loading.dismiss();
        this.gift_list=r['gift'];
        this.balance_point=parseInt(r['karigar'].balance_point);
        // for gift active class
        for (let i = 0; i < this.gift_list.length; i++) 
        {
          this.gift_list[i].coupon_points = parseInt( this.gift_list[i].coupon_points);
          this.gift_list[i].offer_balance = parseInt( this.gift_list[i].offer_balance);
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
    flag:any='';
    loadData(infiniteScroll)
    {
      console.log('loading');
      
      this.filter.limit=this.gift_list.length;
      this.service.post_rqst({'filter' : this.filter,'karigar_id':this.service.karigar_id},'app_karigar/giftList').subscribe( r =>
        {
          console.log(r);
          if(r=='')
          {
            this.flag=1;
          }
          else
          {
            setTimeout(()=>{
              this.gift_list=this.gift_list.concat(r['gift']);
              console.log('Asyn operation has stop')
              infiniteScroll.complete();
            },1000);
          }
        });
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
          
          if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' ||activeView =='MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
            
            console.log(previuosView);
            this.navCtrl.popToRoot();
          }
        }
        
      }
    }
    