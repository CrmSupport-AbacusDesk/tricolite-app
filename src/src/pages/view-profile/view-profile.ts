import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
  profile_pic:any='';
  image_url:any;

       
        constructor(public navCtrl: NavController, public constant:ConstantProvider, public navParams: NavParams,public viewCtrl:ViewController,) {

    this.image_url = this.constant.upload_url + 'Products/'


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProfilePage');
    this.profile_pic=this.navParams.get("Image");
    console.log(this.profile_pic);
    
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }


}
