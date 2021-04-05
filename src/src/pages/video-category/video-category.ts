import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { VideoPage } from '../video/video';

/**
* Generated class for the VideoCategoryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-video-category',
  templateUrl: 'video-category.html',
})
export class VideoCategoryPage {
  
  constructor(public navCtrl: NavController,public service:DbserviceProvider, public navParams: NavParams) {
    this.getCatData();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoCategoryPage');
  }
  noRec:any=false
  categoryData:any=[];
  getCatData()
  {
    this.service.presentLoading()
    this.service.post_rqst('','app_master/VideoCatData')
    .subscribe( (r) =>
    {
      this.categoryData = r.categories
      console.log(this.categoryData);
      if(this.categoryData.length==0)
      {
        this.noRec=true;
      }
      this.service.dismiss()
    },(error: any) => {
      this.service.dismiss()
    })
  }
  goToVideosPage(cat){
    console.log(cat);
    
    this.navCtrl.push(VideoPage,{cat:cat});
  }
}
