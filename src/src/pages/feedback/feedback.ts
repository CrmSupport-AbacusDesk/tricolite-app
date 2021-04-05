import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',

})
export class FeedbackPage {
  data:any={};
  rootPage:any='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public alertCtrl:AlertController,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  submitFeedback(data)
  {
    console.log('feedback');
    console.log(data);
    this.service.post_rqst({'karigar_id': this.service.karigar_id,'feedback':data},'app_karigar/feedback').subscribe( r =>
      {
        console.log(r);
        this.showSuccess(" Your feedback has been submitted sucessfully")
        this.navCtrl.setRoot(TabsPage,{index:'0'});
      });
  }

  showSuccess(text)
  {
    let alert = this.alertCtrl.create({
      title:'ThankYou!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLeave()
  {
      let nav = this.app.getActiveNav();
      if(nav && nav.getActive()) 
      {
          let activeView = nav.getActive().name;
          let previuosView = '';
          if(nav.getPrevious() && nav.getPrevious().name)
          {
              previuosView = nav.getPrevious().name;
          }  
          console.log(previuosView); 
          console.log(activeView);  
          console.log('its leaving');
          if((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' ||activeView =='MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage'  && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) 
          {
        
              console.log(previuosView);
              this.navCtrl.popToRoot();
          }
      }
   }
}
