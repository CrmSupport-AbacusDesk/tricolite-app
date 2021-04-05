import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ActionSheetController } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TabsPage } from '../tabs/tabs';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
* Generated class for the EditProfilePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  
  data:any={};
  karigar_id: any;
  state_list: any;
  district_list: any;
  district_list1: any;
  
  today_date:any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:DbserviceProvider,public alertCtrl:AlertController,public actionSheetController: ActionSheetController,private camera: Camera)
  {
    this.data = this.navParams.get('detail');
    this.today_date = new Date().toISOString().slice(0,10);
    console.log(this.data);
    
    this.getstatelist(); 
    this.getDistrictList(this.data.state);
    this.getDistrictList1(this.data.permanent_state);
    
    
    
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  
  
  getstatelist()
  {
    this.service.get_rqst('app_master/getStates').subscribe( r =>
      {
        console.log(r);
        this.state_list=r['states'];
        this.karigar_id=r['id'];
        console.log(this.state_list);
      });
    }
    
    getDistrictList(state_name)
    {
      console.log(state_name);
      this.service.post_rqst({'state_name':state_name},'app_master/getDistrict').subscribe( r =>
        {
          console.log(r);
          this.district_list=r['districts'];
          console.log(this.state_list);
        });
      }
      
      getDistrictList1(state_name)
      {
        console.log(state_name);
        this.service.post_rqst({'state_name':state_name},'app_master/getDistrict').subscribe( r =>
          {
            console.log(r);
            this.district_list1=r['districts'];
            console.log(this.state_list);
          });
        }
        
        onUploadChange(evt: any) {
          let actionsheet = this.actionSheetController.create({
            title:" Upload File",
            cssClass: 'cs-actionsheet',
            
            buttons:[{
              cssClass: 'sheet-m',
              text: 'Camera',
              icon:'camera',
              handler: () => {
                console.log("Camera Clicked");
                this.takeDocPhoto();
              }
            },
            {
              cssClass: 'sheet-m1',
              text: 'Gallery',
              icon:'image',
              handler: () => {
                console.log("Gallery Clicked");
                this.getDocImage();
              }
            },
            {
              cssClass: 'cs-cancel',
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionsheet.present();
      }
      
      takeDocPhoto()
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
          this.flag=false;
          this.data.document_image = 'data:image/jpeg;base64,' + imageData;
          console.log(this.data.document_image);
          
        }, (err) => {
        });
      }
      getDocImage()
      {
        const options: CameraOptions = {
          quality: 70,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
          saveToPhotoAlbum:false
        }
        console.log(options);
        this.camera.getPicture(options).then((imageData) => {
          this.flag=false;
          this.data.document_image = 'data:image/jpeg;base64,' + imageData;
          console.log(this.data.document_image);
        }, (err) => {
        });
      }
      
      
      
      submit()
      {
        this.data.karigar_edit_id= this.data.id;
        this.service.post_rqst( {'karigar':this.data },'app_karigar/addKarigar').subscribe( r =>
          {
            console.log(r);
            // if(r['status'] == 'EXIST')
            // {
            //   this.showAlert("Already EXIST!");
            //   return;
            
            // }
            
            this.showSuccess("Profile Updated Successfully!");
            this.navCtrl.setRoot(TabsPage,{index:'0'});
            
            
            
          },err=>{
            this.showSuccess("Profile Updated Successfully!");
            this.navCtrl.setRoot(TabsPage,{index:'0'});
            
          });
        }
        
        onCheckShippingAddressSameAsAddressHandler(event) {       
          
          console.log(event);
          
          if (event.checked) {
            
            this.data.permanent_state = this.data.state;
            this.data.parmanent_district = this.data.district;
            this.data.permanent_pincode = this.data.pincode;         
            this.data.permanent_city = this.data.city;
            this.data.permanent_address = this.data.address;
            this.getDistrictList1( this.data.permanent_state );
            
          } else {
            
            this.data.permanent_state = '';
            this.data.parmanent_district = '';
            this.data.permanent_pincode = '';
            this.data.permanent_city = '';
            this.data.permanent_address = '';
            
          }
        }
        
        MobileNumber(event: any) {
          const pattern = /[0-9]/;
          let inputChar = String.fromCharCode(event.charCode);
          if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
          }
        }
        
        caps_add(add:any)
        {
          this.data.address = add.replace(/\b\w/g, l => l.toUpperCase());
        }
        
        namecheck(event: any) 
        {
          const pattern = /[A-Z\+\-\a-z ]/;
          let inputChar = String.fromCharCode(event.charCode);
          if (event.keyCode != 8 && !pattern.test(inputChar)) 
          {event.preventDefault(); }
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
        
        showAlert(text) {
          let alert = this.alertCtrl.create({
            title:'Alert!',
            cssClass:'action-close',
            subTitle: text,
            buttons: ['OK']
          });
          alert.present();
        }
        flag:boolean=true;  
        
        
        
        
        
        
        
      }
      