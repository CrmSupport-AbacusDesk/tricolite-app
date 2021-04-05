import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, LoadingController, Loading, ModalController  } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TabsPage } from '../tabs/tabs';
import { PulmberCustomerDetailPage } from '../plumber-camplaints/pulmber-customer-detail/pulmber-customer-detail';




@IonicPage()
@Component({
  selector: 'page-task-close',
  templateUrl: 'task-close.html',
})
export class TaskClosePage {
  status:any={};
  loading:Loading;
  today_date:any;
  complaint_id;
  customerMobileNo;
  lable;
  constructor(public service:DbserviceProvider,public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController ,public actionSheetController: ActionSheetController,private camera: Camera,private loadingCtrl:LoadingController,private transfer: FileTransfer,public modalCtrl: ModalController,private storage:Storage) 
  {
    // this.data.gender="male";
    this.today_date = new Date().toISOString().slice(0,10);
    this.status.complaints_id = this.navParams.get('id');
    this.customerMobileNo = this.navParams.get('mobile');
    this.status.name = this.navParams.get('name');
    this.lable = this.navParams.get('lable');
    console.log(this.lable);
    
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskClosePage');
    

  }
  
  submit()
  {
     this.presentLoading() 
    this.status.closed_by = this.service.karigar_id;
    this.status.status=this.lable;
    this.service.post_rqst({'status' : this.status},'app_karigar/complaintTaskCloseByPlumber').subscribe( r =>
      {
        console.log(r);
        this.loading.dismiss();

        if(r['status'] == 'success')
        {
          if(this.lable=='Closed')
          {
            this.showSuccess("Complaint Closed Successfully ");

          }
          else
          {
            this.showSuccess("Remark Added Successfully ");

          }
          this.navCtrl.setRoot(TabsPage,{index:'0'});
        // this.navCtrl.push( PulmberCustomerDetailPage,{'id':this.status.complaints_id});
        }
        else if(r['status'] == 'Otp not matched.')
        {
          this.showAlert('Wrong Otp');
        }
      });

  }

  showAlert(text) {
    let alert = this.alertCtrl.create({
      title:'Alert!',
      cssClass:'action-close',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
    
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

  MobileNumber(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
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
