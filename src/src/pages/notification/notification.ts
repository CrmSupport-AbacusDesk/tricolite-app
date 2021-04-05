import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
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
