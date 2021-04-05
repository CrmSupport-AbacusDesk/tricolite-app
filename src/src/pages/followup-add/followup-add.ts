import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-followup-add',
  templateUrl: 'followup-add.html',
})
export class FollowupAddPage 
{
  followup_data:any={};
  today_date = new Date().toISOString().slice(0,10);
  loading:Loading;  
  drList:any=[];
  followupList:any=[];
   
  constructor(
               public navCtrl: NavController,
               public storage:Storage, 
               public navParams: NavParams,
               public service: MyserviceProvider, 
               public loadingCtrl: LoadingController , 
               public alertCtrl:AlertController,
               public toastCtrl: ToastController,) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowupAddPage');
  }

  getFollowup(date)
  {
    console.log(date);
    this.show_loading();
    this.service.addData({'followup_date':date},'Followup/followup_list').then((result)=>
    {
      console.log(result);
      this.followupList=result;
      this.loading.dismiss();
    },err=>
    {
      this.loading.dismiss()
      
    })

  }

  getDrList(type)
  {
    console.log(type);
    this.drList = [];
    this.service.addData(this.followup_data,'Followup/distributors_list').then((result)=>
    {
      console.log(result);
      this.drList=result;     
    },err=>
    {
      
    });
    
  }

  addFollowup()
  {

    var index = this.followupList.findIndex(row=>row.dr_id==this.followup_data.dr_id)
      console.log(index);
      if(index!= -1)
      {
        this.service.presentToast('Follow Up Already Exists !!')
        return
      }
    this.show_loading();

    this.service.addData(this.followup_data,'Followup/add_followup').then((result)=>
    {
      this.loading.dismiss()
      
      let toast = this.toastCtrl.create({
        message: 'Follow Up Saved Successfully!',
        duration: 3000
      });

      if(result['msg'] == 'success')
      { 
        toast.present();
        this.getFollowup(this.followup_data.followup_date)
        this.followup_data.type = '';
        this.followup_data.dr_type = '';
        this.followup_data.description = '';
        this.followup_data.dr_id = '';
        this.drList = [];

      }
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
                  this.getFollowup(this.followup_data.followup_date);
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
