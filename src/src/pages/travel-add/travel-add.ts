import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, Loading } from 'ionic-angular';
import { MyserviceProvider } from '../../providers/myservice/myservice';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-travel-add',
  templateUrl: 'travel-add.html',
})
export class TravelAddPage {
  
  travel_data:any={};
  today_date = new Date().toISOString().slice(0,10);
  state_list:any=[]
  district_list:any=[];
  channel_partners:any=[];
  travel_list:any=[];
  loading:Loading;  
  
  
  constructor(public navCtrl: NavController,public storage:Storage, public navParams: NavParams,public service: MyserviceProvider, public loadingCtrl: LoadingController , public alertCtrl:AlertController,public toastCtrl: ToastController,) {
  }
  userType:any;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelAddPage');
    this.getStateList();
    this.getChannelPartner();
    this.storage.get('user_type').then((userType) => {
      console.log(userType);
      this.userType  = userType
      
    });
  }
  cpVisitExist:any=false
  areaVisitExist:any=false
  
  getTravelPlan(date)
  {
    this.cpVisitExist=false;
    this.areaVisitExist=false
    this.show_loading();
    this.service.addData({'travel_date':date},'TravelPlan/get_travelPlan').then((result)=>
    {
      console.log(result);
      this.travel_list=result;
      this.loading.dismiss();
      var index = this.travel_list.findIndex(row=>row.travel_type=='Distributor Visit')
      if(index!= -1)
      {
        this.cpVisitExist=true 
      }
      var index2 = this.travel_list.findIndex(row=>row.travel_type!='Distributor Visit')
      if(index2!= -1)
      {
        this.areaVisitExist=true 
      }
    },err=>
    {
      this.loading.dismiss()
      
    })
  }
  
  getStateList()
  {
    this.service.addData({},'TravelPlan/state_list').then((result)=>
    {
      console.log(result);
      this.state_list= result;
      
    },err=>
    {
      
    }); 
  }
  
  getDstrictList()
  {
    this.show_loading()
    
    this.service.addData({'state_name':this.travel_data.state},'TravelPlan/district_list').then((result)=>
    {
      this.loading.dismiss()
      console.log(result);
      this.district_list=result;
    },err=>
    {
      this.loading.dismiss()
      
    }); 
  }
  
  getChannelPartner()
  {
    
    this.service.addData({},'TravelPlan/distributors_list').then((result)=>
    {
      console.log(result);
      this.channel_partners=result;
      
    },err=>
    {
      
    });
  }
  
  addTravelPlan()
  {
    var planExist = false
    if(this.travel_data.travel_type != 'Area Visit')
    {
      var index = this.travel_list.findIndex(row=>row.dr_id==this.travel_data.dr_id)
      console.log(index);
      if(index!= -1){
        planExist=true
      }
    }
    else
    {
      var index2 = this.travel_list.findIndex(row=> row.state==this.travel_data.state && row.district ==this.travel_data.district)
      console.log(index2);
      if(index2 != -1){
        planExist=true
      }
    }
    console.log(planExist);
    if(planExist)
    {
      this.service.presentToast('Travel Plan Already Exists !!')
      return
    }
    
    this.show_loading();
    
    console.log(this.travel_data);
    if(this.travel_data.travel_type == 'Area Visit')
    {
      this.travel_data.dr_id ='';     
    }
    else{
      this.travel_data.state ='';
      this.travel_data.district ='';
    }
    
    this.service.addData(this.travel_data,'TravelPlan/add_travelPlan').then((result)=>
    {
      this.loading.dismiss()
      
      let toast = this.toastCtrl.create({
        message: 'Travel Plan Saved Successfully!',
        duration: 3000
      });
      console.log(result);
      if(result=='success')
      { 
        toast.present();
        this.getTravelPlan(this.travel_data.travel_date);
        this.travel_data.travel_type = '';
        this.travel_data.dr_id =''; 
        this.travel_data.state ='';
        this.travel_data.district ='';
      }
      
    },err=>
    {
      this.loading.dismiss()
      
    });
    
  }
  
  deleteTravelPlan(id,i,flag)
  {
    
    if(flag=='1')
    {
      this.presentAlert('Already Visted')
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Delete Travel Plan',        
        message: 'Do you want to delete travel plan?',
        cssClass: 'alert-modal',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              
              this.service.addData({'id':id},'TravelPlan/deleteTravelPlan').then((result)=>
              {
                let toast = this.toastCtrl.create({
                  message: 'Travel Plan Deleted!',
                  duration: 3000
                });
                if(result=='success')
                {
                  toast.present();
                  this.travel_list.splice(i,1);
                  this.getTravelPlan(this.travel_data.travel_date);
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
  }
  
  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle:msg ,
      buttons: [          
        {
          text: 'Ok',
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
