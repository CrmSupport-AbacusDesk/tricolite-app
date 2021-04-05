import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyserviceProvider } from '../../../providers/myservice/myservice';
import { ConstantProvider } from '../../../providers/constant/constant';


@IonicPage()
@Component({
  selector: 'page-announcement-detail',
  templateUrl: 'announcement-detail.html',
})
export class AnnouncementDetailPage 
{
  noticeId:any='';
  announcementDetail:any={}
  image_url:any=''

  constructor(
             public navCtrl: NavController, 
             public navParams: NavParams,
             public db:MyserviceProvider,
             public constant:ConstantProvider
             ) 
  {
    this.noticeId=this.navParams.get("id");
    this.image_url = this.constant.upload_url + 'notices/'
    this.getAnnouncementDetail();
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad AnnouncementDetailPage');
  }

  getAnnouncementDetail()
  {
        this.db.show_loading();
        this.db.addData({'noticeId':this.noticeId},"Announcement/announcement_detail").then(resp=>
        {
            console.log(resp);
            this.announcementDetail= resp;
            this.db.dismiss();
            
        },err=>
        {
            this.db.dismiss()
            this.db.errToasr()
        })
  }

}
