import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { TecCompliantPopoverComponent } from '../tec-compliant-popover/tec-compliant-popover.component';

import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { DbServiceService } from 'src/app/db-service.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Location } from '@angular/common';


@Component({
  selector: 'app-com-images',
  templateUrl: './com-images.page.html',
  styleUrls: ['./com-images.page.scss'],
})
export class ComImagesPage implements OnInit {

  taskId: any = '';
  taskNo: any = '';
  imageData: any = [];

  taskImageData: any = [];

  constructor(public  popoverController: PopoverController,
              private actionCtrl: ActionSheetController,
              private location: Location,
              private router: Router,
              public  routeParams: ActivatedRoute,
              public  alertCtrl: AlertController,
              public  toastCtrl: ToastController,
              private diagnostic: Diagnostic,
              public  camera: Camera,
              private imagePicker: ImagePicker,
              private base64: Base64,
              public dbService: DbServiceService,
              private photoViewer: PhotoViewer) {

        this.routeParams.params.subscribe(params => {

              console.log(params);
              this.taskId = params.taskId;
              this.taskNo = params.taskNo;

              console.log(this.taskId);
              console.log(this.taskNo);

              this.onGetTaskImageDataHandler();
        });
  }

  ngOnInit() {

  }


  async onGetTaskImageDataHandler() {

        const inputData = {
              taskId: this.taskId
        };

        this.dbService.presentLoader();

        this.dbService.onPostRequestHandler(inputData, 'task/getTaskImageData').subscribe((result) => {

              console.log(result);

              this.dbService.dismissLoader();
              this.taskImageData = result[`taskImageData`];
        });
  }


  async onSaveImageDataHandler() {

          const uploadData: any = [];
          let documentData = {};
          console.log(this.imageData);

          for (let j = 0; j < this.imageData.length; j++)  {

                documentData = new FormData;

                const binaryDataSplit = this.imageData[j].image.split('base64,');


                const randomName = Math.random().toString(36).substring(7);
                documentData[`binaryData`] = binaryDataSplit[1];
                documentData[`taskId`] = this.taskId;
                uploadData.push(documentData);
          }

          const inputData = {
              taskId: this.taskId,
              uploadData: uploadData
          };

          console.log(inputData);

          this.dbService.presentLoader();

          this.dbService.onPostRequestHandler(inputData, 'task/onSaveTaskImagesData').subscribe((result) => {

                console.log(result);
                this.dbService.dismissLoader();

                this.dbService.presentToast('Image Saved Successfully!');

                setTimeout(() => {

                  this.onGetTaskImageDataHandler();
                  
                }, 1000);
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
              maximumImagesCount: 10,
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

  async onViewImageHandler(index) {

       const imagePath = this.dbService.uploadURL + this.taskImageData[index].image_url;
       console.log(imagePath);
       this.photoViewer.show(imagePath);
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


  onRemoveImageHandler(index: any) {
      this.imageData.splice(index, 1);
  }


  async presentPopover(ev: any) {

    const taskData = {
        taskId: this.taskId,
        taskNo: this.taskNo
    };

    const popover = await this.popoverController.create({
        component: TecCompliantPopoverComponent,
        event: ev,
        translucent: true,
        componentProps: taskData
    });

    return await popover.present();
  }

  GoComplaintDetail() {
      this.location.back();
  }

}
