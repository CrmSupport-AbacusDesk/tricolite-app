import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CancelComplaintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancel-complaint',
  templateUrl: 'cancel-complaint.html',
})
export class CancelComplaintPage {
  complaint_id:any;
  complaint:any={};
  label:any;
  // amount:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public service:DbserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelComplaintPage');
    this.complaint_id=this.navParams.get('id');
    // this.label=this.navParams.get('label');
    console.log(this.complaint_id);
    

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
	// /
 

  submit()
  {

    this.service.post_rqst( {'id':this.complaint_id,'reason_cancel':this.complaint.remark,'customer_id':this.service.karigar_id },'app_karigar/cancelComplaintByCustomer').subscribe(result =>
      {
        console.log(result); 
         this.closeModal();
        // this.navCtrl.setRoot(TabsPage,{index:'0'});

        
      });

   
  }
}
