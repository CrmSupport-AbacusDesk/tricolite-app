import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, LoadingController, Loading, ModalController, Nav  } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { Storage } from '@ionic/storage';
import { SelectRegistrationTypePage } from '../../select-registration-type/select-registration-type';
import moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage 
{
  @ViewChild(Nav) nav: Nav;
  data:any={};
  state_list:any=[];
  district_list:any=[];
  city_list:any=[];
  pincode_list:any=[];
  selectedFile:any=[];
  file_name:any=[];
  karigar_id:any='';
  formData= new FormData();
  myphoto:any;
  profile_data:any='';
  loading:Loading;
  today_date:any;
  country_list:any=[];
  flag:boolean=true;  

  
  constructor(
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public service:DbserviceProvider,
              public alertCtrl:AlertController ,
              public actionSheetController: ActionSheetController,
              private loadingCtrl:LoadingController,
              private transfer: FileTransfer,
              public modalCtrl: ModalController,
              private storage:Storage) 
  {
    this.getstatelist();
    this.today_date = new Date().toISOString().slice(0,10);
    this.getcountrylist()   
  }
  
  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad RegistrationPage');
    this.data.mobile_no = this.navParams.get('mobile_no');
    this.data.type = this.navParams.get('loginType');
    // this.data.type = "Customer";
    console.log(this.data.type);
    
  }

  namecheck(event: any) 
  {
      const pattern = /[A-Z\+\-\a-z ]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) 
      {event.preventDefault(); }
  }

  MobileNumber(event: any) 
  {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) 
    {
            event.preventDefault();
    }
  }


  getcountrylist()
  {
    this.service.get_rqst('Login/country_list').subscribe( result =>
      {
        console.log(result);
        this.country_list=result['country_list'];
        console.log(this.country_list);
        
      });
  }
  
  getstatelist()
  {
    this.service.get_rqst('Login/getStates').subscribe( result =>
      {
        console.log(result);
        this.state_list=result['state_list'];
        console.log(this.state_list);
      });
  }
    
  getDistrictList(state_name)
  {
      console.log(state_name);
      this.service.post_rqst({'state_name':state_name},'Login/getDistrict').subscribe( result =>
        {
          console.log(result);
          this.district_list=result['district_list'];
          console.log(this.state_list);
        });
  }

  submit()
  {
    if(this.data.dob)
    {
      this.data.dob = moment(this.data.dob).format('YYYY-MM-DD');
    }
    if(this.data.doa)
    {
      this.data.doa = moment(this.data.doa).format('YYYY-MM-DD');
    }

    this.service.post_rqst( {'data': this.data },'Login/submit_registration').subscribe( result =>
    {
      console.log(result);
      if(result['msg'] == 'exist')
      {
        this.showAlert("Account with This Number Already Exist");
        return;
      }
      if(result['msg'] == 'success')
      {
        this.showSuccess("Registered Successfully. Now you can login with this number");
        // this.nav.setRoot(SelectRegistrationTypePage);
        this.navCtrl.push(SelectRegistrationTypePage)
      }
      if(result['msg'] == 'error')
      {
        this.showAlert("Something Went Wrong...!! Try again later");
        return;
      }
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
            
  showAlert(text) 
  {
      let alert = this.alertCtrl.create({
                title:'Alert!',
                cssClass:'action-close',
                subTitle: text,
                buttons: ['OK']
              });
      alert.present();
  }

      
  // submit()
  // {
  //         console.log(this.selectedFile);
  //         this.presentLoading();
  //         console.log('data');
  //         this.data.type = this.navParams.get('loginType');
  //         if(this.data.type == 'Customer')
  //         {
  //           this.data.status='Verified';
  //           // console.log(this.data.dealer_status);
  //         }
  //         else{
            
  //           this.data.status='Pending';
  //         }
  //         console.log(this.data);
  //         this.data.karigar_edit_id='';
          
  //         this.service.post_rqst( {'karigar': this.data },'app_karigar/addKarigar').subscribe( r =>
  //           {
  //             console.log(r);
  //             this.loading.dismiss();
  //             this.karigar_id=r['id'];
  //             console.log(this.karigar_id);
              
  //             if(r['status']=="SUCCESS")
  //             {
  //               console.log('if');
  //               // this.showSuccess("Registered Successfully!");
  //               this.service.post_rqst({'mobile_no': this.data.mobile_no ,'mode' :'App'},'auth/login').subscribe( r =>
  //                 {
  //                   console.log(r);
  //                   if(r['status'] == 'NOT FOUND'){
                      
  //                     return;
  //                   } else if(r['status'] == 'ACCOUNT SUSPENDED'){
                      
  //                     this.showAlert("Your account has been suspended");
  //                     return;
                      
  //                   }
  //                   else if(r['status'] == 'SUCCESS')
  //                   {
  //                     this.storage.set('token',r['token']); 
  //                     this.storage.set('loginType','CMS'); 
  //                     this.service.karigar_id=r['user'].id;
  //                     this.service.karigar_status=r['user'].status;
  //                     this.service.karigar_info=r['user'];
  //                     this.navCtrl.push(TabsPage);
                      
  //                     console.log(this.service.karigar_id);
                      
  //                     if( r['user'].status !='Verified')
  //                     {
  //                       let contactModal = this.modalCtrl.create(AboutusModalPage);
  //                       contactModal.present();
  //                       return;
  //                     }
  //                   }
                    
  //                 });
  //               }
  //               else if(r['status']=="EXIST")
  //               {
  //                 this.showAlert("Already Registered!");
  //               }
  //             });
  // }

  // caps_add(add:any)
  // {
  //     this.data.address = add.replace(/\b\w/g, l => l.toUpperCase());
  // }

  // openeditprofile()
  // {
  //             let actionsheet = this.actionSheetController.create({
  //               title:"Profile photo",
  //               cssClass: 'cs-actionsheet',
                
  //               buttons:[{
  //                 cssClass: 'sheet-m',
  //                 text: 'Camera',
  //                 icon:'camera',
  //                 handler: () => {
  //                   console.log("Camera Clicked");
  //                   this.takePhoto();
  //                 }
  //               },
  //               {
  //                 cssClass: 'sheet-m1',
  //                 text: 'Gallery',
  //                 icon:'image',
  //                 handler: () => {
  //                   console.log("Gallery Clicked");
  //                   this.getImage();
  //                 }
  //               },
  //               {
  //                 cssClass: 'cs-cancel',
  //                 text: 'Cancel',
  //                 role: 'cancel',
  //                 handler: () => {
  //                   console.log('Cancel clicked');
  //                 }
  //               }
  //             ]
  //           });
  //           actionsheet.present();
  // }

  // takePhoto()
  // {
  //           console.log("i am in camera function");
  //           const options: CameraOptions = {
  //             quality: 70,
  //             destinationType: this.camera.DestinationType.DATA_URL,
  //             targetWidth : 500,
  //             targetHeight : 400
  //           }
            
  //           console.log(options);
  //           this.camera.getPicture(options).then((imageData) => {
  //             this.data.profile = 'data:image/jpeg;base64,' + imageData;
  //             console.log(this.data.profile);
  //           }, (err) => {
  //           });
  // }

  // getImage() 
  // {
  //           const options: CameraOptions = {
  //             quality: 70,
  //             destinationType: this.camera.DestinationType.DATA_URL,
  //             sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //             saveToPhotoAlbum:false
  //           }
  //           console.log(options);
  //           this.camera.getPicture(options).then((imageData) => {
  //             this.data.profile = 'data:image/jpeg;base64,' + imageData;
  //             console.log(this.data.profile);
  //           }, (err) => {
  //           });
  // }
          
          
  // onUploadChange(evt: any) 
  // {
  //           // this.flag=false;
  //           // const file = evt.target.files[0];
            
  //           // if (file) {
  //           //   const reader = new FileReader();
            
  //           //   reader.onload = this.handleReaderLoaded.bind(this);
  //           //   reader.readAsBinaryString(file);
  //           // }
  //           let actionsheet = this.actionSheetController.create({
  //             title:" Upload File",
  //             cssClass: 'cs-actionsheet',
              
  //             buttons:[{
  //               cssClass: 'sheet-m',
  //               text: 'Camera',
  //               icon:'camera',
  //               handler: () => {
  //                 console.log("Camera Clicked");
  //                 this.takeDocPhoto();
  //               }
  //             },
  //             {
  //               cssClass: 'sheet-m1',
  //               text: 'Gallery',
  //               icon:'image',
  //               handler: () => {
  //                 console.log("Gallery Clicked");
  //                 this.getDocImage();
  //               }
  //             },
  //             {
  //               cssClass: 'cs-cancel',
  //               text: 'Cancel',
  //               role: 'cancel',
  //               handler: () => {
  //                 console.log('Cancel clicked');
  //               }
  //             }
  //           ]
  //         });
  //         actionsheet.present();
  // }

  // takeDocPhoto()
  // {
  //         console.log("i am in camera function");
  //         const options: CameraOptions = {
  //           quality: 70,
  //           destinationType: this.camera.DestinationType.DATA_URL,
  //           targetWidth : 500,
  //           targetHeight : 400
  //         }
          
  //         console.log(options);
  //         this.camera.getPicture(options).then((imageData) => {
  //           this.flag=false;
  //           this.data.document_image = 'data:image/jpeg;base64,' + imageData;
  //           console.log(this.data.document_image);
  //         }, (err) => {
  //         });
  // }

  // getDocImage()
  // {
  //         const options: CameraOptions = {
  //           quality: 70,
  //           destinationType: this.camera.DestinationType.DATA_URL,
  //           sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //           saveToPhotoAlbum:false
  //         }
  //         console.log(options);
  //         this.camera.getPicture(options).then((imageData) => {
  //           this.flag=false;
  //           this.data.document_image = 'data:image/jpeg;base64,' + imageData;
  //           console.log(this.data.document_image);
  //         }, (err) => {
  //         });
  // }

  // presentLoading() 
  // {
  //         this.loading = this.loadingCtrl.create({
  //           content: "Please wait...",
  //           dismissOnPageChange: true
  //         });
  //         this.loading.present();
  // }
        
}
      