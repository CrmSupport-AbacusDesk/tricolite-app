import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { DbServiceService } from 'src/app/db-service.service';


@Component({
  selector: 'app-customerdocuments',
  templateUrl: './customerdocuments.page.html',
  styleUrls: ['./customerdocuments.page.scss'],
})
export class CustomerdocumentsPage implements OnInit {

  documentList: any = [];
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

  onGetDocumentList() {

        this.dbService.presentLoader();

        const inputData = {

        };

        this.isRequestInProcess = true;

        this.dbService.onPostRequestHandler(inputData, 'task/getDocumentList').subscribe((result) => {
              console.log(result);
              this.dbService.dismissLoader();

              if (result[`status`] == 'error') {

                    this.dbService.onShowAlertMessage('Error', result[`statusMessage`]);

              } else {

                  this.documentList = result[`documentList`];
                  this.masterDocList = result[`masterDocList`];
                  console.log(this.documentList);
                    console.log(this.masterDocList);
                                
              }

              this.isRequestInProcess = false;
        });
  }

  async onGetImageDataHandler(documentId, documentTitle) {

    const inputData = {
        documentId: documentId,
        documentTitle: documentTitle
    };

    this.dbService.presentLoader();

    this.dbService.onPostRequestHandler(inputData, 'task/getDocumentAllList').subscribe((result) => {

          console.log(result);

          this.dbService.dismissLoader();
          this.documentImageData = result[`documentImageData`];

          this.onViewImageHandler(0);
    });
}

async onViewImageHandler(index) {

  let imagePath;


  if (this.documentImageData[index].uploadFolderName && this.documentImageData[index].uploadFolderName == 'master')
   {
     if( this.documentImageData[index]['document_type']=='URL')
     {
     imagePath =  this.documentImageData[index].document_url;
       
     }
     else
     {
     
     imagePath = this.dbService.masterDocURL + this.documentImageData[index].document_url;
     console.log(imagePath);
     }

} 
else {

     imagePath = this.dbService.customerDocURL + this.documentImageData[index].document_url;
     console.log(imagePath);      
}

  window.open(imagePath, '_blank');

 //  this.photoViewer.show(imagePath);
}

}
