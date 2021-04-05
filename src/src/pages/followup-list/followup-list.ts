import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { FollowupAddPage } from '../followup-add/followup-add';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-followup-list',
  templateUrl: 'followup-list.html',
})
export class FollowupListPage 
{
  today_date = new Date().toISOString().slice(0,10);
  followupList:any=[];
  selected_date =new Date().toISOString().slice(0,10);
  loading:Loading;  
  userId:any;
  requestSend:any = false;

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public service: MyserviceProvider, 
              public loadingCtrl: LoadingController,
              public alertCtrl:AlertController,
              public toastCtrl: ToastController) 
  {
    this.userId = this.navParams.get('userId');
  }
  
  ionViewWillEnter() 
  {  

    this.getFollowup(this.selected_date);
  }
  
  goOnAddFollowup(){
    this.navCtrl.push(FollowupAddPage,{})
  }
  
  
  nextDate()
  { 
    console.log( this.selected_date);
    this.selected_date = moment(this.selected_date).add(1, 'days').format('YYYY-M-D'); 
    console.log( this.selected_date);
    this.getFollowup(this.selected_date );
    
  }
  
  previousDate()
  {
    this.selected_date = moment(this.selected_date).subtract(1, "days").format('YYYY-M-D');
    this.getFollowup(this.selected_date );
  }

  getFollowup(date)
  {
    console.log(date);
    this.requestSend=false
    this.show_loading();
    this.service.addData({'followup_date':date},'Followup/followup_list').then((result)=>
    {
      console.log(result);
      this.followupList=result;
      this.loading.dismiss();
      this.requestSend=true

    },err=>
    {
      this.loading.dismiss()
      
    })

  }

  deleteFollowUp(id,i)
  {
    
      let alert = this.alertCtrl.create({
        title: 'Delete Follow Up',        
        message: 'Do you want to delete Follow Up?',
        cssClass: 'alert-modal',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              
              this.service.addData({'id':id},'Followup/deleteFollowUp').then((result)=>
              {
                let toast = this.toastCtrl.create({
                  message: 'Follow Up Deleted!',
                  duration: 3000
                });
                if(result=='success')
                {
                  toast.present();
                  this.followupList.splice(i,1);
                  this.getFollowup(this.selected_date);
                }
              }); 
            }
          },
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
            }
          }
        ]
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
