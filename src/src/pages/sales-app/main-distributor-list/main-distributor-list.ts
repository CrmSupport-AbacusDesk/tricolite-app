import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { LeadsDetailPage } from '../../leads-detail/leads-detail';



@IonicPage()
@Component({
  selector: 'page-main-distributor-list',
  templateUrl: 'main-distributor-list.html',
})
export class MainDistributorListPage {
  
  user_right:any=[];
  DrType:any
  distributor_list:any = [];
  load_data:any = "0";
  limit=0;
  flag:any='';
  search:any;
  distributor_details:any = [];
  distributor_checkin:any = [];
  distributor_order:any=[];

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public service: MyserviceProvider, 
              public loadingCtrl: LoadingController) 
  {
    console.log(this.navParams.get('type'));
    this.DrType = this.navParams.get('type')
    this.get_distributor_list();
  }

  doRefresh (refresher)
  { 
    if(this.search)  
    this.search={}
    
    this.limit=0
    
      this.get_distributor_list() 
      setTimeout(() => {
          refresher.complete();
      }, 1000);
  }
  
  
  get_distributor_list()
  {
    console.log(this.DrType);

    this.service.show_loading()
    this.service.addData({'limit':this.limit,'company_name':this.search,type:this.DrType},'Distributor/distributor_lists').then((result)=>{
      console.log(result);
      this.distributor_list = result;
      
      if(this.distributor_list.length == 0)
      {
        this.load_data = "1";
      }
      this.service.dismiss();
    },
    er=>
    {
      this.service.dismiss()
      this.service.errToasr()
    });
  }
  
  
  loadData(infiniteScroll)
  {
    console.log('loading');
    
    this.service.addData({'limit':this.distributor_list.length,type:this.DrType},'Distributor/distributor_lists').then( result=>
      {
        console.log(result);
        if(result=='')
        {
          this.flag=1;
        }
        else
        {
          setTimeout(()=>{
            this.distributor_list=this.distributor_list.concat(result);
            console.log('Asyn operation has stop')
            infiniteScroll.complete();
          },1000);
        }
      });
  }
    
    
    
  distributor_detail(dr_id)
  {
    this.navCtrl.push(LeadsDetailPage,{'dr_id':dr_id,'type':'Dr'})    
  }
     
  
    
  }
  