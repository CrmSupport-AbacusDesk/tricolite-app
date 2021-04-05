import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController, App, ToastController } from 'ionic-angular';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { AddLeavePage } from '../add-leave/add-leave';


@IonicPage()
@Component({
  selector: 'page-leave-list',
  templateUrl: 'leave-list.html',
})
export class LeaveListPage {
  [x: string]: any;
  data:any=[];
  leave_data:any = [];
  loading:Loading;  
  load_data:any=0
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:MyserviceProvider,public loadingCtrl:LoadingController,public alertCtrl:AlertController,public app:App, public toastCtrl: ToastController) 
  { 
    this.userId = this.navParams.get('userId');
    this.leave_list();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveListPage');
  }
  
  addPage()
  {
    this.navCtrl.push(AddLeavePage);
  }
  showStatus:any 
  leave_list()
  {
    this.load_data=0
    this.show_loading();
    this.db.addData({userId:this.userId},'Leave/leave_list').then((resp)=>
    {
      console.log(resp[1]);
      this.leave_data = resp[0];
      if(resp[1] == 'OFFICE')
      {
        this.showStatus==false;
      }else
      {
        this.showStatus=true
      }
      this.loading.dismiss();
      this.load_data=1
      this.leave_data.map((item)=>
      {
        item.total_days = parseInt(item.total_days) + 1          
      })
      
    });
  }
  
  doRefresh (refresher)
  {   
    
    
    this.leave_list() 
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }
  
  show_loading()
  {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg"/>`,
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  
  
}
