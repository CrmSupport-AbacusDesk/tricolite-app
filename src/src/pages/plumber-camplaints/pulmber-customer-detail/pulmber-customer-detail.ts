import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController } from 'ionic-angular';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { TaskClosePage } from '../../task-close/task-close';
import { ViewProfilePage } from '../../view-profile/view-profile';
import { DomSanitizer } from '@angular/platform-browser';
import { PointLocationPage } from '../../point-location/point-location';
import { GeolocationOptions } from '@ionic-native/geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { ComplaintRemarksPage } from '../../complaint-remarks/complaint-remarks';



/**
 * Generated class for the ComplaintDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-pulmber-customer-detail',
  templateUrl: 'pulmber-customer-detail.html',
})
export class PulmberCustomerDetailPage {
  complaint_id:any='';
  plumber_detail:any={};
  complaint_media:any=[];
  loading:Loading;
  new_long: any;
  new_lat: any;
  remark_count:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public loadingCtrl:LoadingController ,public modalCtrl: ModalController, public sanitizer: DomSanitizer ,public geolocation: Geolocation,private launchNavigator: LaunchNavigator) {
  }

  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PulmberCustomerDetailPage');
    this.presentLoading();
    this.complaint_id = this.navParams.get('id');
    this.getPlumberDetail(this.complaint_id);
  }

  presentLoading() 
  {
    this.loading = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  getPlumberDetail(id)
  {
   
    this.service.post_rqst( {'complaints_id':id},'app_karigar/getComplaintbyId').subscribe(response =>
      {
        console.log(response);
        this.loading.dismiss();
        this.plumber_detail = response['complaintDetails'];
        this.complaint_media = response['complaintDetails']['image'] ;
        this.remark_count =response.complaintHistoryCount;
        // console.log(this.complaint_list);
        
        // this.showSuccess("Profile Photo Updated")  
        
        for (let i = 0; i < this.complaint_media.length; i++) {
          this.complaint_media[i].file_name =  this.sanitizer.bypassSecurityTrustResourceUrl( this.service.url+'app/uploads/'+this.complaint_media[i].file_name  );
        
      }
      });
 
  }

  viewComplaintImage(i)
  {
    this.modalCtrl.create(ViewProfilePage, {"Image": this.complaint_media[i].file_name}).present();
  }

  goToTaskPage(lable)
  {
    this.navCtrl.push( TaskClosePage,{'id':this.plumber_detail.complaintId,'mobile':this.plumber_detail.customerMobileNo,'name':this.plumber_detail.customerName,'lable':lable});
  }

  getDirection()
  {
    // this.navCtrl.push(PointLocationPage,{'lat':this.plumber_detail.cust_lat,'log':this.plumber_detail.cust_long,'old_loc':this.plumber_detail.cust_geo_address});

    this.geolocation.getCurrentPosition().then((resp) => {
      // let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
   
      this.new_lat=resp.coords.latitude;
      this.new_long=resp.coords.longitude;
      var latLong= this.new_lat+','+this.new_long;

      let options: LaunchNavigatorOptions = {
        start: latLong,
        // app: LaunchNavigator.APPS.UBER
      };
      
      this.launchNavigator.navigate(this.plumber_detail.cust_lat+','+this.plumber_detail.cust_long, options)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
  });

 }

 goToRemarkHistory()
 {
  this.navCtrl.push(ComplaintRemarksPage,{'id':this.plumber_detail.complaintId})
 }

}
