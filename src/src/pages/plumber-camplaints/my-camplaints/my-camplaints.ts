import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import {  PulmberCustomerDetailPage } from '../../plumber-camplaints/pulmber-customer-detail/pulmber-customer-detail';


/**
 * Generated class for the MyCamplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-camplaints',
  templateUrl: 'my-camplaints.html',
})
export class MyCamplaintsPage {
  complaint_list : any=[];
  loading:Loading;
  filter:any={}
  complaint_count:any = '';
  flag:any='';
  data:any={};


  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController) {
    this.data.type = this.navParams.get('type');
    console.log(this.data.type  +  'test');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCamplaintsPage');
    this.presentLoading();
    this.getComplaintlist(this.data.type);
  this.filter.status='';

  }

  presentLoading() 
  {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  doRefresh(refresher) 
  {
    console.log('Begin async operation', refresher);
    this.getComplaintlist(this.data.type); 
    refresher.complete();
  }

  getComplaintlist(type)
  {
    this.data.type =type;
    // this.presentLoading();
    this.flag=0;

    this.filter.limit = 0;
    this.service.post_rqst( {'plumber_id':this.service.karigar_id,'filter':this.filter,type:this.data.type },'app_karigar/getPlumberComplaintList').subscribe(response =>
      {
        console.log(response);
        this.loading.dismiss();
        this.complaint_list = response['plumberComplaintList'];
        this.complaint_count =response['complaint_count'];

        console.log(this.complaint_list);
        
        // this.showSuccess("Profile Photo Updated")   
      });
  }

  loadData(infiniteScroll)
  {
    console.log('loading');
    
    this.filter.limit=this.complaint_list.length;
    this.service.post_rqst({'plumber_id':this.service.karigar_id,'filter' : this.filter},'app_karigar/getPlumberComplaintList').subscribe( r =>
      {
        console.log(r);
        if(r['plumberComplaintList']=='')
        {
          this.flag=1;
        }
        else
        {
          setTimeout(()=>{
            this.complaint_list=this.complaint_list.concat(r['plumberComplaintList']);
            console.log('Asyn operation has stop')
            infiniteScroll.complete();
          },1000);
        }
      });
    }


  plumberDetail(id)
  {
    this.navCtrl.push( PulmberCustomerDetailPage,{'id':id});
  }

}
