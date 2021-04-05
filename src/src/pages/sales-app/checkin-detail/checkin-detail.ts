import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ViewProfilePage } from '../../view-profile/view-profile';

/**
 * Generated class for the CheckinDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin-detail',
  templateUrl: 'checkin-detail.html',
})
export class CheckinDetailPage {

  checkin_data:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {


    if(this.navParams.get('data'))
    {
      this.checkin_data = this.navParams.get('data');
      console.log(this.checkin_data);
    }

    if(this.navParams.get('checkin_data'))
    {
      this.checkin_data = this.navParams.get('checkin_data');
      console.log(this.checkin_data);
    }

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinDetailPage');
  }
  viewProfiePic(src)
  {
      this.modalCtrl.create(ViewProfilePage, {"Image": src}).present();
  }
}
