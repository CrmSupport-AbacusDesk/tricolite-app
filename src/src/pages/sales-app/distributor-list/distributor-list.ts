import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App, ModalController } from 'ionic-angular';
import { DistributorDetailPage } from '../distributor-detail/distributor-detail';
import { AddLeadsPage } from '../add-leads/add-leads';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { ViewProfilePage } from '../../view-profile/view-profile';
import { ConstantProvider } from '../../../providers/constant/constant';
import { LeadsDetailPage } from '../../leads-detail/leads-detail';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-distributor-list',
  templateUrl: 'distributor-list.html',
})
export class DistributorListPage {
    date:any

  today_checkin:any=[];
  user_data:any={};
  start:any=0;
  limit:any=10;
  flag:any='';
  filter:any={};
  load_data:any
  distributor_lead_count:any
  dealer_lead_count:any
  userId:any
  constructor( private app:App,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public db:MyserviceProvider,public constant:ConstantProvider,public loadingCtrl: LoadingController)
  {
    this.date = moment(this.date).format('YYYY-MM-DD');
    this.userId = this.navParams.get('userId');
}
  ionViewWillEnter()
  {
    this.filter.type=3
      this.user_data = this.constant.UserLoggedInData;
      console.log(this.constant.UserLoggedInData);
      
      this.get_assign_dr(3)

  }

  viewProfiePic(src)
  {
    this.modalCtrl.create(ViewProfilePage, {"Image": "http://phpstack-83335-1428632.cloudwaysapps.com/uploads/"+src}).present();
  }
  dr_list:any=[];
  get_assign_dr(type)
  {
      this.load_data=0

      this.db.show_loading();
      this.db.addData({user_data:this.user_data,"start":this.start,"limit":this.limit,"search":this.filter,type:type,'userId':this.userId},"dealerData/get_assign_lead")
      .then(resp=>{
          console.log(resp);
          this.db.dismiss()
          this.dr_list = resp['dr_list'];
          this.distributor_lead_count = resp['distributor_lead_count'];
          this.dealer_lead_count = resp['dealer_lead_count'];
          if(!this.dr_list.length)
          {
              this.load_data=1
          }
      },
      err=>
      {
          this.db.dismiss();
          this.db.errToasr()
      })
  }
  get_assign_drsearch()
  {
      this.load_data=0

      this.db.addData({user_data:this.user_data,"start":this.start,"limit":this.limit,"search":this.filter},"dealerData/get_assign_lead")
      .then(resp=>{
          console.log(resp);
          this.dr_list = resp['dr_list'];
          this.distributor_lead_count = resp['distributor_lead_count'];
          this.dealer_lead_count = resp['dealer_lead_count'];
          if(!this.dr_list.length)
          {
              this.load_data=1
          }
      },
      err=>
      {
          this.db.errToasr()
      })
  }
  
  loadData(infiniteScroll)
  {
      console.log('loading');
      this.start = this.dr_list.length;
      this.db.addData({user_data:this.user_data,"start":this.start,"limit":this.limit,"search":this.filter},"dealerData/get_assign_dr")
      .then((r) =>{
          console.log(r);
          if(r['dr_list']=='')
          {
              this.flag=1;
          }
          else
          {
              setTimeout(()=>{
                  this.dr_list=this.dr_list.concat(r['dr_list']);
                  console.log('Asyn operation has stop')
                  infiniteScroll.complete();
              },1000);
          }
      });
  }
  
  dealer_details:any = [];
  dealer_checkin:any = [];
  dealer_order:any = [];
  
  edit_dis:boolean = false;
  dealer_detail(dr_id)
  {
     this.navCtrl.push(LeadsDetailPage,{'dr_id':dr_id,'type':'Lead'})
  }
  ionViewDidLeave()
  {
      let nav = this.app.getActiveNav();
      console.log(nav);
      
      if(nav && nav.getActive()) 
      {
          let activeView = nav.getActive().name;
          console.log(activeView);
          
          let previuosView = '';
          console.log(previuosView);
          
          if(nav.getPrevious() && nav.getPrevious().name)
          {
              previuosView = nav.getPrevious().name;
          }  
          console.log(previuosView); 
          console.log(activeView);  
          console.log('its leaving');
          if((previuosView=='DealerExecutiveAppPage')) 
          {
              this.navCtrl.popToRoot();
          }
      }
  }
  add_dealer_lead()
  {
    this.navCtrl.push(AddLeadsPage,{'dealer_type':3});
  }
  doRefresh (refresher)
  {   
    this.filter.master=null
    this.filter={}
    this.limit=0
    this.start=0
    
      this.get_assign_dr(3) 
      setTimeout(() => {
          refresher.complete();
      }, 1000);
  }
}
