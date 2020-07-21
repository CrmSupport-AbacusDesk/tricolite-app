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
  selector: 'customer-document-detail',
  templateUrl: './customer-document-detail.page.html',
  styleUrls: ['./customer-document-detail.page.scss'],
})
export class CustomerDocumentDetailPage implements OnInit {

  documentId: any = '';
  documentTitle: any = '';
  documentImageData: any = [];

  constructor(public  popoverController: PopoverController,
              private actionCtrl: ActionSheetController,
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
                this.documentId = params.documentId;
                this.documentTitle = params.documentTitle;

                console.log(this.documentId);

                this.onGetImageDataHandler();
        });
  }

  ngOnInit() {


  }


  async onGetImageDataHandler() {

        const inputData = {
            documentId: this.documentId,
            documentTitle: this.documentTitle
        };

        this.dbService.presentLoader();

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentAllList').subscribe((result) => {

              console.log(result);

              this.dbService.dismissLoader();
              this.documentImageData = result[`documentImageData`];
        });
  }


  async onViewImageHandler(index) {

       let imagePath;
       if (this.documentImageData[index].uploadFolderName && this.documentImageData[index].uploadFolderName == 'master') {
             
            imagePath = this.dbService.masterDocURL + this.documentImageData[index].document_url;
            console.log(imagePath);

       } else {

            imagePath = this.dbService.customerDocURL + this.documentImageData[index].document_url;
            console.log(imagePath);

              
       }

       window.open(imagePath, '_blank');

      //  this.photoViewer.show(imagePath);
  }

}
