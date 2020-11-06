import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';

@Component({
  selector: 'app-tec-document',
  templateUrl: './tec-document.page.html',
  styleUrls: ['./tec-document.page.scss'],
})
export class TecDocumentPage implements OnInit {

  documentList: any = [];

  documentList1: any = [];


    masterDocList: any = [];
    isRequestInProcess: any = false;
    currentActiveTab: any;
    documentImageData: any = [];
  constructor(private route: Router,
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public dbService: DbServiceService) {

      this.currentActiveTab = 1;

  }

  ngOnInit() {

      this.onGetDocumentList();
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

    async onGetImageDataHandler(documentId, documentTitle, Doctype) {

        const inputData = {
            documentId: documentId,
            documentTitle: documentTitle,
            doc_type: Doctype
          
        };

        this.dbService.presentLoader();

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentAllList').subscribe((result) => {

            console.log(result);

            this.dbService.dismissLoader();
            this.documentImageData = result[`documentImageData`];

            this.onViewImageHandler(0);
        });
    }


  onGetDocumentList() {

        this.dbService.presentLoader();

        const inputData = {

        };

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
              console.log(result);
              this.dbService.dismissLoader();

              if (result[`status`] == 'error') {

                    this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

              } else {

                  this.documentList = result[`documentList`];


                  this.masterDocList = result[`customer_doc_in_technician`];

              }
        });

  }


  onGetDocumentList1(){



    this.dbService.presentLoader();

    const inputData = {

    };

    this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
          console.log(result);
          this.dbService.dismissLoader();

          if (result[`status`] == 'error') {

                this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

          } else {

              this.documentList1 = result[`customer_doc_in_technician`];
          }
    });

  }

}
