import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { ViewProfilePage } from '../../view-profile/view-profile';
import { DomSanitizer  } from '@angular/platform-browser';
import { CancelComplaintPage } from '../../cancel-complaint/cancel-complaint';
/**
 * Generated class for the ComplaintDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaint-detail',
  templateUrl: 'complaint-detail.html',
})
export class ComplaintDetailPage {
  complaint_id:any='';
  complaint_detail:any={};
  complaint_media:any=[];
  loading:Loading;
	rating_star:any='';
  star:any='';
  amount:any={};

  constructor( public sanitizer: DomSanitizer  , public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController ,public modalCtrl: ModalController,public alertCtrl:AlertController ) {
  }


  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintDetailPage');
    this.presentLoading();
    this.complaint_id = this.navParams.get('id');
    this.getComplaintDetail(this.complaint_id);
  }

  presentLoading() 
  {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  getComplaintDetail(id)
  {
   
    this.service.post_rqst( {'complaints_id':id},'app_karigar/getComplaintbyId').subscribe(response =>
      {
        console.log(response);
        this.loading.dismiss();
        this.complaint_detail = response['complaintDetails'];
        this.complaint_media = response['complaintDetails']['image'] ;
        this.rating_star = response['complaintDetails']['rating'];               
        this.star = response['complaintDetails']['star'];               
        
        for (let i = 0; i < this.complaint_media.length; i++) {
            this.complaint_media[i].file_name =  this.sanitizer.bypassSecurityTrustResourceUrl( this.service.url+'app/uploads/'+this.complaint_media[i].file_name  );
          
        }

      });
 
  }

  rating(star)
		{
			this.presentLoading();
			console.log(star);
			this.service.post_rqst({'star':star,'customer_id':this.service.karigar_id ,'plumber_id':this.complaint_detail.plumberId,'complaint_id':this.complaint_detail.complaintId},'app_karigar/plumberRatingByCustomer').subscribe(r=>{
        console.log(r);
				this.getComplaintDetail(this.complaint_detail.complaintId);
				
			});
    }
    
    viewComplaintImage(i)
    {
      this.modalCtrl.create(ViewProfilePage, {"Image": this.complaint_media[i].file_name}).present();
    }

    cancelComplaint(label)
    {
      let complaintModal = this.modalCtrl.create(CancelComplaintPage,{'id': this.complaint_detail.complaintId,'label':label});

      complaintModal.onDidDismiss(data => {
          console.log(data);
          this.getComplaintDetail(this.complaint_detail.complaintId)
         

        });
        complaintModal.present();

    }

    saveAmount()
    {
      this.service.post_rqst( {'complaints_id':this.complaint_id,'amount':this.amount.payment},'app_karigar/customerPaidAmount').subscribe(result =>
        {
          console.log(result); 
          if(result['status']=="success")
              {
                this.showSuccess("Amount Added Successfully!");

              }
          //  this.closeModal();
          // this.navCtrl.setRoot(TabsPage,{index:'0'});
          this.getComplaintDetail(this.complaint_detail.complaintId)
          
        });
    }

    showSuccess(text)
            {
              let alert = this.alertCtrl.create({
                title:'Success!',
                cssClass:'action-close',
                subTitle: text,
                buttons: ['OK']
              });
              alert.present();
            }

}
