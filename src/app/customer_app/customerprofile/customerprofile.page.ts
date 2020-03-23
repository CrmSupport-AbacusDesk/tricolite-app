import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DbServiceService } from 'src/app/db-service.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.page.html',
  styleUrls: ['./customerprofile.page.scss'],
})
export class CustomerprofilePage implements OnInit {

  profileData: any = {};
  contactData: any = [];

  imageData: any = '';

  constructor(  private actionCtrl: ActionSheetController,
                private router: Router,
                public  routeParams: ActivatedRoute,
                public  alertCtrl: AlertController,
                public  toastCtrl: ToastController,
                private diagnostic: Diagnostic,
                public  camera: Camera,
                private imagePicker: ImagePicker,
                private base64: Base64,
                private photoViewer: PhotoViewer,
                public dbService: DbServiceService) {

        this.onGetProfileDataHandler();

  }

  ngOnInit() {

  }

  async onSaveImageDataHandler() {

      let uploadData;
      for (let j = 0; j < this.imageData.length; j++)  {

            const binaryDataSplit = this.imageData[j].image.split('base64,');
            uploadData = binaryDataSplit[1];
            console.log(uploadData);
      }

      const inputData = {
          uploadData: uploadData
      };

      console.log(inputData);

      this.dbService.presentLoader();

      this.dbService.onPostRequestHandler(inputData, 'login/onSaveProfileImagesData').subscribe((result) => {

            console.log(result);
  
            this.dbService.dismissLoader();
            this.dbService.presentToast('Profile Updated Successfully!');
            this.onGetProfileDataHandler();
      });
  }

  takePhotograph() {

    const successCallback = (isAvailable) => {

        this.camera.getPicture({

                quality: 40,
                targetWidth: 600,
                targetHeight: 600,
                destinationType : this.camera.DestinationType.DATA_URL,

        }).then((data) => {

                this.imageData = [];

                this.imageData.push({
                    image: 'data:image/jpeg;base64,' + data
                });

                console.log(this.imageData);
                this.onSaveImageDataHandler();

        });
    };

    const errorCallback = (e) => {
        console.log(e);
    };

    this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
  }

  selectImageFromGallery() {

      const successCallback = (isAvailable) => {

          console.log(isAvailable);

          const options = {
              maximumImagesCount: 1,
              DATA_URI: 1,
              quality: 40
          };

          this.imageData = [];
          this.imagePicker.getPictures(options).then((results) => {

              let imageCount = 1;
              for (var i = 0; i < results.length; i++) {

                  this.base64.encodeFile(results[i]).then((base64File: string) => {

                      console.log(base64File);
                      this.imageData.push({image: base64File});
                      console.log(this.imageData);

                      if (imageCount == results.length) {
                          this.onSaveImageDataHandler();
                      }

                      imageCount++;

                  }, (err) => {
                      console.log(err);
                  });
              }

          }, (err) => { });
      };

      const errorCallback = (e) => {
           console.log(e);
      };

      this.diagnostic.requestCameraAuthorization().then(successCallback).catch(errorCallback);
  }


  async presentActionSheet() {

      const actionSheet = await this.actionCtrl.create({
        header: 'Select image from',
        buttons: [{
          text: 'Camera',
          icon: 'camera',
          handler: () => {
              console.log('Camera Clicked');
              this.takePhotograph();
          }
          }, {
              text: 'Gallery',
              icon: 'image',
              handler: () => {
                  console.log('Gallery Clicked');
                  this.selectImageFromGallery();
              }
          }]
      });

      await actionSheet.present();
  }

  async onGetProfileDataHandler() {

      const inputData = {
        
      };

      this.dbService.presentLoader();

      this.dbService.onPostRequestHandler(inputData, 'login/onGetLoginUserCompleteDetail').subscribe((result) => {

            console.log(result);
            this.dbService.dismissLoader();
            this.profileData = result[`loginData`];
            console.log(this.profileData);
            
            this.contactData = result[`contactData`];
      });
  }

  async onViewImageHandler() {

        const imagePath = this.dbService.customerDocURL + this.profileData.image_url;
        console.log(imagePath);
        this.photoViewer.show(imagePath);
  }


}
