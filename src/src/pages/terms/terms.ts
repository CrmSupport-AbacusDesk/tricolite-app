import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';


@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
  offer_id:any='';
  terms_detail:any={};
  loading:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
    this.offer_id=this.navParams.get('id');
    this.getTermsDetail(this.offer_id);
    this.presentLoading() 
  }
  getTermsDetail(offer_id)
  {
    console.log(offer_id);
   this.service.post_rqst({'offer_id':offer_id,'karigar_id':22},'app_karigar/offerTermCondition').subscribe(r=>
    {
      console.log(r);
      this.loading.dismiss();
      this.terms_detail=r['offer'];
    });
  }
  presentLoading() 
  {
    this.loading = this.loadingCtrl.create({
    content: "Please wait...",
    dismissOnPageChange: true
  });
  this.loading.present();
  }
  }

