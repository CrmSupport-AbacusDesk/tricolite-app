import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AdvanceTextPage } from '../advance-text/advance-text';
import { NotificationPage } from '../notification/notification';
import { ContactPage } from '../contact/contact';
import { VideoPage } from '../video/video';
import { NewsPage } from '../news/news';
import { FeedbackPage } from '../feedback/feedback';
// import { ProductsPage } from '../products/products';
import { CategoryPage } from '../category/category';

import { AboutPage } from '../about/about';
import { Super30Page } from '../super30/super30';
import { VideoCategoryPage } from '../video-category/video-category';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { HomePage } from '../home/home';




@IonicPage()
@Component({
  selector: 'page-main-home',
  templateUrl: 'main-home.html',
})
export class MainHomePage {
	items = [
    'Advance Decorative Laminates'
  ];

  constructor(public navCtrl: NavController,public service:DbserviceProvider, public navParams: NavParams) {
    if(this.service.connection=='offline')
    {
      this.service.showOfflineAlert()
      this.navCtrl.setRoot(HomePage)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainHomePage');
  }

  goOnAboutPage(){
    this.navCtrl.push(AboutPage);
  }

  goOnNotificationPage(){
    this.navCtrl.push(NotificationPage);
  }

  goOnContactPage(){
    this.navCtrl.push(ContactPage);
  }

  goOnVideoPage(){
    this.navCtrl.push(VideoCategoryPage);
  }

  goOnNewsPage(){
    this.navCtrl.push(NewsPage);
  }

  goOnFeedbackPage(){
    this.navCtrl.push(FeedbackPage);
  }

  goOnProductsPage(){
    this.navCtrl.push(CategoryPage);
  }

  goOnSuper30Page(){
    this.navCtrl.push(Super30Page);
  }

}
