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
  selector: 'tech-document-detail',
  templateUrl: './tech-document-detail.page.html',
  styleUrls: ['./tech-document-detail.page.scss'],
})
export class TechDocumentDetailPage implements OnInit {

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
            documentId: this.documentId
        };

        this.dbService.presentLoader();

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentAllList').subscribe((result) => {

              console.log(result);

              this.dbService.dismissLoader();
              this.documentImageData = result[`documentImageData`];
        });
  }


  async onViewImageHandler(index) {

       const imagePath = this.dbService.masterDocURL + this.documentImageData[index].document_url;
       console.log(imagePath);
       this.photoViewer.show(imagePath);
  }

}
