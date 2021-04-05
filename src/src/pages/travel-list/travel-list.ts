import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { TravelAddPage } from '../travel-add/travel-add';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-travel-list',
  templateUrl: 'travel-list.html',
})
export class TravelListPage {
  
  today_date = new Date().toISOString().slice(0,10);
  travel_list:any=[];
  selected_date =new Date().toISOString().slice(0,10);
  loading:Loading;  
  userId:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: MyserviceProvider, public loadingCtrl: LoadingController,public alertCtrl:AlertController,public toastCtrl: ToastController) 
  {
    this.userId = this.navParams.get('userId');
  }
  
  ionViewWillEnter() 
  {  

    this.getTravelPlan(this.selected_date);
  }
  
  goOnAddTravel(){
    this.navCtrl.push(TravelAddPage,{})
  }
  
  
  nextDate()
  { 
    console.log( this.selected_date);
    this.selected_date = moment(this.selected_date).add(1, 'days').format('YYYY-M-D'); 
    console.log( this.selected_date);
    this.getTravelPlan(this.selected_date );
    
  }
  
  previousDate()
  {
    this.selected_date = moment(this.selected_date).subtract(1, "days").format('YYYY-M-D');
    this.getTravelPlan(this.selected_date );
  }
  cpVisitExist:any=false
  areaVisitExist:any=false
  requestSend:any = false;
  getTravelPlan(date)
  {
    this.cpVisitExist=false;
    this.areaVisitExist=false
    this.requestSend=false
    this.show_loading();
    this.service.addData({'travel_date':date,userId:this.userId},'TravelPlan/get_travelPlan').then((result)=>
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
      this.requestSend=true
    })
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
            handler: () => 
            {
              this.service.addData({'id':id},'TravelPlan/deleteTravelPlan').then((result)=>
              {
                let toast = this.toastCtrl.create({
                  message: 'Travel Plan Deleted!',
                  duration: 3000
                });
                if(result=='success')
                {
                  this.travel_list.splice(i,1);
                  this.getTravelPlan(this.selected_date);
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
  
  show_loading()
  {
    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `<img src="./assets/imgs/gif.svg"/>`,
      dismissOnPageChange: true
    });
    this.loading.present();
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
  
  
}
