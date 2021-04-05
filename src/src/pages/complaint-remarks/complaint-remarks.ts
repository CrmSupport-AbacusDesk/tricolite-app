import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';

/**
 * Generated class for the ComplaintRemarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaint-remarks',
  templateUrl: 'complaint-remarks.html',
})
export class ComplaintRemarksPage {
  loading:Loading;
  complaint_remark:any=[];
  complaint_id:any='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController) 
  {
    this.complaint_id = this.navParams.get('id');
    this.getComplaintRemark(); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintRemarksPage');

  }

  presentLoading() 
  {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  doRefresh(refresher) 
  {
    console.log('Begin async operation', refresher);
    this.getComplaintRemark(); 
    refresher.complete();
  }

  getComplaintRemark()
  {
    this.service.post_rqst( {'complaints_id':this.complaint_id},'app_karigar/getComplaintHistoryRemark').subscribe(response =>
      {
        console.log(response);
        this.complaint_remark = response.complaintHistory;
        

      });

  }

}
