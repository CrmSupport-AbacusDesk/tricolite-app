import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../../../providers/constant/constant';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { AnnouncementDetailPage } from '../announcement-detail/announcement-detail';


@IonicPage()
@Component({
  selector: 'page-announcement-list',
  templateUrl: 'announcement-list.html',
})
export class AnnouncementListPage 
{
  user_data:any={};
  userType:any;
  sendRequest:any=false
  announcementList:any=[];

  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public constant:ConstantProvider,
              public db:MyserviceProvider) 
  {
      if(this.constant.UserLoggedInData.loggedInUserType == 'Employee')
      {
            this.userType='Employee'
      }
      else
      {
            this.userType='drLogin'
      }
          console.log(this.userType);
          
          setTimeout(() => 
          {
             this.getAnnouncementList()
              
          }, 500);
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad AnnouncementListPage');
  }

  deatilPage(id,to_id)
  {
    this.navCtrl.push(AnnouncementDetailPage,{'id':id,'to_id':to_id});
  }

  getAnnouncementList()
  {
        this.db.show_loading();
        this.sendRequest=false
        
        this.db.addData({'userType':this.userType},"Announcement/announcement_list").then(resp=>
        {
            console.log(resp);
            this.announcementList = resp;
            this.sendRequest=true
            this.db.dismiss()
        },err=>
        {
            this.db.dismiss()
            this.db.errToasr()
        })
  }

  doRefresh (refresher)
  {   
    this.getAnnouncementList() 
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

}
