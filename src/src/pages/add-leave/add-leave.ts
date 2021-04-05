import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController,LoadingController } from 'ionic-angular';
import * as moment from 'moment/moment';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { LeaveListPage } from '../leave-list/leave-list';


@IonicPage()
@Component({
  selector: 'page-add-leave',
  templateUrl: 'add-leave.html',
})
export class AddLeavePage {
  data:any={};
  attend_id:any;
  start_time:any='';
  stop_time:any='';
  currentTime:any='';
  sub_list:any=[];
  today_date:any='';
  loading: any;
  
  currentDay:any=''
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:MyserviceProvider, public alertCtrl:AlertController, private toastCtrl: ToastController,public loadingCtrl:LoadingController) 
  {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLeavePage');
    this.currentTime = moment().format("HH:mm:ss");
    this.data.currentDay = moment().format("Y-M-D");
    
    this.today_date = new Date().toISOString().slice(0,10);
    console.log(this.today_date);
    this.data.type = 'Full Day';
  }
  
  add_leave()
  {
    this.show_loading();
    
    this.db.addData({'data':this.data},"leave/add_leave").then(response=>
      {
        console.log(response);

        this.presentToast1();
        this.navCtrl.push(LeaveListPage);
        this.loading.dismiss();
      },err=>
      {
        this.loading.dismiss();
        this.db.errToasr()
      });
    }

    presentToast1() 
    {
      let toast1 = this.toastCtrl.create({
        message: 'Leave Added Successfully',
        duration: 3000,
        position: 'bottom'
      });
  
      toast1.present();
    }
 
    showsuccess(text)
    {
      let alert= this.alertCtrl.create(
        {
          title:'Success!',
          subTitle:text,
          buttons: ['OK']
        });
        alert.present();
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
    