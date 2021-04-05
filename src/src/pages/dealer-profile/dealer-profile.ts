import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ActionSheetController, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConstantProvider } from '../../providers/constant/constant';
import { MyserviceProvider } from '../../providers/myservice/myservice';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewProfilePage } from '../view-profile/view-profile';
import { PointLocationPage } from '../point-location/point-location';


@IonicPage()
@Component({
    selector: 'page-dealer-profile',
    templateUrl: 'dealer-profile.html',
})
export class DealerProfilePage {
    
    user_data:any={};
    type:any="";
    edit:Boolean = false;
    data:any={};
    karigar_id: any;
    state_list: any;
    district_list: any;
    // locationAccuracy: any;
    
    constructor(public navCtrl: NavController, public events: Events,public locationAccuracy: LocationAccuracy,public geolocation: Geolocation, public navParams: NavParams,public session:Storage,public constant:ConstantProvider,public db:MyserviceProvider,public service:DbserviceProvider,public toastCtrl:ToastController,public actionSheetController: ActionSheetController,private camera: Camera,public alertCtrl:AlertController,public modalCtrl: ModalController,public sanitizer: DomSanitizer)
    {
        
        this.user_data = this.constant.UserLoggedInData.all_data;
        this.get_details();
        if(this.user_data.type == "1")
        {
            this.type = "Distributor";
        }
        
        if(this.user_data.type == "3")
        {
            this.type = "Dealer";
        }
        
        if(this.user_data.type == "7")
        {
            this.type = "Direct Dealer";
        }
        console.log(this.user_data);
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad DealerProfilePage');
    }
    
    get_details()
    {
        this.db.show_loading()
        this.db.addData({"dr_id":this.user_data.id},"dealerData/getdetails")
        .then(resp=>{
            console.log(resp);
            this.data = resp;
            
            console.log(this.data.state);
            this.db.dismiss()
            this.getstatelist(); 
            this.getDistrictList(this.data.state);
        },err=>
        {
            this.db.dismiss()

        });
        
    }
    check_location()
    {
        this.navCtrl.push(PointLocationPage,{'lat':this.data.lat,'log':this.data.lng,mode:'Dealer'});
        // let alert=this.alertCtrl.create({
        //     title:'Are You Sure?',
        //     subTitle: 'You Want To Point Your Current Location ?',
        //     cssClass:'action-close',
            
        //     buttons: [{
        //         text: 'Cancel',
        //         role: 'cancel',
        //         handler: () => {
        //             this.db.presentToast('Action Cancelled')
        //         }
        //     },
        //     {
        //         text:'Confirm',
        //         cssClass: 'close-action-sheet',
        //         handler:()=>
        //         {
        //             this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
        //             .then(() => {
        //                 let options = {
        //                     maximumAge: 10000, timeout: 15000, enableHighAccuracy: true
        //                 };
        //                 this.geolocation.getCurrentPosition(options)
        //                 .then((resp) => {
        //                     var lat = resp.coords.latitude
        //                     var lng = resp.coords.longitude
        //                     this.db.addData({user_data:this.constant.UserLoggedInData,"lat":lat,"lng":lng},"dealerData/add_location")
        //                     .then(resp=>{
        //                         console.log(resp);
                                
        //                     })
        //                 },
        //                 error => {
        //                     console.log('Error requesting location permissions', error);
        //                     let toast = this.toastCtrl.create({
        //                         message: 'Allow Location Permissions',
        //                         duration: 3000,
        //                         position: 'bottom'
        //                     });
        //                     toast.present();
        //                 });
        //             });
        //         }
        //     }]
        // });
        // alert.present();
    }
    editProfilePage()
    {
        this.navCtrl.push(EditProfilePage,{'detail':this.data});
    }
    
    
    getstatelist()
    {
        this.service.get_rqst('dealerData/getStates')
        .subscribe( (r) =>
        {
            console.log(r);
            this.state_list=r['state_list'];
        });
    }
    
    getDistrictList(state_name)
    {
        console.log(state_name);
        this.service.post_rqst({'state_name':state_name},'dealerData/getDistrict')
        .subscribe((r) =>
        {
            console.log(r);
            this.district_list=r['district_list'];
        });
    }
    
    submit()
    {
        console.log(this.data);
        this.db.addData({"data":this.data},"dealerData/update_dealer")
        .then(resp=>{
            console.log(resp);
            if(resp)
            {
                this.db.presentToast("Success !");
                this.edit=false
                this.get_details()

                
                console.log(this.data.company_name);
                
                this.events.publish('dealerProfileUpdated',this.data.company_name)
                // this.navCtrl.push(DealerProfilePage);
            }
        })
    }
    
    MobileNumber(event: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    openeditprofile()
    {
        let actionsheet = this.actionSheetController.create({
            title:"Profile photo",
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
                handler: () => {
                    console.log('Cancel clicked');
                }
            }
        ]
    });
    actionsheet.present();
}
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
        this.user_data.profile = 'data:image/jpeg;base64,' + imageData;
        console.log(this.user_data.profile);
        if(this.user_data.profile)
        {
            this.uploadImage(this.user_data.profile);
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
        this.user_data.profile = 'data:image/jpeg;base64,' + imageData;
        console.log(this.user_data.profile);
        if(this.user_data.profile)
        {
            this.uploadImage(this.user_data.profile);
        }
    }, (err) => {
    });
}
uploadImage(profile)
{
    console.log(profile);
    // this.db.show_loading()
    this.db.addData( {'dr_id': this.user_data.id,'profile':profile },'dealerData/updateProfilePic').then(r =>
        {
            console.log(r);
            this.db.presentToast("Profile Photo Updated")   
            this.get_details()
            // this.db.dismiss()
        },
        err=>
        {
            // this.db.dismiss()
            this.db.errToasr()
        });
        
    }
    
    viewProfiePic()
    {
        this.modalCtrl.create(ViewProfilePage, {"Image": "http://phpstack-83335-1428632.cloudwaysapps.com/uploads/"+this.data.image}).present();
    }
    
}
