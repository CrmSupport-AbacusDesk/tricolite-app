import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController, AlertController, Loading, Alert } from 'ionic-angular';
import { Camera ,CameraOptions} from '@ionic-native/camera';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { TabsPage } from '../../tabs/tabs';
import { MediaCapture, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture';
import { FileTransfer, FileUploadOptions,FileTransferObject } from '@ionic-native/file-transfer';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { DomSanitizer } from '@angular/platform-browser';
import { PointLocationPage } from '../../point-location/point-location';
// import { IonicSelectableComponent } from 'ionic-selectable';/

/**
 * 
 * Generated class for the AddNewComplaintPage page.
 *,
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-complaint',
  templateUrl: 'add-new-complaint.html',
})
export class AddNewComplaintPage {
  complaint_data:any = {};
  loading:Loading;
  isCameraEnabled 		: boolean 	= false;
  categoryArr:any = [];
  subCategoryArr:any=[]
  productArr:any=[];
  // fileChooser: any;
  data:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetController: ActionSheetController, private camera: Camera ,public service:DbserviceProvider,public loadingCtrl:LoadingController , public alertCtrl:AlertController, private mediaCapture: MediaCapture ,private transfer: FileTransfer, public diagnostic  : Diagnostic, public androidPermissions: AndroidPermissions,public dom:DomSanitizer) {
    this.data.type  =this.navParams.get('type');
    console.log(this.navParams.data.type)
    console.log(this.navParams.get('type'))
    console.log(this.data.type);
    this.getcategoryData();
  }

  ionViewDidLoad() {
    this.getGeo();
    console.log('ionViewDidLoad AddNewComplaintPage');
    this.isCameraAvailable();
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
  getcategoryData()
  {
    this.service.post_rqst({},'app_karigar/getCategory').subscribe(r=>
      {
        console.log(r)
        
        this.categoryArr = r.categoryData;
      },err=>
      {
        
      })
  }
  getSubcategoryData(category)
  {
    console.log(category.main_category);
    this.service.post_rqst({category:category.main_category},'app_karigar/getSubCategory').subscribe(r=>
      {
        console.log(r)
        
        this.subCategoryArr = r.subCategoryData;
      },err=>
      {
        
      })
  }
  getProductData(subcategory)
  {
    console.log(subcategory.id);
    this.service.post_rqst({subcategory:subcategory.id},'app_karigar/getProduct').subscribe(r=>
      {
        console.log(r)
        
        this.productArr = r.productData;
      },err=>
      {
        
      })
  }
  getGeo()
  {
    
    this.presentLoading() ;
    this.service.post_rqst( {'id' : this.service.karigar_id },'app_karigar/getGeoLocation').subscribe( r  =>
      {

        this.loading.dismiss();
        
          if( r.status == 'NOT FOUND' ){
            this.showAlert('Please Update GEO location!');
            this.navCtrl.push(PointLocationPage);
            return;
          }


          
      });
    }

  isCameraAvailable()
  {
     this.diagnostic.isCameraPresent()
     .then((isAvailable : any) =>
     {
        this.isCameraEnabled = true;
     })
     .catch((error :any) =>
     {
        console.dir('Camera is:' + error);
     });
  }
  
 

  captureMedia()
  {
    if(this.videoId)
    {
        this.captureImageVideo();
    }
   else
    {
      let actionsheet = this.actionSheetController.create({
        title:"Upload",
        cssClass: 'cs-actionsheet',
        
        buttons:[{
          cssClass: 'sheet-m',
          text: 'Image',
          icon:'camera',
          handler: () => {
            console.log("Image Clicked");
            this.captureImageVideo();
          }
        },
        {
          cssClass: 'sheet-m1',
          text: 'Video',
          icon:'image',
          handler: () => {
            console.log("Video Clicked");
            this.onGetCaptureVideoPermissionHandler();
          }
        },
        {
          cssClass: 'cs-cancel',
          text: 'Cancel',
          role: 'cancel',
          icon:'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionsheet.present();

    }
  
  }


  captureImageVideo()
  {
    let actionsheet = this.actionSheetController.create({
      title:"Complaint Media",
      cssClass: 'cs-actionsheet',
      
      buttons:[{
        cssClass: 'sheet-m',
        text: 'Camera',
        icon:'camera',
        handler: () => {
          console.log("Camera Clicked");
          
            this.takePhoto();
        }
      },
      {
        cssClass: 'sheet-m1',
        text: 'Gallery',
        icon:'image',
        handler: () => {
          console.log("Gallery Clicked");         
            this.getImage();
        }
      },
      {
        cssClass: 'cs-cancel',
        text: 'Cancel',
        role: 'cancel',
        icon:'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionsheet.present();
  }



image:any='';
  takePhoto()
  {
    console.log("i am in camera function");
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth : 500,
      targetHeight : 400
    }
    
    console.log(options);
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      // this.image=  imageData;
      // this.image= imageData.substr(imageData.lastIndexOf('/') + 1);
      console.log(this.image);
      if(this.image)
      {
          this.fileChange(this.image);
      }
    }, (err) => {
    });
  }
  getImage() 
  {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    console.log(options);
    this.camera.getPicture(options).then((imageData) => {
      this.image= 'data:image/jpeg;base64,' + imageData;
      // this.image=  imageData;
      // this.image= imageData.substr(imageData.lastIndexOf('/') + 1);
      console.log(this.image);
      if(this.image)
      {
          this.fileChange(this.image);
      }
    }, (err) => {
    });
  }

  videoId: any;
  flag_upload = true;
  flag_play = true;
  getVideo()
   {
    // this.fileChooser.open()
    // .then(uri => {
    // this.videoId = uri;
    // this.flag_play = false;
    // this.flag_upload = false;
    // })
    // .catch(e => console.log(e));
    }


 

  image_data:any=[];
 

  fileChange(img)
 {

     this.image_data.push(img);
      console.log(this.image_data);
      this.image = '';
 }
  
  remove_image(i:any)
  {
    this.image_data.splice(i,1);
  }

  genrateCompliant(){

    // if(this.data.type=='Installation')
    // {
      this.complaint_data.type=this.data.type;
    //   // this.complaint_data.nature_problem = 'Installation of '+this.data.product_name+' of category '+this.data.main_category;
    //   this.complaint_data.subcat=this.data.category_name;
    //   this.complaint_data.cat=this.data.main_category;
    //   this.complaint_data.product=this.data.product_name;
    // }
    // else{
    //   this.complaint_data.type=this.data.type;
    //   this.complaint_data.subcat='';
    //   this.complaint_data.cat='';
    //   this.complaint_data.product='';
    // }

    this.complaint_data.image = this.image_data?this.image_data:[];
    console.log( this.videoId );
    
    if((!this.complaint_data.image.length && !this.videoId) && (this.data.type!='Installation')){
      alert('Please choose at least one image or video');
      return;
    }
    this.complaint_data.customer_id = this.service.karigar_id;
    this.complaint_data.created_by = '0';
    console.log(this.complaint_data);
    
    this.service.post_rqst( {'complaint':this.complaint_data },'app_karigar/addComplaint').subscribe(result =>
      {
        console.log(result);

        this.loading.dismiss();
        this.showSuccess("Complaint Added Successfully!");
        this.navCtrl.setRoot(TabsPage,{index:'0'});

        console.log( this.videoId );
        
 
        
      });
      
  }

  formData = new FormData();

  submit()
  {
    this.presentLoading();
    if(this.videoId){
      this.uploadVideo();
    }else{
      this.genrateCompliant();
    }

    
  }


    onGetCaptureVideoPermissionHandler() {

      console.log('start');
    
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
        result => {
          if (result.hasPermission) {
            
                   console.log('hello111');
                
                   this.capturevideo();

          } else {
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
              if (result.hasPermission) {

                  console.log('hello222');
                         
                   this.capturevideo();
                     
              }
            });
          }
        },
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      );
      


       
    }

    capturevideo()
    {
            let options: CaptureVideoOptions = { limit: 1 };
            this.mediaCapture.captureVideo(options)
            .then((videodata: MediaFile[]) => {
              console.log(videodata);
              
            var i, path, len,name;
            for (i = 0, len = videodata.length; i < len; i += 1) 
            {
                  path = videodata[i].fullPath;
                  name = videodata[i].name;
                  // do something interesting with the file
            }
            this.videoId = path;
            this.flag_play = false;
            this.flag_upload = false;
            console.log(videodata);

         
            });
     }

     remove_video()
     {
       this.videoId='';
     }
     video_data:any=[];

     videoChange(video)
     {
       this.video_data.push(video);
       console.log(this.video_data);
       
   
     }



    uploadVideo() 
    {

      const fileTransfer: FileTransferObject = this.transfer.create();
      let options1: FileUploadOptions = 
      {
            fileKey: 'video_upload_file',
            fileName: this.videoId,
            headers: {},
            mimeType: "multipart/form-data",
            params: { },
            chunkedMode: false
      }
      console.log(this.videoId);
      console.log(options1);
      console.log('start');
      


      fileTransfer.upload(this.videoId,"http://phpstack-83335-1428632.cloudwaysapps.com/dd_api/app/uploadVideos.php", options1)
      .then((data :any) => {

        var d = JSON.parse(data.response)
        console.log(data.response);
        console.log(data.response.status);

          if(d.status == 'Success' ){
              this.complaint_data.video_name = d.video_name; 
              this.genrateCompliant();
          }

          if( d.status== 'Failed' ){
            this.loading.dismiss();
            this.showSuccess("Uploading Failed!");

          }
          if( d.status == 'Wrong' ){
            this.loading.dismiss();
            this.showSuccess("Somthing went Wrong!");

          }

          

   

            console.log(data);
        
            // this.loading.dismissAll();
            this.flag_upload = true;
            // this.showToast('middle', 'Video is uploaded Successfully!');
      }, (err) => {
      // error
          console.log("vid err");
          console.log(JSON.stringify(err));
          
          alert('err'+ JSON.stringify(err));
      });
      // this.presentLoading();

  
    }
      
  
    showSuccess(text)
    {
      let alert = this.alertCtrl.create({
        title:'Success!',
        subTitle: text,
        buttons: ['OK']
      });
      alert.present();
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


// takePhoto()
// {
//   console.log("i am in camera function");
//   const options: CameraOptions = {
//     quality: 70,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     mediaType: this.camera.MediaType.ALLMEDIA,
//     targetWidth : 500,
//     targetHeight : 400
//   }
  
//   console.log(options);
//   this.camera.getPicture(options).then((imageData) => {
//     this.image = imageData;
//     console.log(this.image);
//     if(this.image)
//     {
//         this.fileChange(this.image);
//     }
//   }, (err) => {
//   });
// }

// getImage() 
// {
//   const options: CameraOptions = {
//     quality: 70,
//     destinationType: this.camera.DestinationType.FILE_URI,
//     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//     mediaType: this.camera.MediaType.ALLMEDIA,
//     saveToPhotoAlbum:false
//   }
//   console.log(options);
//   this.camera.getPicture(options).then((imageData) => {
//     this.image=imageData;
//     console.log(this.image);
//     if(this.image)
//     {
//         this.fileChange(this.image);
//     }
//   }, (err) => {
//   });
// }